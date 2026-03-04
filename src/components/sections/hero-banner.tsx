import Image from "next/image";

export const HeroBanner = () => {
  return (
    <section className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Emirates — Fly Better"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Badge Fly Better */}
      <div className="absolute top-20 right-4 sm:top-24 sm:right-8">
        <span className="text-white/80 text-xs sm:text-sm font-light tracking-widest uppercase">
          Fly Better
        </span>
      </div>

      {/* Contenu */}
      <div className="absolute bottom-16 sm:bottom-24 left-0 right-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl">
            Discover a world of possibilities
          </h1>
          <p className="mt-3 text-base sm:text-lg text-white/90 max-w-xl">
            Travel to over 150 destinations worldwide with award-winning service.
          </p>
          <a
            href="#"
            className="inline-flex items-center mt-6 px-6 py-3 bg-emirates-red text-white text-sm font-medium rounded hover:bg-emirates-red-dark transition-colors"
          >
            Learn more
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
