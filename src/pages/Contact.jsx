import { sendContactEnquiry } from '../lib/contact.js';
import { company } from '../content/company.js';
import { trackConversion } from '../lib/analytics.js';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';
import { useSEO } from '../hooks/useSEO.js';
const CONTACT_DETAILS = [
    { icon: Phone, label: 'Call us', value: company.phone, href: company.phoneHref },
    { icon: Mail, label: 'Email us', value: company.email, href: company.emailHref },
    { icon: MapPin, label: 'Location', value: company.location, href: null },
    { icon: Clock, label: 'Working hours', value: 'Mon - Sat, 9:00 AM - 6:00 PM', href: null },
];

const SUBJECT_OPTIONS = [
    'Software & IT Solutions',
    'Creative & Design Solutions',
    'Digital Marketing',
    'Student Zone',
    'Products in Development',
    'Other',
];

// Simple, dependable patterns — good enough to catch real mistakes without
// being overly strict (Indian numbers with/without +91, common punctuation etc.)
const NAME_REGEX = /^[^<>\r\n]{2,80}$/u;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_REGEX = /^(\+91[\s-]?)?[6-9]\d{9}$/;

function Contact() {
    useSEO('/contact');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const handleChange = (e) => {
        setSubmitted(false);
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        const fieldErrors = validate({ ...formData });
        if (fieldErrors[name]) {
            setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] }));
        }
    };

    const validate = (data) => {
        const newErrors = {};
        const name = data.name.trim();
        const email = data.email.trim();
        const phone = data.phone.trim();
        const message = data.message.trim();

        if (!name) {
            newErrors.name = 'Enter your name';
        } else if (!NAME_REGEX.test(name)) {
            newErrors.name = 'Name should be 2?80 characters';
        }

        if (!email) {
            newErrors.email = 'Enter your email';
        } else if (!EMAIL_REGEX.test(email)) {
            newErrors.email = 'Enter a valid email address';
        }

        // Phone is optional, but if the user types something, validate it properly
        if (phone && !PHONE_REGEX.test(phone.replace(/\s+/g, ''))) {
            newErrors.phone = 'Enter a valid 10-digit phone number';
        }

        if (!data.subject) {
            newErrors.subject = 'Select what you\'re looking for';
        }

        if (!message) {
            newErrors.message = 'Enter your message';
        } else if (message.length < 10) {
            newErrors.message = 'Message should be at least 10 characters';
        } else if (message.length > 2000) {
            newErrors.message = 'Message should be under 2000 characters';
        }

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (submitting || new FormData(e.currentTarget).get("website")) return;
        const newErrors = validate(formData);
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            document.getElementById(`contact-${Object.keys(newErrors)[0]}`)?.focus();
            return;
        }

        setSubmitted(false);
        setSubmitError('');
        setSubmitting(true);

        const payload = {
            name: formData.name.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim(),
            subject: formData.subject,
            message: formData.message.trim(),
        };

        try {
            await sendContactEnquiry(payload);

            setSubmitted(true);
            trackConversion('contact_form_success');
            setErrors({});
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        } catch {
            setSubmitError("Something went wrong. Please try again, or email us directly at team@rachrytechnolgies.in");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            {/* Hero */}
            <section className="relative overflow-hidden bg-[#050B18] pb-12 pt-28 sm:pb-16 sm:pt-36 lg:pb-20 lg:pt-48">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-1/4 top-1/4 h-56 w-56 sm:h-96 sm:w-96 rounded-full bg-[#2563EB]/15 blur-[80px] sm:blur-[120px]" />
                    <div className="absolute right-1/4 top-1/3 h-56 w-56 sm:h-96 sm:w-96 rounded-full bg-[#7C3AED]/15 blur-[80px] sm:blur-[120px]" />
                </div>

                <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 text-center sm:px-8 lg:px-12">
                    <p className="mb-4 sm:mb-6 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#38BDF8]">
                        Contact
                    </p>

                    <h1 className="mx-auto max-w-3xl text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] tracking-tight text-white lg:text-6xl">
                        Get{' '}
                        <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
                            in touch
                        </span>
                    </h1>

                    <p className="mx-auto mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-[#94A3B8] lg:text-xl">
                        Tell us about a business project, ask about student opportunities, or get in touch about our products in development.
                    </p>
                </div>
            </section>

            {/* Form + Details */}
            <section className="relative overflow-hidden bg-[#050B18] pb-16 pt-4 sm:pb-24 sm:pt-6 lg:pb-32 lg:pt-8">
                <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
                    <div className="mx-auto grid max-w-6xl gap-6 sm:gap-10 lg:grid-cols-[1.1fr_1fr]">

                        {/* Form */}
                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-8 lg:p-10">
                            {submitted && (
                                <div role="status" className="mb-5 sm:mb-6 rounded-2xl border border-[#38BDF8]/30 bg-[#38BDF8]/10 px-4 py-3 sm:px-5 sm:py-4 text-sm text-[#38BDF8]">
                                    Thanks for reaching out. We'll get back to you soon.
                                </div>
                            )}

                            {submitError && (
                                <div role="alert" className="mb-5 sm:mb-6 rounded-2xl border border-[#F87171]/30 bg-[#F87171]/10 px-4 py-3 sm:px-5 sm:py-4 text-sm text-[#F87171]">
                                    {submitError}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} noValidate aria-busy={submitting}><div hidden><label htmlFor="website">Leave empty</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
                                <div className="grid gap-5 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-[#CBD5E1]">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="contact-name" autoComplete="name" maxLength={80} required name="name" aria-describedby={errors.name ? "error-name" : undefined}
                                            value={formData.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder="Your full name"
                                            aria-invalid={!!errors.name}
                                            className={`w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-[#64748B] outline-none transition-colors duration-300 focus:border-[#2563EB]/50 ${errors.name ? 'border-[#F87171]/60' : 'border-white/10'}`}
                                        />
                                        {errors.name && (
                                            <p id="error-name" className="mt-2 text-xs text-[#F87171]">{errors.name}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="contact-phone" className="mb-2 block text-sm font-medium text-[#CBD5E1]">
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            id="contact-phone" autoComplete="tel" maxLength={20} name="phone" aria-describedby={errors.phone ? "error-phone" : undefined}
                                            value={formData.phone}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder="+91 00000 0000"
                                            aria-invalid={!!errors.phone}
                                            className={`w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-[#64748B] outline-none transition-colors duration-300 focus:border-[#2563EB]/50 ${errors.phone ? 'border-[#F87171]/60' : 'border-white/10'}`}
                                        />
                                        {errors.phone && (
                                            <p id="error-phone" className="mt-2 text-xs text-[#F87171]">{errors.phone}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="mt-5">
                                    <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-[#CBD5E1]">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="contact-email" autoComplete="email" maxLength={254} required name="email" aria-describedby={errors.email ? "error-email" : undefined}
                                        value={formData.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="you@company.com"
                                        aria-invalid={!!errors.email}
                                        className={`w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-[#64748B] outline-none transition-colors duration-300 focus:border-[#2563EB]/50 ${errors.email ? 'border-[#F87171]/60' : 'border-white/10'}`}
                                    />
                                    {errors.email && (
                                        <p id="error-email" className="mt-2 text-xs text-[#F87171]">{errors.email}</p>
                                    )}
                                </div>

                                <div className="mt-5">
                                    <label htmlFor="contact-subject" className="mb-2 block text-sm font-medium text-[#CBD5E1]">
                                        What are you looking for?
                                    </label>
                                    <select
                                        id="contact-subject" required name="subject" aria-describedby={errors.subject ? "error-subject" : undefined}
                                        value={formData.subject}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        aria-invalid={!!errors.subject}
                                        className={`w-full appearance-none rounded-xl border bg-[#0A1120] px-4 py-3 text-sm text-white outline-none transition-colors duration-300 focus:border-[#2563EB]/50 [&::-ms-expand]:hidden ${errors.subject ? 'border-[#F87171]/60' : 'border-white/10'}`}
                                    >
                                        <option value="" className="bg-[#0A1120] text-white">
                                            Select a service
                                        </option>
                                        {SUBJECT_OPTIONS.map((option) => (
                                            <option key={option} value={option} className="bg-[#0A1120] text-white">
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.subject && (
                                        <p id="error-subject" className="mt-2 text-xs text-[#F87171]">{errors.subject}</p>
                                    )}
                                </div>

                                <div className="mt-5">
                                    <div className="mb-2 flex items-center justify-between">
                                        <label htmlFor="contact-message" className="block text-sm font-medium text-[#CBD5E1]">
                                            Message
                                        </label>
                                        <span className="text-xs text-[#64748B]">
                                            {formData.message.trim().length}/2000
                                        </span>
                                    </div>
                                    <textarea
                                        id="contact-message" required name="message" aria-describedby={errors.message ? "error-message" : undefined}
                                        value={formData.message}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Tell us about your project..."
                                        rows={5}
                                        maxLength={2000}
                                        aria-invalid={!!errors.message}
                                        className={`w-full resize-none rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-[#64748B] outline-none transition-colors duration-300 focus:border-[#2563EB]/50 ${errors.message ? 'border-[#F87171]/60' : 'border-white/10'}`}
                                    />
                                    {errors.message && (
                                        <p id="error-message" className="mt-2 text-xs text-[#F87171]">{errors.message}</p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100 sm:w-auto"
                                >
                                    {submitting ? 'Sending...' : 'Send Mail'}

                                </button>
                            </form>
                        </div>

                        {/* Contact Details */}
                        <div className="flex flex-col gap-4">
                            {CONTACT_DETAILS.map((item) => {
                                const Icon = item.icon;
                                const content = (
                                    <div className="flex items-start gap-3 sm:gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5 lg:p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]">
                                        <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED]">
                                            <Icon className="h-5 w-5 text-white" strokeWidth={1.75} />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-xs font-medium uppercase tracking-wider text-[#64748B]">
                                                {item.label}
                                            </p>
                                            <p className="mt-1 break-words text-sm sm:text-base font-medium text-white">
                                                {item.value}
                                            </p>
                                        </div>
                                    </div>
                                );

                                return item.href ? (
                                    <a key={item.label} href={item.href}>
                                        {content}
                                    </a>
                                ) : (
                                    <div key={item.label}>{content}</div>
                                );
                            })}

                            <p className="text-sm text-slate-300">Please avoid sharing passwords or sensitive personal information. <a href="/privacy-policy" className="underline">Read our privacy policy</a>.</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;