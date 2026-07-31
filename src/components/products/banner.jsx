"use client";

import React, { useState } from "react";
import Link from "next/link";

const ProductsBanner = ({ product }) => {
  if (!product) return null;

  // The first image is strictly the main product image, followed by remaining gallery images
  const allImages = React.useMemo(() => {
    const list = [];
    if (product.image) {
      list.push(product.image);
    }
    if (Array.isArray(product.gallery)) {
      product.gallery.forEach((img) => {
        if (img && !list.includes(img)) {
          list.push(img);
        }
      });
    }
    return list;
  }, [product?.image, product?.gallery]);

  const [selectedImage, setSelectedImage] = React.useState(
    allImages[0] || product?.image || ""
  );

  React.useEffect(() => {
    if (allImages.length > 0) {
      setSelectedImage(allImages[0]);
    }
  }, [allImages]);

  // Features list strictly from DB
  const featuresList = (product.features || []).map((f) =>
    typeof f === "string" ? f : f.title || ""
  ).filter(Boolean);

  // Finishes list strictly from DB
  const finishesList = (product.finishes || []).filter(Boolean);

  const [copiedColorIndex, setCopiedColorIndex] = React.useState(null);

  const handleCopyColor = (colorCode, idx) => {
    const hexCode =
      colorCode.startsWith("#") ||
      colorCode.startsWith("rgb") ||
      colorCode.startsWith("hsl")
        ? colorCode
        : `#${colorCode}`;
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(hexCode);
    }
    setCopiedColorIndex(idx);
    setTimeout(() => {
      setCopiedColorIndex(null);
    }, 1500);
  };

  // Product details bullet points strictly from DB
  const detailsList = product.details
    ? product.details
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean)
    : [];

  const categoryName = (product.category || "").toUpperCase();
  const subCatName = (product.subCategory || product.category || "").toUpperCase();
  const productName = (product.name || "").toUpperCase();

  return (
    <section className="w-full bg-white font-sora pt-24 sm:pt-28 md:pt-36 pb-12 sm:pb-20 px-3 sm:px-6 md:px-10 lg:px-20 text-black">
      <div className="max-w-[1360px] mx-auto">

        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-6 sm:mb-8 overflow-x-auto whitespace-nowrap pb-1 scrollbar-none">
          <Link href="/" className="hover:text-black transition-colors shrink-0">
            HOME
          </Link>
          <span>&gt;</span>
          <Link href="/products" className="hover:text-black transition-colors shrink-0">
            PRODUCTS
          </Link>
          {categoryName && (
            <>
              <span>&gt;</span>
              <span className="hover:text-black transition-colors shrink-0">{categoryName}</span>
            </>
          )}
          {subCatName && (
            <>
              <span>&gt;</span>
              <span className="text-gray-700 font-bold shrink-0">{subCatName}</span>
            </>
          )}
        </nav>

        {/* 2-Column Product Detail Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">

          {/* LEFT COLUMN: Outer Rounded Container for Image + Thumbnails */}
          <div className="lg:col-span-6 flex flex-col gap-6 sm:gap-8">
            {/* Outer Box containing Main Cutout Image & Thumbnails */}
            <div className="border border-gray-300 rounded-2xl sm:rounded-3xl p-4 sm:p-8 bg-white shadow-sm flex flex-col gap-4 sm:gap-6">

              {/* Main Large Product Cutout Photo */}
              <div className="h-[260px] sm:h-[380px] md:h-[460px] w-full flex items-center justify-center relative overflow-hidden bg-white">
                <img
                  src={selectedImage || product.image}
                  alt={product.name || "Product Image"}
                  className="max-h-full max-w-full object-contain transition-transform duration-300"
                />
              </div>

              {/* Thumbnails Row */}
              {allImages.length > 1 && (
                <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 sm:gap-4 pt-2 border-t border-gray-100">
                  {allImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(img)}
                      className={`aspect-square border rounded-lg p-1 sm:p-1.5 bg-white flex items-center justify-center transition-all ${selectedImage === img
                          ? "border-[#071F07] ring-1 ring-[#071F07] shadow-sm"
                          : "border-gray-300 hover:border-gray-500"
                        }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Description Section strictly from DB */}
            {product.description && (
              <div className="pt-1 sm:pt-2">
                <h2 className="text-xl sm:text-2xl font-semibold text-[#071F07] uppercase tracking-tight mb-2.5">
                  PRODUCT DESCRIPTION
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-medium whitespace-pre-line">
                  {product.description}
                </p>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: Category Badge, Title, Specs & Details strictly from DB */}
          <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-5 pt-1">

            {/* Category / Subcategory Badge */}
            {(product.subCategory || product.category) && (
              <div className="inline-block px-3.5 sm:px-4 py-1 sm:py-1.5 bg-[#6E864A] text-black text-[11px] sm:text-xs font-semibold rounded-md uppercase tracking-wider w-fit">
                {product.subCategory || product.category}
              </div>
            )}

            {/* Product Name */}
            {product.name && (
              <h1 className="text-xl sm:text-3xl md:text-4xl font-semibold text-[#6E864A] uppercase tracking-tight leading-tight">
                {productName}
              </h1>
            )}

            {/* Subtitle Intro Text */}
            {product.subtitle && (
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-medium">
                {product.subtitle}
              </p>
            )}

            {/* Rating & Model Number Row */}
            {(product.rating || product.modelNumber) && (
              <div className="flex items-center justify-between pt-1 sm:pt-2 pb-2.5 sm:pb-3 border-b border-gray-300 text-xs sm:text-sm font-bold text-gray-800">
                {product.rating ? (
                  <div className="flex items-center gap-1.5">
                    <span className="text-amber-500">⭐</span>
                    <span>{product.rating}</span>
                  </div>
                ) : <div />}

                {product.modelNumber ? (
                  <div>
                    <span className="text-gray-500 font-semibold">Model : </span>
                    <span className="text-[#071F07] font-semibold">{product.modelNumber}</span>
                  </div>
                ) : <div />}
              </div>
            )}

            {/* Price Display */}
            {product.price && (
              <div className="text-xl sm:text-3xl font-semibold text-[#071F07] my-0.5 sm:my-1">
                {product.price}
              </div>
            )}

            {/* Key Feature Badges Grid */}
            {featuresList.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 py-1 sm:py-2">
                {featuresList.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 sm:gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6E864A" strokeWidth="2.5" className="shrink-0">
                      <rect x="3" y="3" width="7" height="7" />
                      <rect x="14" y="3" width="7" height="7" />
                      <rect x="14" y="14" width="7" height="7" />
                      <rect x="3" y="14" width="7" height="7" />
                    </svg>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-[#071F07] uppercase leading-tight whitespace-pre-line">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Available Finishes */}
            {finishesList.length > 0 && (
              <div className="space-y-2.5 sm:space-y-3 pt-2 sm:pt-3">
                <h3 className="text-xs sm:text-sm font-semibold text-[#071F07] uppercase tracking-wider">
                  AVAILABLE FINISHES
                </h3>
                <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
                  {finishesList.map((color, idx) => {
                    const hexCode =
                      color.startsWith("#") ||
                      color.startsWith("rgb") ||
                      color.startsWith("hsl")
                        ? color
                        : `#${color}`;
                    const isCopied = copiedColorIndex === idx;

                    return (
                      <div key={idx} className="relative group">
                        {/* Color Swatch Button */}
                        <button
                          type="button"
                          onClick={() => handleCopyColor(color, idx)}
                          className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg border border-gray-300 shadow-sm cursor-pointer hover:scale-110 transition-transform focus:outline-none ring-offset-2 focus:ring-2 focus:ring-[#071F07] block relative"
                          style={{ backgroundColor: hexCode }}
                          aria-label={`Copy color code ${hexCode}`}
                        />

                        {/* Hover Tooltip with Color Code & Copy Option */}
                        <div className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto z-20">
                          <div className="bg-[#071F07] text-white text-[11px] font-mono py-1.5 px-2.5 rounded-lg shadow-xl border border-gray-700 flex items-center gap-2 whitespace-nowrap">
                            <span>{hexCode.toUpperCase()}</span>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleCopyColor(color, idx);
                              }}
                              className="bg-white/15 hover:bg-white/30 text-white rounded px-1.5 py-0.5 transition-colors text-[10px] flex items-center gap-1 font-sans cursor-pointer"
                              title="Copy color code"
                            >
                              {isCopied ? (
                                <span className="text-emerald-400 font-bold flex items-center gap-1">
                                  ✓ Copied
                                </span>
                              ) : (
                                <span className="flex items-center gap-1 text-gray-200">
                                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                  </svg>
                                  Copy
                                </span>
                              )}
                            </button>
                          </div>

                          {/* Tooltip Arrow */}
                          <div className="w-2 h-2 bg-[#071F07] rotate-45 mx-auto -mt-1 border-r border-b border-gray-700" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Download Brochure Button */}
            {product.brochure && (
              <div className="pt-2">
                <a
                  href={product.brochure}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 border border-gray-400 bg-white text-gray-800 font-semibold text-xs px-5 py-2.5 rounded-md hover:bg-gray-50 transition-colors shadow-sm"
                >
                  <span>Download Brochure</span>
                  <span>›</span>
                </a>
              </div>
            )}

            {/* Product Details Specs */}
            {detailsList.length > 0 && (
              <div className="pt-6 space-y-3">
                <h3 className="text-sm sm:text-base font-semibold text-[#071F07] uppercase tracking-wider">
                  PRODUCT DETAILS
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-700 font-medium">
                  {detailsList.map((item, idx) => {
                    const text = item.replace(/^•\s*/, "");
                    return (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#071F07]">•</span>
                        <span>{text}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

export default ProductsBanner;
