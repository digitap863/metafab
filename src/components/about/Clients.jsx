"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

const clientLogos = [
  "/about/logo1.svg",
  "/about/logo2.svg",
  "/about/logo3.svg",
  "/about/logo4.svg",
  "/about/logo5.svg",
  "/about/logo6.svg",
  "/about/logo7.svg",
  "/about/logo8.svg",
  "/about/logo10.svg",
  "/about/logo11.svg",
];

const clientLogo = [
  "/about/logo11.svg",
  "/about/logo10.svg",
  "/about/logo8.svg",
  "/about/logo7.svg",
  "/about/logo6.svg",
  "/about/logo5.svg",
  "/about/logo4.svg",
  "/about/logo3.svg",
  "/about/logo2.svg",
  "/about/logo1.svg",
];

const Clients = () => {
  return (
    <section className="w-full bg-white pt-4 pb-10 lg:pt-24 lg:pb-24 px-4 md:px-10 lg:px-20 overflow-hidden">
      <div className="max-w-[1400px] w-full mx-auto flex flex-col items-center">
        
        {/* Header */}
        <h2 className="text-4xl md:text-5xl lg:text-[60px] font-bold uppercase tracking-tight mb-10 md:mb-20 text-center">
          <span className="text-[#071F07]">OUR </span>
          <span className="text-[#6E864A]">CLIENTS</span>
        </h2>

        {/* Swiper Carousel */}
        <div className="w-full">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView={2.3}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              480: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 60,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 80,
              },
            }}
            className="w-full flex items-center justify-center"
          >
            {clientLogos.map((logo, index) => (
              <SwiperSlide key={index} className="!flex justify-center items-center py-4">
                <div className="relative w-[120px] h-[60px] md:w-[150px] md:h-[80px] lg:w-[180px] lg:h-[90px] transition-transform hover:scale-105 duration-300">
                  <Image 
                    src={logo} 
                    alt={`Client Logo ${index + 1}`} 
                    fill 
                    className="object-contain" 
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>


          <div className="w-full">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView={2.5}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            breakpoints={{
              480: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 60,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 80,
              },
            }}
            className="w-full flex items-center justify-center"
          >
            {clientLogo.map((logo, index) => (
              <SwiperSlide key={index} className="!flex justify-center items-center py-4">
                <div className="relative w-[120px] h-[60px] md:w-[150px] md:h-[80px] lg:w-[180px] lg:h-[90px] transition-transform hover:scale-105 duration-300">
                  <Image 
                    src={logo} 
                    alt={`Client Logo ${index + 1}`} 
                    fill 
                    className="object-contain" 
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>



      </div>
    </section>
  );
};

export default Clients;
