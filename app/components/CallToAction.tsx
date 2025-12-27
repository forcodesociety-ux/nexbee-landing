"use client";

export default function CallToAction() {
    return (
        <section className="py-32 px-6 bg-[var(--background)] flex items-center justify-center text-center">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-[var(--foreground)] mb-8">
                    Join the <span className="text-[var(--brand-green)]">Movement.</span>
                </h2>
                <p className="text-xl md:text-2xl text-[var(--foreground)]/60 mb-12 max-w-xl mx-auto">
                    Be the first to know when we launch in your neighborhood.
                </p>

                <form className="max-w-md mx-auto flex gap-2">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-6 py-4 rounded-full bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 focus:outline-none focus:border-[var(--brand-green)] transition-colors"
                    />
                    <button className="px-8 py-4 bg-[var(--foreground)] text-[var(--background)] rounded-full font-bold hover:bg-[var(--brand-green)] transition-colors">
                        Join
                    </button>
                </form>
            </div>
        </section>
    );
}
