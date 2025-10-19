"use client";

import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

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

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-[#666666] mb-2">
            Limitless Adventures, Endless Fun
          </p>
          <h2 className="text-3xl md:text-5xl font-light tracking-wider text-[#001433]">
            FRASER - FIRST CHOICE, EVERY TIME
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredYachts.map((yacht) => (
                <div key={yacht.id} className="group">
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] mb-4 overflow-hidden">
                    <Image
                      src={yacht.image}
                      alt={yacht.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Favorite Button */}
                    <button
                      onClick={() => toggleFavorite(yacht.id)}
                      className="absolute top-3 right-3 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                      aria-label="Add to favorites"
                    >
                      <Heart
                        size={18}
                        className={
                          favorites.includes(yacht.id)
                            ? "fill-[#e31e24] text-[#e31e24]"
                            : "text-[#001433]"
                        }
                      />
                    </button>
                    {/* Photo/Video Badges */}
                    <div className="absolute bottom-3 left-3 flex gap-2">
                      <span className="bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {yacht.photos}
                      </span>
                      <span className="bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {yacht.videos}
                      </span>
                    </div>
                  </div>

                  {/* Yacht Info */}
                  <h3 className="text-lg font-semibold mb-1 text-[#001433]">
                    {yacht.name}
                  </h3>
                  <p className="text-[#666666] text-sm mb-3">
                    {yacht.builder} - {yacht.year}
                  </p>

                  {/* Specifications Grid */}
                  <div className="grid grid-cols-4 gap-2 text-xs">
                    <div>
                      <p className="text-[#666666] uppercase mb-0.5">Length</p>
                      <p className="font-medium text-[#001433]">{yacht.length}</p>
                    </div>
                    <div>
                      <p className="text-[#666666] uppercase mb-0.5">Guests</p>
                      <p className="font-medium text-[#001433]">{yacht.guests}</p>
                    </div>
                    <div>
                      <p className="text-[#666666] uppercase mb-0.5">Cabins</p>
                      <p className="font-medium text-[#001433]">{yacht.cabins}</p>
                    </div>
                    <div>
                      <p className="text-[#666666] uppercase mb-0.5">Crew</p>
                      <p className="font-medium text-[#001433]">{yacht.crew}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <button className="p-3 border border-[#001433] hover:bg-[#001433] hover:text-white transition-colors" aria-label="Previous">
              <ChevronLeft size={24} />
            </button>
            <button className="p-3 border border-[#001433] hover:bg-[#001433] hover:text-white transition-colors" aria-label="Next">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-[#001433] text-white px-8 py-3 text-sm uppercase tracking-wider font-medium hover:bg-[#0a1929] transition-colors">
            More Featured Yachts
          </button>
        </div>
      </div>
    </section>
  );
}