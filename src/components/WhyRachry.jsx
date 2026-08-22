// import { Target, TrendingUp, Sparkles, Users, ShieldCheck, Clock } from 'lucide-react';

// const REASONS = [
//   {
//     icon: Target,
//     title: 'Practical Solutions',
//     description:
//       'We focus on building technology that solves real business needs and creates measurable value.',
//   },
//   {
//     icon: TrendingUp,
//     title: 'Growth Focus',
//     description:
//       'We look beyond technology and help businesses strengthen their digital presence and move forward.',
//   },
//   {
//     icon: Sparkles,
//     title: 'Modern Approach',
//     description:
//       'We use modern technologies, creative thinking, and practical strategies to build better digital experiences.',
//   },
//   {
//     icon: Users,
//     title: 'Talent & Opportunity',
//     description:
//       'We create meaningful connections between businesses and emerging talent through learning and opportunities.',
//   },
//   {
//     icon: ShieldCheck,
//     title: 'JustDial Approved',
//     description:
//       'Recognized and verified as a trusted company on JustDial, backed by credibility and reliability.',
//   },
//   {
//     icon: Clock,
//     title: 'Timely Delivery',
//     description:
//       'We respect deadlines and make sure every project is delivered on time without compromising quality.',
//   },
// ];

// function WhyRachry() {
//   return (
//     <section
//       id="why-rachry"
//       className="relative overflow-hidden bg-[#050B18] py-28 lg:py-40"
//     >
//       {/* Background Glow */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute left-[-15%] top-1/3 h-[500px] w-[500px] rounded-full bg-[#2563EB]/10 blur-[150px]" />
//         <div className="absolute right-[-15%] bottom-1/4 h-[500px] w-[500px] rounded-full bg-[#7C3AED]/10 blur-[150px]" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 mx-auto w-full max-w-[1500px] px-8 text-center lg:px-12">

//         {/* Heading */}
//         <div className="mx-auto max-w-3xl">
//           <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#38BDF8]">
//             Why Rachry
//           </p>

//           <h2 className="text-4xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl">
//             One place to{' '}
//             <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
//               build, grow and learn.
//             </span>
//           </h2>

//           <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#94A3B8] lg:text-xl">
//             We bring technology, digital growth, and talent together under
//             one ecosystem — creating practical value for businesses and
//             meaningful opportunities for people.
//           </p>
//         </div>

//         {/* Reasons */}
//         <div className="mx-auto mt-20 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {REASONS.map((reason) => {
//             const Icon = reason.icon;
//             return (
//               <article
//                 key={reason.title}
//                 className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-left transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.06] lg:p-10"
//               >
//                 {/* Icon */}
//                 <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED] shadow-lg shadow-[#2563EB]/20 transition-transform duration-500 group-hover:scale-110">
//                   <Icon className="h-7 w-7 text-white" strokeWidth={1.75} />
//                 </div>

//                 {/* Title */}
//                 <h3 className="mt-6 text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-[#38BDF8]">
//                   {reason.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="mt-4 text-base leading-7 text-[#64748B]">
//                   {reason.description}
//                 </p>

//                 {/* Corner glow on hover */}
//                 <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#2563EB]/0 blur-3xl transition-all duration-500 group-hover:bg-[#2563EB]/20" />
//               </article>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default WhyRachry;



import { Target, TrendingUp, Sparkles, Users, ShieldCheck, Clock } from 'lucide-react';

const REASONS = [
  {
    icon: Target,
    title: 'Practical Solutions',
    description:
      'We focus on building technology that solves real business needs and creates measurable value.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Focus',
    description:
      'We look beyond technology and help businesses strengthen their digital presence and move forward.',
  },
  {
    icon: Sparkles,
    title: 'Modern Approach',
    description:
      'We use modern technologies, creative thinking, and practical strategies to build better digital experiences.',
  },
  {
    icon: Users,
    title: 'Talent & Opportunity',
    description:
      'We create meaningful connections between businesses and emerging talent through learning and opportunities.',
  },
  {
    icon: ShieldCheck,
    title: 'JustDial Approved',
    description:
      'Recognized and verified as a trusted company on JustDial, backed by credibility and reliability.',
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description:
      'We respect deadlines and make sure every project is delivered on time without compromising quality.',
  },
];

function WhyRachry() {
  return (
    <section
      id="why-rachry"
      className="relative overflow-hidden bg-[#050B18] py-14 sm:py-20 lg:py-40"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-15%] top-1/3 h-64 w-64 rounded-full bg-[#2563EB]/10 blur-[90px] sm:h-96 sm:w-96 sm:blur-[120px] lg:h-[500px] lg:w-[500px] lg:blur-[150px]" />
        <div className="absolute right-[-15%] bottom-1/4 h-64 w-64 rounded-full bg-[#7C3AED]/10 blur-[90px] sm:h-96 sm:w-96 sm:blur-[120px] lg:h-[500px] lg:w-[500px] lg:blur-[150px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 text-center sm:px-8 lg:px-12">

        {/* Heading */}
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#38BDF8] sm:mb-6 sm:text-sm sm:tracking-[0.3em]">
            Why Rachry
          </p>

          <h2 className="text-3xl font-bold leading-[1.2] tracking-tight text-white sm:text-5xl lg:text-6xl">
            One place to{' '}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
              build, grow and learn.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#94A3B8] sm:mt-8 sm:text-lg sm:leading-8 lg:text-xl">
            We bring technology, digital growth, and talent together under
            one ecosystem — creating practical value for businesses and
            meaningful opportunities for people.
          </p>
        </div>

        {/* Reasons */}
        <div className="mx-auto mt-10 grid max-w-6xl gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:mt-20 lg:grid-cols-3">
          {REASONS.map((reason) => {
            const Icon = reason.icon;
            return (
              <article
                key={reason.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.06] sm:rounded-3xl sm:p-8 lg:p-10"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED] shadow-lg shadow-[#2563EB]/20 transition-transform duration-500 group-hover:scale-110 sm:h-14 sm:w-14">
                  <Icon className="h-6 w-6 text-white sm:h-7 sm:w-7" strokeWidth={1.75} />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-[#38BDF8] sm:mt-6 sm:text-2xl">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-[#64748B] sm:mt-4 sm:text-base sm:leading-7">
                  {reason.description}
                </p>

                {/* Corner glow on hover */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#2563EB]/0 blur-3xl transition-all duration-500 group-hover:bg-[#2563EB]/20" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyRachry;