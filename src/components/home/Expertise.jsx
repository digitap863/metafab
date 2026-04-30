"use client"

import Image from 'next/image';

const Expertise = () => {
  return (
    <section className="w-full bg-[#f9fafb] py-16 md:py-24 px-4 md:px-12 lg:px-20 mx-auto">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row w-full gap-6 lg:gap-8 min-h-[500px]">

        {/* Left Card */}
        <div className="bg-[#0B110B] rounded-[24px] p-8 md:p-13 flex flex-col items-center justify-center text-center shadow-lg h-full border border-white/5 md:w-[40%] w-full" data-aos="fade-up" data-aos-duration="800">
          <h2 className="text-[#D1D5DB] text-xl md:text-3xl lg:text-4xl font-semibold uppercase tracking-widest mb-6 md:mb-8">
            Customization<br />Expertise
          </h2>

          <div className="flex items-center justify-center mb-6 md:mb-8">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6">
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#9CA3AF" />
            </svg>
          </div>

          <h2 className="text-[#C2943A] text-xl md:text-3xl lg:text-4xl font-semibold uppercase tracking-widest mb-6 md:mb-8 drop-shadow-md">
            Tailored To Your Needs
          </h2>

          <div className="flex items-center justify-center mb-6 md:mb-8">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6">
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#9CA3AF" />
            </svg>
          </div>

          <h2 className="text-[#D1D5DB] text-xl md:text-3xl lg:text-4xl font-semibold uppercase tracking-widest">
            Industry<br />Assurance
          </h2>
        </div>

        {/* Right Card */}
        <div className="relative rounded-[24px] overflow-hidden shadow-lg h-full flex flex-col justify-center border border-white/5 bg-[#1A1A1A] md:w-[60%] w-full" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
          {/* Background Image */}
          <div
            className="absolute inset-0 z-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/bg.svg')" }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 p-8 md:p-16 flex flex-col gap-6 md:gap-12">

            {/* Item 1 */}
            <div className="flex items-center gap-4 md:gap-6 group cursor-default" data-aos="fade-left" data-aos-duration="600" data-aos-delay="300">
              <Image
                src="/ico1.svg"
                alt="Certification"
                width={40}
                height={40}
                className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-white text-base md:text-xl font-medium tracking-wide uppercase">
                Advanced Manufacturing Technology
              </span>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-4 md:gap-6 group cursor-default" data-aos="fade-left" data-aos-duration="600" data-aos-delay="400">
              <Image
                src="/ico2.svg"
                alt="Certification"
                width={40}
                height={40}
                className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-white text-base md:text-xl font-medium tracking-wide">
                Competitive Pricing
              </span>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-4 md:gap-6 group cursor-default" data-aos="fade-left" data-aos-duration="600" data-aos-delay="500">
              <Image
                src="/ico3.svg"
                alt="Certification"
                width={40}
                height={40}
                className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-white text-base md:text-xl font-medium tracking-wide">
                South India Dealer Network
              </span>
            </div>

            {/* Item 4 */}
            <div className="flex items-center gap-4 md:gap-6 group cursor-default" data-aos="fade-left" data-aos-duration="600" data-aos-delay="600">
              <Image
                src="/ico4.svg"
                alt="Certification"
                width={40}
                height={40}
                className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-white text-base md:text-xl font-medium tracking-wide">
                Extra Warranty
              </span>
            </div>

            {/* Item 5 */}
            <div className="flex items-center gap-4 md:gap-6 group cursor-default" data-aos="fade-left" data-aos-duration="600" data-aos-delay="700">
              <Image
                src="/ico5.svg"
                alt="Certification"
                width={40}
                height={40}
                className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-white text-base md:text-xl font-medium tracking-wide">
                Timely Delivery
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Expertise;
