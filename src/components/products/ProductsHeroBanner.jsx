"use client";

import React from "react";
import Image from "next/image";

const categoryCards = [
  {
    id: "modular-workstation",
    name: "MODULAR WORKSTATION",
    filterKey: "Modular Workstation",
    image: "/product/categories/Workstation.png",
  },
  {
    id: "modular-desking",
    name: "MODULAR DESKING",
    filterKey: "Modular Desking",
    image: "/product/categories/Modular_Desking.png",
  },
  {
    id: "conference-tables",
    name: "CONFERENCE TABLES",
    filterKey: "Conference Table",
    image: "/product/categories/Conference__Table.png",
  },
  {
    id: "tables",
    name: "TABLES",
    filterKey: "Tables",
    image: "/product/categories/Table.png",
  },
  {
    id: "chairs",
    name: "CHAIRS",
    filterKey: "Chairs",
    image: "/product/categories/chairs.png",
  },
  {
    id: "furniture",
    name: "FURNITURE",
    filterKey: "Furniture",
    image: "/product/categories/furniture.png",
  },
];

const sidebarItems = [
  "Modular Workstations",
  "Modular Desking",
  "Conference Tables",
  "Chairs & Tables",
  "Furnitures",
];

const ProductsHeroBanner = ({ selectedCategory, onSelectCategory, categoryCounts = {} }) => {
  return (
    <section className="w-full bg-[#9AA978] pt-24 sm:pt-28 md:pt-36 lg:pt-40 pb-10 sm:pb-12 lg:pb-16 px-3 sm:px-6 md:px-8 lg:px-16 overflow-hidden relative font-sora">
      <div className="max-w-[1440px] mx-auto">
        {/* Top Hero Content Layout: Left Sparkle Sidebar + Main Title & Description */}
        <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8 lg:gap-14 mb-8 sm:mb-10 lg:mb-14">
          
          {/* Sparkle Sidebar / Category Bullet List (Hidden on Mobile) */}
          <div 
            className="hidden lg:flex items-stretch gap-3 sm:gap-4 shrink-0 lg:pt-4 w-auto"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            {/* Sparkle Line Axis */}
            <div className="flex flex-col items-center py-1 shrink-0">
              {/* Top Sparkle Icon */}
              <svg width="14" height="14" viewBox="0 0 12 12" fill="white" className="shrink-0 animate-pulse">
                <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z" />
              </svg>
              
              {/* Vertical Line */}
              <div className="w-[1.5px] bg-white/70 flex-1 my-1" />
              
              {/* Bottom Sparkle Icon */}
              <svg width="14" height="14" viewBox="0 0 12 12" fill="white" className="shrink-0 animate-pulse">
                <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z" />
              </svg>
            </div>

            {/* Bullet Point List (Flex Wrap on Mobile, Column on Desktop) */}
            <ul className="flex flex-row flex-wrap lg:flex-col justify-between py-1 gap-x-4 gap-y-2 lg:gap-0 lg:space-y-3 text-white text-[11px] sm:text-xs md:text-sm font-semibold tracking-wide">
              {sidebarItems.map((item, idx) => (
                <li key={idx} className="flex items-center gap-1.5 sm:gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white inline-block shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Area: Big Title & Paragraph */}
          <div className="flex-1 w-full">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[110px] xl:text-[125px] font-black leading-none tracking-tight uppercase flex flex-wrap items-baseline">
              <span
                className="inline-block text-[#153418] mr-2 sm:mr-4"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                OUR
              </span>
              <span
                className="inline-block text-white drop-shadow-sm"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                PRODUCTS
              </span>
            </h1>

            {/* Subtitle Paragraph */}
            <p
              className="text-black/85 text-xs sm:text-sm md:text-base max-w-5xl leading-relaxed mt-3 sm:mt-5 font-normal"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="650"
            >
              Explore our wide range of premium office furniture solutions designed for comfort, functionality and modern workspaces. 
              Every product is crafted with precision, innovation and quality to create spaces that inspire productivity and well-being.
            </p>
          </div>
        </div>

        {/* 6 Category Showcase Cards Row */}
        <div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 lg:gap-4"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          {categoryCards.map((card) => {
            return (
              <div
                key={card.id}
                onClick={() => onSelectCategory(card.filterKey)}
                className="bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group flex flex-col justify-between hover:-translate-y-1 border border-white/40"
              >
                {/* Product Cutout Image Container */}
                <div className="h-28 sm:h-36 md:h-44 w-full p-2.5 sm:p-3 flex items-center justify-center bg-white relative overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Card Title */}
                <div className="p-2 sm:p-3 text-center bg-white border-t border-gray-100 flex flex-col items-center justify-center min-h-[44px] sm:min-h-[52px]">
                  <h3 className="text-[#153418] font-extrabold text-[10px] sm:text-xs tracking-wider uppercase leading-snug line-clamp-2">
                    {card.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProductsHeroBanner;
