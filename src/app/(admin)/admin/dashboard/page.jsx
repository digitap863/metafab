"use client";

import React, { useEffect, useState } from "react";
import api from "@/lib/api";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    projects: 0,
    services: 0,
    logos: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch stats from existing API endpoints if they exist
        // For now, we'll try to fetch them or just show 0
        const [projectsRes, servicesRes, logosRes] = await Promise.allSettled([
          api.get("/admin/projects"),
          api.get("/admin/services"),
          api.get("/admin/logos"),
        ]);

        setStats({
          projects: projectsRes.status === "fulfilled" ? projectsRes.value.data.length || 0 : 0,
          services: servicesRes.status === "fulfilled" ? servicesRes.value.data.length || 0 : 0,
          logos: logosRes.status === "fulfilled" ? logosRes.value.data.length || 0 : 0,
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    { title: "Total Projects", value: stats.projects, icon: "📁", color: "bg-blue-500/10 text-blue-500" },
    { title: "Active Services", value: stats.services, icon: "🛠️", color: "bg-green-500/10 text-green-500" },
    { title: "Client Logos", value: stats.logos, icon: "🏢", color: "bg-purple-500/10 text-purple-500" },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-heading font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">Welcome back, Admin. Here's what's happening today.</p>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-pulse">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-32 bg-gray-100 rounded-xl"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {statCards.map((stat, index) => (
            <div key={index} className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">{stat.title}</p>
                  <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                </div>
                <div className={`text-2xl p-3 rounded-lg ${stat.color}`}>
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <p className="text-sm text-gray-500 italic">No recent activity to show.</p>
          </div>
        </div>
        <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-4">System Status</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-green-50/50 rounded-lg">
              <span className="text-sm font-medium text-green-700">Database</span>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full uppercase">Online</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50/50 rounded-lg">
              <span className="text-sm font-medium text-green-700">Storage (Cloudinary)</span>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full uppercase">Online</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
