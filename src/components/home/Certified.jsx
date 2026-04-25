import React from 'react';

const Certified = () => {
  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden flex flex-col items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bggg.png')" }}
      >
        <div className="absolute inset-0 bg-[#071F07]/40 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col items-center text-center">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z" stroke="white" strokeWidth="1" fill="transparent"/>
          </svg>
          <span className="text-white text-xs md:text-sm font-medium tracking-widest uppercase">Why Metafab</span>
        </div>
        
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium tracking-tight uppercase mb-12 lg:mb-20 drop-shadow-md">
          Certified Excellence
        </h2>

        {/* Logos Grid */}
        <div className="w-full flex flex-wrap items-center justify-center gap-10 md:gap-12 lg:gap-16 xl:gap-24">
          <img src="/logo1.svg" alt="Certification 1" className="h-16 md:h-20 lg:h-24 object-contain opacity-100 hover:opacity-100 transition-opacity hover:scale-105 duration-500" />
          <img src="/logo2.svg" alt="Certification 2" className="h-16 md:h-20 lg:h-24 object-contain opacity-100 hover:opacity-100 transition-opacity hover:scale-105 duration-500" />
          <img src="/logo3.svg" alt="Certification 3" className="h-16 md:h-20 lg:h-24 object-contain opacity-100 hover:opacity-100 transition-opacity hover:scale-105 duration-500" />
          <img src="/logo4.svg" alt="Certification 4" className="h-16 md:h-20 lg:h-24 object-contain opacity-100 hover:opacity-100 transition-opacity hover:scale-105 duration-500" />
          <img src="/logo5.svg" alt="Certification 5" className="h-16 md:h-20 lg:h-24 object-contain opacity-100 hover:opacity-100 transition-opacity hover:scale-105 duration-500" />
        </div>
      </div>
    </section>
  );
};

export default Certified;
