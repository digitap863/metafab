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

const ProjectCard = ({ title, year, image, color, link = "#" }) => {
  return (
    <Link 
      href={link} 
      className="group flex w-full rounded-2xl overflow-hidden h-[380px]  md:h-[660px] "
    >
      {/* Vertical Strip */}
      <div className={`w-12 sm:w-14 flex flex-col justify-between py-6 sm:py-8 px-1 shrink-0 ${color} `}>
        <h3 
          className="text-white text-xl font-semibold tracking- uppercase whitespace-nowrap mx-auto pl-2 " 
          style={{ writingMode: 'vertical-lr' }}
        >
          {title}
        </h3>
        <span 
          className="text-white text-xl font-semibold mx-auto pl-3" 
          style={{ writingMode: 'vertical-lr' }}
        >
          {year}
        </span>
      </div>
      
      {/* Image Container */}
      <div className="relative w-full h-full overflow-hidden bg-gray-200">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-105" 
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        {/* Subtle hover overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </Link>
  );
};

const Projects = () => {
  const leftProjects = [
    {
      id: 1,
      title: "FEDERAL BANK, ERNAKULAMK",
      year: "2024",
      image: "/proj1.svg",
      color: "bg-[#708253]",
    },
    {
      id: 2,
      title: "FEDERAL BANK, ERNAKULAMK",
      year: "2024",
      image: "/proj3.svg",
      color: "bg-[#708253]",
    }
  ];

  const rightProjects = [
    {
      id: 3,
      title: "TECHNOPARK, TRIVANDRUM",
      year: "2024",
      image: "/proj2.svg",
      color: "bg-[#1A2E1A]",
    },
    {
      id: 4,
      title: "NATIONAL INSTITUTE OF TECHNOLOGY, CALICUT",
      year: "2025",
      image: "/proj4.svg",
      color: "bg-[#839665]",
    }
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 xl:gap-x-16 gap-y-12">
          
          {/* ==== LEFT COLUMN ==== */}
          <div className="flex flex-col gap-6 sm:gap-10">
            {/* Header Title (Left side) */}
            <div className="flex flex-col gap-3 mb-2 lg:mb-6">
              <div className="flex items-center gap-2">
                <DiamondIcon />
                <span className="text-[#1A1A1A] text-[11px] font-bold tracking-widest uppercase">
                  Our Projects
                </span>
              </div>
              <h2 className="text-[#1A1A1A] text-4xl md:text-6xl font-bold uppercase  tracking-tight whitespace-nowrap">
                Our Featured <span className="text-[#2D3A1F]">Work</span>
              </h2>
            </div>

            {/* Left Column Projects */}
            {leftProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>

          {/* ==== RIGHT COLUMN ==== */}
          <div className="flex flex-col gap-6 sm:gap-10">
            {/* Right side Text & Button */}
            <div className="flex flex-col items-end justify-end gap-6 lg:pt-[4.5rem] xl:pt-[5rem] mb-2 lg:mb-6">
                <div>
              <p className="text-[#6B6B6B] text-[13px] sm:text-sm leading-relaxed max-w-[420px] pb-7">
                Discover our collection of thoughtfully designed interiors — each project reflecting modern aesthetics, functionality, and comfort for everyday living.
              </p>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center bg-[#FFD900] hover:bg-[#1A1A1A] text-[#1A1A1A] hover:text-white rounded-full px-7 py-3 text-xs font-bold tracking-wide transition-all duration-300 w-fit"
              >
                View All Projects
              </Link>
              </div>
            </div>

            {/* Right Column Projects */}
            {rightProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Projects;
