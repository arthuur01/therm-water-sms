'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollArrow() {
  const arrowRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (arrowRef.current && containerRef.current) {
      // Animação de entrada do container
      gsap.fromTo(
        containerRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          delay: 1.5,
        }
      );

      // Animação de bounce da seta
      gsap.to(arrowRef.current, {
        y: 5,
        duration: 0.8,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        delay: 2.5,
      });

      // Fade out ao scrollar
      gsap.to(containerRef.current, {
        opacity: 0,
        ease: 'power1.in',
        scrollTrigger: {
          trigger: document.body,
          start: '80px top',
          end: '320px top',
          scrub: 1.5,
        },
      });
    }
  }, []);

  return (
    <div ref={containerRef} className="absolute bottom-8 left-8 flex items-center gap-2">
      <span className="font-inter text-[20px] text-[#205898]">
        Scroll for More
      </span>
      <svg
        ref={arrowRef}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#205898]"
      >
        <path
          d="M12 5V19M12 19L19 12M12 19L5 12"
          stroke="#205898"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
