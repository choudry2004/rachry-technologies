// function ServicePageHero({ label, title, description }) {
//     return (
//         <section className="relative overflow-hidden bg-[#050B18] pt-40 pb-20 lg:pt-48 lg:pb-28">
//             <div className="pointer-events-none absolute inset-0">
//                 <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[#2563EB]/15 blur-[120px]" />
//                 <div className="absolute right-1/4 top-1/3 h-96 w-96 rounded-full bg-[#7C3AED]/15 blur-[120px]" />
//             </div>

//             <div className="relative z-10 mx-auto w-full max-w-[1500px] px-8 lg:px-12">
//                 <div className="max-w-3xl">
//                     <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#38BDF8]">
//                         {label}
//                     </p>

//                     <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl">
//                         {title}
//                     </h1>

//                     <p className="mt-6 text-lg leading-8 text-[#94A3B8] lg:text-xl">
//                         {description}
//                     </p>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default ServicePageHero;


function ServicePageHero({ label, title, description }) {
    return (
        <section className="relative overflow-hidden bg-[#050B18] pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-48 lg:pb-28">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/4 top-1/4 h-56 w-56 rounded-full bg-[#2563EB]/15 blur-[80px] sm:h-72 sm:w-72 sm:blur-[100px] lg:h-96 lg:w-96 lg:blur-[120px]" />
                <div className="absolute right-1/4 top-1/3 h-56 w-56 rounded-full bg-[#7C3AED]/15 blur-[80px] sm:h-72 sm:w-72 sm:blur-[100px] lg:h-96 lg:w-96 lg:blur-[120px]" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
                <div className="max-w-3xl">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#38BDF8] sm:mb-6 sm:text-sm sm:tracking-[0.3em]">
                        {label}
                    </p>

                    <h1 className="text-3xl font-bold leading-[1.2] tracking-tight text-white sm:text-5xl lg:text-6xl">
                        {title}
                    </h1>

                    <p className="mt-4 text-base leading-7 text-[#94A3B8] sm:mt-6 sm:text-lg sm:leading-8 lg:text-xl">
                        {description}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default ServicePageHero;