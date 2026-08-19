"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import productsData from "@/data/products.json";

export default function Home() {
  const { t } = useLanguage();
  const featuredProducts = productsData.filter(p => p.featured);

  return (
    <div className="flex flex-col gap-24">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center pt-10">
        <div className="glass-panel rounded-3xl p-8 md:p-16 max-w-4xl w-full text-center flex flex-col items-center gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary opacity-20 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent opacity-20 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-foreground">
            {t("home.hero_title").split(" ").map((word, i) => (
              <span key={i} className={i === 4 ? "text-brand-primary" : ""}>
                {word}{" "}
              </span>
            ))}
          </h1>
          
          <p className="text-lg md:text-xl max-w-2xl opacity-80 leading-relaxed">
            {t("home.hero_subtitle")}
          </p>
          
          <Link 
            href="/productos" 
            className="mt-4 px-8 py-4 rounded-full bg-brand-primary text-white font-bold text-lg hover:bg-brand-accent hover:shadow-[0_0_20px_rgba(255,106,61,0.5)] transition-all duration-300 transform hover:-translate-y-1"
          >
            {t("home.hero_cta")}
          </Link>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="flex flex-col gap-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          {t("home.value_prop_title")}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((num) => (
            <div key={num} className="glass-card p-8 flex flex-col items-center text-center gap-4 group">
              <div className="w-16 h-16 rounded-2xl bg-white/50 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <div className="w-8 h-8 rounded-full bg-brand-primary opacity-80"></div>
              </div>
              <h3 className="text-xl font-bold">{t(`home.value_prop_${num}_title`)}</h3>
              <p className="opacity-70">{t(`home.value_prop_${num}_desc`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="flex flex-col gap-12 pb-12">
        <div className="flex justify-between items-end px-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            {t("home.featured_title")}
          </h2>
          <Link href="/productos" className="text-brand-primary font-bold hover:underline">
            {t("home.view_all")} &rarr;
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="glass-card overflow-hidden group flex flex-col">
              <div className="h-64 overflow-hidden relative bg-white/20">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col gap-2 flex-grow">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
                  {t(`products.${product.category}`)}
                </span>
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className="opacity-70 text-sm mt-2 flex-grow">
                  {product.description.split(" / ")[0] /* Basic split for mock dual-lang support */}
                </p>
                <Link href="/productos" className="mt-4 w-full py-2 text-center rounded-xl border-2 border-brand-primary text-brand-primary font-bold hover:bg-brand-primary hover:text-white transition-colors">
                  {t("products.details")}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
