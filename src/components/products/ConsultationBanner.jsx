"use client";

import React from "react";
import Link from "next/link";

const ConsultationBanner = () => {
  return (
    <section className="w-full bg-white py-8 md:py-14 px-4 md:px-10 lg:px-20 font-sora">
      <div className="max-w-[1360px] mx-auto">
        <div className="relative w-full rounded-3xl sm:rounded-[36px] overflow-hidden py-16 sm:py-24 px-6 sm:px-12 flex flex-col items-center justify-center text-center shadow-xl">
          {/* Dark Overlay with Background Office Image */}
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80 z-0" />

          {/* Foreground Content */}
          <div className="relative z-10 max-w-3xl flex flex-col items-center text-center">
            {/* Headline */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold uppercase tracking-tight text-white leading-tight">
              LET’S BUILD YOUR <span className="text-[#9AA978]">NEXT SPACE</span>
            </h2>

            {/* Subtitle */}
            <p className="text-gray-200 text-xs sm:text-sm font-medium tracking-wide mt-3 mb-8">
              Innovative design, Quality craftsmanship, Timeless comfort.
            </p>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="bg-[#9AA978] hover:bg-[#8A9968] text-[#071F07] font-semibold text-xs sm:text-sm px-7 py-3.5 rounded-2xl inline-flex items-center gap-1.5 transition-all shadow-lg hover:scale-105 active:scale-95"
            >
              <span>Get Consultation</span>
              <span>›</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationBanner;
