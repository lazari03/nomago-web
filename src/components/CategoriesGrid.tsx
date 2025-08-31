"use client";
import React from "react";
import { useCategoriesStore } from "../store/categoriesStore";

const CategoriesGrid = () => {
  const { categories } = useCategoriesStore();
  if (!categories.length) return null;

  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4 text-center text-darkGray">Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map(cat => (
          <div key={cat.id} className="bg-white rounded-2xl shadow border border-lightGray p-6 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-purple flex items-center justify-center text-white font-bold text-xl mb-2">
              {cat.name[0]}
            </div>
            <span className="text-darkGray font-semibold text-lg text-center">{cat.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesGrid;
