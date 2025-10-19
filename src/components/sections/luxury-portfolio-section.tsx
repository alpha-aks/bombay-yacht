import Image from "next/image";

export function LuxuryPortfolioSection() {
  return (
    <section className="py-20 md:py-28 bg-[#f5f5f5]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider text-[#666666] mb-2">
            Live the Exceptional
          </p>
          <h2 className="text-3xl md:text-5xl font-light tracking-wider text-[#001433] mb-8">
            THE WORLD'S FINEST SUPERYACHTS
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto">
          {/* Portfolio Image */}
          <div className="relative aspect-[16/10] mb-10">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a578887f-72eb-48df-b257-ebb823c0a81a-fraseryachts-com/assets/images/2025-Luxury-Charter-Portfolio-hpm9zafe-26.jpg?"
              alt="Fraser Luxury Charter Portfolio"
              fill
              className="object-contain"
            />
          </div>

          {/* Description */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg text-[#666666] leading-relaxed mb-8">
              Fraser's annual publication showcases some of the most beautiful superyachts available to charter around the world as well as the destinations open to you, exclusive interviews and expert insights into the world of yachting today.
            </p>

            {/* CTA Button */}
            <button className="bg-[#001433] text-white px-8 py-3 text-sm uppercase tracking-wider font-medium hover:bg-[#0a1929] transition-colors">
              Request Your Copy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}