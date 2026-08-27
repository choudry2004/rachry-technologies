// import { Link } from 'react-router-dom';
// import { Mail, Phone, MapPin } from 'lucide-react';

// const QUICK_LINKS = [
//   { label: 'Home', href: '/' },
//   { label: 'Software & IT Solutions', href: '/services/software-it' },
//   { label: 'Creative & Design Solutions', href: '/services/creative-design' },
//   { label: 'Digital Marketing', href: '/services/digital-marketing' },
//   { label: 'Student Zone', href: '/services/student-zone' },
//   { label: 'About Us', href: '/about' },
//   { label: 'Our Strategy', href: '/our-strategy' },
//   { label: 'Contact', href: '/contact' },
// ];


// const SOCIAL_LINKS = [
//   {
//     label: 'Instagram',
//     href: '#',
//     svg: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
//         <rect x="2" y="2" width="20" height="20" rx="5" />
//         <circle cx="12" cy="12" r="4" />
//         <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
//       </svg>
//     ),
//   },
//   {
//     label: 'Facebook',
//     href: '#',
//     svg: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
//         <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
//       </svg>
//     ),
//   },
//   {
//     label: 'LinkedIn',
//     href: '#',
//     svg: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
//         <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
//         <rect x="2" y="9" width="4" height="12" />
//         <circle cx="4" cy="4" r="2" />
//       </svg>
//     ),
//   },
// ];

// const CONTACT_INFO = [
//   { icon: Phone, value: '+91 80726 32253', href: 'tel:+918072632253' },
//   { icon: Mail, value: 'team@rachrytechnolgies.in', href: 'mailto:team@rachrytechnolgies.in' },
//   { icon: MapPin, value: 'Salem, Tamil Nadu, India', href: null },
// ];

// function Footer() {
//   return (
//     <footer className="relative overflow-hidden bg-[#030712]">

//       {/* Top Glow */}
//       <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-[320px] -translate-x-1/2 rounded-full bg-[#2563EB]/10 blur-[90px] sm:h-64 sm:w-[480px] sm:blur-[120px] lg:w-[600px] lg:blur-[140px]" />

//       {/* Main Footer */}
//       <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-24">

//         <div className="grid gap-10 text-left sm:grid-cols-[1.1fr_1fr_1fr] sm:gap-8 lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-16">

//           {/* Brand */}
//           <div>
//             <Link
//               to="/"
//               className="text-xl font-bold tracking-tight text-white sm:text-2xl"
//             >
//               RACHRY TECHNOLOGIES
//             </Link>

//             <p className="mt-4 max-w-sm text-sm leading-6 text-[#64748B] sm:mt-5 sm:text-base sm:leading-7">
//               Build Digital. Grow Faster.
//             </p>

//             <p className="mt-3 max-w-md text-sm leading-6 text-[#475569] sm:mt-4">
//               Technology and digital growth solutions built around your
//               requirements.
//             </p>

//             {/* Social Links */}
//             <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
//               {SOCIAL_LINKS.map((social) => (
//                 <a
//                   key={social.label}
//                   href={social.href}
//                   aria-label={social.label}
//                   className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#94A3B8] transition-all duration-300 hover:border-[#38BDF8]/40 hover:text-[#38BDF8]"
//                 >
//                   <span className="h-4 w-4">{social.svg}</span>
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
//               Quick Links
//             </h3>

//             <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:gap-4">
//               {QUICK_LINKS.map((link) => (
//                 <Link
//                   key={link.label}
//                   to={link.href}
//                   className="w-fit text-sm text-[#64748B] transition-colors duration-300 hover:text-white"
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
//               Contact
//             </h3>

//             <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:gap-4">
//               {CONTACT_INFO.map((info) => {
//                 const Icon = info.icon;
//                 const content = (
//                   <span className="flex items-start gap-3 text-sm text-[#64748B] transition-colors duration-300 hover:text-white">
//                     <Icon className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.75} />
//                     <span className="break-words">{info.value}</span>
//                   </span>
//                 );
//                 return info.href ? (
//                   <a key={info.value} href={info.href} className="w-fit">
//                     {content}
//                   </a>
//                 ) : (
//                   <div key={info.value} className="w-fit">
//                     {content}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//         </div>

//         {/* CTA Strip */}
//         <div className="mt-12 border-t border-white/10 pt-8 sm:mt-20 sm:pt-10">
//           <div className="flex flex-col gap-5 sm:gap-6 lg:flex-row lg:items-center lg:justify-between">

//             <div>
//               <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
//                 Let's talk
//               </p>

//               <p className="mt-3 text-sm text-[#64748B]">
//                 Have a project in mind? Let's discuss it.
//               </p>
//             </div>

//             <Link
//               to="/contact"
//               className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 sm:px-6 sm:py-3"
//             >
//               Book a free consultation
//             </Link>

//           </div>
//         </div>

//         {/* Bottom */}
//         <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm sm:mt-10 md:flex-row md:items-center md:justify-between">

//           <p className="text-[#475569]">
//             © 2026 RACHRY TECHNOLOGIES. All rights reserved.
//           </p>

//           <div className="flex gap-6">
//             <a
//               href="#"
//               className="text-[#475569] transition-colors duration-300 hover:text-white"
//             >
//               Privacy policy
//             </a>

//             <a
//               href="#"
//               className="text-[#475569] transition-colors duration-300 hover:text-white"
//             >
//               Terms and conditions
//             </a>
//           </div>

//         </div>

//       </div>
//     </footer>
//   );
// }

// export default Footer;

import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Software & IT Solutions', href: '/services/software-it' },
  { label: 'Creative & Design Solutions', href: '/services/creative-design' },
  { label: 'Digital Marketing', href: '/services/digital-marketing' },
  { label: 'Student Zone', href: '/services/student-zone' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Strategy', href: '/our-strategy' },
  { label: 'Contact', href: '/contact' },
];


const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/rachary_tech/',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  // {
  //   label: 'Facebook',
  //   href: '#',
  //   svg: (
  //     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
  //       <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  //     </svg>
  //   ),
  // },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rachry-technology-45317a430/?isSelfProfile=true',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

const CONTACT_INFO = [
  { icon: Phone, value: '+91 80726 32253', href: 'tel:+918072632253' },
  { icon: Mail, value: 'team@rachrytechnolgies.in', href: 'mailto:team@rachrytechnolgies.in' },
  { icon: MapPin, value: 'Salem, Tamil Nadu, India', href: null },
];

function Footer() {
  const { pathname } = useLocation();
  const isOnContactPage = pathname === '/contact';

  const handleContactClick = (e) => {
    if (isOnContactPage) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative overflow-hidden bg-[#030712]">

      {/* Top Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-[320px] -translate-x-1/2 rounded-full bg-[#2563EB]/10 blur-[90px] sm:h-64 sm:w-[480px] sm:blur-[120px] lg:w-[600px] lg:blur-[140px]" />

      {/* Main Footer */}
      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-24">

        <div className="grid gap-10 text-left sm:grid-cols-[1.1fr_1fr_1fr] sm:gap-8 lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-16">

          {/* Brand */}
          <div>
            <Link
              to="/"
              className="text-xl font-bold tracking-tight text-white sm:text-2xl"
            >
              RACHRY TECHNOLOGIES
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-[#64748B] sm:mt-5 sm:text-base sm:leading-7">
              Build Digital. Grow Faster.
            </p>

            <p className="mt-3 max-w-md text-sm leading-6 text-[#475569] sm:mt-4">
              Technology and digital growth solutions built around your
              requirements.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#94A3B8] transition-all duration-300 hover:border-[#38BDF8]/40 hover:text-[#38BDF8]"
                >
                  <span className="h-4 w-4">{social.svg}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Quick Links
            </h3>

            <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:gap-4">
              {QUICK_LINKS.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="w-fit text-sm text-[#64748B] transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Contact
            </h3>

            <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:gap-4">
              {CONTACT_INFO.map((info) => {
                const Icon = info.icon;
                const content = (
                  <span className="flex items-start gap-3 text-sm text-[#64748B] transition-colors duration-300 hover:text-white">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.75} />
                    <span className="break-words">{info.value}</span>
                  </span>
                );
                return info.href ? (
                  <a key={info.value} href={info.href} className="w-fit">
                    {content}
                  </a>
                ) : (
                  <div key={info.value} className="w-fit">
                    {content}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* CTA Strip */}
        <div className="mt-12 border-t border-white/10 pt-8 sm:mt-20 sm:pt-10">
          <div className="flex flex-col gap-5 sm:gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                Let's talk
              </p>

              <p className="mt-3 text-sm text-[#64748B]">
                Have a project in mind? Let's discuss it.
              </p>
            </div>

            <Link
              to="/contact"
              onClick={handleContactClick}
              className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 sm:px-6 sm:py-3"
            >
              Book a free consultation
            </Link>

          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm sm:mt-10 md:flex-row md:items-center md:justify-between">

          <p className="text-[#475569]">
            © 2026 RACHRY TECHNOLOGIES. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-[#475569] transition-colors duration-300 hover:text-white"
            >
              Privacy policy
            </a>

            <a
              href="#"
              className="text-[#475569] transition-colors duration-300 hover:text-white"
            >
              Terms and conditions
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;