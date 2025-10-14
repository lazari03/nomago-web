"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useListingsApiStore } from "../store/listingsApiStore";
import Link from "next/link";

const FeaturedSection = () => {
  const { listings } = useListingsApiStore();
  const featured = listings.filter(l => l.isFeatured);
  const carouselRef = useRef<HTMLDivElement>(null);

  if (!featured.length) return null;

  const scrollAmount = 340;
  const scroll = (dir: "left" | "right") => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: dir === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-darkGray text-center">Featured Listings</h2>
        <div className="relative">
          <button
            aria-label="Scroll left"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-lightGray rounded-full shadow p-2 hover:bg-lightGray transition hidden md:block"
            style={{ left: -64 }}
            onClick={() => scroll("left")}
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <div
            ref={carouselRef}
            className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide scroll-smooth"
            style={{ scrollBehavior: "smooth" }}
          >
            {featured.map(listing => (
              <Link key={listing.propertyDocumentId} href={`/listings/${listing.propertyDocumentId}`} className="min-w-[320px] max-w-[320px] bg-white rounded-2xl shadow-md overflow-hidden border border-lightGray flex-shrink-0 hover:scale-105 transition-transform flex flex-col">
                {listing.featuredImage?.url ? (
                  <Image
                    src={listing.featuredImage.url}
                    alt={listing.title}
                    width={288}
                    height={160}
                    className="w-full h-40 object-cover bg-gray-200"
                  />
                ) : (
                  <div className="w-full h-40 bg-gray-200 flex items-center justify-center text-gray-400 text-3xl font-bold">
                    {listing.category?.name?.[0] || 'N'}
                  </div>
                )}
                <div className="p-4 flex-1 flex flex-col">
                  <h4 className="font-bold text-lg mb-1 text-darkGray truncate">{listing.title}</h4>
                  <div className="text-xs text-blue font-semibold mb-1">{listing.category?.name}</div>
                  <p className="text-gray text-sm mb-2 line-clamp-3">{listing.description}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-purple font-bold text-base">{listing.price ? `${listing.price} ALL` : ''}</span>
                    {listing.locationLink && (
                      <span
                        onClick={e => {
                          e.stopPropagation();
                          window.open(listing.locationLink!, '_blank', 'noopener,noreferrer');
                        }}
                        className="text-xs text-blue underline ml-2 cursor-pointer"
                        role="button"
                        tabIndex={0}
                        onKeyDown={e => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.stopPropagation();
                            window.open(listing.locationLink!, '_blank', 'noopener,noreferrer');
                          }
                        }}
                      >
                        Map
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <button
            aria-label="Scroll right"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-lightGray rounded-full shadow p-2 hover:bg-lightGray transition hidden md:block"
            style={{ right: -64 }}
            onClick={() => scroll("right")}
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
