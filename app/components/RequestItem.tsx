"use client";

import { useEffect, useRef, useState } from 'react';

export default function RequestItem() {

    const [inView, setInView] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => observer.disconnect();
    }, []);

    const steps = [
        { title: "Ask", desc: "Request any item.", pos: "top-48 left-20" },
        { title: "Review", desc: "Admin approves it.", pos: "top-96 right-32" },
        { title: "Offer", desc: "Get details & price.", pos: "top-[36rem] left-40" },
        { title: "Yours", desc: "Accept & enjoy.", pos: "top-[48rem] right-52" }
    ];

    return (
        <section ref={sectionRef} className="py-24 md:py-32 px-6 bg-[var(--background)] min-h-[auto] md:min-h-[1200px] overflow-hidden relative">
            <div className="max-w-5xl mx-auto relative h-auto md:h-[1000px]">

                {/* Header */}
                <div className="text-center mb-16 md:mb-10 relative z-10">
                    <h2 className="relative text-4xl md:text-6xl font-bold tracking-tight text-[var(--foreground)] z-10">
                        Can't find it? <span className="text-[var(--brand-green)]">We'll get it.</span>
                    </h2>
                    <p className="mt-4 text-xl text-[var(--foreground)]/60">Our Concierge service tracks down what you need.</p>
                </div>

                {/* Mobile View: Vertical Stack */}
                <div className="flex flex-col gap-6 md:hidden">
                    {steps.map((step, idx) => (
                        <div key={idx} className="p-6 bg-white rounded-2xl shadow-sm border border-[var(--foreground)]/5 flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-[var(--foreground)] mb-1">{step.title}</h3>
                                <p className="text-[var(--foreground)]/60 text-sm">{step.desc}</p>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-[var(--brand-yellow)] flex items-center justify-center font-bold text-xs">{idx + 1}</div>
                        </div>
                    ))}
                </div>

                {/* Desktop View: The Animated Path */}
                <div className="hidden md:block absolute inset-0">
                    {/* The Path (Road) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                        {/* Road Base */}
                        <path
                            d="M200,240 C500,240 500,440 800,440 C1000,440 500,630 200,630 C50,630 500,820 800,820"
                            fill="none"
                            stroke="var(--foreground)"
                            strokeOpacity="0.05"
                            strokeWidth="30"
                            strokeLinecap="round"
                        />
                        {/* Road Dashed Line */}
                        <path
                            d="M200,240 C500,240 500,440 800,440 C1000,440 500,630 200,630 C50,630 500,820 800,820"
                            fill="none"
                            stroke="var(--brand-green)"
                            strokeWidth="4"
                            strokeDasharray="15, 15"
                            strokeDashoffset={inView ? 0 : 2000}
                            strokeLinecap="round"
                            className="transition-all duration-[3000ms] ease-out"
                        />
                    </svg>

                    {/* Organic Nodes */}
                    {steps.map((step, idx) => (
                        <div
                            key={idx}
                            className={`absolute ${step.pos} w-64 p-6 bg-white rounded-[2rem] shadow-xl border-2 border-[var(--foreground)]/5 z-10 transition-all duration-700 transform ${inView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-90'}`}
                            style={{ transitionDelay: `${idx * 300}ms` }}
                        >
                            <div className="absolute -top-6 left-8 px-4 py-1 bg-[var(--brand-yellow)] text-[var(--foreground)] text-xs font-bold rounded-full uppercase tracking-wider shadow-sm">
                                Step {idx + 1}
                            </div>
                            <div className="w-12 h-12 bg-[var(--brand-green)]/10 text-[var(--brand-green)] rounded-full flex items-center justify-center mb-4">
                                {idx === 0 && (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                                )}
                                {idx === 1 && (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" /></svg>
                                )}
                                {idx === 2 && (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" /><path d="M7 7h.01" /></svg>
                                )}
                                {idx === 3 && (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /><path d="M5 3v4" /><path d="M9 17v4" /><path d="M3 5h4" /><path d="M17 17h4" /><path d="M13 3h4" /><path d="m13 3 4 4" /></svg>
                                )}
                            </div>
                            <h3 className="text-2xl font-bold text-[var(--foreground)] mb-2">{step.title}</h3>
                            <p className="text-[var(--foreground)]/60 text-sm leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
