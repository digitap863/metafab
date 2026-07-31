"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

import { useState, useEffect } from "react";
import api from "@/lib/api";

const staticLogos = [
  { logo: "/about/kitex.jpg", name: "Kitex" },
  { logo: "/about/metafab_logo.jpg", name: "Metafab" },
];

const Clients = () => {
  const [logos, setLogos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const response = await api.get("/user/logos");
        if (response.data.success) {
          setLogos(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching logos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLogos();
  }, []);

  if (loading) return null;

  // Merge static logos with API logos (static always first)
  const allLogos = [
    ...staticLogos,
    ...logos,
  ];

  const row1Logos = allLogos;
  const row2Logos = [...allLogos].reverse();
  return (
    <section className="w-full bg-white pt-4 pb-10 lg:pt-24 lg:pb-24 px-4 md:px-10 lg:px-20 overflow-hidden">
      <div className="max-w-[1400px] w-full mx-auto flex flex-col items-center">
        
        {/* Header */}
        <h2 className="text-4xl md:text-5xl lg:text-[60px] font-bold uppercase tracking-tight mb-10 md:mb-20 text-center" data-aos="fade-up">
          <span className="text-[#071F07]">OUR </span>
          <span className="text-[#6E864A]">CLIENTS</span>
        </h2>

        {/* Swiper Carousel */}
        <div className="w-full" data-aos="fade-right" data-aos-delay="200">
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
            {row1Logos.map((logo, index) => (
              <SwiperSlide key={index} className="!flex justify-center items-center py-4">
                <div className="flex items-center justify-center w-[110px] md:w-[140px] lg:w-[160px] transition-transform hover:scale-105 duration-300">
                  <img
                    src={logo.logo}
                    alt={logo.name || `Client Logo ${index + 1}`}
                    className="max-w-full max-h-[70px] md:max-h-[80px] object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>


          <div className="w-full" data-aos="fade-left" data-aos-delay="400">
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
            {row2Logos.map((logo, index) => (
              <SwiperSlide key={index} className="!flex justify-center items-center py-4">
                <div className="flex items-center justify-center w-[110px] md:w-[140px] lg:w-[160px] transition-transform hover:scale-105 duration-300">
                  <img
                    src={logo.logo}
                    alt={logo.name || `Client Logo ${index + 1}`}
                    className="max-w-full max-h-[70px] md:max-h-[80px] object-contain"
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
