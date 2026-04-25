"use client";

import Marquee from "react-fast-marquee";

const StarIcon = () => (
  <svg 
    width="48" 
    height="48" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className="text-[#071F07] mx-6 sm:mx-10 md:mx-16 w-8 h-8 sm:w-12 sm:h-12 md:w-[60px] md:h-[60px]"
  >
    <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z"/>
  </svg>
);

const Marque = () => {
  // Words derived from the design references
  const row1 = ["ERGONOMIC", "ELEGANT", "DURABLE", "FUNCTIONAL", "PREMIUM", "MODERN"];
  const row2 = ["ECONOMIC", "CUSTOM", "INNOVATIVE", "SUSTAINABLE", "TIMELESS", "AESTHETIC"];

  return (
    <section className="w-full bg-white py-16 md:py-20 overflow-hidden flex flex-col gap-4 sm:gap-8">
      {/* Top row scrolling left */}
      <Marquee speed={70} autoFill direction="left">
        {row1.map((word, idx) => (
          <div key={`row1-${idx}`} className="flex items-center">
            <span className="text-[#071F07] text-4xl lg:text-5xl font-bold tracking-tight uppercase leading-none">
              {word}
            </span>
            <StarIcon />
          </div>
        ))}
      </Marquee>

      {/* Bottom row scrolling right */}
      <Marquee speed={70} autoFill direction="right">
        {row2.map((word, idx) => (
          <div key={`row2-${idx}`} className="flex items-center">
            <span className="text-[#071F07] text-4xl lg:text-5xl font-bold tracking-tight uppercase leading-none">
              {word}
            </span>
            <StarIcon />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Marque;
