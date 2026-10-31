import { navigation } from '../../content/company.js';
import { useState, useCallback, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import rachryLogo from '../../assets/rachry-logo.png';

const WHO_WE_ARE_LINKS = navigation.company;

const WHAT_WE_DO_LINKS = navigation.services;

const CLOSE_DELAY = 150;

function NavDropdown({
    isOpen,
    title,
    links,
    onLinkClick,
    onMouseEnter,
    onMouseLeave,
    panelId,
}) {
    return (
        <div
            id={panelId}
            inert={!isOpen}
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
    onClick,
    navKey,
}) {
    return (
        <button
            type="button"
            data-nav-trigger={navKey}
            aria-expanded={isOpen}
            aria-controls={`nav-${navKey}`}
            onClick={onClick}
            onPointerEnter={event => { if (event.pointerType === "mouse") onMouseEnter(); }}
            onPointerLeave={event => { if (event.pointerType === "mouse") onMouseLeave(); }}
            className={`group relative flex cursor-pointer items-center gap-2 whitespace-nowrap text-sm font-medium transition-colors duration-300 lg:text-base ${
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
        </button>
    );
}

function Navbar() {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { pathname } = useLocation();
    const isOnContactPage = pathname === '/contact';

    const closeTimer = useRef(null);
    const navRef = useRef(null);
    useEffect(() => () => clearTimeout(closeTimer.current), []);

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
        <nav ref={navRef} aria-label="Main navigation" className="fixed left-0 top-0 z-50 w-full"
          onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget)) closeAll(); }}
          onKeyDown={e => { if (e.key === 'Escape') {
            e.preventDefault();
            if (mobileMenuOpen) navRef.current.querySelector('[aria-controls="mobile-navigation"]')?.focus();
            else navRef.current.querySelector(`[data-nav-trigger="${activeDropdown}"]`)?.focus();
            closeAll();
          } }}>

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
                            src={rachryLogo} width={2096} height={560}
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
                            navKey="what"
                            onClick={() => { clearCloseTimer(); setActiveDropdown(current => current === 'what' ? null : 'what'); }}
                            onMouseEnter={() => openDropdown('what')}
                            onMouseLeave={scheduleClose}
                        />

                        {/* Who We Are */}

                        <NavTrigger
                            label="Who We Are"
                            isOpen={activeDropdown === 'who'}
                            navKey="who"
                            onClick={() => { clearCloseTimer(); setActiveDropdown(current => current === 'who' ? null : 'who'); }}
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
                        aria-expanded={mobileMenuOpen}
                        aria-controls="mobile-navigation"
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
                    panelId="nav-what"
                    title="What We Do"
                    links={WHAT_WE_DO_LINKS}
                    onLinkClick={closeAll}
                    onMouseEnter={() => openDropdown('what')}
                    onMouseLeave={scheduleClose}
                />

                <NavDropdown
                    isOpen={activeDropdown === 'who'}
                    panelId="nav-who"
                    title="Who We Are"
                    links={WHO_WE_ARE_LINKS}
                    onLinkClick={closeAll}
                    onMouseEnter={() => openDropdown('who')}
                    onMouseLeave={scheduleClose}
                />

            </div>

            {/* ================= MOBILE MENU ================= */}

            <div
                id="mobile-navigation"
                inert={!mobileMenuOpen}
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