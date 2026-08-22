// import { Code2, TrendingUp, GraduationCap, ArrowUpRight } from 'lucide-react';

// const SERVICES = [
//   {
//     icon: Code2,
//     title: 'Build',
//     subtitle: 'Software & IT Solutions',
//     description:
//       'We build modern digital solutions that help businesses work smarter, operate efficiently, and scale with confidence.',
//   },
//   {
//     icon: TrendingUp,
//     title: 'Grow',
//     subtitle: 'Digital Marketing & Growth',
//     description:
//       'We help businesses strengthen their digital presence, reach the right audience, and turn attention into meaningful growth.',
//   },
//   {
//     icon: GraduationCap,
//     title: 'Learn',
//     subtitle: 'Student Internship & Hiring',
//     description:
//       'We connect students with practical opportunities while helping businesses discover and develop emerging talent.',
//   },
// ];

// function Services() {
//   return (
//     <section
//       id="services"
//       className="relative overflow-hidden bg-[#050B18] py-10 lg:py-20"
//     >
//       {/* Background Glow */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute left-[-10%] top-1/4 h-96 w-96 rounded-full bg-[#2563EB]/10 blur-[140px]" />
//         <div className="absolute right-[-10%] bottom-1/4 h-96 w-96 rounded-full bg-[#7C3AED]/10 blur-[140px]" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 mx-auto w-full max-w-[1500px] px-8 lg:px-12">

//         {/* Section Heading */}
//         <div className="mx-auto max-w-3xl text-center">
//           <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#38BDF8]">
//             What We Do
//           </p>

//           <h2 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
//             Build. Grow. Learn.
//           </h2>

//           <p className="mt-6 text-lg leading-8 text-[#94A3B8]">
//             We bring technology, digital growth, and emerging talent together
//             to create meaningful opportunities for businesses and people.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="mt-20 grid gap-8 lg:grid-cols-3">
//           {SERVICES.map((service) => {
//             const Icon = service.icon;
//             return (
//               <article
//                 key={service.title}
//                 className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.06]"
//               >
//                 {/* Icon */}
//                 <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED] shadow-lg shadow-[#2563EB]/20 transition-transform duration-500 group-hover:scale-110">
//                   <Icon className="h-8 w-8 text-white" strokeWidth={1.75} />
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-3xl font-bold tracking-tight text-white">
//                   {service.title}
//                 </h3>

//                 <p className="mt-2 text-base font-medium text-[#38BDF8]">
//                   {service.subtitle}
//                 </p>

//                 <p className="mt-4 text-base leading-7 text-[#94A3B8]">
//                   {service.description}
//                 </p>

//                 {/* Arrow */}
//                 <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-[#64748B] transition-all duration-300 group-hover:gap-3 group-hover:text-white">
//                   Learn more
//                   <ArrowUpRight className="h-4 w-4" />
//                 </div>

//                 {/* Corner glow on hover */}
//                 <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#2563EB]/0 blur-3xl transition-all duration-500 group-hover:bg-[#2563EB]/20" />
//               </article>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Services;


import { Code2, TrendingUp, GraduationCap, ArrowUpRight } from 'lucide-react';

const SERVICES = [
  {
    icon: Code2,
    title: 'Build',
    subtitle: 'Software & IT Solutions',
    description:
      'We build modern digital solutions that help businesses work smarter, operate efficiently, and scale with confidence.',
  },
  {
    icon: TrendingUp,
    title: 'Grow',
    subtitle: 'Digital Marketing & Growth',
    description:
      'We help businesses strengthen their digital presence, reach the right audience, and turn attention into meaningful growth.',
  },
  {
    icon: GraduationCap,
    title: 'Learn',
    subtitle: 'Student Internship & Hiring',
    description:
      'We connect students with practical opportunities while helping businesses discover and develop emerging talent.',
  },
];

function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#050B18] py-12 sm:py-16 lg:py-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-1/4 h-64 w-64 rounded-full bg-[#2563EB]/10 blur-[90px] sm:h-80 sm:w-80 sm:blur-[110px] lg:h-96 lg:w-96 lg:blur-[140px]" />
        <div className="absolute right-[-10%] bottom-1/4 h-64 w-64 rounded-full bg-[#7C3AED]/10 blur-[90px] sm:h-80 sm:w-80 sm:blur-[110px] lg:h-96 lg:w-96 lg:blur-[140px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#38BDF8] sm:mb-5 sm:text-sm sm:tracking-[0.3em]">
            What We Do
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Build. Grow. Learn.
          </h2>

          <p className="mt-4 text-base leading-7 text-[#94A3B8] sm:mt-6 sm:text-lg sm:leading-8">
            We bring technology, digital growth, and emerging talent together
            to create meaningful opportunities for businesses and people.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-10 grid gap-6 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:mt-20 lg:grid-cols-3 lg:gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.06] sm:rounded-3xl sm:p-8"
              >
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED] shadow-lg shadow-[#2563EB]/20 transition-transform duration-500 group-hover:scale-110 sm:mb-8 sm:h-16 sm:w-16">
                  <Icon className="h-7 w-7 text-white sm:h-8 sm:w-8" strokeWidth={1.75} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm font-medium text-[#38BDF8] sm:text-base">
                  {service.subtitle}
                </p>

                <p className="mt-3 text-sm leading-6 text-[#94A3B8] sm:mt-4 sm:text-base sm:leading-7">
                  {service.description}
                </p>

                {/* Arrow */}
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#64748B] transition-all duration-300 group-hover:gap-3 group-hover:text-white sm:mt-8">
                  Learn more
                </div>

                {/* Corner glow on hover */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#2563EB]/0 blur-3xl transition-all duration-500 group-hover:bg-[#2563EB]/20" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;