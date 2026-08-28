"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { FaBasketShopping, FaEye, FaStar } from 'react-icons/fa6';

const DisplayProduct = ({ initialProducts }) => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const categories = ["All", "Cap", "Tasbih", "Attar"];

    const filteredProducts = selectedCategory === "All"
        ? initialProducts
        : initialProducts.filter((product) => product.category === selectedCategory);
    return (
        <div>
            {/* Category Filter Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 border ${selectedCategory === cat
                            ? "bg-amber-500 text-emerald-950 border-amber-400 shadow-lg shadow-amber-500/20"
                            : "bg-emerald-900/40 text-emerald-100 border-emerald-800 hover:bg-emerald-800/60"
                            }`}
                    >
                        {cat === "All" ? "All Items" : `${cat}s`}
                    </button>
                ))}
            </div>

            {/* Product Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                    <div
                        key={product._id}
                        className="bg-emerald-900/40 border border-emerald-700/60 rounded-3xl p-4 backdrop-blur-md hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between group shadow-xl"
                    >
                        <div className="space-y-4">

                            {/* Product Image Box */}
                            <div className="relative h-60 w-full rounded-2xl overflow-hidden bg-emerald-950/60 border border-emerald-800/60">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    height={500}
                                    width={500}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <span className="absolute top-3 left-3 bg-emerald-950/80 backdrop-blur-md text-amber-400 text-xs font-bold px-3 py-1 rounded-full border border-amber-400/30">
                                    {product.category}
                                </span>
                            </div>

                            {/* Info & Rating */}
                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-xs text-amber-400">
                                    <div className="flex items-center gap-1 font-bold">
                                        <FaStar /> <span>{product.rating}</span>
                                    </div>
                                    <span className="text-emerald-300/70 font-medium">In Stock</span>
                                </div>

                                <h3 className="font-bold text-lg text-white group-hover:text-amber-400 transition-colors line-clamp-1">
                                    {product.name}
                                </h3>


                            </div>
                        </div>

                        {/* Price & Action Buttons */}
                        <div className="pt-6 border-t border-emerald-800/60 flex items-center justify-between mt-4">
                            <div>
                                <span className="text-xs text-emerald-300/60 line-through block">
                                    ৳{product.originalPrice}
                                </span>
                                <span className="text-xl font-extrabold text-amber-400">
                                    ৳{product.price}
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <button
                                    className="p-2.5 bg-emerald-950 hover:bg-emerald-800 text-emerald-200 hover:text-white rounded-xl border border-emerald-700/60 transition-all text-sm flex items-center gap-1.5"
                                    aria-label="See Details"
                                >
                                    <FaEye />
                                    <span className="hidden sm:inline text-xs font-semibold">Details</span>
                                </button>

                                <button
                                    className="p-2.5 bg-amber-500 hover:bg-amber-400 text-emerald-950 rounded-xl font-bold transition-all shadow-md shadow-amber-500/10 text-sm"
                                    aria-label="Add to Cart"
                                >
                                    <FaBasketShopping />
                                </button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default DisplayProduct;