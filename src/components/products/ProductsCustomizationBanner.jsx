"use client";

import React from "react";

const featureCards = [
  {
    id: 1,
    title: "CUSTOM DESIGN\nSOLUTIONS",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* Ruler (top-left to bottom-right) */}
        <path d="M5 3l16 16-2.5 2.5L2.5 5.5 5 3z" />
        <line x1="7" y1="5" x2="8.5" y2="6.5" />
        <line x1="10" y1="8" x2="11.5" y2="9.5" />
        <line x1="13" y1="11" x2="14.5" y2="12.5" />
        <line x1="16" y1="14" x2="17.5" y2="15.5" />
        <line x1="19" y1="17" x2="20.5" y2="18.5" />

        {/* Pencil (bottom-left to top-right) */}
        <path d="M2.5 21.5l3.5-1.5L18 8l-2-2L4 18l-1.5 3.5z" />
        <line x1="14.5" y1="4.5" x2="17.5" y2="7.5" />
        <line x1="16.5" y1="2.5" x2="19.5" y2="5.5" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "HIGH-QUALITY\nMATERIALS",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "TURNKEY PROJECT\nEXECUTION",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="16" height="20" x="4" y="2" rx="2" />
        <path d="M9 22v-4h6v4" />
        <path d="M8 6h.01" />
        <path d="M16 6h.01" />
        <path d="M8 10h.01" />
        <path d="M16 10h.01" />
        <path d="M8 14h.01" />
        <path d="M16 14h.01" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "AFTER-SALES\nSUPPORT",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
      </svg>
    ),
  },
];

const ProductsCustomizationBanner = () => {
  return (
    <section className="w-full bg-white py-4 sm:py-6 lg:py-10 px-3 sm:px-6 md:px-8 lg:px-16 font-sora">
      <div className="max-w-[1440px] mx-auto">
        {/* 4 Horizontal Olive Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {featureCards.map((card) => (
            <div
              key={card.id}
              className="bg-[#6B854A] text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-7 flex items-center gap-3.5 sm:gap-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="shrink-0 p-2 sm:p-2.5 bg-white/10 rounded-xl">
                {card.icon}
              </div>

              <h4 className="font-extrabold text-[11px] sm:text-xs md:text-sm tracking-wider uppercase leading-snug whitespace-pre-line">
                {card.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsCustomizationBanner;
