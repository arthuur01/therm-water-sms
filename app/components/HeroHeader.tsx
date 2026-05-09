'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HeroHeader() {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const underlineRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (h1Ref.current && h2Ref.current) {
      const h1Letters = h1Ref.current.querySelectorAll('.letter');
      const h2Letters = h2Ref.current.querySelectorAll('.letter');

      // Configurar estado inicial
      gsap.set(h1Letters, { y: 60, opacity: 0 });
      gsap.set(h2Letters, { y: 20, opacity: 0 });

      // Animar H1
      gsap.to(h1Letters, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.03,
        ease: 'power3.out',
        delay: 0.3,
      });

      // Animar H2
      gsap.to(h2Letters, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.02,
        ease: 'power3.out',
        delay: 0.5,
      });

      // Animar underline
      if (underlineRef.current) {
        gsap.fromTo(
          underlineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.2,
            ease: 'power3.out',
            delay: 1.2,
          }
        );
      }
    }
  }, []);

  const splitIntoLetters = (text: string, color: string, underline = false) => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        className={`letter inline-block ${color}`}
        style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <>
      {/* H1 - Perfect Pool Temperature */}
      <h1
        ref={h1Ref}
        className="font-poppins font-extralight text-[90px] text-left w-370 leading-tight"
      >
        {splitIntoLetters('Smart HVAC', 'text-[#009EE2]')}
        {splitIntoLetters(' Monitoring & Control', 'text-[#007AAE]')}
      </h1>

      {/* H2 - Remote monitoring... */}
      <h2
        ref={h2Ref}
        className="font-poppins font-extralight text-[35px] text-right w-370 mt-4 leading-tight"
      >
        {splitIntoLetters('Real-time  ', 'text-[#009CDF]')}
        {splitIntoLetters('HVAC protection ', 'text-[#007AAE]')}
        {splitIntoLetters(' that ', 'text-[#009CDF]')}
        <span className="relative inline-block">
          {splitIntoLetters('prevents failure and revenue loss', 'text-[#007AAE]')}
          <span
            ref={underlineRef}
            className="absolute bottom-0 left-0 w-full h-[2px] bg-[#007AAE] origin-left"
            style={{ transform: 'scaleX(0)' }}
          />
        </span>
      </h2>
    </>
  );
}
