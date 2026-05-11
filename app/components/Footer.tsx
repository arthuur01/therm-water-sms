'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const colsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cols = colsRef.current.filter(Boolean) as HTMLDivElement[];
    gsap.set(cols, { opacity: 0, y: 24 });

    gsap.to(cols, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power2.out',
      stagger: 0.12,
      scrollTrigger: {
        trigger: cols[0],
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
    });
  }, []);

  return (
    <footer
      className="w-full bg-[linear-gradient(160deg,#0a1628_0%,#0d2040_100%)] px-5 py-12 sm:px-8 sm:py-14 lg:px-16 lg:py-16"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 border-b border-[#009EE2]/12 pb-10 sm:grid-cols-2 sm:gap-8 sm:pb-12 lg:grid-cols-4 lg:gap-12">
        {/* Col 1 — Brand */}
        <div
          ref={(el) => { colsRef.current[0] = el; }}
          className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left"
        >
          <div className="flex flex-col items-center gap-3 sm:items-start">
            <Image src="/logo.png" alt="ThermWater Logo" width={52} height={52} className="h-[52px] w-[52px] object-contain" />
            <p className="font-inter font-light leading-tight text-center text-[30px] text-white/90 tracking-[-0.01em] sm:text-left sm:text-[34px] lg:text-[36px]">
              THERM<br />WATER
            </p>
          </div>
          <p
            className="mt-auto font-poppins font-light text-[11px] tracking-[0.18em] uppercase text-white/25"
          >
            ©2026<br />All Rights Reserved.
          </p>
        </div>

        {/* Col 2 — Contact */}
        <div
          ref={(el) => { colsRef.current[1] = el; }}
          className="flex flex-col gap-5 pt-1 text-center sm:text-left lg:gap-6"
        >
          <p className="font-poppins font-semibold text-[11px] tracking-[0.22em] uppercase text-[#009EE2]/70">
            Contact
          </p>
          <div className="flex flex-col gap-4">
            {[
              {
                icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.19 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="rgba(0,158,226,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                text: '(857) 237-9117',
              },
              {
                icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="rgba(0,158,226,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="22,6 12,13 2,6" stroke="rgba(0,158,226,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                text: 'inbox@thermwater.com',
              },
              {
                icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="rgba(0,158,226,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="10" r="3" stroke="rgba(0,158,226,0.6)" strokeWidth="2"/>
                  </svg>
                ),
                text: 'Orlando, Florida — USA',
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start justify-center gap-3 sm:justify-start">
                <span className="mt-0.5 shrink-0">{item.icon}</span>
                <span className="font-poppins font-light text-[13px] leading-snug text-white/55">
                  {item.text}
                </span>
              </div>
            ))}
            <a
              href="https://www.instagram.com/thermwater/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start justify-center gap-3 sm:justify-start"
            >
              <span className="mt-0.5 shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="rgba(0,158,226,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="4" stroke="rgba(0,158,226,0.6)" strokeWidth="2"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="rgba(0,158,226,0.6)"/>
                </svg>
              </span>
              <span className="font-poppins font-light text-[13px] leading-snug text-white/55 group-hover:text-[#009EE2] transition-colors duration-200">
                @thermwater
              </span>
            </a>
          </div>
        </div>

        {/* Col 3 — Services */}
        <div
          ref={(el) => { colsRef.current[2] = el; }}
          className="flex flex-col gap-5 pt-1 text-center sm:text-left lg:gap-6"
        >
          <p className="font-poppins font-semibold text-[11px] tracking-[0.22em] uppercase text-[#009EE2]/70">
            Services
          </p>
          <ul className="flex flex-col gap-3">
            {[
              'Pool Heating Automation',
              'Remote Temperature Control',
              'HVAC Control',
              'Smart Scheduling',
              '24/7 Monitoring & Support',
            ].map((s, i) => (
              <li
                key={i}
                className="font-poppins font-light text-[13px] tracking-wide uppercase text-white/45"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Property Managers */}
        <div
          ref={(el) => { colsRef.current[3] = el; }}
          className="flex flex-col gap-5 pt-1 text-center sm:text-left lg:gap-6"
        >
          <p className="font-poppins font-semibold text-[11px] tracking-[0.22em] uppercase text-[#009EE2]/70">
            For Property Managers
          </p>
          <p className="font-poppins font-light text-[13px] uppercase tracking-wide leading-relaxed text-white/45">
            Special pricing and dedicated support for property management professionals.
          </p>
          <a
            href="#contact"
            className="font-poppins font-semibold text-[12px] tracking-[0.15em] uppercase transition-colors duration-200 text-[#009EE2] hover:text-white"
          >
            Get in touch →
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto flex max-w-7xl items-center justify-center pt-6 text-center sm:justify-between sm:text-left">
        <p
          className="max-w-md font-poppins font-light text-[10px] leading-relaxed tracking-[0.18em] uppercase text-white/20 sm:max-w-none sm:text-[11px]"
        >
          ThermWater — Smart Pool Temperature and HVAC Control
        </p>
        
      </div>
    </footer>
  );
}
