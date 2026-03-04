import Image from "next/image";

const journeyCards = [
  {
    id: "dubai",
    category: "Destination",
    title: "Discover Dubai",
    image: "/images/journey/dubai.jpg",
    large: true,
  },
  {
    id: "first",
    category: "First Class",
    title: "A world of luxury",
    image: "/images/journey/first-class.jpg",
    large: false,
  },
  {
    id: "business",
    category: "Business Class",
    title: "Fly in style",
    image: "/images/journey/business-class.jpg",
    large: false,
  },
  {
    id: "premium",
    category: "Premium Economy",
    title: "More room to relax",
    image: "/images/journey/premium-economy.jpg",
    large: false,
  },
  {
    id: "economy",
    category: "Economy Class",
    title: "Comfort for all",
    image: "/images/journey/economy-class.jpg",
    large: false,
  },
];

export const JourneyGrid = () => {
  const largeCard = journeyCards[0];
  const smallCards = journeyCards.slice(1);

  return (
    <section className="py-12 sm:py-16 bg-emirates-gray-light">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-xs uppercase tracking-widest text-emirates-gray mb-2">
          Flying with Emirates
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-emirates-black mb-3">
          Make it an incredible journey
        </h2>
        <p className="text-sm text-emirates-gray mb-8 max-w-xl">
          From the moment you step on board, experience world-class service, gourmet dining
          and award-winning entertainment across every cabin class.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Grande card */}
          <a
            href="#"
            className="group relative h-80 sm:h-96 lg:h-full lg:min-h-[420px] rounded-xl overflow-hidden"
          >
            <Image
              src={largeCard.image}
              alt={largeCard.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-xs text-white/80 uppercase tracking-wider mb-1">
                {largeCard.category}
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {largeCard.title}
              </h3>
              <span className="text-sm text-white/80">Learn more</span>
            </div>
          </a>

          {/* 4 petites cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {smallCards.map((card) => (
              <a
                key={card.id}
                href="#"
                className="group relative h-48 sm:h-[200px] rounded-xl overflow-hidden"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-xs text-white/80 uppercase tracking-wider mb-0.5">
                    {card.category}
                  </p>
                  <h3 className="text-base font-bold text-white mb-1">
                    {card.title}
                  </h3>
                  <span className="text-xs text-white/80">Learn more</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
