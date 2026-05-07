'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TemperatureDisplay() {
  const [temp, setTemp] = useState(18);
  const tempRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Entrance animation
    const heading = headingRef.current;
    const para = paraRef.current;
    if (heading && para) {
      gsap.set([heading, para], { opacity: 0, y: 40 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      tl.to(heading, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' })
        .to(para, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, '-=0.4');
    }

    // Cycling temperature
    const animateTemperature = () => {
      const newTemp = Math.floor(Math.random() * (23 - 10 + 1)) + 10;
      
      gsap.to(tempRef.current, {
        innerText: newTemp,
        duration: 1.5,
        ease: 'power2.inOut',
        snap: { innerText: 1 },
        onUpdate: function() {
          if (tempRef.current) {
            const value = Math.round(Number(tempRef.current.innerText));
            tempRef.current.innerText = value.toString();
          }
        },
        onComplete: () => {
          setTemp(newTemp);
        }
      });
    };

    const interval = setInterval(animateTemperature, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col items-center text-center max-w-3xl">
      <h2 ref={headingRef} className="font-poppins font-extralight text-[150px] text-[#009EE2] leading-none mb-8">
        <span ref={tempRef}>{temp}</span> °C
      </h2>
      <p ref={paraRef} className="font-poppins text-[30px] text-[#007AAE] leading-relaxed">
        Intelligent heating algorithms that minimize energy consumption while maximizing comfort.
        <br />
        Set and maintain your ideal pool and spa temperatures with accuracy down to the degree.
      </p>
    </div>
  );
}
