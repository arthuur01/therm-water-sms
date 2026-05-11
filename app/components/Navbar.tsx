'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

export default function Navbar() {
  const logoRef = useRef<HTMLDivElement>(null);
  const thermRef = useRef<HTMLSpanElement>(null);
  const waterRef = useRef<HTMLSpanElement>(null);
  const contactRef = useRef<HTMLAnchorElement>(null);
  const pricesRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (logoRef.current && thermRef.current && waterRef.current && contactRef.current && pricesRef.current) {
      // Animação da logo
      gsap.fromTo(
        logoRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.5,
          ease: 'power2.inOut',
          delay: 0.5,
        }
      );

      // Animação THERM vindo da esquerda
      gsap.fromTo(
        thermRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          delay: 0.2,
        }
      );

      // Animação WATER vindo da direita
      gsap.fromTo(
        waterRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          delay: 0.2,
        }
      );

      // Animação CONTACT vindo da direita
      gsap.fromTo(
        contactRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          delay: 0.4,
        }
      );

      // Animação PRICES vindo da direita
      gsap.fromTo(
        pricesRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          delay: 0.55,
        }
      );
    }
  }, []);

  return (
    <nav className="flex justify-between items-center px-3 py-2 md:px-8 md:py-4 fixed top-0 md:left-0 md:right-0 z-50 bg-background gap-45">
      {/* Primeiro elemento - THERM WATER */}
      <div className="hidden md:block font-inter text-[20px] text-[#0054A2] hover:text-[#0077CC] transition-colors duration-300">
        <span ref={thermRef} className="inline-block">THERM</span>
        <br/>
        <span ref={waterRef} className="ml-4 inline-block">WATER</span>
      </div>

      {/* Segundo elemento - Logo no meio */}
      <div ref={logoRef} className="flex items-center gap-2 md:block">
        <Image
          src="/logo.png"
          alt="Logo"
          width={60}
          height={60}
          className="object-contain"
        />
        <div className="font-inter text-[16px] leading-none text-[#0054A2] md:hidden">
          <span className="inline-block">THERM</span>
          <span className=" inline-block">WATER</span>
        </div>
      </div>

      {/* Terceiro elemento - PRICES + CONTACT */}
      <div className="flex items-center gap-5">
        <a ref={pricesRef} href="#contact" className="font-inter cursor-pointer text-primary-blue hover:text-primary-blue-light transition-colors duration-300">
          PRICES
        </a>
        <a ref={contactRef} href="#contact" className="font-inter cursor-pointer text-primary-blue hover:text-primary-blue-light transition-colors duration-300">
          CONTACT
        </a>
      </div>
    </nav>
  );
}
