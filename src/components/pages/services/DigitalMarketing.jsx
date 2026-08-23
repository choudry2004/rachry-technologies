// import {
//     Share2, Search, MousePointerClick, PenLine,
//     MapPin, TrendingUp,
//     Mail, Users, Target, LineChart, ShoppingCart, Compass,
//     Clock, FileBarChart, UserCheck, ShieldCheck,
//     ClipboardList, Compass as CompassIcon, Rocket, RotateCw,
//     ArrowRight, BarChart3,
// } from 'lucide-react';
// import CTA from '../../CTA';
// import video from '../../../assets/videos/Digitalmarketing.mp4'

// const SOCIAL_ITEMS = [
//     { icon: Share2, title: 'Social Media Marketing & Management', desc: 'Consistent posting and community management across platforms.' },
//     { icon: PenLine, title: 'Content Writing', desc: 'Copy that sounds like your brand, written for how people actually read.' },
//     { icon: Compass, title: 'Social Media Marketing Strategy', desc: 'A plan tied to real goals, not just a content calendar.' },
// ];

// const SEARCH_ITEMS = [
//     { icon: Search, title: 'SEO', desc: 'Rank higher for the searches your customers are already making.' },
//     { icon: MousePointerClick, title: 'Google Ads / PPC', desc: 'Paid campaigns built around cost per lead, not just clicks.' },
//     { icon: MapPin, title: 'Google Business Profile Management', desc: 'Show up correctly and consistently in local search and maps.' },
//     { icon: TrendingUp, title: 'Local SEO', desc: 'Get found by people searching near your business.' },
// ];

// const LEADS_ITEMS = [
//     { icon: Mail, title: 'Email Marketing', desc: 'Sequences that nurture leads without spamming them.' },
//     { icon: Target, title: 'Lead Generation', desc: 'Campaigns built to fill your pipeline, not just your inbox.' },
//     { icon: Users, title: 'Influencer Marketing', desc: 'Partnerships with creators your audience already trusts.' },
//     { icon: LineChart, title: 'Landing Page Optimization', desc: 'Pages tuned to convert the traffic you\'re already paying for.' },
//     { icon: LineChart, title: 'Conversion Rate Optimization', desc: 'Small changes, tested properly, that move the numbers that matter.' },
// ];

// const ANALYTICS_ITEMS = [
//     { icon: LineChart, title: 'Analytics & Performance Reporting', desc: 'Clear numbers on what\'s working, sent on a schedule you can act on.' },
//     { icon: ShoppingCart, title: 'E-commerce Marketing', desc: 'Campaigns built around cart value, repeat purchase, and margin.' },
// ];

// const WHY_US = [
//     { icon: FileBarChart, title: 'Data-backed strategy', desc: 'Every campaign starts with your numbers, not a template.' },
//     { icon: UserCheck, title: 'A dedicated account manager', desc: 'One person who knows your business, not a rotating team.' },
//     { icon: Clock, title: 'Transparent reporting', desc: 'Monthly reports that show spend, results, and what\'s next.' },
//     { icon: ShieldCheck, title: 'No lock-in contracts', desc: 'You stay because it\'s working, not because you\'re stuck.' },
// ];

// const PROCESS = [
//     { icon: ClipboardList, title: 'Audit', desc: 'We review your current presence, traffic, and where leads drop off.' },
//     { icon: CompassIcon, title: 'Strategy', desc: 'A channel plan built around your budget and your goals.' },
//     { icon: Rocket, title: 'Execute', desc: 'Campaigns go live across the channels that make sense for you.' },
//     { icon: RotateCw, title: 'Report & optimize', desc: 'We track results monthly and adjust what isn\'t pulling weight.' },
// ];

// function ServiceRow({ icon: Icon, title, desc }) {
//     return (
//         <div className="flex items-start gap-3">
//             <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED]">
//                 <Icon className="h-4 w-4 text-white" strokeWidth={1.75} />
//             </div>
//             <div>
//                 <p className="text-base font-medium text-[#E2E8F0]">{title}</p>
//                 <p className="mt-0.5 text-sm leading-6 text-[#64748B]">{desc}</p>
//             </div>
//         </div>
//     );
// }

// function DigitalMarketing() {
//     return (
//         <>
//             {/* Hero with Video Background */}
//             <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-[#050B18] pt-28">
//                 <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover">
//                     <source src={video} type="video/mp4" />
//                 </video>

//                 <div className="absolute inset-0 bg-[#050B18]/75" />

//                 <div className="pointer-events-none absolute inset-0">
//                     <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[#2563EB]/20 blur-[120px]" />
//                     <div className="absolute right-1/4 top-1/3 h-96 w-96 rounded-full bg-[#7C3AED]/20 blur-[120px]" />
//                 </div>

//                 <div className="relative z-10 mx-auto w-full max-w-[1500px] px-8 py-20 text-center lg:px-12">
//                     <div className="mx-auto max-w-3xl">
//                         <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#38BDF8]">
//                             Grow
//                         </p>
//                         <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl">
//                             Digital Marketing{' '}
//                             <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
//                                 & Business Growth
//                             </span>
//                         </h1>
//                         <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#94A3B8] lg:text-xl">
//                             We help businesses strengthen their digital presence, reach the
//                             right audience, and turn attention into meaningful growth.
//                         </p>
//                         <p className="mx-auto mt-4 max-w-xl text-sm text-[#64748B]">
//                             Strategy, execution, and reporting, run by one team that
//                             treats your budget like it's their own.
//                         </p>
//                     </div>
//                 </div>
//             </section>

//             {/* Services We Provide — Bento Grid */}
//             <section className="relative overflow-hidden bg-[#050B18] py-28 lg:py-40">
//                 <div className="pointer-events-none absolute inset-0">
//                     <div className="absolute left-[-10%] top-1/4 h-96 w-96 rounded-full bg-[#2563EB]/10 blur-[140px]" />
//                     <div className="absolute right-[-10%] bottom-1/4 h-96 w-96 rounded-full bg-[#7C3AED]/10 blur-[140px]" />
//                 </div>

//                 <div className="relative z-10 mx-auto w-full max-w-[1500px] px-8 lg:px-12">
//                     <div className="text-center">
//                         <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#38BDF8]">
//                             Services We Provide
//                         </p>
//                         <h2 className="mx-auto max-w-2xl text-4xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl">
//                             Accelerate your business growth with our solutions.
//                         </h2>
//                     </div>

//                     <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-12">
//                         {/* Leads & Conversion — 5 services, the biggest card */}
//                         <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-left lg:col-span-7 lg:p-10">
//                             <h3 className="text-lg font-semibold text-[#38BDF8]">Leads & Conversion</h3>
//                             <p className="mt-1 text-sm text-[#64748B]">
//                                 Turning traffic and attention into people who actually buy.
//                             </p>
//                             <div className="mt-6 grid gap-6 sm:grid-cols-2">
//                                 {LEADS_ITEMS.map((item) => (
//                                     <ServiceRow key={item.title} {...item} />
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Analytics & E-commerce — 2 services, featured call-out card */}
//                         <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-br from-[#2563EB]/10 to-[#7C3AED]/10 p-8 text-left lg:col-span-5 lg:p-10">
//                             <div>
//                                 <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED]">
//                                     <BarChart3 className="h-5 w-5 text-white" strokeWidth={1.75} />
//                                 </div>
//                                 <h3 className="mt-5 text-lg font-semibold text-white">
//                                     Analytics & E-commerce
//                                 </h3>
//                                 <div className="mt-5 flex flex-col gap-5">
//                                     {ANALYTICS_ITEMS.map((item) => (
//                                         <div key={item.title}>
//                                             <p className="text-sm font-medium text-[#E2E8F0]">{item.title}</p>
//                                             <p className="mt-0.5 text-sm leading-6 text-[#94A3B8]">{item.desc}</p>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                             <a href="#contact" className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-[#38BDF8]">
//                                 See a sample report
//                                 <ArrowRight className="h-4 w-4" strokeWidth={2} />
//                             </a>
//                         </div>

//                         {/* Search & Local — 4 services */}
//                         <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-left lg:col-span-7 lg:p-10">
//                             <h3 className="text-lg font-semibold text-[#38BDF8]">Search & Local</h3>
//                             <p className="mt-1 text-sm text-[#64748B]">
//                                 Getting found by the people already searching for you.
//                             </p>
//                             <div className="mt-6 grid gap-6 sm:grid-cols-2">
//                                 {SEARCH_ITEMS.map((item) => (
//                                     <ServiceRow key={item.title} {...item} />
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Social & Content — 3 services */}
//                         <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-left lg:col-span-5 lg:p-10">
//                             <h3 className="text-lg font-semibold text-[#38BDF8]">Social & Content</h3>
//                             <p className="mt-1 text-sm text-[#64748B]">
//                                 Consistent presence and a voice people recognize.
//                             </p>
//                             <div className="mt-6 flex flex-col gap-6">
//                                 {SOCIAL_ITEMS.map((item) => (
//                                     <ServiceRow key={item.title} {...item} />
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Why Work With Us */}
//             <section className="relative overflow-hidden bg-[#080F22] py-28 lg:py-32">
//                 <div className="relative z-10 mx-auto w-full max-w-[1500px] px-8 lg:px-12">
//                     <div className="text-center">
//                         <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#38BDF8]">
//                             Why Work With Us
//                         </p>
//                         <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl">
//                             Marketing that reports back in numbers, not vibes.
//                         </h2>
//                     </div>

//                     <div className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
//                         {WHY_US.map((item) => {
//                             const Icon = item.icon;
//                             return (
//                                 <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
//                                     <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED]">
//                                         <Icon className="h-5 w-5 text-white" strokeWidth={1.75} />
//                                     </div>
//                                     <h3 className="mt-4 text-base font-semibold text-white">{item.title}</h3>
//                                     <p className="mt-2 text-sm leading-6 text-[#94A3B8]">{item.desc}</p>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </section>

//             {/* How We Work */}
//             <section className="relative overflow-hidden bg-[#050B18] py-28 lg:py-32">
//                 <div className="relative z-10 mx-auto w-full max-w-[1500px] px-8 lg:px-12">
//                     <div className="text-center">
//                         <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#38BDF8]">
//                             How We Work
//                         </p>
//                         <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl">
//                             From audit to results, in four steps.
//                         </h2>
//                     </div>

//                     <div className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
//                         {PROCESS.map((step, index) => {
//                             const Icon = step.icon;
//                             return (
//                                 <div key={step.title} className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6">
//                                     <span className="text-sm font-semibold text-[#38BDF8]">0{index + 1}</span>
//                                     <div className="mt-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED]">
//                                         <Icon className="h-5 w-5 text-white" strokeWidth={1.75} />
//                                     </div>
//                                     <h3 className="mt-4 text-base font-semibold text-white">{step.title}</h3>
//                                     <p className="mt-2 text-sm leading-6 text-[#94A3B8]">{step.desc}</p>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </section>

//             <CTA />
//         </>
//     );
// }

// export default DigitalMarketing;
import { useEffect } from 'react';
import {
    Share2, Search, MousePointerClick, PenLine,
    MapPin, TrendingUp,
    Mail, Users, Target, LineChart, ShoppingCart, Compass,
    Clock, FileBarChart, UserCheck, ShieldCheck,
    ClipboardList, Compass as CompassIcon, Rocket, RotateCw,
    ArrowRight, BarChart3,
} from 'lucide-react';
import CTA from '../../CTA';
import video from '../../../assets/videos/Digitalmarketing.mp4'

const SOCIAL_ITEMS = [
    { icon: Share2, title: 'Social Media Marketing & Management', desc: 'Consistent posting and community management across platforms.' },
    { icon: PenLine, title: 'Content Writing', desc: 'Copy that sounds like your brand, written for how people actually read.' },
    { icon: Compass, title: 'Social Media Marketing Strategy', desc: 'A plan tied to real goals, not just a content calendar.' },
];

const SEARCH_ITEMS = [
    { icon: Search, title: 'SEO', desc: 'Rank higher for the searches your customers are already making.' },
    { icon: MousePointerClick, title: 'Google Ads / PPC', desc: 'Paid campaigns built around cost per lead, not just clicks.' },
    { icon: MapPin, title: 'Google Business Profile Management', desc: 'Show up correctly and consistently in local search and maps.' },
    { icon: TrendingUp, title: 'Local SEO', desc: 'Get found by people searching near your business.' },
];

const LEADS_ITEMS = [
    { icon: Mail, title: 'Email Marketing', desc: 'Sequences that nurture leads without spamming them.' },
    { icon: Target, title: 'Lead Generation', desc: 'Campaigns built to fill your pipeline, not just your inbox.' },
    { icon: Users, title: 'Influencer Marketing', desc: 'Partnerships with creators your audience already trusts.' },
    { icon: LineChart, title: 'Landing Page Optimization', desc: 'Pages tuned to convert the traffic you\'re already paying for.' },
    { icon: LineChart, title: 'Conversion Rate Optimization', desc: 'Small changes, tested properly, that move the numbers that matter.' },
];

const ANALYTICS_ITEMS = [
    { icon: LineChart, title: 'Analytics & Performance Reporting', desc: 'Clear numbers on what\'s working, sent on a schedule you can act on.' },
    { icon: ShoppingCart, title: 'E-commerce Marketing', desc: 'Campaigns built around cart value, repeat purchase, and margin.' },
];

const WHY_US = [
    { icon: FileBarChart, title: 'Data-backed strategy', desc: 'Every campaign starts with your numbers, not a template.' },
    { icon: UserCheck, title: 'A dedicated account manager', desc: 'One person who knows your business, not a rotating team.' },
    { icon: Clock, title: 'Transparent reporting', desc: 'Monthly reports that show spend, results, and what\'s next.' },
    { icon: ShieldCheck, title: 'No lock-in contracts', desc: 'You stay because it\'s working, not because you\'re stuck.' },
];

const PROCESS = [
    { icon: ClipboardList, title: 'Audit', desc: 'We review your current presence, traffic, and where leads drop off.' },
    { icon: CompassIcon, title: 'Strategy', desc: 'A channel plan built around your budget and your goals.' },
    { icon: Rocket, title: 'Execute', desc: 'Campaigns go live across the channels that make sense for you.' },
    { icon: RotateCw, title: 'Report & optimize', desc: 'We track results monthly and adjust what isn\'t pulling weight.' },
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

function DigitalMarketing() {
    useEffect(() => {
        document.title = 'Digital Marketing & Business Growth | Rachry Technologies';

        const description =
            'Rachry Technologies provides SEO, Google Ads, social media marketing, local SEO, lead generation, email marketing, influencer marketing and e-commerce marketing services.';

        let meta = document.querySelector('meta[name="description"]');

        if (!meta) {
            meta = document.createElement('meta');
            meta.name = 'description';
            document.head.appendChild(meta);
        }

        meta.setAttribute('content', description);
    }, []);

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
                            Grow
                        </p>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] tracking-tight text-white lg:text-6xl">
                            Digital Marketing{' '}
                            <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
                                & Business Growth
                            </span>
                        </h1>
                        <p className="mx-auto mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-[#94A3B8] lg:text-xl">
                            We help businesses strengthen their digital presence, reach the
                            right audience, and turn attention into meaningful growth.
                        </p>
                        <p className="mx-auto mt-4 max-w-xl text-xs sm:text-sm text-[#64748B]">
                            Strategy, execution, and reporting, run by one team that
                            treats your budget like it's their own.
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
                        {/* Leads & Conversion — 5 services, the biggest card */}
                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-left sm:p-8 md:col-span-2 lg:col-span-7 lg:p-10">
                            <h3 className="text-base sm:text-lg font-semibold text-[#38BDF8]">Leads & Conversion</h3>
                            <p className="mt-1 text-xs sm:text-sm text-[#64748B]">
                                Turning traffic and attention into people who actually buy.
                            </p>
                            <div className="mt-5 sm:mt-6 grid gap-5 sm:gap-6 sm:grid-cols-2">
                                {LEADS_ITEMS.map((item) => (
                                    <ServiceRow key={item.title} {...item} />
                                ))}
                            </div>
                        </div>

                        {/* Analytics & E-commerce — 2 services, featured call-out card */}
                        <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-br from-[#2563EB]/10 to-[#7C3AED]/10 p-6 text-left sm:p-8 md:col-span-2 lg:col-span-5 lg:p-10">
                            <div>
                                <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED]">
                                    <BarChart3 className="h-5 w-5 text-white" strokeWidth={1.75} />
                                </div>
                                <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-semibold text-white">
                                    Analytics & E-commerce
                                </h3>
                                <div className="mt-4 sm:mt-5 flex flex-col gap-4 sm:gap-5">
                                    {ANALYTICS_ITEMS.map((item) => (
                                        <div key={item.title}>
                                            <p className="text-sm font-medium text-[#E2E8F0]">{item.title}</p>
                                            <p className="mt-0.5 text-xs sm:text-sm leading-6 text-[#94A3B8]">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <a href="#contact" className="mt-6 sm:mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-[#38BDF8]">
                                See a sample report
                                <ArrowRight className="h-4 w-4" strokeWidth={2} />
                            </a>
                        </div>

                        {/* Search & Local — 4 services */}
                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-left sm:p-8 md:col-span-2 lg:col-span-7 lg:p-10">
                            <h3 className="text-base sm:text-lg font-semibold text-[#38BDF8]">Search & Local</h3>
                            <p className="mt-1 text-xs sm:text-sm text-[#64748B]">
                                Getting found by the people already searching for you.
                            </p>
                            <div className="mt-5 sm:mt-6 grid gap-5 sm:gap-6 sm:grid-cols-2">
                                {SEARCH_ITEMS.map((item) => (
                                    <ServiceRow key={item.title} {...item} />
                                ))}
                            </div>
                        </div>

                        {/* Social & Content — 3 services */}
                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-left sm:p-8 md:col-span-2 lg:col-span-5 lg:p-10">
                            <h3 className="text-base sm:text-lg font-semibold text-[#38BDF8]">Social & Content</h3>
                            <p className="mt-1 text-xs sm:text-sm text-[#64748B]">
                                Consistent presence and a voice people recognize.
                            </p>
                            <div className="mt-5 sm:mt-6 flex flex-col gap-5 sm:gap-6">
                                {SOCIAL_ITEMS.map((item) => (
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
                            Marketing that reports back in numbers, not vibes.
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
                            From audit to results, in four steps.
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

export default DigitalMarketing;