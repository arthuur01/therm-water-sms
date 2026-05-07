'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const field1Ref = useRef<HTMLDivElement>(null);
  const field2Ref = useRef<HTMLDivElement>(null);
  const field3Ref = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const noteRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const elements = [
      headingRef.current,
      subRef.current,
      field1Ref.current,
      field2Ref.current,
      field3Ref.current,
      btnRef.current,
      noteRef.current,
    ].filter(Boolean) as HTMLElement[];

    gsap.set(elements, { opacity: 0, y: 28 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headingRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    tl.to(elements, {
      opacity: 1,
      y: 0,
      duration: 0.65,
      ease: 'power2.out',
      stagger: 0.1,
    });

    return () => { tl.kill(); };
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="w-full max-w-xl flex flex-col items-center text-center">
      {/* Heading */}
      <h2
        ref={headingRef}
        className="font-poppins font-extralight text-[64px] leading-tight text-[#0054A2] mb-4"
      >
        Get Started <span className="text-[#009EE2]">Today</span>
      </h2>

      <p
        ref={subRef}
        className="font-poppins font-light text-[16px] text-[#007AAE] leading-relaxed mb-12 max-w-sm"
      >
        This is a special offer for property managers only.
        Get in contact right now and find out more about it.
      </p>

      {submitted ? (
        <div className="w-full py-16 flex flex-col items-center gap-4">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="23" stroke="#009EE2" strokeWidth="2" />
            <path d="M14 24.5L20.5 31L34 18" stroke="#009EE2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="font-poppins font-light text-[18px] text-[#0054A2]">
            We'll be in touch shortly.
          </p>
        </div>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
          {/* Full Name */}
          <div ref={field1Ref} className="flex flex-col gap-2 text-left">
            <label className="font-poppins font-medium text-[13px] tracking-[0.12em] uppercase text-[#0054A2]">
              Full Name
            </label>
            <input
              type="text"
              required
              placeholder="John Smith"
              className="w-full bg-transparent border border-[#009EE2]/30 rounded-xl px-5 py-3.5 font-poppins font-light text-[15px] text-[#0054A2] placeholder:text-[#009EE2]/40 outline-none transition-all duration-200 focus:border-[#009EE2] focus:shadow-[0_0_0_3px_rgba(0,158,226,0.08)]"
            />
          </div>

          {/* Email */}
          <div ref={field2Ref} className="flex flex-col gap-2 text-left">
            <label className="font-poppins font-medium text-[13px] tracking-[0.12em] uppercase text-[#0054A2]">
              Email Address
            </label>
            <input
              type="email"
              required
              placeholder="john@propertymanagement.com"
              className="w-full bg-transparent border border-[#009EE2]/30 rounded-xl px-5 py-3.5 font-poppins font-light text-[15px] text-[#0054A2] placeholder:text-[#009EE2]/40 outline-none transition-all duration-200 focus:border-[#009EE2] focus:shadow-[0_0_0_3px_rgba(0,158,226,0.08)]"
            />
          </div>

          {/* Phone */}
          <div ref={field3Ref} className="flex flex-col gap-2 text-left">
            <label className="font-poppins font-medium text-[13px] tracking-[0.12em] uppercase text-[#0054A2]">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="(555) 123-4567"
              className="w-full bg-transparent border border-[#009EE2]/30 rounded-xl px-5 py-3.5 font-poppins font-light text-[15px] text-[#0054A2] placeholder:text-[#009EE2]/40 outline-none transition-all duration-200 focus:border-[#009EE2] focus:shadow-[0_0_0_3px_rgba(0,158,226,0.08)]"
            />
          </div>

          {/* Submit */}
          <button
            ref={btnRef}
            type="submit"
            className="mt-2 w-full py-4 rounded-xl font-poppins font-semibold text-[16px] text-white transition-all duration-300 bg-[linear-gradient(135deg,#009EE2_0%,#0054A2_100%)] shadow-[0_4px_24px_rgba(0,158,226,0.25)] hover:shadow-[0_4px_36px_rgba(0,158,226,0.45)] hover:-translate-y-px"
          >
            Request Information
          </button>

          <p
            ref={noteRef}
            className="font-poppins font-light text-[12px] text-[#00425e] leading-relaxed"
          >
            By submitting this form, you agree to be contacted by ThermWater regarding our services.
          </p>
        </form>
      )}
    </div>
  );
}
