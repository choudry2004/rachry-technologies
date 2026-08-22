import video from "../assets/videos/hero-bg.mp4";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050B18] pt-20 sm:pt-24 lg:pt-28"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Dark overlay so text is readable on top of video */}
      <div className="absolute inset-0 bg-[#050B18]/70" />

      {/* Background Glow (kept, sits above video overlay) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-56 w-56 rounded-full bg-[#2563EB]/20 blur-[80px] sm:h-72 sm:w-72 sm:blur-[100px] lg:h-96 lg:w-96 lg:blur-[120px]" />
        <div className="absolute right-1/4 top-1/3 h-56 w-56 rounded-full bg-[#7C3AED]/20 blur-[80px] sm:h-72 sm:w-72 sm:blur-[100px] lg:h-96 lg:w-96 lg:blur-[120px]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 py-16 text-center sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-4xl">

          <p className="mb-5 text-xs font-semibold uppercase leading-relaxed tracking-[0.15em] text-[#38BDF8] sm:mb-6 sm:text-sm sm:tracking-[0.3em]">
            Transforming Ideas into Meaningful Impact: Harnessing the Power of Advanced Technology, Continuous Innovation, and Research-Driven Thinking to Develop Intelligent Solutions, Empower Businesses, and Shape a Smarter, More Sustainable Future.
          </p>

          <h1 className="text-3xl font-bold leading-[1.2] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Build . Grow . Learn
          </h1>

          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:mt-10 sm:gap-4">
            <a
              href="#services"
              className="rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:scale-105 sm:px-7 sm:py-3.5"
            >
               Explore 
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5 sm:px-7 sm:py-3.5"
            >
              Contact Us
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;