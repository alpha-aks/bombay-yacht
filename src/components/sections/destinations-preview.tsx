import Image from "next/image";

export function DestinationsPreview() {
  return (
    <section className="py-20 md:py-28 bg-[#f5f5f5]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-[#666666] mb-2">
            You Dream, We Make It Happen
          </p>
          <h2 className="text-3xl md:text-5xl font-light tracking-wider text-[#001433]">
            CHARTER DESTINATIONS
          </h2>
        </div>

        {/* Images Grid */}
        <div className="relative grid md:grid-cols-3 gap-0 max-w-7xl mx-auto">
          <div className="relative h-[400px] md:h-[500px]">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a578887f-72eb-48df-b257-ebb823c0a81a-fraseryachts-com/assets/images/lifestyle-yachts-superyachts-emir-Beach-set-up_fraseryachts-kZVJyAmT-27.jpg?"
              alt="Bombay Yacht Mediterranean destination"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-[400px] md:h-[500px]">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a578887f-72eb-48df-b257-ebb823c0a81a-fraseryachts-com/assets/images/Lifestyle-Beach-Set-up-MAGIC_Fraser-yachts-HztxJGcZ-18.jpg?"
              alt="Bombay Yacht Caribbean destination"
              fill
              className="object-cover"
            />
            {/* Overlay Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute inset-0 bg-black/40" />
              <h3 className="relative text-4xl md:text-5xl font-light tracking-wider text-white">
                WHERE TO GO
              </h3>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px]">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a578887f-72eb-48df-b257-ebb823c0a81a-fraseryachts-com/assets/images/destination-caribbean-stbarths-3_fraseryachts-J6hDehsb-19.jpg?"
              alt="Tropical destination"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="border-2 border-[#001433] text-[#001433] px-8 py-3 text-sm uppercase tracking-wider font-medium hover:bg-[#001433] hover:text-white transition-colors">
            Get Inspired
          </button>
        </div>
      </div>
    </section>
  );
}