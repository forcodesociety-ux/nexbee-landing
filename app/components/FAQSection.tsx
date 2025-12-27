"use client";

import { useState } from 'react';

const faqs = [
    {
        question: "Do you allow anyone to rent out items?",
        answer: "Yes! Nexbee is a peer-to-peer marketplace. Anyone can list their items for rent—from cameras and tools to party supplies—and start earning money from things they own."
    },
    {
        question: "Are there any subscriptions needed?",
        answer: "No, joining Nexbee is completely free. There are no monthly subscription fees to browse or list items. We simply take a small commission on successful transactions to keep the platform safe and running."
    },
    {
        question: "Do you allow anyone to sell items?",
        answer: "Absolutely. You can choose to rent out your items or sell them directly. Many users list items for rent, and if they decide to let them go later, switch them to 'For Sale'."
    },
    {
        question: "What is 'Request Concierge'?",
        answer: "If you can't find what you're looking for, simply post a request! Our community or our concierge team will help locate the item for you, so you don't have to spend hours searching."
    },
    {
        question: "When will the app be coming?",
        answer: "Our team is working hard to launch the app! We plan to launch very soon. Join the waitlist to get early access and exclusive launch perks."
    }
];

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-24 px-6 bg-[var(--background)]">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--foreground)] mb-6">
                        Frequently Asked <span className="text-[var(--brand-green)]">Questions</span>
                    </h2>
                    <p className="text-[var(--foreground)]/60 text-lg">
                        Everything you need to know about the Nexbee community.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`group bg-[var(--foreground)]/5 rounded-2xl overflow-hidden transition-all duration-300 ${activeIndex === index ? 'bg-[var(--foreground)]/5 shadow-sm' : ''}`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 font-medium text-lg text-[var(--foreground)] text-left outline-none"
                            >
                                <span>{faq.question}</span>
                                <span className={`transition-transform duration-300 text-[var(--brand-green)] ${activeIndex === index ? 'rotate-180' : ''}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                </span>
                            </button>
                            <div
                                className={`grid transition-[grid-template-rows] duration-300 ease-out ${activeIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                            >
                                <div className="overflow-hidden">
                                    <div className="px-6 pb-6 text-[var(--foreground)]/70 leading-relaxed">
                                        <p>{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
