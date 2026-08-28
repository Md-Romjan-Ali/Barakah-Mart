"use client";

import Logo from "@/component/Logo";
import { postProduct } from "@/lib/allPost";
import { FaTag, FaMoneyBillWave, FaStar, FaImage, FaAlignLeft, FaPlus } from "react-icons/fa6";

export default function AddProductForm() {

    const categories = ["Cap", "Tasbih", "Attar", "Miswak"];

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const productData = Object.fromEntries(formData.entries())
        const postdata = await postProduct(productData)
        console.log(postdata, 'from add product');

    };

    return (
        <div className="min-h-screen bg-emerald-950 text-white flex items-center justify-center p-4 py-12 relative overflow-hidden font-sans">

            {/* Background Grid Pattern */}
            <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(#f59e0b 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                }}
            />

            {/* Main Container Card */}
            <div className="w-full max-w-2xl relative z-10 bg-emerald-900/40 border border-emerald-700/60 backdrop-blur-md p-8 rounded-3xl shadow-2xl space-y-6">

                {/* Form Header */}
                <div className="text-center space-y-2">
                    <Logo />
                    <h2 className="text-xl font-bold text-white pt-2">Add New Product</h2>
                    <p className="text-emerald-200/80 text-xs">
                        Insert new items into your Sunnah collection catalog
                    </p>
                </div>

                {/* Add Product Form */}
                <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Product Name */}
                    <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-emerald-200">
                            Product Name
                        </label>
                        <div className="relative flex items-center">
                            <FaTag className="absolute left-3.5 text-emerald-400 text-sm" />
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="e.g., Handmade Natural Sandalwood Tasbih"
                                className="w-full bg-emerald-950/80 border border-emerald-700/60 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-emerald-400/50 focus:outline-none focus:border-amber-400 transition-colors"
                            />
                        </div>
                    </div>

                    {/* Category & Rating Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        {/* Category */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-emerald-200">
                                Category
                            </label>
                            <select
                                name="category"
                                className="w-full bg-emerald-950/80 border border-emerald-700/60 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                            >
                                {categories.map((cat) => (
                                    <option key={cat} value={cat} className="bg-emerald-950 text-white">
                                        {cat}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Rating */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-emerald-200">
                                Rating
                            </label>
                            <div className="relative flex items-center">
                                <FaStar className="absolute left-3.5 text-amber-400 text-sm" />
                                <input
                                    type="number"
                                    step="0.1"
                                    min="1"
                                    max="5"
                                    name="rating"
                                    required
                                    placeholder="5.0"
                                    className="w-full bg-emerald-950/80 border border-emerald-700/60 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-emerald-400/50 focus:outline-none focus:border-amber-400 transition-colors"
                                />
                            </div>
                        </div>

                    </div>

                    {/* Price & Original Price Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        {/* Selling Price */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-emerald-200">
                                Selling Price (৳)
                            </label>
                            <div className="relative flex items-center">
                                <FaMoneyBillWave className="absolute left-3.5 text-emerald-400 text-sm" />
                                <input
                                    type="number"
                                    name="price"
                                    required
                                    placeholder="550"
                                    className="w-full bg-emerald-950/80 border border-emerald-700/60 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-emerald-400/50 focus:outline-none focus:border-amber-400 transition-colors"
                                />
                            </div>
                        </div>

                        {/* Original Price */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-emerald-200">
                                Original Price (৳)
                            </label>
                            <div className="relative flex items-center">
                                <FaMoneyBillWave className="absolute left-3.5 text-emerald-400 text-sm" />
                                <input
                                    type="number"
                                    name="originalPrice"
                                    required
                                    placeholder="700"
                                    className="w-full bg-emerald-950/80 border border-emerald-700/60 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-emerald-400/50 focus:outline-none focus:border-amber-400 transition-colors"
                                />
                            </div>
                        </div>

                    </div>

                    {/* Image URL */}
                    <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-emerald-200">
                            Image URL
                        </label>
                        <div className="relative flex items-center">
                            <FaImage className="absolute left-3.5 text-emerald-400 text-sm" />
                            <input
                                type="url"
                                name="image"
                                required
                                placeholder="https://images.unsplash.com/photo-..."
                                className="w-full bg-emerald-950/80 border border-emerald-700/60 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-emerald-400/50 focus:outline-none focus:border-amber-400 transition-colors"
                            />
                        </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-emerald-200">
                            Product Description
                        </label>
                        <div className="relative flex items-start">
                            <FaAlignLeft className="absolute left-3.5 top-3.5 text-emerald-400 text-sm" />
                            <textarea
                                name="description"
                                rows="3"
                                required
                                placeholder="Enter detailed description about the product..."
                                className="w-full bg-emerald-950/80 border border-emerald-700/60 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-emerald-400/50 focus:outline-none focus:border-amber-400 transition-colors"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3.5 px-4 bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold rounded-xl shadow-lg shadow-amber-500/10 transition-all duration-200 text-sm flex items-center justify-center gap-2 mt-2"
                    >
                        <FaPlus />
                        <span>Add Product</span>
                    </button>

                </form>

            </div>
        </div>
    );
}