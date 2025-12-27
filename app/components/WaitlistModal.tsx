
"use client";

import { useState } from 'react';

interface WaitlistModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage('');

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
                setMessage('You have been added to the waitlist!');
                setTimeout(() => {
                    onClose();
                    setName('');
                    setEmail('');
                    setMessage('');
                }, 2000);
            } else {
                setMessage(data.error || 'Something went wrong.');
            }
        } catch (error) {
            setMessage('Failed to submit. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
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
                        />
                    </div>

                    {message && (
                        <p className={`text-sm ${message.includes('added') ? 'text-[var(--brand-green)]' : 'text-red-500'}`}>
                            {message}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-4 mt-2 bg-[var(--foreground)] text-[var(--background)] rounded-xl font-medium hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                        {isLoading ? (
                            <span className="animate-spin h-5 w-5 border-2 border-[var(--background)] border-t-transparent rounded-full" />
                        ) : null}
                        {isLoading ? 'Joining...' : 'Join Waitlist'}
                    </button>
                </form>
            </div>
        </div>
    );
}
