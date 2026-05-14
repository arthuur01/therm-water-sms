'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const logoRef = useRef<HTMLDivElement>(null);
  const thermRef = useRef<HTMLSpanElement>(null);
  const waterRef = useRef<HTMLSpanElement>(null);
  const contactRef = useRef<HTMLAnchorElement>(null);
  const pricesRef = useRef<HTMLAnchorElement>(null);
  const dashboardRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (logoRef.current && thermRef.current && waterRef.current && contactRef.current && pricesRef.current && dashboardRef.current) {
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

      gsap.fromTo(
        dashboardRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          delay: 0.7,
        }
      );
    }
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-start gap-23 bg-background px-4 py-2 md:justify-between md:gap-40 md:px-8 md:py-4">
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
          <span className="inline-block">THERM</span><br />
          <span className=" inline-block">WATER</span>
        </div>
      </div>

      {/* Terceiro elemento - PRICES + CONTACT */}
      <div className="ml-auto flex items-center md:ml-0">
        <div className="relative md:hidden">
          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((current) => !current)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#009EE2]/25 bg-white/80 text-[#0054A2] shadow-[0_8px_24px_rgba(0,84,162,0.12)] backdrop-blur-sm transition-colors duration-300"
          >
            <span className="flex flex-col gap-1.5">
              <span className={`block h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${isMobileMenuOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-5 rounded-full bg-current transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`block h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${isMobileMenuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </span>
          </button>

          {isMobileMenuOpen ? (
            <div className="absolute right-0 top-full mt-3 flex min-w-40 flex-col rounded-2xl border border-[#009EE2]/20 bg-white/95 p-2 shadow-[0_18px_50px_rgba(0,84,162,0.18)] backdrop-blur-sm">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-xl px-4 py-3 font-inter text-[14px] tracking-[0.08em] text-[#0054A2] transition-colors duration-300 hover:bg-[#009EE2]/8"
              >
                PRICES
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-xl px-4 py-3 font-inter text-[14px] tracking-[0.08em] text-[#0054A2] transition-colors duration-300 hover:bg-[#009EE2]/8"
              >
                CONTACT
              </a>
             
            </div>
          ) : null}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <a ref={pricesRef} href="#contact" className="font-inter cursor-pointer text-primary-blue hover:text-primary-blue-light transition-colors duration-300">
            PRICES
          </a>
          <a ref={contactRef} href="#contact" className="font-inter cursor-pointer text-primary-blue hover:text-primary-blue-light transition-colors duration-300">
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
}
