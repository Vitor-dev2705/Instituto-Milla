"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
      mirror: true,
      easing: "ease-out-cubic",
      offset: 100,
    });
    
    AOS.refresh();
  }, []);

  return null;
}