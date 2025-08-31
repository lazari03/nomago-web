"use client";
import { useEffect } from "react";
import { useListingsApiStore } from "../store/listingsApiStore";

export default function ListingsProvider({ children }: { children: React.ReactNode }) {
  const { fetchListings } = useListingsApiStore();
  useEffect(() => {
    fetchListings?.();
  }, [fetchListings]);
  return children;
}
