"use client";

import React, { useState, useEffect, useMemo } from "react";
import api from "@/lib/api";
import Image from "next/image";

const defaultCategories = [
  "Modular Workstation",
  "Modular Desking",
  "Conference Table",
  "Tables",
  "Chairs",
  "Furniture",
];

const presetSubCategories = {
  "Modular Workstation": [
    "VERTEX SERIES",
    "VERTEX 075M5 SERIES",
    "L TYPE B TO B",
    "L TYPE WORKSTATION",
    "VERTEX 075MLS SERIES",
  ],
  "Modular Desking": [
    "EXECUTIVE DESKING",
    "BENCHING SYSTEM",
    "OPEN PLAN DESKING",
  ],
  "Conference Table": [
    "BOARDROOM TABLES",
    "MODULAR CONFERENCE TABLES",
    "U-SHAPE TABLES",
    "EXECUTIVE CONFERENCE TABLES",
  ],
  "Tables": [
    "MEETING TABLES",
    "EXECUTIVE TABLES",
    "COFFEE TABLES",
  ],
  "Chairs": [
    "EXECUTIVE CHAIR",
    "ERGONOMIC TASK CHAIR",
    "VISITOR CHAIR",
    "RECEPTION CHAIR",
  ],
  "Furniture": [
    "LOUNGE SOFAS",
    "STORAGE & CABINETS",
    "BREAKOUT FURNITURE",
  ],
};

const emptyFormData = {
  name: "",
  modelNumber: "",
  price: "",
  rating: "",
  subtitle: "",
  category: "Modular Workstation",
  customCategory: "",
  subCategory: "",
  customSubCategory: "",
  description: "",
  details: "",
  brochureUrl: "",
  featuresText: "",
  finishesText: "",
  image: null,
};

export default function AdminProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState("All");

  const [formData, setFormData] = useState(emptyFormData);
  const [previewUrl, setPreviewUrl] = useState("");
  const [galleryItems, setGalleryItems] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await api.get("/admin/products");
      if (response.data.success) {
        setProducts(response.data.data);
      }
    } catch (err) {
      console.error("Error fetching admin products:", err);
      setError("Failed to load products.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const currentAvailableSubCats = useMemo(() => {
    const cat = formData.category === "Custom" ? formData.customCategory : formData.category;
    return presetSubCategories[cat] || [];
  }, [formData.category, formData.customCategory]);

  const handleOpenModal = (product = null) => {
    if (product) {
      setIsEditing(true);
      setCurrentId(product._id);
      
      const isCustomCat = product.category && !defaultCategories.includes(product.category);
      const availableSubs = presetSubCategories[product.category] || [];
      const isCustomSub = product.subCategory && !availableSubs.includes(product.subCategory);

      // Populate ALL fields from the existing product object
      setFormData({
        name: product.name || "",
        modelNumber: product.modelNumber || "",
        price: product.price || "",
        rating: product.rating || "",
        subtitle: product.subtitle || "",
        category: isCustomCat ? "Custom" : (product.category || "Modular Workstation"),
        customCategory: isCustomCat ? product.category : "",
        subCategory: isCustomSub ? "Custom" : (product.subCategory || ""),
        customSubCategory: isCustomSub ? product.subCategory : "",
        description: product.description || "",
        details: product.details || "",
        brochureUrl: product.brochure || "",
        featuresText: Array.isArray(product.features) ? product.features.join(", ") : "",
        finishesText: Array.isArray(product.finishes) ? product.finishes.join(", ") : "",
        image: null,
      });

      setPreviewUrl(product.image || "");

      // Populate ALL existing gallery images
      const existingItems = (product.gallery || []).map((url, idx) => ({
        id: `existing-${idx}-${Date.now()}`,
        previewUrl: url,
        url: url,
        file: null,
      }));
      setGalleryItems(existingItems);
    } else {
      // ADD NEW PRODUCT: Completely EMPTY form fields! No dummy data.
      setIsEditing(false);
      setCurrentId(null);
      setFormData(emptyFormData);
      setPreviewUrl("");
      setGalleryItems([]);
    }
    setIsModalOpen(true);
    setError("");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData(emptyFormData);
    setPreviewUrl("");
    setGalleryItems([]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const newData = { ...prev, [name]: value };
      if (name === "category" && value !== "Custom") {
        const subs = presetSubCategories[value] || [];
        newData.subCategory = subs[0] || "";
      }
      return newData;
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  // Accumulate newly selected gallery image files
  const handleAddGalleryFiles = (e) => {
    const files = Array.from(e.target.files);
    if (files && files.length > 0) {
      const newItems = files.map((file, idx) => ({
        id: `new-${Date.now()}-${idx}-${Math.random()}`,
        previewUrl: URL.createObjectURL(file),
        file: file,
        url: null,
      }));
      setGalleryItems((prev) => [...prev, ...newItems]);
    }
    e.target.value = "";
  };

  // Remove individual gallery image
  const handleRemoveGalleryItem = (idToRemove) => {
    setGalleryItems((prev) => prev.filter((item) => item.id !== idToRemove));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const finalCategory =
      formData.category === "Custom" ? formData.customCategory : formData.category;

    const finalSubCategory =
      formData.subCategory === "Custom" ? formData.customSubCategory : formData.subCategory;

    if (!finalCategory || !finalCategory.trim()) {
      setError("Please select or enter a category.");
      setSubmitting(false);
      return;
    }

    const featuresList = formData.featuresText
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    const finishesList = formData.finishesText
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    const existingUrls = galleryItems
      .filter((item) => item.url)
      .map((item) => item.url);

    const newFiles = galleryItems
      .filter((item) => item.file)
      .map((item) => item.file);

    const data = new FormData();
    data.append("name", formData.name);
    data.append("modelNumber", formData.modelNumber);
    data.append("price", formData.price);
    data.append("rating", formData.rating);
    data.append("subtitle", formData.subtitle);
    data.append("category", finalCategory.trim());
    data.append("subCategory", (finalSubCategory || "").trim());
    data.append("description", formData.description);
    data.append("details", formData.details);
    data.append("brochureUrl", formData.brochureUrl);
    data.append("features", JSON.stringify(featuresList));
    data.append("finishes", JSON.stringify(finishesList));
    data.append("existingGallery", JSON.stringify(existingUrls));

    if (formData.image) {
      data.append("image", formData.image);
    }

    if (newFiles.length > 0) {
      newFiles.forEach((file) => {
        data.append("gallery", file);
      });
    }

    try {
      let response;
      if (isEditing) {
        response = await api.put(`/admin/products/${currentId}`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        if (!formData.image) {
          setError("Main Product Image is required for new products.");
          setSubmitting(false);
          return;
        }
        response = await api.post("/admin/products", data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      if (response.data.success) {
        fetchProducts();
        handleCloseModal();
      }
    } catch (err) {
      console.error("Submission error:", err);
      setError(err.response?.data?.message || "Failed to save product.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    try {
      const response = await api.delete(`/admin/products/${id}`);
      if (response.data.success) {
        setProducts(products.filter((p) => p._id !== id));
      }
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to delete product");
    }
  };

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch =
        searchQuery.trim() === "" ||
        (p.name && p.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (p.modelNumber && p.modelNumber.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (p.category && p.category.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (p.subCategory && p.subCategory.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCat =
        selectedCategoryFilter === "All" ||
        (p.category && p.category.toLowerCase().trim() === selectedCategoryFilter.toLowerCase().trim());

      return matchesSearch && matchesCat;
    });
  }, [products, searchQuery, selectedCategoryFilter]);

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto font-sora">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#071F07] tracking-tight uppercase">
            PRODUCT MANAGEMENT
          </h1>
          <p className="text-gray-500 mt-1 text-sm sm:text-base">
            Manage product models, main photos, and multiple gallery thumbnail uploads.
          </p>
        </div>

        <button
          onClick={() => handleOpenModal()}
          className="bg-[#071F07] hover:bg-black text-white px-7 py-3.5 rounded-2xl font-bold transition-all shadow-lg flex items-center gap-2 group text-sm"
        >
          <span className="text-xl group-hover:scale-125 transition-transform">+</span>
          Add New Product
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <input
            type="text"
            placeholder="Search by name, model, category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#071F07] text-gray-800"
          />
          <svg
            className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <span className="text-xs font-bold text-gray-500 uppercase shrink-0">Category Filter:</span>
          <select
            value={selectedCategoryFilter}
            onChange={(e) => setSelectedCategoryFilter(e.target.value)}
            className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-700 bg-white focus:outline-none focus:border-[#071F07] cursor-pointer w-full sm:w-auto"
          >
            <option value="All">All Categories</option>
            {defaultCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Products Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 animate-pulse">
              <div className="aspect-[4/3] bg-gray-100 rounded-2xl mb-4" />
              <div className="h-6 bg-gray-100 rounded w-3/4 mb-2" />
              <div className="h-4 bg-gray-100 rounded w-1/2" />
            </div>
          ))}
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="bg-white border-2 border-dashed border-gray-200 rounded-3xl p-16 text-center shadow-sm">
          <div className="text-5xl mb-3">📦</div>
          <h3 className="text-xl font-extrabold text-[#071F07] mb-1 uppercase">No products found</h3>
          <p className="text-gray-400 text-sm max-w-md mx-auto mb-6">
            Click below to create your first product.
          </p>
          <button
            onClick={() => handleOpenModal()}
            className="bg-[#071F07] text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-black transition-colors"
          >
            + Create First Product
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F3F5EF] p-4 flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  unoptimized
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
                
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button
                    onClick={() => handleOpenModal(product)}
                    className="p-3 bg-white text-gray-900 rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
                    title="Edit Product"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="p-3 bg-white text-red-600 rounded-xl hover:bg-red-50 transition-colors shadow-lg"
                    title="Delete Product"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex justify-between items-start mb-2 gap-2">
                    <div>
                      <h3 className="text-base font-extrabold text-[#071F07] leading-tight uppercase">
                        {product.name}
                      </h3>
                      {product.modelNumber && (
                        <span className="text-[11px] font-bold text-gray-400">
                          Model: {product.modelNumber}
                        </span>
                      )}
                    </div>
                    <span className="text-sm font-extrabold text-[#6E864A] shrink-0">
                      {product.price}
                    </span>
                  </div>
                  <p className="text-gray-500 text-xs line-clamp-2 mt-1 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-[10px] font-extrabold text-[#071F07] uppercase tracking-wider bg-[#071F07]/10 px-2 py-0.5 rounded">
                      {product.category}
                    </span>
                    {product.subCategory && (
                      <span className="text-[10px] font-bold text-[#6E864A] uppercase tracking-wider bg-[#6E864A]/10 px-2 py-0.5 rounded border border-[#6E864A]/20">
                        {product.subCategory}
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] font-bold text-gray-400">
                    📷 {product.gallery?.length || 1} photos
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add / Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" onClick={handleCloseModal} />

          <div className="relative bg-white rounded-3xl w-full max-w-3xl max-h-[92vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in duration-300 font-sora">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/80 sticky top-0 z-10">
              <div>
                <h2 className="text-xl font-extrabold text-[#071F07] uppercase">
                  {isEditing ? "Edit Product Model" : "Add Product Model"}
                </h2>
                <p className="text-xs text-gray-500 mt-0.5">
                  {isEditing ? "Modify existing product details below." : "Enter new product details (all fields start clean and empty)."}
                </p>
              </div>
              <button onClick={handleCloseModal} className="p-2 hover:bg-gray-200 rounded-full transition-colors text-gray-600">
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
              {error && (
                <div className="p-4 bg-red-50 text-red-600 rounded-xl border border-red-100 text-xs font-bold flex items-center gap-2">
                  <span>⚠️</span> {error}
                </div>
              )}

              {/* 1. Basic Product Identification */}
              <div className="space-y-4">
                <h3 className="text-xs font-black uppercase text-[#071F07] tracking-wider border-b border-gray-100 pb-2">
                  1. Basic Product Identification
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-extrabold text-gray-700 uppercase mb-1.5">
                      Product Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. HIGH-BACK EXECUTIVE CHAIR"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#071F07] text-sm text-black"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-gray-700 uppercase mb-1.5">
                      Model Number / Code
                    </label>
                    <input
                      type="text"
                      name="modelNumber"
                      value={formData.modelNumber}
                      onChange={handleInputChange}
                      placeholder="e.g. EXE-1253"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#071F07] text-sm text-black"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-gray-700 uppercase mb-1.5">
                      Price *
                    </label>
                    <input
                      type="text"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      placeholder="e.g. ₹40,99.00 INR"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#071F07] text-sm text-black"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-gray-700 uppercase mb-1.5">
                      Rating
                    </label>
                    <input
                      type="text"
                      name="rating"
                      value={formData.rating}
                      onChange={handleInputChange}
                      placeholder="e.g. 4.5 Rating"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#071F07] text-sm text-black"
                    />
                  </div>
                </div>
              </div>

              {/* 2. Categorization */}
              <div className="space-y-4 pt-2">
                <h3 className="text-xs font-black uppercase text-[#071F07] tracking-wider border-b border-gray-100 pb-2">
                  2. Categorization & Tagging
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-extrabold text-gray-700 uppercase mb-1.5">
                      Category *
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#071F07] text-sm text-black cursor-pointer bg-white"
                      required
                    >
                      {defaultCategories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                      <option value="Custom">+ Custom Category</option>
                    </select>
                  </div>

                  {formData.category === "Custom" ? (
                    <div>
                      <label className="block text-xs font-extrabold text-gray-700 uppercase mb-1.5">
                        Custom Category Name *
                      </label>
                      <input
                        type="text"
                        name="customCategory"
                        value={formData.customCategory}
                        onChange={handleInputChange}
                        placeholder="e.g. Executive Lounges"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#071F07] text-sm text-black"
                        required
                      />
                    </div>
                  ) : (
                    <div>
                      <label className="block text-xs font-extrabold text-gray-700 uppercase mb-1.5">
                        Sub Category (Variant / Series)
                      </label>
                      <select
                        name="subCategory"
                        value={formData.subCategory}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#071F07] text-sm text-black cursor-pointer bg-white"
                      >
                        <option value="">-- Select Subcategory --</option>
                        {currentAvailableSubCats.map((sub) => (
                          <option key={sub} value={sub}>
                            {sub}
                          </option>
                        ))}
                        <option value="Custom">+ Custom Subcategory</option>
                      </select>
                    </div>
                  )}

                  {formData.subCategory === "Custom" && (
                    <div className="md:col-span-2">
                      <label className="block text-xs font-extrabold text-gray-700 uppercase mb-1.5">
                        Custom Subcategory Name *
                      </label>
                      <input
                        type="text"
                        name="customSubCategory"
                        value={formData.customSubCategory}
                        onChange={handleInputChange}
                        placeholder="e.g. EXECUTIVE CHAIR"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#071F07] text-sm text-black"
                        required
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* 3. Product Subtitle, Features & Finishes */}
              <div className="space-y-4 pt-2">
                <h3 className="text-xs font-black uppercase text-[#071F07] tracking-wider border-b border-gray-100 pb-2">
                  3. Highlights, Features & Finishes
                </h3>

                <div>
                  <label className="block text-xs font-extrabold text-gray-700 uppercase mb-1.5">
                    Tagline / Subtitle
                  </label>
                  <input
                    type="text"
                    name="subtitle"
                    value={formData.subtitle}
                    onChange={handleInputChange}
                    placeholder="e.g. Discover our collection of thoughtfully designed interiors..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#071F07] text-sm text-black"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-extrabold text-gray-700 uppercase mb-1.5">
                      Key Features (Comma separated)
                    </label>
                    <input
                      type="text"
                      name="featuresText"
                      value={formData.featuresText}
                      onChange={handleInputChange}
                      placeholder="e.g. Ergonomic Design, Premium Materials, Adjustable Height, 2 Years Warenty"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#071F07] text-sm text-black"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-gray-700 uppercase mb-1.5">
                      Available Finishes / Color Hexes (Comma separated)
                    </label>
                    <input
                      type="text"
                      name="finishesText"
                      value={formData.finishesText}
                      onChange={handleInputChange}
                      placeholder="e.g. #000000, #5C4018, #C9A87C"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#071F07] text-sm text-black"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-gray-700 uppercase mb-1.5">
                    Brochure Link / PDF URL
                  </label>
                  <input
                    type="text"
                    name="brochureUrl"
                    value={formData.brochureUrl}
                    onChange={handleInputChange}
                    placeholder="e.g. https://example.com/brochure.pdf"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#071F07] text-sm text-black"
                  />
                </div>
              </div>

              {/* 4. Product Descriptions & Details */}
              <div className="space-y-4 pt-2">
                <h3 className="text-xs font-black uppercase text-[#071F07] tracking-wider border-b border-gray-100 pb-2">
                  4. Product Description & Bulleted Details
                </h3>

                <div>
                  <label className="block text-xs font-extrabold text-gray-700 uppercase mb-1.5">
                    Product Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Full product summary paragraph..."
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#071F07] text-sm text-black resize-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-gray-700 uppercase mb-1.5">
                    Product Details (Bulleted Specifications) *
                  </label>
                  <textarea
                    name="details"
                    value={formData.details}
                    onChange={handleInputChange}
                    placeholder="• Premium, refined design with rich visual appeal&#10;• Deep seating and ergonomic support for maximum comfort..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#071F07] text-sm text-black resize-none"
                    required
                  />
                </div>
              </div>

              {/* 5. Main Image & Gallery Manager */}
              <div className="space-y-4 pt-2">
                <h3 className="text-xs font-black uppercase text-[#071F07] tracking-wider border-b border-gray-100 pb-2">
                  5. Main Image & Gallery Thumbnails Manager
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
                  {/* MAIN PRODUCT IMAGE */}
                  <div>
                    <label className="block text-xs font-extrabold text-gray-700 uppercase mb-1.5">
                      Main Product Image *
                    </label>
                    <div className="flex flex-col gap-3">
                      {previewUrl ? (
                        <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-gray-200 bg-[#F3F5EF] p-2 flex items-center justify-center">
                          <img src={previewUrl} alt="Main Preview" className="max-h-full max-w-full object-contain" />
                        </div>
                      ) : (
                        <div className="aspect-[4/3] w-full rounded-2xl border border-dashed border-gray-300 bg-gray-50 flex items-center justify-center text-gray-400 text-xs font-bold">
                          No Main Photo Selected
                        </div>
                      )}
                      
                      <label className="flex items-center justify-center w-full p-3.5 border-2 border-dashed border-gray-300 rounded-xl hover:border-[#071F07] transition-colors cursor-pointer bg-white shadow-sm">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">🖼️</span>
                          <span className="text-xs font-extrabold text-[#071F07] uppercase">
                            {formData.image || previewUrl ? "Change Main Image" : "Upload Main Image"}
                          </span>
                        </div>
                        <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                      </label>
                    </div>
                  </div>

                  {/* MULTIPLE GALLERY THUMBNAILS UPLOADER */}
                  <div>
                    <label className="block text-xs font-extrabold text-gray-700 uppercase mb-1.5">
                      Gallery Thumbnails ({galleryItems.length} Uploaded)
                    </label>
                    <div className="flex flex-col gap-3">
                      <div className="min-h-[140px] p-3 bg-[#F3F5EF] rounded-2xl border border-gray-200 flex flex-wrap gap-2.5 items-center">
                        {galleryItems.length === 0 ? (
                          <span className="text-gray-400 text-xs font-semibold italic mx-auto">
                            No gallery thumbnails added yet.
                          </span>
                        ) : (
                          galleryItems.map((item) => (
                            <div
                              key={item.id}
                              className="relative w-16 h-16 rounded-xl border border-gray-300 bg-white p-1 shadow-sm group shrink-0"
                            >
                              <img
                                src={item.previewUrl}
                                alt="Gallery Thumbnail"
                                className="w-full h-full object-contain rounded-lg"
                              />
                              <button
                                type="button"
                                onClick={() => handleRemoveGalleryItem(item.id)}
                                className="absolute -top-2 -right-2 bg-red-600 hover:bg-red-700 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold shadow-md transition-transform group-hover:scale-110"
                                title="Remove image"
                              >
                                ✕
                              </button>
                            </div>
                          ))
                        )}
                      </div>

                      <label className="flex items-center justify-center w-full p-3.5 border-2 border-dashed border-gray-300 rounded-xl hover:border-[#071F07] transition-colors cursor-pointer bg-white shadow-sm">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">📷</span>
                          <span className="text-xs font-extrabold text-[#071F07] uppercase">
                            {galleryItems.length > 0 ? "Add More Thumbnails (+)" : "Upload Gallery Thumbnails"}
                          </span>
                        </div>
                        <input
                          type="file"
                          className="hidden"
                          accept="image/*"
                          multiple
                          onChange={handleAddGalleryFiles}
                        />
                      </label>
                    </div>
                  </div>

                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex gap-3">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="flex-1 py-3.5 rounded-xl font-bold text-xs uppercase text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-[2] py-3.5 rounded-xl font-bold text-xs uppercase text-white bg-[#071F07] hover:bg-black transition-all shadow-md disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {submitting ? "Saving..." : isEditing ? "Update Product" : "Create Product"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
