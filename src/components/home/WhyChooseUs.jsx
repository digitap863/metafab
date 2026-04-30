"use client"


const WhyChooseUs = () => {
  return (
    <section className="w-full bg-[#FFFFFF] py-16 md:py-24 px-4 md:px-12 lg:px-20 mx-auto">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-10 md:mb-14" data-aos="fade-up" data-aos-duration="1000">
          <div className="flex items-center gap-2 mb-3">
            <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z" stroke="black" strokeWidth="1" fill="transparent" />
            </svg>
            <span className="text-black text-xs md:text-sm font-semibold tracking-widest uppercase">Advantages</span>
          </div>
          <h2 className="text-[#071F07] text-4xl md:text-5xl lg:text-6xl font-semibold uppercase tracking-tight text-center">
            Why Choose Us
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 md:h-[650px] lg:h-[750px]">

          {/* Column 1 */}
          <div className="flex flex-col gap-4 md:gap-6 h-full" data-aos="fade-up" data-aos-delay="200">
            {/* Unique Designs */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 flex flex-col items-center justify-center aspect-[4/3] md:aspect-auto w-full md:h-[40%] relative  transition-shadow">
              <img src="/choosesec/loader.svg" alt="Loader" className="w-32 h-32 md:w-40 md:h-40 object-contain animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-black font-medium text-xs md:text-sm leading-tight tracking-wider uppercase mt-1">Unique<br />Designs</span>
              </div>
            </div>

            {/* Unique Design Aesthetic */}
            <div className="rounded-xl overflow-hidden relative  aspect-[3/4] md:aspect-auto w-full md:h-[60%] group md:block hidden ">
              <div className="absolute inset-0 bg-black/30 z-10 transition-colors duration-500 group-hover:bg-black/10"></div>
              <img src="/choosesec/theater.png" alt="Theater" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 z-20 p-8 flex flex-col">
                <h3 className="text-white font-medium text-lg md:text-xl lg:text-2xl uppercase tracking-wide leading-tight">
                  Unique Design<br />Asthetic
                </h3>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4 md:gap-6 h-full" data-aos="fade-up" data-aos-delay="400">
            {/* Proven Work */}
            <div className="bg-[#6B854A] rounded-xl p-6 lg:p-8 relative overflow-hidden  flex flex-col justify-between aspect-square md:aspect-auto w-full md:h-[45%]">
              <div className="z-10 w-[65%]">
                <h3 className="text-white font-medium text-sm md:text-base lg:text-lg uppercase tracking-wide leading-tight mb-8">
                  Proven Work And<br />Trusted Reputation
                </h3>
                <div className="mt-auto">
                  <h1 className="text-white font-medium text-5xl lg:text-6xl tracking-tighter font-sora ">300+</h1>
                  <div className="text-white/90 text-xs lg:text-sm mt-1 font-medium">Project Launched</div>
                </div>
              </div>

              {/* Images */}
              <div className="absolute right-0 top-0 w-1/2 h-full z-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <img src="/choosesec/workimglar.svg" alt="Project 1" className="absolute bottom-[5%] right-[-5%] w-[85%] drop-shadow-xl transform -rotate-12 z-10 transition-transform duration-500 hover:scale-110 hover:z-40" />
                  <img src="/choosesec/workimgmed.svg" alt="Project 2" className="absolute bottom-[35%] right-[25%] w-[65%] drop-shadow-xl transform rotate-6 z-20 transition-transform duration-500 hover:scale-110 hover:z-40" />
                  <img src="/choosesec/workimgsml.png" alt="Project 3" className="absolute top-[10%] right-[10%] w-[50%] drop-shadow-xl transform rotate-12 z-30 transition-transform duration-500 hover:scale-110 hover:z-40" />
                </div>
              </div>
            </div>

            {/* Metafab Logo */}
            <div className="bg-white rounded-xl border border-gray-100  flex items-center justify-center aspect-[2/1] md:aspect-auto w-full md:h-[25%] overflow-hidden  md:block hidden ">
              <img src="/choosesec/metafab.svg" alt="Metafab Logo" className="w-2/3 md:w-4/5 object-fit w-full h-auto" />
            </div>

            {/* Chairs */}
            <div className="bg-white rounded-xl px-4 pt-4 pb-0 md:flex items-end justify-center aspect-[2/1] md:aspect-auto w-full md:h-[30%] relative overflow-hidden group  hidden ">
              <img src="/choosesec/chair1.svg" alt="Chair 1" className="h-[85%] md:h-[90%] object-contain object-bottom -mr- z-0 transition-transform duration-500 group-hover:-translate-x-2" />
              <img src="/choosesec/chair2.svg" alt="Chair 2" className="h-full md:h-[105%] object-contain object-bottom z-10 -ml-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:scale-105" />
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4 md:gap-6 h-full" data-aos="fade-up" data-aos-delay="600">
            {/* Client-focused Approach */}
            <div className="bg-[#1C201C] rounded-xl overflow-hidden relative  aspect-[3/4] md:aspect-auto w-full md:h-[70%] group">
              <img src="/choosesec/clientfocusbg.svg" alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-[0.50] blur-[3px]" />
              <div className="absolute inset-0 z-20 flex flex-col p-6">
                <div className="w-full  rounded-[16px] overflow-hidden  mt-1 relative border-[2px] border-white/90">
                  <img src="/choosesec/clientfocusimg.svg" alt="Client" className="w-full  transition-transform duration-700 group-hover:scale-105" />
                </div>
                <h3 className="text-white font-medium text-lg md:text-xl lg:text-2xl uppercase tracking-wide leading-tight mt-auto mb-2 ">
                  Client-Focused<br />Approach
                </h3>
              </div>
            </div>

            {/* Attention to Details */}
            <div className="bg-[#111111] rounded-xl overflow-hidden relative  aspect-[2/1] md:aspect-auto w-full md:h-[30%] group">
              <img src="/choosesec/attentionbg.svg" alt="Attention BG" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 z-20 p-6 lg:p-8 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-2">
                  <svg width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z" fill="white" />
                  </svg>
                </div>
                <h3 className="text-white font-medium text-sm md:text-base lg:text-lg uppercase tracking-wide leading-tight ">
                  Attention To<br />Details
                </h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
