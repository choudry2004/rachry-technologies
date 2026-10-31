import { ArrowRight, Award, Check, ChevronDown, QrCode, ShieldCheck, Target, Users } from 'lucide-react';
import { useRef, useState } from 'react';
import { useSEO } from '../../hooks/useSEO.js';
import ApplicationForm from './ApplicationForm.jsx';
import PrimaryButton from './PrimaryButton.jsx';
import { PRICING, APPLY_LABEL, PROGRAM_NAME, APPLICATIONS_STATUS } from './config.js';
import { HERO_TRUST_POINTS, WHO_CAN_JOIN, JOURNEY_STEPS, AI_TOPICS, AI_PRINCIPLES, DOMAINS, DOMAIN_NAMES, MENTOR_ITEMS, BENEFIT_CARDS, CHECKLIST, CAREER_FACTORS, CAREER_ITEMS, PROCESS_STEPS, PRICING_INCLUDES, FAQS } from './content.js';
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
                    {APPLICATIONS_STATUS}. A practical virtual internship program designed for students and
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
                subtitle="Ten domains, each with mentor support and a practical project."
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
    useSEO('/internship');

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
                        subtitle={`${APPLICATIONS_STATUS}. Fill in your details below. Our team will review your application and contact you with the next steps.`}
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