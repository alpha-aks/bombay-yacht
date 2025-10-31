"use client";

import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView, domAnimation, LazyMotion, Variants, Variant } from "framer-motion";

// Create an alias for motion to use as 'm' for shorter syntax
const m = motion;

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { 
    y: 20, 
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  },
  hover: {
    y: -10,
    transition: { 
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const imageHover = {
  scale: 1.05,
  transition: { 
    duration: 0.5, 
    ease: "easeInOut"
  }
} as const;

const imageTap = {
  scale: 0.98
} as const;

const featuredYachts = [
  {
    id: 1,
    name: "TATOOSH",
    builder: "Nobiskrug",
    year: "2000",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a578887f-72eb-48df-b257-ebb823c0a81a-fraseryachts-com/assets/images/001-k5NmFAZB-4.jpg?",
    length: "92m / 302ft",
    guests: "19",
    cabins: "10",
    crew: "30",
    photos: 42,
    videos: 2,
  },
  {
    id: 2,
    name: "CARINTHIA VII",
    builder: "Lürssen",
    year: "2002 (2023)",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a578887f-72eb-48df-b257-ebb823c0a81a-fraseryachts-com/assets/images/C7%20winner%20thumbnail%20profile-JERlABGb-12.jpg?",
    length: "97m / 318ft",
    guests: "24",
    cabins: "12",
    crew: "30",
    photos: 45,
    videos: 3,
  },
  {
    id: 3,
    name: "BEATRIX",
    builder: "Abeking & Rasmussen",
    year: "2017",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a578887f-72eb-48df-b257-ebb823c0a81a-fraseryachts-com/assets/images/main_c--16.jpg?",
    length: "65m / 213ft",
    guests: "12",
    cabins: "6",
    crew: "16",
    photos: 36,
    videos: 1,
  },
  {
    id: 4,
    name: "VICTORIOUS",
    builder: "Abeking & Rasmussen",
    year: "2018",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a578887f-72eb-48df-b257-ebb823c0a81a-fraseryachts-com/assets/images/VICTORIOUS_10000573_vb1904910+MK+extra+water+copy-LHuYG54m-7.jpg?",
    length: "85m / 279ft",
    guests: "12",
    cabins: "7",
    crew: "24",
    photos: 48,
    videos: 3,
  },
];

export function FeaturedYachtsCarousel() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const toggleFavorite = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax effect for the header
  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.2]);

  // Filter yachts to show based on currentIndex (show 3 on medium, 4 on large screens)
  const itemsToShow = typeof window !== 'undefined' ? (window.innerWidth >= 1280 ? 4 : 3) : 4;
  const visibleYachts = [...featuredYachts, ...featuredYachts].slice(
    currentIndex,
    currentIndex + itemsToShow
  );
  
  // Handle navigation
  const goToPrev = () => {
    setCurrentIndex(prev => (prev === 0 ? featuredYachts.length - 1 : prev - 1));
  };
  
  const goToNext = () => {
    setCurrentIndex(prev => (prev === featuredYachts.length - 1 ? 0 : prev + 1));
  };

  return (
    <LazyMotion features={domAnimation}>
      <motion.section
        ref={containerRef}
        className="py-20 md:py-28 bg-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          {/* Header with scroll-based animation */}
          <m.div
            className="text-center mb-16"
            style={{ y, opacity }}
          >
            <m.p
              className="text-sm uppercase tracking-wider text-[#666666] mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Limitless Adventures, Endless Fun
            </m.p>
            <m.h2 
              className="text-3xl md:text-5xl font-light tracking-wider text-[#001433]"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Bombay Yacht - FIRST CHOICE, EVERY TIME
            </m.h2>
          </m.div>

          {/* Carousel Container */}
          <m.div 
            className="relative max-w-7xl mx-auto"
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            <div className="overflow-hidden px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-6 max-w-7xl mx-auto">
                {visibleYachts.slice(0, 4).map((yacht, index) => (
                  <m.div 
                    key={yacht.id} 
                    className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 w-full h-full"
                    variants={item}
                    whileHover="hover"
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                    transition={{ delay: index * 0.1 }}
                  >
                    {/* Image Container */}
                    <m.div 
                      className="relative aspect-[4/3] overflow-hidden"
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.5, ease: "easeInOut" }
                      }}
                      whileTap={{ 
                        scale: 0.98,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <Image
                        src={yacht.image}
                        alt={yacht.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index < 2}
                      />
                      {/* Favorite Button */}
                      <m.button
                        onClick={(e) => toggleFavorite(e, yacht.id)}
                        className="absolute top-4 right-4 p-2 bg-black/50 rounded-full backdrop-blur-sm"
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(0,0,0,0.7)' }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={favorites.includes(yacht.id) ? "Remove from favorites" : "Add to favorites"}
                      >
                        <m.div
                          animate={favorites.includes(yacht.id) ? { scale: [1, 1.2, 1] } : {}}
                          transition={{ duration: 0.3 }}
                        >
                          <Heart
                            className={`w-5 h-5 ${favorites.includes(yacht.id) ? 'fill-red-500 text-red-500' : 'text-white'}`}
                          />
                        </m.div>
                      </m.button>
                    </m.div>

                    {/* Yacht Info */}
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <m.h3
                            className="text-lg font-medium text-gray-900"
                            whileHover={{ x: 5 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                          >
                            {yacht.name}
                          </m.h3>
                          <p className="text-sm text-gray-600">{yacht.builder} • {yacht.year}</p>
                        </div>
                        <m.span
                          className="text-sm text-gray-500"
                          whileHover={{ scale: 1.1 }}
                        >
                          {yacht.length}
                        </m.span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-500 mt-2">
                        <m.span whileHover={{ scale: 1.05 }}>{yacht.guests} Guests</m.span>
                        <m.span whileHover={{ scale: 1.05 }}>{yacht.cabins} Cabins</m.span>
                        <m.span whileHover={{ scale: 1.05 }}>Crew {yacht.crew}</m.span>
                      </div>
                        <div className="flex justify-between mt-3 pt-3 border-t border-gray-100 text-xs text-gray-400">
                        <span>{yacht.photos} Photos</span>
                        <span>{yacht.videos} Videos</span>
                      </div>
                    </div>
                  </m.div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4 mt-8">
              <m.button 
                onClick={goToPrev}
                className="p-3 border border-[#001433] hover:bg-[#001433] hover:text-white transition-colors rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Previous yacht"
              >
                <ChevronLeft size={24} />
              </m.button>
              <m.button 
                onClick={goToNext}
                className="p-3 border border-[#001433] hover:bg-[#001433] hover:text-white transition-colors rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Next yacht"
              >
                <ChevronRight size={24} />
              </m.button>
            </div>
          </m.div>

          {/* CTA Button */}
          <m.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <m.button 
              className="bg-[#001433] text-white px-8 py-3 text-sm uppercase tracking-wider font-medium hover:bg-[#0a1929] transition-colors rounded-md"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
              whileTap={{ scale: 0.98 }}
            >
              More Featured Yachts
            </m.button>
          </m.div>

          {/* Mobile navigation dots */}
          <div className="flex justify-center mt-8 md:hidden">
            {featuredYachts.map((_, i) => (
              <m.button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 mx-1 rounded-full transition-colors ${currentIndex === i ? 'bg-[#001433] w-4' : 'bg-gray-300'}`}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to yacht ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.section>
    </LazyMotion>
  );
}