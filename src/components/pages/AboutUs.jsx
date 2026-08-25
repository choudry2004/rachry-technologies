import {
    Users, Compass, ShieldCheck, Layers,
    Globe, Smartphone, Code2, ShoppingCart,
    Workflow, Bot, PenTool, Megaphone,
    Palette, GraduationCap, Handshake, Sparkles,
    BadgeCheck,
} from 'lucide-react';
import { useSEO } from '../../hooks/useSEO';
import CTA from '../CTA';
import justDial from '../../assets/justdial-seeklogo.png'
const APPROACH_TEAM = [
    { icon: Code2, title: 'Developers' },
    { icon: PenTool, title: 'Designers' },
    { icon: ShieldCheck, title: 'QA Professionals' },
    { icon: Compass, title: 'Requirement Specialists' },
    { icon: Megaphone, title: 'Digital Marketing Experts' },
];

const WHAT_WE_DO = [
    { icon: Globe, title: 'Websites', desc: 'Fast, modern sites built to convert and scale.' },
    { icon: Smartphone, title: 'Mobile Applications', desc: 'Android, iOS, and cross-platform apps.' },
    { icon: Code2, title: 'Custom Software', desc: 'Solutions built around how your business actually works.' },
    { icon: ShoppingCart, title: 'E-commerce', desc: 'Online stores that are built to sell.' },
    { icon: Workflow, title: 'ERP / CRM', desc: 'Systems that bring order to growing operations.' },
    { icon: Bot, title: 'AI Automation', desc: 'Automating the repetitive, so teams can focus on the work that matters.' },
    { icon: Palette, title: 'UI/UX', desc: 'Interfaces that are intuitive to use and easy to build on.' },
    { icon: Megaphone, title: 'Digital Marketing', desc: 'Growth strategies that bring the right audience to you.' },
    { icon: Sparkles, title: 'Creative Design', desc: 'Visual identity and content that stands out.' },
    { icon: GraduationCap, title: 'Student Solutions', desc: 'Projects, training, and internships for emerging talent.' },
];

const WHY_RACHRY = [
    {
        title: 'Great People',
        description: 'We believe great work starts with the right people on every project.',
    },
    {
        title: 'Strong Collaboration',
        description: 'Continuous communication between our team and yours, at every stage.',
    },
    {
        title: 'Flexible Team Structure',
        description: 'We adapt our team to each project\'s requirements, not the other way around.',
    },
    {
        title: 'Quality Through Testing',
        description: 'Dedicated QA and continuous collaboration keep delivery reliable.',
    },
];

function AboutUs() {

    useSEO({
        title: 'About Rachry Technologies | Software Company in Salem, Tamil Nadu',
        description: 'Learn about Rachry Technologies, a technology and digital solutions company based in Kattukottai, near Salem, Tamil Nadu, providing software development, creative design, digital marketing and student solutions.',
        path: '/about',
    });
    
    return (
        <>
            {/* Hero */}
            <section className="relative overflow-hidden bg-[#050B18] pt-28 pb-14 sm:pt-36 sm:pb-20 lg:pt-48 lg:pb-28">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute right-[-10%] top-1/4 h-64 w-64 sm:h-[500px] sm:w-[500px] rounded-full bg-[#7C3AED]/10 blur-[100px] sm:blur-[150px]" />
                    <div className="absolute left-[-10%] bottom-1/4 h-56 w-56 sm:h-[400px] sm:w-[400px] rounded-full bg-[#2563EB]/10 blur-[90px] sm:blur-[140px]" />
                </div>

                <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 text-center sm:px-8 lg:px-12">
                    <p className="mb-4 sm:mb-6 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#38BDF8]">
                        Who We Are
                    </p>

                    <h1 className="mx-auto max-w-4xl text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] tracking-tight text-white lg:text-6xl">
                        Technology that builds.
                        <br />
                        <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
                            Ideas that grow.
                        </span>
                        <br />
                        Opportunities that matter.
                    </h1>

                    <p className="mx-auto mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-[#94A3B8] lg:text-xl">
                        RACHRY TECHNOLOGY is a technology and digital solutions company
                        focused on building practical, modern and reliable solutions for
                        businesses, professionals and students.
                    </p>
                    <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base leading-6 sm:leading-7 text-[#64748B]">
                        We bring together expertise across software development, creative
                        design, digital marketing and student solutions to turn ideas and
                        requirements into meaningful digital products.
                    </p>

                    {/* JustDial Verified Badge */}
                    <div className="mx-auto mt-6 sm:mt-8 flex w-fit max-w-full flex-wrap items-center justify-center gap-2 sm:gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 sm:px-5 sm:py-2.5">
                        <img
                            src={justDial}
                            alt="JustDial"
                            className="h-4 w-auto object-contain sm:h-5"
                        />
                        <span className="h-4 w-px bg-white/15" />
                        <BadgeCheck className="h-4 w-4 shrink-0 text-[#38BDF8]" strokeWidth={2} />
                        <span className="text-xs sm:text-sm font-medium text-[#CBD5E1]">
                            Verified &amp; Trusted on JustDial
                        </span>
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="relative overflow-hidden bg-[#050B18] pt-16 pb-16 sm:pt-24 sm:pb-28 lg:pt-28 lg:pb-32">
                <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
                    <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-center sm:p-10 lg:p-14">
                        <p className="mb-3 sm:mb-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#38BDF8]">
                            Our Approach
                        </p>

                        <h2 className="mx-auto max-w-3xl text-2xl sm:text-3xl font-bold leading-[1.15] tracking-tight text-white lg:text-4xl">
                            Remote-first, so we bring in the right people for the job.
                        </h2>

                        <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base leading-6 sm:leading-7 text-[#94A3B8]">
                            We follow a remote-first approach, allowing us to bring together
                            the right professionals based on each project requirement. Our
                            team works collaboratively to keep projects flexible, efficient
                            and focused.
                        </p>

                        <div className="mx-auto mt-8 sm:mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
                            {APPROACH_TEAM.map((member) => {
                                const Icon = member.icon;
                                return (
                                    <div
                                        key={member.title}
                                        className="flex items-center gap-2 sm:gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 sm:px-5 sm:py-2.5"
                                    >
                                        <Icon className="h-4 w-4 shrink-0 text-[#38BDF8]" strokeWidth={1.75} />
                                        <span className="text-xs sm:text-sm font-medium text-[#CBD5E1]">{member.title}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do */}
            <section className="relative overflow-hidden bg-[#080F22] py-16 sm:py-24 lg:py-32">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-[-10%] top-1/4 h-56 w-56 sm:h-96 sm:w-96 rounded-full bg-[#2563EB]/10 blur-[90px] sm:blur-[140px]" />
                    <div className="absolute right-[-10%] bottom-1/4 h-56 w-56 sm:h-96 sm:w-96 rounded-full bg-[#7C3AED]/10 blur-[90px] sm:blur-[140px]" />
                </div>

                <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
                    <div className="text-center">
                        <p className="mb-4 sm:mb-6 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#38BDF8]">
                            What We Do
                        </p>
                        <h2 className="mx-auto max-w-2xl text-2xl sm:text-3xl font-bold leading-[1.15] tracking-tight text-white lg:text-4xl">
                            End-to-end digital solutions, under one roof.
                        </h2>
                        <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base leading-6 sm:leading-7 text-[#94A3B8]">
                            From websites and mobile applications to custom software,
                            e-commerce, ERP/CRM, AI automation, UI/UX, digital marketing and
                            creative design — we also support students through projects,
                            training and internships.
                        </p>
                    </div>

                    <div className="mx-auto mt-10 sm:mt-16 grid max-w-6xl gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
                        {WHAT_WE_DO.map((item) => {
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

            {/* Why RACHRY */}
            <section className="relative overflow-hidden bg-[#050B18] pt-16 pb-16 sm:pt-24 sm:pb-28 lg:pt-28 lg:pb-40">
                <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 text-center sm:px-8 lg:px-12">
                    <p className="mb-4 sm:mb-6 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#38BDF8]">
                        Why RACHRY
                    </p>
                    <h2 className="mx-auto max-w-2xl text-2xl sm:text-3xl font-bold leading-[1.15] tracking-tight text-white lg:text-4xl">
                        Great people. Strong collaboration. The right technology.
                    </h2>

                    <div className="mx-auto mt-10 sm:mt-16 grid max-w-6xl gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        {WHY_RACHRY.map((value, index) => (
                            <div
                                key={value.title}
                                className="group relative rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-center transition-all duration-500 hover:-translate-y-2 hover:border-[#2563EB]/30 hover:bg-white/[0.06] sm:p-8"
                            >
                                <span className="mx-auto flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED] text-sm font-bold text-white shadow-lg shadow-[#2563EB]/20 transition-transform duration-500 group-hover:scale-110">
                                    {String(index + 1).padStart(2, '0')}
                                </span>

                                <h3 className="mt-5 sm:mt-6 text-lg sm:text-xl font-semibold text-white transition-colors duration-300 group-hover:text-[#38BDF8]">
                                    {value.title}
                                </h3>

                                <p className="mx-auto mt-3 max-w-xs text-xs sm:text-sm leading-6 text-[#64748B]">
                                    {value.description}
                                </p>

                                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#2563EB]/0 blur-3xl transition-all duration-500 group-hover:bg-[#2563EB]/20" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tagline */}
            <section className="relative overflow-hidden bg-[#050B18] pt-4 pb-16 sm:pb-28 lg:pt-4 lg:pb-40">
                <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
                    <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-center sm:p-10 lg:p-16">
                        <p className="mb-3 sm:mb-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#38BDF8]">
                            Our Promise
                        </p>

                        <p className="text-xl sm:text-2xl font-medium leading-relaxed text-white lg:text-3xl">
                            Build Smarter. Work Flexibly. Deliver Better.
                        </p>
                    </div>
                </div>
            </section>

            <CTA />
        </>
    );
}

export default AboutUs;