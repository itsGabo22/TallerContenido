"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import productsData from "@/data/products.json";

export default function ProductosPage() {
  const { t, locale } = useLanguage();
  const [filter, setFilter] = useState("all");

  const categories = ["all", "sodas", "water"];

  const filteredProducts = filter === "all" 
    ? productsData 
    : productsData.filter(p => p.category === filter);

  // Helper to extract the correct language description from the mock dual-string
  const getDescription = (desc: string) => {
    const parts = desc.split(" / ");
    if (parts.length === 2) {
      return locale === "es" ? parts[0] : parts[1];
    }
    return desc;
  };

  return (
    <div className="flex flex-col gap-12 pt-8">
      
      <div className="text-center max-w-2xl mx-auto flex flex-col gap-4">
        <h1 className="text-4xl md:text-5xl font-extrabold">{t("products.title")}</h1>
        <p className="opacity-70 text-lg">{t("products.subtitle")}</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full font-bold transition-all ${
              filter === cat 
                ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/30" 
                : "glass-panel hover:bg-white/50"
            }`}
          >
            {t(`products.${cat}`)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="glass-card overflow-hidden group flex flex-col">
            <div className="h-56 overflow-hidden bg-white/20">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-5 flex flex-col gap-2 flex-grow">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
                {t(`products.${product.category}`)}
              </span>
              <h3 className="text-lg font-bold leading-tight">{product.name}</h3>
              <p className="opacity-70 text-sm mt-1 flex-grow line-clamp-3">
                {getDescription(product.description)}
              </p>
              <button className="mt-4 w-full py-2 rounded-xl bg-white/50 hover:bg-brand-primary hover:text-white transition-colors font-bold text-sm border border-white/40">
                {t("products.details")}
              </button>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}
