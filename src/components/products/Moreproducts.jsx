"use client";

import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from "react";
import api from "@/lib/api";
import Link from "next/link";

const ProductCard = ({ product }) => (
  <Link
    href={`/products/${product.slug}`}
    className="bg-[#9AA978] rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col justify-between h-[350px] sm:h-[420px] relative shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 group border border-[#9AA978] block font-sora overflow-hidden"
  >
    {/* Top Left White Category Tag */}
    <div className="bg-white rounded-md px-3 py-1 w-max absolute top-4 left-4 sm:top-6 sm:left-6 z-10 shadow-sm">
      <span className="text-black text-[10px] sm:text-xs font-semibold uppercase tracking-wide">
        {product.category || product.subCategory || "Furniture"}
      </span>
    </div>

    {/* Center Product Image */}
    <div className="h-44 sm:h-56 w-full flex items-center justify-center my-auto pt-6 pb-2 relative overflow-hidden">
      <img
        src={product.image}
        alt={product.name || product.title}
        className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    {/* Bottom Details & Animated Action Area */}
    <div className="mt-auto relative w-full h-[60px] sm:h-[64px] flex items-end">
      
      {/* Product Title (Moves UPWARDS on hover) */}
      <div className="flex flex-col pr-2 z-10 transition-transform duration-500 ease-out group-hover:-translate-y-[48px] sm:group-hover:-translate-y-[54px]">
        <h3 className="text-[#071F07] font-semibold text-xs sm:text-base uppercase tracking-wide leading-tight line-clamp-1">
          {product.name || product.title}
        </h3>
      </div>

      {/* Initial View: Small Arrow Button on Right (No text) */}
      <div className="absolute right-0 bottom-0 bg-[#071F07] text-white rounded-xl p-2.5 sm:p-3 flex items-center justify-center shadow-md z-20 transition-all duration-500 ease-out opacity-100 group-hover:opacity-0 group-hover:pointer-events-none group-hover:scale-95">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </div>

      {/* Hover View: Full Width Button on Bottom (Includes View text + Arrow) */}
      <div className="absolute left-0 bottom-0 w-full bg-[#071F07] group-hover:bg-black text-white rounded-xl py-3 sm:py-3.5 flex items-center justify-center gap-2 shadow-lg z-20 transition-all duration-500 ease-out opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
        <span className="text-xs font-semibold uppercase tracking-wider">View</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M9 18l6-6-6-6" />
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
        if (response.data.success && Array.isArray(response.data.data)) {
          const mappedData = response.data.data
            .filter((p) => p.slug !== currentSlug)
            .map((p) => ({
              ...p,
              title: p.name,
              id: p._id || p.slug,
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
    <section className="w-full bg-white py-8 sm:py-12 md:py-20 px-3 sm:px-6 md:px-10 lg:px-20 mx-auto font-sora">
      <div className="max-w-[1360px] mx-auto">
        
        {/* Title Header: MORE PRODUCTS */}
        <div className="mb-6 sm:mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-semibold uppercase tracking-tight text-left">
            <span className="text-[#071F07]">MORE </span>
            <span className="text-[#6E864A]">PRODUCTS</span>
          </h2>
        </div>

        {/* Desktop 3-Card Grid */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 mb-10">
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Mobile Swiper Layout */}
        <div className="block md:hidden w-full overflow-hidden mb-6">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={12}
            slidesPerView={1.2}
            centeredSlides={false}
            loop={products.length > 1}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            className="w-full pb-4"
          >
            {products.map((product, index) => (
              <SwiperSlide key={`${product.id}-${index}`}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bottom Right CTA: View More > */}
        <div className="flex justify-end pt-2">
          <Link
            href="/products"
            className="bg-[#071F07] hover:bg-black text-white font-semibold text-xs sm:text-sm px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl inline-flex items-center gap-1.5 transition-all shadow-md"
          >
            <span>View More</span>
            <span>›</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Moreproducts;
