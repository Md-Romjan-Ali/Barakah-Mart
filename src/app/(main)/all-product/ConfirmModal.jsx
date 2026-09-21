"use client";
import { postOrder } from "@/lib/allPost";
import { authClient } from "@/lib/auth-client";
import { Button, Modal } from "@heroui/react";
import {
    FaCartPlus,
    FaUser,
    FaPhone,
    FaLocationDot,
    FaLeaf,
    FaCheck,
    FaXmark,
} from "react-icons/fa6";
export function ConfirmModal({ product }) {
    const { data: session } = authClient.useSession()
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Extract all form values cleanly using Object.fromEntries
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const orderData = {
            product: product.name,
            image: product.image,
            email: session?.user.email,
            ...data,
        };
        await postOrder(orderData)
        alert("Order placed successfully! We will contact you soon.");

    };

    return (
        <Modal>
            {/* Trigger Button */}
            <Button
                variant="ghost"
                className="bg-amber-500 hover:bg-amber-400 text-emerald-950 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-amber-500/10 transition-all active:scale-95 cursor-pointer"
            >
                <FaCartPlus className="text-base" />
                <span>Add to Cart</span>
            </Button>

            {/* Modal Backdrop & Container */}
            <Modal.Backdrop className="bg-emerald-950/80 backdrop-blur-sm">
                <Modal.Container>
                    <Modal.Dialog className="sm:max-w-[400px] w-full border-none bg-transparent shadow-none p-4">
                        <Modal.Body className="p-0">

                            {/* Card Container */}
                            <div className="bg-emerald-900 border border-emerald-700/80 text-white rounded-3xl w-full p-6 space-y-5 relative shadow-2xl backdrop-blur-md">

                                {/* Close Button */}
                                <Button
                                    className="absolute top-4 right-4 z-10 w-9 h-9 min-w-0 p-0 rounded-full bg-emerald-950/60 border border-emerald-700/60 text-emerald-300 hover:text-amber-400 hover:bg-emerald-950 transition-all flex items-center justify-center cursor-pointer"
                                    variant="ghost"
                                    slot="close"
                                >
                                    <FaXmark className="text-base" />
                                </Button>

                                {/* Header */}
                                <div className="text-center space-y-1.5 pt-1">
                                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/30 text-amber-400 mb-1">
                                        <FaLeaf className="text-lg" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">
                                        Confirm Your Order
                                    </h3>
                                    <p className="text-emerald-200/80 text-xs">
                                        Please provide your details for home delivery
                                    </p>
                                </div>

                                {/* Form using native name attributes */}
                                <form onSubmit={handleSubmit} className="space-y-4">

                                    {/* Full Name Input */}
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold text-emerald-200/90 pl-1">
                                            Full Name
                                        </label>
                                        <div className="relative flex items-center">
                                            <FaUser className="absolute left-3.5 text-emerald-400 text-xs" />
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                placeholder="e.g., Md. Ramzan Ali"
                                                className="w-full bg-emerald-950/80 border border-emerald-700/60 rounded-xl pl-9 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-emerald-400/40 focus:outline-none focus:border-amber-400 transition-colors"
                                            />
                                        </div>
                                    </div>

                                    {/* Phone Input */}
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold text-emerald-200/90 pl-1">
                                            Contact Number
                                        </label>
                                        <div className="relative flex items-center">
                                            <FaPhone className="absolute left-3.5 text-emerald-400 text-xs" />
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                placeholder="e.g., 01700000000"
                                                className="w-full bg-emerald-950/80 border border-emerald-700/60 rounded-xl pl-9 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-emerald-400/40 focus:outline-none focus:border-amber-400 transition-colors"
                                            />
                                        </div>
                                    </div>

                                    {/* Delivery Location Input */}
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold text-emerald-200/90 pl-1">
                                            Delivery Address
                                        </label>
                                        <div className="relative flex items-center">
                                            <FaLocationDot className="absolute left-3.5 text-emerald-400 text-xs" />
                                            <input
                                                type="text"
                                                name="address"
                                                required
                                                placeholder="e.g., Sherpur Sadar, Sherpur"
                                                className="w-full bg-emerald-950/80 border border-emerald-700/60 rounded-xl pl-9 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-emerald-400/40 focus:outline-none focus:border-amber-400 transition-colors"
                                            />
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <Button
                                        type="submit"
                                        slot="close"
                                        className="w-full mt-2 bg-amber-500 hover:bg-amber-400 text-emerald-950 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/10 transition-all active:scale-95 cursor-pointer"
                                    >
                                        <FaCheck className="text-sm" />
                                        <span>Confirm Order</span>
                                    </Button>

                                </form>

                            </div>

                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}