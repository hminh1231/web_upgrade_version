import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useRevealAnimations() {
  useEffect(() => {
    // Small delay to let the DOM render after route change
    const timer = setTimeout(() => {
      const revealEls = document.querySelectorAll('.reveal');

      // Reset reveal elements to initial state so they animate fresh
      revealEls.forEach((elem) => {
        gsap.set(elem, { opacity: 0, y: 30 });
      });

      // Create scroll-triggered animations
      revealEls.forEach((elem) => {
        gsap.to(elem, {
          scrollTrigger: {
            trigger: elem,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
        });
      });

      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
      // Only kill scroll triggers we created, not all triggers globally
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []);
}
