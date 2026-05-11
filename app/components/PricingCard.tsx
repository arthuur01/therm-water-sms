'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  'Pool heater automation system',
  'Variable temperatures for pool and spa',
  'Create and modify schedules for the pump',
  'Reservation support with automatic control',
  '24/7 customer support',
  'Remote control and monitor your heater',
  'View and monitor temperature in real-time',
  'Monthly report of system usage',
  'Energy efficient and fast results',
  'Free system updates',
];

export default function PricingCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const card = cardRef.current;
    const items = itemsRef.current.filter(Boolean) as HTMLLIElement[];
    if (!card) return;

    gsap.set(card, { opacity: 0, y: 70, scale: 0.96 });
    gsap.set(items, { opacity: 0, y: 16 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: 'top 82%',
        toggleActions: 'play none none none',
      },
    });

    tl.to(card, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.9,
      ease: 'power3.out',
    }).to(
      items,
      {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: 'power2.out',
        stagger: 0.055,
      },
      '-=0.4'
    );

    return () => { tl.kill(); };
  }, []);

  return (
    <div
      ref={cardRef}
      className="w-full max-w-170 rounded-4xl overflow-hidden bg-[linear-gradient(160deg,#0a1628_0%,#0d2040_50%,#0a1628_100%)] shadow-[0_0_0_1px_rgba(0,158,226,0.18),0_40px_80px_rgba(0,84,162,0.45),0_0_60px_rgba(0,158,226,0.08)]"
    >
      {/* Badge topo */}
      <div className="flex justify-center pt-8 pb-0 px-10">
        <div
          className="flex items-center gap-2 px-5 py-2 rounded-full text-[13px] font-poppins font-semibold tracking-[0.15em] uppercase bg-[#009EE2]/12 border border-[#009EE2]/35 text-[#7dd4f8] shadow-[0_0_20px_rgba(0,158,226,0.15)]"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1L8.5 5.5H13L9.5 8L11 12.5L7 10L3 12.5L4.5 8L1 5.5H5.5L7 1Z" fill="#7dd4f8" />
          </svg>
          Free Installation — Save $250
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1L8.5 5.5H13L9.5 8L11 12.5L7 10L3 12.5L4.5 8L1 5.5H5.5L7 1Z" fill="#7dd4f8" />
          </svg>
        </div>
      </div>

      {/* Preço */}
      <div className="px-10 pt-8 pb-8 flex flex-col items-center text-center">
        <p
          className="font-poppins font-medium text-[11px] tracking-[0.3em] uppercase mb-5 text-[#7dd4f8]/60"
        >
          Monthly Subscription
        </p>

        <div className="flex items-start gap-1 mb-2">
          <span className="font-poppins font-light text-[28px] mt-4 text-[#7dd4f8]">$</span>
          <span
            className="font-poppins font-bold leading-none text-[110px] bg-[linear-gradient(135deg,#ffffff_30%,#7dd4f8_100%)] bg-clip-text text-transparent"
          >
            49
          </span>
          <div className="flex flex-col justify-end mb-4 ml-1">
            <span
              className="font-poppins font-medium text-[16px] text-[#7dd4f8]/70"
            >
              /month
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="font-poppins text-[13px] line-through text-white/25">
            $250 installation
          </span>
          <span
            className="font-poppins font-semibold text-[11px] px-3 py-1 rounded-full tracking-wide uppercase bg-[linear-gradient(135deg,#009EE2,#0054A2)] text-white shadow-[0_0_16px_rgba(0,158,226,0.4)]"
          >
            Now Free
          </span>
        </div>
      </div>

      {/* Divisor */}
      <div className="mx-10 h-px bg-[linear-gradient(90deg,transparent,rgba(0,158,226,0.3),transparent)]" />

      {/* Features */}
      <div className="px-10 py-8">
        <p
          className="font-poppins font-semibold text-[13px] text-center tracking-[0.2em] uppercase mb-6 text-[#7dd4f8]/50"
        >
          Everything included
        </p>
        <ul className="grid grid-cols-2 gap-x-8 gap-y-4">
          {features.map((feature, i) => (
            <li
              key={i}
              ref={(el) => { itemsRef.current[i] = el; }}
              className="flex items-start gap-3"
            >
              <div
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#009EE2]/40 bg-[#009EE2]/15"
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5.5L4 7.5L8 3" stroke="#7dd4f8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="font-poppins text-[13px] leading-snug text-white/65">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Divisor */}
      <div className="mx-10 h-px bg-[linear-gradient(90deg,transparent,rgba(0,158,226,0.3),transparent)]" />

      {/* CTA */}
      <div className="px-10 py-8 flex flex-col items-center gap-4">
        <a
          href="#contact"
          className="w-full font-poppins font-semibold text-[17px] text-white py-4 rounded-2xl flex items-center justify-center gap-3 group transition-all duration-300 bg-[linear-gradient(135deg,#009EE2_0%,#0054A2_100%)] shadow-[0_0_30px_rgba(0,158,226,0.35),0_4px_20px_rgba(0,84,162,0.4)] hover:shadow-[0_0_50px_rgba(0,158,226,0.55),0_4px_24px_rgba(0,84,162,0.5)] hover:-translate-y-px"
        >
          Get Started Now
          <svg
            className="transition-transform duration-300 group-hover:translate-x-1"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <p className="font-poppins text-[12px] tracking-wider text-white/25">
          No hidden fees&nbsp;&nbsp;·&nbsp;&nbsp;Cancel anytime&nbsp;&nbsp;·&nbsp;&nbsp;Setup in 24 hours
        </p>
      </div>
    </div>
  );
}
