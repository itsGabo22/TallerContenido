"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t, locale } = useLanguage();
  
  return (
    <footer className="w-full mt-12 px-4 pb-4 sm:px-6 lg:px-8">
      <div className="glass-panel mx-auto max-w-7xl rounded-3xl px-8 py-12 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        
        <div className="flex flex-col items-center md:items-start max-w-xs text-center md:text-left">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-md overflow-hidden bg-white">
              <Image 
                src="/images/logo.webp" 
                alt={locale === "es" ? "Gaseosas La Cigarra" : "Gaseosas La Cigarra logo"} 
                width={48} 
                height={48}
                className="object-contain"
              />
            </div>
            <span className="font-bold text-lg text-brand-primary tracking-tight">La Cigarra</span>
          </div>
          <p className="text-sm opacity-80 mb-4">{t("home.hero_subtitle")}</p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 text-center md:text-left">
          <div>
            <h4 className="font-bold mb-4 opacity-90">Links</h4>
            <div className="flex flex-col gap-2 text-sm opacity-80">
              <Link href="/" className="hover:text-brand-primary transition-colors">{t("nav.home")}</Link>
              <Link href="/productos" className="hover:text-brand-primary transition-colors">{t("nav.products")}</Link>
              <Link href="/nosotros" className="hover:text-brand-primary transition-colors">{t("nav.about")}</Link>
              <Link href="/contacto" className="hover:text-brand-primary transition-colors">{t("nav.contact")}</Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 opacity-90">{t("nav.contact")}</h4>
            <div className="flex flex-col gap-2 text-sm opacity-80">
              <span>{t("contact.phone_value")}</span>
              <span>{t("contact.email_value")}</span>
              <span>{t("contact.address_value")}</span>
            </div>
          </div>
        </div>

      </div>
      <div className="text-center text-xs opacity-60 mt-4">
        &copy; {new Date().getFullYear()} Gaseosas La Cigarra. {t("footer.rights")}
      </div>
    </footer>
  );
}
