'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SectionTextProps {
  title: string;
  paragraphs: string[];
  titleClass?: string;
  paragraphClass?: string;
}

export default function SectionText({
  title,
  paragraphs,
  titleClass = '',
  paragraphClass = '',
}: SectionTextProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const parasRef = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const elements = [titleRef.current, ...parasRef.current].filter(Boolean) as HTMLElement[];

    gsap.set(elements, { opacity: 0, y: 30 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    tl.to(elements, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power2.out',
      stagger: 0.15,
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      <h3
        ref={titleRef}
        className={titleClass}
      >
        {title}
      </h3>
      {paragraphs.map((text, i) => (
        <p
          key={i}
          ref={(el) => { parasRef.current[i] = el; }}
          className={paragraphClass}
        >
          {text}
        </p>
      ))}
    </>
  );
}
