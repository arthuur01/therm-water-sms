'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CalendarDrawSVG() {
  const svgRef = useRef<SVGSVGElement>(null);
  const bodyRef = useRef<SVGPathElement>(null);
  const headerLineRef = useRef<SVGPathElement>(null);
  const ticksRef = useRef<(SVGPathElement | null)[]>([]);
  const cellsRef = useRef<(SVGRectElement | null)[]>([]);

  useEffect(() => {
    const body = bodyRef.current;
    const headerLine = headerLineRef.current;
    const ticks = ticksRef.current.filter(Boolean) as SVGPathElement[];
    const cells = cellsRef.current.filter(Boolean) as SVGRectElement[];

    if (!body || !headerLine) return;

    const bodyLen = body.getTotalLength();
    const headerLen = headerLine.getTotalLength();

    // Body outline draw
    gsap.set(body, { strokeDasharray: bodyLen, strokeDashoffset: bodyLen });

    // Header divider draw
    gsap.set(headerLine, {
      strokeDasharray: headerLen,
      strokeDashoffset: headerLen,
    });

    // Ticks — draw each
    ticks.forEach((tick) => {
      const len = tick.getTotalLength();
      gsap.set(tick, { strokeDasharray: len, strokeDashoffset: len });
    });

    // Grid cells — fade + scale in
    gsap.set(cells, { opacity: 0, scale: 0.5, transformOrigin: '50% 50%' });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svgRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    // 1. Draw outer body
    tl.to(body, {
      strokeDashoffset: 0,
      duration: 1.4,
      ease: 'power2.inOut',
    });

    // 2. Draw ticks simultaneously with stagger
    tl.to(
      ticks,
      {
        strokeDashoffset: 0,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.06,
      },
      '-=0.8'
    );

    // 3. Draw header line
    tl.to(
      headerLine,
      {
        strokeDashoffset: 0,
        duration: 0.7,
        ease: 'power2.out',
      },
      '-=0.4'
    );

    // 4. Fade + scale in grid cells with stagger
    tl.to(
      cells,
      {
        opacity: 1,
        scale: 1,
        duration: 0.35,
        ease: 'back.out(1.4)',
        stagger: 0.07,
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
      width="324"
      height="389"
      viewBox="0 0 324 389"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.54">
        {/* Main body */}
        <path
          ref={bodyRef}
          d="M299.5 386.008H24.5C12.3497 386.008 2.5 376.159 2.5 364.008V45.8015C2.5 33.6512 12.3497 23.8015 24.5 23.8015H299.5C311.65 23.8015 321.5 33.6512 321.5 45.8015V364.008C321.5 376.159 311.65 386.008 299.5 386.008Z"
          stroke="#3D8AC8"
          strokeWidth="5"
          strokeLinejoin="bevel"
        />

        {/* Header divider */}
        <path
          ref={headerLineRef}
          d="M2.5 128.312L321.5 128.312"
          stroke="#3D8AC8"
          strokeWidth="5"
        />

        {/* Calendar ticks */}
        {[
          'M40 6V36.0167',
          'M79.5 6.0083V36.025',
          'M120.5 6.0083V36.025',
          'M162.5 6.0083V36.025',
          'M205.5 6.0083V36.025',
          'M251.5 6.0083V36.025',
          'M294.5 6.0083V36.025',
        ].map((d, i) => (
          <path
            key={i}
            ref={(el) => { ticksRef.current[i] = el; }}
            opacity="0.48"
            d={d}
            stroke="#54A0DB"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}

        {/* Grid cells */}
        {[
          { x: 63, y: 205.508 },
          { x: 121, y: 205.508 },
          { x: 172, y: 205.508 },
          { x: 230, y: 205.508 },
          { x: 63, y: 258.508 },
          { x: 114, y: 258.508 },
          { x: 172, y: 258.508 },
        ].map((rect, i) => (
          <rect
            key={i}
            ref={(el) => { cellsRef.current[i] = el; }}
            x={rect.x}
            y={rect.y}
            width="33"
            height="30"
            stroke="#8EBBE1"
          />
        ))}
      </g>
    </svg>
  );
}
