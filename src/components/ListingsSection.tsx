"use client";

import React, { useEffect } from "react";
import Image from 'next/image';
import Link from "next/link";
import { useCategoriesStore } from "../store/categoriesStore";
import { useListingsApiStore } from "../store/listingsApiStore";
import type { Listing } from "../store/listingsApiStore";
import { ColorTokens } from "../theme/colors";


const ListingCell = ({ propertyDocumentId, title, description, price, category, locationLink, featuredImage }: Listing) => (
  <Link href={`/listings/${propertyDocumentId}`} className="bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-xs min-w-0 hover:scale-105 transition-transform flex flex-col">
    {/* Show featured image if available, else fallback */}
    {featuredImage && featuredImage.url ? (
      <Image
        src={featuredImage.url}
        alt={title}
        width={288}
        height={160}
        className="w-full h-40 object-cover bg-gray-200"
        priority={false}
      />
    ) : (
      <div className="w-full h-40 bg-gray-200 flex items-center justify-center text-gray-400 text-3xl font-bold">
        {category?.name?.[0] || 'N'}
      </div>
    )}
    <div className="p-4 flex-1 flex flex-col">
      <h4 className="font-bold text-lg mb-1 text-darkGray truncate">{title}</h4>
      <div className="text-xs text-blue font-semibold mb-1">{category?.name}</div>
      <p className="text-gray text-sm mb-2 line-clamp-3">{description}</p>
      <div className="flex items-center justify-between mt-auto">
        <span className="text-purple font-bold text-base">{price ? `${price} ALL` : ''}</span>
        {locationLink && (
          <span
            onClick={e => {
              e.stopPropagation();
              window.open(locationLink, '_blank', 'noopener,noreferrer');
            }}
            className="text-xs text-blue underline ml-2 cursor-pointer"
            role="button"
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.stopPropagation();
                window.open(locationLink, '_blank', 'noopener,noreferrer');
              }
            }}
          >
            Map
          </span>
        )}
      </div>
    </div>
  </Link>
);



const ListingsSection = () => {
  const { categories, selectedCategory, setSelectedCategory, fetchCategories } = useCategoriesStore();
  const { listings, fetchListings } = useListingsApiStore();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    Promise.all([
      fetchCategories?.(),
      fetchListings?.()
    ]).then(() => {
      setLoading(false);
    }).catch((e) => {
      setError(e?.message || 'Failed to fetch data');
      setLoading(false);
    });
  }, [fetchCategories, fetchListings]);

  // Group listings by category for display
  const listingsByCategory = categories.map((cat) => ({
    ...cat,
    listings: listings.filter((l) => l.category?.id === cat.id),
  }));

  // Filter listings by selected category
  const filteredListings = selectedCategory
    ? listings.filter((l) => l.category?.id === selectedCategory)
    : listings;

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-darkGray">Listings</h2>
        {/* Category Filter Buttons */}
        <div className="flex gap-3 mb-8 flex-wrap justify-center">
          <button
            className={`px-5 py-2 rounded-full font-semibold border transition ${selectedCategory === null ? '' : ''}`}
            style={selectedCategory === null ? { background: ColorTokens.purple, color: ColorTokens.white, borderColor: ColorTokens.purple } : { background: ColorTokens.white, color: ColorTokens.purple, borderColor: '#e5e7eb' }}
            onClick={() => setSelectedCategory(null)}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`px-5 py-2 rounded-full font-semibold border transition`}
              style={selectedCategory === cat.id
                ? { background: ColorTokens.purple, color: ColorTokens.white, borderColor: ColorTokens.purple }
                : { background: ColorTokens.white, color: ColorTokens.purple, borderColor: '#e5e7eb' }}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Loading/Error States */}
        {loading && <div className="text-center text-gray-400 py-12">Loading listings...</div>}
        {error && <div className="text-center text-red-500 py-12">{error}</div>}

        {/* Listings by Category */}
        {!loading && !error && (selectedCategory === null ? (
          listingsByCategory.map((cat) => (
            <div key={cat.id} className="mb-12">
              <h3 className="text-2xl font-bold mb-4 text-darkGray text-center">{cat.name}</h3>
              <div className="flex flex-wrap gap-6 justify-center pb-2">
                {cat.listings.length > 0 ? cat.listings.map((listing) => (
                  <ListingCell key={listing.id} {...listing} />
                )) : <div className="text-gray-400 italic">No listings.</div>}
              </div>
            </div>
          ))
        ) : (
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4 text-darkGray text-center">{categories.find(c => c.id === selectedCategory)?.name}</h3>
            <div className="flex flex-wrap gap-6 justify-center pb-2">
              {filteredListings.length > 0 ? filteredListings.map((listing) => (
                <ListingCell key={listing.id} {...listing} />
              )) : <div className="text-gray-400 italic">No listings.</div>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ListingsSection;
