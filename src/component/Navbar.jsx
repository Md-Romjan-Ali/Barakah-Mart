"use client";

import { useState, useEffect } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/react";
import { FaBasketShopping, FaUser, FaLeaf, FaBars, FaXmark, } from "react-icons/fa6";
import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
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
        <div className="bg-emerald-950 text-white">

            {/* ================= NAVBAR ================= */}
            <nav
                className={`fixed top-0 left-0 right-0 z-50 bg-emerald-950/90 backdrop-blur-md border-b border-emerald-800/50 transition-transform duration-300 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                    <Logo />
                    {/* Desktop Links (HTML Standard Nav) */}
                    <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
                        <li>
                            <Link href="/" className="text-amber-400 font-semibold transition-colors">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/all-product" className="text-emerald-100/90 hover:text-amber-400 transition-colors">
                                All Products
                            </Link>
                        </li>
                        <li>
                            <Link href="/deshboard" className="text-emerald-100/90 hover:text-amber-400 transition-colors">
                                DeshBoard
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
                                    <span
                                        className="inline-flex h-10 w-10 items-center justify-center bg-emerald-900/80 text-emerald-100 border border-emerald-700/50 rounded-xl"
                                        aria-label="Open Menu"
                                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    >
                                        {isMobileMenuOpen ? <FaXmark className="text-xl" /> : <FaBars className="text-xl" />}
                                    </span>
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

        </div>
    );
}