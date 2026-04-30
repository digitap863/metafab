"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

const servicesList = [
    "Interior Projects",
    "Office Seating Systems",
    "Modular Workstations",
    "Chairs | Tables | Sofas",
];

const scrollImages = [
    "/img1.svg",
    "/img2.svg",
    "/img3.svg",
    "/img4.svg",
    "/img5.svg",
];

// Arrow icon component matching Livinor's arrow style
const ArrowIcon = () => (
    <svg
        width="25"
        height="25"
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

// Decorative vertical line with star/diamond icons
const DecorativeLine = () => (
    <div className="flex flex-col items-center gap-0 h-full">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0">
            <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z" fill="white" fillOpacity="0.8" />
        </svg>
        <div className="w-[1px] flex-1 bg-gradient-to-b from-white/90 via-white/60 to-white/90 min-h-[80px]" />
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0">
            <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z" fill="white" fillOpacity="0.8" />
        </svg>
    </div>
);

const Banner = () => {

    return (
        <section className="relative w-full md:h-[130vh] h-[80vh] overflow-visible">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {/* Desktop and Tablet Image */}
                <Image
                    src="/banner.svg"
                    alt="Modern office interior with elegant wooden desk and premium furniture"
                    fill
                    className="object-cover hidden sm:block"
                    priority
                />
                {/* Mobile Image */}
                <Image
                    src="/contactimgg.svg"
                    alt="Modern office interior with elegant wooden desk and premium furniture"
                    fill
                    className="object-cover block sm:hidden"
                    priority
                />
                {/* Dark overlay */}
                <div className="hidden md:absolute inset-0 bg-black/25" />
            </div>

            {/* Content Layer */}
            <div className="relative z-10 h-full flex flex-col justify-between px-6 sm:px-10 lg:px-16 xl:px-20 py-20 md:py-30 ">

                {/* ===== TOP SECTION: Heading (left) + Services (right) ===== */}
                <div className="flex items-start justify-between gap-7 flex-1">

                    {/* Left: Main Heading */}
                    <div className="flex items-end justify-end flex-1 pt-8 md:pt-16 lg:pt-20 text-right ">
                        <h1 className="text-white  text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold uppercase leading-[1.3] tracking-wide text-right" data-aos="fade-up" data-aos-duration="1000">
                            Workspaces That{" "}
                            <br className="hidden sm:block" />
                            Define <span className="text-[#F5C518]">{" "}
                            </span>
                            <br />
                            Performance
                        </h1>
                    </div>

                    {/* Right: Decorative line + Services */}
                    <div className="hidden md:flex items-stretch gap-3 pt-8 md:pt-16 lg:pt-20 self-stretch" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
                        <DecorativeLine />
                        <div className="flex flex-col justify-center ">
                            <div className="space-y-2 lg:space-y-3">
                                {servicesList.map((service, index) => (
                                    <p
                                        key={service}
                                        className="text-white/85 text-xs lg:text-sm font-light tracking-wide"
                                    >
                                        • {" "} {service}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ===== BOTTOM SECTION: Tagline + Contact Button (left) + Scrolling Images (right) ===== */}
                <div className="flex items-end justify-between gap-8">
                    {/* Bottom left: Decorative line + Tagline + Button */}
                    <div className="flex items-stretch gap-5 lg:gap-6" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600">
                        <div className="hidden sm:block">
                            <DecorativeLine />
                        </div>

                        <div className="flex flex-col justify-end gap-5 relative bottom-14 md:bottom-0 ">
                            <h2 className="text-white text-sm md:text-lg font-medium leading-relaxed uppercase ">
                                Designing Office <br /> Interiors{" "}
                                <span className="text-[#F1DFC2]">Since <br /> 2000</span>
                            </h2>

                            <Link
                                href="/contact"
                                className="group inline-flex items-center gap-3 border border-black rounded-full 
                  pl-5 pr-5 py-2 bg-[#FFD900]
                  hover:border-white hover:bg-white/10 
                  transition-all duration-300 w-fit"
                            >
                                <span className="text-black bg-[#FFD900] text-sm font-medium tracking-wide">
                                    Contact Now
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* ===== BOTTOM RIGHT: Swiper Continuous Scroll (overlaps below) ===== */}
                    <div className=" absolute bottom-0 right-0 lg:right-16 xl:right-20 
                        translate-y-[40%] z-20" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
                        <div className="relative w-[400px] xl:w-[600px] md:rounded-2xl border border-[#5C6B4F]/50 
                            bg-[#FFFFFF]/100 backdrop-blur-sm p-3 shadow-2xl overflow-hidden">
                            <Swiper
                                modules={[Autoplay, FreeMode]}
                                slidesPerView={2}
                                spaceBetween={12}
                                loop={true}
                                speed={3000}
                                freeMode={true}
                                autoplay={{
                                    delay: 0,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                className="w-full"
                            >
                                {scrollImages.map((src, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="relative w-full md:aspect-[4/3] aspect-[3.5/3] rounded-xl overflow-hidden ">
                                            <Image
                                                src={src}
                                                alt={`Project showcase ${index + 1}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>

                    {/* Mobile: Services list */}
                    <div className="hidden">
                        <div className="space-y-1.5">
                            {servicesList.map((service, index) => (
                                <p
                                    key={service}
                                    className="text-white/70 text-xs font-light"
                                >
                                    {index + 1}. {service}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
