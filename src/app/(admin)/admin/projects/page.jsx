"use client";

import React, { useState, useEffect } from "react";
import api from "@/lib/api";
import Image from "next/image";

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    year: "",
    image: null,
  });

  const [previewUrl, setPreviewUrl] = useState("");

  const fetchProjects = async () => {
    try {
      const response = await api.get("/admin/projects");
      if (response.data.success) {
        setProjects(response.data.data);
      }
    } catch (err) {
      console.error("Error fetching projects:", err);
      setError("Failed to load projects.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleOpenModal = (project = null) => {
    if (project) {
      setIsEditing(true);
      setCurrentId(project._id);
      setFormData({
        title: project.title,
        location: project.location,
        year: project.year,
        image: null,
      });
      setPreviewUrl(project.image);
    } else {
      setIsEditing(false);
      setCurrentId(null);
      setFormData({
        title: "",
        location: "",
        year: "",
        image: null,
      });
      setPreviewUrl("");
    }
    setIsModalOpen(true);
    setError("");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData({ title: "", location: "", year: "", image: null });
    setPreviewUrl("");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
    data.append("title", formData.title);
    data.append("location", formData.location);
    data.append("year", formData.year);
    if (formData.image) {
      data.append("image", formData.image);
    }

    try {
      let response;
      if (isEditing) {
        response = await api.put(`/admin/projects/${currentId}`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        if (!formData.image) {
            setError("Image is required for new projects");
            setSubmitting(false);
            return;
        }
        response = await api.post("/admin/projects", data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      if (response.data.success) {
        fetchProjects();
        handleCloseModal();
      }
    } catch (err) {
      console.error("Submission error:", err);
      setError(err.response?.data?.message || "Failed to save project.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this project?")) return;

    try {
      const response = await api.delete(`/admin/projects/${id}`);
      if (response.data.success) {
        setProjects(projects.filter((p) => p._id !== id));
      }
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to delete project");
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="text-4xl font-heading font-bold text-gray-900 tracking-tight">Projects</h1>
          <p className="text-gray-500 mt-2 text-lg">Showcase your portfolio of completed works.</p>
        </div>
        
        <button 
          onClick={() => handleOpenModal()}
          className="bg-[#0f3d2e] hover:bg-[#15523e] text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-[#0f3d2e]/20 flex items-center gap-2 group"
        >
          <span className="text-xl group-hover:scale-125 transition-transform">+</span>
          Add New Project
        </button>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 animate-pulse">
              <div className="aspect-[4/3] bg-gray-100 rounded-2xl mb-4"></div>
              <div className="h-6 bg-gray-100 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-100 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      ) : projects.length === 0 ? (
        <div className="bg-white border-2 border-dashed border-gray-100 rounded-[2.5rem] p-20 text-center shadow-sm">
          <div className="text-6xl mb-4">📁</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">No projects yet</h3>
          <p className="text-gray-400 max-w-md mx-auto mb-8">Get started by adding your first project to showcase your expertise to potential clients.</p>
          <button 
            onClick={() => handleOpenModal()}
            className="text-[#0f3d2e] font-bold hover:underline"
          >
            Add your first project →
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project._id} className="group bg-white border border-gray-100 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button 
                    onClick={() => handleOpenModal(project)}
                    className="p-3 bg-white text-gray-900 rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
                    title="Edit Project"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                  </button>
                  <button 
                    onClick={() => handleDelete(project._id)}
                    className="p-3 bg-white text-red-500 rounded-xl hover:bg-red-50 transition-colors shadow-lg"
                    title="Delete Project"
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
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">{project.title}</h3>
                  <span className="text-sm font-bold text-[#0f3d2e] bg-[#0f3d2e]/5 px-3 py-1 rounded-full">{project.year}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span className="text-sm">{project.location}</span>
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
            <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <h2 className="text-2xl font-bold text-gray-900">{isEditing ? "Edit Project" : "Add New Project"}</h2>
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
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Project Title</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="e.g. Modern Residential Complex"
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0f3d2e] focus:border-transparent transition-all text-black"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="e.g. Dubai, UAE"
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0f3d2e] focus:border-transparent transition-all text-black"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Year</label>
                  <input
                    type="text"
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    placeholder="e.g. 2024"
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0f3d2e] focus:border-transparent transition-all text-black"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Project Image</label>
                  <div className="flex flex-col gap-4">
                    {previewUrl && (
                      <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-gray-200 shadow-inner bg-gray-50">
                        <Image src={previewUrl} alt="Preview" fill className="object-cover" />
                        <div className="absolute inset-0 bg-black/20"></div>
                        <p className="absolute bottom-4 left-4 text-white text-xs font-bold bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">Image Preview</p>
                      </div>
                    )}
                    <label className="flex items-center justify-center w-full px-6 py-10 border-2 border-dashed border-gray-300 rounded-3xl hover:border-[#0f3d2e] transition-colors cursor-pointer group bg-gray-50/50">
                      <div className="text-center">
                        <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">📸</div>
                        <p className="text-sm font-bold text-gray-600">
                          {formData.image ? "Change Project Image" : "Click to upload project image"}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">High resolution recommended (16:9)</p>
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
                    isEditing ? "Update Project" : "Create Project"
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
