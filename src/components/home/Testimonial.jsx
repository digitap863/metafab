"use client";

import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
      image: "/testiimg1.svg",
      name: "PRIYA SHARMA",
      role: "Operation Head, InnovateCorp"
    },
    {
      id: 2,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
      image: "/testiimg1.svg",
      name: "PRIYA SHARMA",
      role: "Operation Head, InnovateCorp"
    },
    {
      id: 3,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
      image: "/testiimg1.svg",
      name: "PRIYA SHARMA",
      role: "Operation Head, InnovateCorp"
    }
  ];

  return (

    <section className="relative bg-[#FFFFFF] py-10">
      <div className="relative w-full py-20 lg:py-32 overflow-hidden flex items-center justify-center min-h-[600px] lg:min-h-[800px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/testibg.svg')" }}
        >
          {/* Dark Overlays for text readability */}
          {/* <div className="absolute inset-0 bg-[#0D160D] mix-blend-multiply opacity-70"></div> */}
          {/* <div className="absolute inset-0 bg-black/40"></div> */}
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-12 lg:px-20 flex flex-col items-center">
          {/* Header */}
          <h4 className="text-white/90 text-xs md:text-sm font-medium tracking-widest mb-3">Testimonials</h4>
          <h2 className="text-white text-2xl md:text-5xl lg:text-6xl font-medium tracking-tight uppercase text-center md:mb-8 mb-4">
            Our Happy Customers
          </h2>

          {/* Slider Container */}
          <div className="w-full relative px-10 md:px-20 lg:px-28 mt-4">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              navigation={{
                prevEl: '.testi-prev',
                nextEl: '.testi-next',
              }}
              className="w-full"
            >
              {[...testimonials, ...testimonials].map((item, index) => (
                <SwiperSlide key={`${item.id}-${index}`}>
                  <div className="flex flex-col items-center justify-center text-center">

                    {/* Stars */}
                    <div className="flex gap-1.5 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FFD400" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                        </svg>
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-white/90 text-sm md:text-sm lg:text-[15px] leading-relaxed md:max-w-4xl max-w-5xl mx-auto mb-10 font-light">
                      {item.text}
                    </p>

                    {/* Profile Image */}
                    <div className="w-32 h-24 md:w-40 md:h-28 lg:w-[180px] lg:h-[120px] rounded-xl overflow-hidden mb-5 shadow-lg border border-white/20">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>

                    {/* Name and Role */}
                    <h3 className="text-white font-bold text-lg tracking-wide uppercase mb-1">{item.name}</h3>
                    <p className="text-[#FFD400] text-xs font-medium">{item.role}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Arrows */}
            <button
              className="testi-prev absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 border-2 border-white/70 rounded-lg flex items-center justify-center bg-black/40 hover:bg-black/60 transition-colors cursor-pointer text-white/70"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button
              className="testi-next absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 border-2 border-white/70 rounded-lg flex items-center justify-center bg-black/40 hover:bg-black/60 transition-colors cursor-pointer text-white/70"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Testimonial;
