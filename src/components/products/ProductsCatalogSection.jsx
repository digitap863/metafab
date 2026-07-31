"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";

const mainCategories = [
  {
    id: "all",
    name: "ALL PRODUCTS",
    categoryKey: "ALL",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    defaultSubItems: [],
  },
  {
    id: "modular-workstations",
    name: "MODULAR WORKSTATIONS",
    categoryKey: "Modular Workstation",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 3h18v18H3z" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    defaultSubItems: [
      "VERTEX SERIES",
      "VERTEX 075M5 SERIES",
      "L TYPE B TO B",
      "L TYPE WORKSTATION",
      "VERTEX 075MLS SERIES",
    ],
  },
  {
    id: "modular-desking",
    name: "MODULAR DESKING",
    categoryKey: "Modular Desking",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <line x1="6" y1="18" x2="6" y2="21" />
        <line x1="18" y1="18" x2="18" y2="21" />
      </svg>
    ),
    defaultSubItems: [
      "EXECUTIVE DESKING",
      "BENCHING SYSTEM",
      "OPEN PLAN DESKING",
    ],
  },
  {
    id: "tables",
    name: "TABLES",
    categoryKey: "Tables",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 6h16M4 6v12M20 6v12M8 6v12M16 6v12" />
      </svg>
    ),
    defaultSubItems: [
      "CONFERENCE TABLES",
      "MEETING TABLES",
      "EXECUTIVE TABLES",
    ],
  },
  {
    id: "chairs",
    name: "CHAIRS",
    categoryKey: "Chairs",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M7 11V3h10v8M7 11h10v6H7zM7 17v4M17 17v4" />
      </svg>
    ),
    defaultSubItems: [
      "ERGONOMIC TASK CHAIRS",
      "EXECUTIVE CHAIRS",
      "RECEPTION CHAIRS",
    ],
  },
  {
    id: "furniture",
    name: "FURNITURE",
    categoryKey: "Furniture",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 11v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6M3 11h18M5 11V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5" />
      </svg>
    ),
    defaultSubItems: [
      "LOUNGE SOFAS",
      "STORAGE & CABINETS",
    ],
  },
];

const ProductsCatalogSection = ({ products = [], loading = false }) => {
  const [selectedCategoryKey, setSelectedCategoryKey] = useState("ALL");
  const [expandedCategory, setExpandedCategory] = useState("modular-workstations");
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  // Extract unique subcategories from products for each category
  const dynamicCategories = useMemo(() => {
    return mainCategories.map((cat) => {
      if (cat.categoryKey === "ALL") return { ...cat, subItems: [] };

      // Find all subcategories present in actual products for this category
      const subsFromData = products
        .filter((p) => {
          const pCat = (p.category || "").toLowerCase().trim();
          const cKey = cat.categoryKey.toLowerCase().trim();
          return pCat.includes(cKey) || cKey.includes(pCat);
        })
        .map((p) => p.subCategory)
        .filter(Boolean);

      // Merge preset defaults with dynamic data
      const mergedSubs = Array.from(
        new Set([...cat.defaultSubItems, ...subsFromData])
      );

      return {
        ...cat,
        subItems: mergedSubs,
      };
    });
  }, [products]);

  // Toggle category expand/select
  const handleCategoryClick = (cat) => {
    if (cat.name === "ALL PRODUCTS") {
      setSelectedCategoryKey("ALL");
      setSelectedSubCategory(null);
      setExpandedCategory(null);
      return;
    }

    if (expandedCategory === cat.id) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(cat.id);
    }

    setSelectedCategoryKey(cat.categoryKey);
    setSelectedSubCategory(null);
  };

  // Filter products by selected category and subcategory
  const filteredProducts = useMemo(() => {
    if (!products || products.length === 0) return [];

    return products.filter((p) => {
      // 1. Category Filter
      let categoryMatch = true;
      if (selectedCategoryKey !== "ALL") {
        const prodCat = (p.category || "").toLowerCase().trim();
        const selCat = selectedCategoryKey.toLowerCase().trim();
        categoryMatch = prodCat.includes(selCat) || selCat.includes(prodCat);
      }

      // 2. Subcategory Filter
      let subMatch = true;
      if (selectedSubCategory) {
        const query = selectedSubCategory.toLowerCase().trim();
        const prodSub = (p.subCategory || "").toLowerCase().trim();
        const prodName = (p.name || "").toLowerCase().trim();
        const prodDesc = (p.description || "").toLowerCase().trim();

        subMatch =
          prodSub.includes(query) ||
          query.includes(prodSub) ||
          prodName.includes(query) ||
          prodDesc.includes(query);
      }

      return categoryMatch && subMatch;
    });
  }, [products, selectedCategoryKey, selectedSubCategory]);

  // Section Title Display
  const sectionTitle = useMemo(() => {
    if (selectedSubCategory) return `${selectedCategoryKey} - ${selectedSubCategory}`;
    if (selectedCategoryKey === "ALL") return "ALL PRODUCTS";
    return selectedCategoryKey.toUpperCase();
  }, [selectedCategoryKey, selectedSubCategory]);

  return (
    <section className="w-full bg-white py-6 sm:py-8 lg:py-14 px-3 sm:px-6 md:px-8 lg:px-16 font-sora">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
        
        {/* LEFT SIDEBAR: PRODUCT CATEGORIES & CUSTOMIZATION BANNER */}
        <div className="w-full lg:w-[320px] shrink-0 flex flex-col gap-5 sm:gap-6">
          {/* Product Categories Box */}
          <div className="w-full border border-gray-200 rounded-xl lg:rounded-lg overflow-hidden shadow-sm bg-[#F9FAF6]">
            {/* Header Bar */}
            <div className="bg-[#071F07] text-white font-extrabold text-xs sm:text-sm tracking-wider text-center py-3.5 sm:py-4 px-4 sm:px-6 uppercase border-b border-[#071F07]">
              PRODUCT CATEGORIES
            </div>

            {/* Categories List */}
            <div className="divide-y divide-gray-200/80">
              {dynamicCategories.map((cat) => {
                const isSelected =
                  (cat.name === "ALL PRODUCTS" && selectedCategoryKey === "ALL") ||
                  selectedCategoryKey === cat.categoryKey;
                const isExpanded = expandedCategory === cat.id;

                return (
                  <div key={cat.id} className="bg-[#F9FAF6]">
                    {/* Main Category Row */}
                    <button
                      onClick={() => handleCategoryClick(cat)}
                      className={`w-full px-4 sm:px-5 py-3.5 sm:py-4 flex items-center justify-between transition-colors text-left group ${
                        isSelected
                          ? "bg-[#EFF3EA] text-[#071F07] font-bold"
                          : "hover:bg-[#EFF3EA]/60 text-gray-800 font-semibold"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 sm:gap-3">
                        <span className={`p-1 sm:p-1.5 rounded-md ${isSelected ? "text-[#071F07]" : "text-gray-500 group-hover:text-[#071F07]"}`}>
                          {cat.icon}
                        </span>
                        <span className="text-xs sm:text-sm tracking-wide uppercase">
                          {cat.name}
                        </span>
                      </div>

                      {cat.subItems && cat.subItems.length > 0 && (
                        <svg
                          className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${
                            isExpanded ? "rotate-180 text-[#071F07]" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </button>

                    {/* Subcategories List */}
                    {isExpanded && cat.subItems && cat.subItems.length > 0 && (
                      <div className="bg-[#F3F6EE] px-4 sm:px-6 py-2.5 sm:py-3 border-t border-b border-gray-200/60 space-y-1.5 sm:space-y-2">
                        {cat.subItems.map((sub, idx) => {
                          const isSubActive = selectedSubCategory === sub;
                          return (
                            <button
                              key={idx}
                              onClick={() => {
                                setSelectedCategoryKey(cat.categoryKey);
                                setSelectedSubCategory(isSubActive ? null : sub);
                              }}
                              className={`w-full text-left text-[10px] sm:text-[11px] font-bold tracking-wider uppercase transition-colors flex items-center gap-1.5 py-1 ${
                                isSubActive ? "text-[#071F07] underline font-extrabold" : "text-gray-600 hover:text-[#071F07]"
                              }`}
                            >
                              <span className="text-gray-400">•</span>
                              <span>{sub}</span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Yellow Customization Callout Card (Placed under Category Tab - Hidden on Mobile) */}
          <div className="hidden lg:flex w-full bg-[#FFD900] rounded-2xl p-5 sm:p-7 flex-col items-start gap-3 sm:gap-4 shadow-sm">
            <h3 className="text-black font-semibold text-sm sm:text-lg tracking-wide uppercase leading-tight">
              LOOKING FOR<br />SOMETHING<br />CUSTOMIZED?
            </h3>
            
            <p className="text-black/80 text-xs sm:text-sm font-medium leading-relaxed">
              Our experts can help you create the perfect workspace.
            </p>

            <Link
              href="/contact"
              className="mt-1 inline-flex items-center gap-2 border border-black text-black font-bold text-xs px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl hover:bg-black hover:text-white transition-all duration-300 shadow-sm"
            >
              <span>Contact our expert</span>
              <span>›</span>
            </Link>
          </div>
        </div>

        {/* RIGHT MAIN SHOWCASE AREA */}
        <div className="flex-1 w-full">
          {/* Mobile Quick Category Horizontal Pills */}
          <div className="flex lg:hidden overflow-x-auto pb-2.5 mb-4 gap-2 scrollbar-none">
            {dynamicCategories.map((cat) => {
              const isSelected =
                (cat.name === "ALL PRODUCTS" && selectedCategoryKey === "ALL") ||
                selectedCategoryKey === cat.categoryKey;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat)}
                  className={`px-3.5 py-2 rounded-full text-[11px] font-bold whitespace-nowrap uppercase transition-all shrink-0 flex items-center gap-1.5 shadow-sm ${
                    isSelected
                      ? "bg-[#071F07] text-white"
                      : "bg-[#F9FAF6] border border-gray-200 text-gray-700 hover:bg-[#EFF3EA]"
                  }`}
                >
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Header Row */}
          <div className="flex items-center justify-between pb-3 sm:pb-4 mb-4 sm:mb-6 border-b border-gray-200">
            <h2 className="text-[#071F07] font-extrabold text-lg sm:text-2xl tracking-tight uppercase">
              {sectionTitle}
            </h2>

            <button
              onClick={() => {
                setSelectedCategoryKey("ALL");
                setSelectedSubCategory(null);
              }}
              className="text-gray-600 hover:text-[#071F07] text-[11px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-1 transition-colors"
            >
              <span>View all</span>
              <span>→</span>
            </button>
          </div>

          {/* Product Cards Grid (2-column on Mobile, 2 on Small Tablet, 3-4 on Desktop) */}
          {loading ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <div key={n} className="border border-gray-200 rounded-xl bg-white p-3 sm:p-4 h-52 sm:h-64 animate-pulse flex flex-col justify-between">
                  <div className="w-full h-32 sm:h-40 bg-gray-100 rounded-lg" />
                  <div className="w-2/3 h-4 bg-gray-100 rounded mx-auto" />
                </div>
              ))}
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="bg-[#F9FAF6] border border-dashed border-gray-300 rounded-2xl p-8 sm:p-12 text-center my-4">
              <div className="text-3xl sm:text-4xl mb-3 text-[#071F07]">🛋️</div>
              <h4 className="text-base sm:text-lg font-bold text-gray-800 uppercase mb-1">No models available</h4>
              <p className="text-gray-500 text-xs max-w-sm mx-auto mb-4">
                No products found in the admin model for this category/subcategory. Add products from the Admin Panel to display them here.
              </p>
              <button
                onClick={() => {
                  setSelectedCategoryKey("ALL");
                  setSelectedSubCategory(null);
                }}
                className="bg-[#071F07] text-white px-4 sm:px-5 py-2 rounded-lg text-xs font-bold uppercase hover:bg-black transition-colors"
              >
                Show All Products
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
              {filteredProducts.map((product) => (
                <Link
                  key={product._id || product.slug}
                  href={`/products/${product.slug}`}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#071F07]/40 transition-all duration-300 group flex flex-col justify-between"
                >
                  {/* Top Image Box */}
                  <div className="h-36 sm:h-48 md:h-52 w-full bg-[#F3F5EF] p-2.5 sm:p-4 flex items-center justify-center relative overflow-hidden group-hover:bg-[#EDF0E8] transition-colors">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Bottom Model Name Container */}
                  <div className="bg-white p-2.5 sm:p-4 text-center border-t border-gray-100 flex flex-col items-center justify-center min-h-[56px] sm:min-h-[68px]">
                    <h3 className="text-[#071F07] font-extrabold text-[11px] sm:text-xs md:text-sm uppercase tracking-wide leading-snug line-clamp-2 group-hover:text-[#6E864A] transition-colors">
                      {product.name}
                    </h3>
                    {product.subCategory && (
                      <span className="text-[9px] sm:text-[10px] font-bold text-[#6E864A] uppercase tracking-wider mt-0.5 line-clamp-1">
                        {product.subCategory}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default ProductsCatalogSection;
