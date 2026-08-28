"use client";

import Logo from "@/component/Logo";
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaLeaf, FaEnvelope, FaLock, FaUser } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        console.log("Registering user:", formData);
    };

    const handleGoogleSignUp = () => {
        console.log("Google Sign Up clicked");
    };

    return (
        <div className="min-h-screen bg-emerald-950 text-white flex items-center justify-center p-4 py-12 relative overflow-hidden font-sans">

            {/* Background Decorative Pattern */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(#f59e0b 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                }}
            />

            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none" />

            {/* Register Card Container */}
            <div className="w-full max-w-md relative z-10 bg-emerald-900/40 border border-emerald-700/60 backdrop-blur-md p-8 rounded-3xl shadow-2xl space-y-6">

                {/* Header & Logo */}
                <div className="text-center space-y-2">
                    <Logo />
                    <h2 className="text-xl font-bold text-white pt-2">Create an Account</h2>
                    <p className="text-emerald-200/80 text-xs">
                        Join Barakah Mart to order authentic Sunnah essentials
                    </p>
                </div>

                {/* Google Sign-Up Button */}
                <button
                    onClick={handleGoogleSignUp}
                    className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-emerald-900/80 hover:bg-emerald-800 text-white border border-emerald-700/70 rounded-xl font-medium text-sm transition-all duration-200 shadow-sm hover:border-amber-400/40"
                >
                    <FcGoogle className="text-xl" />
                    <span>Sign up with Google</span>
                </button>

                {/* Divider */}
                <div className="flex items-center gap-4 my-2">
                    <div className="flex-1 h-px bg-emerald-800/80" />
                    <span className="text-xs text-emerald-300/60 uppercase">or register with email</span>
                    <div className="flex-1 h-px bg-emerald-800/80" />
                </div>

                {/* Registration Form */}
                <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Full Name Field */}
                    <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-emerald-200">
                            Full Name
                        </label>
                        <div className="relative flex items-center">
                            <FaUser className="absolute left-3.5 text-emerald-400 text-sm" />
                            <input
                                type="text"
                                name="fullName"
                                required
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Md. Romjan Ali"
                                className="w-full bg-emerald-950/80 border border-emerald-700/60 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-emerald-400/50 focus:outline-none focus:border-amber-400 transition-colors"
                            />
                        </div>
                    </div>

                    {/* Email Field */}
                    <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-emerald-200">
                            Email Address
                        </label>
                        <div className="relative flex items-center">
                            <FaEnvelope className="absolute left-3.5 text-emerald-400 text-sm" />
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="name@example.com"
                                className="w-full bg-emerald-950/80 border border-emerald-700/60 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-emerald-400/50 focus:outline-none focus:border-amber-400 transition-colors"
                            />
                        </div>
                    </div>

                    {/* Password Field with Show/Hide Toggle */}
                    <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-emerald-200">
                            Password
                        </label>
                        <div className="relative flex items-center">
                            <FaLock className="absolute left-3.5 text-emerald-400 text-sm" />
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                required
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="••••••••"
                                className="w-full bg-emerald-950/80 border border-emerald-700/60 rounded-xl pl-10 pr-10 py-2.5 text-sm text-white placeholder-emerald-400/50 focus:outline-none focus:border-amber-400 transition-colors"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3.5 text-emerald-400 hover:text-amber-400 transition-colors focus:outline-none"
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                {showPassword ? <FaEyeSlash className="text-sm" /> : <FaEye className="text-sm" />}
                            </button>
                        </div>
                    </div>
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold rounded-xl shadow-lg shadow-amber-500/10 transition-all duration-200 text-sm mt-4"
                    >
                        Create Account
                    </button>
                </form>

                {/* Footer: Link to Sign In */}
                <div className="pt-4 text-center border-t border-emerald-800/60">
                    <p className="text-xs text-emerald-200/80">
                        Already have an account?{" "}
                        <Link href="/login" className="text-amber-400 font-bold hover:underline ml-1">
                            Sign In
                        </Link>
                    </p>
                </div>

            </div>
        </div>
    );
}