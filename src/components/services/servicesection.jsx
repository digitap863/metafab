import Image from 'next/image';

const ServiceSection = () => {
  return (
    <div className="w-full flex flex-col items-center bg-white pb-10">
      {/* HOW WE WORK Section */}
      <section className="relative w-full h-auto py-24 md:h-[500px] md:py-0 flex flex-col items-center justify-center bg-[#111]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/services/workbgimg.svg" alt="How we work background" fill className="object-cover opacity-50" />
        </div>

        <div className="relative z-10 text-center text-white flex flex-col items-center w-full max-w-[1200px] px-6 mt-8">
          <h2 className="text-3xl md:text-5xl font-semibold mb-8 md:mb-20 tracking-tight" data-aos="fade-up">HOW WE WORK</h2>

          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1000px] gap-8 md:gap-0">

            {/* Step 1 */}
            <div className="flex flex-col items-center text-center w-36 shrink-0" data-aos="fade-up" data-aos-delay="100">
              <div className="h-[72px] w-[72px] mb-4 flex items-center justify-center relative">
                <Image src="/services/ico1.svg" alt="Consultation" width={64} height={64} className="object-contain" />
              </div>
              <div className="text-xl font-bold mb-1 tracking-wider">01</div>
              <div className="text-lg font-base text-white/90">Consultation</div>
            </div>

            {/* Arrow 1 */}
            <div className="flex md:flex-1 items-center justify-center text-yellow-500 rotate-90 md:rotate-0 my-2 md:my-0" data-aos="fade-in" data-aos-delay="200">
              <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12H46M46 12L36 2M46 12L36 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center w-36 shrink-0" data-aos="fade-up" data-aos-delay="300">
              <div className="h-[72px] w-[72px] mb-4 flex items-center justify-center relative">
                <Image src="/services/ico2.svg" alt="Design Planning" width={64} height={64} className="object-contain" />
              </div>
              <div className="text-xl font-bold mb-1 tracking-wider">02</div>
              <div className="text-lg font-base text-white/90">Design Planning</div>
            </div>

            {/* Arrow 2 */}
            <div className="flex md:flex-1 items-center justify-center text-yellow-500 rotate-90 md:rotate-0 my-2 md:my-0" data-aos="fade-in" data-aos-delay="400">
              <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12H46M46 12L36 2M46 12L36 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center w-36 shrink-0" data-aos="fade-up" data-aos-delay="500">
              <div className="h-[72px] w-[72px] mb-4 flex items-center justify-center relative">
                <Image src="/services/ico3.svg" alt="Manufacturing" width={64} height={64} className="object-contain" />
              </div>
              <div className="text-xl font-bold mb-1 tracking-wider">03</div>
              <div className="text-lg font-base text-white/90">Manufacturing</div>
            </div>

            {/* Arrow 3 */}
            <div className="flex md:flex-1 items-center justify-center text-yellow-500 rotate-90 md:rotate-0 my-2 md:my-0" data-aos="fade-in" data-aos-delay="600">
              <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12H46M46 12L36 2M46 12L36 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center w-36 shrink-0" data-aos="fade-up" data-aos-delay="700">
              <div className="h-[72px] w-[72px] mb-4 flex items-center justify-center relative">
                <Image src="/services/ico4.svg" alt="Installation" width={64} height={64} className="object-contain" />
              </div>
              <div className="text-xl font-bold mb-1 tracking-wider">04</div>
              <div className="text-lg font-base text-white/90">Installation</div>
            </div>

          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="w-full max-w-[1400px] mx-auto px-4 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1 */}
          <div className="bg-[#6E864A] text-white p-6 xl:p-8 rounded-xl shadow-md transition-transform hover:-translate-y-1 duration-300" data-aos="fade-up" data-aos-delay="100">
            <div className="flex flex-row items-start gap-6">
              <div className="w-[42px] h-[42px] xl:w-12 xl:h-12 shrink-0 mt-1">
                <Image src="/services/vec1.svg" alt="Custom Design" width={48} height={48} className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-[16px] xl:text-[20px] font-medium leading-snug mb-2 uppercase tracking-wide">CUSTOM DESIGN<br className="hidden lg:block" /> SOLUTIONS</h3>
                <p className="text-base text-white/90  pr-2">Tailored solutions that match your space and requirements.</p>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-[#6E864A] text-white p-6 xl:p-8 rounded-xl shadow-md transition-transform hover:-translate-y-1 duration-300" data-aos="fade-up" data-aos-delay="200">
            <div className="flex flex-row items-start gap-6">
              <div className="w-[42px] h-[42px] xl:w-12 xl:h-12 shrink-0 mt-1">
                <Image src="/services/vec2.svg" alt="High Quality Materials" width={48} height={48} className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-[16px] xl:text-[20px] font-medium leading-snug mb-2 uppercase tracking-wide">HIGH-QUALITY<br className="hidden lg:block" /> MATERIALS</h3>
                <p className="text-base text-white/90  pr-2">We use premium materials for strength, comfort & longevity.</p>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-[#6E864A] text-white p-6 xl:p-8 rounded-xl shadow-md transition-transform hover:-translate-y-1 duration-300" data-aos="fade-up" data-aos-delay="300">
            <div className="flex flex-row items-start gap-6">
              <div className="w-[42px] h-[42px] xl:w-12 xl:h-12 shrink-0 mt-1">
                <Image src="/services/vec3.svg" alt="Turnkey Project Execution" width={48} height={48} className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-[16px] xl:text-[20px] font-medium leading-snug mb-2 uppercase tracking-wide">TURNKEY PROJECT<br className="hidden lg:block" /> EXECUTION</h3>
                <p className="text-base text-white/90  pr-2">End-to-end execution from concept to completion.</p>
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="bg-[#6E864A] text-white p-6 xl:p-8 rounded-xl shadow-md transition-transform hover:-translate-y-1 duration-300" data-aos="fade-up" data-aos-delay="400">
            <div className="flex flex-row items-start gap-6">
              <div className="w-[42px] h-[42px] xl:w-12 xl:h-12 shrink-0 mt-1">
                <Image src="/services/vec4.svg" alt="After-Sales Support" width={48} height={48} className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-[16px] xl:text-[20px] font-medium leading-snug mb-2 uppercase tracking-wide">AFTER-SALES<br className="hidden lg:block" /> SUPPORT</h3>
                <p className="text-base text-white/90  pr-2">Dedicated support for maintenance and assistance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="w-full max-w-[1400px] mx-auto px-4 md:px-10 pb-16">
        <div className="relative w-full rounded-2xl overflow-hidden bg-[#1a1a1a] text-white py-20 md:py-24 flex flex-col items-center text-center shadow-2xl" data-aos="zoom-in">
          <div className="absolute inset-0 z-0">
            <Image src="/services/buildimg.svg" alt="Build space" fill className="object-cover opacity-50 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/80"></div>
          </div>

          <div className="relative z-10 px-4 flex flex-col items-center w-full">
            <h2 className="text-3xl sm:text-4xl md:text-[52px] font-medium mb-6 tracking-tight leading-tight">
              LET&apos;S BUILD YOUR <span className="text-[#FFD900]">NEXT SPACE</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg mb-10 font-medium text-white/90 max-w-[800px]">
              Innovative design, Quality craftsmanship, Timeless comfort.
            </p>

            <button className="bg-[#FFD900] hover:bg-[#F0C800] text-black font-semibold py-3.5 px-8 rounded-2xl transition-all duration-300 flex items-center gap-2 transform hover:scale-105 text-[15px] border border-white">
              Get Consultation
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceSection;
