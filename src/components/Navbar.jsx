// // // import { useState, useCallback, useRef } from 'react';
// // // import rachryLogo from '../assets/rachry-logo.png';

// // // const NAV_LINKS = [
// // //     { label: 'Home', href: '#home' },
// // //     { label: 'Contact', href: '#contact' },
// // // ];

// // // const WHO_WE_ARE_LINKS = [
// // //     { label: 'About Us', href: '#about' },
// // //     { label: 'Our Strategy', href: '#strategy' },
// // //     { label: 'Our Team', href: '#team' },
// // // ];

// // // const WHAT_WE_DO_LINKS = [
// // //     { label: 'Software & IT Solutions', href: '#web-development' },
// // //     { label: 'Digital Marketing & Growth', href: '#mobile-app-development' },
// // //     { label: 'Careers', href: '#digital-marketing' },
// // // ];

// // // const CLOSE_DELAY = 150; // ms — small buffer so moving pointer trigger -> panel doesn't flicker-close

// // // /* Reusable dropdown panel — consistent grid-based smooth animation
// // //    regardless of content height, so all dropdowns feel identical. */
// // // function NavDropdown({ isOpen, links, onLinkClick, onMouseEnter, onMouseLeave }) {
// // //     return (
// // //         <div
// // //             onMouseEnter={onMouseEnter}
// // //             onMouseLeave={onMouseLeave}
// // //             className={`grid w-full bg-[#0f1729] transition-[grid-template-rows,opacity] duration-300 ease-out ${
// // //                 isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
// // //             }`}
// // //         >
// // //             <div className="overflow-hidden">
// // //                 <div
// // //                     className={`mx-auto w-full max-w-[1500px] px-8 py-8 lg:px-12 transition-transform duration-300 ease-out ${
// // //                         isOpen ? 'translate-y-0' : '-translate-y-2'
// // //                     }`}
// // //                 >
// // //                     <div className="flex flex-col gap-3 ml-30">
// // //                         <p className="text-sm font-medium uppercase tracking-wide text-[#94a3b8] py-5">
// // //                             Overview
// // //                         </p>

// // //                         {links.map((link) => (
// // //                             <a
// // //                                 key={link.href}
// // //                                 href={link.href}
// // //                                 onClick={onLinkClick}
// // //                                 className="w-fit text-xl font-normal text-white transition-colors duration-300 hover:text-[#94a3b8]"
// // //                             >
// // //                                 {link.label}
// // //                             </a>
// // //                         ))}
// // //                     </div>
// // //                 </div>
// // //             </div>
// // //         </div>
// // //     );
// // // }

// // // function NavTrigger({ label, isOpen, onMouseEnter, onMouseLeave }) {
// // //     return (
// // //         <div
// // //             onMouseEnter={onMouseEnter}
// // //             onMouseLeave={onMouseLeave}
// // //             className={`group relative flex items-center gap-2 text-base font-medium transition-colors duration-300 cursor-default ${
// // //                 isOpen ? 'text-[#94a3b8]' : 'text-white hover:text-[#94a3b8]'
// // //             }`}
// // //         >
// // //             {label}
// // //             <span
// // //                 className={`absolute -bottom-2 left-0 h-[2px] bg-[#94a3b8] transition-all duration-300 ${
// // //                     isOpen ? 'w-full' : 'w-0 group-hover:w-full'
// // //                 }`}
// // //             />
// // //         </div>
// // //     );
// // // }

// // // function Navbar() {
// // //     // single state instead of two booleans — cleaner & fewer re-renders
// // //     const [activeDropdown, setActiveDropdown] = useState(null); // null | 'who' | 'what'
// // //     const closeTimer = useRef(null);

// // //     const clearCloseTimer = () => {
// // //         if (closeTimer.current) {
// // //             clearTimeout(closeTimer.current);
// // //             closeTimer.current = null;
// // //         }
// // //     };

// // //     const openDropdown = useCallback((key) => {
// // //         clearCloseTimer();
// // //         setActiveDropdown(key);
// // //     }, []);

// // //     const scheduleClose = useCallback(() => {
// // //         clearCloseTimer();
// // //         closeTimer.current = setTimeout(() => {
// // //             setActiveDropdown(null);
// // //         }, CLOSE_DELAY);
// // //     }, []);

// // //     const closeAll = useCallback(() => {
// // //         clearCloseTimer();
// // //         setActiveDropdown(null);
// // //     }, []);

// // //     return (
// // //         <nav className="fixed top-0 left-0 z-50 w-full">

// // //             {/* ================= NAVBAR ================= */}
// // //             <div className="border-b border-white/10 bg-[#050B18]/95 backdrop-blur-md">

// // //                 <div className="mx-auto flex h-28 w-full max-w-[1500px] items-center justify-between px-8 lg:px-12">

// // //                     {/* Logo */}
// // //                     <a
// // //                         href="#home"
// // //                         onClick={closeAll}
// // //                         className="flex shrink-0 items-center"
// // //                     >
// // //                         <img
// // //                             src={rachryLogo}
// // //                             alt="Rachry Technologies"
// // //                             className="h-14 w-auto object-contain"
// // //                         />
// // //                     </a>

// // //                     {/* Desktop Navigation */}
// // //                     <div className="hidden items-center gap-28 md:flex">

// // //                         {/* Home */}
// // //                         <a
// // //                             href="#home"
// // //                             onClick={closeAll}
// // //                             className="group relative text-base font-medium text-white transition-colors duration-300 hover:text-[#94a3b8]"
// // //                         >
// // //                             Home
// // //                             <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#94a3b8] transition-all duration-300 group-hover:w-full" />
// // //                         </a>

// // //                         {/* Who We Are */}
// // //                         <NavTrigger
// // //                             label="Who We Are"
// // //                             isOpen={activeDropdown === 'who'}
// // //                             onMouseEnter={() => openDropdown('who')}
// // //                             onMouseLeave={scheduleClose}
// // //                         />

// // //                         {/* What We Do */}
// // //                         <NavTrigger
// // //                             label="What We Do"
// // //                             isOpen={activeDropdown === 'what'}
// // //                             onMouseEnter={() => openDropdown('what')}
// // //                             onMouseLeave={scheduleClose}
// // //                         />

// // //                         {/* Other Navigation Links */}
// // //                         {NAV_LINKS.slice(1).map((link) => (
// // //                             <a
// // //                                 key={link.href}
// // //                                 href={link.href}
// // //                                 onClick={closeAll}
// // //                                 className="group relative text-base font-medium text-white transition-colors duration-300 hover:text-[#94a3b8]"
// // //                             >
// // //                                 {link.label}
// // //                                 <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#94a3b8] transition-all duration-300 group-hover:w-full" />
// // //                             </a>
// // //                         ))}

// // //                     </div>

// // //                 </div>
// // //             </div>

// // //             <NavDropdown
// // //                 isOpen={activeDropdown === 'who'}
// // //                 links={WHO_WE_ARE_LINKS}
// // //                 onLinkClick={closeAll}
// // //                 onMouseEnter={() => openDropdown('who')}
// // //                 onMouseLeave={scheduleClose}
// // //             />

// // //             <NavDropdown
// // //                 isOpen={activeDropdown === 'what'}
// // //                 links={WHAT_WE_DO_LINKS}
// // //                 onLinkClick={closeAll}
// // //                 onMouseEnter={() => openDropdown('what')}
// // //                 onMouseLeave={scheduleClose}
// // //             />

// // //         </nav>
// // //     );
// // // }

// // // export default Navbar;




// // import { useState, useCallback, useRef } from 'react';
// // import rachryLogo from '../assets/rachry-logo.png';

// // const WHO_WE_ARE_LINKS = [
// //     { label: 'About Us', href: '#about' },
// //     { label: 'Our Strategy', href: '#our-strategy' },
// // ];

// // const WHAT_WE_DO_LINKS = [
// //     { label: 'Software & IT Solutions', href: '/services/software-it' },
// //     { label: 'Digital Marketing', href: '/services/digital-marketing' },
// //     { label: 'Student Opportunities & Training', href: '/services/student-zone' },
// // ];

// // const CLOSE_DELAY = 150;

// // function NavDropdown({
// //     isOpen,
// //     title,
// //     links,
// //     onLinkClick,
// //     onMouseEnter,
// //     onMouseLeave,
// // }) {
// //     return (
// //         <div
// //             onMouseEnter={onMouseEnter}
// //             onMouseLeave={onMouseLeave}
// //             className={`grid w-full bg-[#0f1729] transition-[grid-template-rows,opacity] duration-300 ease-out ${
// //                 isOpen
// //                     ? 'grid-rows-[1fr] opacity-100'
// //                     : 'grid-rows-[0fr] opacity-0'
// //             }`}
// //         >
// //             <div className="overflow-hidden">
// //                 <div
// //                     className={`mx-auto w-full max-w-[1500px] px-8 py-8 lg:px-12 transition-transform duration-300 ease-out ${
// //                         isOpen ? 'translate-y-0' : '-translate-y-2'
// //                     }`}
// //                 >
// //                     <div className="ml-0 flex flex-col gap-3 lg:ml-30">
// //                         <p className="py-3 text-sm font-medium uppercase tracking-wide text-[#94a3b8]">
// //                             {title}
// //                         </p>

// //                         {links.map((link) => (
// //                             <a
// //                                 key={link.href}
// //                                 href={link.href}
// //                                 onClick={onLinkClick}
// //                                 className="w-fit text-xl font-normal text-white transition-colors duration-300 hover:text-[#94a3b8]"
// //                             >
// //                                 {link.label}
// //                             </a>
// //                         ))}
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }

// // function NavTrigger({
// //     label,
// //     isOpen,
// //     onMouseEnter,
// //     onMouseLeave,
// // }) {
// //     return (
// //         <div
// //             onMouseEnter={onMouseEnter}
// //             onMouseLeave={onMouseLeave}
// //             className={`group relative flex cursor-default items-center gap-2 text-base font-medium transition-colors duration-300 ${
// //                 isOpen
// //                     ? 'text-[#94a3b8]'
// //                     : 'text-white hover:text-[#94a3b8]'
// //             }`}
// //         >
// //             {label}

// //             <span
// //                 className={`absolute -bottom-2 left-0 h-[2px] bg-[#94a3b8] transition-all duration-300 ${
// //                     isOpen ? 'w-full' : 'w-0 group-hover:w-full'
// //                 }`}
// //             />
// //         </div>
// //     );
// // }

// // function Navbar() {
// //     const [activeDropdown, setActiveDropdown] = useState(null);
// //     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// //     const closeTimer = useRef(null);

// //     const clearCloseTimer = () => {
// //         if (closeTimer.current) {
// //             clearTimeout(closeTimer.current);
// //             closeTimer.current = null;
// //         }
// //     };

// //     const openDropdown = useCallback((key) => {
// //         clearCloseTimer();
// //         setActiveDropdown(key);
// //     }, []);

// //     const scheduleClose = useCallback(() => {
// //         clearCloseTimer();

// //         closeTimer.current = setTimeout(() => {
// //             setActiveDropdown(null);
// //         }, CLOSE_DELAY);
// //     }, []);

// //     const closeAll = useCallback(() => {
// //         clearCloseTimer();
// //         setActiveDropdown(null);
// //         setMobileMenuOpen(false);
// //     }, []);

// //     const toggleMobileMenu = () => {
// //         setMobileMenuOpen((prev) => !prev);
// //         setActiveDropdown(null);
// //     };

// //     return (
// //         <nav className="fixed left-0 top-0 z-50 w-full">

// //             {/* ================= NAVBAR ================= */}

// //             <div className="border-b border-white/10 bg-[#050B18]/95 backdrop-blur-md">

// //                 <div className="mx-auto flex h-24 w-full max-w-[1500px] items-center justify-between px-6 lg:h-28 lg:px-12">

// //                     {/* Logo */}

// //                     <a
// //                         href="#home"
// //                         onClick={closeAll}
// //                         className="flex shrink-0 items-center"
// //                     >
// //                         <img
// //                             src={rachryLogo}
// //                             alt="Rachry Technologies"
// //                             className="h-12 w-auto object-contain lg:h-14"
// //                         />
// //                     </a>

// //                     {/* ================= DESKTOP NAV ================= */}

// //                     <div className="hidden items-center gap-16 md:flex lg:gap-20">

// //                         {/* Home */}

// //                         <a
// //                             href="#home"
// //                             onClick={closeAll}
// //                             className="group relative text-base font-medium text-white transition-colors duration-300 hover:text-[#94a3b8]"
// //                         >
// //                             Home

// //                             <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#94a3b8] transition-all duration-300 group-hover:w-full" />
// //                         </a>

// //                         {/* What We Do */}

// //                         <NavTrigger
// //                             label="What We Do"
// //                             isOpen={activeDropdown === 'what'}
// //                             onMouseEnter={() => openDropdown('what')}
// //                             onMouseLeave={scheduleClose}
// //                         />

// //                         {/* Who We Are */}

// //                         <NavTrigger
// //                             label="Who We Are"
// //                             isOpen={activeDropdown === 'who'}
// //                             onMouseEnter={() => openDropdown('who')}
// //                             onMouseLeave={scheduleClose}
// //                         />

// //                         {/* Contact */}

// //                         <a
// //                             href="#contact"
// //                             onClick={closeAll}
// //                             className="group relative text-base font-medium text-white transition-colors duration-300 hover:text-[#94a3b8]"
// //                         >
// //                             Contact

// //                             <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#94a3b8] transition-all duration-300 group-hover:w-full" />
// //                         </a>

// //                         {/* Consultation CTA */}

// //                         <a
// //                             href="#contact"
// //                             onClick={closeAll}
// //                             className="rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#2563EB]/20"
// //                         >
// //                             Book a Free Consultation
// //                         </a>

// //                     </div>

// //                     {/* ================= MOBILE MENU BUTTON ================= */}

// //                     <button
// //                         type="button"
// //                         onClick={toggleMobileMenu}
// //                         aria-label="Toggle navigation menu"
// //                         className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition-colors duration-300 hover:bg-white/5 md:hidden"
// //                     >
// //                         <div className="flex w-5 flex-col gap-1.5">
// //                             <span
// //                                 className={`h-[2px] w-full bg-white transition-transform duration-300 ${
// //                                     mobileMenuOpen
// //                                         ? 'translate-y-[4px] rotate-45'
// //                                         : ''
// //                                 }`}
// //                             />

// //                             <span
// //                                 className={`h-[2px] w-full bg-white transition-opacity duration-300 ${
// //                                     mobileMenuOpen ? 'opacity-0' : ''
// //                                 }`}
// //                             />

// //                             <span
// //                                 className={`h-[2px] w-full bg-white transition-transform duration-300 ${
// //                                     mobileMenuOpen
// //                                         ? '-translate-y-[4px] -rotate-45'
// //                                         : ''
// //                                 }`}
// //                             />
// //                         </div>
// //                     </button>

// //                 </div>
// //             </div>

// //             {/* ================= DESKTOP DROPDOWNS ================= */}

// //             <div className="hidden md:block">

// //                 <NavDropdown
// //                     isOpen={activeDropdown === 'what'}
// //                     title="What We Do"
// //                     links={WHAT_WE_DO_LINKS}
// //                     onLinkClick={closeAll}
// //                     onMouseEnter={() => openDropdown('what')}
// //                     onMouseLeave={scheduleClose}
// //                 />

// //                 <NavDropdown
// //                     isOpen={activeDropdown === 'who'}
// //                     title="Who We Are"
// //                     links={WHO_WE_ARE_LINKS}
// //                     onLinkClick={closeAll}
// //                     onMouseEnter={() => openDropdown('who')}
// //                     onMouseLeave={scheduleClose}
// //                 />

// //             </div>

// //             {/* ================= MOBILE MENU ================= */}

// //             <div
// //                 className={`overflow-hidden border-b border-white/10 bg-[#0A1120] transition-all duration-300 md:hidden ${
// //                     mobileMenuOpen
// //                         ? 'max-h-[700px] opacity-100'
// //                         : 'max-h-0 opacity-0'
// //                 }`}
// //             >
// //                 <div className="px-6 py-6">

// //                     {/* Home */}

// //                     <a
// //                         href="#home"
// //                         onClick={closeAll}
// //                         className="block border-b border-white/10 py-4 text-lg font-medium text-white"
// //                     >
// //                         Home
// //                     </a>

// //                     {/* What We Do */}

// //                     <div className="border-b border-white/10 py-4">

// //                         <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#64748B]">
// //                             What We Do
// //                         </p>

// //                         <div className="flex flex-col gap-3">
// //                             {WHAT_WE_DO_LINKS.map((link) => (
// //                                 <a
// //                                     key={link.href}
// //                                     href={link.href}
// //                                     onClick={closeAll}
// //                                     className="text-base text-[#CBD5E1] transition-colors duration-300 hover:text-white"
// //                                 >
// //                                     {link.label}
// //                                 </a>
// //                             ))}
// //                         </div>

// //                     </div>

// //                     {/* Who We Are */}

// //                     <div className="border-b border-white/10 py-4">

// //                         <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#64748B]">
// //                             Who We Are
// //                         </p>

// //                         <div className="flex flex-col gap-3">
// //                             {WHO_WE_ARE_LINKS.map((link) => (
// //                                 <a
// //                                     key={link.href}
// //                                     href={link.href}
// //                                     onClick={closeAll}
// //                                     className="text-base text-[#CBD5E1] transition-colors duration-300 hover:text-white"
// //                                 >
// //                                     {link.label}
// //                                 </a>
// //                             ))}
// //                         </div>

// //                     </div>

// //                     {/* Contact */}

// //                     <a
// //                         href="#contact"
// //                         onClick={closeAll}
// //                         className="block border-b border-white/10 py-4 text-lg font-medium text-white"
// //                     >
// //                         Contact
// //                     </a>

// //                     {/* Mobile CTA */}

// //                     <a
// //                         href="#contact"
// //                         onClick={closeAll}
// //                         className="mt-6 flex items-center justify-center rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-6 py-4 text-sm font-semibold text-white"
// //                     >
// //                         Book a Free Consultation
// //                     </a>

// //                 </div>
// //             </div>

// //         </nav>
// //     );
// // }

// // export default Navbar;




// // import { useState, useCallback, useRef } from 'react';
// // import { Link } from 'react-router-dom';
// // import rachryLogo from '../assets/rachry-logo.png';

// // const WHO_WE_ARE_LINKS = [
// //     { label: 'About Us', href: '/about' },
// //     { label: 'Our Strategy', href: '/our-strategy' },
// // ];

// // const WHAT_WE_DO_LINKS = [
// //     { label: 'Software & IT Solutions', href: '/services/software-it' },
// //     { label: 'Creative & Design Solutions', href: '/services/creative-design' },
// //     { label: 'Digital Marketing', href: '/services/digital-marketing' },
// //     { label: 'Student Opportunities & Training', href: '/services/student-zone' },
// // ];

// // const CLOSE_DELAY = 150;

// // function NavDropdown({
// //     isOpen,
// //     title,
// //     links,
// //     onLinkClick,
// //     onMouseEnter,
// //     onMouseLeave,
// // }) {
// //     return (
// //         <div
// //             onMouseEnter={onMouseEnter}
// //             onMouseLeave={onMouseLeave}
// //             className={`grid w-full bg-[#0f1729] transition-[grid-template-rows,opacity] duration-300 ease-out ${
// //                 isOpen
// //                     ? 'grid-rows-[1fr] opacity-100'
// //                     : 'grid-rows-[0fr] opacity-0'
// //             }`}
// //         >
// //             <div className="overflow-hidden">
// //                 <div
// //                     className={`mx-auto w-full max-w-[1500px] px-8 py-8 lg:px-12 transition-transform duration-300 ease-out ${
// //                         isOpen ? 'translate-y-0' : '-translate-y-2'
// //                     }`}
// //                 >
// //                     <div className="ml-0 flex flex-col gap-3 lg:ml-30">
// //                         <p className="py-3 text-sm font-medium uppercase tracking-wide text-[#94a3b8]">
// //                             {title}
// //                         </p>

// //                         {links.map((link) => (
// //                             <Link
// //                                 key={link.href}
// //                                 to={link.href}
// //                                 onClick={onLinkClick}
// //                                 className="w-fit text-xl font-normal text-white transition-colors duration-300 hover:text-[#94a3b8]"
// //                             >
// //                                 {link.label}
// //                             </Link>
// //                         ))}
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }

// // function NavTrigger({
// //     label,
// //     isOpen,
// //     onMouseEnter,
// //     onMouseLeave,
// // }) {
// //     return (
// //         <div
// //             onMouseEnter={onMouseEnter}
// //             onMouseLeave={onMouseLeave}
// //             className={`group relative flex cursor-default items-center gap-2 text-base font-medium transition-colors duration-300 ${
// //                 isOpen
// //                     ? 'text-[#94a3b8]'
// //                     : 'text-white hover:text-[#94a3b8]'
// //             }`}
// //         >
// //             {label}

// //             <span
// //                 className={`absolute -bottom-2 left-0 h-[2px] bg-[#94a3b8] transition-all duration-300 ${
// //                     isOpen ? 'w-full' : 'w-0 group-hover:w-full'
// //                 }`}
// //             />
// //         </div>
// //     );
// // }

// // function Navbar() {
// //     const [activeDropdown, setActiveDropdown] = useState(null);
// //     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// //     const closeTimer = useRef(null);

// //     const clearCloseTimer = () => {
// //         if (closeTimer.current) {
// //             clearTimeout(closeTimer.current);
// //             closeTimer.current = null;
// //         }
// //     };

// //     const openDropdown = useCallback((key) => {
// //         clearCloseTimer();
// //         setActiveDropdown(key);
// //     }, []);

// //     const scheduleClose = useCallback(() => {
// //         clearCloseTimer();

// //         closeTimer.current = setTimeout(() => {
// //             setActiveDropdown(null);
// //         }, CLOSE_DELAY);
// //     }, []);

// //     const closeAll = useCallback(() => {
// //         clearCloseTimer();
// //         setActiveDropdown(null);
// //         setMobileMenuOpen(false);
// //     }, []);

// //     const toggleMobileMenu = () => {
// //         setMobileMenuOpen((prev) => !prev);
// //         setActiveDropdown(null);
// //     };

// //     return (
// //         <nav className="fixed left-0 top-0 z-50 w-full">

// //             {/* ================= NAVBAR ================= */}

// //             <div className="border-b border-white/10 bg-[#050B18]/95 backdrop-blur-md">

// //                 <div className="mx-auto flex h-24 w-full max-w-[1500px] items-center justify-between px-6 lg:h-28 lg:px-12">

// //                     {/* Logo */}

// //                     <Link
// //                         to="/"
// //                         onClick={closeAll}
// //                         className="flex shrink-0 items-center"
// //                     >
// //                         <img
// //                             src={rachryLogo}
// //                             alt="Rachry Technologies"
// //                             className="h-12 w-auto object-contain lg:h-14"
// //                         />
// //                     </Link>

// //                     {/* ================= DESKTOP NAV ================= */}

// //                     <div className="hidden items-center gap-16 md:flex lg:gap-20">

// //                         {/* Home */}

// //                         <Link
// //                             to="/"
// //                             onClick={closeAll}
// //                             className="group relative text-base font-medium text-white transition-colors duration-300 hover:text-[#94a3b8]"
// //                         >
// //                             Home

// //                             <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#94a3b8] transition-all duration-300 group-hover:w-full" />
// //                         </Link>

// //                         {/* What We Do */}

// //                         <NavTrigger
// //                             label="What We Do"
// //                             isOpen={activeDropdown === 'what'}
// //                             onMouseEnter={() => openDropdown('what')}
// //                             onMouseLeave={scheduleClose}
// //                         />

// //                         {/* Who We Are */}

// //                         <NavTrigger
// //                             label="Who We Are"
// //                             isOpen={activeDropdown === 'who'}
// //                             onMouseEnter={() => openDropdown('who')}
// //                             onMouseLeave={scheduleClose}
// //                         />

// //                         {/* Contact */}


// //             <Link
// //               to="/contact"
// //               className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
// //             >
// //               Book a free consultation
// //             </Link>

// //                     </div>

// //                     {/* ================= MOBILE MENU BUTTON ================= */}

// //                     <button
// //                         type="button"
// //                         onClick={toggleMobileMenu}
// //                         aria-label="Toggle navigation menu"
// //                         className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition-colors duration-300 hover:bg-white/5 md:hidden"
// //                     >
// //                         <div className="flex w-5 flex-col gap-1.5">
// //                             <span
// //                                 className={`h-[2px] w-full bg-white transition-transform duration-300 ${
// //                                     mobileMenuOpen
// //                                         ? 'translate-y-[4px] rotate-45'
// //                                         : ''
// //                                 }`}
// //                             />

// //                             <span
// //                                 className={`h-[2px] w-full bg-white transition-opacity duration-300 ${
// //                                     mobileMenuOpen ? 'opacity-0' : ''
// //                                 }`}
// //                             />

// //                             <span
// //                                 className={`h-[2px] w-full bg-white transition-transform duration-300 ${
// //                                     mobileMenuOpen
// //                                         ? '-translate-y-[4px] -rotate-45'
// //                                         : ''
// //                                 }`}
// //                             />
// //                         </div>
// //                     </button>

// //                 </div>
// //             </div>

// //             {/* ================= DESKTOP DROPDOWNS ================= */}

// //             <div className="hidden md:block">

// //                 <NavDropdown
// //                     isOpen={activeDropdown === 'what'}
// //                     title="What We Do"
// //                     links={WHAT_WE_DO_LINKS}
// //                     onLinkClick={closeAll}
// //                     onMouseEnter={() => openDropdown('what')}
// //                     onMouseLeave={scheduleClose}
// //                 />

// //                 <NavDropdown
// //                     isOpen={activeDropdown === 'who'}
// //                     title="Who We Are"
// //                     links={WHO_WE_ARE_LINKS}
// //                     onLinkClick={closeAll}
// //                     onMouseEnter={() => openDropdown('who')}
// //                     onMouseLeave={scheduleClose}
// //                 />

// //             </div>

// //             {/* ================= MOBILE MENU ================= */}

// //             <div
// //                 className={`overflow-hidden border-b border-white/10 bg-[#0A1120] transition-all duration-300 md:hidden ${
// //                     mobileMenuOpen
// //                         ? 'max-h-[700px] opacity-100'
// //                         : 'max-h-0 opacity-0'
// //                 }`}
// //             >
// //                 <div className="px-6 py-6">

// //                     {/* Home */}

// //                     <Link
// //                         to="/"
// //                         onClick={closeAll}
// //                         className="block border-b border-white/10 py-4 text-lg font-medium text-white"
// //                     >
// //                         Home
// //                     </Link>

// //                     {/* What We Do */}

// //                     <div className="border-b border-white/10 py-4">

// //                         <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#64748B]">
// //                             What We Do
// //                         </p>

// //                         <div className="flex flex-col gap-3">
// //                             {WHAT_WE_DO_LINKS.map((link) => (
// //                                 <Link
// //                                     key={link.href}
// //                                     to={link.href}
// //                                     onClick={closeAll}
// //                                     className="text-base text-[#CBD5E1] transition-colors duration-300 hover:text-white"
// //                                 >
// //                                     {link.label}
// //                                 </Link>
// //                             ))}
// //                         </div>

// //                     </div>

// //                     {/* Who We Are */}

// //                     <div className="border-b border-white/10 py-4">

// //                         <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#64748B]">
// //                             Who We Are
// //                         </p>

// //                         <div className="flex flex-col gap-3">
// //                             {WHO_WE_ARE_LINKS.map((link) => (
// //                                 <Link
// //                                     key={link.href}
// //                                     to={link.href}
// //                                     onClick={closeAll}
// //                                     className="text-base text-[#CBD5E1] transition-colors duration-300 hover:text-white"
// //                                 >
// //                                     {link.label}
// //                                 </Link>
// //                             ))}
// //                         </div>

// //                     </div>

// //                     {/* Contact */}

// //                     <Link
// //                         to="/#contact"
// //                         onClick={closeAll}
// //                         className="block border-b border-white/10 py-4 text-lg font-medium text-white"
// //                     >
// //                         Contact
// //                     </Link>

// //                     {/* Mobile CTA */}

// //                     <Link
// //                         to="/#contact"
// //                         onClick={closeAll}
// //                         className="mt-6 flex items-center justify-center rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-6 py-4 text-sm font-semibold text-white"
// //                     >
// //                         Book a Free Consultation
// //                     </Link>

// //                 </div>
// //             </div>

// //         </nav>
// //     );
// // }

// // export default Navbar;


// import { useState, useCallback, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import rachryLogo from '../assets/rachry-logo.png';

// const WHO_WE_ARE_LINKS = [
//     { label: 'About Us', href: '/about' },
//     { label: 'Our Strategy', href: '/our-strategy' },
// ];

// const WHAT_WE_DO_LINKS = [
//     { label: 'Software & IT Solutions', href: '/services/software-it' },
//     { label: 'Creative & Design Solutions', href: '/services/creative-design' },
//     { label: 'Digital Marketing', href: '/services/digital-marketing' },
//     { label: 'Student Opportunities & Training', href: '/services/student-zone' },
// ];

// const CLOSE_DELAY = 150;

// function NavDropdown({
//     isOpen,
//     title,
//     links,
//     onLinkClick,
//     onMouseEnter,
//     onMouseLeave,
// }) {
//     return (
//         <div
//             onMouseEnter={onMouseEnter}
//             onMouseLeave={onMouseLeave}
//             className={`grid w-full bg-[#0f1729] transition-[grid-template-rows,opacity] duration-300 ease-out ${
//                 isOpen
//                     ? 'grid-rows-[1fr] opacity-100'
//                     : 'grid-rows-[0fr] opacity-0'
//             }`}
//         >
//             <div className="overflow-hidden">
//                 <div
//                     className={`mx-auto w-full max-w-[1500px] px-6 py-6 sm:px-8 sm:py-8 lg:px-12 transition-transform duration-300 ease-out ${
//                         isOpen ? 'translate-y-0' : '-translate-y-2'
//                     }`}
//                 >
//                     <div className="ml-0 flex flex-col gap-3 md:ml-8 lg:ml-30">
//                         <p className="py-3 text-sm font-medium uppercase tracking-wide text-[#94a3b8]">
//                             {title}
//                         </p>

//                         {links.map((link) => (
//                             <Link
//                                 key={link.href}
//                                 to={link.href}
//                                 onClick={onLinkClick}
//                                 className="w-fit text-lg font-normal text-white transition-colors duration-300 hover:text-[#94a3b8] lg:text-xl"
//                             >
//                                 {link.label}
//                             </Link>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// function NavTrigger({
//     label,
//     isOpen,
//     onMouseEnter,
//     onMouseLeave,
// }) {
//     return (
//         <div
//             onMouseEnter={onMouseEnter}
//             onMouseLeave={onMouseLeave}
//             className={`group relative flex cursor-default items-center gap-2 whitespace-nowrap text-sm font-medium transition-colors duration-300 lg:text-base ${
//                 isOpen
//                     ? 'text-[#94a3b8]'
//                     : 'text-white hover:text-[#94a3b8]'
//             }`}
//         >
//             {label}

//             <span
//                 className={`absolute -bottom-2 left-0 h-[2px] bg-[#94a3b8] transition-all duration-300 ${
//                     isOpen ? 'w-full' : 'w-0 group-hover:w-full'
//                 }`}
//             />
//         </div>
//     );
// }

// function Navbar() {
//     const [activeDropdown, setActiveDropdown] = useState(null);
//     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//     const closeTimer = useRef(null);

//     const clearCloseTimer = () => {
//         if (closeTimer.current) {
//             clearTimeout(closeTimer.current);
//             closeTimer.current = null;
//         }
//     };

//     const openDropdown = useCallback((key) => {
//         clearCloseTimer();
//         setActiveDropdown(key);
//     }, []);

//     const scheduleClose = useCallback(() => {
//         clearCloseTimer();

//         closeTimer.current = setTimeout(() => {
//             setActiveDropdown(null);
//         }, CLOSE_DELAY);
//     }, []);

//     const closeAll = useCallback(() => {
//         clearCloseTimer();
//         setActiveDropdown(null);
//         setMobileMenuOpen(false);
//     }, []);

//     const toggleMobileMenu = () => {
//         setMobileMenuOpen((prev) => !prev);
//         setActiveDropdown(null);
//     };

//     return (
//         <nav className="fixed left-0 top-0 z-50 w-full">

//             {/* ================= NAVBAR ================= */}

//             <div className="border-b border-white/10 bg-[#050B18]/95 backdrop-blur-md">

//                 <div className="mx-auto flex h-16 w-full max-w-[1500px] items-center justify-between px-5 sm:h-20 sm:px-8 lg:h-28 lg:px-12">

//                     {/* Logo */}

//                     <Link
//                         to="/"
//                         onClick={closeAll}
//                         className="flex shrink-0 items-center"
//                     >
//                         <img
//                             src={rachryLogo}
//                             alt="Rachry Technologies"
//                             className="h-9 w-auto object-contain sm:h-11 lg:h-14"
//                         />
//                     </Link>

//                     {/* ================= DESKTOP NAV ================= */}

//                     <div className="hidden items-center gap-6 md:flex lg:gap-16 xl:gap-20">

//                         {/* Home */}

//                         <Link
//                             to="/"
//                             onClick={closeAll}
//                             className="group relative whitespace-nowrap text-sm font-medium text-white transition-colors duration-300 hover:text-[#94a3b8] lg:text-base"
//                         >
//                             Home

//                             <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#94a3b8] transition-all duration-300 group-hover:w-full" />
//                         </Link>

//                         {/* What We Do */}

//                         <NavTrigger
//                             label="What We Do"
//                             isOpen={activeDropdown === 'what'}
//                             onMouseEnter={() => openDropdown('what')}
//                             onMouseLeave={scheduleClose}
//                         />

//                         {/* Who We Are */}

//                         <NavTrigger
//                             label="Who We Are"
//                             isOpen={activeDropdown === 'who'}
//                             onMouseEnter={() => openDropdown('who')}
//                             onMouseLeave={scheduleClose}
//                         />

//                         {/* Contact */}


//             <Link
//               to="/contact"
//               className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-4 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:scale-105 lg:px-6 lg:py-3 lg:text-sm"
//             >
//               Book a free consultation
//             </Link>

//                     </div>

//                     {/* ================= MOBILE MENU BUTTON ================= */}

//                     <button
//                         type="button"
//                         onClick={toggleMobileMenu}
//                         aria-label="Toggle navigation menu"
//                         className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-colors duration-300 hover:bg-white/5 sm:h-11 sm:w-11 md:hidden"
//                     >
//                         <div className="flex w-5 flex-col gap-1.5">
//                             <span
//                                 className={`h-[2px] w-full bg-white transition-transform duration-300 ${
//                                     mobileMenuOpen
//                                         ? 'translate-y-[4px] rotate-45'
//                                         : ''
//                                 }`}
//                             />

//                             <span
//                                 className={`h-[2px] w-full bg-white transition-opacity duration-300 ${
//                                     mobileMenuOpen ? 'opacity-0' : ''
//                                 }`}
//                             />

//                             <span
//                                 className={`h-[2px] w-full bg-white transition-transform duration-300 ${
//                                     mobileMenuOpen
//                                         ? '-translate-y-[4px] -rotate-45'
//                                         : ''
//                                 }`}
//                             />
//                         </div>
//                     </button>

//                 </div>
//             </div>

//             {/* ================= DESKTOP DROPDOWNS ================= */}

//             <div className="hidden md:block">

//                 <NavDropdown
//                     isOpen={activeDropdown === 'what'}
//                     title="What We Do"
//                     links={WHAT_WE_DO_LINKS}
//                     onLinkClick={closeAll}
//                     onMouseEnter={() => openDropdown('what')}
//                     onMouseLeave={scheduleClose}
//                 />

//                 <NavDropdown
//                     isOpen={activeDropdown === 'who'}
//                     title="Who We Are"
//                     links={WHO_WE_ARE_LINKS}
//                     onLinkClick={closeAll}
//                     onMouseEnter={() => openDropdown('who')}
//                     onMouseLeave={scheduleClose}
//                 />

//             </div>

//             {/* ================= MOBILE MENU ================= */}

//             <div
//                 className={`overflow-hidden border-b border-white/10 bg-[#0A1120] transition-all duration-300 md:hidden ${
//                     mobileMenuOpen
//                         ? 'max-h-[calc(100vh-4rem)] opacity-100'
//                         : 'max-h-0 opacity-0'
//                 }`}
//             >
//                 <div className="max-h-[calc(100vh-4rem)] overflow-y-auto px-5 py-5 sm:px-6 sm:py-6">

//                     {/* Home */}

//                     <Link
//                         to="/"
//                         onClick={closeAll}
//                         className="block border-b border-white/10 py-3 text-base font-medium text-white sm:py-4 sm:text-lg"
//                     >
//                         Home
//                     </Link>

//                     {/* What We Do */}

//                     <div className="border-b border-white/10 py-3 sm:py-4">

//                         <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#64748B]">
//                             What We Do
//                         </p>

//                         <div className="flex flex-col gap-3">
//                             {WHAT_WE_DO_LINKS.map((link) => (
//                                 <Link
//                                     key={link.href}
//                                     to={link.href}
//                                     onClick={closeAll}
//                                     className="text-sm text-[#CBD5E1] transition-colors duration-300 hover:text-white sm:text-base"
//                                 >
//                                     {link.label}
//                                 </Link>
//                             ))}
//                         </div>

//                     </div>

//                     {/* Who We Are */}

//                     <div className="border-b border-white/10 py-3 sm:py-4">

//                         <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#64748B]">
//                             Who We Are
//                         </p>

//                         <div className="flex flex-col gap-3">
//                             {WHO_WE_ARE_LINKS.map((link) => (
//                                 <Link
//                                     key={link.href}
//                                     to={link.href}
//                                     onClick={closeAll}
//                                     className="text-sm text-[#CBD5E1] transition-colors duration-300 hover:text-white sm:text-base"
//                                 >
//                                     {link.label}
//                                 </Link>
//                             ))}
//                         </div>

//                     </div>

//                     {/* Contact */}

//                     <Link
//                         to="/#contact"
//                         onClick={closeAll}
//                         className="block border-b border-white/10 py-3 text-base font-medium text-white sm:py-4 sm:text-lg"
//                     >
//                         Contact
//                     </Link>

//                     {/* Mobile CTA */}

//                     <Link
//                         to="/#contact"
//                         onClick={closeAll}
//                         className="mt-5 flex items-center justify-center rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-6 py-3.5 text-sm font-semibold text-white sm:mt-6 sm:py-4"
//                     >
//                         Book a Free Consultation
//                     </Link>

//                 </div>
//             </div>

//         </nav>
//     );
// }

// export default Navbar;.


import { useState, useCallback, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import rachryLogo from '../assets/rachry-logo.png';

const WHO_WE_ARE_LINKS = [
    { label: 'About Us', href: '/about' },
    { label: 'Our Strategy', href: '/our-strategy' },
];

const WHAT_WE_DO_LINKS = [
    { label: 'Software & IT Solutions', href: '/services/software-it' },
    { label: 'Creative & Design Solutions', href: '/services/creative-design' },
    { label: 'Digital Marketing', href: '/services/digital-marketing' },
    { label: 'Student Opportunities & Training', href: '/services/student-zone' },
];

const CLOSE_DELAY = 150;

function NavDropdown({
    isOpen,
    title,
    links,
    onLinkClick,
    onMouseEnter,
    onMouseLeave,
}) {
    return (
        <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={`grid w-full bg-[#0f1729] transition-[grid-template-rows,opacity] duration-300 ease-out ${
                isOpen
                    ? 'grid-rows-[1fr] opacity-100'
                    : 'grid-rows-[0fr] opacity-0'
            }`}
        >
            <div className="overflow-hidden">
                <div
                    className={`mx-auto w-full max-w-[1500px] px-6 py-6 sm:px-8 sm:py-8 lg:px-12 transition-transform duration-300 ease-out ${
                        isOpen ? 'translate-y-0' : '-translate-y-2'
                    }`}
                >
                    <div className="ml-0 flex flex-col gap-3 md:ml-8 lg:ml-30">
                        <p className="py-3 text-sm font-medium uppercase tracking-wide text-[#94a3b8]">
                            {title}
                        </p>

                        {links.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                onClick={onLinkClick}
                                className="w-fit text-lg font-normal text-white transition-colors duration-300 hover:text-[#94a3b8] lg:text-xl"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function NavTrigger({
    label,
    isOpen,
    onMouseEnter,
    onMouseLeave,
}) {
    return (
        <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={`group relative flex cursor-default items-center gap-2 whitespace-nowrap text-sm font-medium transition-colors duration-300 lg:text-base ${
                isOpen
                    ? 'text-[#94a3b8]'
                    : 'text-white hover:text-[#94a3b8]'
            }`}
        >
            {label}

            <span
                className={`absolute -bottom-2 left-0 h-[2px] bg-[#94a3b8] transition-all duration-300 ${
                    isOpen ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
            />
        </div>
    );
}

function Navbar() {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { pathname } = useLocation();
    const isOnContactPage = pathname === '/contact';

    const closeTimer = useRef(null);

    const clearCloseTimer = () => {
        if (closeTimer.current) {
            clearTimeout(closeTimer.current);
            closeTimer.current = null;
        }
    };

    const openDropdown = useCallback((key) => {
        clearCloseTimer();
        setActiveDropdown(key);
    }, []);

    const scheduleClose = useCallback(() => {
        clearCloseTimer();

        closeTimer.current = setTimeout(() => {
            setActiveDropdown(null);
        }, CLOSE_DELAY);
    }, []);

    const closeAll = useCallback(() => {
        clearCloseTimer();
        setActiveDropdown(null);
        setMobileMenuOpen(false);
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen((prev) => !prev);
        setActiveDropdown(null);
    };

    const handleContactClick = (e) => {
        closeAll();
        if (isOnContactPage) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed left-0 top-0 z-50 w-full">

            {/* ================= NAVBAR ================= */}

            <div className="border-b border-white/10 bg-[#050B18]/95 backdrop-blur-md">

                <div className="mx-auto flex h-16 w-full max-w-[1500px] items-center justify-between px-5 sm:h-20 sm:px-8 lg:h-28 lg:px-12">

                    {/* Logo */}

                    <Link
                        to="/"
                        onClick={closeAll}
                        className="flex shrink-0 items-center"
                    >
                        <img
                            src={rachryLogo}
                            alt="Rachry Technologies"
                            className="h-9 w-auto object-contain sm:h-11 lg:h-14"
                        />
                    </Link>

                    {/* ================= DESKTOP NAV ================= */}

                    <div className="hidden items-center gap-6 md:flex lg:gap-16 xl:gap-20">

                        {/* Home */}

                        <Link
                            to="/"
                            onClick={closeAll}
                            className="group relative whitespace-nowrap text-sm font-medium text-white transition-colors duration-300 hover:text-[#94a3b8] lg:text-base"
                        >
                            Home

                            <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#94a3b8] transition-all duration-300 group-hover:w-full" />
                        </Link>

                        {/* What We Do */}

                        <NavTrigger
                            label="What We Do"
                            isOpen={activeDropdown === 'what'}
                            onMouseEnter={() => openDropdown('what')}
                            onMouseLeave={scheduleClose}
                        />

                        {/* Who We Are */}

                        <NavTrigger
                            label="Who We Are"
                            isOpen={activeDropdown === 'who'}
                            onMouseEnter={() => openDropdown('who')}
                            onMouseLeave={scheduleClose}
                        />

                        {/* Contact */}


            <Link
              to="/contact"
              onClick={handleContactClick}
              className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-4 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:scale-105 lg:px-6 lg:py-3 lg:text-sm"
            >
              Book a free consultation
            </Link>

                    </div>

                    {/* ================= MOBILE MENU BUTTON ================= */}

                    <button
                        type="button"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle navigation menu"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-colors duration-300 hover:bg-white/5 sm:h-11 sm:w-11 md:hidden"
                    >
                        <div className="flex w-5 flex-col gap-1.5">
                            <span
                                className={`h-[2px] w-full bg-white transition-transform duration-300 ${
                                    mobileMenuOpen
                                        ? 'translate-y-[4px] rotate-45'
                                        : ''
                                }`}
                            />

                            <span
                                className={`h-[2px] w-full bg-white transition-opacity duration-300 ${
                                    mobileMenuOpen ? 'opacity-0' : ''
                                }`}
                            />

                            <span
                                className={`h-[2px] w-full bg-white transition-transform duration-300 ${
                                    mobileMenuOpen
                                        ? '-translate-y-[4px] -rotate-45'
                                        : ''
                                }`}
                            />
                        </div>
                    </button>

                </div>
            </div>

            {/* ================= DESKTOP DROPDOWNS ================= */}

            <div className="hidden md:block">

                <NavDropdown
                    isOpen={activeDropdown === 'what'}
                    title="What We Do"
                    links={WHAT_WE_DO_LINKS}
                    onLinkClick={closeAll}
                    onMouseEnter={() => openDropdown('what')}
                    onMouseLeave={scheduleClose}
                />

                <NavDropdown
                    isOpen={activeDropdown === 'who'}
                    title="Who We Are"
                    links={WHO_WE_ARE_LINKS}
                    onLinkClick={closeAll}
                    onMouseEnter={() => openDropdown('who')}
                    onMouseLeave={scheduleClose}
                />

            </div>

            {/* ================= MOBILE MENU ================= */}

            <div
                className={`overflow-hidden border-b border-white/10 bg-[#0A1120] transition-all duration-300 md:hidden ${
                    mobileMenuOpen
                        ? 'max-h-[calc(100vh-4rem)] opacity-100'
                        : 'max-h-0 opacity-0'
                }`}
            >
                <div className="max-h-[calc(100vh-4rem)] overflow-y-auto px-5 py-5 sm:px-6 sm:py-6">

                    {/* Home */}

                    <Link
                        to="/"
                        onClick={closeAll}
                        className="block border-b border-white/10 py-3 text-base font-medium text-white sm:py-4 sm:text-lg"
                    >
                        Home
                    </Link>

                    {/* What We Do */}

                    <div className="border-b border-white/10 py-3 sm:py-4">

                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#64748B]">
                            What We Do
                        </p>

                        <div className="flex flex-col gap-3">
                            {WHAT_WE_DO_LINKS.map((link) => (
                                <Link
                                    key={link.href}
                                    to={link.href}
                                    onClick={closeAll}
                                    className="text-sm text-[#CBD5E1] transition-colors duration-300 hover:text-white sm:text-base"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                    </div>

                    {/* Who We Are */}

                    <div className="border-b border-white/10 py-3 sm:py-4">

                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#64748B]">
                            Who We Are
                        </p>

                        <div className="flex flex-col gap-3">
                            {WHO_WE_ARE_LINKS.map((link) => (
                                <Link
                                    key={link.href}
                                    to={link.href}
                                    onClick={closeAll}
                                    className="text-sm text-[#CBD5E1] transition-colors duration-300 hover:text-white sm:text-base"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                    </div>

                    {/* Contact */}

                    <Link
                        to="/contact"
                        onClick={handleContactClick}
                        className="block border-b border-white/10 py-3 text-base font-medium text-white sm:py-4 sm:text-lg"
                    >
                        Contact
                    </Link>

                    {/* Mobile CTA */}

                    <Link
                        to="/contact"
                        onClick={handleContactClick}
                        className="mt-5 flex items-center justify-center rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-6 py-3.5 text-sm font-semibold text-white sm:mt-6 sm:py-4"
                    >
                        Book a Free Consultation
                    </Link>

                </div>
            </div>

        </nav>
    );
}

export default Navbar;