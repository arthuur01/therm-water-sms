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
    return text.split(/(\s+)/).map((chunk, chunkIndex) => {
      if (/^\s+$/.test(chunk)) {
        return (
          <span key={`space-${chunkIndex}`} style={{ whiteSpace: 'pre' }}>
            {chunk}
          </span>
        );
      }

      return (
        <span key={`word-${chunkIndex}`} className="inline-block whitespace-nowrap">
          {chunk.split('').map((char, letterIndex) => (
            <span key={`${chunkIndex}-${letterIndex}`} className="letter inline-block">
              {char}
            </span>
          ))}
        </span>
      );
    });
  };

  return (
    <div ref={containerRef} className="w-full max-w-none text-center lg:max-w-4xl lg:text-right">
      <div className="flex flex-col items-center gap-1 sm:gap-2 lg:items-end lg:gap-0">
        <div ref={line1Ref} className="relative inline-block">
          <h2 className="font-poppins font-extralight text-[56px] leading-none text-[#009EE2] sm:text-[68px] lg:text-[80px]">
            {splitIntoLetters('Everything')}
          </h2>
          <span className="underline-anim absolute bottom-0 left-0 w-full h-0.5 bg-[#009EE2] origin-left" />
        </div>
        <div ref={line2Ref} className="relative inline-block">
          <h2 className="font-poppins font-extralight text-[56px] leading-none text-[#009EE2] sm:text-[68px] lg:text-[80px]">
            {splitIntoLetters('You Need')}
          </h2>
          <span className="underline-anim absolute bottom-0 left-0 w-full h-0.5 bg-[#009EE2] origin-left" />
        </div>
        <div ref={line3Ref} className="relative inline-block">
          <h2 className="font-poppins font-extralight text-[56px] leading-none text-[#007AAE] sm:text-[68px] lg:text-[80px]">
            {splitIntoLetters('to Monitor')}
          </h2>
          <span className="underline-anim absolute bottom-0 left-0 w-full h-0.5 bg-[#007AAE] origin-left" />
        </div>
        <div ref={line4Ref} className="relative inline-block">
          <h2 className="font-poppins font-extralight text-[56px] leading-none text-[#007AAE] sm:text-[68px] lg:text-[80px]">
            {splitIntoLetters('Your HVAC')}
          </h2>
          <span className="underline-anim absolute bottom-0 left-0 w-full h-0.5 bg-[#007AAE] origin-left" />
        </div>
      </div>
    </div>
  );
}
