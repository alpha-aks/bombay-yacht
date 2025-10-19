export function IntroductionSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-light tracking-wider mb-8 text-[#001433]">
          FIRST CLASS YACHTS IN THE FINEST DESTINATIONS
        </h2>
        <p className="text-lg md:text-xl text-[#666666] leading-relaxed mb-10">
          Experience true freedom, total privacy, and a level of personalized service that simply cannot be found anywhere on land. Go wherever you wish, whenever you choose.
        </p>
        <a
          href="#yachts"
          className="inline-block text-[#e31e24] text-sm uppercase tracking-wider font-medium hover:underline underline-offset-4 transition-all"
        >
          find your perfect yacht
        </a>
      </div>
    </section>
  );
}