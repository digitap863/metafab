"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

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
      stroke="#0B120D"
      strokeWidth="1.5"
    />
  </svg>
);

const DesignStats = () => {
  return (
    <section className="w-full bg-[#A7B582] py-14 lg:py-32 px-4 md:px-10 lg:px-20 overflow-hidden">
      <div className="max-w-[1400px] w-full mx-auto flex flex-col">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center mb-8 lg:mb-20" data-aos="fade-up">
          <div className="flex items-center gap-2 mb-4">
            <DiamondIcon />
            <span className="text-[#0B120D] text-sm font-semibold tracking-wider">
              Our Stats
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-[70px] font-semibold uppercase tracking-tight">
            <span className="text-[#071F07]">QUALITY DESIGN</span>{" "}
            <span className="text-white">SPEAKS</span>
          </h2>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-4 gap-6 min-h-[600px] xl:min-h-[700px]">
          
          {/* Left Column (Images) - Spans 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Top Image */}
            <div className="relative w-full flex-1 min-h-[350px] rounded-2xl overflow-hidden" data-aos="fade-right">
              <Image 
                src="/about/img1.svg" 
                alt="Quality Design" 
                fill 
                className="object-cover" 
              />
              {/* Pause Button */}
              <div className="absolute bottom-5 right-5 bg-black/60 backdrop-blur-md rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-black/80 transition-colors">
                <svg width="12" height="14" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="4" height="16" rx="1.5" fill="white"/>
                  <rect x="10" width="4" height="16" rx="1.5" fill="white"/>
                </svg>
              </div>
            </div>
            
            {/* Bottom Image */}
            <div className="relative w-full flex-1 min-h-[350px] rounded-2xl overflow-hidden" data-aos="fade-right" data-aos-delay="200">
              <Image 
                src="/about/img2.svg" 
                alt="Spaces" 
                fill 
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30"></div>
              
              {/* Content overlaid on bottom image */}
              <div className="absolute inset-0 p-6 md:py-10 md:px-6  flex flex-col justify-between">
                <h3 className="text-white text-5xl sm:text-6xl lg:text-[70px] font-semibold leading-none tracking-tight">250+</h3>
                <div>
                  <h4 className="text-lg lg:text-xl font-semibold mb-3 uppercase tracking-wide text-white">Curated Collections</h4>
                  <p className="text-white/90 text-sm sm:text-base font-medium max-w-[90%] leading-relaxed">
                    Curated pieces crafted for every space, designed to bring warmth, harmony, and a personal touch that turns ordinary rooms into meaningful living experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column (25+) - Spans 1 col */}
          <div className="lg:col-span-1 flex flex-col py-0 lg:py-36">
            <div className="bg-[#071F07] text-white p-6 md:py-10 md:px-6 rounded-2xl flex-1 flex flex-col" data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-5xl sm:text-6xl font-semibold mb-auto pt-2">25+</h3>
              <div>
                <h4 className="text-lg lg:text-xl font-semibold mb-3 uppercase tracking-wide">Expert Designers</h4>
                <p className="text-white/70 text-sm leading-relaxed font-medium">Creative minds dedicated to crafting timeless and elegant spaces.</p>
              </div>
            </div>
          </div>

          {/* Right Column (500+ and 1200+) - Spans 1 col */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <div className="bg-[#6E864A] text-white p-6 md:py-10 md:px-6 rounded-2xl flex-1 flex flex-col" data-aos="fade-left" data-aos-delay="400">
              <h3 className="text-5xl sm:text-6xl font-semibold mb-auto pt-2">500+</h3>
              <div>
                <h4 className="text-lg lg:text-xl font-semibold mb-3 uppercase tracking-wide">Spaces Styled</h4>
                <p className="text-white/90 text-sm leading-relaxed font-medium">Turning ordinary places into inspiring modern environments.</p>
              </div>
            </div>

            <div className="bg-white text-[#0B120D] p-6 md:py-10 md:px-6 rounded-2xl flex-1 flex flex-col" data-aos="fade-left" data-aos-delay="500">
              <h3 className="text-5xl sm:text-6xl font-semibold mb-auto pt-2">1200+</h3>
              <div>
                <h4 className="text-lg lg:text-xl font-semibold mb-3 uppercase tracking-wide">Design Elements</h4>
                <p className="text-[#0B120D]/80 text-sm leading-relaxed font-medium">Crafted decor pieces bringing character to every corner.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Mobile Layout */}
        <div className="flex flex-col md:hidden gap-4 w-full" data-aos="fade-up">
          {/* Top Image (Standalone) */}
          <div className="relative w-full min-h-[300px] rounded-2xl overflow-hidden">
            <Image 
              src="/about/img1.svg" 
              alt="Quality Design" 
              fill 
              className="object-cover" 
            />
            {/* Pause Button */}
            <div className="absolute bottom-5 right-5 bg-black/60 backdrop-blur-md rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-black/80 transition-colors">
              <svg width="12" height="14" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="4" height="16" rx="1.5" fill="white"/>
                <rect x="10" width="4" height="16" rx="1.5" fill="white"/>
              </svg>
            </div>
          </div>

          {/* Swiper for the Rest */}
          <div className="w-full">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={16}
              slidesPerView={1.2}
              className="w-full !overflow-visible"
            >
              {/* Slide 1: 250+ Card */}
              <SwiperSlide>
                <div className="relative w-full h-[200px] rounded-2xl overflow-hidden ">
                  <Image 
                    src="/about/img2.svg" 
                    alt="Spaces" 
                    fill 
                    className="object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30"></div>
                  
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <h3 className="text-white text-5xl font-medium leading-none tracking-tight">250+</h3>
                    <div>
                      <h4 className="text-lg font-semibold uppercase tracking-wide text-white mb-0">Curated Collections</h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* Slide 2: 25+ */}
              <SwiperSlide>
                <div className="bg-[#071F07] text-white p-6 rounded-2xl h-[200px] flex flex-col justify-between border border-white/10">
                  <h3 className="text-5xl font-medium pt-2">25+</h3>
                  <div>
                    <h4 className="text-lg font-semibold uppercase tracking-wide mb-0">Expert Designers</h4>
                  </div>
                </div>
              </SwiperSlide>

              {/* Slide 3: 500+ */}
              <SwiperSlide>
                <div className="bg-[#6E864A] text-white p-6 rounded-2xl h-[200px] flex flex-col justify-between border border-white/10">
                  <h3 className="text-5xl font-medium pt-2">500+</h3>
                  <div>
                    <h4 className="text-lg font-semibold uppercase tracking-wide mb-0">Spaces Styled</h4>
                  </div>
                </div>
              </SwiperSlide>

              {/* Slide 4: 1200+ */}
              <SwiperSlide>
                <div className="bg-white text-[#0B120D] p-6 rounded-2xl h-[200px] flex flex-col justify-between border border-black/5">
                  <h3 className="text-5xl font-medium pt-2">1200+</h3>
                  <div>
                    <h4 className="text-lg font-semibold uppercase tracking-wide mb-0">Design Elements</h4>
                  </div>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignStats;
