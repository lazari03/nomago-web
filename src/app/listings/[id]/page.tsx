import ListingDetail from '../../../components/ListingDetail';
import { notFound } from 'next/navigation';

const mockListings = [
  {
    id: 1,
    image: "/35.jpg",
    title: "Modern Apartment in Tirana",
    subtitle: "2 beds • 1 bath • City Center",
    description: "A beautiful modern apartment located in the heart of Tirana. Close to all amenities and public transport. Perfect for digital nomads and travelers.",
    gallery: ["/14.jpg", "/35.jpg"],
    mapUrl: "https://goo.gl/maps/123456",
    price: "$120/night",
  },
  {
    id: 2,
    image: "/14.jpg",
    title: "Cozy Studio in Durrës",
    subtitle: "1 bed • Near the beach",
    description: "Enjoy the sea breeze in this cozy studio just steps from the beach. Ideal for solo travelers or couples.",
    gallery: ["/35.jpg"],
    mapUrl: "https://goo.gl/maps/654321",
    price: "$80/night",
  },
  {
    id: 3,
    image: "/35.jpg",
    title: "Coworking Space",
    subtitle: "Fast WiFi • 24/7 Access",
    description: "A modern coworking space with all the amenities you need to be productive. High-speed internet, meeting rooms, and a vibrant community.",
    gallery: ["/14.jpg"],
    price: "$20/day",
  },
  {
    id: 4,
    image: "/14.jpg",
    title: "Mountain Retreat",
    subtitle: "3 beds • Nature view",
    description: "Escape to the mountains in this peaceful retreat. Surrounded by nature, perfect for relaxation and remote work.",
    gallery: ["/35.jpg"],
    price: "$150/night",
  },
  {
    id: 5,
    image: "/35.jpg",
    title: "City Loft",
    subtitle: "1 bed • Modern amenities",
    description: "A stylish city loft with all modern amenities. Located in the city center, close to cafes and nightlife.",
    gallery: ["/14.jpg"],
    price: "$110/night",
  },
  {
    id: 6,
    image: "/14.jpg",
    title: "Beach House",
    subtitle: "4 beds • Private beach",
    description: "Spacious beach house with private access to the beach. Great for families or groups of friends.",
    gallery: ["/35.jpg"],
    mapUrl: "https://goo.gl/maps/abcdef",
    price: "$300/night",
  },
];

interface Props {
  params: { id: string };
}

export default function ListingDetailPage({ params }: Props) {
  const listing = mockListings.find(l => l.id === Number(params.id));
  if (!listing) return notFound();
  return <ListingDetail {...listing} />;
}
