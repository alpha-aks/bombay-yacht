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
    price: "€1,500,000",
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
    price: "€1,200,000",
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
    price: "€1,350,000",
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

  // Get visible yachts (current and next)
  const getVisibleYachts = useCallback(() => {
    return [0, 1].map(offset => {
      const index = (currentIndex + offset) % yachts.length;
      return yachts[index];
    });
  }, [currentIndex]);

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
    let interval: number | null = null;
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
        <h2 className="text-3xl md:text-5xl font-light tracking-wider text-[#001433] mb-8">YACHTS FOR CHARTER</h2>
        <p className="text-[#666666]">Temporary placeholder to isolate parser error.</p>
      </div>
    </section>
  );
}

export default YachtCardsSection;