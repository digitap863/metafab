"use client"

import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useState, useEffect } from "react";
import api from "@/lib/api";
import Link from "next/link";

const ProductCard = ({ product }) => (
  <Link href={`/products/${product.slug}`} className="bg-[#6B854A] rounded-[16px] p-6 flex flex-col relative group transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl h-full block">
    {/* Category Tag */}
    <div className="bg-white rounded-md px-4 py-1.5 w-max absolute top-6 left-6 z-10 shadow-sm">
      <span className="text-black text-[11px] md:text-xs font-bold">{product.category}</span>
    </div>

    {/* Image Container */}
    <div className="h-64 sm:h-72 lg:h-80 w-full flex items-center justify-center mt-10 mb-6">
      <img 
        src={product.image} 
        alt={product.title} 
        className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105" 
      />
    </div>

    {/* Product Info & Button */}
    <div className="mt-auto relative w-full h-[52px]">
      {/* Title & Price (Moves up on hover) */}
      <div className="absolute left-0 bottom-0 flex flex-col pr-24 z-10 transition-transform duration-300 group-hover:-translate-y-[60px]">
        <h3 className="text-black font-bold text-lg md:text-xl uppercase tracking-wide leading-tight line-clamp-2">{product.title}</h3>
        <p className="text-black/80 text-xs md:text-[13px] font-semibold mt-1">{product.price}</p>
      </div>

      {/* Default Small Button (Fades out) */}
      <div className="absolute bottom-0 right-0 bg-[#0E1B0E] group-hover:bg-black text-white rounded-lg px-5 py-3 flex items-center justify-center gap-2.5 shadow-md shrink-0 transition-all duration-300 opacity-100 group-hover:opacity-0 group-hover:-translate-y-4 pointer-events-auto group-hover:pointer-events-none z-20">
        <span className="text-xs font-semibold tracking-wide">View</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Hover Full Button (Fades in) */}
      <div className="absolute bottom-0 left-0 w-full bg-[#0E1B0E] group-hover:bg-black text-white rounded-lg py-3.5 flex items-center justify-center shadow-md transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto z-20">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  </Link>
);

const Collection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/user/products");
        if (response.data.success) {
          const mappedData = response.data.data.map(p => ({
            ...p,
            title: p.name,
            id: p._id
          }));
          setProducts(mappedData.slice(0, 6)); // Show first 6 in collection
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return null;
  if (products.length === 0) return null;

  return (
    <section className="w-full bg-[#FFFFFF] py-12 md:py-24 px-4 md:px-12 lg:px-20 mx-auto">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-12 md:mb-16" data-aos="fade-up" data-aos-delay="0">
          <div className="flex items-center gap-2 mb-3" data-aos="fade-up" data-aos-delay="100">
            <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z" stroke="black" strokeWidth="1" fill="transparent"/>
            </svg>
            <span className="text-black text-xs md:text-sm font-semibold tracking-widest uppercase">Featured Products</span>
          </div>
          <h2 className="text-[#071F07] text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-center" data-aos="fade-up" data-aos-delay="200">
            Explore Our <span className='text-[#071F07]/90'> Collection</span> 
          </h2>
        </div>

        {/* Product Grid (Desktop/Tablet) */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div key={product.id} data-aos="fade-up" data-aos-delay={index * 150}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Mobile Swiper Layout */}
        <div className="block md:hidden w-full overflow-visible">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={12}
            slidesPerView={1.15}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="w-full pb-8 !overflow-visible"
          >
            {[...products, ...products].map((product, index) => (
              <SwiperSlide key={`${product.id}-${index}`}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-12 md:mt-16" data-aos="zoom-in" data-aos-delay="400">
          <button className="bg-[#FFD900] hover:bg-[#F0C800] border  text-black font-bold text-sm md:text-base px-8 py-3.5 rounded-full transition-colors shadow-sm">
            View More
          </button>
        </div>

      </div>
    </section>
  );
};

export default Collection;
