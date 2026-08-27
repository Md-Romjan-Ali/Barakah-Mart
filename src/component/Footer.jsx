import { FaLeaf, FaEnvelope, FaLocationDot, FaPhone, FaHeart } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-emerald-950 border-t border-emerald-800/60 text-emerald-100 pt-16 pb-8 relative overflow-hidden">
            {/* Background Decorative Grid Pattern */}
            <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(#f59e0b 1px, transparent 1px)",
                    backgroundSize: "24px 24px"
                }}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-emerald-800/60">

                    {/* Column 1: Brand Info & Founder */}
                    <div className="space-y-4">
                        <a href="#" className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400">
                                <FaLeaf className="text-xl" />
                            </div>
                            <span className="font-extrabold text-2xl tracking-wide text-white">
                                Barakah <span className="text-amber-400">Mart</span>
                            </span>
                        </a>

                        <p className="text-emerald-200/80 text-sm leading-relaxed">
                            Your trusted shop for premium Islamic non-food essentials, including authentic prayer caps, handcrafted tasbih, non-alcoholic concentrated attar perfumes, and natural miswak sticks.
                        </p>

                        <div className="pt-2">
                            <p className="text-xs text-emerald-400 uppercase font-semibold tracking-wider">Founder</p>
                            <p className="text-white font-bold text-base">Md. Romjan Ali</p>
                        </div>
                    </div>

                    {/* Column 2: Non-Food Sunnah Products */}
                    <div className="space-y-4">
                        <h3 className="text-white font-bold text-lg border-b border-amber-400/30 pb-2 inline-block">
                            Sunnah Collection
                        </h3>
                        <ul className="space-y-2.5 text-sm">
                            <li>
                                <a href="#" className="hover:text-amber-400 transition-colors">Premium Prayer Caps (Tupi)</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-amber-400 transition-colors">Handcrafted Tasbih & Counter</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-amber-400 transition-colors">Pure Non-Alcoholic Attar</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-amber-400 transition-colors">Natural Organic Miswak</a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Contact & Address */}
                    <div className="space-y-4">
                        <h3 className="text-white font-bold text-lg border-b border-amber-400/30 pb-2 inline-block">
                            Contact Info
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-3">
                                <FaLocationDot className="text-amber-400 mt-1 flex-shrink-0" />
                                <span>Sherpur Sadar, Sherpur, Bangladesh</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaEnvelope className="text-amber-400 flex-shrink-0" />
                                <a href="mailto:romjan.merndev@gmail.com" className="hover:text-amber-400 transition-colors break-all">
                                    romjan.merndev@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaPhone className="text-amber-400 flex-shrink-0" />
                                <span>+880 1700-000000</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Location Map */}
                    <div className="space-y-4">
                        <h3 className="text-white font-bold text-lg border-b border-amber-400/30 pb-2 inline-block">
                            Our Location
                        </h3>
                        <div className="w-full h-40 rounded-xl overflow-hidden border border-emerald-700/60 shadow-lg">
                            <iframe
                                title="Barakah Mart Location - Sherpur Sadar"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.571439247659!2d90.0125!3d25.0189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3756d67552cd59e5%3A0x5f5a5a71907e02f1!2sSherpur%20Sadar%20Upazila!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>

                </div>

                {/* Bottom Bar: Copyright */}
                <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-emerald-300/70 gap-4 text-center md:text-left">
                    <p>© {new Date().getFullYear()} Barakah Mart. All rights reserved.</p>
                    <p className="flex items-center justify-center gap-1">
                        Developed with <FaHeart className="text-amber-400 text-xs" /> by <span className="text-amber-400 font-semibold">Md. Romjan Ali</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}