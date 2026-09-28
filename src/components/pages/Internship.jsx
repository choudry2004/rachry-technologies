import { useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    AlertCircle, ArrowRight, Award, BadgeCheck, BookOpen, Bot, Briefcase, Check, CheckCircle2,
    Brain, ChevronDown, ClipboardCheck, Code2, Compass, FileText, FolderGit2, Globe,
    GraduationCap, Hammer, Layers, Loader2, Megaphone, MessageSquare, Monitor, PenTool, QrCode,
    Search, Server, ShieldCheck, Smartphone, Target, Terminal, TrendingUp, UserCheck, Users, Wrench,
} from 'lucide-react';
import { useSEO } from '../../hooks/useSEO';

/* ==========================================================================
   CONFIGURATION
   ========================================================================== */

/**
 * GOOGLE FORM SUBMISSION
 * The website form posts to this endpoint in the background (hidden iframe),
 * so the visitor never sees or leaves to the Google Form.
 * Do NOT change the entry IDs. They map to the questions in the Google Form.
 */
const GOOGLE_FORM_ACTION =
    'https://docs.google.com/forms/d/e/1FAIpQLSfv0lFVmkFezf0UIw5jcz5Y85U4Wub_Kq8biPPU4D9IXJo1mA/formResponse';

const GOOGLE_FORM_ENTRY_IDS = {
    fullName: 'entry.737853904',
    email: 'entry.1696695830',
    whatsapp: 'entry.670417241',
    college: 'entry.1586139621',
    course: 'entry.1813354978',
    year: 'entry.1601629037',
    domain: 'entry.651477932',
    duration: 'entry.8336861',
};

/** How long to wait for Google to respond before treating the submit as failed. */
const SUBMIT_TIMEOUT_MS = 20000;

/** PRICING — change here and it updates everywhere on the page */
const PRICING = { offer: '₹999' };
const APPLY_LABEL = `Apply for Internship – ${PRICING.offer}`;
const PROGRAM_NAME = 'Rachry Technologies – Virtual Internship Program';

/**
 * FORM DROPDOWN OPTIONS — must match the Google Form option text EXACTLY
 * (spelling, spaces, slashes), otherwise Google rejects the value.
 */
const YEAR_OPTIONS = ['1st Year', '2nd Year', '3rd Year', 'Final Year', 'Graduate'];
// Kept as already configured in the project. Confirm these match the Google Form.
const DURATION_OPTIONS = ['1 Month', '2 Months', '3 Months'];

/* ==========================================================================
   CONTENT DATA — edit copy here, not in the JSX below
   ========================================================================== */

const HERO_TRUST_POINTS = [
    '100% Virtual Internship',
    'Beginner Friendly',
    'Mentor Support',
    'AI-Assisted Learning',
    'Practical Project',
    'Professional Certificate',
];

const WHO_CAN_JOIN = [
    { icon: BookOpen, label: 'Beginners', desc: 'You can start even if you are just learning the basics.' },
    { icon: GraduationCap, label: 'College Students', desc: 'Add practical experience alongside your studies.' },
    { icon: UserCheck, label: 'Freshers', desc: 'Build project experience before you start applying.' },
    { icon: Wrench, label: 'Skill Builders', desc: 'For students looking to build practical skills.' },
    { icon: FolderGit2, label: 'Project Seekers', desc: 'For students who want real project experience.' },
    { icon: Bot, label: 'AI-Assisted Developers', desc: 'For students who want to learn AI-assisted development.' },
    { icon: Layers, label: 'Portfolio Builders', desc: 'For students who want to build a portfolio.' },
];

const JOURNEY_STEPS = [
    { icon: BookOpen, title: 'Learn the Fundamentals', desc: 'Start with the core concepts of your chosen domain.' },
    { icon: Wrench, title: 'Understand the Tools', desc: 'Get comfortable with the tools used in real work.' },
    { icon: Bot, title: 'Learn AI-Assisted Workflows', desc: 'See how AI tools can support learning and building.' },
    { icon: Users, title: 'Get Mentor Guidance', desc: 'Get help and feedback whenever you need it.' },
    { icon: Hammer, title: 'Build a Practical Project', desc: 'Apply what you learn to a project in your domain.' },
    { icon: ClipboardCheck, title: 'Submit & Review', desc: 'Submit your project and get it reviewed by a mentor.' },
    { icon: Award, title: 'Get Certified', desc: 'Receive your internship certificate on completion.' },
    { icon: Briefcase, title: 'Career / Hiring Consideration', desc: 'Top performers may be considered for suitable opportunities.' },
];

const AI_TOPICS = [
    'AI-assisted coding',
    'Understanding AI-generated code',
    'Prompting for development tasks',
    'Debugging with AI',
    'Improving AI-generated solutions',
    'AI-assisted research',
    'AI-assisted design / content workflows, where relevant',
    'Responsible AI usage',
    'Combining fundamentals with AI tools',
];

const AI_PRINCIPLES = ['Fundamentals', 'Practical Skills', 'AI Tools', 'Human Understanding'];

// The 8 program domains. `name` is the EXACT text used in the website form
// dropdown AND must be the exact option text in the Google Form domain question.
// Confirm the skills/tools below match your actual syllabus.
const DOMAINS = [
    {
        icon: Globe,
        name: 'Web Development',
        desc: 'Learn to design, build and ship responsive websites and web applications.',
        skills: ['HTML & CSS', 'JavaScript', 'React', 'Git & GitHub'],
        project: 'Build a practical website or web application.',
    },
    {
        icon: Smartphone,
        name: 'App Development',
        desc: 'Learn how mobile apps are planned, built and connected to data.',
        skills: ['JavaScript / Dart basics', 'React Native or Flutter', 'API integration', 'App UI components'],
        project: 'Build a practical mobile application.',
    },
    {
        icon: PenTool,
        name: 'UI/UX Design',
        desc: 'Learn to research, design and prototype interfaces people can actually use.',
        skills: ['Figma', 'Wireframing', 'Prototyping', 'UX fundamentals'],
        project: 'Create a UI/UX case study and prototype.',
    },
    {
        icon: Megaphone,
        name: 'Digital Marketing',
        desc: 'Learn how digital campaigns are planned, run and measured.',
        skills: ['Social media marketing', 'Content planning', 'SEO basics', 'Analytics basics'],
        project: 'Work on a practical marketing workflow or project.',
    },
    {
        icon: Terminal,
        name: 'Python Development',
        desc: 'Learn Python from the fundamentals and use it to build practical programs.',
        skills: ['Python fundamentals', 'Data structures', 'Libraries & APIs', 'Git & GitHub'],
        project: 'Build a Python-based practical project.',
    },
    {
        icon: Brain,
        name: 'AI/ML',
        desc: 'Learn the basics of AI and machine learning through hands-on work.',
        skills: ['Python for AI/ML', 'Data handling', 'ML fundamentals', 'Model building basics'],
        project: 'Build a practical AI/ML project.',
    },
    {
        icon: Monitor,
        name: 'Frontend Development',
        desc: 'Learn to build the user-facing side of modern web applications.',
        skills: ['HTML & CSS', 'JavaScript', 'React', 'Responsive UI'],
        project: 'Build a responsive frontend project.',
    },
    {
        icon: Server,
        name: 'Backend Development',
        desc: 'Learn how the server side of applications is designed and built.',
        skills: ['REST APIs', 'Databases', 'Server-side logic', 'Authentication basics'],
        project: 'Build a backend / API-based practical project.',
    },
];

const DOMAIN_NAMES = DOMAINS.map((d) => d.name);

const MENTOR_ITEMS = [
    { icon: MessageSquare, title: 'Doubt Clarification', desc: 'Get your questions answered as you learn.' },
    { icon: BookOpen, title: 'Learning Guidance', desc: 'Help deciding what to learn and in what order.' },
    { icon: Compass, title: 'Project Guidance', desc: 'Direction on how to plan and build your project.' },
    { icon: Code2, title: 'Technical / Design Feedback', desc: 'Feedback on your code, designs or campaigns.' },
    { icon: Search, title: 'Project Review', desc: 'Your submitted project is reviewed by a mentor.' },
    { icon: BadgeCheck, title: 'Completion Guidance', desc: 'Support to meet the internship requirements.' },
];

const BENEFIT_CARDS = [
    { icon: BookOpen, title: 'Learn from Basics', desc: 'A beginner-friendly path from fundamentals to practical work.' },
    { icon: Bot, title: 'AI-Assisted Learning', desc: 'Use AI tools while still understanding the fundamentals.' },
    { icon: Users, title: 'Mentor Guidance', desc: 'Domain-specific support throughout your internship.' },
    { icon: FolderGit2, title: 'Practical Project', desc: 'Build a project in your chosen domain.' },
    { icon: Layers, title: 'Portfolio Building', desc: 'Finish with portfolio-ready work you can show.' },
    { icon: Award, title: 'Professional Certificate', desc: 'An internship certificate from Rachry Technologies.' },
    { icon: TrendingUp, title: 'Career Support', desc: 'Resume guidance and interview preparation.' },
    { icon: Briefcase, title: 'Hiring Consideration', desc: 'Top performers may be considered for suitable opportunities.' },
];

const CHECKLIST = [
    'Virtual Internship Experience',
    'Beginner-Friendly Learning Path',
    'Domain-Specific Mentor Support',
    'AI-Assisted Learning',
    'Practical Project',
    'Project Guidance & Review',
    'Project Documentation',
    'Portfolio-Ready Work',
    'Internship Certificate',
    'Certificate Verification',
    'Resume Guidance',
    'Interview Preparation',
    'Performance Evaluation',
    'Career Support',
    'Hiring Consideration for Top Performers',
];

const CAREER_FACTORS = [
    'Performance',
    'Project quality',
    'Skills',
    'Interview performance',
    'Current company hiring requirements',
];

const CAREER_ITEMS = [
    { icon: FileText, label: 'Resume guidance' },
    { icon: MessageSquare, label: 'Interview preparation' },
    { icon: TrendingUp, label: 'Performance evaluation' },
    { icon: Search, label: 'Project review' },
    { icon: Compass, label: 'Career guidance' },
    { icon: Briefcase, label: 'Hiring consideration' },
];

const PROCESS_STEPS = [
    { icon: ClipboardCheck, title: 'Apply', desc: 'Fill in the application form on this page.' },
    { icon: Compass, title: 'Select Your Domain', desc: 'Choose the track you want to work in.' },
    { icon: BookOpen, title: 'Start Learning', desc: 'Begin with the fundamentals of your domain.' },
    { icon: Users, title: 'Get Mentor Support', desc: 'Get guidance and feedback along the way.' },
    { icon: Hammer, title: 'Build Your Project', desc: 'Apply your learning to a practical project.' },
    { icon: Search, title: 'Submit & Review', desc: 'Submit your project for mentor review.' },
    { icon: Award, title: 'Receive Certificate', desc: 'Get your internship certificate on completion.' },
    { icon: Briefcase, title: 'Career / Hiring Consideration', desc: 'Top performers may be considered for suitable opportunities.' },
];

const PRICING_INCLUDES = [
    '100% Virtual Internship',
    'Domain-specific mentor support',
    'Practical project with review',
    'Internship certificate',
    'Resume guidance & interview preparation',
    'Hiring consideration for top performers',
];

const FAQS = [
    { q: 'Is the internship completely online?', a: 'Yes. The Rachry Technologies Virtual Internship Program is 100% virtual, so you can take part from anywhere.' },
    { q: 'Who can apply?', a: 'Beginners, college students, freshers and anyone who wants to build practical skills, gain project experience and create a portfolio.' },
    { q: 'Can beginners apply?', a: 'Yes. The program is beginner friendly and starts from the fundamentals before moving on to practical project work.' },
    { q: 'What domains are available?', a: 'Web Development, App Development, UI/UX Design, Digital Marketing, Python Development, AI/ML, Frontend Development and Backend Development.' },
    { q: 'Is mentor support provided?', a: 'Yes. Mentor support is available across every offered domain, including doubt clarification, project guidance, feedback and project review.' },
    { q: 'Will I work on a practical project?', a: 'Yes. You will work on a practical project related to your selected domain, such as a website or web app, a mobile app, a UI/UX case study and prototype, or a marketing project.' },
    { q: 'How is AI used during the internship?', a: 'AI tools are taught as assistants for coding, debugging, research and workflows. The focus is on fundamentals and understanding, not on generating everything automatically.' },
    { q: 'Will I receive a certificate?', a: 'Yes. Students who successfully complete the internship requirements and the assigned project receive an internship certificate from Rachry Technologies.' },
    { q: 'Is the certificate verifiable?', a: 'Certificates include a certificate ID and a verification option, so the certificate can be checked.' },
    { q: 'What happens after I apply?', a: 'Our team reviews your application and contacts you with the next steps. No payment is taken on this page.' },
    { q: 'Is placement guaranteed?', a: 'No. Placement or a job is not guaranteed. Career and hiring opportunities are performance-based and subject to company requirements.' },
    { q: 'Can top-performing interns be considered for opportunities at Rachry Technologies?', a: 'Top-performing interns may be considered for suitable opportunities at Rachry Technologies based on company requirements and candidate performance.' },
];

/* ==========================================================================
   FORM LOGIC — validation + Google Form submission
   ========================================================================== */

const FIELD_ORDER = ['fullName', 'email', 'whatsapp', 'college', 'course', 'year', 'domain', 'duration'];
const fieldId = (name) => `app-${name}`;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const NAME_PATTERN = /^[\p{L}\p{M}][\p{L}\p{M}\s.'’-]*$/u;

/** Strips spaces/hyphens/dots/brackets; returns 10-digit Indian mobile or ''. */
function normalizeIndianMobile(raw) {
    const cleaned = String(raw ?? '').replace(/[\s\-().]/g, '');
    const match = cleaned.match(/^(?:\+91|91|0)?([6-9]\d{9})$/);
    return match ? match[1] : '';
}

const lettersIn = (text) => (text.match(/\p{L}/gu) || []).length;

/** Returns an error message, or '' when the value is valid. */
function validateField(name, rawValue) {
    const value = String(rawValue ?? '').trim();
    switch (name) {
        case 'fullName':
            if (value.length < 2 || value.length > 100 || !NAME_PATTERN.test(value) || lettersIn(value) < 2) {
                return 'Please enter your full name.';
            }
            return '';
        case 'email':
            if (!value || value.length > 254 || !EMAIL_PATTERN.test(value)) {
                return 'Please enter a valid email address.';
            }
            return '';
        case 'whatsapp':
            return normalizeIndianMobile(value) ? '' : 'Please enter a valid 10-digit WhatsApp number.';
        case 'college':
            return value.length >= 2 && value.length <= 150 ? '' : 'Please enter your college or institution name.';
        case 'course':
            return value.length >= 2 && value.length <= 100 ? '' : 'Please enter your course or department.';
        case 'year':
            return YEAR_OPTIONS.includes(rawValue) ? '' : 'Please select your year of study.';
        case 'domain':
            return DOMAIN_NAMES.includes(rawValue) ? '' : 'Please select an internship domain.';
        case 'duration':
            return DURATION_OPTIONS.includes(rawValue) ? '' : 'Please select your preferred internship duration.';
        default:
            return '';
    }
}

function validateAll(values) {
    const errors = {};
    FIELD_ORDER.forEach((name) => {
        const message = validateField(name, values[name]);
        if (message) errors[name] = message;
    });
    return errors;
}

/**
 * Final gate before anything is sent to Google: re-validates, trims and
 * normalizes. Returns null if anything is wrong.
 */
function buildPayload(values) {
    if (Object.keys(validateAll(values)).length > 0) return null;
    const payload = {
        fullName: values.fullName.trim(),
        email: values.email.trim(),
        whatsapp: `+91${normalizeIndianMobile(values.whatsapp)}`,
        college: values.college.trim(),
        course: values.course.trim(),
        year: values.year,
        domain: values.domain,
        duration: values.duration,
    };
    const complete = FIELD_ORDER.every((name) => payload[name] && GOOGLE_FORM_ENTRY_IDS[name]);
    return complete ? payload : null;
}

/**
 * Posts the payload to the Google Form through a hidden iframe. This avoids
 * CORS entirely and keeps the visitor on the page. The response is opaque
 * (cross-origin), so a completed iframe load is treated as success and a
 * timeout is treated as failure.
 */
function submitToGoogleForm(payload) {
    return new Promise((resolve, reject) => {
        const frameName = `gform-target-${Date.now()}`;

        const iframe = document.createElement('iframe');
        iframe.name = frameName;
        iframe.title = 'Application submission';
        iframe.tabIndex = -1;
        iframe.setAttribute('aria-hidden', 'true');
        iframe.style.cssText = 'position:absolute;width:0;height:0;border:0;visibility:hidden;';

        const form = document.createElement('form');
        form.method = 'POST';
        form.action = GOOGLE_FORM_ACTION;
        form.target = frameName;
        form.acceptCharset = 'UTF-8';
        form.style.display = 'none';

        Object.entries(GOOGLE_FORM_ENTRY_IDS).forEach(([field, entryId]) => {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = entryId;
            input.value = payload[field];
            form.appendChild(input);
        });

        let settled = false;
        let timer;
        const finish = (callback) => {
            if (settled) return;
            settled = true;
            clearTimeout(timer);
            setTimeout(() => {
                form.remove();
                iframe.remove();
            }, 0);
            callback();
        };

        document.body.append(iframe, form);

        // Attach the listener only after the empty iframe has settled, so its
        // initial blank load is never mistaken for Google's response.
        setTimeout(() => {
            iframe.addEventListener('load', () => finish(resolve));
            timer = setTimeout(() => finish(() => reject(new Error('Submission timed out'))), SUBMIT_TIMEOUT_MS);
            try {
                form.submit();
            } catch (error) {
                finish(() => reject(error));
            }
        }, 0);
    });
}

/* ==========================================================================
   SHARED BUILDING BLOCKS
   ========================================================================== */

const scrollToId = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

function Section({ id, tone = 'primary', glow, children }) {
    const bg = tone === 'secondary' ? 'bg-[#080F22]' : 'bg-[#050B18]';
    return (
        <section id={id} className={`relative scroll-mt-20 overflow-hidden ${bg} py-16 sm:py-20 lg:py-28`}>
            {glow === 'blue' && (
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-[-10%] top-1/4 h-56 w-56 rounded-full bg-[#2563EB]/10 blur-[90px] sm:h-96 sm:w-96 sm:blur-[140px]" />
                </div>
            )}
            {glow === 'purple' && (
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute right-[-10%] top-1/3 h-56 w-56 rounded-full bg-[#7C3AED]/10 blur-[90px] sm:h-96 sm:w-96 sm:blur-[140px]" />
                </div>
            )}
            <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-12">
                {children}
            </div>
        </section>
    );
}

function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
    const alignment = align === 'left' ? 'text-left' : 'mx-auto text-center';
    return (
        <div className={`max-w-2xl ${alignment}`}>
            {eyebrow && (
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#38BDF8] sm:text-sm sm:tracking-[0.3em]">
                    {eyebrow}
                </p>
            )}
            <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl">
                {title}
            </h2>
            {subtitle && (
                <p className="mt-4 text-sm leading-6 text-[#94A3B8] sm:mt-5 sm:text-base sm:leading-7">
                    {subtitle}
                </p>
            )}
        </div>
    );
}

function IconBox({ icon: Icon, className = 'h-10 w-10' }) {
    return (
        <div className={`flex shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED] ${className}`}>
            <Icon className="h-5 w-5 text-white" strokeWidth={1.75} aria-hidden="true" />
        </div>
    );
}

function PrimaryButton({ children, onClick, type = 'button', full = false, className = '', disabled = false, loading = false }) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            aria-busy={loading || undefined}
            className={`inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-7 py-3.5 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 ${
                full ? 'w-full' : 'w-full sm:w-auto'
            } ${className}`}
        >
            {children}
            {loading ? (
                <Loader2 className="h-4 w-4 shrink-0 animate-spin" strokeWidth={2} aria-hidden="true" />
            ) : (
                <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden="true" />
            )}
        </button>
    );
}

function PriceTag({ large = false }) {
    return (
        <div className="flex flex-col items-center gap-1">
            <span className="text-xs font-medium uppercase tracking-wider text-[#94A3B8]">Program Fee</span>
            <span
                className={`bg-gradient-to-r from-[#38BDF8] to-[#2563EB] bg-clip-text font-extrabold text-transparent ${
                    large ? 'text-5xl sm:text-6xl' : 'text-4xl sm:text-5xl'
                }`}
            >
                {PRICING.offer}
            </span>
        </div>
    );
}

/* ==========================================================================
   SECTIONS
   ========================================================================== */

function Hero({ onApply, onExplore }) {
    return (
        <section className="relative overflow-hidden bg-[#050B18] pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-28 lg:pt-40">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#2563EB]/20 blur-[90px] sm:h-96 sm:w-96 sm:blur-[130px]" />
                <div className="absolute right-[-10%] top-1/3 h-56 w-56 rounded-full bg-[#7C3AED]/15 blur-[80px] sm:h-80 sm:w-80 sm:blur-[120px]" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-[1100px] px-5 text-center sm:px-8 lg:px-12">
                <p className="mb-5 text-xs font-semibold uppercase leading-relaxed tracking-[0.2em] text-[#38BDF8] sm:mb-6 sm:text-sm sm:tracking-[0.3em]">
                    {PROGRAM_NAME}
                </p>

                <h1 className="text-3xl font-bold leading-[1.15] tracking-tight text-white min-[400px]:text-4xl sm:text-5xl lg:text-6xl">
                    Build Skills.
                    <br />
                    Build Projects.
                    <br />
                    <span className="bg-gradient-to-r from-[#38BDF8] via-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
                        Build Your Career.
                    </span>
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#94A3B8] sm:mt-8 sm:text-lg sm:leading-8">
                    A practical virtual internship program designed for students and
                    beginners — from fundamentals to AI-assisted real-world project
                    development, with mentor support, practical project experience,
                    professional certification and career support.
                </p>

                <div className="mx-auto mt-8 inline-flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-5 sm:mt-10 sm:px-10 sm:py-6">
                    <PriceTag />
                </div>

                <div className="mx-auto mt-8 flex w-full max-w-md flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:items-center sm:justify-center">
                    <PrimaryButton onClick={onApply}>Apply for Internship</PrimaryButton>
                    <button
                        type="button"
                        onClick={onExplore}
                        className="inline-flex w-full items-center justify-center rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-[#E2E8F0] transition hover:border-white/30 hover:bg-white/[0.03] sm:w-auto"
                    >
                        Explore Program
                    </button>
                </div>

                <ul className="mx-auto mt-9 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-3 text-left min-[420px]:grid-cols-2 sm:mt-12 sm:grid-cols-3">
                    {HERO_TRUST_POINTS.map((point) => (
                        <li key={point} className="flex items-center gap-2 text-sm text-[#94A3B8]">
                            <Check className="h-4 w-4 shrink-0 text-[#38BDF8]" strokeWidth={2.25} aria-hidden="true" />
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

function WhoCanJoin() {
    return (
        <Section id="program" tone="secondary">
            <SectionHeading
                eyebrow="Who Can Join"
                title="Start from the basics. Grow into real projects."
                subtitle="This program is built to be beginner friendly. You don't need to be an expert to begin."
            />
            <ul className="mt-10 flex flex-wrap justify-center gap-4 sm:mt-14">
                {WHO_CAN_JOIN.map(({ icon, label, desc }) => (
                    <li
                        key={label}
                        className="flex w-full items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/20 sm:w-[calc(50%_-_0.5rem)] lg:w-[calc(25%_-_0.75rem)] lg:flex-col"
                    >
                        <IconBox icon={icon} />
                        <div>
                            <h3 className="text-base font-semibold text-white">{label}</h3>
                            <p className="mt-1 text-sm leading-6 text-[#94A3B8]">{desc}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </Section>
    );
}

function LearningJourney() {
    return (
        <Section id="journey" glow="blue">
            <SectionHeading
                eyebrow="Your Learning Journey"
                title="Learn from basics to practical projects."
                subtitle="Begin with the fundamentals and gradually move toward building a practical project in your chosen domain."
            />
            <ol className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
                {JOURNEY_STEPS.map(({ icon, title, desc }, i) => (
                    <li key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                        <div className="flex items-center justify-between">
                            <IconBox icon={icon} />
                            <span className="text-2xl font-bold text-white/15" aria-hidden="true">
                                {String(i + 1).padStart(2, '0')}
                            </span>
                        </div>
                        <h3 className="mt-4 text-base font-semibold text-white">
                            <span className="sr-only">Step {i + 1}: </span>
                            {title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-[#94A3B8]">{desc}</p>
                    </li>
                ))}
            </ol>
        </Section>
    );
}

function AILearning() {
    return (
        <Section id="ai" tone="secondary">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#2563EB]/10 to-[#7C3AED]/10 p-6 sm:p-10 lg:p-14">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
                    <div>
                        <SectionHeading
                            align="left"
                            eyebrow="AI-Assisted Learning"
                            title="Learn to Build with AI"
                            subtitle="Students will learn how modern AI tools can be used as assistants for development and productivity — while still understanding the fundamentals."
                        />
                        <p className="mt-5 text-sm leading-6 text-[#94A3B8] sm:text-base sm:leading-7">
                            AI is a tool that supports your learning. It is not a shortcut —
                            you still learn, understand and build.
                        </p>

                        <div className="mt-6 flex flex-wrap items-center gap-2 sm:mt-8">
                            {AI_PRINCIPLES.map((item, i) => (
                                <span key={item} className="flex items-center gap-2">
                                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-[#E2E8F0] sm:text-sm">
                                        {item}
                                    </span>
                                    {i < AI_PRINCIPLES.length - 1 && (
                                        <span className="text-[#38BDF8]" aria-hidden="true">+</span>
                                    )}
                                </span>
                            ))}
                        </div>
                    </div>

                    <ul className="grid grid-cols-1 gap-3">
                        {AI_TOPICS.map((topic) => (
                            <li key={topic} className="flex items-start gap-3 rounded-xl border border-white/10 bg-[#050B18]/40 px-4 py-3">
                                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#38BDF8]/15">
                                    <Check className="h-3 w-3 text-[#38BDF8]" strokeWidth={2.5} aria-hidden="true" />
                                </span>
                                <span className="text-sm leading-6 text-[#E2E8F0]">{topic}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Section>
    );
}

function Domains({ selectedDomain, onSelectDomain }) {
    return (
        <Section id="domains">
            <SectionHeading
                eyebrow="Domains"
                title="Choose Your Domain"
                subtitle="Eight domains, each with mentor support and a practical project."
            />
            <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 md:grid-cols-2 md:gap-6">
                {DOMAINS.map((domain) => {
                    const isSelected = selectedDomain === domain.name;
                    return (
                        <article
                            key={domain.name}
                            className={`flex flex-col rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 sm:p-8 ${
                                isSelected
                                    ? 'border-[#38BDF8]/50 bg-[#38BDF8]/[0.05]'
                                    : 'border-white/10 bg-white/[0.03] hover:border-white/20'
                            }`}
                        >
                            <div className="flex items-center gap-4">
                                <IconBox icon={domain.icon} className="h-11 w-11" />
                                <h3 className="text-lg font-semibold text-white">{domain.name}</h3>
                            </div>
                            <p className="mt-4 text-sm leading-6 text-[#94A3B8]">{domain.desc}</p>

                            <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">
                                Key skills / tools
                            </p>
                            <ul className="mt-2 flex flex-wrap gap-2">
                                {domain.skills.map((skill) => (
                                    <li key={skill} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-[#E2E8F0]">
                                        {skill}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-5 space-y-3 border-t border-white/10 pt-5 text-sm">
                                <p className="flex items-start gap-2.5 text-[#E2E8F0]">
                                    <Target className="mt-0.5 h-4 w-4 shrink-0 text-[#38BDF8]" strokeWidth={1.75} aria-hidden="true" />
                                    <span><span className="font-medium">Project:</span> {domain.project}</span>
                                </p>
                                <p className="flex items-start gap-2.5 text-[#E2E8F0]">
                                    <Users className="mt-0.5 h-4 w-4 shrink-0 text-[#38BDF8]" strokeWidth={1.75} aria-hidden="true" />
                                    <span>Mentor support included</span>
                                </p>
                            </div>

                            <button
                                type="button"
                                aria-pressed={isSelected}
                                onClick={() => {
                                    onSelectDomain(domain.name);
                                    scrollToId('apply');
                                }}
                                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-[#E2E8F0] transition hover:border-[#38BDF8]/50 hover:text-white sm:w-auto sm:self-start"
                            >
                                {isSelected ? 'Selected — Continue to Apply' : 'Apply for this domain'}
                                <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden="true" />
                            </button>
                        </article>
                    );
                })}
            </div>
        </Section>
    );
}

function MentorSupport() {
    return (
        <Section id="mentors" tone="secondary" glow="purple">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-14">
                <div className="lg:col-span-2">
                    <SectionHeading
                        align="left"
                        eyebrow="Mentor Support"
                        title="Mentor Support Across Every Domain"
                        subtitle="You are guided throughout the internship — not left to figure everything out alone."
                    />
                    <ul className="mt-6 space-y-2.5 sm:mt-8">
                        {DOMAIN_NAMES.map((name) => (
                            <li key={name} className="flex items-center gap-2.5 text-sm text-[#E2E8F0]">
                                <Check className="h-4 w-4 shrink-0 text-[#38BDF8]" strokeWidth={2.25} aria-hidden="true" />
                                {name}
                            </li>
                        ))}
                    </ul>
                </div>

                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-3">
                    {MENTOR_ITEMS.map(({ icon, title, desc }) => (
                        <li key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                            <IconBox icon={icon} className="h-9 w-9" />
                            <h3 className="mt-3 text-base font-semibold text-white">{title}</h3>
                            <p className="mt-1.5 text-sm leading-6 text-[#94A3B8]">{desc}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </Section>
    );
}

function PracticalProject() {
    return (
        <Section id="project">
            <SectionHeading
                eyebrow="Practical Project Experience"
                title="Don't Just Learn. Build."
                subtitle="You will complete a practical project related to your selected domain, with mentor guidance and review."
            />
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5">
                {DOMAINS.map(({ icon, name, project }) => (
                    <li
                        key={name}
                        className="flex items-start gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-6"
                    >
                        <IconBox icon={icon} className="h-11 w-11" />
                        <div>
                            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#38BDF8]">{name}</h3>
                            <p className="mt-1.5 text-base font-medium leading-6 text-white">{project}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </Section>
    );
}

function ProgramBenefits() {
    return (
        <Section id="benefits" tone="secondary">
            <SectionHeading eyebrow="Program Benefits" title="Everything built around your growth." />
            <ul className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
                {BENEFIT_CARDS.map(({ icon, title, desc }) => (
                    <li
                        key={title}
                        className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20"
                    >
                        <IconBox icon={icon} />
                        <h3 className="mt-4 text-base font-semibold text-white">{title}</h3>
                        <p className="mt-2 text-sm leading-6 text-[#94A3B8]">{desc}</p>
                    </li>
                ))}
            </ul>
        </Section>
    );
}

function WhatStudentsGet() {
    return (
        <Section id="included">
            <SectionHeading eyebrow="What Students Get" title="Everything included in the internship." />
            <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:mt-14 sm:p-10">
                <ul className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
                    {CHECKLIST.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm leading-6 text-[#E2E8F0]">
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#38BDF8]/15">
                                <Check className="h-3 w-3 text-[#38BDF8]" strokeWidth={2.5} aria-hidden="true" />
                            </span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </Section>
    );
}

function CertificateSection() {
    return (
        <Section id="certificate" tone="secondary">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <div>
                    <SectionHeading
                        align="left"
                        eyebrow="Certificate"
                        title="Earn a Professional Internship Certificate"
                        subtitle="Students who successfully complete the internship requirements and assigned project will receive an internship certificate from Rachry Technologies."
                    />
                    <ul className="mt-6 space-y-3 text-sm text-[#E2E8F0]">
                        {[
                            'Issued by Rachry Technologies',
                            'Includes a unique certificate ID',
                            'Includes a QR / verification option',
                        ].map((line) => (
                            <li key={line} className="flex items-center gap-2.5">
                                <Check className="h-4 w-4 shrink-0 text-[#38BDF8]" strokeWidth={2.25} aria-hidden="true" />
                                {line}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Certificate preview (sample layout) */}
                <figure>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0F1729] to-[#080F22] p-3 sm:p-5">
                        <div className="rounded-xl border border-white/10 bg-[#050B18] p-5 text-center sm:p-8">
                            {/* TODO: replace this wordmark with your logo image, e.g. <img src={logo} alt="Rachry Technologies" /> */}
                            <div className="flex items-center justify-center gap-2.5">
                                <IconBox icon={Award} className="h-9 w-9" />
                                <span className="text-base font-semibold text-white sm:text-lg">Rachry Technologies</span>
                            </div>

                            <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#38BDF8] sm:text-xs">
                                Certificate of Internship Completion
                            </p>
                            <p className="mt-4 text-xs text-[#94A3B8]">This is to certify that</p>
                            <p className="mt-2 border-b border-white/10 pb-2 text-lg font-semibold text-white sm:text-xl">
                                [ Student Name ]
                            </p>
                            <p className="mt-3 text-xs text-[#94A3B8]">
                                has successfully completed the Virtual Internship Program in
                            </p>
                            <p className="mt-1 text-sm font-medium text-[#E2E8F0]">[ Internship Domain ]</p>

                            <dl className="mt-5 grid grid-cols-1 gap-3 border-t border-white/10 pt-4 text-left text-xs min-[420px]:grid-cols-3">
                                <div>
                                    <dt className="text-[#94A3B8]">Duration</dt>
                                    <dd className="mt-0.5 font-medium text-[#E2E8F0]">[ Duration ]</dd>
                                </div>
                                <div>
                                    <dt className="text-[#94A3B8]">Completion Date</dt>
                                    <dd className="mt-0.5 font-medium text-[#E2E8F0]">[ DD/MM/YYYY ]</dd>
                                </div>
                                <div>
                                    <dt className="text-[#94A3B8]">Certificate ID</dt>
                                    <dd className="mt-0.5 font-medium text-[#E2E8F0]">[ Certificate ID ]</dd>
                                </div>
                            </dl>

                            <div className="mt-6 flex items-end justify-between gap-4">
                                <div className="text-left">
                                    <div className="h-px w-28 bg-white/20" />
                                    <p className="mt-1.5 text-[11px] text-[#94A3B8]">Authorized Signature</p>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                                        <QrCode className="h-8 w-8 text-[#94A3B8]" strokeWidth={1.5} aria-hidden="true" />
                                    </div>
                                    <p className="text-[10px] text-[#94A3B8]">Scan to verify</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <figcaption className="mt-3 text-center text-xs text-[#94A3B8]">
                        Sample layout for preview. Actual certificate design may vary.
                    </figcaption>
                </figure>
            </div>
        </Section>
    );
}

function CareerSupport() {
    return (
        <Section id="career">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#2563EB]/10 via-transparent to-[#7C3AED]/10 p-6 sm:p-10 lg:p-14">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
                    <div>
                        <SectionHeading
                            align="left"
                            eyebrow="Career & Hiring Support"
                            title="Perform. Learn. Get Considered."
                            subtitle="Top-performing interns may receive career opportunities based on:"
                        />
                        <ul className="mt-4 space-y-2">
                            {CAREER_FACTORS.map((factor) => (
                                <li key={factor} className="flex items-center gap-2.5 text-sm text-[#E2E8F0]">
                                    <Check className="h-4 w-4 shrink-0 text-[#38BDF8]" strokeWidth={2.25} aria-hidden="true" />
                                    {factor}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6 flex items-start gap-3 rounded-xl border border-[#38BDF8]/30 bg-[#38BDF8]/[0.05] p-4 sm:mt-8">
                            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#38BDF8]" strokeWidth={1.75} aria-hidden="true" />
                            <p className="text-sm leading-6 text-[#E2E8F0]">
                                Top-performing interns may be considered for suitable opportunities
                                at Rachry Technologies based on company requirements and candidate
                                performance. Placement or a job is not guaranteed.
                            </p>
                        </div>
                    </div>

                    <ul className="grid grid-cols-1 gap-3 self-start min-[420px]:grid-cols-2">
                        {CAREER_ITEMS.map(({ icon, label }) => (
                            <li key={label} className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#050B18]/40 px-4 py-3.5">
                                <IconBox icon={icon} className="h-9 w-9" />
                                <span className="text-sm font-medium text-[#E2E8F0]">{label}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Section>
    );
}

function ProcessTimeline() {
    return (
        <Section id="process" tone="secondary">
            <SectionHeading eyebrow="Internship Process" title="How the internship works." />
            <ol className="mx-auto mt-10 max-w-2xl sm:mt-14">
                {PROCESS_STEPS.map(({ icon, title, desc }, i) => (
                    <li key={title} className="relative flex gap-5 pb-8 last:pb-0">
                        {i < PROCESS_STEPS.length - 1 && (
                            <span aria-hidden="true" className="absolute bottom-0 left-5 top-10 w-px -translate-x-1/2 bg-white/10" />
                        )}
                        <IconBox icon={icon} className="relative z-10 h-10 w-10" />
                        <div className="pt-0.5">
                            <p className="text-xs font-semibold text-[#38BDF8]">
                                <span className="sr-only">Step </span>
                                {String(i + 1).padStart(2, '0')}
                            </p>
                            <h3 className="mt-0.5 text-base font-semibold text-white">{title}</h3>
                            <p className="mt-1 text-sm leading-6 text-[#94A3B8]">{desc}</p>
                        </div>
                    </li>
                ))}
            </ol>
        </Section>
    );
}

function PricingSection({ onApply }) {
    return (
        <Section id="pricing" glow="blue">
            <SectionHeading eyebrow="Program Fee" title="One program fee. Everything included." />

            <div className="mx-auto mt-10 max-w-xl rounded-3xl border border-[#38BDF8]/30 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6 text-center sm:mt-14 sm:p-10">
                <p className="text-sm font-medium text-[#94A3B8]">{PROGRAM_NAME}</p>

                <div className="mt-5">
                    <PriceTag large />
                </div>

                <ul className="mx-auto mt-7 max-w-sm space-y-3 text-left">
                    {PRICING_INCLUDES.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-[#E2E8F0]">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#38BDF8]" strokeWidth={2.25} aria-hidden="true" />
                            {item}
                        </li>
                    ))}
                </ul>

                <PrimaryButton onClick={onApply} full className="mt-8">
                    {APPLY_LABEL}
                </PrimaryButton>
                <p className="mt-3 text-xs leading-5 text-[#94A3B8]">
                    Apply first. Our team will contact you with the next steps.
                </p>
            </div>
        </Section>
    );
}

/* ---------- Application form ---------- */

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

function ApplicationForm({ selectedDomain, onDomainChange }) {
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
                    Application Submitted Successfully!
                </h3>
                <p className="max-w-md text-sm leading-6 text-[#94A3B8]">
                    Thank you for applying to the Rachry Technologies Virtual Internship
                    Program. Our team will review your application and contact you with the
                    next steps.
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

function FAQSection() {
    return (
        <Section id="faq">
            <div className="mx-auto max-w-3xl">
                <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
                <div className="mt-10 flex flex-col gap-3 sm:mt-12">
                    {FAQS.map(({ q, a }) => (
                        <details key={q} className="group rounded-xl border border-white/10 bg-white/[0.03] open:border-white/20">
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-medium text-[#E2E8F0] sm:text-base [&::-webkit-details-marker]:hidden">
                                {q}
                                <ChevronDown className="h-4 w-4 shrink-0 text-[#94A3B8] transition-transform duration-300 group-open:rotate-180" strokeWidth={2} aria-hidden="true" />
                            </summary>
                            <p className="px-5 pb-4 text-sm leading-6 text-[#94A3B8]">{a}</p>
                        </details>
                    ))}
                </div>
            </div>
        </Section>
    );
}

/* ==========================================================================
   PAGE
   ========================================================================== */

function Internship() {
    useSEO({
        title: 'Online Virtual Internship Program | Rachry Technologies',
        description:
            'Join the Rachry Technologies Virtual Internship Program. Learn from the basics, build practical projects, use AI-assisted workflows, receive mentor support and earn a professional internship certificate.',
        path: '/internship',
    });

    const [selectedDomain, setSelectedDomain] = useState('');
    const formSection = useRef(null);
    const goToForm = () => formSection.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    return (
        <>
            <Hero onApply={goToForm} onExplore={() => scrollToId('program')} />
            <WhoCanJoin />
            <LearningJourney />
            <AILearning />
            <Domains selectedDomain={selectedDomain} onSelectDomain={setSelectedDomain} />
            <MentorSupport />
            <PracticalProject />
            <ProgramBenefits />
            <WhatStudentsGet />
            <CertificateSection />
            <CareerSupport />
            <ProcessTimeline />
            <PricingSection onApply={goToForm} />

            <section ref={formSection} id="apply" className="relative scroll-mt-20 bg-[#080F22] py-16 sm:py-20 lg:py-28">
                <div className="mx-auto w-full max-w-[800px] px-5 sm:px-8 lg:px-12">
                    <SectionHeading
                        eyebrow="Apply Now"
                        title="Apply for the Internship"
                        subtitle="Fill in your details below. Our team will review your application and contact you with the next steps."
                    />
                    <div className="mx-auto mt-10 max-w-2xl rounded-3xl border border-white/10 bg-white/[0.02] p-5 sm:mt-12 sm:p-10">
                        <ApplicationForm selectedDomain={selectedDomain} onDomainChange={setSelectedDomain} />
                    </div>
                </div>
            </section>

            <FAQSection />
        </>
    );
}

export default Internship;