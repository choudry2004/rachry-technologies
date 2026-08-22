// import { useEffect, useRef, useState } from 'react';

// const PROCESS_STEPS = [
//   { number: '01', title: 'Initial Enquiry', description: 'Share your project vision and initial requirements with us.' },
//   { number: '02', title: 'Discovery Call', description: 'We explore your objectives, expectations, and project scope together.' },
//   { number: '03', title: 'Project Proposal', description: 'Get a tailored proposal aligned with your project needs and goals.' },
//   { number: '04', title: 'Project Initiation', description: 'With your approval, we officially set the project in motion.' },
//   { number: '05', title: 'Creative Design', description: 'We craft intuitive UI/UX and engaging visual experiences for you.' },
//   { number: '06', title: 'Solution Development', description: 'Our team transforms approved designs into a powerful functional solution.' },
//   { number: '07', title: 'Quality Assurance', description: 'We validate performance, functionality, and overall quality across the solution.' },
//   { number: '08', title: 'Final Delivery', description: 'The completed solution is prepared, finalized, and handed over to you.' },
//   { number: '09', title: 'Ongoing Support', description: 'We provide continued assistance, maintenance, and technical support whenever required.' },
// ];

// function Process() {
//   const containerRef = useRef(null);
//   const [visibleCount, setVisibleCount] = useState(0);
//   const [lineProgress, setLineProgress] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!containerRef.current) return;

//       const rect = containerRef.current.getBoundingClientRect();
//       const vh = window.innerHeight;

//       const start = vh * 0.85;
//       const end = vh * 0.25;
//       const total = rect.height + (start - end);
//       const scrolled = start - rect.top;
//       const progress = Math.min(Math.max(scrolled / total, 0), 1);

//       setLineProgress(progress * 100);
//       setVisibleCount(Math.floor(progress * PROCESS_STEPS.length * 1.15));
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     handleScroll();
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <section
//       id="process"
//       className="relative overflow-hidden bg-[#050B18] py-10 lg:py-20"
//     >
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute left-[-15%] top-1/3 h-[500px] w-[500px] rounded-full bg-[#2563EB]/10 blur-[150px]" />
//         <div className="absolute right-[-15%] bottom-1/4 h-[500px] w-[500px] rounded-full bg-[#7C3AED]/10 blur-[150px]" />
//       </div>

//       <div className="relative z-10 mx-auto w-full max-w-[1500px] px-8 lg:px-12">

//         <div className="mx-auto max-w-3xl text-center">
//           <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#38BDF8]">
//             How We Work
//           </p>

//           <h2 className="text-4xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl">
//             From idea to{' '}
//             <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
//               delivery.
//             </span>
//           </h2>

//           <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#94A3B8] lg:text-xl">
//             A clear and structured process keeps every project focused,
//             transparent, and moving in the right direction.
//           </p>
//         </div>

//         <div ref={containerRef} className="relative mx-auto mt-24 max-w-3xl">
//           {/* Base line */}
//           <div className="absolute left-[7px] top-0 h-full w-px bg-white/10 sm:left-[15px]" />

//           {/* Animated progress line */}
//           <div
//             className="absolute left-[7px] top-0 w-px bg-gradient-to-b from-[#2563EB] to-[#7C3AED] transition-all duration-300 ease-out sm:left-[15px]"
//             style={{ height: `${lineProgress}%` }}
//           />

//           {PROCESS_STEPS.map((step, index) => {
//             const isVisible = index < visibleCount;
//             return (
//               <div
//                 key={step.number}
//                 className="relative pb-14 pl-10 last:pb-0 sm:pl-14"
//               >
//                 {/* Dot */}
//                 <div
//                   className={`absolute left-0 top-1 h-[15px] w-[15px] rounded-full border-2 transition-all duration-500 sm:h-[31px] sm:w-[31px] ${
//                     isVisible
//                       ? 'scale-100 border-[#38BDF8] bg-[#050B18]'
//                       : 'scale-75 border-white/15 bg-[#050B18]'
//                   }`}
//                 >
//                   <span
//                     className={`absolute inset-0 hidden items-center justify-center text-xs font-semibold transition-colors duration-500 sm:flex ${
//                       isVisible ? 'text-[#38BDF8]' : 'text-[#64748B]'
//                     }`}
//                   >
//                     {step.number}
//                   </span>
//                 </div>

//                 {/* Content */}
//                 <div
//                   className="transition-all duration-700 ease-out"
//                   style={{
//                     opacity: isVisible ? 1 : 0,
//                     transform: isVisible ? 'translateX(0)' : 'translateX(24px)',
//                   }}
//                 >
//                   <span className="text-xs font-medium text-[#64748B] sm:hidden">
//                     {step.number}
//                   </span>
//                   <h3 className="text-xl font-semibold text-white sm:text-2xl">
//                     {step.title}
//                   </h3>
//                   <p className="mt-2 max-w-md text-base leading-7 text-[#64748B]">
//                     {step.description}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// }

// export default Process;



import { useEffect, useRef, useState } from 'react';

const PROCESS_STEPS = [
  { number: '01', title: 'Initial Enquiry', description: 'Share your project vision and initial requirements with us.' },
  { number: '02', title: 'Discovery Call', description: 'We explore your objectives, expectations, and project scope together.' },
  { number: '03', title: 'Project Proposal', description: 'Get a tailored proposal aligned with your project needs and goals.' },
  { number: '04', title: 'Project Initiation', description: 'With your approval, we officially set the project in motion.' },
  { number: '05', title: 'Creative Design', description: 'We craft intuitive UI/UX and engaging visual experiences for you.' },
  { number: '06', title: 'Solution Development', description: 'Our team transforms approved designs into a powerful functional solution.' },
  { number: '07', title: 'Quality Assurance', description: 'We validate performance, functionality, and overall quality across the solution.' },
  { number: '08', title: 'Final Delivery', description: 'The completed solution is prepared, finalized, and handed over to you.' },
  { number: '09', title: 'Ongoing Support', description: 'We provide continued assistance, maintenance, and technical support whenever required.' },
];

function Process() {
  const containerRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const [lineProgress, setLineProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      const start = vh * 0.85;
      const end = vh * 0.25;
      const total = rect.height + (start - end);
      const scrolled = start - rect.top;
      const progress = Math.min(Math.max(scrolled / total, 0), 1);

      setLineProgress(progress * 100);
      setVisibleCount(Math.floor(progress * PROCESS_STEPS.length * 1.15));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#050B18] py-12 sm:py-16 lg:py-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-15%] top-1/3 h-64 w-64 rounded-full bg-[#2563EB]/10 blur-[90px] sm:h-96 sm:w-96 sm:blur-[120px] lg:h-[500px] lg:w-[500px] lg:blur-[150px]" />
        <div className="absolute right-[-15%] bottom-1/4 h-64 w-64 rounded-full bg-[#7C3AED]/10 blur-[90px] sm:h-96 sm:w-96 sm:blur-[120px] lg:h-[500px] lg:w-[500px] lg:blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">

        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#38BDF8] sm:mb-6 sm:text-sm sm:tracking-[0.3em]">
            How We Work
          </p>

          <h2 className="text-3xl font-bold leading-[1.2] tracking-tight text-white sm:text-5xl lg:text-6xl">
            From idea to{' '}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
              delivery.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#94A3B8] sm:mt-8 sm:text-lg sm:leading-8 lg:text-xl">
            A clear and structured process keeps every project focused,
            transparent, and moving in the right direction.
          </p>
        </div>

        <div ref={containerRef} className="relative mx-auto mt-14 max-w-3xl sm:mt-24">
          {/* Base line */}
          <div className="absolute left-[7px] top-0 h-full w-px bg-white/10 sm:left-[15px]" />

          {/* Animated progress line */}
          <div
            className="absolute left-[7px] top-0 w-px bg-gradient-to-b from-[#2563EB] to-[#7C3AED] transition-all duration-300 ease-out sm:left-[15px]"
            style={{ height: `${lineProgress}%` }}
          />

          {PROCESS_STEPS.map((step, index) => {
            const isVisible = index < visibleCount;
            return (
              <div
                key={step.number}
                className="relative pb-10 pl-8 last:pb-0 sm:pb-14 sm:pl-14"
              >
                {/* Dot */}
                <div
                  className={`absolute left-0 top-1 h-[15px] w-[15px] rounded-full border-2 transition-all duration-500 sm:h-[31px] sm:w-[31px] ${
                    isVisible
                      ? 'scale-100 border-[#38BDF8] bg-[#050B18]'
                      : 'scale-75 border-white/15 bg-[#050B18]'
                  }`}
                >
                  <span
                    className={`absolute inset-0 hidden items-center justify-center text-xs font-semibold transition-colors duration-500 sm:flex ${
                      isVisible ? 'text-[#38BDF8]' : 'text-[#64748B]'
                    }`}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div
                  className="transition-all duration-700 ease-out"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(24px)',
                  }}
                >
                  <span className="text-xs font-medium text-[#64748B] sm:hidden">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-semibold text-white sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-6 text-[#64748B] sm:text-base sm:leading-7">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Process;