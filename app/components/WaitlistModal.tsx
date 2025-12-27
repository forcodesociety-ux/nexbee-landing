
"use client";

import { useState, useEffect } from 'react';

interface WaitlistModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [toastMessage, setToastMessage] = useState('');
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        if (!isOpen) {
            // Reset state when closed
            setSubscribeStatus('idle');
            setShowToast(false);
            setName('');
            setEmail('');
        }
    }, [isOpen]);

    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => setShowToast(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [showToast]);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubscribeStatus('loading');

        try {
            const response = await fetch('/api/waitlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email }),
            });

            const data = await response.json();

            if (response.ok) {
                setSubscribeStatus('success');
                setToastMessage('You have been added to the waitlist!');
                setShowToast(true);
                setTimeout(() => {
                    onClose();
                }, 2000);
            } else {
                setSubscribeStatus('error');
                setToastMessage(data.error || 'Something went wrong.');
                setShowToast(true);
                setTimeout(() => setSubscribeStatus('idle'), 2000);
            }
        } catch (error) {
            setSubscribeStatus('error');
            setToastMessage('Failed to submit. Please try again.');
            setShowToast(true);
            setTimeout(() => setSubscribeStatus('idle'), 2000);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            {/* Custom Toast Notification inside Modal Portal */}
            <div
                className={`absolute top-10 left-1/2 -translate-x-1/2 z-[60] px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 transition-all duration-500 transform ${showToast ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}
                style={{ backgroundColor: subscribeStatus === 'error' ? '#ef4444' : 'var(--brand-green)', color: 'white' }}
            >
                {subscribeStatus === 'success' ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                )}
                <span className="font-medium text-sm">{toastMessage}</span>
            </div>

            <div className="bg-[var(--background)] border border-[var(--foreground)]/10 w-full max-w-md p-8 rounded-3xl shadow-2xl transform transition-all scale-100 relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-[var(--foreground)] opacity-50 hover:opacity-100 transition-opacity"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>

                <h2 className="text-3xl font-bold mb-2 text-[var(--foreground)]">Join the Waitlist</h2>
                <p className="text-[var(--foreground)]/70 mb-6">Be the first to know when Nexbee launches.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[var(--foreground)]/70 mb-1">Name</label>
                        <input
                            type="text"
                            id="name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 focus:border-[var(--brand-green)] focus:ring-1 focus:ring-[var(--brand-green)] outline-none transition-all placeholder:text-[var(--foreground)]/30"
                            placeholder="Your name"
                            disabled={subscribeStatus === 'loading' || subscribeStatus === 'success'}
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[var(--foreground)]/70 mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 focus:border-[var(--brand-green)] focus:ring-1 focus:ring-[var(--brand-green)] outline-none transition-all placeholder:text-[var(--foreground)]/30"
                            placeholder="you@example.com"
                            disabled={subscribeStatus === 'loading' || subscribeStatus === 'success'}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={subscribeStatus === 'loading' || subscribeStatus === 'success'}
                        className={`w-full py-4 mt-2 rounded-xl font-medium transition-all flex items-center justify-center gap-2 ${subscribeStatus === 'success'
                                ? 'bg-[var(--brand-green)] text-white'
                                : 'bg-[var(--foreground)] text-[var(--background)] hover:opacity-90'
                            } disabled:opacity-80`}
                    >
                        {subscribeStatus === 'loading' ? (
                            <span className="animate-spin h-5 w-5 border-2 border-[var(--background)] border-t-transparent rounded-full" />
                        ) : subscribeStatus === 'success' ? (
                            <>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                <span>Joined!</span>
                            </>
                        ) : (
                            'Join Waitlist'
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}
