import { Mail, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CONTACT_OPTIONS = [
  { icon: Phone, label: 'Call us', value: '+91 80726 32253', href: 'tel:+918072632253' },
  { icon: Mail, label: 'Email us', value: 'rachrytech1@gmail.com', href: 'mailto:rachrytech1@gmail.com' },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us', href: 'https://wa.me/918072632253' },
];

function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050B18] py-10 sm:py-8 lg:py-10"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563EB]/20 blur-[90px] sm:h-96 sm:w-96 sm:blur-[120px] lg:h-[500px] lg:w-[500px] lg:blur-[150px]" />
        <div className="absolute left-1/3 top-1/3 h-40 w-40 rounded-full bg-[#7C3AED]/15 blur-[80px] sm:h-52 sm:w-52 sm:blur-[100px] lg:h-64 lg:w-64 lg:blur-[120px]" />
      </div>

      {/* CTA Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-12 text-center backdrop-blur-sm sm:rounded-3xl sm:px-12 sm:py-20 lg:px-20 lg:py-28">

          <div className="pointer-events-none absolute inset-0 rounded-2xl border border-[#2563EB]/10 sm:rounded-3xl" />

          {/* Label */}
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#38BDF8] sm:mb-6 sm:text-sm sm:tracking-[0.3em]">
            Let's Build
          </p>

          {/* Heading */}
          <h2 className="mx-auto max-w-4xl text-3xl font-bold leading-[1.2] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Have an idea?{' '}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
              Let's build it.
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#94A3B8] sm:mt-8 sm:text-lg sm:leading-8 lg:text-xl">
            Whether you need a website, mobile application, custom software,
            or a digital marketing strategy, let's discuss your requirement.
          </p>

          {/* CTA Button */}
          <div className="mt-8 sm:mt-10">
            <Link
              to="/contact"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 sm:px-6 sm:py-3"
            >
              Book a free consultation
            </Link>
          </div>

          {/* Trust Line */}
          <p className="mt-5 text-xs text-[#64748B] sm:mt-6 sm:text-sm">
            No commitment. Just a conversation about your idea.
          </p>

          {/* Contact Options */}
          <div className="mx-auto mt-10 grid max-w-3xl gap-4 border-t border-white/10 pt-8 sm:mt-16 sm:grid-cols-3 sm:pt-12">
            {CONTACT_OPTIONS.map((option) => {
              const Icon = option.icon;
              return (
                <a
                  key={option.label}
                  href={option.href}
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-5 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] sm:px-6 sm:py-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED] transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5 text-white" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-[#64748B]">
                      {option.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-[#CBD5E1] break-words">
                      {option.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;