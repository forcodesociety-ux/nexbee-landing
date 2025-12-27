import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--foreground)]/5 flex justify-center">
            <div className="max-w-7xl w-full flex items-center justify-between">
                <div className="text-xl font-bold tracking-tight">
                    <span className="text-[var(--brand-green)]">Nex</span>
                    <span className="text-[var(--brand-yellow)]">bee</span>
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--foreground)]/80">
                    <Link href="#" className="hover:text-[var(--brand-green)] transition-colors">Rentals</Link>
                    <Link href="#" className="hover:text-[var(--brand-green)] transition-colors">Resell</Link>
                    <Link href="#" className="hover:text-[var(--brand-green)] transition-colors">Requests</Link>
                </div>

                <button className="px-5 py-2 text-sm bg-[var(--foreground)] text-[var(--background)] rounded-full font-medium hover:bg-[var(--foreground)]/90 transition-colors">
                    Get App
                </button>
            </div>
        </nav>
    );
}
