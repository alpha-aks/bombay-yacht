import Image from "next/image";

const images: { src: string; alt: string; w: number; h: number }[] = [
  { src: "https://images.unsplash.com/photo-1520975908058-7f4d44a9f8d5?q=80&w=1600&auto=format&fit=crop", alt: "Yacht at sunset", w: 1600, h: 1000 },
  { src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1600&auto=format&fit=crop", alt: "Deck lounge", w: 1600, h: 1000 },
  { src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1600&auto=format&fit=crop", alt: "Blue waters", w: 1600, h: 1000 },
  { src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop", alt: "Luxury interior", w: 1600, h: 1000 },
  { src: "https://images.unsplash.com/photo-1520976184472-441b416793b1?q=80&w=1600&auto=format&fit=crop", alt: "Island cove", w: 1600, h: 1000 },
  { src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop", alt: "Dining on deck", w: 1600, h: 1000 },
  { src: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=1600&auto=format&fit=crop", alt: "Aerial yacht", w: 1600, h: 1000 },
  { src: "https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?q=80&w=1600&auto=format&fit=crop", alt: "Night lights", w: 1600, h: 1000 },
  { src: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1600&auto=format&fit=crop", alt: "Cabin suite", w: 1600, h: 1000 },
  { src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop", alt: "Crew at work", w: 1600, h: 1000 }
];

export default function GalleryPage() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider text-[#666666] mb-2">Bombay Yacht</p>
          <h1 className="text-3xl md:text-5xl font-light tracking-wider text-[#001433]">Gallery</h1>
        </div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 [column-fill:_balance]">
          {images.map((img, i) => (
            <figure key={i} className="mb-4 break-inside-avoid overflow-hidden rounded-lg shadow-sm group">
              <div className="relative w-full" style={{ aspectRatio: `${img.w}/${img.h}` }}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
