"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Footer() {
    const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [toastMessage, setToastMessage] = useState('');
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => setShowToast(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [showToast]);

    useEffect(() => {
        if (subscribeStatus === 'success' || subscribeStatus === 'error') {
            const timer = setTimeout(() => setSubscribeStatus('idle'), 3000);
            return () => clearTimeout(timer);
        }
    }, [subscribeStatus]);

    const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const emailInput = form.elements.namedItem('email') as HTMLInputElement;
        const email = emailInput.value;

        if (!email) return;

        setSubscribeStatus('loading');

        try {
            const res = await fetch('/api/newsletter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });
            const data = await res.json();

            if (!res.ok) throw new Error(data.error);

            setSubscribeStatus('success');
            setToastMessage('Subscribed successfully!');
            setShowToast(true);
            form.reset();
        } catch (err: any) {
            setSubscribeStatus('error');
            setToastMessage(err.message || 'Something went wrong');
            setShowToast(true);
        }
    };

    return (
        <footer className="bg-[var(--foreground)] text-[var(--background)] pt-20 pb-10 relative overflow-hidden">
            {/* Artistic Top Curve via SVG or Border Radius */}
            <div className="absolute top-0 left-0 right-0 h-10 bg-[var(--background)] rounded-b-[50%] transform scale-x-150" />

            {/* Custom Toast Notification */}
            <div
                className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 transition-all duration-500 transform ${showToast ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                style={{ backgroundColor: subscribeStatus === 'error' ? '#ef4444' : 'var(--brand-green)', color: 'white' }}
            >
                {subscribeStatus === 'success' ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                )}
                <span className="font-medium text-sm">{toastMessage}</span>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 pt-10">
                <div className="space-y-6">
                    <div className="text-2xl font-bold tracking-tight">
                        <span className="text-[var(--brand-green)]">Nex</span>
                        <span className="text-[var(--brand-yellow)]">bee</span>
                    </div>
                    <p className="text-[var(--background)]/60 text-sm leading-relaxed max-w-xs">
                        The community marketplace for renting, buying, and sharing. Join the movement to own less and live more.
                    </p>
                    <div className="flex gap-4">
                        {/* Social Placeholders */}
                        <Link href="https://www.instagram.com/nexbeee" className="w-10 h-10 rounded-full bg-[var(--background)]/10 hover:bg-[var(--brand-yellow)] hover:text-[var(--foreground)] transition-colors flex items-center justify-center">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                        </Link>
                        <Link href="https://www.twitter.com/nexbee" className="w-10 h-10 rounded-full bg-[var(--background)]/10 hover:bg-[var(--brand-yellow)] hover:text-[var(--foreground)] transition-colors flex items-center justify-center">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                        </Link>
                        <Link href="https://www.facebook.com/nexbee" className="w-10 h-10 rounded-full bg-[var(--background)]/10 hover:bg-[var(--brand-yellow)] hover:text-[var(--foreground)] transition-colors flex items-center justify-center">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                        </Link>
                    </div>

                    <div className="flex flex-row flex-wrap gap-2 mt-8">
                        <div className="flex items-center gap-2 bg-[var(--background)] text-[var(--foreground)] px-3 py-2 rounded-xl shadow-lg hover:scale-105 transition-transform cursor-default w-fit opacity-90 hover:opacity-100 whitespace-nowrap">
                            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.653 17.599c-.71 1.055-1.46 2.109-2.569 2.155-1.07.039-1.416-.64-2.65-.64-1.258 0-1.64.624-2.673.666-1.077.035-1.896-1.096-2.597-2.148-1.428-2.103-2.522-5.952-1.056-8.558 0 .003.73-1.628 2.378-1.652 1.05-.021 1.834.626 2.408.626.574 0 1.637-.775 2.721-.663 3.01.127 4.197 1.944 4.312 2.05-.034.02-2.536 1.343-2.508 4.094.026 3.256 2.857 4.364 2.872 4.372-.023.076-.445 1.554-1.528 3.149M14.73 4.212c.577-.72 1.037-1.706.917-2.693-.9.037-1.996.613-2.652 1.403-.58.69-1.094 1.698-.956 2.651.97.076 1.978-.567 2.692-1.361" />
                            </svg>
                            <div className="flex flex-col">
                                <span className="text-[9px] font-medium leading-none opacity-80">Coming soon to</span>
                                <span className="text-xs font-bold leading-none">App Store</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 bg-[var(--background)] text-[var(--foreground)] px-3 py-2 rounded-xl shadow-lg hover:scale-105 transition-transform cursor-default w-fit opacity-90 hover:opacity-100 whitespace-nowrap">
                            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3.609 1.814L13.792 12 3.61 22.186a2.657 2.657 0 0 1-1.267-2.132V3.945A2.652 2.652 0 0 1 3.609 1.814zm11.38 11.38l6.305-6.305c.423-.423.518-.94.168-1.332L5.808.903l9.181 9.291zm1.196 -1.196l-3.565 3.565L5.808 23.097l10.377-11.099zm4.61 4.61c.456-.456.456-1.197 0-1.653l-2.028-2.029-2.902 2.902 4.93 4.93z" />
                                <path d="M3.609 1.814L13.792 12 3.61 22.186a2.657 2.657 0 0 1-1.267-2.132V3.945A2.652 2.652 0 0 1 3.609 1.814zm11.38 11.38l6.305-6.305c.423-.423.518-.94.168-1.332L5.808.903l9.181 9.291zm1.196 -1.196l-3.565 3.565L5.808 23.097l10.377-11.099zm4.61 4.61c.456-.456.456-1.197 0-1.653l-2.028-2.029-2.902 2.902 4.93 4.93z" fillOpacity="0" />
                            </svg>
                            <div className="flex flex-col">
                                <span className="text-[9px] font-medium leading-none opacity-80">Coming soon to</span>
                                <span className="text-xs font-bold leading-none">Google Play</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-6"> Services</h4>
                    <ul className="space-y-4 text-[var(--background)]/60 text-sm">
                        <li><Link href="#rentals" className="hover:text-[var(--brand-yellow)] transition-colors">Rent Items</Link></li>
                        <li><Link href="#resell" className="hover:text-[var(--brand-yellow)] transition-colors">Buy & Sell</Link></li>
                        <li><Link href="#requests" className="hover:text-[var(--brand-yellow)] transition-colors">Request Concierge</Link></li>
                        <li><Link href="#contact" className="hover:text-[var(--brand-yellow)] transition-colors">Success Stories</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-6">Company</h4>
                    <ul className="space-y-4 text-[var(--background)]/60 text-sm">
                        <li><Link href="#about" className="hover:text-[var(--brand-yellow)] transition-colors">About Us</Link></li>
                        <li><Link href="/privacy-policy" className="hover:text-[var(--brand-yellow)] transition-colors">Privacy Policy</Link></li>
                        <li><Link href="/terms-conditions" className="hover:text-[var(--brand-yellow)] transition-colors">Terms & Conditions</Link></li>
                        <li><Link href="#contact" className="hover:text-[var(--brand-yellow)] transition-colors">Contact</Link></li>
                    </ul>
                </div>

                <div className="space-y-6">
                    <h4 className="font-bold text-lg">Stay Updated</h4>
                    <p className="text-[var(--background)]/60 text-sm">Get the latest listings and community news.</p>
                    <div className="flex flex-col gap-2">
                        <form onSubmit={handleSubscribe} className="flex gap-2">
                            <input
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                className="bg-[var(--background)]/5 border border-[var(--background)]/10 rounded-full px-4 py-2 text-sm w-full focus:outline-none focus:border-[var(--brand-green)]"
                                required
                                disabled={subscribeStatus === 'loading' || subscribeStatus === 'success'}
                            />
                            <button
                                type="submit"
                                disabled={subscribeStatus === 'loading' || subscribeStatus === 'success'}
                                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${subscribeStatus === 'success'
                                    ? 'bg-[var(--brand-green)] scale-110'
                                    : 'bg-[var(--brand-green)] hover:bg-[var(--brand-green)]/80'
                                    } disabled:opacity-80 disabled:cursor-not-allowed`}
                            >
                                {subscribeStatus === 'loading' ? (
                                    <svg className="w-4 h-4 text-white animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                ) : subscribeStatus === 'success' ? (
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                ) : (
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-[var(--background)]/10 text-center text-xs text-[var(--background)]/40">
                <p>&copy; {new Date().getFullYear()} Nexbee Inc. All rights reserved.</p>
            </div>
        </footer>
    );
}
