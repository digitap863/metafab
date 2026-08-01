"use client";

import React, { useState, useEffect, useMemo } from "react";
import api from "@/lib/api";
import ProductsHeroBanner from "@/components/products/ProductsHeroBanner";
import ProductsCatalogSection from "@/components/products/ProductsCatalogSection";
import ProductsCustomizationBanner from "@/components/products/ProductsCustomizationBanner";
import ConsultationBanner from "@/components/products/ConsultationBanner";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/user/products");
        if (response.data.success && Array.isArray(response.data.data)) {
          setProducts(response.data.data);
        } else {
          setProducts([]);
        }
      } catch (error) {
        console.error("Error fetching products from database API:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Category counts computed strictly from database products
  const categoryCounts = useMemo(() => {
    const counts = {
      "Modular Workstation": 0,
      "Modular Desking": 0,
      "Conference Table": 0,
      "Tables": 0,
      "Chairs": 0,
      "Furniture": 0,
    };

    products.forEach((p) => {
      if (p.category && counts[p.category] !== undefined) {
        counts[p.category] += 1;
      }
    });

    return counts;
  }, [products]);

  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    const secondSection = document.getElementById("catalog-section");
    if (secondSection) {
      secondSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="w-full bg-[#FAFAFA] min-h-screen">
      {/* 1. Hero Banner Top Section */}
      <ProductsHeroBanner
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
        categoryCounts={categoryCounts}
      />

      {/* 2. Second Section: Product Categories & Model Cards */}
      <div id="catalog-section">
        <ProductsCatalogSection
          products={products}
          loading={loading}
          selectedCategory={selectedCategory}
          onCategoryChange={(cat) => setSelectedCategory(cat)}
        />
      </div>

      {/* 3. Third Section: Customization Yellow Card & 4 Olive Feature Cards */}
      <ProductsCustomizationBanner />

      {/* 4. Fourth Section: Consultation Banner */}
      <ConsultationBanner />
    </main>
  );
}
