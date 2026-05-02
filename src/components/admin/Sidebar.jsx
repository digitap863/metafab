"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import api from "@/lib/api";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    { title: "Dashboard", path: "/admin/dashboard", icon: "📊" },
    { title: "Services", path: "/admin/services", icon: "🛠️" },
    { title: "Projects", path: "/admin/projects", icon: "📁" },
    { title: "Products", path: "/admin/products", icon: "📦" },
    { title: "Client Logos", path: "/admin/logos", icon: "🏢" },
  ];

  const handleLogout = async () => {
    try {
      const response = await api.post("/admin/auth/logout");
      if (response.data.success) {
        router.push("/admin/login");
        router.refresh();
      }
    } catch (error) {
      console.error("Logout failed:", error);
      // Fallback: clear cookie manually if possible or just redirect
      router.push("/admin/login");
    }
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-100 flex flex-col h-screen sticky top-0">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-2xl font-heading font-bold text-[#0f3d2e]">MetaFab</h2>
        <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mt-1">Admin Panel</p>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? "bg-[#0f3d2e] text-white shadow-lg shadow-[#0f3d2e]/20"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium text-sm">{item.title}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-100 mt-auto">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-between group px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-all duration-300 font-semibold text-sm border border-transparent hover:border-red-100 shadow-sm hover:shadow-red-100/50"
        >
          <div className="flex items-center space-x-3">
            <span className="text-xl group-hover:rotate-12 transition-transform duration-300">👋</span>
            <span>Logout</span>
          </div>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
