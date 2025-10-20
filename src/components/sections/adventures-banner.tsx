"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function AdventuresBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const [y, setY] = useState(0);
  useEffect(() => {
    let raf = 0;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      raf = requestAnimationFrame(() => {
        ticking = false;
        const el = sectionRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        setY(rect.top);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const leftY = y * 0.15;
  const rightY = y * 0.25;
  const textY = y * -0.08;

  return (
    <section ref={sectionRef} className="relative bg-white">
      {/* Dual Images */}
      <div className="grid md:grid-cols-2">
        <div className="relative h-[400px] md:h-[600px] will-change-transform bg-white" style={{ transform: `translateY(${leftY}px)` }}>
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a578887f-72eb-48df-b257-ebb823c0a81a-fraseryachts-com/assets/images/destination-off-the-beaten-track-emperorpenguin-1_fraseryachts-obwRrVnL-10.jpg?"
            alt="Emperor Penguin in Antarctica"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-[400px] md:h-[600px] will-change-transform bg-white" style={{ transform: `translateY(${rightY}px)` }}>
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a578887f-72eb-48df-b257-ebb823c0a81a-fraseryachts-com/assets/images/destination-caribbean-leewardislands-usvi-aqualung-diving-scubadiving_fraseryachts-YOETdAWz-11.jpg?"
            alt="Underwater diving"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex items-end justify-center pb-24 md:pb-32 will-change-transform" style={{ transform: `translateY(${textY}px)` }}>
        <div className="relative text-center">
          <div className="absolute inset-0 -inset-x-20 bg-gradient-to-t from-black/60 to-transparent -z-10" />
          <h2 className="text-3xl md:text-5xl font-light tracking-wider text-white px-4">
            FROM THE HIGHEST MOUNTAINS TO THE DEEPEST OCEANS
          </h2>
        </div>
      </div>

      {/* CTA Button */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <button className="border-2 border-white text-white px-8 py-3 text-sm uppercase tracking-wider font-medium hover:bg-white hover:text-[#001433] transition-colors">
          Why Choose Bombay Yacht?
        </button>
      </div>
    </section>
  );
}