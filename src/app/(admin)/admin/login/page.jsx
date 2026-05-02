"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await api.post("/admin/auth/login", { email, password });

      if (response.data.success) {
        router.push("/admin/dashboard");
      } else {
        setError(response.data.message || "Invalid credentials");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4 font-inter">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-[#0f3d2e]/20 blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-[#0f3d2e]/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="w-full max-w-md relative">
        <div className="bg-[#111] border border-[#222] p-8 rounded-2xl shadow-2xl backdrop-blur-sm">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-heading font-bold text-white mb-2">Admin Login</h1>
            <p className="text-gray-400 text-sm">Access the MetaFab management portal</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-black/50 border border-[#333] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#0f3d2e] focus:ring-1 focus:ring-[#0f3d2e] transition-all"
                placeholder="admin@metafab.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-black/50 border border-[#333] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#0f3d2e] focus:ring-1 focus:ring-[#0f3d2e] transition-all"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-500 text-sm p-3 rounded-lg text-center">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#0f3d2e] hover:bg-[#15523e] text-white font-semibold py-3 rounded-lg transition-all transform active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Authenticating..." : "Sign In"}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-[#222] text-center">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} MetaFab. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
