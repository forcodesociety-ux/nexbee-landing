"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsConditions() {
    return (
        <main className="min-h-screen font-sans selection:bg-[var(--brand-yellow)] selection:text-[var(--foreground)] bg-[var(--background)]">
            <Navbar />

            <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[var(--foreground)] mb-12">
                    Terms & <span className="text-[var(--brand-green)]">Conditions</span>
                </h1>

                <div className="space-y-12 text-[var(--foreground)]/80 leading-relaxed text-lg">
                    <section>
                        <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using Nexbee, you accept and agree to be bound by the terms and provision of this agreement.
                            In addition, when using this websites particular services, you shall be subject to any posted guidelines
                            or rules applicable to such services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">2. Description of Service</h2>
                        <p>
                            Nexbee provides a platform for users to rent, buy, and sell items within their community.
                            You understand and agree that the Service is provided "AS-IS" and that Nexbee assumes no responsibility
                            for the timeliness, deletion, mis-delivery or failure to store any user communications or personalization settings.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">3. User Conduct</h2>
                        <p>
                            You agree to not use the Service to:
                        </p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                            <li>Upload, post, email, transmit or otherwise make available any content that is unlawful, harmful, threatening, abusive, harassing, or otherwise objectionable.</li>
                            <li>Impersonate any person or entity.</li>
                            <li>Forgery headers or otherwise manipulate identifiers in order to disguise the origin of any content transmitted through the Service.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">4. Liability</h2>
                        <p>
                            You expressly understand and agree that Nexbee shall not be liable for any direct, indirect, incidental,
                            special, consequential or exemplary damages, including but not limited to, damages for loss of profits,
                            goodwill, use, data or other intangible losses.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">5. Changes to Terms</h2>
                        <p>
                            Nexbee reserves the right to update or change these Terms and Conditions at any time.
                            We will notify you of any changes by posting the new Terms and Conditions on this page.
                        </p>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}
