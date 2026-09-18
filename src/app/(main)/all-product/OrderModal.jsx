"use client";

import { Button, Modal } from "@heroui/react";
import Image from "next/image";
import { FaEye, FaStar, FaCartPlus, FaXmark } from "react-icons/fa6";
import { ConfirmModal } from "./ConfirmModal";

export function OrderModal({ product }) {
    return (
        <Modal>
            {/* Trigger Button */}
            <Button
                variant="ghost"
                className="text-emerald-300 hover:text-amber-400 hover:bg-emerald-900/60 transition-colors border border-emerald-800/80 rounded-xl px-3 py-1.5"
            >
                <FaEye className="text-sm" />
                <span className="hidden sm:inline text-xs font-semibold">Details</span>
            </Button>

            {/* Modal Backdrop & Container */}
            <Modal.Backdrop className="bg-emerald-950/80 backdrop-blur-sm">
                <Modal.Container>
                    <Modal.Dialog className="sm:max-w-md w-full border-none bg-transparent shadow-none p-4">
                        <Modal.Body className="p-0">

                            {/* Main Card Container */}
                            <div className="bg-emerald-900 border border-emerald-700/80 text-white rounded-3xl w-full p-6 space-y-5 relative shadow-2xl backdrop-blur-md">

                                {/* Close Button */}
                                <Button
                                    className="absolute top-4 right-4 z-10 w-9 h-9 min-w-0 p-0 rounded-full bg-emerald-950/60 border border-emerald-700/60 text-emerald-300 hover:text-amber-400 hover:bg-emerald-950 transition-all flex items-center justify-center cursor-pointer"
                                    variant="ghost"
                                    slot="close"
                                >
                                    <FaXmark className="text-base" />
                                </Button>

                                {/* Product Image */}
                                <div className="h-60 w-full rounded-2xl overflow-hidden bg-emerald-950 border border-emerald-800 relative">
                                    <Image
                                        width={600}
                                        height={600}
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                    />

                                    {/* Rating Badge Overlay */}
                                    {product.rating && (
                                        <div className="absolute bottom-3 left-3 bg-emerald-950/90 border border-emerald-700/80 px-2.5 py-1 rounded-lg backdrop-blur-md flex items-center gap-1.5">
                                            <FaStar className="text-amber-400 text-xs" />
                                            <span className="text-xs font-bold text-amber-400">{product.rating}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Content Info */}
                                <div className="space-y-2.5">
                                    <span className="inline-block text-[11px] font-bold tracking-wider uppercase bg-amber-500/10 text-amber-400 px-3 py-1 rounded-full border border-amber-400/30">
                                        {product.category}
                                    </span>

                                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                                        {product.name}
                                    </h3>

                                    <p className="text-emerald-200/80 text-xs sm:text-sm leading-relaxed pt-1">
                                        {product.description}
                                    </p>
                                </div>

                                {/* Footer Actions & Price */}
                                <div className="flex items-center justify-between pt-4 border-t border-emerald-800/80">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-2xl sm:text-3xl font-extrabold text-amber-400">
                                            ৳{product.price}
                                        </span>
                                        {product.originalPrice && (
                                            <span className="text-xs text-emerald-400/60 line-through">
                                                ৳{product.originalPrice}
                                            </span>
                                        )}
                                    </div>
                                    <ConfirmModal product={product} />
                                </div>

                            </div>

                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}