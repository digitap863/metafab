import React from 'react';

const Design = () => {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 w-full h-full bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/designn.svg')" }}
      >
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between px-6 py-10 md:py-16 md:px-12 lg:px-20 max-w-[1920px] mx-auto">
        
        {/* Top Section */}
        <div className="flex items-start">
          <div className="flex flex-col items-center mr-4 mt-1">
            {/* Diamond shape */}
            <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z" fill="white"/>
            </svg>
            {/* Line */}
            <div className="w-[1px] h-24 md:h-32 bg-white my-2"></div>
            {/* Diamond shape */}
            <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z" fill="white"/>
            </svg>
          </div>
          <div className="text-white text-sm md:text-base font-bold tracking-widest leading-tight mt-0.5">
            DESIGN YOUR SPACE <br /> WITH PURPOSE
          </div>
        </div>

        {/* Middle Section - Main Title */}
        <div className="flex-1 flex flex-col justify-center -mt-5 md:-mt-10 pl-7">
          <h1 className="text-white font-semibold text-6xl sm:text-7xl  uppercase">
            Let's Design <br />
            Your Dream <br />
            <span className="text-[#F2E5CE]">Space</span>
          </h1>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-end items-end w-full pb-4 md:pb-8">
          <button className="bg-[#FFD400] hover:bg-yellow-400 text-black font-semibold text-sm md:text-base py-3 px-7 md:py-3 md:px-10 rounded-full transition-colors duration-300 cursor-pointer shadow-lg hover:shadow-xl">
            Start Your Project
          </button>
        </div>

      </div>
    </section>
  );
};

export default Design;