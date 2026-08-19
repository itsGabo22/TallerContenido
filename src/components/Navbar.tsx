"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function Navbar() {
  const { t, locale, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 px-4 py-4 sm:px-6 lg:px-8">
      <nav className="glass-panel mx-auto max-w-7xl rounded-full px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform overflow-hidden bg-white">
            <Image 
              src="/images/logo.webp" 
              alt={locale === "es" ? "Gaseosas La Cigarra" : "Gaseosas La Cigarra logo"} 
              width={40} 
              height={40}
              className="object-contain"
            />
          </div>
          <span className="font-bold text-lg hidden sm:block tracking-tight text-brand-primary">La Cigarra</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link href="/" className="hover:text-brand-primary transition-colors">{t("nav.home")}</Link>
          <Link href="/productos" className="hover:text-brand-primary transition-colors">{t("nav.products")}</Link>
          <Link href="/nosotros" className="hover:text-brand-primary transition-colors">{t("nav.about")}</Link>
          <Link href="/contacto" className="hover:text-brand-primary transition-colors">{t("nav.contact")}</Link>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="px-3 py-1 rounded-full bg-white/50 hover:bg-white/80 border border-white/40 shadow-sm transition-all text-sm font-bold w-12"
          >
            {locale.toUpperCase()}
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-full hover:bg-white/20 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 glass-panel rounded-2xl p-4 flex flex-col gap-4 max-w-7xl mx-auto">
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-brand-primary px-4 py-2 rounded-xl hover:bg-white/40">{t("nav.home")}</Link>
          <Link href="/productos" onClick={() => setIsOpen(false)} className="hover:text-brand-primary px-4 py-2 rounded-xl hover:bg-white/40">{t("nav.products")}</Link>
          <Link href="/nosotros" onClick={() => setIsOpen(false)} className="hover:text-brand-primary px-4 py-2 rounded-xl hover:bg-white/40">{t("nav.about")}</Link>
          <Link href="/contacto" onClick={() => setIsOpen(false)} className="hover:text-brand-primary px-4 py-2 rounded-xl hover:bg-white/40">{t("nav.contact")}</Link>
        </div>
      )}
    </header>
  );
}
