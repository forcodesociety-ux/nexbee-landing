import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[var(--foreground)] text-[var(--background)] pt-20 pb-10 relative overflow-hidden">
            {/* Artistic Top Curve via SVG or Border Radius */}
            <div className="absolute top-0 left-0 right-0 h-10 bg-[var(--background)] rounded-b-[50%] transform scale-x-150" />

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 pt-10">
                <div className="space-y-6">
                    <div className="text-2xl font-bold tracking-tight">
                        <span className="text-[var(--brand-green)]">Nex</span>
                        <span className="text-[var(--brand-yellow)]">bee</span>
                    </div>
                    <p className="text-[var(--background)]/60 text-sm leading-relaxed max-w-xs">
                        The community marketplace for renting, buying, and sharing. Join the movement to own less and live more.
                    </p>
                    <div className="flex gap-4">
                        {/* Social Placeholders */}
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="w-10 h-10 rounded-full bg-[var(--background)]/10 hover:bg-[var(--brand-yellow)] hover:text-[var(--foreground)] transition-colors cursor-pointer flex items-center justify-center">
                                <span className="text-xs">Soc</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-6">Explore</h4>
                    <ul className="space-y-4 text-[var(--background)]/60 text-sm">
                        <li><Link href="#" className="hover:text-[var(--brand-yellow)] transition-colors">Rent Items</Link></li>
                        <li><Link href="#" className="hover:text-[var(--brand-yellow)] transition-colors">Buy & Sell</Link></li>
                        <li><Link href="#" className="hover:text-[var(--brand-yellow)] transition-colors">Request Concierge</Link></li>
                        <li><Link href="#" className="hover:text-[var(--brand-yellow)] transition-colors">Success Stories</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-6">Company</h4>
                    <ul className="space-y-4 text-[var(--background)]/60 text-sm">
                        <li><Link href="#" className="hover:text-[var(--brand-yellow)] transition-colors">About Us</Link></li>
                        <li><Link href="#" className="hover:text-[var(--brand-yellow)] transition-colors">Careers</Link></li>
                        <li><Link href="#" className="hover:text-[var(--brand-yellow)] transition-colors">Trust & Safety</Link></li>
                        <li><Link href="#" className="hover:text-[var(--brand-yellow)] transition-colors">Contact</Link></li>
                    </ul>
                </div>

                <div className="space-y-6">
                    <h4 className="font-bold text-lg">Stay Updated</h4>
                    <p className="text-[var(--background)]/60 text-sm">Get the latest listings and community news.</p>
                    <div className="flex gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-[var(--background)]/5 border border-[var(--background)]/10 rounded-full px-4 py-2 text-sm w-full focus:outline-none focus:border-[var(--brand-green)]"
                        />
                        <button className="w-10 h-10 rounded-full bg-[var(--brand-green)] flex items-center justify-center hover:bg-[var(--brand-green)]/80 transition-colors">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-[var(--background)]/10 text-center text-xs text-[var(--background)]/40">
                <p>&copy; {new Date().getFullYear()} Nexbee Inc. All rights reserved.</p>
            </div>
        </footer>
    );
}
