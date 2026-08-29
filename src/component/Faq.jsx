"use client";

import { Accordion } from "@heroui/react";
import { BiChevronDown } from "react-icons/bi";
import { FaLeaf } from "react-icons/fa6";

const faqData = [
    {
        key: "1",
        question: "What types of Sunnah items are available at Barakah Mart?",
        answer:
            "We specialize in authentic non-food Sunnah essentials. Our collection includes handcrafted prayer caps (tupi), premium 33 and 100-bead tasbihs, non-alcoholic concentrated attar perfumes (such as White Oud and Taif Rose), and organic natural miswak sticks."
    },
    {
        key: "2",
        question: "Are your Attars 100% alcohol-free?",
        answer:
            "Yes, absolutely. All our attar perfumes are pure, 100% alcohol-free oil concentrates (Ittar). They are safe for direct skin application and completely suitable for use during daily prayers and Friday Jummah."
    },
    {
        key: "3",
        question: "Do you deliver to Sherpur Sadar and all over Bangladesh?",
        answer:
            "Yes! We offer fast home delivery throughout Sherpur Sadar, Sherpur district, as well as nationwide cash on delivery across Bangladesh."
    },
    {
        key: "4",
        question: "How can I ensure I am choosing the right prayer cap size?",
        answer:
            "Our cap listings provide precise head measurement guides in inches and centimeters. Most of our caps feature stretchable velvet or standard size choices (21 to 23 inches) to guarantee a comfortable fit."
    },
    {
        key: "5",
        question: "What is your return or exchange policy?",
        answer:
            "We prioritize customer satisfaction and barakah in every transaction. If you receive a defective or incorrect item, you can request a return or replacement within 7 days of delivery by contacting us."
    }
];

export default function Faq() {
    return (
        <section id="faq" className="bg-emerald-950 text-white py-20 px-6 relative overflow-hidden font-sans">

            {/* Background Pattern Overlay */}
            <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(#f59e0b 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                }}
            />

            <div className="max-w-7xl mx-auto relative z-10 space-y-10">

                {/* Section Title */}
                <div className="text-center space-y-3">
                    <span className="inline-flex items-center gap-1.5 text-amber-400 font-semibold text-xs tracking-widest uppercase bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-400/30">
                        <FaLeaf className="text-amber-400" />
                        <span>Got Questions?</span>
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                        Frequently Asked <span className="text-amber-400">Questions</span>
                    </h2>
                    <p className="text-emerald-200/80 text-sm max-w-lg mx-auto">
                        Find answers to common queries regarding our products, delivery, and ordering process.
                    </p>
                </div>

                {/* HeroUI Accordion */}
                <div className="bg-emerald-900/30 border border-emerald-700/60 rounded-3xl p-4 sm:p-6 backdrop-blur-md shadow-2xl">
                    <Accordion
                        className="w-full space-y-3">
                        {faqData.map((item, index) => (
                            <Accordion.Item
                                key={index}
                                className="bg-emerald-950/80 border border-emerald-800/80 rounded-2xl overflow-hidden shadow-md transition-all duration-200 hover:border-amber-400/40"
                            >
                                <Accordion.Heading className="m-0">
                                    <Accordion.Trigger className="w-full flex items-center justify-between p-5 text-left text-white font-semibold text-base sm:text-lg hover:text-amber-400 transition-colors focus:outline-none cursor-pointer">
                                        <span>{item.question}</span>
                                        <Accordion.Indicator className="text-amber-400 text-2xl transition-transform duration-300">
                                            <BiChevronDown />
                                        </Accordion.Indicator>
                                    </Accordion.Trigger>
                                </Accordion.Heading>

                                <Accordion.Panel className="px-5 pb-5 pt-1 text-amber-400 text-sm leading-relaxed border-t border-emerald-800/50">
                                    <Accordion.Body className="text-amber-400">
                                        {item.answer}
                                    </Accordion.Body>
                                </Accordion.Panel>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </div>

            </div>
        </section>
    );
}