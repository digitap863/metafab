"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useCountUp } from "@/hooks/useCountUp";

const DiamondIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 0L14 7L7 14L0 7L7 0Z" fill="#3D4A2F" />
  </svg>
);

const StatCard = ({ value, suffix = "", label, sublabel, variant = "light", className = "" }) => {
  const { count, ref } = useCountUp(value, 2200);

  const isOlive = variant === "olive";
  const isDark = variant === "dark";

  return (
    <div
      ref={ref}
      className={`p-6 sm:p-7 lg:p-8 flex flex-col justify-end items-end text-right h-full gap-1 sm:gap-2 ${
        isOlive
          ? "bg-[#5C6B3F] text-white"
          : isDark
          ? "bg-[#1A2E1A] text-white"
          : "bg-[#B5BC8D] text-[#1A1A1A]"
      } ${className}`}
    >
      <h3
        className={`text-5xl sm:text-6xl lg:text-[4.5rem] font-medium tracking-tight leading-none ${
          isOlive || isDark ? "text-white" : "text-[#1A1A1A]"
        }`}
      >
        {count}
        {suffix}
      </h3>
      <div className="mt-1 sm:mt-2">
        <h4
          className={`text-sm sm:text-base lg:text-xl font-semibold uppercase tracking-wide leading-tight mb-1.5 sm:mb-2 max-w-[160px] ml-auto ${
            isOlive || isDark ? "text-white" : "text-[#1A1A1A]"
          }`}
        >
          {label}
        </h4>
        <p
          className={`text-[10px] sm:text-xs lg:text-[13px] leading-snug max-w-[180px] ml-auto font-light ${
            isOlive || isDark ? "text-white/80" : "text-[#6B6B6B]"
          }`}
        >
          {sublabel}
        </p>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section className="w-full bg-[#B5BC8D] pt-24 pb-14 md:pt-40 md:pb-28 ">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10">
        {/* Main Grid: Left content + Right stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-14">
          {/* ===== LEFT COLUMN ===== */}
          <div className="flex flex-col gap-8 lg:gap-10">
            {/* Top Left: Text + Buttons */}
            <div className="flex flex-col gap-6 sm:gap-8 md:pb-10">
              {/* About Us label */}
              <div className="flex items-center gap-2.5" data-aos="fade-up" data-aos-duration="800">
                <DiamondIcon />
                <span className="text-[#3D4A2F] text-sm font-medium tracking-wide">
                  About Us
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-[#1A1A1A] text-2xl sm:text-3xl md:text-[2rem] lg:text-[2.2rem] xl:text-[2.5rem] font-bold uppercase leading-[1.2]" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                High-Performance Office Furniture Crafted For Comfort, Style,
                And Durability.
              </h2>

              {/* Buttons */}
              <div className="flex items-center gap-5 flex-wrap" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 bg-[#FFD900] text-black  border border-black
                    rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300"
                >
                  <span>Explore Collection</span>
                </Link>

                <Link
                  href="/projects"
                  className="text-[#3D4A2F] text-sm font-medium tracking-wide hover:text-[#2D3A1F] 
                    transition-colors duration-300 underline underline-offset-4 decoration-[#3D4A2F]/40 
                    hover:decoration-[#3D4A2F]"
                >
                  Start Your Project
                </Link>
              </div>
            </div>

            {/* Bottom Left: Office Image */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/11] rounded-2xl overflow-hidden pt" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
              <Image
                src="/abouimg.png"
                alt="Modern decorated office room with elegant interior design"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* ===== RIGHT COLUMN: Stats Grid ===== */}
          <div className="grid grid-cols-2 grid-rows-2 h-full">
            {/* Top Row */}
            <StatCard
              value={20}
              label="Years of Expertise"
              sublabel="Over a decade of transforming spaces"
              variant="olive"
              className="border-b border-r border-[#BFBFBF]"
              data-aos="fade-up"
              data-aos-delay="100"
            />
            <StatCard
              value={300}
              suffix="+"
              label="Projects Delivered"
              sublabel="Office to offices, we deliver excellence"
              variant="light"
              className="border-b border-[#BFBFBF]"
              data-aos="fade-up"
              data-aos-delay="200"
            />

            {/* Bottom Row */}
            <StatCard
              value={200}
              suffix="+"
              label="Product Variants"
              sublabel="Built on Excellence"
              variant="light"
              className="border-r border-[#BFBFBF]"
              data-aos="fade-up"
              data-aos-delay="300"
            />
            <StatCard
              value={25}
              suffix="+"
              label="Corporate Clients"
              sublabel="People who love our designs"
              variant="dark"
              data-aos="fade-up"
              data-aos-delay="400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
