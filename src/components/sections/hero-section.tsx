export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <iframe
          className="absolute top-1/2 left-1/2 w-[177.77777778vh] h-[56.25vw] min-h-screen min-w-full -translate-x-1/2 -translate-y-1/2"
          src="https://www.youtube.com/embed/tJNUFAjyKIc?autoplay=1&mute=1&controls=0&loop=1&playlist=tJNUFAjyKIc&playsinline=1&enablejsapi=1&showinfo=0&rel=0&modestbranding=1"
          title="Yacht Charter Video"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        {/* Breadcrumb */}
        <div className="absolute top-24 left-8 text-sm">
          <span className="opacity-70">Home › Charter</span>
        </div>

        {/* Hero Text */}
        <h1 className="text-5xl md:text-7xl font-light tracking-wide text-center mb-4">
          YACHT CHARTER
        </h1>
      </div>
    </section>
  );
}