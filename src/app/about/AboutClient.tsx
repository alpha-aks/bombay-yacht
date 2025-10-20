"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

function useParallax() {
  const ref = useRef<HTMLElement | null>(null);
  const [y, setY] = useState(0);
  useEffect(() => {
    let raf = 0;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      raf = requestAnimationFrame(() => {
        ticking = false;
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        setY(r.top);
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
  return { ref, y } as const;
}

export default function AboutClient() {
  const hero = useParallax();
  const deco = useParallax();
  const heroShift = hero.y * 0.25;
  const textShift = hero.y * -0.08;
  const decoShift = deco.y * 0.15;

  return (
    <main className="bg-white">
      {/* Hero */}
      <section
        ref={hero.ref as any}
        className="relative h-[70vh] min-h-[480px] overflow-hidden bg-[#00102A]"
      >
        <div
          className="absolute inset-0 will-change-transform"
          style={{ transform: `translateY(${heroShift}px)` }}
        >
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a578887f-72eb-48df-b257-ebb823c0a81a-fraseryachts-com/assets/images/OPARI_Jeff%20Brown-0017_LR-Q8ydJQxs-3.jpg?"
            alt="Luxury yacht cruising at golden hour"
            fill
            className="object-cover opacity-80"
            priority
          />
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center text-center px-6 will-change-transform"
          style={{ transform: `translateY(${textShift}px)` }}
        >
          <div className="max-w-3xl">
            <p className="mb-3 text-xs tracking-[0.35em] text-white/80">
              B O M B A Y  Y A C H T
            </p>
            <h1 className="text-4xl md:text-6xl font-light tracking-wider text-white drop-shadow">
              Curating Luxury Yacht Experiences in Mumbai
            </h1>
            <p className="mt-5 text-white/90">
              Bespoke charters for birthdays, anniversaries, proposals and corporate retreats.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <div
                ref={deco.ref as any}
                className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-[#e31e24]/10 to-[#001433]/10 will-change-transform"
                style={{ transform: `translateY(${decoShift}px)` }}
              />
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a578887f-72eb-48df-b257-ebb823c0a81a-fraseryachts-com/assets/images/victorious-lifestyle-family_fraseryachts-YEMwQFR6-20.jpg?"
                alt="Onboard moments"
                width={880}
                height={660}
                className="rounded-2xl shadow-xl object-cover w-full h-auto"
              />
            </div>
            <div>
              <p className="text-sm uppercase tracking-wider text-[#666666] mb-2">
                Our Story
              </p>
              <h2 className="text-3xl md:text-4xl font-light tracking-wider text-[#001433] mb-6">
                Bombay Yacht — established in September
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Founded in Mumbai, Bombay Yacht was created to bring effortless luxury to the city’s
                shoreline. From intimate celebrations to statement-making events, our charters are
                tailored with hospitality, privacy and style at their core.
              </p>
              <ul className="space-y-2 text-[#001433]">
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#e31e24]" /> Luxury yacht rentals</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#e31e24]" /> Birthday & anniversary celebrations</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#e31e24]" /> Proposals & private dinners</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#e31e24]" /> Corporate offsites & client hosting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-[#f8f8f8]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <p className="text-4xl font-light text-[#001433] mb-2">30+</p>
              <p className="text-sm text-[#666666]">Curated charter routes</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <p className="text-4xl font-light text-[#001433] mb-2">24/7</p>
              <p className="text-sm text-[#666666]">Concierge assistance</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <p className="text-4xl font-light text-[#001433] mb-2">Premium</p>
              <p className="text-sm text-[#666666]">Catering & crews</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <p className="text-4xl font-light text-[#001433] mb-2">Made-to-order</p>
              <p className="text-sm text-[#666666]">Occasions & themes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#e31e24]/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#001433]/10 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-light tracking-wider text-[#001433] mb-4">
            Plan your luxury celebration on the sea
          </h3>
          <p className="text-[#666666] max-w-2xl mx-auto mb-8">
            Birthdays, proposals, anniversaries, corporate gatherings — crafted with Bombay Yacht elegance.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#001433] text-white px-8 py-3 uppercase tracking-wider text-sm rounded hover:bg-[#0a1929] transition-colors"
          >
            Inquire Now
          </a>
        </div>
      </section>
    </main>
  );
}
