import type { Airport } from "@/types";

export const airports: Airport[] = [
  // Moyen-Orient
  { code: "DXB", name: "Dubai International Airport", city: "Dubai", country: "United Arab Emirates" },
  { code: "AUH", name: "Abu Dhabi International Airport", city: "Abu Dhabi", country: "United Arab Emirates" },
  { code: "DOH", name: "Hamad International Airport", city: "Doha", country: "Qatar" },
  { code: "BAH", name: "Bahrain International Airport", city: "Manama", country: "Bahrain" },
  { code: "KWI", name: "Kuwait International Airport", city: "Kuwait City", country: "Kuwait" },
  { code: "RUH", name: "King Khalid International Airport", city: "Riyadh", country: "Saudi Arabia" },
  { code: "JED", name: "King Abdulaziz International Airport", city: "Jeddah", country: "Saudi Arabia" },
  { code: "MCT", name: "Muscat International Airport", city: "Muscat", country: "Oman" },
  { code: "AMM", name: "Queen Alia International Airport", city: "Amman", country: "Jordan" },

  // Europe
  { code: "LHR", name: "Heathrow Airport", city: "London", country: "United Kingdom" },
  { code: "LGW", name: "Gatwick Airport", city: "London", country: "United Kingdom" },
  { code: "CDG", name: "Charles de Gaulle Airport", city: "Paris", country: "France" },
  { code: "FRA", name: "Frankfurt Airport", city: "Frankfurt", country: "Germany" },
  { code: "AMS", name: "Amsterdam Schiphol Airport", city: "Amsterdam", country: "Netherlands" },
  { code: "FCO", name: "Leonardo da Vinci Airport", city: "Rome", country: "Italy" },
  { code: "MXP", name: "Milan Malpensa Airport", city: "Milan", country: "Italy" },
  { code: "BCN", name: "Barcelona–El Prat Airport", city: "Barcelona", country: "Spain" },
  { code: "MAD", name: "Adolfo Suárez Madrid–Barajas Airport", city: "Madrid", country: "Spain" },
  { code: "ZRH", name: "Zurich Airport", city: "Zurich", country: "Switzerland" },
  { code: "MUC", name: "Munich Airport", city: "Munich", country: "Germany" },
  { code: "IST", name: "Istanbul Airport", city: "Istanbul", country: "Turkey" },
  { code: "ATH", name: "Athens International Airport", city: "Athens", country: "Greece" },
  { code: "VIE", name: "Vienna International Airport", city: "Vienna", country: "Austria" },
  { code: "CPH", name: "Copenhagen Airport", city: "Copenhagen", country: "Denmark" },

  // Asie
  { code: "NRT", name: "Narita International Airport", city: "Tokyo", country: "Japan" },
  { code: "HND", name: "Haneda Airport", city: "Tokyo", country: "Japan" },
  { code: "SIN", name: "Singapore Changi Airport", city: "Singapore", country: "Singapore" },
  { code: "BKK", name: "Suvarnabhumi Airport", city: "Bangkok", country: "Thailand" },
  { code: "HKG", name: "Hong Kong International Airport", city: "Hong Kong", country: "China" },
  { code: "ICN", name: "Incheon International Airport", city: "Seoul", country: "South Korea" },
  { code: "DEL", name: "Indira Gandhi International Airport", city: "New Delhi", country: "India" },
  { code: "BOM", name: "Chhatrapati Shivaji Maharaj International Airport", city: "Mumbai", country: "India" },
  { code: "KUL", name: "Kuala Lumpur International Airport", city: "Kuala Lumpur", country: "Malaysia" },
  { code: "MNL", name: "Ninoy Aquino International Airport", city: "Manila", country: "Philippines" },
  { code: "PEK", name: "Beijing Capital International Airport", city: "Beijing", country: "China" },
  { code: "CGK", name: "Soekarno-Hatta International Airport", city: "Jakarta", country: "Indonesia" },

  // Amériques
  { code: "JFK", name: "John F. Kennedy International Airport", city: "New York", country: "United States" },
  { code: "LAX", name: "Los Angeles International Airport", city: "Los Angeles", country: "United States" },
  { code: "SFO", name: "San Francisco International Airport", city: "San Francisco", country: "United States" },
  { code: "ORD", name: "O'Hare International Airport", city: "Chicago", country: "United States" },
  { code: "MIA", name: "Miami International Airport", city: "Miami", country: "United States" },
  { code: "IAD", name: "Washington Dulles International Airport", city: "Washington D.C.", country: "United States" },
  { code: "YYZ", name: "Toronto Pearson International Airport", city: "Toronto", country: "Canada" },
  { code: "GRU", name: "São Paulo–Guarulhos International Airport", city: "São Paulo", country: "Brazil" },
  { code: "EZE", name: "Ministro Pistarini International Airport", city: "Buenos Aires", country: "Argentina" },
  { code: "BOG", name: "El Dorado International Airport", city: "Bogotá", country: "Colombia" },

  // Afrique
  { code: "CAI", name: "Cairo International Airport", city: "Cairo", country: "Egypt" },
  { code: "JNB", name: "O.R. Tambo International Airport", city: "Johannesburg", country: "South Africa" },
  { code: "NBO", name: "Jomo Kenyatta International Airport", city: "Nairobi", country: "Kenya" },
  { code: "CMN", name: "Mohammed V International Airport", city: "Casablanca", country: "Morocco" },
  { code: "ADD", name: "Addis Ababa Bole International Airport", city: "Addis Ababa", country: "Ethiopia" },
  { code: "LOS", name: "Murtala Muhammed International Airport", city: "Lagos", country: "Nigeria" },

  // Océanie
  { code: "SYD", name: "Sydney Kingsford Smith Airport", city: "Sydney", country: "Australia" },
  { code: "MEL", name: "Melbourne Airport", city: "Melbourne", country: "Australia" },
  { code: "AKL", name: "Auckland Airport", city: "Auckland", country: "New Zealand" },
];
