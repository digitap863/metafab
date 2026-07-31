"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Licenses", href: "/licenses" },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg
        className="w-4 h-4"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    icon: (
      <svg
        className="w-4 h-4"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg
        className="w-4 h-4"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/919995429554",
    icon: (
      <svg
        className="w-4 h-4"
        fill="currentColor"
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <path d="M16.04 3C8.84 3 3 8.74 3 15.82c0 2.5.73 4.94 2.1 7.03L3 29l6.34-2.03a13.2 13.2 0 0 0 6.7 1.82h.01C23.16 28.79 29 23.05 29 15.97 29 8.89 23.16 3 16.04 3zm0 23.39c-2.03 0-4.02-.54-5.76-1.56l-.41-.24-3.76 1.2 1.23-3.64-.27-.44a10.2 10.2 0 0 1-1.57-5.47c0-5.66 4.69-10.27 10.48-10.27 5.78 0 10.48 4.61 10.48 10.27 0 5.66-4.7 10.27-10.42 10.27zm5.75-7.71c-.31-.15-1.84-.89-2.12-.99-.28-.1-.48-.15-.68.15-.2.3-.78.99-.95 1.19-.18.2-.35.22-.66.07-.31-.15-1.29-.47-2.46-1.5-.91-.8-1.52-1.79-1.7-2.09-.18-.3-.02-.46.13-.61.14-.14.31-.37.47-.55.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.62-.93-2.22-.25-.59-.5-.51-.68-.52h-.58c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.46 0 1.45 1.07 2.85 1.22 3.05.15.2 2.1 3.34 5.2 4.55.74.29 1.32.46 1.77.59.74.2 1.41.17 1.94.1.59-.09 1.84-.75 2.1-1.48.26-.73.26-1.36.18-1.48-.08-.12-.28-.2-.59-.35z" />
      </svg>
    ),
  }
];

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission
    setEmail("");
  };

  return (
    <footer className="relative w-full overflow-hidden">
      {/* Background image layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/footerbgimg.svg"
          alt=""
          fill
          className="object-cover"
          priority={false}
        />
      </div>

      {/* Content layer */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-10 md:pt-14 pb-0">
        <div className="max-w-7xl mx-auto">
          {/* Main footer content inside bordered box */}
          <div
            className="border border-white/60 rounded-2xl p-6 md:p-10 lg:p-12"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              {/* Left Column - Logo, Address, Contact */}
              <div
                className="space-y-4"
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                {/* Footer Logo */}
                <div>
                  <Image
                    src="/footerlogo.svg"
                    alt="MetaFab Logo"
                    width={260}
                    height={105}
                    className="h-auto w-[220px] md:w-[260px]"
                  />
                </div>

                {/* Address */}
                <div className="space-y-1">
                  <p className="text-[#FFFFFF] text-sm leading-relaxed">
                    E1, Rathna Gardens, 4th Floor,
                  </p>
                  <p className="text-[#FFFFFF] text-sm leading-relaxed">
                    S Janatha Rd, Palarivattom,
                  </p>
                  <p className="text-[#FFFFFF] text-sm leading-relaxed">
                    Kochi, Kerala 682025
                  </p>
                </div>

                {/* Email */}
                <p className="text-[#FFFFFF]/80 text-sm font-medium ">info@metafab.in</p>

                {/* Phone */}
                <p className="text-[#FFFFFF] text-sm font-medium tracking-wide">
                  CALL US: 9995429554, 9995429553, 0484-2330678
                </p>

                {/* Social Icons */}
                <div className="flex items-center gap-3 pt-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-9 h-9 rounded-full border border-[#FFFFFF] flex items-center justify-center 
    text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-black
    transition-all duration-300"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Right Column - Tagline, Newsletter, Quick Links */}
              <div
                className="space-y-8"
                data-aos="fade-left"
                data-aos-delay="400"
                data-aos-duration="1000"
              >
                {/* Tagline */}
                <h3 className="text-[#FFFFFF]/70 text-xl md:text-xl font-semibold tracking-wide leading-snug">
                  DESIGNS THAT DEFINE
                  <br />
                  YOUR SPACE
                </h3>

                {/* Newsletter form */}
                <form onSubmit={handleSubmit} className="flex flex-col lg:block gap-3 max-w-xl relative">

                  {/* Input */}
                  <div className="w-full relative ">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your mail"
                      className="w-full bg-[#2E3E24]/30 backdrop-blur-md 
                        border border-white/10 
                        rounded-full px-6 py-4 
                        text-sm text-white placeholder:text-white/50
                        focus:outline-none focus:border-white/30 focus:bg-white/10
                        transition-all duration-300"
                    />
                  </div>

                  {/* Button */}
                  <button
                    type="submit"
                    className="bg-transparent text-white relative lg:absolute top-0 right-0 
                    px-7 py-3.5 rounded-full 
                    border border-white/40 
                    hover:bg-white/10 hover:border-white/70
                    transition-all duration-300 whitespace-nowrap mt-3 lg:mt-0 w-full lg:w-auto"
                  >
                    Submit Now
                  </button>

                </form>

                {/* Quick Links */}
                <div className="space-y-4 lg:space-y-5 py-8 lg:py-16 bg-[#2E3E24]/30 px-5 rounded-lg">
                  <h4 className="text-[#C89522] text-lg md:text-xl font-semibold tracking-wide uppercase">
                    Quick Links
                  </h4>
                  <nav className="grid grid-cols-2 lg:flex lg:flex-wrap lg:justify-between gap-4 pt-1">
                    {quickLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="text-[#FFFFFF]/80 text-sm hover:text-[#E8D5B0] transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar - outside the bordered box */}
          <div
            className="flex flex-col sm:flex-row items-center justify-between pt-2 pb-5 px-2 gap-3 border-t border-[#353535] mt-10"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="1000"
            data-aos-offset="0"
          >
            <p className="text-[#D7D7D7] text-xs">
              Copyright © Tapclone &nbsp;|&nbsp; All rights reserved.
            </p>
            <Link
              href="/privacy"
              className="text-[#D7D7D7] text-xs hover:text-[#B8B0A0] transition-colors duration-300"
            >
              Privacy Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
