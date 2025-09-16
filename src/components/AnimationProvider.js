"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AnimationProvider({ children }) {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
      offset: 100,
      delay: 100,
      disable: 'mobile' // Disable on mobile devices for better performance
    });
  }, []);

  return <>{children}</>;
}
