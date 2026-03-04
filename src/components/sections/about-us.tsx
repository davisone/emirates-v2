const aboutItems = [
  {
    icon: "🏢",
    title: "Our business",
    description: "Learn about the Emirates Group and our global operations.",
  },
  {
    icon: "🌍",
    title: "Our planet",
    description: "Discover our commitment to sustainability and the environment.",
  },
  {
    icon: "👥",
    title: "Our people",
    description: "Meet the diverse team that makes Emirates a great airline.",
  },
  {
    icon: "❤️",
    title: "Our communities",
    description: "See how we support communities around the world.",
  },
];

export const AboutUs = () => {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-emirates-black mb-3 text-center">
          About us
        </h2>
        <p className="text-sm text-emirates-gray text-center mb-10 max-w-xl mx-auto">
          Emirates is one of the world&apos;s largest international airlines, connecting people
          and places across six continents.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {aboutItems.map((item) => (
            <a
              key={item.title}
              href="#"
              className="group flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-emirates-gray-light flex items-center justify-center text-3xl sm:text-4xl mb-4 group-hover:bg-gray-200 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-emirates-black mb-1 group-hover:text-emirates-red transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-emirates-gray leading-relaxed hidden sm:block">
                {item.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
