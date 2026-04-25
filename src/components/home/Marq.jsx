"use client";

import Marquee from "react-fast-marquee";

const Marq = () => {
  const items = [
    "20% OFF FIRST CONSULTATION",
    "10% OFF THIS MONTH",
    "FREE SPACE PLANNING"
  ];

  return (
    <div className="w-full bg-white py-10">
    <div className="w-full bg-[#6C854B] py-3 md:py-4 overflow-hidden">
      <Marquee speed={50} autoFill direction="left">
        {items.map((text, idx) => (
          <div key={idx} className="flex items-center">
            <span className="text-white/80 text-base md:text-lg font-light px-6 md:px-8 tracking-[0.2em]">
              + +
            </span>
            <span className="text-[#071F07] text-xs md:text-[15px] font-bold tracking-widest uppercase leading-none mt-0.5">
              {text}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
    </div>
  );
};

export default Marq;