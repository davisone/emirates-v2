import Image from "next/image";
import { featuredDestinations } from "@/data/destinations";

export const FeaturedDestinations = () => {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-emirates-black mb-8">
          Featured destinations from United Arab Emirates
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {featuredDestinations.map((dest) => (
            <a
              key={dest.slug}
              href="#"
              className="group relative h-64 sm:h-72 rounded-xl overflow-hidden"
            >
              <Image
                src={dest.image}
                alt={dest.city}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs text-white/80 uppercase tracking-wider mb-1">
                  {dest.country}
                </p>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  {dest.city}
                </h3>
                <p className="text-sm text-white/80">Discover for yourself</p>
              </div>
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-8 text-sm">
          <a href="#" className="text-emirates-red hover:underline">
            More destinations
          </a>
          <a href="#" className="text-emirates-red hover:underline flex items-center gap-1">
            Be inspired by our route map
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
