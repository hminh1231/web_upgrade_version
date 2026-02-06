import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useRevealAnimations(deps = []) {
  useEffect(() => {
    // Small delay to let DOM render
    const timer = setTimeout(() => {
      const revealEls = document.querySelectorAll('.reveal');
      const triggers = [];

      revealEls.forEach((elem) => {
        const anim = gsap.to(elem, {
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
        triggers.push(anim);
      });

      ScrollTrigger.refresh();

      return () => {
        triggers.forEach((anim) => {
          if (anim.scrollTrigger) anim.scrollTrigger.kill();
          anim.kill();
        });
      };
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, deps);
}
