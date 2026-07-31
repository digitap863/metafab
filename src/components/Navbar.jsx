"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const currentLink = navLinks.find(link => link.href === pathname);
    if (currentLink) {
      setActiveLink(currentLink.name);
    } else if (pathname === "/contact") {
      setActiveLink("Contact us");
    }
  }, [pathname]);

  return (
    <nav className="absolute top-0 left-0 w-full z-50" data-aos="fade-down" data-aos-duration="1000">
      {/* Main navbar container with semi-transparent dark green bg + blur */}
      <div className="bg-[#0F1D0C] backdrop-blur-md border-b border-[#C8952230]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logo.svg"
                alt="MetaFab Logo"
                width={180}
                height={70}
                className="h-10 md:h-16 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation Links - Centered */}
            <div className="hidden md:flex items-center gap-8 lg:gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveLink(link.name)}
                  className={`relative text-sm lg:text-[15px] font-medium tracking-wide transition-all duration-300 
                    ${
                      activeLink === link.name
                        ? "text-[#E8D5B0]"
                        : "text-[#B0A896] hover:text-[#E8D5B0]"
                    }
                  `}
                >
                  {link.name}
                  {/* Active underline indicator */}
                  {activeLink === link.name && (
                    <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-[#C89522] rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Buttons - Right side */}
            <div className="hidden md:flex items-center gap-3">
              {/* Download Brochure */}
              <a
                href="/brochure/Metafab_E_Brochure_compressed (1).pdf"
                download="Metafab_Brochure.pdf"
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-md transition-all duration-300 tracking-wide border border-[#9AA978] text-[#9AA978] hover:bg-[#9AA97815] hover:shadow-[0_0_15px_rgba(154,169,120,0.15)]"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Brochure
              </a>

              {/* Contact us */}
              <Link
                href="/contact"
                onClick={() => setActiveLink("Contact us")}
                className={`px-5 py-2 text-sm font-semibold rounded-md transition-all duration-300 tracking-wide border border-[#C89522]
                  ${activeLink === "Contact us" 
                    ? "bg-[#C89522] text-[#071F07] shadow-[0_0_15px_rgba(200,149,34,0.3)]" 
                    : "text-[#C89522] hover:bg-[#C8952215] hover:shadow-[0_0_15px_rgba(200,149,34,0.15)]"
                  }`}
              >
                Contact us
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 group"
              aria-label="Toggle menu"
            >
              <span
                className={`w-6 h-[2px] bg-[#C89522] rounded-full transition-all duration-300 
                  ${mobileMenuOpen ? "rotate-45 translate-y-[5px]" : ""}`}
              />
              <span
                className={`w-6 h-[2px] bg-[#C89522] rounded-full transition-all duration-300 
                  ${mobileMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`w-6 h-[2px] bg-[#C89522] rounded-full transition-all duration-300 
                  ${mobileMenuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom gradient accent line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C8952240] to-transparent" />

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out 
          ${mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="bg-[#071F07E6] backdrop-blur-lg border-b border-[#C8952220] px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => {
                setActiveLink(link.name);
                setMobileMenuOpen(false);
              }}
              className={`block px-4 py-3 rounded-lg text-sm font-medium tracking-wide transition-all duration-300
                ${
                  activeLink === link.name
                    ? "text-[#E8D5B0] bg-[#C8952210]"
                    : "text-[#B0A896] hover:text-[#E8D5B0] hover:bg-[#C8952208]"
                }
              `}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-3 px-4 pb-4 flex flex-col gap-2">
            {/* Download Brochure - Mobile */}
            <a
              href="/brochure/Metafab_E_Brochure_compressed (1).pdf"
              download="Metafab_Brochure.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-5 py-2.5 text-sm font-semibold rounded-md transition-all duration-300 tracking-wide border border-[#9AA978] text-[#9AA978] hover:bg-[#9AA97815]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Brochure
            </a>

            {/* Contact us - Mobile */}
            <Link
              href="/contact"
              onClick={() => {
                setActiveLink("Contact us");
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-center px-5 py-2.5 text-sm font-semibold rounded-md transition-all duration-300 tracking-wide border border-[#C89522]
                ${activeLink === "Contact us"
                  ? "bg-[#C89522] text-[#071F07]"
                  : "text-[#C89522] hover:bg-[#C8952215]"
                }`}
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
