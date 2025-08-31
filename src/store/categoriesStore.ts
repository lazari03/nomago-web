import { create } from 'zustand';

interface Category {
  id: number;
  name: string;
}


export interface CategoriesState {
  categories: Category[];
  selectedCategory: number | null;
  setCategories: (categories: Category[]) => void;
  setSelectedCategory: (categoryId: number | null) => void;
  fetchCategories?: () => Promise<void>;
}

import { AxiosApiClient } from "../api/axiosClient";

export const useCategoriesStore = create<CategoriesState>((set) => ({
  categories: [],
  selectedCategory: null,
  setCategories: (categories: Category[]) => set((state) => ({ ...state, categories })),
  setSelectedCategory: (categoryId: number | null) => set((state) => ({ ...state, selectedCategory: categoryId })),
  fetchCategories: async () => {
    try {
      const api = new AxiosApiClient({ 
        getToken: async () => "3cc4fcdc4e832666d02e71cbb307a6f573e38b61b524945757171b5fca48e991cf133f562a550b5862c0aa516184d393b88f76886a2f31045a244af71c97a67841cc25866438be2bc452732b340f9fd1550595640f668efed4040075ac7a295f72d237b160ee88afc8942e93e19b277bb303593a2bf6ff9ccc8ef1fb51889325"
      });
      const res = await api.request<{ data: Category[] }>("/categories");
      if (!res || !Array.isArray(res.data)) {
        console.error("[Categories API Error] Unexpected response:", res);
        set((state) => ({ ...state, categories: [] }));
        return;
      }
      set((state) => ({ ...state, categories: res.data }));
    } catch (e) {
      console.error("[Categories API Error]", e);
      set((state) => ({ ...state, categories: [] }));
    }
  },
}));
