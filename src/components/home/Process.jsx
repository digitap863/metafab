"use client";

import Image from "next/image";

const DiamondIcon = ({ white }) => (
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
      stroke={white ? "#FFFFFF" : "#1A1A1A"}
      strokeWidth="1.5"
    />
  </svg>
);

const StepCard = ({ step, title, desc, image }) => {
  return (
    <div className="relative z-10 flex flex-col gap-4 w-full max-w-[340px] items-start text-left bg-transparent mx-auto lg:mx-0">
      {/* Step Badge */}
      <div className="flex items-center gap-2.5">
        <div className="w-1.5 h-1.5 rounded-full bg-[#FFD900]" />
        <span className="text-[#FFD900] text-[13px] font-bold tracking-wider">Step {step}</span>
      </div>
      
      {/* Image */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3]">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-contain object-left lg:object-center" 
          sizes="(max-width: 1024px) 100vw, 33vw" 
        />
      </div>
      
      {/* Text Info */}
      <div className="flex flex-col gap-2 w-full">
        <h3 className="text-white text-xl font-bold uppercase tracking-wide">{title}</h3>
        <p className="text-white/60 text-[13px] leading-relaxed lg:max-w-[90%]">{desc}</p>
      </div>
    </div>
  );
};

const Process = () => {
  const steps = [
    { 
      step: "01", 
      title: "Discovery", 
      desc: "We start by understanding your style, needs, and vision for the space.", 
      image: "/pro01.svg" 
    },
    { 
      step: "02", 
      title: "Concept Design", 
      desc: "Our team creates mood boards and design ideas that capture your aesthetic.", 
      image: "/pro02.svg" 
    },
    { 
      step: "03", 
      title: "Planning", 
      desc: "Every detail is refined — from layout to materials — for perfect balance and function.", 
      image: "/pro03.svg" 
    },
    { 
      step: "04", 
      title: "Execution", 
      desc: "We bring the design to life with precision, care, and expert craftsmanship.", 
      image: "/pro04.svg" 
    },
    { 
      step: "05", 
      title: "Final Touch", 
      desc: "A complete review and styling ensure your space feels truly finished and personal.", 
      image: "/pro01.svg" 
    },
  ];

  return (
    <section className="relative w-full bg-[#0B120D] py-20 lg:py-32 overflow-hidden">
      {/* Background Frame Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/processbg.svg" 
          alt="Background frames" 
          fill 
          className="object-cover opacity-60" 
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
        
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-16 lg:gap-y-0">
          
          {/* ====== LEFT COLUMN ====== */}
          {/* Heading */}
          <div className="lg:col-start-1 lg:row-start-1 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <DiamondIcon white />
              <span className="text-white text-[13px] font-semibold tracking-widest uppercase">
                Our Process
              </span>
            </div>
            <h2 className="text-white text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
              OUR<br />DESIGN
            </h2>
          </div>

          {/* Step 02 - Concept Design */}
          <div className="lg:col-start-1 lg:row-start-2 relative lg:mt-16">
            <StepCard {...steps[1]} />
            
            {/* Arrow pointing right */}
            <div className="hidden lg:block absolute top-[50%] left-[100%] w-[124px]">
              <Image 
                src="/arrow.svg" 
                alt="Arrow" 
                width={124}
                height={124}
                className="object-contain " 
              />
            </div>
          </div>

          {/* Step 04 - Execution */}
          <div className="lg:col-start-1 lg:row-start-3 lg:mt-24 lg:p-16">
            <StepCard {...steps[3]} />
          </div>


          {/* ====== CENTER COLUMN ====== */}
          {/* Step 01 - Discovery */}
          <div className="lg:col-start-2 lg:row-start-1 relative lg:mt-16">
            <StepCard {...steps[0]} />

            {/* Arrow pointing down */}
            <div className="hidden lg:block absolute top-[40%] -left-[35%] ">
              <Image 
                src="/arrow.svg" 
                alt="Arrow" 
                width={124}
                height={124}
                className="object-contain" 
              />
            </div>
          </div>

          {/* Step 05 - Final Touch */}
          <div className="lg:col-start-2 lg:row-start-3 lg:mt-32">
            <StepCard {...steps[4]} />
          </div>


          {/* ====== RIGHT COLUMN ====== */}
          {/* Step 03 - Planning */}
          <div className="lg:col-start-3 lg:row-start-2 relative lg:mt-16">
            <StepCard {...steps[2]} />
            
            {/* Arrow pointing down */}
            <div className="hidden lg:block absolute top-[100%] left-[50%] -translate-x-1/2 rotate-90">
              <Image 
                src="/arrow.svg" 
                alt="Arrow" 
                width={124}
                height={124}
                className="object-contain" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;