export const SkywardsBanner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#2D1B4E] via-[#3D2B5E] to-[#1a0a30]">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:py-20">
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-widest text-purple-300 mb-3">
            Skywards+
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
            Enhance your benefits with Skywards+
          </h2>
          <p className="text-sm sm:text-base text-white/80 mb-6 leading-relaxed">
            Unlock exclusive benefits when you subscribe to Skywards+. Enjoy extra baggage allowance,
            lounge access, priority services and more — all designed to elevate your travel experience.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-white text-white text-sm font-medium rounded hover:bg-white hover:text-[#2D1B4E] transition-colors"
          >
            Learn more
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Décoration de fond */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="absolute inset-0 bg-gradient-to-l from-purple-400 to-transparent" />
      </div>
    </section>
  );
};
