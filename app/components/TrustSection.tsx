"use client";

export default function TrustSection() {
    const values = [
        {
            title: "Community",
            desc: "Connect with neighbors you can trust.",
            icon: (
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 opacity-80">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            )
        },
        {
            title: "Sustainablity",
            desc: "Live lighter. Share what you have.",
            icon: (
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 opacity-80">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "Trust",
            desc: "Verified profiles. Safe interactions.",
            icon: (
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 opacity-80">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        }
    ];

    return (
        <section className="py-32 px-6 bg-[var(--background)] border-t border-[var(--foreground)]/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-12 md:gap-24">
                    {values.map((item, idx) => (
                        <div key={idx} className="flex flex-col items-start space-y-4 group">
                            <div className="p-3 rounded-full bg-[var(--foreground)]/5 text-[var(--foreground)] group-hover:bg-[var(--brand-green)] group-hover:text-white transition-colors duration-500">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[var(--foreground)] tracking-tight">{item.title}</h3>
                            <p className="text-[var(--foreground)]/60 leading-relaxed text-sm lg:text-base max-w-xs">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
