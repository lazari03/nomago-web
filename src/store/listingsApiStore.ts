import { create } from 'zustand';

export interface ListingCategory {
  id: number;
  name: string;
}

export interface ListingImage {
  id: number;
  url: string;
}

export interface Listing {
  id: number;
  propertyDocumentId: string;
  title: string;
  description: string;
  price: number;
  isFeatured: boolean;
  locationLink: string | null;
  category: ListingCategory;
  featuredImage?: ListingImage | null;
  images?: ListingImage[];
}


interface ListingsApiState {
  listings: Listing[];
  setListings: (listings: Listing[]) => void;
  fetchListings?: () => Promise<void>;
}


import { AxiosApiClient } from "../api/axiosClient";

// Helper to extract best image URL from Strapi formats
type StrapiImageFormats = {
  small?: { url: string };
  medium?: { url: string };
  large?: { url: string };
  thumbnail?: { url: string };
};
function getBestUrl(formats: StrapiImageFormats | undefined, fallback?: string) {
  return (
    formats?.small?.url ||
    formats?.medium?.url ||
    formats?.large?.url ||
    formats?.thumbnail?.url ||
    fallback
  );
}

// Map Strapi listing to flat Listing structure for UI
interface StrapiCategory {
  id: number;
  name?: string;
  data?: { id: number; attributes: { name: string } };
}
interface StrapiImage {
  id: number;
  url?: string;
  formats?: StrapiImageFormats;
  attributes?: { url?: string; formats?: StrapiImageFormats };
}
interface StrapiFeaturedImage {
  id?: number;
  url?: string;
  formats?: StrapiImageFormats;
  data?: { attributes: { id?: number; url?: string; formats?: StrapiImageFormats } };
}
interface StrapiListing {
  id: number;
  documentId: string;
  title?: string;
  propertyName?: string;
  description: string;
  price?: number;
  isFeatured?: boolean;
  locationLink?: string;
  category?: StrapiCategory;
  featuredImage?: StrapiFeaturedImage;
  images?: StrapiImage[] | { data: StrapiImage[] };
}
function mapListing(listing: StrapiListing): Listing {
  // Images array (Strapi v3 or v4)
  let images: ListingImage[] = [];
  if (Array.isArray(listing.images)) {
    images = listing.images
      .map((img) => ({
        id: img.id,
        url: getBestUrl(img.formats, img.url) || '',
      }))
      .filter((img: ListingImage) => !!img.url);
  } else if (listing.images && typeof listing.images === 'object' && Array.isArray((listing.images as { data?: unknown }).data)) {
    images = ((listing.images as { data: StrapiImage[] }).data)
      .map((img) => {
        const attr = img.attributes || {};
        return {
          id: img.id,
          url: getBestUrl(attr.formats, attr.url) || '',
        };
      })
      .filter((img: ListingImage) => !!img.url);
  }

  // Featured image (Strapi field: featuredImage)
  let featuredImage: ListingImage | undefined = undefined;
  let featured: unknown = listing.featuredImage;
  if (
    featured &&
    typeof featured === 'object' &&
    'data' in featured &&
    (featured as { data?: { attributes?: unknown } }).data?.attributes
  ) {
    featured = (featured as { data: { attributes: unknown } }).data.attributes;
  }
  if (featured && typeof featured === 'object') {
    const f = featured as { id?: number; formats?: StrapiImageFormats; url?: string };
    featuredImage = {
      id: f.id || 0,
      url: getBestUrl(f.formats, f.url) || '',
    };
  }

  // Category
  let category: ListingCategory = { id: 0, name: '' };
  if (listing.category?.id && listing.category?.name) {
    category = { id: listing.category.id, name: listing.category.name };
  } else if (listing.category?.data?.id && listing.category?.data?.attributes?.name) {
    category = {
      id: listing.category.data.id,
      name: listing.category.data.attributes.name,
    };
  }

  return {
    id: listing.id,
    propertyDocumentId: listing.documentId,
    title: listing.propertyName || listing.title || '',
    description: listing.description,
    price: listing.price ?? 0,
    isFeatured: listing.isFeatured === true,
    locationLink: listing.locationLink ?? null,
    category,
    featuredImage,
    images,
  };
}

export const useListingsApiStore = create<ListingsApiState>((set) => ({
  listings: [],
  setListings: (listings) => set({ listings }),
  fetchListings: async () => {
    try {
      const api = new AxiosApiClient({ 
        getToken: async () => "3cc4fcdc4e832666d02e71cbb307a6f573e38b61b524945757171b5fca48e991cf133f562a550b5862c0aa516184d393b88f76886a2f31045a244af71c97a67841cc25866438be2bc452732b340f9fd1550595640f668efed4040075ac7a295f72d237b160ee88afc8942e93e19b277bb303593a2bf6ff9ccc8ef1fb51889325"
      });
      // Populate category, featuredImage, and images fields using Strapi v4+ syntax
  const res = await api.request<{ data: StrapiListing[] }>(
        "/listings?populate[0]=category&populate[1]=images&populate[2]=featuredImage"
      );
      set({ listings: res.data.map(mapListing) });
    } catch {
      set({ listings: [] });
    }
  },
}));
