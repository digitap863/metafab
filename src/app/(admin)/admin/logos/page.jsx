"use client";

import React, { useState, useEffect } from "react";
import api from "@/lib/api";
import Image from "next/image";

export default function AdminLogosPage() {
  const [logos, setLogos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const fetchLogos = async () => {
    try {
      const response = await api.get("/admin/logos");
      if (response.data.success) {
        setLogos(response.data.data);
      }
    } catch (err) {
      console.error("Error fetching logos:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogos();
  }, []);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    setError("");

    const formData = new FormData();
    formData.append("logo", file);

    try {
      const response = await api.post("/admin/logos", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.data.success) {
        setLogos([response.data.data, ...logos]);
      }
    } catch (err) {
      setError("Failed to upload logo. Please try again.");
      console.error("Upload error:", err);
    } finally {
      setUploading(false);
      // Reset input
      e.target.value = null;
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this logo?")) return;

    try {
      const response = await api.delete(`/admin/logos/${id}`);
      if (response.data.success) {
        setLogos(logos.filter((logo) => logo._id !== id));
      }
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to delete logo");
    }
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-heading font-bold text-gray-900">Client Logos</h1>
          <p className="text-gray-500 mt-1">Manage the logos displayed in the client section.</p>
        </div>
        
        <label className={`relative cursor-pointer bg-[#0f3d2e] hover:bg-[#15523e] text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-[#0f3d2e]/20 ${uploading ? 'opacity-70 pointer-events-none' : ''}`}>
          {uploading ? "Uploading..." : "Add New Logo"}
          <input 
            type="file" 
            className="hidden" 
            accept="image/*" 
            onChange={handleFileUpload} 
            disabled={uploading}
          />
        </label>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-6 border border-red-100 flex items-center gap-2">
          <span>⚠️</span> {error}
        </div>
      )}

      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="aspect-square bg-gray-100 animate-pulse rounded-2xl"></div>
          ))}
        </div>
      ) : logos.length === 0 ? (
        <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-3xl p-20 text-center">
          <p className="text-gray-400 text-lg">No logos uploaded yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {logos.map((logo) => (
            <div key={logo._id} className="group relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex items-center justify-center aspect-square overflow-hidden">
              <Image 
                src={logo.logo} 
                alt="Client Logo" 
                width={150} 
                height={150} 
                className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              
              <button 
                onClick={() => handleDelete(logo._id)}
                className="absolute top-2 right-2 p-2 bg-red-50 text-red-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-100"
                title="Delete Logo"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
