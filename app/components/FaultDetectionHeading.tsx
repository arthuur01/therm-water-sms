'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  { title: 'Capacitor Failure', icon: '/capacitor.png', desc: 'Detects abnormal voltage drops that indicate a failing capacitor before the unit stops starting.' },
  { title: 'Clogged Drain Line', icon: '/drain-line.png', desc: 'Monitors condensate flow and triggers alerts when blockages are forming.' },
  { title: 'Fan Motor Problems', icon: '/fan.png', desc: 'Identifies irregular current patterns that signal fan motor wear or bearing failure.' },
  { title: 'Low Refrigerant', icon: '/low-level.png', desc: 'Tracks pressure differentials to catch refrigerant leaks early and prevent compressor damage.' },
  { title: 'Evaporator Coil Freeze', icon: '/evaporator-freeze.png', desc: 'Detects temperature anomalies that lead to coil icing before airflow is compromised.' },
  { title: 'Electrical Anomalies', icon: '/eletrical.png', desc: 'Flags power irregularities, short circuits, and wiring faults in real time.' },
];

export default function FaultDetectionHeading() {
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const line1 = line1Ref.current;
    const line2 = line2Ref.current;
    const para = paraRef.current;
    const cards = cardsRef.current;
    if (!line1 || !line2 || !para || !cards) return;

    gsap.set(line1, { opacity: 0, y: 60 });
    gsap.set(line2, { opacity: 0, y: 60 });
    gsap.set(para, { opacity: 0, y: 30 });
    gsap.set(cards.children, { opacity: 0, y: 40 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    tl.to(line1, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' })
      .to(line2, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, '-=0.6')
      .to(para, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')
      .to(cards.children, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out' }, '-=0.2');

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col items-center text-center max-w-5xl">
      <h2 className="font-poppins font-extralight text-[110px] text-[#009EE2] text-center leading-none overflow-hidden">
        <span ref={line1Ref} className="block">FAULT DETECTION</span>
        <span ref={line2Ref} className="block">&amp; PROTECTION</span>
      </h2>
      <p ref={paraRef} className="font-poppins font-medium text-[20px] text-[#007AAE] leading-relaxed mt-10">
        Most HVAC <span className="text-[#004A6E] font-semibold">failures</span> happen silently before complete shutdown.{' '}
        <span className="text-[#004A6E] font-semibold">Problems are fixed</span> before they become problems.
      </p>

      <div ref={cardsRef} className="grid grid-cols-3 gap-6 mt-16 text-left">
        {CARDS.map((card) => (
          <div key={card.title} className="border border-[#7FB1DB] rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-3">
              {card.icon && (
                <Image src={card.icon} alt={card.title} width={28} height={28} className="object-contain" />
              )}
              <h3 className="font-poppins font-semibold text-[18px] text-[#004A6E]">{card.title}</h3>
            </div>
            <p className="font-poppins font-normal text-[15px] text-[#007AAE] leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

