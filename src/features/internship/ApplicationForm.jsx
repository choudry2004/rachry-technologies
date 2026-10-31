import { AlertCircle, CheckCircle2, ChevronDown } from 'lucide-react';
import { useMemo, useRef, useState } from 'react';
import PrimaryButton from './PrimaryButton.jsx';
import { PRICING, YEAR_OPTIONS, DURATION_OPTIONS } from './config.js';
import { DOMAIN_NAMES } from './content.js';
import { FIELD_ORDER, fieldId, validateAll, buildPayload, submitToGoogleForm } from './application.js';
const FIELD_BASE =
    'block w-full min-w-0 max-w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-base text-white placeholder:text-[#64748B] focus:outline-none [color-scheme:dark] sm:py-2.5 sm:text-sm';
const FIELD_OK = 'border-white/10 focus:border-[#38BDF8]/60';
const FIELD_BAD = 'border-red-400/70 focus:border-red-400';

function Field({ name, label, error, children }) {
    return (
        <div className="min-w-0 max-w-full">
            <label htmlFor={fieldId(name)} className="mb-1.5 block text-xs font-medium text-[#94A3B8]">
                {label}
            </label>
            {children}
            {error && (
                <p id={`${fieldId(name)}-error`} className="mt-1.5 text-xs leading-5 text-red-400">
                    {error}
                </p>
            )}
        </div>
    );
}

export default function ApplicationForm({ selectedDomain, onDomainChange }) {
    const [fields, setFields] = useState({
        fullName: '', email: '', whatsapp: '', college: '', course: '', year: '', duration: '',
    });
    const [touched, setTouched] = useState({});
    const [attempted, setAttempted] = useState(false);
    const [status, setStatus] = useState('idle'); // idle | submitting | success
    const [submitError, setSubmitError] = useState('');
    const submittingRef = useRef(false);

    // Domain lives in the parent so the domain cards can pre-select it.
    const values = useMemo(() => ({ ...fields, domain: selectedDomain }), [fields, selectedDomain]);
    const allErrors = useMemo(() => validateAll(values), [values]);

    // Errors appear only after the field was touched or a submit was attempted,
    // and disappear automatically once the value is corrected.
    const errorFor = (name) => ((touched[name] || attempted) ? allErrors[name] || '' : '');

    const handleChange = (name) => (event) => {
        const { value } = event.target;
        if (name === 'domain') onDomainChange(value);
        else setFields((prev) => ({ ...prev, [name]: value }));
    };
    const handleBlur = (name) => () => setTouched((prev) => ({ ...prev, [name]: true }));

    const controlProps = (name) => {
        const error = errorFor(name);
        return {
            id: fieldId(name),
            name,
            value: values[name],
            onChange: handleChange(name),
            onBlur: handleBlur(name),
            'aria-invalid': error ? 'true' : 'false',
            'aria-describedby': error ? `${fieldId(name)}-error` : undefined,
            className: `${FIELD_BASE} ${error ? FIELD_BAD : FIELD_OK}`,
        };
    };

    const focusField = (name) => {
        const el = document.getElementById(fieldId(name));
        if (!el) return;
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.focus({ preventScroll: true });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (submittingRef.current) return; // block double-clicks / double Enter

        setAttempted(true);
        const firstInvalid = FIELD_ORDER.find((name) => allErrors[name]);
        if (firstInvalid) {
            focusField(firstInvalid);
            return;
        }

        const payload = buildPayload(values);
        if (!payload) {
            setSubmitError('Something is wrong with the details entered. Please check the form and try again.');
            return;
        }

        submittingRef.current = true;
        setSubmitError('');
        setStatus('submitting');
        try {
            await submitToGoogleForm(payload);
            setStatus('success');
        } catch {
            setStatus('idle');
            setSubmitError(
                'We could not submit your application. Please check your internet connection and try again.'
            );
        } finally {
            submittingRef.current = false;
        }
    };

    if (status === 'success') {
        return (
            <div
                role="status"
                className="flex w-full flex-col items-center gap-3 rounded-2xl border border-[#38BDF8]/30 bg-[#38BDF8]/5 p-8 text-center sm:p-12"
            >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#38BDF8]/15">
                    <CheckCircle2 className="h-6 w-6 text-[#38BDF8]" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-white sm:text-xl">
                    Application sent for processing
                </h3>
                <p className="max-w-md text-sm leading-6 text-[#94A3B8]">
                    Your browser has sent the application to Google Forms. Receipt cannot be verified here. Please contact team@rachrytechnolgies.in to confirm before making any payment.
                </p>
            </div>
        );
    }

    const isSubmitting = status === 'submitting';

    return (
        <form onSubmit={handleSubmit} noValidate className="grid w-full min-w-0 max-w-full gap-4 sm:gap-5">
            <fieldset disabled={isSubmitting} className="grid min-w-0 gap-4 border-0 p-0 sm:gap-5">
                <legend className="sr-only">Internship application details</legend>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                    <Field name="fullName" label="Full Name" error={errorFor('fullName')}>
                        <input {...controlProps('fullName')} type="text" maxLength={100} autoComplete="name" placeholder="Your full name" />
                    </Field>
                    <Field name="email" label="Email Address" error={errorFor('email')}>
                        <input {...controlProps('email')} type="email" maxLength={254} autoComplete="email" placeholder="you@example.com" />
                    </Field>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                    <Field name="whatsapp" label="WhatsApp Number" error={errorFor('whatsapp')}>
                        <input {...controlProps('whatsapp')} type="tel" inputMode="tel" maxLength={20} autoComplete="tel" placeholder="+91 98765 43210" />
                    </Field>
                    <Field name="college" label="College / Institution Name" error={errorFor('college')}>
                        <input {...controlProps('college')} type="text" maxLength={150} autoComplete="organization" placeholder="Your college or institution" />
                    </Field>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                    <Field name="course" label="Course / Department" error={errorFor('course')}>
                        <input {...controlProps('course')} type="text" maxLength={100} placeholder="e.g. B.E. Computer Science" />
                    </Field>
                    <Field name="year" label="Year of Study" error={errorFor('year')}>
                        <SelectControl props={controlProps('year')} options={YEAR_OPTIONS} placeholder="Select year" />
                    </Field>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                    <Field name="domain" label="Internship Domain" error={errorFor('domain')}>
                        <SelectControl props={controlProps('domain')} options={DOMAIN_NAMES} placeholder="Select a domain" />
                    </Field>
                    <Field name="duration" label="Internship Duration" error={errorFor('duration')}>
                        <SelectControl props={controlProps('duration')} options={DURATION_OPTIONS} placeholder="Select duration" />
                    </Field>
                </div>
            </fieldset>

            {submitError && (
                <div role="alert" className="flex items-start gap-2.5 rounded-xl border border-red-400/40 bg-red-400/[0.06] p-3.5 text-sm leading-6 text-red-300">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2} aria-hidden="true" />
                    {submitError}
                </div>
            )}

            <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <PrimaryButton type="submit" disabled={isSubmitting} loading={isSubmitting}>
                    {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                </PrimaryButton>
                <p className="text-xs leading-5 text-[#94A3B8]">
                    Program fee: <span className="font-semibold text-white">{PRICING.offer}</span>.
                    No payment is taken on this page.
                </p>
            </div>
        </form>
    );
}

function SelectControl({ props, options, placeholder }) {
    const { className, ...rest } = props;
    return (
        <div className="relative">
            <select {...rest} className={`${className} appearance-none pr-10 [&>option]:bg-[#0F1729]`}>
                <option value="" disabled>{placeholder}</option>
                {options.map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
            <ChevronDown
                className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94A3B8]"
                strokeWidth={2}
                aria-hidden="true"
            />
        </div>
    );
}
