import { ItinerariesPageContent } from "@/components/itineraries-page-content"

export const metadata = {
  title: "Tanzania Safari Itineraries | Maasai Amazing Safaris",
  description:
    "Explore our carefully crafted Tanzania safari itineraries. From luxury safaris to bush-to-beach adventures, find the perfect journey through Tanzania's wonders.",
}

const itineraries = [
  {
    id: "luxury-southern-circuit",
    title: "9 Days Luxury Southern Circuit Expedition",
    duration: "9 Days / 8 Nights",
    image: "/images/safari-vehicle.jpg",
    destinations: "Nyerere, Mikumi, Udzungwa, Ruaha",
    groupSize: "2-6 people",
    description:
      "Experience the ultimate luxury in Tanzania's southern parks. This tour combines high-end accommodations with diverse landscapes of Nyerere, Mikumi, Udzungwa, and Ruaha.",
    highlights: [
      "Boat safaris on Rufiji River",
      "Trekking Sanje Waterfalls",
      "Extensive game viewing in Ruaha",
      "Luxury accommodations",
    ],
    priceFrom: "$2,426",
    category: "safari",
  },
  {
    id: "grand-southern-adventure",
    title: "9 Days Grand Southern Adventure",
    duration: "9 Days",
    image: "/images/giraffe-baobab.jpg",
    destinations: "Nyerere, Mikumi, Udzungwa, Ruaha",
    groupSize: "2-6 people",
    description:
      "A comprehensive journey through the heart of Southern Tanzania, featuring three major national parks and a deep dive into local culture.",
    highlights: [
      "Extended game drives in Ruaha",
      "Visit to Maasai Boma",
      "Trekking Udzungwa Mountains",
      "Mid-range comfortable stays",
    ],
    priceFrom: "$1,800",
    category: "safari",
  },
  {
    id: "bush-to-beach",
    title: "6 Day Bush to Beach Experience",
    duration: "6 Days",
    image: "/images/zanzibar-aerial.jpg",
    destinations: "Nyerere NP to Zanzibar Island",
    groupSize: "2-6 people",
    description:
      "The perfect combination of wild adventure and tropical relaxation. Start with wildlife tracking in Nyerere NP and end on the white sands of Zanzibar.",
    highlights: [
      "Rufiji River boat safari",
      "Walking safari experiences",
      "Exploring Stone Town",
      "Prison Island visit",
    ],
    priceFrom: "$1,947",
    category: "safari",
  },
  {
    id: "coastal-mountain-adventure",
    title: "7 Days Coastal & Mountain Adventure",
    duration: "7 Days",
    image: "/images/waterfall-hiker.jpg",
    destinations: "Bagamoyo to Usambara",
    groupSize: "2-6 people",
    description:
      "A unique journey that bridges Tanzania's rich history with its coastal beauty and lush mountain landscapes. Visit ancient ruins and hidden forest paradise.",
    highlights: [
      "8th-century Bagamoyo ruins",
      "Boat safari in Saadani",
      "Night hiking in Amani Reserve",
      "Historical coastal towns",
    ],
    priceFrom: "$1,600",
    category: "safari",
  },
  {
    id: "wonderful-southern-expedition",
    title: "6 Days Wonderful Southern Expedition",
    duration: "6 Days",
    image: "/images/boat-sunset.jpg",
    destinations: "Nyerere, Mikumi, Udzungwa",
    groupSize: "2-6 people",
    description:
      "This comprehensive safari takes you through the diverse ecosystems of Nyerere (Selous), Mikumi, and the Udzungwa Mountains.",
    highlights: [
      "Boat safari on Rufiji River",
      "Trekking to Sanje Waterfalls",
      "Maasai village cultural visit",
      "Walking safari experience",
    ],
    priceFrom: "$1,198",
    category: "safari",
  },
  {
    id: "serengeti-of-south",
    title: "6 Days Serengeti of the South",
    duration: "6 Days",
    image: "/images/maasai-women.jpg",
    destinations: "Mikumi, Ruaha & Maasai Culture",
    groupSize: "2-6 people",
    description:
      "A deep dive into the rugged landscapes of Ruaha National Park combined with the accessible wildlife of Mikumi and authentic Maasai cultural experience.",
    highlights: [
      "Multi-day Ruaha exploration",
      "Massive elephant herds",
      "Lion and leopard tracking",
      "Authentic Maasai Boma visit",
    ],
    priceFrom: "$1,420",
    category: "safari",
  },
  {
    id: "northern-7-days",
    title: "7-Day Natural Wonders Safari",
    duration: "7 Days / 6 Nights",
    image: "/images/northern-circuit-flamingos.jpg",
    destinations: "Lake Manyara, Serengeti, Ngorongoro",
    groupSize: "2-6 people",
    description:
      "Experience two of Africa's Seven Natural Wonders: the Serengeti and Ngorongoro Crater. This journey showcases the best of Tanzania's northern circuit.",
    highlights: [
      "Great Migration in Serengeti",
      "Ngorongoro Crater descent",
      "Tree-climbing lions in Manyara",
      "Big Five sightings",
    ],
    priceFrom: "$2,714",
    category: "northern",
  },
  {
    id: "northern-8-days",
    title: "8-Day Elephant Kingdom Safari",
    duration: "8 Days / 7 Nights",
    image: "/images/northern-circuit-elephant.jpg",
    destinations: "Tarangire, Serengeti, Ngorongoro",
    groupSize: "2-6 people",
    description:
      "Our bestseller! This extended safari adds Tarangire National Park, the 'Kingdom of Elephants' with massive herds and ancient baobab trees.",
    highlights: [
      "Giant elephant herds in Tarangire",
      "Three days in the Serengeti",
      "Ngorongoro Crater wildlife",
      "Ancient baobab forests",
    ],
    priceFrom: "$3,284",
    category: "northern",
  },
  {
    id: "northern-5-days",
    title: "5-Day Safari Extension",
    duration: "5 Days / 4 Nights",
    image: "/images/northern-circuit-balloon.jpg",
    destinations: "Manyara, Serengeti, Ngorongoro",
    groupSize: "2-6 people",
    description:
      "Perfect for travelers completing a Kilimanjaro climb or Zanzibar holiday. Experience the Big Three parks of Northern Tanzania in a private 4x4.",
    highlights: [
      "Post-Kilimanjaro adventure",
      "Serengeti game drives",
      "Crater floor experience",
      "Private safari vehicle",
    ],
    priceFrom: "$1,960",
    category: "northern",
  },
  {
    id: "northern-3-days",
    title: "3-Day Classic Northern Trio",
    duration: "3 Days / 2 Nights",
    image: "/images/northern-circuit-lions.jpg",
    destinations: "Tarangire, Ngorongoro, Manyara",
    groupSize: "1-6 people",
    description:
      "A high-impact, short-duration safari covering the legendary Tarangire, Ngorongoro Crater, and Lake Manyara. Perfect for time-conscious travelers.",
    highlights: [
      "Tarangire elephant herds",
      "Full day in Ngorongoro Crater",
      "Black rhino sightings",
      "Compact adventure",
    ],
    priceFrom: "$1,558",
    category: "northern",
  },
  {
    id: "kilimanjaro-machame",
    title: "Kilimanjaro - Machame Route",
    duration: "7 Days / 6 Nights",
    image: "/images/kilimanjaro-sunrise.jpg",
    destinations: "Mount Kilimanjaro via Machame",
    groupSize: "1-10+ people",
    description:
      "The 'Whiskey Route' offers the best acclimatization and stunning scenery. Trek through rainforests, moorlands, and high deserts to Africa's roof.",
    highlights: [
      "Climb high, sleep low strategy",
      "Barranco Wall adventure",
      "Summit at Uhuru Peak",
      "Camping under stars",
    ],
    priceFrom: "$2,589",
    category: "northern",
  },
  {
    id: "kilimanjaro-marangu",
    title: "Kilimanjaro - Marangu Route",
    duration: "6 Days / 5 Nights",
    image: "/images/kilimanjaro-climbing.jpg",
    destinations: "Mount Kilimanjaro via Marangu",
    groupSize: "1-10+ people",
    description:
      "The 'Coca-Cola Route' is the only path with hut accommodations. A classic climb with proper acclimatization built into our 6-day itinerary.",
    highlights: [
      "Hut accommodations",
      "Acclimatization day included",
      "Established classic route",
      "Summit certificate ceremony",
    ],
    priceFrom: "$2,349",
    category: "northern",
  },
  {
    id: "zanzibar-4-days",
    title: "Zanzibar Short Escape",
    duration: "4 Days / 3 Nights",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-1297190187-612x612-tU5KAe7obcLRdB9MwYrfXj1awvu7uC.jpg",
    destinations: "Stone Town, Prison Island, Mnemba",
    groupSize: "Flexible",
    description:
      "Perfect for a quick tropical getaway. This stress-free package includes airport transfers, breakfast and dinner, and two of Zanzibar's most iconic excursions.",
    highlights: [
      "Stone Town & Spice Farm tour",
      "Prison Island giant tortoises",
      "Mnemba dolphin swimming",
      "Snorkeling crystal waters",
    ],
    priceFrom: "$706",
    category: "zanzibar",
  },
  {
    id: "zanzibar-5-days",
    title: "Zanzibar Classic",
    duration: "5 Days / 4 Nights",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-2198492232-612x612-DrbeX1istrIy8ckBCumvHYcubq92Wo.jpg",
    destinations: "Safari Blue, Stone Town, Mnemba",
    groupSize: "Flexible",
    description:
      "An extended stay that adds the famous Safari Blue experience to your itinerary. Includes all transfers, half-board meals, and professional guides.",
    highlights: [
      "Full-day Safari Blue trip",
      "Seafood BBQ on sandbanks",
      "Dolphin encounters",
      "Cultural Stone Town tour",
    ],
    priceFrom: "$826",
    category: "zanzibar",
  },
  {
    id: "zanzibar-6-days",
    title: "Zanzibar Relax & Explore",
    duration: "6 Days / 5 Nights",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-2191376209-612x612-Pg774cMeJGiVjsE5UgT4KhpyS9zrdo.jpg",
    destinations: "Safari Blue, Stone Town, Free Time",
    groupSize: "Flexible",
    description:
      "This package balances adventure with a 'Chilling Day,' allowing you time to soak up the sun at your own pace while still seeing the island's top sights.",
    highlights: [
      "Safari Blue ocean adventure",
      "Full relaxation day",
      "Prison Island visit",
      "Spice plantation tour",
    ],
    priceFrom: "$1,206",
    category: "zanzibar",
  },
  {
    id: "zanzibar-7-days",
    title: "Zanzibar Ultimate Week",
    duration: "7 Days / 6 Nights",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-2132790250-612x612-mx41ERncAmmDzYbHB9fcSMVDEzuXPA.jpg",
    destinations: "Safari Blue, Jozani, The Rock",
    groupSize: "Flexible",
    description:
      "Our most comprehensive tour. This week-long experience includes the legendary Rock Restaurant and the rare wildlife of Jozani Forest.",
    highlights: [
      "Red Colobus monkeys in Jozani",
      "The Rock Restaurant lunch",
      "Safari Blue experience",
      "Complete island exploration",
    ],
    priceFrom: "$1,388",
    category: "zanzibar",
  },
]

export default function ItinerariesPage() {
  return <ItinerariesPageContent itineraries={itineraries} />
}
