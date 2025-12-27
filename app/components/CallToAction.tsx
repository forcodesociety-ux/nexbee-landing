"use client";

import { useState } from 'react';
import WaitlistModal from './WaitlistModal';

export default function CallToAction() {
    const [showWaitlistModal, setShowWaitlistModal] = useState(false);

    return (
        <section className="py-32 px-6 bg-[var(--background)] flex items-center justify-center text-center">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-[var(--foreground)] mb-8">
                    Join the <span className="text-[var(--brand-green)]">Movement.</span>
                </h2>
                <p className="text-xl md:text-2xl text-[var(--foreground)]/60 mb-12 max-w-xl mx-auto">
                    Be the first to know when we launch in your neighborhood.
                </p>

                <div className="flex justify-center">
                    <button
                        onClick={() => setShowWaitlistModal(true)}
                        className="px-10 py-5 bg-[var(--foreground)] text-[var(--background)] rounded-full text-lg font-bold hover:bg-[var(--brand-green)] hover:scale-105 transition-all shadow-xl"
                    >
                        Join Waitlist
                    </button>
                </div>
            </div>
            <WaitlistModal isOpen={showWaitlistModal} onClose={() => setShowWaitlistModal(false)} />
        </section>
    );
}
