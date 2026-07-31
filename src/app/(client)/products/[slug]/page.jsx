"use client";

import React, { useEffect, useState } from 'react';
import ProductsBanner from '@/components/products/banner';
import ProductsMore from '@/components/products/Moreproducts';
import ConsultationBanner from '@/components/products/ConsultationBanner';
import api from '@/lib/api';
import { useParams } from 'next/navigation';

function ProductPage() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/user/products/${slug}`);
        if (response.data.success) {
          setProduct(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchProduct();
    }
  }, [slug]);

  if (loading) return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white">
      <div className="w-10 h-10 border-4 border-[#071F07]/20 border-t-[#071F07] rounded-full animate-spin"></div>
    </div>
  );

  if (!product) return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white">
      <h2 className="text-2xl font-bold text-[#071F07]">Product Not Found</h2>
    </div>
  );

  return (
    <div className='w-full bg-white'>
      <ProductsBanner product={product} />
      <ProductsMore currentSlug={slug} />
      <ConsultationBanner />
    </div>
  );
}

export default ProductPage;