import { useSEO } from '../../../hooks/useSEO';
import {
    Palette, Sparkles, Fingerprint, Image,
    Share2, Layers, FileText,
    Video, Film, Zap, Clapperboard, Presentation,
    Clock, RefreshCw, UserCheck, ShieldCheck,
    Search, PenTool, Layout, PackageCheck,
    ArrowRight,
} from 'lucide-react';
import CTA from '../../CTA';
import video from '../../../assets/videos/Creations.mp4'

const DESIGN_ITEMS = [
    { icon: Palette, title: 'UI/UX Design', desc: 'Interfaces that are intuitive to use and easy to build on.' },
    { icon: Sparkles, title: 'Logo Design', desc: 'A mark that holds up on a business card and a billboard.' },
    { icon: Fingerprint, title: 'Brand Identity Design', desc: 'Colours, type, and voice that stay consistent everywhere.' },
    { icon: Image, title: 'Graphic Design', desc: 'Visuals for everything from decks to packaging.' },
];

const SOCIAL_ITEMS = [
    { icon: Share2, title: 'Social Media Creative Design', desc: 'Scroll-stopping posts, carousels, and stories.' },
    { icon: Layers, title: 'Banner & Poster Design', desc: 'Clear messaging that reads at a glance, up close or from afar.' },
    { icon: FileText, title: 'Brochure & Flyer Design', desc: 'Print-ready layouts that sell without shouting.' },
];

const VIDEO_ITEMS = [
    { icon: Video, title: 'Video Editing', desc: 'Clean cuts, pacing, and sound that keep viewers watching.' },
    { icon: Film, title: 'Reels & Short-form Video Editing', desc: 'Built for retention on Instagram, YouTube Shorts, and TikTok.' },
    { icon: Zap, title: 'Motion Graphics', desc: 'Animated logos, lower-thirds, and kinetic text.' },
    { icon: Clapperboard, title: 'Product / Promotional Video Editing', desc: 'Videos that turn features into reasons to buy.' },
];

const WHY_US = [
    { icon: Clock, title: 'Fast turnaround', desc: 'Most requests delivered within 48–72 hours, without cutting corners.' },
    { icon: RefreshCw, title: 'Unlimited revisions', desc: 'We refine until it actually matches what you had in mind.' },
    { icon: UserCheck, title: 'A dedicated designer', desc: 'One point of contact who learns your brand, not a rotating team.' },
    { icon: ShieldCheck, title: 'Source files included', desc: 'Every project ships with editable files, no extra cost.' },
];

const PROCESS = [
    { icon: Search, title: 'Discovery', desc: 'We learn your brand, audience, and what the piece needs to do.' },
    { icon: PenTool, title: 'Concept', desc: 'A few directions to react to, before we commit to one.' },
    { icon: Layout, title: 'Design', desc: 'We build out the chosen direction in full, with your feedback baked in.' },
    { icon: PackageCheck, title: 'Delivery', desc: 'Final files, source files, and a walkthrough of what\'s included.' },
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

function CreativeDesign() {
    useSEO({
        title: 'Creative & Design Services | Rachry Technologies, Salem',
        description: 'Branding, graphic design, and creative design services for businesses in Salem and Tamil Nadu.',
        path: '/services/creative-design',
    });

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
                            Create
                        </p>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] tracking-tight text-white lg:text-6xl">
                            Creative{' '}
                            <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
                                & Design Solutions
                            </span>
                        </h1>
                        <p className="mx-auto mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-[#94A3B8] lg:text-xl">
                            We craft visuals and brand experiences that make businesses
                            stand out and connect with their audience — from the first
                            logo sketch to the final export.
                        </p>
                        <p className="mx-auto mt-4 max-w-xl text-xs sm:text-sm text-[#64748B]">
                            Design, motion, and presentation work, handled by one team
                            that stays with your brand from project to project.
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
                            Designs that capture attention and build brand identity.
                        </h2>
                    </div>

                    <div className="mx-auto mt-10 sm:mt-16 grid max-w-6xl grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-12">
                        {/* Design — 4 services, the widest category, gets the big card */}
                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-left sm:p-8 md:col-span-2 lg:col-span-8 lg:p-10">
                            <h3 className="text-base sm:text-lg font-semibold text-[#38BDF8]">Design</h3>
                            <p className="mt-1 text-xs sm:text-sm text-[#64748B]">
                                The visual foundation your brand runs on.
                            </p>
                            <div className="mt-5 sm:mt-6 grid gap-5 sm:gap-6 sm:grid-cols-2">
                                {DESIGN_ITEMS.map((item) => (
                                    <ServiceRow key={item.title} {...item} />
                                ))}
                            </div>
                        </div>

                        {/* Presentation — 1 service, featured as a slim call-out card */}
                        <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-br from-[#2563EB]/10 to-[#7C3AED]/10 p-6 text-left sm:p-8 md:col-span-2 lg:col-span-4 lg:p-10">
                            <div>
                                <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED]">
                                    <Presentation className="h-5 w-5 text-white" strokeWidth={1.75} />
                                </div>
                                <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-semibold text-white">
                                    Presentation / PPT Design
                                </h3>
                                <p className="mt-2 text-xs sm:text-sm leading-6 text-[#94A3B8]">
                                    Decks that pitch, report, and close deals — not just inform.
                                </p>
                            </div>
                            <a href="#contact" className="mt-6 sm:mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-[#38BDF8]">
                                Get a quote
                                <ArrowRight className="h-4 w-4" strokeWidth={2} />
                            </a>
                        </div>

                        {/* Social & Print — 3 services, medium card */}
                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-left sm:p-8 md:col-span-1 lg:col-span-5 lg:p-10">
                            <h3 className="text-base sm:text-lg font-semibold text-[#38BDF8]">Social & Print Creative</h3>
                            <p className="mt-1 text-xs sm:text-sm text-[#64748B]">
                                Content built for the feed and the shelf.
                            </p>
                            <div className="mt-5 sm:mt-6 flex flex-col gap-5 sm:gap-6">
                                {SOCIAL_ITEMS.map((item) => (
                                    <ServiceRow key={item.title} {...item} />
                                ))}
                            </div>
                        </div>

                        {/* Video & Motion — 4 services, the other big card */}
                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-left sm:p-8 md:col-span-1 lg:col-span-7 lg:p-10">
                            <h3 className="text-base sm:text-lg font-semibold text-[#38BDF8]">Video & Motion</h3>
                            <p className="mt-1 text-xs sm:text-sm text-[#64748B]">
                                Footage and motion work cut for retention.
                            </p>
                            <div className="mt-5 sm:mt-6 grid gap-5 sm:gap-6 sm:grid-cols-2">
                                {VIDEO_ITEMS.map((item) => (
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
                            Design support that feels like an in-house team.
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
                            From brief to final files, in four steps.
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

            <CTA />
        </>
    );
}

export default CreativeDesign;