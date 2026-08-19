"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";

export default function Navbar() {
  const { t, locale, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 px-4 py-4 sm:px-6 lg:px-8">
      <nav className="glass-panel mx-auto max-w-7xl rounded-full px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-primary to-brand-accent flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-105 transition-transform">
            LC
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
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
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
