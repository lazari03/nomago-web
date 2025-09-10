"use client";
import ListingDetail from '../../../components/ListingDetail';
import { notFound } from 'next/navigation';
import { useListingsApiStore } from '../../../store/listingsApiStore';
import React, { useEffect, useState } from 'react';

interface Props {
  params: { documentId: string };
}

export default function ListingDetailPage({ params }: Props) {
  const { listings, fetchListings } = useListingsApiStore();
  const [loading, setLoading] = useState(false);
  const [notFoundState, setNotFoundState] = useState(false);

  // Unwrap params if it's a Promise (Next.js future compatibility)
  function isPromise<T = unknown>(obj: unknown): obj is Promise<T> {
    return !!obj && typeof (obj as { then?: unknown }).then === 'function';
  }
  let routeParams: { documentId: string } = params;
  if (isPromise(params)) {
    routeParams = React.use(params) as { documentId: string };
  }

  // Try to find the listing
  const listing = listings.find(l => l.propertyDocumentId === routeParams.documentId);

  useEffect(() => {
    // If listings are empty, fetch them
    if (!listing && listings.length === 0 && fetchListings) {
      setLoading(true);
      fetchListings().then(() => {
        setLoading(false);
      });
    } else if (!listing && listings.length > 0) {
      // If listings loaded but not found, set not found
      setNotFoundState(true);
    }
  }, [listing, listings, fetchListings]);

  // After fetching, try to find the listing again
  const foundListing = listings.find(l => l.propertyDocumentId === routeParams.documentId);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-500"></div>
        <span className="ml-4 text-lg font-semibold">Loading property...</span>
      </div>
    );
  }

  if (notFoundState || (!foundListing && listings.length > 0)) {
    return notFound();
  }

  if (!foundListing) {
    // Still waiting for fetch
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-500"></div>
        <span className="ml-4 text-lg font-semibold">Loading property...</span>
      </div>
    );
  }

  const mappedListing = {
    image: foundListing.featuredImage && foundListing.featuredImage.url
      ? foundListing.featuredImage.url
      : "/35.jpg",
    id: foundListing.propertyDocumentId,
    title: foundListing.title,
    subtitle: foundListing.category?.name || "",
    description: foundListing.description,
    gallery: Array.isArray(foundListing.images)
      ? foundListing.images.map((img) => typeof img === 'string' ? img : img.url).filter(Boolean)
      : [],
    mapUrl: foundListing.locationLink || undefined,
    price: foundListing.price ? `${foundListing.price} ALL` : undefined,
    category: foundListing.category ? { id: foundListing.category.id, name: foundListing.category.name } : undefined,
  };

  return <ListingDetail {...mappedListing} />;
}
