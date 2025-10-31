import Image from "next/image";

export function FinalCTABanner() {
  return (
    <section className="relative h-[400px] md:h-[500px]">
      {/* Background Image */}
      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a578887f-72eb-48df-b257-ebb823c0a81a-fraseryachts-com/assets/images/lifestyle-yachts-superyachts-emir-Beach-set-up_fraseryachts-kZVJyAmT-27.jpg?"
        alt="Luxury yacht beach setup"
        fill
        className="object-cover"
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <h2 className="text-3xl md:text-5xl font-light tracking-wider text-center mb-10 max-w-4xl">
          YOUR DREAM CHARTER VACATION STARTS HERE
        </h2>
        <button className="border-2 border-white text-white px-8 py-3 text-sm uppercase tracking-wider font-medium hover:bg-white hover:text-[#001433] transition-colors">
          Contact Bombay Yacht Today
        </button>
      </div>
    </section>
  );
}