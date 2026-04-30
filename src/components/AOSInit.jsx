"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { usePathname } from "next/navigation";

export const AOSInit = () => {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-out-cubic",
      offset: 100, // Trigger animations slightly before they enter the viewport
    });
    
    // Initial refresh to catch any elements rendered after the first mount
    const timer = setTimeout(() => {
      AOS.refresh();
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Refresh AOS whenever the route changes
  useEffect(() => {
    AOS.refresh();
  }, [pathname]);

  return null;
};
