"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

function formatWithCommas(n: number): string {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function parseNumberParts(value: string): { prefix: string; number: number; suffix: string; formatter: (n: number) => string } {
  const match = value.match(/^(?<prefix>[^0-9]*)?(?<num>[0-9,\.]+)(?<suffix>.*)?$/);
  const prefix = match?.groups?.prefix ?? "";
  const raw = match?.groups?.num ?? "0";
  const suffix = match?.groups?.suffix ?? "";

  // Remove commas from numeric part
  const num = Number((raw || "0").replace(/,/g, ""));

  // Choose formatter based on suffix/prefix
  let formatter = (n: number) => `${formatWithCommas(Math.round(n))}`;
  if (suffix.trim().startsWith("+")) {
    formatter = (n: number) => `${formatWithCommas(Math.round(n))}+`;
  } else if (suffix.trim().toUpperCase().startsWith("M")) {
    // For values like $91M
    formatter = (n: number) => `${prefix}${Math.round(n)}M`;
    return { prefix: "", number: num, suffix: "", formatter };
  } else if (prefix.trim().startsWith("$")) {
    formatter = (n: number) => `$${formatWithCommas(Math.round(n))}`;
  }

  return { prefix: "", number: num, suffix: "", formatter };
}

function useInView(ref: React.RefObject<HTMLElement>, rootMargin = "0px") {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { root: null, rootMargin, threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, rootMargin]);
  return inView;
}

function CountUp({ value, duration = 1500, delay = 0 }: { value: string; duration?: number; delay?: number }) {
  const { number: target, formatter } = useMemo(() => parseNumberParts(value), [value]);
  const [display, setDisplay] = useState(() => formatter(0));
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    let start = 0;
    const startAfter = performance.now() + delay;

    const tick = (t: number) => {
      if (t < startAfter) {
        raf = requestAnimationFrame(tick);
        return;
      }
      if (!start) start = t;
      const elapsed = t - start;
      const progress = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      const current = target * eased;
      setDisplay(formatter(current));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration, delay, formatter]);

  return <span ref={ref}>{display}</span>;
}

export function StatisticsSection() {
  const stats = [
    {
      number: "3,164",
      description: "Average days of charter booked per year",
    },
    {
      number: "18",
      description: "Years average experience per Bombay Yacht Charter Broker",
    },
    {
      number: "30+",
      description: "Brokers worldwide, the largest charter team",
    },
    {
      number: "$91M",
      description: "Worth of charters booked in last 12 months",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#f5f5f5]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-wider text-[#666666] mb-2">
            Bombay Yacht in Numbers
          </p>
          <h2 className="text-3xl md:text-5xl font-light tracking-wider text-[#001433]">
            OVER 3,000 DAYS OF CHARTER BOOKED EACH YEAR
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-5xl md:text-6xl font-light text-[#001433] mb-4">
                <CountUp value={stat.number} duration={1500} delay={index * 150} />
              </p>
              <p className="text-sm md:text-base text-[#666666] leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}