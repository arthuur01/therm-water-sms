'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PhoneDrawSVG() {
  const svgRef = useRef<SVGSVGElement>(null);
  const bodyRef = useRef<SVGPathElement>(null);
  const lineRef = useRef<SVGLineElement>(null);
  const ellipseRef = useRef<SVGEllipseElement>(null);

  useEffect(() => {
    const body = bodyRef.current;
    const line = lineRef.current;
    const ellipse = ellipseRef.current;
    if (!body || !line || !ellipse) return;

    const bodyLen = body.getTotalLength();
    const lineLen = line.getTotalLength();

    // Set initial state — invisible strokes
    gsap.set(body, { strokeDasharray: bodyLen, strokeDashoffset: bodyLen });
    gsap.set(line, { strokeDasharray: lineLen, strokeDashoffset: lineLen });
    gsap.set(ellipse, { opacity: 0, scale: 0, transformOrigin: '50% 50%' });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svgRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    tl.to(body, {
      strokeDashoffset: 0,
      duration: 1.4,
      ease: 'power2.inOut',
    })
      .to(
        line,
        {
          strokeDashoffset: 0,
          duration: 0.6,
          ease: 'power2.out',
        },
        '-=0.5'
      )
      .to(
        ellipse,
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: 'back.out(1.7)',
        },
        '-=0.2'
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      width="185"
      height="324"
      viewBox="0 0 185 324"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        ref={bodyRef}
        opacity="0.51"
        d="M160.5 321.5H24.5C12.3497 321.5 2.5 311.65 2.5 299.5V24.5C2.5 12.3497 12.3497 2.5 24.5 2.5H160.5C172.65 2.5 182.5 12.3497 182.5 24.5V299.5C182.5 311.65 172.65 321.5 160.5 321.5Z"
        stroke="#146FB9"
        strokeWidth="5"
        strokeLinejoin="bevel"
      />
      <ellipse
        ref={ellipseRef}
        cx="92"
        cy="297.5"
        rx="6.5"
        ry="5"
        fill="#155F6C"
      />
      <line
        ref={lineRef}
        x1="2.5"
        y1="42.5"
        x2="182.5"
        y2="42.5"
        stroke="#7FB1DB"
        strokeWidth="2"
      />
    </svg>
  );
}
