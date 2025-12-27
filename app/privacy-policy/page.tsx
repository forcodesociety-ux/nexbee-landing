"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen font-sans selection:bg-[var(--brand-yellow)] selection:text-[var(--foreground)] bg-[var(--background)]">
            <Navbar />

            <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[var(--foreground)] mb-12">
                    Privacy <span className="text-[var(--brand-green)]">Policy</span>
                </h1>

                <div className="space-y-12 text-[var(--foreground)]/80 leading-relaxed text-lg">
                    <section>
                        <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">1. Introduction</h2>
                        <p>
                            Welcome to Nexbee. We respect your privacy and are committed to protecting your personal data.
                            This privacy policy will inform you as to how we look after your personal data when you visit our website
                            or use our mobile application and tell you about your privacy rights and how the law protects you.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">2. Data We Collect</h2>
                        <p>
                            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                        </p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                            <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
                            <li><strong>Location Data:</strong> includes your approximate location to facilitate local rentals and sales.</li>
                            <li><strong>Transaction Data:</strong> includes details about payments to and from you and other details of products you have purchased or rented from us.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">3. How We Use Your Data</h2>
                        <p>
                            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                        </p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                            <li>To register you as a new customer.</li>
                            <li>To process and deliver your orders/rentals.</li>
                            <li>To manage our relationship with you.</li>
                            <li>To improve our website, products/services, marketing or customer relationships.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">4. Data Security</h2>
                        <p>
                            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">5. Contact Us</h2>
                        <p>
                            If you have any questions about this privacy policy or our privacy practices, please contact us at support@nexbee.app.
                        </p>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}
