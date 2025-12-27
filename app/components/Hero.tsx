"use client";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center px-6 pt-20 pb-10 overflow-hidden bg-[var(--background)]">
            {/* Abstract Background Shapes */}
            <div className="absolute top-[-20%] left-[-10%] w-[50vh] h-[50vh] rounded-full bg-[var(--brand-green)] opacity-10 blur-[100px]" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[60vh] h-[60vh] rounded-full bg-[var(--brand-yellow)] opacity-10 blur-[120px]" />

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full z-10">
                {/* Left Column: Content */}
                <div className="space-y-8 text-left">
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-[var(--foreground)]">
                        Owning less.<br />
                        <span className="text-[var(--brand-green)] italic">Living more.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-[var(--foreground)] opacity-70 font-light max-w-lg leading-relaxed">
                        Nexbee is the community marketplace for the things you need, when you need them. Rent, buy, or request simply.
                    </p>

                    <div className="pt-4 flex gap-4">
                        <button className="px-8 py-4 bg-[var(--foreground)] text-[var(--background)] rounded-full font-medium hover:scale-105 transition-transform">
                            Join the Waitlist
                        </button>
                        <button className="px-8 py-4 border border-[var(--foreground)] rounded-full font-medium hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Right Column: App Preview */}
                <div className="flex justify-center md:justify-end">
                    <div className="w-full max-w-sm aspect-[9/16] bg-gray-100 rounded-[3rem] border-8 border-gray-200 shadow-2xl overflow-hidden relative rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
                        {/* Animation Styles */}
                        <style jsx>{`
                     @keyframes scroll-up {
                         0%, 10% { transform: translateY(0); }
                         40%, 60% { transform: translateY(-20%); }
                         90%, 100% { transform: translateY(0); }
                     }
                     @keyframes click-pulse {
                         0%, 90% { transform: scale(1); opacity: 1; }
                         95% { transform: scale(0.95); opacity: 0.8; }
                         100% { transform: scale(1); opacity: 1; }
                     }
                 `}</style>

                        <div className="absolute inset-0 bg-white flex flex-col p-4 space-y-4">
                            {/* Mock Header */}
                            <div className="flex justify-between items-center z-10 bg-white pb-2">
                                <div className="w-8 h-8 rounded-full bg-[var(--brand-green)]/20" />
                                <div className="w-24 h-4 rounded-full bg-gray-100" />
                            </div>

                            {/* Scrollable Content Container */}
                            <div className="space-y-4" style={{ animation: 'scroll-up 8s ease-in-out infinite' }}>
                                {/* Mock Search Bar */}
                                <div className="w-full h-10 rounded-xl bg-gray-50 border border-gray-100" />

                                {/* Mock Categories */}
                                <div className="flex gap-2 overflow-hidden">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className={`w-16 h-8 rounded-lg shrink-0 ${i === 1 ? 'bg-[var(--brand-yellow)]/20' : 'bg-gray-100'}`} />
                                    ))}
                                </div>

                                {/* Mock Cards */}
                                <div className="grid grid-cols-2 gap-3">
                                    {[1, 2, 3, 4, 5, 6].map((i) => (
                                        <div key={i} className="aspect-square rounded-2xl bg-gray-50 p-2 space-y-2" style={{ animation: i === 2 ? 'click-pulse 4s ease-in-out infinite' : 'none', animationDelay: '2s' }}>
                                            <div className="w-full h-[60%] rounded-xl bg-[var(--foreground)]/5" />
                                            <div className="w-full h-2 rounded-full bg-gray-200" />
                                            <div className="w-1/2 h-2 rounded-full bg-gray-100" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Floating Action Button */}
                            <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-[var(--brand-green)] shadow-lg shadow-[var(--brand-green)]/30 z-10" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
