"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-[#666666] mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-5xl font-light tracking-wider text-[#001433]">
            GUEST EXPERIENCES
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            {/* Quote Mark */}
            <div className="text-8xl text-[#e31e24] font-serif leading-none mb-4">"</div>
            
            {/* Testimonial Text */}
            <p className="text-lg md:text-xl text-[#333333] leading-relaxed mb-8 italic">
              Our Bombay Yacht charter was extraordinary. From the attentive crew to the stunning itinerary, every moment felt curated and luxurious. It became a cherished memory for my family and me, and we can’t wait to sail again with Bombay Yacht.
            </p>

            {/* Guest Info */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-full overflow-hidden relative">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a578887f-72eb-48df-b257-ebb823c0a81a-fraseryachts-com/assets/images/victorious-lifestyle-family_fraseryachts-YEMwQFR6-20.jpg?"
                  alt="Guest"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-[#001433]">Tanisha Chauhan</p>
                <p className="text-sm text-[#666666]">Bombay Yacht charter guest</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4">
            <button className="p-3 border border-[#001433] hover:bg-[#001433] hover:text-white transition-colors" aria-label="Previous testimonial">
              <ChevronLeft size={24} />
            </button>
            <button className="p-3 border border-[#001433] hover:bg-[#001433] hover:text-white transition-colors" aria-label="Next testimonial">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}