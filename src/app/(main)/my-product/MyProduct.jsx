"use client";

import Image from "next/image";
import { FaPen, FaTrash } from "react-icons/fa6";

const MyProduct = ({ myData }) => {
    return (
        <div className="w-full bg-emerald-950 mt-20 text-white p-4 font-sans">
            <div className="max-w-3xl mx-auto bg-emerald-900/40 border border-emerald-700/60 rounded-2xl overflow-hidden shadow-xl">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">

                        {/* Table Head */}
                        <thead>
                            <tr className="bg-emerald-950/80 border-b border-emerald-800/80 text-amber-400 text-xs uppercase tracking-wider">
                                <th className="py-3 px-4 font-bold">Image</th>
                                <th className="py-3 px-4 font-bold">Product</th>
                                <th className="py-3 px-4 font-bold text-right">Actions</th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody className="divide-y divide-emerald-800/50 text-xs sm:text-sm text-emerald-100">
                            {myData.map((item) => (
                                <tr key={item._id} className="hover:bg-emerald-800/30 transition-colors">

                                    {/* Image Column */}
                                    <td className="py-3 px-4">
                                        <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-emerald-950 border border-emerald-700/80 flex-shrink-0">
                                            <Image
                                                src={item.image}
                                                alt={item.product || "Product image"}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </td>

                                    {/* Product Name Column */}
                                    <td className="py-3 px-4 font-medium text-white">
                                        {item.product}
                                    </td>

                                    {/* Action Icon Buttons */}
                                    <td className="py-3 px-4 text-right">
                                        <div className="flex items-center justify-end gap-2">

                                            {/* Update Icon Button */}
                                            <button
                                                type="button"
                                                aria-label="Update product"
                                                className="w-9 h-9 rounded-xl bg-amber-500 hover:bg-amber-400 text-emerald-950 flex items-center justify-center transition-all active:scale-95 cursor-pointer shadow-md shadow-amber-500/10"
                                            >
                                                <FaPen className="text-xs" />
                                            </button>

                                            {/* Delete Icon Button */}
                                            <button
                                                type="button"
                                                aria-label="Delete product"
                                                className="w-9 h-9 rounded-xl bg-rose-500/20 hover:bg-rose-500 text-rose-300 hover:text-white border border-rose-500/40 flex items-center justify-center transition-all active:scale-95 cursor-pointer"
                                            >
                                                <FaTrash className="text-xs" />
                                            </button>

                                        </div>
                                    </td>

                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyProduct;