"use client";

import React from "react";
import Image from "next/image";

const DiamondIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 0L11.5 6.5L18 9L11.5 11.5L9 18L6.5 11.5L0 9L6.5 6.5L9 0Z"
      fill="none"
      stroke="#071F07"
      strokeWidth="1.5"
    />
  </svg>
);

const awardsData = [
  {
    year: "2018",
    title: "BEST INTERIOR CONCEPT",
    desc: "Recognized for creating timeless living spaces that blend warmth, comfort, and modern aesthetics. Our team's focus on natural textures and balanced lighting turned ordinary interiors into soulful homes.",
    isActive: true
  },
  {
    year: "2019",
    title: "ECO HOME INNOVATION AWARD",
    desc: "Honored for pioneering sustainable design practices by using eco-friendly materials, recycled woods, and organic finishes that brought nature's serenity into every home.",
    isActive: false
  },
  {
    year: "2021",
    title: "OUTSTANDING SPACE STYLING",
    desc: "Awarded for our innovative approach to styling compact spaces combining smart layouts, soothing tones, and custom decor elements that maximize both beauty and function.",
    isActive: false
  },
  {
    year: "2023",
    title: "DECOR BRAND OF THE YEAR",
    desc: "Celebrated for redefining contemporary home styling with handcrafted pieces that fuse artistry, culture, and modern minimalism, inspiring homes that feel truly personal.",
    isActive: false
  }
];

const AwardShowcase = () => {
  return (
    <section className="w-full bg-white py-20 lg:py-32 px-6 md:px-10 lg:px-20 overflow-hidden">
      <div className="max-w-[1400px] w-full mx-auto flex flex-col">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-20">
          <div className="flex items-center gap-2 mb-4">
            <DiamondIcon />
            <span className="text-[#071F07] text-sm font-semibold tracking-wider">
              Award Showcase
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[70px] font-semibold uppercase tracking-tight flex flex-col items-center leading-tight lg:leading-[1.1]">
            <span className="text-[#071F07]">CELEBRATING CREATIVE</span>
            <span className="text-[#6E864A]">EXCELLENCE</span>
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          
          {/* Left Column (Image) */}
          <div className="lg:col-span-1 relative w-full rounded-2xl overflow-hidden shadow-sm min-h-[500px] lg:min-h-full">
            <Image 
              src="/about/flower.svg" 
              alt="Flower in a vase" 
              fill 
              className="object-cover" 
            />
          </div>

          {/* Right Column (Awards List) */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            {awardsData.map((award, index) => (
              <div 
                key={index} 
                className="p-6 lg:py-8 lg:px-10 flex flex-col gap-2 bg-transparent hover:bg-[#A7B582] transition-colors duration-300 cursor-default"
              >
                <h3 className="text-2xl lg:text-[32px] font-semibold text-[#071F07] tracking-tight">
                  {award.year} — {award.title}
                </h3>
                <p className="text-[#071F07]/80 text-sm md:text-base leading-relaxed font-medium">
                  {award.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AwardShowcase;
