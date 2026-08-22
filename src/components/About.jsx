// import { ShieldCheck } from 'lucide-react';

// const VALUES = [
//   {
//     title: 'Transparent Process',
//     description: 'Clear communication and honest timelines at every step of the project.',
//   },
//   {
//     title: 'Client-First Approach',
//     description: 'We build around your business goals, not just deliver code and walk away.',
//   },
//   {
//     title: 'Reliable Delivery',
//     description: 'What we commit to, we deliver — on time, tested, and production-ready.',
//   },
// ];

// function About() {
//   return (
//     <section
//       id="about"
//       className="relative overflow-hidden bg-[#050B18] py-10 lg:py-20"
//     >
//       {/* Background Glow */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute right-[-10%] top-1/4 h-[500px] w-[500px] rounded-full bg-[#7C3AED]/10 blur-[150px]" />
//         <div className="absolute left-[-10%] bottom-1/4 h-[400px] w-[400px] rounded-full bg-[#2563EB]/10 blur-[140px]" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 mx-auto w-full max-w-[1500px] px-8 text-center lg:px-12">

//         {/* Trust Badge */}
//         <div className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/10 px-5 py-2">
//           <ShieldCheck className="h-4 w-4 text-[#38BDF8]" strokeWidth={2} />
//           <span className="text-sm font-semibold text-[#38BDF8]">
//             JustDial Approved Trusted Company
//           </span>
//         </div>

//         {/* Section Label */}
//         <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#38BDF8]">
//           About Us
//         </p>

// {/* Main Heading */}
// <h2 className="mx-auto max-w-6xl text-4xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl">
//   Technology that builds.
//   <br />
//   <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
//     Ideas that grow.
//   </span>
//   <br />
//   Opportunities that matter.
// </h2>

//         <p className="mx-auto mt-8 max-w-6xl text-lg leading-8 text-[#94A3B8] lg:text-xl">
//           Rachry Technologies is a technology and digital growth company
//           focused on building practical software solutions, helping
//           businesses grow through digital marketing, and creating
//           meaningful opportunities for emerging talent.
//         </p>

//         {/* Values */}
// <div className="mx-auto mt-24 grid max-w-6xl gap-6 lg:grid-cols-3">
//   {VALUES.map((value, index) => (
//     <div
//       key={value.title}
//       className="group relative rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-[#2563EB]/30 hover:bg-white/[0.06]"
//     >
//       {/* Number Badge */}
//       <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED] text-sm font-bold text-white shadow-lg shadow-[#2563EB]/20 transition-transform duration-500 group-hover:scale-110">
//         {String(index + 1).padStart(2, '0')}
//       </span>

//       <h3 className="mt-6 text-2xl font-semibold text-white transition-colors duration-300">
//         {value.title}
//       </h3>

//       <p className="mx-auto mt-3 max-w-xs text-base leading-7 text-[#64748B]">
//         {value.description}
//       </p>

//       {/* Corner glow on hover */}
//       <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#2563EB]/0 blur-3xl transition-all duration-500 group-hover:bg-[#2563EB]/20" />
//     </div>
//   ))}
// </div>

//       </div>
//     </section>
//   );
// }

// export default About;



import { ShieldCheck } from 'lucide-react';

const VALUES = [
  {
    title: 'Transparent Process',
    description: 'Clear communication and honest timelines at every step of the project.',
  },
  {
    title: 'Client-First Approach',
    description: 'We build around your business goals, not just deliver code and walk away.',
  },
  {
    title: 'Reliable Delivery',
    description: 'What we commit to, we deliver — on time, tested, and production-ready.',
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050B18] py-12 sm:py-16 lg:py-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-10%] top-1/4 h-64 w-64 rounded-full bg-[#7C3AED]/10 blur-[90px] sm:h-96 sm:w-96 sm:blur-[120px] lg:h-[500px] lg:w-[500px] lg:blur-[150px]" />
        <div className="absolute left-[-10%] bottom-1/4 h-52 w-52 rounded-full bg-[#2563EB]/10 blur-[80px] sm:h-80 sm:w-80 sm:blur-[110px] lg:h-[400px] lg:w-[400px] lg:blur-[140px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 text-center sm:px-8 lg:px-12">

        {/* Trust Badge */}
        <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/10 px-4 py-1.5 sm:mb-8 sm:px-5 sm:py-2">
          <ShieldCheck className="h-3.5 w-3.5 text-[#38BDF8] sm:h-4 sm:w-4" strokeWidth={2} />
          <span className="text-xs font-semibold text-[#38BDF8] sm:text-sm">
            JustDial Approved Trusted Company
          </span>
        </div>

        {/* Section Label */}
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#38BDF8] sm:mb-6 sm:text-sm sm:tracking-[0.3em]">
          About Us
        </p>

        {/* Main Heading */}
        <h2 className="mx-auto max-w-6xl text-3xl font-bold leading-[1.2] tracking-tight text-white sm:text-5xl lg:text-6xl">
          Technology that builds.
          <br />
          <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
            Ideas that grow.
          </span>
          <br />
          Opportunities that matter.
        </h2>

        <p className="mx-auto mt-5 max-w-6xl text-base leading-7 text-[#94A3B8] sm:mt-8 sm:text-lg sm:leading-8 lg:text-xl">
          Rachry Technologies is a technology and digital growth company
          focused on building practical software solutions, helping
          businesses grow through digital marketing, and creating
          meaningful opportunities for emerging talent.
        </p>

        {/* Values */}
        <div className="mx-auto mt-12 grid max-w-6xl gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:mt-24 lg:grid-cols-3">
          {VALUES.map((value, index) => (
            <div
              key={value.title}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center transition-all duration-500 hover:-translate-y-2 hover:border-[#2563EB]/30 hover:bg-white/[0.06] sm:rounded-3xl sm:p-8"
            >
              {/* Number Badge */}
              <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED] text-sm font-bold text-white shadow-lg shadow-[#2563EB]/20 transition-transform duration-500 group-hover:scale-110 sm:h-12 sm:w-12 sm:rounded-2xl">
                {String(index + 1).padStart(2, '0')}
              </span>

              <h3 className="mt-5 text-xl font-semibold text-white transition-colors duration-300 sm:mt-6 sm:text-2xl">
                {value.title}
              </h3>

              <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-[#64748B] sm:text-base sm:leading-7">
                {value.description}
              </p>

              {/* Corner glow on hover */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#2563EB]/0 blur-3xl transition-all duration-500 group-hover:bg-[#2563EB]/20" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;