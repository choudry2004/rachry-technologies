// import {
//     Home, Users2, Handshake, Zap, ShieldCheck,
//     Wrench, TrendingUp, GraduationCap, Target,
// } from 'lucide-react';
// import Process from '../Process';
// import CTA from '../CTA';

// const PILLARS = [
//     {
//         icon: Wrench,
//         title: 'Build',
//         description: 'Practical software and IT solutions that solve real business problems.',
//     },
//     {
//         icon: TrendingUp,
//         title: 'Grow',
//         description: 'Digital marketing and growth strategies that expand your reach.',
//     },
//     {
//         icon: GraduationCap,
//         title: 'Learn',
//         description: 'Opportunities for students to gain real, hands-on experience.',
//     },
// ];

// const STRATEGY_POINTS = [
//     {
//         icon: Home,
//         title: 'Remote-first',
//         description: 'No office or location restrictions — we work from wherever the right talent is.',
//     },
//     {
//         icon: Users2,
//         title: 'Project-based team',
//         description: 'Developers, designers, QA, and marketing specialists organised around each requirement.',
//     },
//     {
//         icon: Handshake,
//         title: 'Strong collaboration',
//         description: 'Team members coordinate closely, so nothing gets lost between roles.',
//     },
//     {
//         icon: Zap,
//         title: 'Efficient delivery',
//         description: 'Parallel work and a flexible team structure keep projects moving efficiently.',
//     },
//     {
//         icon: ShieldCheck,
//         title: 'Quality first',
//         description: 'Speed never comes at the cost of dedicated testing and quality checks.',
//     },
// ];

// const VISION_POINTS = [
//     {
//         icon: Target,
//         title: 'Long-term partnerships',
//         description: 'We aim to grow alongside the businesses we work with, not just deliver a one-time project.',
//     },
//     {
//         icon: Users2,
//         title: 'A growing talent network',
//         description: 'Every project widens our network of developers, designers, and specialists ready for the next challenge.',
//     },
//     {
//         icon: GraduationCap,
//         title: 'Investing in students',
//         description: 'By training and mentoring students today, we are building the professionals who will drive our work tomorrow.',
//     },
// ];

// function OurStrategy() {
//     return (
//         <>
//             {/* Hero */}
//             <section className="relative overflow-hidden bg-[#050B18] pt-40 pb-20 lg:pt-48 lg:pb-28">
//                 <div className="pointer-events-none absolute inset-0">
//                     <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[#2563EB]/15 blur-[120px]" />
//                     <div className="absolute right-1/4 top-1/3 h-96 w-96 rounded-full bg-[#7C3AED]/15 blur-[120px]" />
//                 </div>

//                 <div className="relative z-10 mx-auto w-full max-w-[1500px] px-8 text-center lg:px-12">
//                     <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#38BDF8]">
//                         Who We Are
//                     </p>

//                     <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl">
//                         Our{' '}
//                         <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
//                             Strategy
//                         </span>
//                     </h1>

//                     <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#94A3B8] lg:text-xl">
//                         We bring technology, digital growth, and talent together under
//                         one ecosystem — creating practical value for businesses and
//                         meaningful opportunities for people.
//                     </p>
//                     <p className="mx-auto mt-6 max-w-xl text-base font-medium italic text-[#38BDF8]">
//                         "Build the right team for the right project."
//                     </p>
//                 </div>
//             </section>

//             {/* Three Pillars */}
//             <section className="relative overflow-hidden bg-[#050B18] pt-24 pb-28 lg:pt-28 lg:pb-32">
//                 <div className="relative z-10 mx-auto w-full max-w-[1500px] px-8 lg:px-12">
//                     <div className="mx-auto max-w-2xl text-center">
//                         <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#38BDF8]">
//                             Our Foundation
//                         </p>
//                         <h2 className="text-2xl font-bold leading-[1.2] tracking-tight text-white sm:text-3xl">
//                             Everything we do rests on three pillars.
//                         </h2>
//                     </div>

//                     <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
//                         {PILLARS.map((pillar) => {
//                             const Icon = pillar.icon;
//                             return (
//                                 <div
//                                     key={pillar.title}
//                                     className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center"
//                                 >
//                                     <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED]">
//                                         <Icon className="h-6 w-6 text-white" strokeWidth={1.75} />
//                                     </div>
//                                     <h3 className="mt-5 text-2xl font-bold text-[#38BDF8]">
//                                         {pillar.title}
//                                     </h3>
//                                     <p className="mt-3 text-base leading-7 text-[#64748B]">
//                                         {pillar.description}
//                                     </p>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </section>

//             {/* How We Build Our Team */}
//             <section className="relative overflow-hidden bg-[#080F22] py-28 lg:py-32">
//                 <div className="pointer-events-none absolute inset-0">
//                     <div className="absolute left-[-10%] top-1/4 h-96 w-96 rounded-full bg-[#2563EB]/10 blur-[140px]" />
//                     <div className="absolute right-[-10%] bottom-1/4 h-96 w-96 rounded-full bg-[#7C3AED]/10 blur-[140px]" />
//                 </div>

//                 <div className="relative z-10 mx-auto w-full max-w-[1500px] px-8 lg:px-12">
//                     <div className="text-center">
//                         <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#38BDF8]">
//                             How We Work
//                         </p>
//                         <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl">
//                             RACHRY's strategy doesn't depend on a traditional, office-based team.
//                         </h2>
//                         <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#94A3B8]">
//                             We use a remote-first model to bring together the right
//                             professionals for each project, wherever they are.
//                         </p>
//                     </div>

//                     <div className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
//                         {STRATEGY_POINTS.map((point) => {
//                             const Icon = point.icon;
//                             return (
//                                 <div key={point.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
//                                     <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED]">
//                                         <Icon className="h-5 w-5 text-white" strokeWidth={1.75} />
//                                     </div>
//                                     <h3 className="mt-4 text-base font-semibold text-white">{point.title}</h3>
//                                     <p className="mt-2 text-sm leading-6 text-[#94A3B8]">{point.description}</p>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </section>

//             {/* Strategy Summary */}
//             <section className="relative overflow-hidden bg-[#050B18] pt-28 pb-28 lg:pt-32 lg:pb-32">
//                 <div className="relative z-10 mx-auto w-full max-w-[1500px] px-8 lg:px-12">
//                     <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center lg:p-16">
//                         <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#38BDF8]">
//                             In One Line
//                         </p>

//                         <p className="text-2xl font-medium leading-relaxed text-white lg:text-3xl">
//                             Our strategy is simple: bring the right people together, work
//                             smarter through remote collaboration, and deliver quality
//                             solutions efficiently.
//                         </p>
//                     </div>
//                 </div>
//             </section>

//             {/* Our Long-Term Vision */}
//             <section className="relative overflow-hidden bg-[#080F22] pt-28 pb-28 lg:pt-32 lg:pb-40">
//                 <div className="pointer-events-none absolute inset-0">
//                     <div className="absolute right-[-10%] top-1/3 h-96 w-96 rounded-full bg-[#7C3AED]/10 blur-[140px]" />
//                     <div className="absolute left-[-10%] bottom-1/4 h-96 w-96 rounded-full bg-[#2563EB]/10 blur-[140px]" />
//                 </div>

//                 <div className="relative z-10 mx-auto w-full max-w-[1500px] px-8 lg:px-12">
//                     <div className="text-center">
//                         <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#38BDF8]">
//                             Looking Ahead
//                         </p>
//                         <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl">
//                             Our Long-Term Vision
//                         </h2>
//                         <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#94A3B8]">
//                             Strategy isn't just about how we work today — it's about where
//                             we're headed. Here's what we're building toward.
//                         </p>
//                     </div>

//                     <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
//                         {VISION_POINTS.map((point) => {
//                             const Icon = point.icon;
//                             return (
//                                 <div
//                                     key={point.title}
//                                     className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center"
//                                 >
//                                     <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED]">
//                                         <Icon className="h-5 w-5 text-white" strokeWidth={1.75} />
//                                     </div>
//                                     <h3 className="mt-4 text-base font-semibold text-white">{point.title}</h3>
//                                     <p className="mt-2 text-sm leading-6 text-[#94A3B8]">{point.description}</p>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </section>

//             {/* How We Work (reuses existing Process component) */}
//             <Process />

//             <CTA />
//         </>
//     );
// }

// export default OurStrategy;


import { useEffect } from 'react';
import {
    Home, Users2, Handshake, Zap, ShieldCheck,
    Wrench, TrendingUp, GraduationCap, Target,
} from 'lucide-react';
import Process from '../Process';
import CTA from '../CTA';

const PILLARS = [
    {
        icon: Wrench,
        title: 'Build',
        description: 'Practical software and IT solutions that solve real business problems.',
    },
    {
        icon: TrendingUp,
        title: 'Grow',
        description: 'Digital marketing and growth strategies that expand your reach.',
    },
    {
        icon: GraduationCap,
        title: 'Learn',
        description: 'Opportunities for students to gain real, hands-on experience.',
    },
];

const STRATEGY_POINTS = [
    {
        icon: Home,
        title: 'Remote-first',
        description: 'No office or location restrictions — we work from wherever the right talent is.',
    },
    {
        icon: Users2,
        title: 'Project-based team',
        description: 'Developers, designers, QA, and marketing specialists organised around each requirement.',
    },
    {
        icon: Handshake,
        title: 'Strong collaboration',
        description: 'Team members coordinate closely, so nothing gets lost between roles.',
    },
    {
        icon: Zap,
        title: 'Efficient delivery',
        description: 'Parallel work and a flexible team structure keep projects moving efficiently.',
    },
    {
        icon: ShieldCheck,
        title: 'Quality first',
        description: 'Speed never comes at the cost of dedicated testing and quality checks.',
    },
];

const VISION_POINTS = [
    {
        icon: Target,
        title: 'Long-term partnerships',
        description: 'We aim to grow alongside the businesses we work with, not just deliver a one-time project.',
    },
    {
        icon: Users2,
        title: 'A growing talent network',
        description: 'Every project widens our network of developers, designers, and specialists ready for the next challenge.',
    },
    {
        icon: GraduationCap,
        title: 'Investing in students',
        description: 'By training and mentoring students today, we are building the professionals who will drive our work tomorrow.',
    },
];

function OurStrategy() {
    useEffect(() => {
        document.title = 'Our Strategy | Rachry Technologies';

        const description =
            'Discover how Rachry Technologies combines software, digital growth and talent through a remote-first, project-based strategy focused on quality and long-term partnerships.';

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
            {/* Hero */}
            <section className="relative overflow-hidden bg-[#050B18] pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-48 lg:pb-28">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-1/4 top-1/4 h-56 w-56 rounded-full bg-[#2563EB]/15 blur-[80px] sm:h-72 sm:w-72 sm:blur-[100px] lg:h-96 lg:w-96 lg:blur-[120px]" />
                    <div className="absolute right-1/4 top-1/3 h-56 w-56 rounded-full bg-[#7C3AED]/15 blur-[80px] sm:h-72 sm:w-72 sm:blur-[100px] lg:h-96 lg:w-96 lg:blur-[120px]" />
                </div>

                <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 text-center sm:px-8 lg:px-12">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#38BDF8] sm:mb-6 sm:text-sm sm:tracking-[0.3em]">
                        Who We Are
                    </p>

                    <h1 className="mx-auto max-w-3xl text-3xl font-bold leading-[1.2] tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Our{' '}
                        <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
                            Strategy
                        </span>
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#94A3B8] sm:mt-8 sm:text-lg sm:leading-8 lg:text-xl">
                        We bring technology, digital growth, and talent together under
                        one ecosystem — creating practical value for businesses and
                        meaningful opportunities for people.
                    </p>
                    <p className="mx-auto mt-4 max-w-xl text-sm font-medium italic text-[#38BDF8] sm:mt-6 sm:text-base">
                        "Build the right team for the right project."
                    </p>
                </div>
            </section>

            {/* Three Pillars */}
            <section className="relative overflow-hidden bg-[#050B18] pt-16 pb-16 sm:pt-24 sm:pb-28 lg:pt-28 lg:pb-32">
                <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#38BDF8] sm:mb-4 sm:text-sm sm:tracking-[0.3em]">
                            Our Foundation
                        </p>
                        <h2 className="text-xl font-bold leading-[1.25] tracking-tight text-white sm:text-2xl sm:leading-[1.2] lg:text-3xl">
                            Everything we do rests on three pillars.
                        </h2>
                    </div>

                    <div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 md:grid-cols-3">
                        {PILLARS.map((pillar) => {
                            const Icon = pillar.icon;
                            return (
                                <div
                                    key={pillar.title}
                                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center sm:rounded-3xl sm:p-8"
                                >
                                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED] sm:h-12 sm:w-12 sm:rounded-2xl">
                                        <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" strokeWidth={1.75} />
                                    </div>
                                    <h3 className="mt-4 text-xl font-bold text-[#38BDF8] sm:mt-5 sm:text-2xl">
                                        {pillar.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-6 text-[#64748B] sm:mt-3 sm:text-base sm:leading-7">
                                        {pillar.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* How We Build Our Team */}
            <section className="relative overflow-hidden bg-[#080F22] py-16 sm:py-28 lg:py-32">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-[-10%] top-1/4 h-56 w-56 rounded-full bg-[#2563EB]/10 blur-[90px] sm:h-72 sm:w-72 sm:blur-[110px] lg:h-96 lg:w-96 lg:blur-[140px]" />
                    <div className="absolute right-[-10%] bottom-1/4 h-56 w-56 rounded-full bg-[#7C3AED]/10 blur-[90px] sm:h-72 sm:w-72 sm:blur-[110px] lg:h-96 lg:w-96 lg:blur-[140px]" />
                </div>

                <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
                    <div className="text-center">
                        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#38BDF8] sm:mb-6 sm:text-sm sm:tracking-[0.3em]">
                            How We Work
                        </p>
                        <h2 className="mx-auto max-w-2xl text-2xl font-bold leading-[1.2] tracking-tight text-white sm:text-3xl lg:text-4xl">
                            RACHRY's strategy doesn't depend on a traditional, office-based team.
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#94A3B8] sm:mt-6 sm:text-base sm:leading-7">
                            We use a remote-first model to bring together the right
                            professionals for each project, wherever they are.
                        </p>
                    </div>

                    <div className="mx-auto mt-10 grid max-w-6xl gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                        {STRATEGY_POINTS.map((point) => {
                            const Icon = point.icon;
                            return (
                                <div key={point.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED] sm:h-10 sm:w-10">
                                        <Icon className="h-4 w-4 text-white sm:h-5 sm:w-5" strokeWidth={1.75} />
                                    </div>
                                    <h3 className="mt-3 text-base font-semibold text-white sm:mt-4">{point.title}</h3>
                                    <p className="mt-2 text-sm leading-6 text-[#94A3B8]">{point.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Strategy Summary */}
            <section className="relative overflow-hidden bg-[#050B18] pt-16 pb-16 sm:pt-28 sm:pb-28 lg:pt-32 lg:pb-32">
                <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
                    <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center sm:rounded-3xl sm:p-10 lg:p-16">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#38BDF8] sm:mb-4 sm:text-sm sm:tracking-[0.3em]">
                            In One Line
                        </p>

                        <p className="text-lg font-medium leading-relaxed text-white sm:text-2xl lg:text-3xl">
                            Our strategy is simple: bring the right people together, work
                            smarter through remote collaboration, and deliver quality
                            solutions efficiently.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Long-Term Vision */}
            <section className="relative overflow-hidden bg-[#080F22] pt-16 pb-16 sm:pt-28 sm:pb-28 lg:pt-32 lg:pb-40">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute right-[-10%] top-1/3 h-56 w-56 rounded-full bg-[#7C3AED]/10 blur-[90px] sm:h-72 sm:w-72 sm:blur-[110px] lg:h-96 lg:w-96 lg:blur-[140px]" />
                    <div className="absolute left-[-10%] bottom-1/4 h-56 w-56 rounded-full bg-[#2563EB]/10 blur-[90px] sm:h-72 sm:w-72 sm:blur-[110px] lg:h-96 lg:w-96 lg:blur-[140px]" />
                </div>

                <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
                    <div className="text-center">
                        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#38BDF8] sm:mb-6 sm:text-sm sm:tracking-[0.3em]">
                            Looking Ahead
                        </p>
                        <h2 className="mx-auto max-w-2xl text-2xl font-bold leading-[1.2] tracking-tight text-white sm:text-3xl lg:text-4xl">
                            Our Long-Term Vision
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#94A3B8] sm:mt-6 sm:text-base sm:leading-7">
                            Strategy isn't just about how we work today — it's about where
                            we're headed. Here's what we're building toward.
                        </p>
                    </div>

                    <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 md:grid-cols-3">
                        {VISION_POINTS.map((point) => {
                            const Icon = point.icon;
                            return (
                                <div
                                    key={point.title}
                                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center sm:p-6"
                                >
                                    <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED] sm:h-10 sm:w-10">
                                        <Icon className="h-4 w-4 text-white sm:h-5 sm:w-5" strokeWidth={1.75} />
                                    </div>
                                    <h3 className="mt-3 text-base font-semibold text-white sm:mt-4">{point.title}</h3>
                                    <p className="mt-2 text-sm leading-6 text-[#94A3B8]">{point.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* How We Work (reuses existing Process component) */}
            <Process />

            <CTA />
        </>
    );
}

export default OurStrategy;