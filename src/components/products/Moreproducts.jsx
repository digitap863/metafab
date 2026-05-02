"use client";

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
      <div className="absolute left-0 bottom-0 flex flex-col pr-24 z-10 transition-transform duration-300 group-hover:-translate-y-[60px]">
        <h3 className="text-black font-bold text-lg md:text-xl uppercase tracking-wide leading-tight line-clamp-2">{product.title}</h3>
        <p className="text-black/80 text-xs md:text-[13px] font-semibold mt-1">{product.price}</p>
      </div>

      <div className="absolute bottom-0 right-0 bg-[#0E1B0E] group-hover:bg-black text-white rounded-lg px-5 py-3 flex items-center justify-center gap-2.5 shadow-md shrink-0 transition-all duration-300 opacity-100 group-hover:opacity-0 group-hover:-translate-y-4 pointer-events-auto group-hover:pointer-events-none z-20">
        <span className="text-xs font-semibold tracking-wide">View</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-full bg-[#0E1B0E] group-hover:bg-black text-white rounded-lg py-3.5 flex items-center justify-center shadow-md transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto z-20">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  </Link>
);

const Moreproducts = ({ currentSlug }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/user/products");
        if (response.data.success) {
          const mappedData = response.data.data
            .filter(p => p.slug !== currentSlug)
            .map(p => ({
              ...p,
              title: p.name,
              id: p._id
            }));
          setProducts(mappedData.slice(0, 3));
        }
      } catch (error) {
        console.error("Error fetching more products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [currentSlug]);

  if (loading || products.length === 0) return null;

  return (
    <section className="w-full bg-[#FFFFFF] pt-2 pb-12 md:pt-2 md:pb-24 px-4 md:px-12 lg:px-20 mx-auto">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col items-center justify-center mb-12 md:mb-16" data-aos="fade-up" data-aos-delay="0">
          <h2 className="text-[#071F07] text-3xl md:text-5xl lg:text-6xl font-semibold uppercase tracking-tight text-center" data-aos="fade-up" data-aos-delay="200">
             More <span className='text-[#071F07]/90'> Products</span> 
          </h2>
        </div>

        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div key={product.id} data-aos="fade-up" data-aos-delay={index * 150}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="block md:hidden w-full overflow-visible">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={12}
            slidesPerView={1.15}
            centeredSlides={true}
            loop={products.length > 1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="w-full pb-8 !overflow-visible"
          >
            {products.map((product, index) => (
              <SwiperSlide key={`${product.id}-${index}`}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Moreproducts;
