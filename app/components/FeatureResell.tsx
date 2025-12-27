export default function FeatureResell() {
    return (
        <section className="py-24 px-6 bg-[var(--foreground)] text-[var(--background)] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--brand-yellow)] opacity-5 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2" />

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                {/* Visual Illustration */}
                <div className="relative group flex justify-center">
                    <div className="absolute inset-0 bg-[var(--brand-yellow)]/10 blur-[60px] rounded-full scale-75" />
                    <div className="relative z-10 hover:scale-105 transition-transform duration-500">
                        <img
                            src="/resell.png"
                            alt="Box of pre-loved items"
                            className="w-full max-w-sm h-auto grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                </div>

                <div className="space-y-6">
                    <span className="text-[var(--brand-yellow)] font-medium tracking-widest uppercase text-sm">Marketplace</span>
                    <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
                        New life for <br />
                        <span className="text-white opacity-50">old favorites.</span>
                    </h2>
                    <p className="text-lg text-[var(--background)]/80 leading-relaxed font-light">
                        Ready to let go? Sell your pre-loved items directly on Nexbee. It's safe, local, and gives your belongings a second chapter.
                    </p>
                </div>
            </div>
        </section>
    );
}
