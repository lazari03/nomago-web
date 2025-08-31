"use client";
import ListingDetail from '../../../components/ListingDetail';
import { notFound } from 'next/navigation';
import { useListingsApiStore } from '../../../store/listingsApiStore';
import React from 'react';

interface Props {
  params: { id: string };
}

export default function ListingDetailPage({ params }: Props) {
  const { listings, fetchListings } = useListingsApiStore();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!listings || listings.length === 0) {
      setLoading(true);
      fetchListings?.()
        .catch((e) => setError(e?.message || 'Failed to fetch listing'))
        .finally(() => setLoading(false));
    }
  }, [fetchListings, listings]);

  // Unwrap params if it's a Promise (Next.js future compatibility)
  // For now, params is always an object, but this is future-proofed for Next.js upgrades
  function isPromise<T = unknown>(obj: unknown): obj is Promise<T> {
    return !!obj && typeof (obj as { then?: unknown }).then === 'function';
  }
  let routeParams: { id: string } = params;
  if (isPromise(params)) {
  routeParams = React.use(params) as { id: string };
  }
  const listing = listings.find(l => l.id === Number(routeParams.id));
  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!listing) return notFound();

  // Map API listing to ListingDetailProps
  // Use real image and gallery fields from API (featuredImage and images)
  const mappedListing = {
    image: listing.featuredImage && listing.featuredImage.url
      ? listing.featuredImage.url
      : "/35.jpg", // fallback if no featuredImage
    title: listing.title,
    subtitle: listing.category?.name || "",
    description: listing.description,
    gallery: Array.isArray(listing.images)
      ? listing.images.map((img) => typeof img === 'string' ? img : img.url).filter(Boolean)
      : [],
    mapUrl: listing.locationLink || undefined,
    price: listing.price ? `${listing.price} ALL` : undefined,
  };

  return <ListingDetail {...mappedListing} />;
}
