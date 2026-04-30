"use client";

import { useState } from "react";

const DiamondIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 0L11.5 6.5L18 9L11.5 11.5L9 18L6.5 11.5L0 9L6.5 6.5L9 0Z"
      fill="none"
      stroke="#071F07"
      strokeWidth="1.5"
    />
  </svg>
);

const faqData = [
  {
    question: "WHAT'S YOUR DESIGN STYLE?",
    answer: "Our design style is rooted in contemporary elegance, combining modern minimalism with warm, natural textures to create spaces that feel both sophisticated and inviting."
  },
  {
    question: "DO YOU OFFER CUSTOM FURNITURE?",
    answer: "Yes, we collaborate with skilled artisans to create custom furniture pieces tailored perfectly to your space, style preferences, and functional needs."
  },
  {
    question: "DO YOU HANDLE FULL HOME MAKEOVERS?",
    answer: "Absolutely. We manage everything from conceptual design to final installation, ensuring a seamless and stress-free transformation of your entire home."
  },
  {
    question: "HOW LONG DOES A PROJECT TAKE?",
    answer: "Project timelines vary depending on scope. A single room might take 4-6 weeks, while a full home makeover typically ranges from 3 to 6 months from concept to completion."
  },
  {
    question: "DO YOU PROVIDE 3D PREVIEWS?",
    answer: "Yes, we provide highly realistic 3D renderings and walkthroughs so you can perfectly visualize the final design, materials, and lighting before any work begins."
  },
  {
    question: "DO YOU HELP WITH COLOR SELECTION?",
    answer: "Of course. Our color consultation service is integral to our process. We help you select palettes that enhance natural light, suit your personal taste, and create the desired mood."
  }
];

const FaqItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-[#071F07]/10">
      <button
        onClick={onClick}
        className="w-full py-6 md:py-8 flex items-center justify-between text-left focus:outline-none group"
      >
        <h4 className="text-sm sm:text-base md:text-[17px] font-bold text-[#071F07] tracking-wide uppercase pr-4 group-hover:text-[#6E864A] transition-colors duration-300">
          {question}
        </h4>
        <div className={`transform transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <svg width="14" height="8" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1.5L8 8.5L15 1.5" stroke="#071F07" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100 pb-8' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-[#071F07]/70 text-sm md:text-base leading-relaxed pr-8">
          {answer}
        </p>
      </div>
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="w-full bg-white pb-20 lg:pb-32 px-4 md:px-10 lg:px-20 overflow-hidden">
      <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-20">

        {/* Left Column */}
        <div className="lg:col-span-1 flex flex-col md:gap-10 gap-6 ">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <DiamondIcon />
              <span className="text-[#071F07] text-sm font-semibold tracking-wider">
                FAQ
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-[80px] font-semibold uppercase tracking-tight text-[#071F07] leading-none mb-2">
              FAQ
            </h2>
          </div>

          <div className="bg-[#071F07] rounded-2xl p-8 lg:p-10 flex flex-col gap-5 shadow-xl">
            <h3 className="text-[#FFD900] text-xl font-semibold uppercase tracking-wide leading-snug">
              DIDN'T FIND YOUR ANSWER?
            </h3>
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              Reach out to our design experts for personalized guidance on your next home project.
            </p>
            <button className="bg-[#FFD900] text-[#071F07] text-sm md:text-base font-semibold py-3.5 px-8 rounded-full w-max hover:bg-[#E5C300] transition-colors mt-2">
              Contact Now
            </button>
          </div>
        </div>

        {/* Right Column (Accordion) */}
        <div className="lg:col-span-2 flex flex-col pt-2">
          {faqData.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Faq;
