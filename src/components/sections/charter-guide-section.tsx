import Image from "next/image";

export function CharterGuideSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider text-[#666666] mb-2">
            First Time Chartering
          </p>
          <h2 className="text-3xl md:text-5xl font-light tracking-wider text-[#001433] mb-8">
            YOUR 5-STEP GUIDE TO CHARTER
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto">
          {/* Guide Image */}
          <div className="relative aspect-[16/10] mb-10">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a578887f-72eb-48df-b257-ebb823c0a81a-fraseryachts-com/assets/images/corporate-your-5-step-guide-to-charter-yachtcharter_fraseryachts-1KikjmgW-25.jpg?"
              alt="Fraser 5-Step Guide to Charter"
              fill
              className="object-contain"
            />
          </div>

          {/* Description */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg text-[#666666] leading-relaxed mb-8">
              Are you planning your first yacht charter, after years of dreaming of the experience, and looking for a place to start? Find out everything you need to know about planning your luxury yacht charter in the Fraser 5-Step Guide to Charter.
            </p>

            {/* CTA Button */}
            <button className="bg-[#001433] text-white px-8 py-3 text-sm uppercase tracking-wider font-medium hover:bg-[#0a1929] transition-colors">
              The Fraser 5-Step Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}