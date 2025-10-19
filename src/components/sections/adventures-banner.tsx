import Image from "next/image";

export function AdventuresBanner() {
  return (
    <section className="relative">
      {/* Dual Images */}
      <div className="grid md:grid-cols-2">
        <div className="relative h-[400px] md:h-[600px]">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a578887f-72eb-48df-b257-ebb823c0a81a-fraseryachts-com/assets/images/destination-off-the-beaten-track-emperorpenguin-1_fraseryachts-obwRrVnL-10.jpg?"
            alt="Emperor Penguin in Antarctica"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-[400px] md:h-[600px]">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a578887f-72eb-48df-b257-ebb823c0a81a-fraseryachts-com/assets/images/destination-caribbean-leewardislands-usvi-aqualung-diving-scubadiving_fraseryachts-YOETdAWz-11.jpg?"
            alt="Underwater diving"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex items-end justify-center pb-24 md:pb-32">
        <div className="relative text-center">
          <div className="absolute inset-0 -inset-x-20 bg-gradient-to-t from-black/60 to-transparent -z-10" />
          <h2 className="text-3xl md:text-5xl font-light tracking-wider text-white px-4">
            FROM THE HIGHEST MOUNTAINS TO THE DEEPEST OCEANS
          </h2>
        </div>
      </div>

      {/* CTA Button */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <button className="border-2 border-white text-white px-8 py-3 text-sm uppercase tracking-wider font-medium hover:bg-white hover:text-[#001433] transition-colors">
          Why Choose Fraser?
        </button>
      </div>
    </section>
  );
}