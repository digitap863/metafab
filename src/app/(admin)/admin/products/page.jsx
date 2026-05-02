"use client";

import React, { useState, useEffect } from "react";
import api from "@/lib/api";
import Image from "next/image";

export default function AdminProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    price: "",
    description: "",
    category: "",
    details: "",
    image: null,
  });

  const [previewUrl, setPreviewUrl] = useState("");

  const fetchProducts = async () => {
    try {
      const response = await api.get("/admin/products");
      if (response.data.success) {
        setProducts(response.data.data);
      }
    } catch (err) {
      console.error("Error fetching products:", err);
      setError("Failed to load products.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const generateSlug = (name) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  };

  const handleOpenModal = (product = null) => {
    if (product) {
      setIsEditing(true);
      setCurrentId(product._id);
      setFormData({
        name: product.name,
        slug: product.slug,
        price: product.price,
        description: product.description,
        category: product.category,
        details: product.details,
        image: null,
      });
      setPreviewUrl(product.image);
    } else {
      setIsEditing(false);
      setCurrentId(null);
      setFormData({
        name: "",
        slug: "",
        price: "",
        description: "",
        category: "",
        details: "",
        image: null,
      });
      setPreviewUrl("");
    }
    setIsModalOpen(true);
    setError("");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData({ name: "", slug: "", price: "", description: "", details: "", image: null });
    setPreviewUrl("");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const newData = { ...prev, [name]: value };
      // Auto-generate slug if name changes and it's a new product
      if (name === "name" && !isEditing) {
        newData.slug = generateSlug(value);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const data = new FormData();
    data.append("name", formData.name);
    data.append("slug", formData.slug);
    data.append("price", formData.price);
    data.append("description", formData.description);
    data.append("category", formData.category);
    data.append("details", formData.details);
    if (formData.image) {
      data.append("image", formData.image);
    }

    try {
      let response;
      if (isEditing) {
        response = await api.put(`/admin/products/${currentId}`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        if (!formData.image) {
            setError("Image is required for new products");
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

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="text-4xl font-heading font-bold text-gray-900 tracking-tight">Products</h1>
          <p className="text-gray-500 mt-2 text-lg">Manage your premium product collection.</p>
        </div>
        
        <button 
          onClick={() => handleOpenModal()}
          className="bg-[#0f3d2e] hover:bg-[#15523e] text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-[#0f3d2e]/20 flex items-center gap-2 group"
        >
          <span className="text-xl group-hover:scale-125 transition-transform">+</span>
          Add New Product
        </button>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 animate-pulse">
              <div className="aspect-[4/5] bg-gray-100 rounded-2xl mb-4"></div>
              <div className="h-6 bg-gray-100 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-100 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      ) : products.length === 0 ? (
        <div className="bg-white border-2 border-dashed border-gray-100 rounded-[2.5rem] p-20 text-center shadow-sm">
          <div className="text-6xl mb-4">📦</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">No products yet</h3>
          <p className="text-gray-400 max-w-md mx-auto mb-8">Start adding your exclusive furniture or decor pieces to the shop.</p>
          <button 
            onClick={() => handleOpenModal()}
            className="text-[#0f3d2e] font-bold hover:underline"
          >
            Add your first product →
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product._id} className="group bg-white border border-gray-100 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button 
                    onClick={() => handleOpenModal(product)}
                    className="p-3 bg-white text-gray-900 rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
                    title="Edit Product"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                  </button>
                  <button 
                    onClick={() => handleDelete(product._id)}
                    className="p-3 bg-white text-red-500 rounded-xl hover:bg-red-50 transition-colors shadow-lg"
                    title="Delete Product"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">{product.name}</h3>
                  <span className="text-lg font-bold text-[#0f3d2e]">{product.price}</span>
                </div>
                <p className="text-gray-500 text-sm line-clamp-2 mt-1">{product.description}</p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                   <span className="text-[10px] font-bold text-[#0f3d2e] uppercase tracking-widest bg-[#0f3d2e]/5 px-2 py-1 rounded border border-[#0f3d2e]/10">
                    {product.category}
                   </span>
                   <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-gray-50 px-2 py-1 rounded border border-gray-100">
                    Slug: {product.slug}
                   </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" onClick={handleCloseModal}></div>
          
          <div className="relative bg-white rounded-[2.5rem] w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in duration-300 scrollbar-hide">
            <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-gray-50/50 sticky top-0 bg-white z-10">
              <h2 className="text-2xl font-bold text-gray-900">{isEditing ? "Edit Product" : "Add New Product"}</h2>
              <button onClick={handleCloseModal} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-8">
              {error && (
                <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-2xl border border-red-100 flex items-center gap-2">
                  <span>⚠️</span> {error}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Product Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Minimalist Oak Chair"
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0f3d2e] focus:border-transparent transition-all text-black"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">URL Slug</label>
                  <input
                    type="text"
                    name="slug"
                    value={formData.slug}
                    onChange={handleInputChange}
                    placeholder="e.g. minimalist-oak-chair"
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0f3d2e] focus:border-transparent transition-all text-black"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Price (with currency)</label>
                  <input
                    type="text"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    placeholder="e.g. $450"
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0f3d2e] focus:border-transparent transition-all text-black"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Category</label>
                  <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    placeholder="e.g. Living Room, Furniture"
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0f3d2e] focus:border-transparent transition-all text-black"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Short Description</label>
                  <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Short summary of the product..."
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0f3d2e] focus:border-transparent transition-all text-black"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Detailed Info (Specifications, etc.)</label>
                  <textarea
                    name="details"
                    value={formData.details}
                    onChange={handleInputChange}
                    placeholder="Provide full technical specifications or details..."
                    rows={4}
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0f3d2e] focus:border-transparent transition-all text-black resize-none"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Product Image</label>
                  <div className="flex flex-col gap-4">
                    {previewUrl && (
                      <div className="relative aspect-[4/5] w-1/2 mx-auto rounded-2xl overflow-hidden border border-gray-200 shadow-inner bg-gray-50">
                        <Image src={previewUrl} alt="Preview" fill className="object-cover" />
                        <div className="absolute inset-0 bg-black/20"></div>
                        <p className="absolute bottom-4 left-4 text-white text-xs font-bold bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">Preview</p>
                      </div>
                    )}
                    <label className="flex items-center justify-center w-full px-6 py-10 border-2 border-dashed border-gray-300 rounded-3xl hover:border-[#0f3d2e] transition-colors cursor-pointer group bg-gray-50/50">
                      <div className="text-center">
                        <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">🖼️</div>
                        <p className="text-sm font-bold text-gray-600">
                          {formData.image ? "Change Product Image" : "Click to upload product image"}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">High resolution portrait recommended (4:5)</p>
                      </div>
                      <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                    </label>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex gap-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="flex-1 px-8 py-4 rounded-2xl font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-[2] px-8 py-4 rounded-2xl font-bold text-white bg-[#0f3d2e] hover:bg-[#15523e] transition-all shadow-xl shadow-[#0f3d2e]/20 disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : (
                    isEditing ? "Update Product" : "Create Product"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
