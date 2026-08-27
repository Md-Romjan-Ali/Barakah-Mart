"use client";

import { useState, useEffect } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@heroui/react";
import { FaBasketShopping, FaUser, FaLeaf, FaBars, FaXmark, FaCircleCheck, FaTruckFast } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

export default function BarakahMartHeaderHero() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Hide on scroll down, show on scroll up
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < 50) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY) {
                setIsVisible(false); // Scroll Down -> Hide
            } else {
                setIsVisible(true);  // Scroll Up -> Show
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <div className="bg-emerald-950 text-white min-h-screen font-sans">

            {/* ================= NAVBAR ================= */}
            <nav
                className={`fixed top-0 left-0 right-0 z-50 bg-emerald-950/90 backdrop-blur-md border-b border-emerald-800/50 transition-transform duration-300 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                    {/* Logo Section */}
                    <a href="#" className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400">
                            <FaLeaf className="text-xl" />
                        </div>
                        <span className="font-extrabold text-2xl tracking-wide text-white">
                            Barakah <span className="text-amber-400">Mart</span>
                        </span>
                    </a>

                    {/* Desktop Links (HTML Standard Nav) */}
                    <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
                        <li>
                            <Link href="/" className="text-amber-400 font-semibold transition-colors">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/products" className="text-emerald-100/90 hover:text-amber-400 transition-colors">
                                All Products
                            </Link>
                        </li>
                        <li>
                            <Link href="/sunnah" className="text-emerald-100/90 hover:text-amber-400 transition-colors">
                                Sunnah Essentials
                            </Link>
                        </li>
                    </ul>

                    {/* Right Action Items */}
                    <div className="flex items-center gap-4">

                        {/* Cart Icon Button */}
                        <button
                            className="relative p-2.5 bg-emerald-900/60 hover:bg-emerald-800/80 text-amber-400 rounded-xl border border-emerald-700/50 transition-all"
                            aria-label="Cart"
                        >
                            <FaBasketShopping className="text-xl" />
                            <span className="absolute -top-1 -right-1 bg-amber-500 text-emerald-950 font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                3
                            </span>
                        </button>

                        {/* Login Button */}
                        <Link
                            href="/login"
                            className="hidden sm:flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold px-5 py-2.5 rounded-xl transition-all shadow-md shadow-amber-500/10"
                        >
                            <FaUser className="text-sm" />
                            <span>Login</span>
                        </Link>

                        {/* Mobile Dropdown Feature (HeroUI Dropdown) */}
                        <div className="md:hidden">
                            <Dropdown placement="bottom-end">
                                <DropdownTrigger>
                                    <Button
                                        isIconOnly
                                        className="bg-emerald-900/80 text-emerald-100 border border-emerald-700/50 rounded-xl"
                                        aria-label="Open Menu"
                                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    >
                                        {isMobileMenuOpen ? <FaXmark className="text-xl" /> : <FaBars className="text-xl" />}
                                    </Button>
                                </DropdownTrigger>

                                <DropdownMenu
                                    aria-label="Mobile Navigation"
                                    className="bg-emerald-900 border border-emerald-700 text-white rounded-xl p-2 w-48 shadow-2xl"
                                >
                                    <DropdownItem key="home" href="#">
                                        <span className="text-amber-400 font-bold">Home</span>
                                    </DropdownItem>
                                    <DropdownItem key="products" href="#products">
                                        <span className="text-emerald-100">All Products</span>
                                    </DropdownItem>
                                    <DropdownItem key="sunnah" href="#sunnah">
                                        <span className="text-emerald-100">Sunnah Essentials</span>
                                    </DropdownItem>
                                    <DropdownItem key="login" href="#login" className="sm:hidden">
                                        <span className="text-amber-400 font-bold">Login</span>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>

                    </div>

                </div>
            </nav>

            {/* ================= HERO SECTION ================= */}
            <header className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-screen flex items-center">

                {/* Sunnah Pattern Overlay Background */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: "radial-gradient(#f59e0b 1px, transparent 1px)",
                        backgroundSize: "24px 24px"
                    }}
                />

                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">

                    {/* Left Column: Text Content */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/80 border border-amber-400/40 text-amber-400 text-sm font-medium">
                            <FaLeaf className="text-amber-400" />
                            <span>Authentic Sunnah Collection</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                            Revive the Sunnah in Your <span className="text-amber-400">Daily Life</span>
                        </h1>

                        <p className="text-emerald-100 text-base sm:text-lg font-light leading-relaxed max-w-xl">
                            Discover premium Ajwa dates, pure Sidr honey, natural Miswak, black seed oil, and organic Sunnah essentials brought directly to your doorstep with Barakah.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <a
                                href="#shop"
                                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold rounded-xl shadow-lg shadow-amber-500/20 transition-all text-center"
                            >
                                <FaBasketShopping />
                                <span>Explore Sunnah Store</span>
                            </a>
                            <a
                                href="#about"
                                className="inline-flex items-center justify-center px-8 py-3.5 bg-emerald-900/50 hover:bg-emerald-900 text-emerald-100 border border-emerald-700 font-medium rounded-xl transition-all text-center"
                            >
                                Learn Our Story
                            </a>
                        </div>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-3 gap-4 pt-8 border-t border-emerald-800/80">
                            <div className="space-y-1">
                                <div className="flex items-center gap-2 text-amber-400 font-bold text-lg">
                                    <FaCircleCheck className="text-sm" /> 100%
                                </div>
                                <p className="text-xs text-emerald-200/80">Pure & Natural</p>
                            </div>

                            <div className="space-y-1">
                                <div className="flex items-center gap-2 text-amber-400 font-bold text-lg">
                                    <FaCircleCheck className="text-sm" /> Halal
                                </div>
                                <p className="text-xs text-emerald-200/80">Authentic Sourcing</p>
                            </div>

                            <div className="space-y-1">
                                <div className="flex items-center gap-2 text-amber-400 font-bold text-lg">
                                    <FaTruckFast className="text-sm" /> Fast
                                </div>
                                <p className="text-xs text-emerald-200/80">Home Delivery</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Featured Showcase Card */}
                    <div className="relative flex justify-center">
                        <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/20 to-emerald-500/30 rounded-3xl blur-2xl opacity-70" />

                        <div className="relative bg-emerald-900/40 border border-emerald-700/60 backdrop-blur-md p-4 rounded-3xl shadow-2xl max-w-md w-full space-y-4">
                            <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-emerald-950/60 flex items-center justify-center border border-emerald-800/50">
                                <Image
                                    width={200}
                                    height={200}
                                    src="https://images.unsplash.com/photo-1587049352847-4a222e784d38?q=80&w=800&auto=format&fit=crop"
                                    alt="Premium Sidr Honey & Organic Dates"
                                    className="object-cover h-full w-full rounded-2xl"
                                />
                            </div>

                            <div className="flex justify-between items-center pt-2">
                                <div>
                                    <span className="text-xs text-amber-400 font-medium tracking-wider uppercase block">
                                        Featured Item
                                    </span>
                                    <h3 className="text-lg font-bold text-white">
                                        Premium Organic Sidr Honey
                                    </h3>
                                </div>

                                <button
                                    className="p-3 bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold rounded-xl transition-all"
                                    aria-label="Add to cart"
                                >
                                    <FaBasketShopping className="text-lg" />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </header>

        </div>
    );
}