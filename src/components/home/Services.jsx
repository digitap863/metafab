"use client";

import Image from "next/image";
import Link from "next/link";

const DiamondIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 0L11.5 6.5L18 9L11.5 11.5L9 18L6.5 11.5L0 9L6.5 6.5L9 0Z"
      fill="none"
      stroke="#1A1A1A"
      strokeWidth="1.5"
    />
  </svg>
);

const ServiceCard = ({ title, desc, image }) => {
  // Extract first word for the underline styling
  const words = title.split(" ");
  const firstWord = words[0];
  const restTitle = words.slice(1).join(" ");

  return (
    <div className="bg-[#7B8B56] p-4 sm:p-5 flex flex-col gap-5 h-full">
      {/* Image Container */}
      <div className="relative w-full aspect-square bg-[#8B9B66] overflow-hidden">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover" 
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Subtle dark gradient overlay at the bottom matching the design */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 pointer-events-none" />
      </div>
      
      {/* Content */}
      <div className="flex flex-col gap-3">
        <h3 className="text-[#1A1A1A] text-[15px] sm:text-[17px] font-semibold tracking-wide uppercase">
          <span className="border-b border-[#1A1A1A] pb-0.5">{firstWord}</span> {restTitle}
        </h3>
        <p className="text-[#2a3022] text-sm leading-relaxed font-medium">
          {desc}
        </p>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      id: 1,
      title: "OFFICE SEATING SYSTEMS",
      desc: "Ergonomic chairs engineered for comfort and long working hours.",
      image: "/Ser1.svg"
    },
    {
      id: 2,
      title: "MODULAR WORKSTATIONS",
      desc: "Flexible, scalable systems designed for modern teams.",
      image: "/Ser2.svg"
    },
    {
      id: 3,
      title: "TURNKEY INTERIOR PROJECTS",
      desc: "End-to-end design and execution tailored to your vision.",
      image: "/Ser3.svg"
    },
    {
      id: 4,
      title: "CUSTOM FURNITURES",
      desc: "Designed to match your space, workflow, and brand identity.",
      image: "/Ser4.svg"
    }
  ];

  return (
    <section className="bg-white py-20 lg:py-32 w-full">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        
        {/* Top Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-t border-[#E5E5E5] pt-12 gap-10 lg:gap-0">
          
          {/* Left Column (4/12) */}
          <div className="lg:col-span-4 flex flex-col gap-8 lg:border-r border-[#E5E5E5] lg:pr-12">
            <div className="flex items-center gap-2.5">
              <DiamondIcon />
              <span className="text-[#1A1A1A] text-[13px] font-semibold tracking-widest uppercase">
                Our Services
              </span>
            </div>
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
              <Image 
                src="/Service.svg" 
                alt="Service Desk" 
                fill 
                className="object-cover" 
              />
            </div>
          </div>
          
          {/* Right Column (8/12) */}
          <div className="lg:col-span-8 flex flex-col items-start justify-center gap-10 lg:pl-12">
            <h2 className="text-[#101C12] text-3xl sm:text-4xl md:text-5xl font-bold uppercase leading-[1.1] tracking-tight">
              CURATED OFFICE FURNITURE SOLUTIONS ALIGNED WITH YOUR WORKSPACE NEEDS AND PURPOSE
            </h2>
            <Link 
              href="/services" 
              className="inline-flex items-center justify-center bg-[#FFD900] text-[#1A1A1A] text-sm font-semibold px-8 py-3.5 rounded-full border border-[#1A1A1A] hover:bg-yellow-400 transition-colors"
            >
              View All Services
            </Link>
          </div>
          
        </div>

        {/* Bottom Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
          {services.map((service) => (
            <ServiceCard 
              key={service.id} 
              title={service.title} 
              desc={service.desc} 
              image={service.image} 
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
