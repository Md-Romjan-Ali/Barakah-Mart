import DisplayProduct from '@/component/DisplayProduct';
import { getProduct } from '@/lib/allGet';
import React from 'react';
import { FaLeaf, FaStore } from 'react-icons/fa6';

const AllProduct = async () => {
    const initialProducts = await getProduct()

    return (
        <div>
            <section className="min-h-screen bg-emerald-950 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans">

                {/* Background Decorative Pattern */}
                <div
                    className="absolute inset-0 opacity-5 pointer-events-none"
                    style={{
                        backgroundImage: "radial-gradient(#f59e0b 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                    }}
                />

                <div className="max-w-7xl mx-auto relative z-10 space-y-10">

                    {/* ================= HEADER SECTION ================= */}
                    <div className="text-center space-y-3">
                        <span className="inline-flex items-center gap-1.5 text-amber-400 font-semibold text-xs tracking-widest uppercase bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-400/30">
                            <FaLeaf className="text-amber-400" />
                            <span>Complete Collection</span>
                        </span>

                        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                            Explore All <span className="text-amber-400">Sunnah Essentials</span>
                        </h1>

                        <p className="text-emerald-200/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                            Browse our entire range of authentic prayer caps, handcrafted tasbihs, non-alcoholic concentrated attars, and organic miswaks.
                        </p>

                        {/* Total Product Count Badge */}
                        <div className="pt-2">
                            <span className="inline-flex items-center gap-2 text-xs font-medium text-emerald-300 bg-emerald-900/40 border border-emerald-700/60 px-4 py-2 rounded-xl backdrop-blur-md">
                                <FaStore className="text-amber-400 text-sm" />
                                <span>Showing all <strong className="text-amber-400">{initialProducts.length}</strong> products</span>
                            </span>
                        </div>
                    </div>

                    {/* ================= PRODUCT CARDS GRID ================= */}
                    <DisplayProduct initialProducts={initialProducts} />

                </div>
            </section>
        </div>
    );
};

export default AllProduct;