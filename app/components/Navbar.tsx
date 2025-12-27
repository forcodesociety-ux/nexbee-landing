"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import WaitlistModal from './WaitlistModal';

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showWaitlistModal, setShowWaitlistModal] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 10) {
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
            // Allow default navigation to /#id
            setIsMobileMenuOpen(false);
            return;
        }

        e.preventDefault();
        setIsMobileMenuOpen(false); // Close mobile menu if open
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <nav
                className={`fixed left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl px-6 py-3 bg-[var(--background)] backdrop-blur-xl border border-[var(--foreground)]/10 rounded-full shadow-lg shadow-black/5 flex items-center justify-between transition-all duration-300 ${isVisible ? 'top-6' : '-top-24'
                    }`}
            >
                <div className="flex items-center gap-0">
                    <Link href="/">
                        <div className="flex items-center gap-0 cursor-pointer">
                            <Image
                                src="/logo.png"
                                alt="Nexbee Logo"
                                width={60}
                                height={60}
                                className="w-16 h-16 object-cover"
                            />
                        </div>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6 text-sm font-medium text-[var(--foreground)]/70">
                    <a href="/#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-[var(--foreground)] transition-colors">Home</a>
                    <a href="/#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-[var(--foreground)] transition-colors">About</a>
                    <a href="/#rentals" onClick={(e) => scrollToSection(e, 'rentals')} className="hover:text-[var(--foreground)] transition-colors">Rentals</a>
                    <a href="/#resell" onClick={(e) => scrollToSection(e, 'resell')} className="hover:text-[var(--foreground)] transition-colors">Resell</a>
                    <a href="/#requests" onClick={(e) => scrollToSection(e, 'requests')} className="hover:text-[var(--foreground)] transition-colors">Requests</a>
                    <a href="/#faq" onClick={(e) => scrollToSection(e, 'faq')} className="hover:text-[var(--foreground)] transition-colors">FAQs</a>
                    <a href="/#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-[var(--foreground)] transition-colors">Contact</a>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setShowWaitlistModal(true)}
                        className="hidden md:block px-5 py-2.5 text-sm bg-[var(--foreground)] text-[var(--background)] rounded-full font-medium hover:bg-[var(--foreground)]/90 hover:scale-105 transition-all shadow-md"
                    >
                        Join Waitlist
                    </button>

                    {/* Hamburger Button */}
                    <button
                        className="md:hidden text-[var(--foreground)] p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            {isMobileMenuOpen ? (
                                <path d="M18 6 6 18M6 6l12 12" />
                            ) : (
                                <path d="M4 12h16M4 6h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Drawer */}
            <div
                className={`fixed top-0 right-0 z-50 h-screen w-[70%] max-w-sm bg-[var(--background)] shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="p-6 flex flex-col h-full">
                    <div className="flex justify-end mb-8">
                        <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-[var(--foreground)]/50 hover:text-[var(--foreground)]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
                        </button>
                    </div>

                    <div className="flex flex-col gap-6 text-lg font-medium text-[var(--foreground)]">
                        <a href="/#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-[var(--brand-green)] transition-colors">Home</a>
                        <a href="/#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-[var(--brand-green)] transition-colors">About</a>
                        <a href="/#rentals" onClick={(e) => scrollToSection(e, 'rentals')} className="hover:text-[var(--brand-green)] transition-colors">Rentals</a>
                        <a href="/#resell" onClick={(e) => scrollToSection(e, 'resell')} className="hover:text-[var(--brand-green)] transition-colors">Resell</a>
                        <a href="/#requests" onClick={(e) => scrollToSection(e, 'requests')} className="hover:text-[var(--brand-green)] transition-colors">Requests</a>
                        <a href="/#faq" onClick={(e) => scrollToSection(e, 'faq')} className="hover:text-[var(--brand-green)] transition-colors">FAQs</a>
                        <a href="/#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-[var(--brand-green)] transition-colors">Contact</a>
                    </div>

                    <div className="mt-auto mb-8">
                        <button
                            onClick={() => {
                                setShowWaitlistModal(true);
                                setIsMobileMenuOpen(false);
                            }}
                            className="w-full py-4 text-center bg-[var(--foreground)] text-[var(--background)] rounded-2xl font-medium hover:bg-[var(--foreground)]/90 transition-all shadow-md"
                        >
                            Join Waitlist
                        </button>
                    </div>
                </div>
            </div>

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
