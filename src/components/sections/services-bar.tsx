const services = [
  { icon: "🏨", label: "Hotels", href: "#" },
  { icon: "🚗", label: "Car rentals", href: "#" },
  { icon: "🗺", label: "Tours & activities", href: "#" },
  { icon: "🌴", label: "Book a holiday", href: "#" },
  { icon: "🚘", label: "Chauffeur-drive", href: "#" },
  { icon: "🤝", label: "Meet & Greet", href: "#" },
  { icon: "🚐", label: "Airport transfers", href: "#" },
];

export const ServicesBar = () => {
  return (
    <section className="py-8 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex gap-6 overflow-x-auto pb-2 scrollbar-hide">
          {services.map((service) => (
            <a
              key={service.label}
              href={service.href}
              className="flex flex-col items-center gap-2 min-w-[80px] group"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
                {service.icon}
              </span>
              <span className="text-xs text-emirates-gray group-hover:text-emirates-red whitespace-nowrap transition-colors">
                {service.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
