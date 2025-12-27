"use client";


import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import WaitlistModal from './WaitlistModal';

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showWaitlistModal, setShowWaitlistModal] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Only hide if scrolling down significantly
            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        if (window.location.pathname !== '/') {
            setIsMenuOpen(false);
            return;
        }

        e.preventDefault();
        setIsMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* Main Floating Header - Pointer events none on container, auto on children */}
            <header
                className={` max-w-7xl mx-auto fixed top-0 left-0 right-0 z-50 px-6 py-6 flex items-center justify-between transition-transform duration-300 pointer-events-none ${isVisible ? 'translate-y-0' : '-translate-y-full'
                    }`}
            >
                {/* Logo - Top Left */}
                <div className="pointer-events-auto">
                    <Link href="/">
                        {/* <div className="flex items-center gap-0 cursor-pointer hover:scale-105 transition-transform bg-blend-overlay">
                            <Image
                                src="/logo.png"
                                alt="Nexbee Logo"
                                width={60}
                                height={60}
                                className="w-16 h-16 object-contain bg-blend-screen"
                            />
                        </div> */}
                        <span className="text-[var(--brand-green)] font-bold  tracking-widest uppercase text-lg ">Nex</span>
                        <span className="text-[var(--brand-yellow)] font-bold tracking-widest uppercase text-lg">Bee</span>

                        {/* will remove this text after adding logo insha'Allah */}
                    </Link>
                </div>

                {/* Floating Text Navigation (Desktop) */}
                <nav className="hidden md:flex items-center gap-8 pointer-events-auto bg-[var(--background)]/50 backdrop-blur-md px-8 py-3 rounded-full border border-[var(--foreground)]/5 shadow-sm">
                    <a href="/#home" onClick={(e) => scrollToSection(e, 'home')} className="text-sm font-medium text-[var(--foreground)]/70 hover:text-[var(--foreground)] transition-colors">Home</a>
                    <a href="/#about" onClick={(e) => scrollToSection(e, 'about')} className="text-sm font-medium text-[var(--foreground)]/70 hover:text-[var(--foreground)] transition-colors">About</a>
                    <a href="/#rentals" onClick={(e) => scrollToSection(e, 'rentals')} className="text-sm font-medium text-[var(--foreground)]/70 hover:text-[var(--foreground)] transition-colors">Rentals</a>
                    <a href="/#resell" onClick={(e) => scrollToSection(e, 'resell')} className="text-sm font-medium text-[var(--foreground)]/70 hover:text-[var(--foreground)] transition-colors">Resell</a>
                    <a href="/#requests" onClick={(e) => scrollToSection(e, 'requests')} className="text-sm font-medium text-[var(--foreground)]/70 hover:text-[var(--foreground)] transition-colors">Concierge</a>
                    <a href="/#faq" onClick={(e) => scrollToSection(e, 'faq')} className="text-sm font-medium text-[var(--foreground)]/70 hover:text-[var(--foreground)] transition-colors">FAQs</a>
                    <a href="/#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-sm font-medium text-[var(--foreground)]/70 hover:text-[var(--foreground)] transition-colors">Contact</a>
                </nav>

                {/* Actions - Top Right */}
                <div className="flex items-center gap-4 pointer-events-auto">
                    <button
                        onClick={() => setShowWaitlistModal(true)}
                        className="hidden md:block px-6 py-3 text-sm bg-[var(--foreground)] text-[var(--background)] rounded-full font-medium hover:bg-[var(--foreground)]/90 hover:scale-105 transition-all shadow-lg"
                    >
                        Join Waitlist
                    </button>

                    {/* Mobile Menu Button - Visible only on small screens */}
                    <button
                        className="md:hidden bg-[var(--background)]/80 backdrop-blur-md p-3 rounded-full text-[var(--foreground)] shadow-sm hover:shadow-md transition-all hover:scale-105 border border-[var(--foreground)]/10"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            {isMenuOpen ? (
                                <path d="M18 6 6 18M6 6l12 12" />
                            ) : (
                                <path d="M4 12h16M4 6h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </header>

            {/* Full Screen / Drawer Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Drawer */}
            <div
                className={`fixed top-0 right-0 z-50 h-screen w-[85%] max-w-sm bg-[var(--background)] shadow-2xl transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="p-8 flex flex-col h-full relative">
                    {/* Close Button inside Drawer */}
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="absolute top-8 right-8 p-2 text-[var(--foreground)]/50 hover:text-[var(--foreground)] transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
                    </button>

                    <div className="mt-20 flex flex-col gap-8">
                        <div className="space-y-6">
                            <h3 className="text-xs uppercase tracking-widest text-[var(--foreground)]/40 font-bold">Menu</h3>
                            <nav className="flex flex-col gap-4 text-2xl font-bold text-[var(--foreground)]">
                                <a href="/#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-[var(--brand-green)] transition-colors">Home</a>
                                <a href="/#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-[var(--brand-green)] transition-colors">About</a>
                                <a href="/#rentals" onClick={(e) => scrollToSection(e, 'rentals')} className="hover:text-[var(--brand-green)] transition-colors">Rentals</a>
                                <a href="/#resell" onClick={(e) => scrollToSection(e, 'resell')} className="hover:text-[var(--brand-green)] transition-colors">Resell</a>
                                <a href="/#requests" onClick={(e) => scrollToSection(e, 'requests')} className="hover:text-[var(--brand-green)] transition-colors">Concierge</a>
                                <a href="/#faq" onClick={(e) => scrollToSection(e, 'faq')} className="hover:text-[var(--brand-green)] transition-colors">FAQs</a>
                                <a href="/#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-[var(--brand-green)] transition-colors">Contact</a>
                            </nav>
                        </div>
                    </div>

                    <div className="mt-auto mb-8">
                        <button
                            onClick={() => {
                                setShowWaitlistModal(true);
                                setIsMenuOpen(false);
                            }}
                            className="w-full py-4 text-center bg-[var(--foreground)] text-[var(--background)] rounded-2xl font-medium hover:bg-[var(--foreground)]/90 transition-all shadow-md text-lg"
                        >
                            Join Waitlist
                        </button>
                    </div>
                </div>
            </div>

            {/* Back to Top */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`fixed bottom-6 right-6 z-40 p-4 bg-[var(--foreground)] text-[var(--background)] rounded-full shadow-lg hover:scale-110 transition-all duration-300 ${!isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
                    }`}
                aria-label="Back to top"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
            </button>

            <WaitlistModal isOpen={showWaitlistModal} onClose={() => setShowWaitlistModal(false)} />
        </>
    );
}
