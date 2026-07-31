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

const timelineData = [
  { year: "2014", title: "HUMBLE\nBEGINNINGS" },
  { year: "2017", title: "BRAND\nEXPANSION" },
  { year: "2020", title: "DIGITAL\nTRANSITION" },
  { year: "2025", title: "DESIGN\nLEGACY" },
];

const Story = () => {
  return (
    <section className="w-full bg-white py-20 lg:py-32 px-4 md:px-10 lg:px-20 overflow-hidden">
      <div className="max-w-[1400px] w-full mx-auto flex flex-col">
        
        {/* Header Section */}
        <div className="flex flex-col items-start mb-6 lg:mb-16" data-aos="fade-right">
          <div className="flex items-center gap-2 mb-4">
            <DiamondIcon />
            <span className="text-[#071F07] text-sm font-semibold tracking-wider">
              Our Story
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-[70px] font-semibold uppercase tracking-tight">
            <span className="text-[#071F07]">CREATING BEAUTIFUL </span>
            <span className="text-[#6E864A]">SPACES</span>
          </h2>
        </div>

        {/* Images Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-6 gap-4 mb-6">
          
          {/* Left Image */}
          <div className="relative w-full aspect-[4/3] lg:aspect-[2.5/2] rounded-2xl overflow-hidden shadow-sm md:block hidden" data-aos="fade-right" data-aos-delay="200">
            <Image 
              src="/about/img3.svg" 
              alt="Office space with two chairs" 
              fill 
              className="object-cover" 
            />
          </div>

          {/* Right Image */}
          <div className="relative w-full aspect-[4/3] lg:aspect-[2.5/2] rounded-2xl overflow-hidden shadow-sm" data-aos="fade-left" data-aos-delay="400">
            <Image 
              src="/about/img4.svg" 
              alt="Office space with indoor tree" 
              fill 
              className="object-cover" 
            />
            {/* Pause Button (Top Left) */}
            <div className="absolute top-5 left-5 bg-black/60 backdrop-blur-md rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-black/80 transition-colors">
              <svg width="12" height="14" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="4" height="16" rx="1.5" fill="white"/>
                <rect x="10" width="4" height="16" rx="1.5" fill="white"/>
              </svg>
            </div>
          </div>

        </div>

        {/* Timeline Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-3 ">
          {timelineData.map((item, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-[#A7B582] md:bg-[#6E864A] rounded-xl md:rounded-2xl px-6 py-5 md:p-8 flex flex-row md:flex-col items-center md:items-start justify-start md:justify-between gap-6 md:gap-0 min-h-0 md:min-h-[120px] lg:min-h-[220px] shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold md:font-semibold text-[#0B120D] md:text-[#071F07]">
                {item.year}
              </h3>
              <h4 className="text-sm md:text-lg lg:text-xl font-bold md:font-semibold text-[#0B120D] md:text-[#071F07] uppercase leading-snug md:whitespace-pre-line">
                {item.title}
              </h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Story;
