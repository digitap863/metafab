import React from 'react';

const Collection = () => {
  const products = [
    {
      id: 1,
      category: "Chair",
      image: "/pro1.svg",
      title: "LEATHER ARMCHAIR",
      price: "₹40,999.00 INR",
      fullButton: true,
    },
    {
      id: 2,
      category: "Table",
      image: "/pro2.svg",
      title: "WOODEN CHAIR",
      price: "₹50,999.00 INR",
      fullButton: false,
    },
    {
      id: 3,
      category: "Office Chair",
      image: "/pro3.svg",
      title: "LEATHER BED",
      price: "₹ 20,999.00 INR",
      fullButton: false,
    }
  ];

  return (
    <section className="w-full bg-[#FFFFFF] py-16 md:py-24 px-6 md:px-12 lg:px-20 mx-auto">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-12 md:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z" stroke="black" strokeWidth="1" fill="transparent"/>
            </svg>
            <span className="text-black text-xs md:text-sm font-semibold tracking-widest uppercase">Featured Products</span>
          </div>
          <h2 className="text-[#071F07] text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-center">
            Explore Our Collection
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-[#6B854A] rounded-[16px] p-6 flex flex-col relative group transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
              
              {/* Category Tag */}
              <div className="bg-white rounded-md px-4 py-1.5 w-max absolute top-6 left-6 z-10 shadow-sm">
                <span className="text-black text-[11px] md:text-xs font-bold">{product.category}</span>
              </div>

              {/* Image Container */}
              <div className="h-64 sm:h-72 lg:h-80 w-full flex items-center justify-center mt-10 mb-6">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105" 
                />
              </div>

              {/* Product Info & Button */}
              {/* Product Info & Button */}
              <div className="mt-auto relative w-full h-[52px]">
                {/* Title & Price (Moves up on hover) */}
                <div className="absolute left-0 bottom-0 flex flex-col pr-24 z-10 transition-transform duration-300 group-hover:-translate-y-[60px]">
                  <h3 className="text-black font-bold text-lg md:text-xl uppercase tracking-wide leading-tight line-clamp-2">{product.title}</h3>
                  <p className="text-black/80 text-xs md:text-[13px] font-semibold mt-1">{product.price}</p>
                </div>

                {/* Default Small Button (Fades out) */}
                <button className="absolute bottom-0 right-0 bg-[#0E1B0E] hover:bg-black text-white rounded-lg px-5 py-3 flex items-center justify-center gap-2.5 shadow-md shrink-0 transition-all duration-300 opacity-100 group-hover:opacity-0 group-hover:-translate-y-4 pointer-events-auto group-hover:pointer-events-none z-20">
                  <span className="text-xs font-semibold tracking-wide">Cart</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M17.21 9l-4.38-6.56a.996.996 0 0 0-1.66 0L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                  </svg>
                </button>

                {/* Hover Full Button (Fades in) */}
                <button className="absolute bottom-0 left-0 w-full bg-[#0E1B0E] hover:bg-black text-white rounded-lg py-3.5 flex items-center justify-center shadow-md transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto z-20">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                    <path d="M17.21 9l-4.38-6.56a.996.996 0 0 0-1.66 0L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                  </svg>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-12 md:mt-16">
          <button className="bg-[#FFD900] hover:bg-[#F0C800] border  text-black font-bold text-sm md:text-base px-8 py-3.5 rounded-full transition-colors shadow-sm">
            View More
          </button>
        </div>

      </div>
    </section>
  );
};

export default Collection;
