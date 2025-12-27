"use client";

import { useEffect, useRef, useState } from 'react';

export default function AboutStory() {
    return (
        <section className="py-24 md:py-32 px-6 bg-[var(--background)] relative">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-24">

                {/* Sticky Left Column: The Anchor */}
                <div className="hidden md:block">
                    <div className="sticky top-32">
                        <h2 className="text-6xl lg:text-8xl font-bold tracking-tighter text-[var(--foreground)] leading-[0.9] mb-8">
                            For us,<br />
                            <span className="text-[var(--brand-green)]">by us.</span>
                        </h2>
                        <div className="w-24 h-2 bg-[var(--brand-yellow)] rounded-full mb-8"></div>
                        <p className="text-xl text-[var(--foreground)]/60 max-w-sm">
                            Building Kashmir's first localized sharing economy.
                        </p>

                        {/* Abstract Decor */}
                        <div className="absolute -z-10 top-[-20%] left-[-20%] w-[500px] h-[500px] bg-[var(--brand-green)]/5 rounded-full blur-[100px]"></div>
                    </div>
                </div>

                {/* Right Column: The Narrative Content */}
                <div className="space-y-24 md:py-24">

                    {/* Mobile Title (Visible only on small screens) */}
                    <div className="md:hidden mb-12">
                        <h2 className="text-5xl font-bold tracking-tighter text-[var(--foreground)] leading-[0.9]">
                            For us, <span className="text-[var(--brand-green)]">by us.</span>
                        </h2>
                    </div>

                    {/* Card 1 */}
                    <div className="group relative p-8 md:p-12 rounded-[2.5rem] bg-[var(--foreground)]/5 border border-[var(--foreground)]/5 backdrop-blur-sm transition-all duration-500 hover:bg-[var(--foreground)]/10 hover:shadow-2xl hover:-translate-y-2">
                        <div className="text-4xl text-[var(--brand-green)] mb-6 opacity-20 font-mono">01</div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--foreground)]">Finally bringing something we've all needed to the valley.</h3>
                        <p className="text-lg md:text-xl text-[var(--foreground)]/70 leading-relaxed">
                            We're launching Kashmir's first-ever rental and resale marketplace. It's time we had a platform built specifically for our needs.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="group relative p-8 md:p-12 rounded-[2.5rem] bg-[var(--foreground)]/5 border border-[var(--foreground)]/5 backdrop-blur-sm transition-all duration-500 hover:bg-[var(--foreground)]/10 hover:shadow-2xl hover:-translate-y-2">
                        <div className="text-4xl text-[var(--brand-yellow)] mb-6 opacity-50 font-mono">02</div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--foreground)]">Think about all the stuff sitting in your attic.</h3>
                        <p className="text-lg md:text-xl text-[var(--foreground)]/70 leading-relaxed">
                            Or that one thing you only need for a weekend but don't want to buy full price. We wanted to make it easy to share, sell, and find what you need right here at home.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="group relative p-8 md:p-12 rounded-[2.5rem] bg-[var(--brand-green)]/10 border border-[var(--brand-green)]/20 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                        <div className="text-4xl text-[var(--brand-green)] mb-6 font-mono">03</div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--foreground)]">A smarter way to shop.</h3>
                        <p className="text-lg md:text-xl text-[var(--foreground)]/70 leading-relaxed">
                            It’s about keeping things local. Whether you're looking to declutter or find a hidden gem, we’ve got you covered.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
