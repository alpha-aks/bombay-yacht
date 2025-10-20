"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';

const yachts = [
  {
    id: 1,
    name: "CARINTHIA VII",
    builder: "Lürssen",
    year: "2002 (2023)",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a578887f-72eb-48df-b257-ebb823c0a81a-fraseryachts-com/assets/images/C7%20winner%20thumbnail%20profile-JERlABGb-1.jpg?",
    length: "97m / 318ft",
    guests: "24",
    cabins: "12",
    crew: "30",
    price: "₹1,500,000",
    photos: 45,
    videos: 3,
  },
  {
    id: 2,
    name: "SOLANDGE",
    builder: "Lürssen",
    year: "2013",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a578887f-72eb-48df-b257-ebb823c0a81a-fraseryachts-com/assets/images/160309_Solandge_Profile_no-FCMkQBzS-2.jpg?",
    length: "85m / 279ft",
    guests: "12",
    cabins: "8",
    crew: "23",
    price: "₹1,200,000",
    photos: 38,
    videos: 2,
  },
  {
    id: 3,
    name: "OPARI",
    builder: "Lurssen",
    year: "2021",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a578887f-72eb-48df-b257-ebb823c0a81a-fraseryachts-com/assets/images/OPARI_Jeff%20Brown-0017_LR-Q8ydJQxs-3.jpg?",
    length: "85m / 279ft",
    guests: "16",
    cabins: "8",
    crew: "26",
    price: "₹1,350,000",
    photos: 52,
    videos: 4,
  },
];

export function YachtCardsSection() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
      offset: 100
    });
  }, []);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Define navigation functions first
  const nextSlide = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % yachts.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + yachts.length) % yachts.length);
  }, []);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Get visible yachts (current and next) - 1 on mobile, 2 on desktop
  const getVisibleYachts = useCallback(() => {
    const visibleCount = isMobile ? 1 : 2;
    return Array.from({ length: visibleCount }, (_, offset) => {
      const index = (currentIndex + offset) % yachts.length;
      return yachts[index];
    });
  }, [currentIndex, isMobile]);

  // Reset auto-scroll when currentIndex changes
  useEffect(() => {
    const carousel = document.querySelector('.carousel-container');
    if (carousel) {
      carousel.dispatchEvent(new Event('mouseleave'));
    }
  }, [currentIndex]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setParallaxOffset(scrollPosition * 0.1);
  };

  // Handle touch events for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide();
    }
    if (touchStart - touchEnd < -50) {
      prevSlide();
    }
  };

  // Auto-scroll effect with pause on hover and visibility detection
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    const carousel = document.querySelector('.carousel-container');
    
    const startAutoScroll = () => {
      if (interval) clearInterval(interval);
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    };

    const pauseAutoScroll = () => {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    };

    // Handle tab visibility changes
    const handleVisibilityChange = () => {
      if (document.hidden) {
        pauseAutoScroll();
      } else {
        startAutoScroll();
      }
    };

    if (carousel) {
      // Start auto-scroll
      startAutoScroll();
      
      // Pause on hover
      carousel.addEventListener('mouseenter', pauseAutoScroll);
      carousel.addEventListener('mouseleave', startAutoScroll);
      
      // Handle tab visibility
      document.addEventListener('visibilitychange', handleVisibilityChange);
      
      // Handle window blur/focus
      window.addEventListener('blur', pauseAutoScroll);
      window.addEventListener('focus', startAutoScroll);
    }
    
    // Cleanup
    return () => {
      pauseAutoScroll();
      if (carousel) {
        carousel.removeEventListener('mouseenter', pauseAutoScroll);
        carousel.removeEventListener('mouseleave', startAutoScroll);
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', pauseAutoScroll);
      window.removeEventListener('focus', startAutoScroll);
    };
  }, [currentIndex, isMobile, nextSlide]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <section id="yachts" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-light tracking-wider text-[#001433] mb-12 text-center">YACHTS FOR CHARTER</h2>

        <div className="relative max-w-6xl mx-auto">
          <div
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="flex w-full gap-4">
              {getVisibleYachts().map((yacht, index) => (
                <div
                  key={`yacht-${yacht.id}-${index}`}
                  className="group relative rounded-xl bg-white shadow-lg transition-all duration-500 hover:shadow-2xl"
                  style={{ flex: isMobile ? '0 0 100%' : '0 0 calc(50% - 0.5rem)' }}
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden [transform:perspective(1000px)]">
                    <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110 group-hover:[transform:rotateX(4deg)_rotateY(-4deg)]">
                      <Image
                        src={yacht.image}
                        alt={yacht.name}
                        fill
                        className="object-cover"
                        priority={index === 0}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(yacht.id);
                      }}
                      className="absolute top-4 right-4 z-10 rounded-full bg-white/90 p-2 transition-all duration-300 hover:scale-110 hover:bg-white"
                      aria-label="Add to favorites"
                    >
                      <Heart
                        size={20}
                        className={
                          favorites.includes(yacht.id) ? 'fill-[#e31e24] text-[#e31e24]' : 'text-[#001433]'
                        }
                      />
                    </button>
                    <div className="absolute bottom-4 right-4 text-right">
                      <h3 className="text-2xl font-bold text-white drop-shadow-lg">{yacht.name}</h3>
                      <p className="text-sm font-light text-white/90">{yacht.builder} - {yacht.year}</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 pb-6 border-b border-[#e8e8e8]">
                      <div className="text-center">
                        <p className="text-xs uppercase text-[#666666] mb-1">Length</p>
                        <p className="text-sm font-medium text-[#001433]">{yacht.length}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs uppercase text-[#666666] mb-1">Guests</p>
                        <p className="text-sm font-medium text-[#001433]">{yacht.guests}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs uppercase text-[#666666] mb-1">Cabins</p>
                        <p className="text-sm font-medium text-[#001433]">{yacht.cabins}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs uppercase text-[#666666] mb-1">Crew</p>
                        <p className="text-sm font-medium text-[#001433]">{yacht.crew}</p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                      <p className="text-lg font-semibold text-[#001433]">
                        From <span className="text-xl">{yacht.price}</span> <span className="text-sm font-normal">p/week</span>
                      </p>
                      <button className="relative overflow-hidden rounded bg-[#001433] px-6 py-2 text-sm font-medium uppercase tracking-wider text-white transition-all duration-300 hover:scale-105 hover:bg-[#0a1929]">
                        <span className="relative z-10">Inquire Now</span>
                        <span className="absolute inset-0 -translate-x-full bg-[#e31e24] transition-transform duration-300 ease-in-out group-hover:translate-x-0" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pointer-events-auto absolute -bottom-6 left-0 right-0 flex items-center justify-center gap-3">
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              className="rounded-full bg-white px-4 py-2 text-[#001433] shadow-lg ring-1 ring-black/5 transition-all duration-300 hover:scale-105 hover:bg-white/90"
              aria-label="Previous yacht"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              className="rounded-full bg-white px-4 py-2 text-[#001433] shadow-lg ring-1 ring-black/5 transition-all duration-300 hover:scale-105 hover:bg-white/90"
              aria-label="Next yacht"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default YachtCardsSection;