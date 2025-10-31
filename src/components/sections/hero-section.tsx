'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays when component mounts
    const playVideo = async () => {
      try {
        if (videoRef.current) {
          await videoRef.current.play();
        }
      } catch (err) {
        console.log('Autoplay prevented, showing fallback image');
      }
    };

    playVideo();
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background with fallback image */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-fallback.jpg"
        >
          <source src="https://alphas.cdn.prismic.io/alphas/aIehZFGsbswqTXOv_119445-717712231_small.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4 z-10">
        {/* Breadcrumb */}
        <div className="absolute top-24 left-4 md:left-8 text-sm">
          <span className="opacity-70">Home › Charter</span>
        </div>

        {/* Hero Text */}
        <div className="text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">
            YACHT CHARTER
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Experience luxury on the water with our premium yacht charter services
          </p>
        </div>
      </div>
    </section>
  );
}