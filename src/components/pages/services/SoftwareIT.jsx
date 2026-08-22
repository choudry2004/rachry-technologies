import {
    Globe, Smartphone, Layout, Code, ShoppingCart,
    Building2, Users, Bot, Brain,
    Wrench, RefreshCw, Server, Mail,
    Layers, ClipboardList, Compass, Rocket, RotateCw,
    ShieldCheck, UserCheck, Clock, FileBarChart,
    ArrowRight,
} from 'lucide-react';
import CTA from '../../CTA';
import video from '../../../assets/videos/It.mp4';

const DEV_ITEMS = [
    { icon: Globe, title: 'Website Development', desc: 'Fast, responsive sites built to convert visitors into customers.' },
    { icon: Smartphone, title: 'Mobile App Development', desc: 'Native and cross-platform apps for iOS and Android.' },
    { icon: Layout, title: 'Custom Web Application Development', desc: 'Web apps built around how your team actually works.' },
    { icon: Code, title: 'Custom Software Development', desc: 'Bespoke software when off-the-shelf tools fall short.' },
    { icon: ShoppingCart, title: 'E-commerce Development', desc: 'Storefronts built to handle real traffic and real checkouts.' },
];

const AI_ITEMS = [
    { icon: Bot, title: 'AI & Automation Solutions', desc: 'Automate the repetitive work so your team can focus elsewhere.' },
    { icon: Brain, title: 'AI/ML Application Development', desc: 'Custom models and applications built around your data.' },
];

const BUSINESS_ITEMS = [
    { icon: Building2, title: 'ERP Solutions', desc: 'Connect operations, finance, and inventory in one system.' },
    { icon: Users, title: 'CRM Solutions', desc: 'Track every customer relationship in one place.' },
];

const SUPPORT_ITEMS = [
    { icon: Wrench, title: 'Software Maintenance & Support', desc: 'Ongoing fixes, updates, and support after launch.' },
    { icon: RefreshCw, title: 'Website Maintenance', desc: 'Uptime, security patches, and content updates handled.' },
    { icon: Server, title: 'Domain & Hosting Solutions', desc: 'Reliable hosting and domain management, fully managed.' },
    { icon: Mail, title: 'Business Email Solutions', desc: 'Professional email set up and running on your domain.' },
];

const WHY_US = [
    { icon: FileBarChart, title: 'Built around your workflow', desc: 'Every build starts with how your team actually operates.' },
    { icon: UserCheck, title: 'A dedicated engineer', desc: 'One person who knows your codebase, not a rotating team.' },
    { icon: Clock, title: 'Clear timelines', desc: 'You know what ships, and when, from week one.' },
    { icon: ShieldCheck, title: 'Support after launch', desc: 'We stay on to fix, patch, and improve, not just ship and go.' },
];

const PROCESS = [
    { icon: ClipboardList, title: 'Scope', desc: 'We map your requirements, systems, and constraints.' },
    { icon: Compass, title: 'Plan', desc: 'A technical plan and timeline built around your priorities.' },
    { icon: Rocket, title: 'Build', desc: 'Development in short cycles, with regular check-ins.' },
    { icon: RotateCw, title: 'Support', desc: "We maintain, patch, and improve after you're live." },
];

const PLATFORMS = [
    'React', 'Next.js', 'Node.js', 'Python', 'Django',
    'Flutter', 'React Native', 'MySQL', 'PostgreSQL', 'MongoDB',
];

function ServiceRow({ icon: Icon, title, desc }) {
    return (
        <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED]">
                <Icon className="h-4 w-4 text-white" strokeWidth={1.75} />
            </div>
            <div>
                <p className="text-sm sm:text-base font-medium text-[#E2E8F0]">{title}</p>
                <p className="mt-0.5 text-xs sm:text-sm leading-6 text-[#64748B]">{desc}</p>
            </div>
        </div>
    );
}

function SoftwareIT() {
    return (
        <>
            {/* Hero with Video Background */}
            <section className="relative flex min-h-[70vh] sm:min-h-[80vh] items-center justify-center overflow-hidden bg-[#050B18] pt-20 sm:pt-24 lg:pt-28">
                <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover">
                    <source src={video} type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-[#050B18]/75" />

                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-1/4 top-1/4 h-56 w-56 sm:h-96 sm:w-96 rounded-full bg-[#2563EB]/20 blur-[80px] sm:blur-[120px]" />
                    <div className="absolute right-1/4 top-1/3 h-56 w-56 sm:h-96 sm:w-96 rounded-full bg-[#7C3AED]/20 blur-[80px] sm:blur-[120px]" />
                </div>

                <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 py-14 sm:px-8 sm:py-20 text-center lg:px-12">
                    <div className="mx-auto max-w-3xl">
                        <p className="mb-4 sm:mb-6 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#38BDF8]">
                            Build
                        </p>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] tracking-tight text-white lg:text-6xl">
                            Software{' '}
                            <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
                                & IT Solutions
                            </span>
                        </h1>
                        <p className="mx-auto mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-[#94A3B8] lg:text-xl">
                            We build practical, scalable technology that helps your business
                            run smoother and reach further.
                        </p>
                        <p className="mx-auto mt-4 max-w-xl text-xs sm:text-sm text-[#64748B]">
                            Development, systems, and support, run by one team that
                            treats your stack like it's their own.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services We Provide — Bento Grid */}
            <section className="relative overflow-hidden bg-[#050B18] py-16 sm:py-24 lg:py-40">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-[-10%] top-1/4 h-56 w-56 sm:h-96 sm:w-96 rounded-full bg-[#2563EB]/10 blur-[90px] sm:blur-[140px]" />
                    <div className="absolute right-[-10%] bottom-1/4 h-56 w-56 sm:h-96 sm:w-96 rounded-full bg-[#7C3AED]/10 blur-[90px] sm:blur-[140px]" />
                </div>

                <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
                    <div className="text-center">
                        <p className="mb-4 sm:mb-6 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#38BDF8]">
                            Services We Provide
                        </p>
                        <h2 className="mx-auto max-w-2xl text-3xl sm:text-4xl font-bold leading-[1.15] tracking-tight text-white lg:text-5xl">
                            Accelerate your business growth with our solutions.
                        </h2>
                    </div>

                    <div className="mx-auto mt-10 sm:mt-16 grid max-w-6xl grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-12">
                        {/* Development — 5 services, the biggest card */}
                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-left sm:p-8 md:col-span-2 lg:col-span-7 lg:p-10">
                            <h3 className="text-base sm:text-lg font-semibold text-[#38BDF8]">Development</h3>
                            <p className="mt-1 text-xs sm:text-sm text-[#64748B]">
                                Websites, apps, and software built around your business.
                            </p>
                            <div className="mt-5 sm:mt-6 grid gap-5 sm:gap-6 sm:grid-cols-2">
                                {DEV_ITEMS.map((item) => (
                                    <ServiceRow key={item.title} {...item} />
                                ))}
                            </div>
                        </div>

                        {/* AI & Automation — 2 services, featured call-out card */}
                        <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-br from-[#2563EB]/10 to-[#7C3AED]/10 p-6 text-left sm:p-8 md:col-span-2 lg:col-span-5 lg:p-10">
                            <div>
                                <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED]">
                                    <Layers className="h-5 w-5 text-white" strokeWidth={1.75} />
                                </div>
                                <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-semibold text-white">
                                    AI & Automation
                                </h3>
                                <div className="mt-4 sm:mt-5 flex flex-col gap-4 sm:gap-5">
                                    {AI_ITEMS.map((item) => (
                                        <div key={item.title}>
                                            <p className="text-sm font-medium text-[#E2E8F0]">{item.title}</p>
                                            <p className="mt-0.5 text-xs sm:text-sm leading-6 text-[#94A3B8]">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <a href="#contact" className="mt-6 sm:mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-[#38BDF8]">
                                Talk to us about your use case
                                <ArrowRight className="h-4 w-4" strokeWidth={2} />
                            </a>
                        </div>

                        {/* Maintenance & Support — 4 services */}
                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-left sm:p-8 md:col-span-2 lg:col-span-7 lg:p-10">
                            <h3 className="text-base sm:text-lg font-semibold text-[#38BDF8]">Maintenance & Support</h3>
                            <p className="mt-1 text-xs sm:text-sm text-[#64748B]">
                                Keeping what we build running after launch.
                            </p>
                            <div className="mt-5 sm:mt-6 grid gap-5 sm:gap-6 sm:grid-cols-2">
                                {SUPPORT_ITEMS.map((item) => (
                                    <ServiceRow key={item.title} {...item} />
                                ))}
                            </div>
                        </div>

                        {/* Business Systems — 2 services */}
                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-left sm:p-8 md:col-span-2 lg:col-span-5 lg:p-10">
                            <h3 className="text-base sm:text-lg font-semibold text-[#38BDF8]">Business Systems</h3>
                            <p className="mt-1 text-xs sm:text-sm text-[#64748B]">
                                The systems that run your operations day to day.
                            </p>
                            <div className="mt-5 sm:mt-6 flex flex-col gap-5 sm:gap-6">
                                {BUSINESS_ITEMS.map((item) => (
                                    <ServiceRow key={item.title} {...item} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Work With Us */}
            <section className="relative overflow-hidden bg-[#080F22] py-16 sm:py-24 lg:py-32">
                <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
                    <div className="text-center">
                        <p className="mb-4 sm:mb-6 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#38BDF8]">
                            Why Work With Us
                        </p>
                        <h2 className="mx-auto max-w-2xl text-2xl sm:text-3xl font-bold leading-[1.15] tracking-tight text-white lg:text-4xl">
                            Software that keeps working after the handoff.
                        </h2>
                    </div>

                    <div className="mx-auto mt-10 sm:mt-16 grid max-w-6xl gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        {WHY_US.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
                                    <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED]">
                                        <Icon className="h-5 w-5 text-white" strokeWidth={1.75} />
                                    </div>
                                    <h3 className="mt-3 sm:mt-4 text-sm sm:text-base font-semibold text-white">{item.title}</h3>
                                    <p className="mt-2 text-xs sm:text-sm leading-6 text-[#94A3B8]">{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* How We Work */}
            <section className="relative overflow-hidden bg-[#050B18] py-16 sm:py-24 lg:py-32">
                <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
                    <div className="text-center">
                        <p className="mb-4 sm:mb-6 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#38BDF8]">
                            How We Work
                        </p>
                        <h2 className="mx-auto max-w-2xl text-2xl sm:text-3xl font-bold leading-[1.15] tracking-tight text-white lg:text-4xl">
                            From scope to support, in four steps.
                        </h2>
                    </div>

                    <div className="mx-auto mt-10 sm:mt-16 grid max-w-6xl gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        {PROCESS.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <div key={step.title} className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
                                    <span className="text-sm font-semibold text-[#38BDF8]">0{index + 1}</span>
                                    <div className="mt-3 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED]">
                                        <Icon className="h-5 w-5 text-white" strokeWidth={1.75} />
                                    </div>
                                    <h3 className="mt-3 sm:mt-4 text-sm sm:text-base font-semibold text-white">{step.title}</h3>
                                    <p className="mt-2 text-xs sm:text-sm leading-6 text-[#94A3B8]">{step.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Platforms We Use */}
            <section className="relative overflow-hidden bg-[#050B18] pb-16 sm:pb-24 lg:pb-40">
                <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 text-center sm:px-8 lg:px-12">
                    <p className="mb-4 sm:mb-6 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#38BDF8]">
                        Platforms We Use
                    </p>

                    <h2 className="mx-auto max-w-2xl text-3xl sm:text-4xl font-bold leading-[1.15] tracking-tight text-white lg:text-5xl">
                        Built on tools trusted by developers worldwide.
                    </h2>

                    <div className="mx-auto mt-8 sm:mt-12 flex max-w-4xl flex-wrap justify-center gap-2 sm:gap-3">
                        {PLATFORMS.map((platform) => (
                            <span
                                key={platform}
                                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base font-medium text-[#CBD5E1] transition-all duration-300 hover:border-[#2563EB]/30 hover:bg-white/[0.06]"
                            >
                                {platform}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <CTA />
        </>
    );
}

export default SoftwareIT;