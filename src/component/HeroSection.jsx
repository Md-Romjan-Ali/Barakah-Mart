"use client";

import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import { FaBasketShopping, FaCircleCheck, FaLeaf, FaTruckFast } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <section className="relative bg-emerald-950 text-white min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Decorative Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#f59e0b 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">

        {/* Left Column: Text & Call to Action */}
        <div className="space-y-6 text-left">

          <Chip
            variant="flat"
            className="bg-emerald-900/80 border border-amber-400/40 text-amber-400 px-4 py-1 text-sm font-medium"
          >
            Authentic Sunnah Collection
          </Chip>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Revive the Sunnah in Your <span className="text-amber-400">Daily Life</span>
          </h1>

          <p className="text-emerald-100 text-base sm:text-lg font-light leading-relaxed max-w-xl">
            Discover premium Ajwa dates, pure Sidr honey, natural Miswak, black seed oil, and organic Sunnah essentials brought directly to your doorstep with Barakah.
          </p>

          {/* Action Buttons using HeroUI Button */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold rounded-xl shadow-lg shadow-amber-500/20"
              endContent={<FaBasketShopping />}
            >
              Explore Sunnah Store
            </Button>

            <Button
              size="lg"
              variant="bordered"
              className="border-emerald-700 text-emerald-100 hover:bg-emerald-900/50 font-medium rounded-xl"
            >
              Learn Our Story
            </Button>
          </div>

          {/* Trust Highlights */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-emerald-800/80">
            <div className="flex flex-col items-center sm:items-start gap-1">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-lg">
                <FaCircleCheck className="text-sm" /> 100%
              </div>
              <p className="text-xs text-emerald-200/80">Pure & Natural</p>
            </div>

            <div className="flex flex-col items-center sm:items-start gap-1">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-lg">
                <FaCircleCheck className="text-sm" /> Halal
              </div>
              <p className="text-xs text-emerald-200/80">Authentic Sourcing</p>
            </div>

            <div className="flex flex-col items-center sm:items-start gap-1">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-lg">
                <FaTruckFast className="text-sm" /> Fast
              </div>
              <p className="text-xs text-emerald-200/80">Home Delivery</p>
            </div>
          </div>

        </div>

        {/* Right Column: Featured Product Card using HeroUI Card */}
        <div className="relative flex justify-center">
          {/* Subtle Ambient Glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/20 to-emerald-500/30 rounded-3xl blur-2xl opacity-70" />

          <div className="bg-emerald-900/40 border border-emerald-700/60 backdrop-blur-md p-2 max-w-md w-full shadow-2xl">
            <div className="overflow-visible p-4 space-y-4">
              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-emerald-950/60 flex items-center justify-center border border-emerald-800/50">
                <Image
                  alt="Premium Sidr Honey & Organic Dates"
                  src="https://images.unsplash.com/photo-1587049352847-4a222e784d38?q=80&w=800&auto=format&fit=crop"
                  width={1000}
                  height={1000}
                  className="object-cover h-full w-full rounded-2xl"
                />
              </div>

              <div className="flex justify-between items-center pt-2">
                <div>
                  <span className="text-xs text-amber-400 font-medium tracking-wider uppercase">
                    Featured Item
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    Premium Organic Sidr Honey
                  </h3>
                </div>

                <Button
                  isIconOnly
                  className="bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold rounded-xl"
                  aria-label="Add to cart"
                >
                  <FaBasketShopping />
                </Button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}