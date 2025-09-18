'use client'
import React from "react";
import Image from "next/image";
import { useListingsApiStore } from "../store/listingsApiStore";

const FeaturedCarousel = () => {
  const { listings } = useListingsApiStore();
  const featured = listings.filter(l => l.isFeatured);

  if (!featured.length) return null;

  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4 text-center text-darkGray">Featured</h2>
      <div className="flex overflow-x-auto gap-6 pb-4">
        {featured.map(listing => (
          <a
            key={listing.propertyDocumentId}
            href={`/listings/${listing.propertyDocumentId}`}
            className="min-w-[320px] bg-white rounded-2xl shadow-md border border-lightGray flex-shrink-0 hover:shadow-lg transition-all"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            {listing.featuredImage?.url && (
              <Image
                src={listing.featuredImage.url}
                alt={listing.title}
                width={320}
                height={180}
                className="w-full h-40 object-cover rounded-t-2xl"
              />
            )}
            <div className="p-4">
              <h3 className="font-bold text-lg mb-1 text-darkGray truncate">{listing.title}</h3>
              <div className="text-xs text-blue font-semibold mb-1">{listing.category?.name}</div>
              <p className="text-gray text-sm mb-2 line-clamp-2">{listing.description}</p>
              <span className="text-purple font-bold text-base">{listing.price ? `${listing.price} ALL` : ''}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCarousel;
