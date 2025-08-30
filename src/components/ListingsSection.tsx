'use client'

import React from "react";
import Image from 'next/image';
import Link from "next/link";

interface Listing {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

const mockListings: Listing[] = [
  {
    id: 1,
    image: "/35.jpg",
    title: "Modern Apartment in Tirana",
    subtitle: "2 beds • 1 bath • City Center",
  },
  {
    id: 2,
    image: "/14.jpg",
    title: "Cozy Studio in Durrës",
    subtitle: "1 bed • Near the beach",
  },
  {
    id: 3,
    image: "/35.jpg",
    title: "Coworking Space",
    subtitle: "Fast WiFi • 24/7 Access",
  },
  {
    id: 4,
    image: "/14.jpg",
    title: "Mountain Retreat",
    subtitle: "3 beds • Nature view",
  },
  {
    id: 5,
    image: "/35.jpg",
    title: "City Loft",
    subtitle: "1 bed • Modern amenities",
  },
  {
    id: 6,
    image: "/14.jpg",
    title: "Beach House",
    subtitle: "4 beds • Private beach",
  },
];

const ListingCell = ({ id, image, title, subtitle }: Listing) => (
  <Link href={`/listings/${id}`} className="bg-white rounded-2xl shadow-md overflow-hidden w-64 min-w-[16rem] flex-shrink-0 hover:scale-105 transition-transform">
    <Image src={image} alt={title} width={256} height={160} className="w-full h-40 object-cover" priority />
    <div className="p-4">
      <h4 className="font-bold text-lg mb-1 text-darkGray truncate">{title}</h4>
      <p className="text-gray text-sm truncate">{subtitle}</p>
    </div>
  </Link>
);

const ListingsSection = () => (
  <section className="py-20 px-4 bg-white">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-darkGray">Featured Listings</h2>
      <div className="flex gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-200 pb-2">
        {mockListings.map((listing) => (
          <ListingCell key={listing.id} {...listing} />
        ))}
      </div>
    </div>
  </section>
);

export default ListingsSection;
