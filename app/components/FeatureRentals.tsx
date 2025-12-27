export default function FeatureRentals() {
    return (
        <section className="py-24 px-6 bg-[var(--background)]">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <div className="order-2 md:order-1 space-y-6">
                    <span className="text-[var(--brand-green)] font-medium tracking-widest uppercase text-sm">Main Feature</span>
                    <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-[var(--foreground)]">
                        Rentals made <br />
                        <span className="text-[var(--brand-yellow)]">effortless.</span>
                    </h2>
                    <p className="text-lg text-[var(--foreground)]/80 leading-relaxed font-light">
                        Why buy a tent you'll use once a year? With Nexbee, borrow what you need from verified locals. Save money, save space, and reduce waste.
                    </p>
                    <ul className="space-y-4 pt-4">
                        {["Camping Gear", "Tools & Electronics", "Party Supplies"].map((item) => (
                            <li key={item} className="flex items-center gap-3 text-[var(--foreground)]">
                                <span className="w-2 h-2 rounded-full bg-[var(--brand-green)]" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Visual Illustration */}
                <div className="order-1 md:order-2 relative group flex justify-center">
                    <div className="absolute inset-0 bg-[var(--brand-green)]/10 blur-[80px] rounded-full scale-75" />
                    <div className="relative z-10 hover:scale-105 transition-transform duration-500">
                        <img
                            src="/rentals.png"
                            alt="Floating camping gear and tools"
                            className="w-full max-w-sm h-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
