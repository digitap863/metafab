"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const certLogos = [
  { id: 1, src: "/logo1.svg", alt: "Certification 1" },
  { id: 2, src: "/logo2.svg", alt: "Certification 2" },
  { id: 3, src: "/logo3.svg", alt: "Certification 3" },
  { id: 4, src: "/logo4.svg", alt: "Certification 4" },
  { id: 5, src: "/logo5.svg", alt: "Certification 5" },
  { id: 6, src: "/certificates/cert1.png", alt: "Certificate 1" },
  { id: 7, src: "/certificates/cert2.png", alt: "Certificate 2" },
  { id: 8, src: "/certificates/cert3.png", alt: "Certificate 3" },
  { id: 9, src: "/certificates/cert4.png", alt: "Certificate 4" },
  { id: 10, src: "/certificates/cert5.png", alt: "Certificate 5" },
  { id: 11, src: "/certificates/cert6.png", alt: "Certificate 6" },
  { id: 12, src: "/certificates/cert7.png", alt: "Certificate 7" },
  { id: 13, src: "/certificates/cert8.png", alt: "Certificate 8" },
  { id: 14, src: "/certificates/cert9.png", alt: "Certificate 9" },
  { id: 15, src: "/certificates/cert10.png", alt: "Certificate 10" },


];

const Certified = () => {
  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden flex flex-col items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bggg.png')" }}
      >
        <div className="absolute inset-0 bg-[#071F07]/40 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-12 lg:px-20 flex flex-col items-center text-center">
        {/* Header */}
        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-duration="1000">
          <div className="flex items-center gap-2 mb-4">
            <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z" stroke="white" strokeWidth="1" fill="transparent" />
            </svg>
            <span className="text-white text-xs md:text-sm font-medium tracking-widest uppercase">Why Metafab</span>
          </div>

          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium tracking-tight uppercase mb-12 lg:mb-20 drop-shadow-md">
            Certified Excellence
          </h2>
        </div>

        {/* Responsive Swiper Carousel for Desktop & Mobile */}
        <div className="w-full overflow-hidden mt-4 lg:mt-8" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2.2}
            loop={true}
            speed={6000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              480: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 60,
              },
            }}
            className="w-full flex items-center justify-center py-4 [&_.swiper-wrapper]:!ease-linear"
          >
            {certLogos.map((item) => (
              <SwiperSlide key={item.id} className="!flex justify-center items-center h-24">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-14 sm:h-16 md:h-20 max-w-[140px] md:max-w-[180px] object-contain mx-auto brightness-0 invert opacity-90 hover:opacity-100 transition-all hover:scale-110 duration-300 drop-shadow-sm"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Certified;
