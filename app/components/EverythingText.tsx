'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function EverythingText() {
  const containerRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const line3Ref = useRef<HTMLDivElement>(null);
  const line4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const lines = [line1Ref.current, line2Ref.current, line3Ref.current, line4Ref.current];

    lines.forEach((line) => {
      if (!line) return;

      const letters = line.querySelectorAll('.letter');
      const underline = line.querySelector('.underline-anim');

      // Configurar estado inicial
      gsap.set(letters, { opacity: 0, y: 30 });
      if (underline) {
        gsap.set(underline, { scaleX: 0 });
      }

      // Criar timeline com ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: line,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      });

      // Animar letras
      tl.to(letters, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.02,
        ease: 'power3.out',
      });

      // Animar underline
      if (underline) {
        tl.to(
          underline,
          {
            scaleX: 1,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.3'
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const splitIntoLetters = (text: string) => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        className="letter inline-block"
        style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <div ref={containerRef} className="text-right max-w-4xl">
      <div ref={line1Ref} className="relative inline-block">
        <h2 className="font-poppins font-extralight text-[80px] leading-tight text-[#009EE2]">
          {splitIntoLetters('Everything')}
        </h2>
        <span className="underline-anim absolute bottom-0 left-0 w-full h-[2px] bg-[#009EE2] origin-left" />
      </div>
      <br />
      <div ref={line2Ref} className="relative inline-block">
        <h2 className="font-poppins font-extralight text-[80px] leading-tight text-[#009EE2]">
          {splitIntoLetters('You Need')}
        </h2>
        <span className="underline-anim absolute bottom-0 left-0 w-full h-[2px] bg-[#009EE2] origin-left" />
      </div>
      <br />
      <div ref={line3Ref} className="relative inline-block">
        <h2 className="font-poppins font-extralight text-[80px] leading-tight text-[#007AAE]">
          {splitIntoLetters('to Monitor')}
        </h2>
        <span className="underline-anim absolute bottom-0 left-0 w-full h-[2px] bg-[#007AAE] origin-left" />
      </div>
      <br />
      <div ref={line4Ref} className="relative inline-block">
        <h2 className="font-poppins font-extralight text-[80px] leading-tight text-[#007AAE]">
          {splitIntoLetters('Your HVAC')}
        </h2>
        <span className="underline-anim absolute bottom-0 left-0 w-full h-[2px] bg-[#007AAE] origin-left" />
      </div>
    </div>
  );
}
