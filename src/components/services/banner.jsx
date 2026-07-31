"use client";
import Image from 'next/image';
import { useState, useEffect } from "react";
import api from "@/lib/api";

function Banner() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await api.get("/user/services");
        if (response.data.success) {
          const sortedServices = [...response.data.data].sort((a, b) => {
            const numA = parseInt(a.number || "0", 10);
            const numB = parseInt(b.number || "0", 10);
            return numA - numB;
          });
          setServices(sortedServices);
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  if (loading) return null;
  if (services.length === 0) return (
    <div className="w-full bg-[#A7B582] py-40 text-center text-white">
      <h2 className="text-4xl font-bold">No Services Found</h2>
    </div>
  );
  return (
    <div className="w-full bg-[#A7B582] pt-26 pb-14 px-4 md:px-10 lg:px-20 lg:pt-40 lg:pb-24 overflow-hidden">
      <div className="max-w-[1400px] w-full flex gap-10 pb-10">

        <div
          className="hidden lg:flex w-[5%] items-stretch gap-2 py-4 self-stretch justify-center pr-6"

        >
        </div>
        <div className=" w-full mx-auto flex flex-col items-start text-left w-[95%]">
          {/* Main Heading */}
          <h1
            className="text-[12vw] sm:text-[12vw] md:text-[100px] lg:text-[130px]  font-semibold leading-none tracking-tighter mb-4 md:mb-6"
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
      <div className="max-w-[1400px] w-full mx-auto flex flex-col gap-8 md:gap-10 mt-7 md:mt-24">
        {services.map((service, index) => {
          const isEven = index % 2 !== 0;
          return (
            <div
              key={service._id}
              className={`flex flex-col lg:flex-row ${isEven ? 'lg:flex-row-reverse' : ''} justify-between gap-0 md:gap-6 items-stretch`}
            >
              {/* Image Container */}
              <div
                className="w-full lg:w-[54%] relative min-h-[300px] md:min-h-[400px] rounded-t-2xl md:rounded-2xl overflow-hidden"
                data-aos={isEven ? "fade-right" : "fade-left"}
                data-aos-duration="1000"
              >
                <Image src={service.image} alt={service.title} fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>

              {/* Text Box */}
              <div className="flex flex-col sm:flex-row items-start gap-6 w-full lg:w-[46%] bg-white rounded-b-2xl md:rounded-2xl p-4 md:p-10 ">
                <div className="w-20 h-20 rounded-full bg-[#8A9A5B] flex items-center justify-center text-white shrink-0 shadow-inner overflow-hidden relative md:block  hidden ">
                  <Image src="/services/icc.svg" alt="icon" width={32} height={32} className="object-contain h-20 w-auto" />
                </div>





                <div
                  className="flex flex-col justify-center"
                  data-aos={isEven ? "fade-right" : "fade-left"}
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <div className="flex items-center gap-6 md:mb-6 mb-3">
                    {/* Icon Circle */}

                    <span className="text-[#6E864A] text-4xl lg:text-[44px] font-semibold tracking-tighter">{service.number}</span>
                  </div>

                  <h3 className="text-2xl lg:text-[28px] leading-tight font-bold text-[#071F07] md:mb-6 mb-3 uppercase tracking-tight max-w-[85%]">
                    {service.title}
                  </h3>

                  <div className="w-full h-[1px] bg-gray-200 md:mb-6 mb-3"></div>

                  <p className="text-[#071F07]/80 text-sm md:text-base leading-relaxed md:mb-8 mb-3">
                    {service.description}
                  </p>

                  <ul className="flex flex-col gap-3">
                    {service.features?.map((feature, i) => (
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





            </div>
          );
        })}
      </div>

    </div>
  )
}

export default Banner