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
      stroke="#ffffff"
      strokeWidth="1.5"
    />
  </svg>
);

const listItems = [
  { icon: "/ico1.svg", text: "ADVANCED MANUFACTURING TECHNOLOGY" },
  { icon: "/ico2.svg", text: "COMPETITIVE PRICING" },
  { icon: "/ico3.svg", text: "SOUTH INDIA DEALER NETWORK" },
  { icon: "/ico4.svg", text: "EXTRA WARRANTY" },
  { icon: "/ico5.svg", text: "TIMELY DELIVERY" },
];

const Trust = () => {
  return (
    <section className="relative w-full py-20 lg:py-32 px-6 md:px-10 lg:px-20 overflow-hidden min-h-[800px] flex items-center">
      
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/about/bgg.png" 
          alt="Office Background" 
          fill 
          className="object-cover"
        />
        {/* <div className="absolute inset-0 bg-black/80"></div> */}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto flex flex-col justify-between h-full gap-16 lg:gap-24">
        
        {/* Top Section */}
        <div className="flex flex-col items-start gap-6">
          <div className="flex items-center gap-3">
            <DiamondIcon />
            <span className="text-white text-sm font-semibold tracking-wider">
              Why Metafab
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[66px] font-semibold text-white uppercase leading-[1.1] tracking-tight">
            WHY<br />INDUSTRY LEADERS<br />TRUST US
          </h2>
          <button className="bg-[#FFD900] text-[#071F07] text-sm md:text-base font-bold py-3.5 px-10 rounded-full hover:bg-[#E5C300] transition-colors mt-2">
            View All
          </button>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 lg:gap-10 pl-0 lg:pl-[10%]">
          
          {/* Left List */}
          <div className="flex flex-col gap-6 lg:gap-8 w-full lg:w-3/5">
            {listItems.map((item, index) => (
              <div key={index} className="flex items-center gap-6 group cursor-default">
                <div className="relative w-10 h-10 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <Image 
                    src={item.icon} 
                    alt={item.text} 
                    fill 
                    className="object-contain" 
                  />
                </div>
                <span className="text-white/90 text-sm md:text-2xl font-medium tracking-wide uppercase">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* Right Card */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-2xl flex items-center justify-center relative w-full sm:w-[320px] lg:w-[380px] aspect-square lg:-mt-20">
            <div className="relative w-[85%] h-[85%] flex items-center justify-center">
              <Image 
                src="/about/circlee.svg" 
                alt="25+ Experts" 
                fill 
                className="object-contain animate-[spin_10s_linear_infinite] " 
              />
              {/* Overlay text in case circlee.svg is just the arrow graphics */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center mt-2">
                 <span className="text-[#071F07] text-3xl lg:text-4xl font-bold leading-none mb-1">25+</span>
                 <span className="text-[#071F07] text-sm lg:text-[15px] font-bold uppercase tracking-widest">EXPERTS</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Trust;
