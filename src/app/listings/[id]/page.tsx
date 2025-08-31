"use client";
import ListingDetail from '../../../components/ListingDetail';
import { notFound } from 'next/navigation';
import { useListingsApiStore } from '../../../store/listingsApiStore';
import React from 'react';

interface Props {
  params: { id: string };
}

export default function ListingDetailPage({ params }: Props) {
  const { listings } = useListingsApiStore();


  // Listings are now fetched globally at app start


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
  // Loading and error states removed
  if (!listing) return notFound();

  // Map API listing to ListingDetailProps
  // Use real image and gallery fields from API (featuredImage and images)
  const mappedListing = {
    image: listing.featuredImage && listing.featuredImage.url
      ? listing.featuredImage.url
      : "/35.jpg", // fallback if no featuredImage
    id: listing.id,
    title: listing.title,
    subtitle: listing.category?.name || "",
    description: listing.description,
    gallery: Array.isArray(listing.images)
      ? listing.images.map((img) => typeof img === 'string' ? img : img.url).filter(Boolean)
      : [],
    mapUrl: listing.locationLink || undefined,
    price: listing.price ? `${listing.price} ALL` : undefined,
    category: listing.category ? { id: listing.category.id, name: listing.category.name } : undefined,
  };

  return <ListingDetail {...mappedListing} />;
}
