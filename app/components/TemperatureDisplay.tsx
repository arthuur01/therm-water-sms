'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function TemperatureDisplay() {
  const [temp, setTemp] = useState(18);
  const tempRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
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
    <div className="flex flex-col items-center text-center max-w-3xl">
      <h2 className="font-poppins font-extralight text-[150px] text-[#009EE2] leading-none mb-8">
        <span ref={tempRef}>{temp}</span> °C
      </h2>
      <p className="font-poppins text-[30px] text-[#007AAE] leading-relaxed">
        Intelligent heating algorithms that minimize energy consumption while maximizing comfort.
        <br />
        Set and maintain your ideal pool and spa temperatures with accuracy down to the degree.
      </p>
    </div>
  );
}
