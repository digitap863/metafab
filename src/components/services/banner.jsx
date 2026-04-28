import React from 'react';
import Image from 'next/image';

const services = [
  {
    id: 1,
    number: "01",
    title: "OFFICE SEATING SYSTEMS",
    description: "Ergonomically engineered seating systems designed for productivity, posture, and long working hours.",
    features: [
      "Adjustable ergonomics",
      "Breathable materials",
      "Executive & task seating",
      "Durable builds"
    ],
    image: "/services/img1.svg"
  },
  {
    id: 2,
    number: "02",
    title: "AUDITORIUM SEATING",
    description: "High-quality auditorium seating solutions designed for comfort, acoustics, and large-scale installations.",
    features: [
      "Space-optimized layouts",
      "Acoustic-friendly design",
      "Foldable seating systems",
      "High durability"
    ],
    image: "/services/img2.svg"
  },
  {
    id: 3,
    number: "03",
    title: "SOFAS",
    description: "Contemporary sofa collections crafted for reception areas, lounges, and executive spaces.",
    features: [
      "Premium upholstery",
      "Modular configurations",
      "Modern aesthetics",
      "Long-lasting comfort"
    ],
    image: "/services/img3.svg"
  },
  {
    id: 4,
    number: "04",
    title: "MODULAR WORKSTATIONS",
    description: "Flexible workstation systems designed to maximize collaboration, efficiency, and scalability.",
    features: [
      "Custom layouts",
      "Cable management",
      "Scalable systems",
      "Space efficiency"
    ],
    image: "/services/img4.svg"
  }
];

function Banner() {
  return (
    <div className="w-full bg-[#A7B582] pt-24 pb-16 px-6 md:px-10 lg:px-20 lg:pt-40 lg:pb-24 overflow-hidden">
      <div className="max-w-[1400px] w-full flex gap-10">

        <div 
          className="hidden lg:flex w-[5%] items-stretch gap-2 py-4 self-stretch justify-center pr-6"

        >
        </div>
        <div className=" w-full mx-auto flex flex-col items-start text-left w-[95%]">
        {/* Main Heading */}
        <h1 
          className="text-[14vw] sm:text-[12vw] md:text-[100px] lg:text-[130px]  font-semibold leading-none tracking-tighter mb-4 md:mb-8"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <span className="text-[#071F07]">OUR  </span>
          <span className="text-white">SERVICES</span>
        </h1>



        {/* Paragraph text */}
        <p 
          className="text-[#071F07]/70 text-sm sm:text-base md:text-lg max-w-[1100px] leading-relaxed font-medium"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
         We design and deliver high-performance furniture solutions that blend comfort, durability, and modern aesthetics—crafted for evolving workspaces and environments.
        </p>
        </div>
      </div>

      {/* Services List Section */}
      <div className="max-w-[1400px] w-full mx-auto flex flex-col gap-8 md:gap-12 mt-16 md:mt-24">
        {services.map((service, index) => {
          const isEven = index % 2 === 1; // 0-indexed: 1, 3 are visually "even" rows where image is right
          return (
            <div 
              key={service.id} 
              className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-6 md:gap-8`}
            >
              {/* Image Container */}
              <div 
                className="w-full lg:w-[50%] relative h-[300px] md:h-[450px] lg:h-[600px] rounded-[32px] overflow-hidden "
                data-aos={isEven ? "fade-left" : "fade-right"}
                data-aos-duration="1000"
              >
                <Image src={service.image} alt={service.title} fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>

              {/* Text Box */}
              <div 
                className="w-full lg:w-[40%] bg-white rounded-[32px] p-8 md:p-10 lg:p-14 flex flex-col justify-center shadow-sm"
                data-aos={isEven ? "fade-right" : "fade-left"}
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <div className="flex items-center gap-6 mb-6">
                  {/* Icon Circle */}
                  <div className="w-14 h-14 rounded-full bg-[#8A9A5B] flex items-center justify-center text-white shrink-0 shadow-inner overflow-hidden relative">
                    <Image src="/services/icc.svg" alt="icon" width={28} height={28} className="object-contain" />
                  </div>
                  <span className="text-[#8A9A5B] text-4xl lg:text-[44px] font-semibold tracking-tighter">{service.number}</span>
                </div>

                <h3 className="text-2xl lg:text-[28px] leading-tight font-bold text-[#071F07] mb-6 uppercase tracking-tight max-w-[85%]">
                  {service.title}
                </h3>

                <div className="w-full h-[1px] bg-gray-200 mb-6"></div>

                <p className="text-[#071F07]/80 text-sm md:text-base leading-relaxed mb-8">
                  {service.description}
                </p>

                <ul className="flex flex-col gap-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm md:text-base text-[#071F07]/80 font-medium">
                      <svg width="10" height="10" viewBox="0 0 10 10" className="text-[#A7B582] shrink-0 mt-[6px]">
                        <path d="M5 0L10 5L5 10L0 5L5 0Z" fill="currentColor" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  )
}

export default Banner