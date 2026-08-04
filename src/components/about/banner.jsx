"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

const servicesList = [
  "INTERIOR PROJECTS",
  "OFFICE SEATING SYSTEMS",
  "MODULAR WORKSTATIONS",
  "CHAIRS | TABLES | SOFAS",
];

const DecorativeLine = () => (
  <div className="flex flex-col items-center gap-0 h-full">
    <svg width="16" height="16" viewBox="0 0 12 12" fill="none" className="shrink-0">
      <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z" fill="white" fillOpacity="1" />
    </svg>
    <div className="w-[1.5px] flex-1 bg-white min-h-[120px]" />
    <svg width="16" height="16" viewBox="0 0 12 12" fill="none" className="shrink-0">
      <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z" fill="white" fillOpacity="1" />
    </svg>
  </div>
);

const AboutBanner = () => {
  const usRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    // "ABOUT" fades in and slides up
    tl.from(aboutRef.current, {
      y: 80,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    // "US" slides up from below into position
    tl.from(usRef.current, {
      y: "100%",
      duration: 0.9,
      ease: "power3.out",
    }, "-=0.3");
  }, []);

  return (

    <section>
      <div className="w-full bg-[#A7B582] pt-28 pb-14 px-4 md:px-10 lg:px-20 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="max-w-[1400px] w-full flex gap-10">

          <div
            className="hidden lg:flex w-[30%] items-stretch gap-2 py-4 self-stretch justify-center pr-6"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <DecorativeLine />
            <div className="flex flex-col justify-center">
              <div className="space-y-4">
                {servicesList.map((service) => (
                  <p
                    key={service}
                    className="text-white text-sm md:text-base lg:text-[17px] font-bold tracking-wide uppercase flex items-center gap-2"
                  >
                    <span className="text-white text-lg leading-none">•</span> {service}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className=" w-full mx-auto flex flex-col items-start text-left w-[71%]">
            {/* Main Heading */}
            <h1
              className="text-[12vw] sm:text-[12vw] md:text-[100px] lg:text-[130px] font-bold leading-none tracking-tighter mb-4 md:mb-12 flex flex-wrap items-baseline gap-[0.2em]"
            >
              <span ref={aboutRef} className="text-[#071F07] inline-block">ABOUT</span>
              <span className="inline-block overflow-hidden">
                <span ref={usRef} className="text-white inline-block">US</span>
              </span>
            </h1>

            {/* Subheading */}
            <h2
              className="text-[#071F07] text-lg sm:text-xl md:text-2xl lg:text-[28px] font-bold uppercase leading-snug lg:leading-tight tracking-wide max-w-[1100px] mb-4 md:mb-8"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              We craft modern furniture and decor that combine comfort, elegance, and creativity to transform everyday spaces into inspiring environments.
            </h2>

            {/* Paragraph text */}
            <p
              className="text-[#071F07]/60 text-sm sm:text-base md:text-lg max-w-[850px] leading-relaxed font-medium"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              Every workspace has a purpose—we bring it to life. We design refined office interiors that blend comfort, functionality, and contemporary elegance.
            </p>
          </div>
        </div>
      </div>

      {/* Full-width hero image with overlaid text — matches homepage style */}
      <div
        className="w-full h-[80vh] sm:h-[85vh] md:h-[100vh] relative overflow-hidden"
        data-aos="fade-in"
        data-aos-duration="1200"
        data-aos-delay="300"
      >
        {/* Background image */}
        <Image
          src="/about/banner.svg"
          alt="Designs Your Thoughts"
          fill
          className="object-cover object-center"
        />

        {/* Subtle dark overlay so text pops */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Inner layout: left headline + right services list */}
        <div className="absolute inset-0 px-4 sm:px-8 md:px-12 lg:px-20 flex items-start md:items-center justify-between gap-6 pt-10 md:pt-0">

          {/* Left: Big headline — responsive at all breakpoints */}
          <h2
            className="text-[10vw] sm:text-[12vw] md:text-[10vw] lg:text-[9vw] xl:text-[8vw] 2xl:text-[7vw] font-bold leading-[0.9] tracking-tighter uppercase text-white drop-shadow-lg"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="500"
          >
            <span className="block">DESIGNS</span>
            <span className="block">YOUR</span>
            <span className="block">THOUGHT</span>
          </h2>

          {/* Right: Decorative line + bullet services list — exactly like homepage hero */}
          <div
            className="hidden lg:flex items-stretch gap-3 self-center h-[200px] shrink-0"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="600"
          >
            <DecorativeLine />
            <div className="flex flex-col justify-center space-y-4">
              {servicesList.map((service) => (
                <p
                  key={service}
                  className="text-white text-sm lg:text-[15px] font-semibold tracking-wide uppercase flex items-center gap-2"
                >
                  <span className="text-white text-lg leading-none">•</span>
                  {service}
                </p>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
