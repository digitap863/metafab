"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// Arrow icon matching Livinor style
const ArrowIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.27539 6.25C11.0781 6.25 14.8809 6.25 18.7988 6.25C18.7988 10.0366 18.7988 13.8232 18.7988 17.7246C18.0898 17.7246 17.3809 17.7246 16.6504 17.7246C16.6343 15.1626 16.6182 12.6006 16.6016 9.96094C13.6851 12.8774 10.7686 15.7939 7.76367 18.7988C7.60753 18.7208 7.53591 18.6809 7.42068 18.5646C7.39333 18.5372 7.36597 18.5099 7.33778 18.4817C7.30888 18.4523 7.27999 18.4229 7.25021 18.3926C7.22014 18.3624 7.19007 18.3321 7.15909 18.301C7.06335 18.2047 6.96795 18.1081 6.87256 18.0115C6.8076 17.946 6.74263 17.8806 6.67763 17.8152C6.51855 17.6551 6.35978 17.4946 6.20117 17.334C6.26592 17.1905 6.33616 17.0892 6.44734 16.9781C6.47798 16.9473 6.50862 16.9165 6.54019 16.8847C6.57392 16.8513 6.60764 16.8178 6.64238 16.7834C6.67816 16.7475 6.71393 16.7117 6.75079 16.6747C6.87104 16.5543 6.99164 16.4342 7.11224 16.3142C7.19839 16.2281 7.28451 16.1419 7.37061 16.0558C7.5562 15.8701 7.74194 15.6847 7.92781 15.4994C8.19655 15.2314 8.46502 14.9632 8.73343 14.6949C9.1689 14.2597 9.6046 13.8246 10.0404 13.3897C10.4638 12.9672 10.8871 12.5447 11.3102 12.1219C11.3497 12.0825 11.3497 12.0825 11.39 12.0422C11.5961 11.8363 11.8021 11.6305 12.0082 11.4246C13.0182 10.4156 14.0286 9.40704 15.0391 8.39844C12.4771 8.38232 9.91504 8.36621 7.27539 8.34961C7.27539 7.65674 7.27539 6.96387 7.27539 6.25Z"
      fill="currentColor"
    />
  </svg>
);

// Diamond icon for "About Us" label
const DiamondIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 0L11.5 6.5L18 9L11.5 11.5L9 18L6.5 11.5L0 9L6.5 6.5L9 0Z"
      fill="none"
      stroke="#3D4A2F"
      strokeWidth="1.5"
    />
  </svg>
);

// Counter animation hook
function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [hasStarted, target, duration]);

  return { count, ref };
}

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
              <div className="flex items-center gap-2.5">
                <DiamondIcon />
                <span className="text-[#3D4A2F] text-sm font-medium tracking-wide">
                  About Us
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-[#1A1A1A] text-2xl sm:text-3xl md:text-[2rem] lg:text-[2.2rem] xl:text-[2.5rem] font-bold uppercase leading-[1.2] ">
                High-Performance Office Furniture Crafted For Comfort, Style,
                And Durability.
              </h2>

              {/* Buttons */}
              <div className="flex items-center gap-5 flex-wrap ">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 bg-[#FFD900] hover:bg-[#1A1A1A] text-black  border border-black
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
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/11] rounded-2xl overflow-hidden pt">
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
            />
            <StatCard
              value={300}
              suffix="+"
              label="Projects Delivered"
              sublabel="Office to offices, we deliver excellence"
              variant="light"
              className="border-b border-[#BFBFBF]"
            />

            {/* Bottom Row */}
            <StatCard
              value={200}
              suffix="+"
              label="Product Variants"
              sublabel="Built on Excellence"
              variant="light"
              className="border-r border-[#BFBFBF]"
            />
            <StatCard
              value={25}
              suffix="+"
              label="Corporate Clients"
              sublabel="People who love our designs"
              variant="dark"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
