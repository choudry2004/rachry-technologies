// import { Code2, Server, Smartphone, Database, Brain } from 'lucide-react';

// const CATEGORIES = [
//   {
//     icon: Code2,
//     category: 'Frontend',
//     description: 'Modern, fast, and responsive user interfaces.',
//     technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js'],
//   },
//   {
//     icon: Server,
//     category: 'Backend',
//     description: 'Reliable and scalable server-side systems.',
//     technologies: ['Node.js', 'Python', 'Django', 'Flask'],
//   },
//   {
//     icon: Smartphone,
//     category: 'Mobile',
//     description: 'Cross-platform apps that feel native.',
//     technologies: ['Flutter', 'React Native'],
//   },
//   {
//     icon: Database,
//     category: 'Database',
//     description: 'Structured and flexible data storage.',
//     technologies: ['MySQL', 'PostgreSQL', 'MongoDB'],
//   },
//   {
//     icon: Brain,
//     category: 'AI / ML',
//     description: 'Intelligent systems and smart automation.',
//     technologies: ['AI & ML Technologies'],
//   },
// ];

// const ALL_TECH = CATEGORIES.flatMap((c) => c.technologies);
// const MARQUEE_ITEMS = [...ALL_TECH, ...ALL_TECH];

// function Technologies() {
//   return (
//     <section
//       id="technologies"
//       className="relative overflow-hidden bg-[#050B18] py-10 lg:py-10"
//     >
//       {/* Background Glow */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute left-[-10%] top-1/3 h-[450px] w-[450px] rounded-full bg-[#2563EB]/10 blur-[150px]" />
//         <div className="absolute right-[-10%] bottom-1/4 h-[450px] w-[450px] rounded-full bg-[#7C3AED]/10 blur-[150px]" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 mx-auto w-full max-w-[1500px] px-8 text-center lg:px-12">

//         {/* Heading */}
//         <div className="mx-auto max-w-3xl">
//           <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#38BDF8]">
//             Technologies
//           </p>

//           <h2 className="text-4xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl">
//             Built with{' '}
//             <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
//               modern technology.
//             </span>
//           </h2>

//           <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#94A3B8] lg:text-xl">
//             We choose technologies based on your project requirements,
//             performance needs, scalability, and long-term goals.
//           </p>
//         </div>
//       </div>

//       {/* Full-width Marquee Belt */}
//       <div className="marquee-mask relative mx-auto mt-16 max-w-[1500px] overflow-hidden">
//         <div className="marquee-track flex w-max items-center gap-4">
//           {MARQUEE_ITEMS.map((tech, i) => (
//             <span
//               key={`${tech}-${i}`}
//               className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-base font-medium text-[#CBD5E1]"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Category Cards (no marquee, plain list) */}
//       <div className="relative z-10 mx-auto mt-20 w-full max-w-[1500px] px-8 lg:px-12">
//         <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {CATEGORIES.map((item) => {
//             const Icon = item.icon;
//             return (
//               <article
//                 key={item.category}
//                 className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-left transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.06]"
//               >
//                 <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED] shadow-lg shadow-[#2563EB]/20 transition-transform duration-500 group-hover:scale-110">
//                   <Icon className="h-7 w-7 text-white" strokeWidth={1.75} />
//                 </div>

//                 <h3 className="mt-6 text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-[#38BDF8]">
//                   {item.category}
//                 </h3>

//                 <p className="mt-3 text-base leading-7 text-[#64748B]">
//                   {item.description}
//                 </p>

//                 <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#2563EB]/0 blur-3xl transition-all duration-500 group-hover:bg-[#2563EB]/20" />
//               </article>
//             );
//           })}
//         </div>
//       </div>

//       <style>{`
//         .marquee-mask {
//           -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
//           mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
//         }
//         .marquee-track {
//           animation: marquee-scroll 30s linear infinite;
//         }
//         .marquee-mask:hover .marquee-track {
//           animation-play-state: paused;
//         }
//         @keyframes marquee-scroll {
//           from { transform: translateX(0); }
//           to { transform: translateX(-50%); }
//         }
//       `}</style>
//     </section>
//   );
// }

// export default Technologies;


import { Code2, Server, Smartphone, Database, Brain } from 'lucide-react';

const CATEGORIES = [
  {
    icon: Code2,
    category: 'Frontend',
    description: 'Modern, fast, and responsive user interfaces.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js'],
  },
  {
    icon: Server,
    category: 'Backend',
    description: 'Reliable and scalable server-side systems.',
    technologies: ['Node.js', 'Python', 'Django', 'Flask'],
  },
  {
    icon: Smartphone,
    category: 'Mobile',
    description: 'Cross-platform apps that feel native.',
    technologies: ['Flutter', 'React Native'],
  },
  {
    icon: Database,
    category: 'Database',
    description: 'Structured and flexible data storage.',
    technologies: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    icon: Brain,
    category: 'AI / ML',
    description: 'Intelligent systems and smart automation.',
    technologies: ['AI & ML Technologies'],
  },
];

const ALL_TECH = CATEGORIES.flatMap((c) => c.technologies);
const MARQUEE_ITEMS = [...ALL_TECH, ...ALL_TECH];

function Technologies() {
  return (
    <section
      id="technologies"
      className="relative overflow-hidden bg-[#050B18] py-12 lg:py-10"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-1/3 h-64 w-64 rounded-full bg-[#2563EB]/10 blur-[90px] sm:h-80 sm:w-80 sm:blur-[120px] lg:h-[450px] lg:w-[450px] lg:blur-[150px]" />
        <div className="absolute right-[-10%] bottom-1/4 h-64 w-64 rounded-full bg-[#7C3AED]/10 blur-[90px] sm:h-80 sm:w-80 sm:blur-[120px] lg:h-[450px] lg:w-[450px] lg:blur-[150px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 text-center sm:px-8 lg:px-12">

        {/* Heading */}
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#38BDF8] sm:mb-6 sm:text-sm sm:tracking-[0.3em]">
            Technologies
          </p>

          <h2 className="text-3xl font-bold leading-[1.2] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Built with{' '}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
              modern technology.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#94A3B8] sm:mt-8 sm:text-lg sm:leading-8 lg:text-xl">
            We choose technologies based on your project requirements,
            performance needs, scalability, and long-term goals.
          </p>
        </div>
      </div>

      {/* Full-width Marquee Belt */}
      <div className="marquee-mask relative mx-auto mt-10 max-w-[1500px] overflow-hidden sm:mt-16">
        <div className="marquee-track flex w-max items-center gap-3 sm:gap-4">
          {MARQUEE_ITEMS.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-[#CBD5E1] sm:px-6 sm:py-3 sm:text-base"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Category Cards (no marquee, plain list) */}
      <div className="relative z-10 mx-auto mt-12 w-full max-w-[1500px] px-5 sm:mt-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {CATEGORIES.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.category}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.06] sm:rounded-3xl sm:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED] shadow-lg shadow-[#2563EB]/20 transition-transform duration-500 group-hover:scale-110 sm:h-14 sm:w-14">
                  <Icon className="h-6 w-6 text-white sm:h-7 sm:w-7" strokeWidth={1.75} />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-[#38BDF8] sm:mt-6 sm:text-2xl">
                  {item.category}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#64748B] sm:mt-3 sm:text-base sm:leading-7">
                  {item.description}
                </p>

                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#2563EB]/0 blur-3xl transition-all duration-500 group-hover:bg-[#2563EB]/20" />
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        .marquee-mask {
          -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }
        .marquee-track {
          animation: marquee-scroll 30s linear infinite;
        }
        .marquee-mask:hover .marquee-track {
          animation-play-state: paused;
        }
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

export default Technologies;