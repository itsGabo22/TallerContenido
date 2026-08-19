"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactoPage() {
  const { t, locale } = useLanguage();

  return (
    <div className="flex flex-col gap-12 pt-8 max-w-6xl mx-auto w-full">
      
      <div className="text-center flex flex-col gap-4 relative">
        <h1 className="text-4xl md:text-5xl font-extrabold">{t("contact.title")}</h1>
        <p className="opacity-70 text-lg">{t("contact.subtitle")}</p>
      </div>
      
      {/* Storefront Image Banner */}
      <div className="w-full h-64 rounded-3xl overflow-hidden relative glass-panel shadow-lg">
        <Image 
          src="https://gaseosaslacigarra.co/wp-content/uploads/2025/05/lacigarralocal-FACHADA-ENTRADDA.jpg"
          alt={locale === "es" ? "Fachada de Gaseosas La Cigarra" : "Gaseosas La Cigarra storefront"}
          fill
          className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          <div className="glass-card p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-primary/20 flex-shrink-0 flex items-center justify-center">
              <Phone className="text-brand-primary" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg">{t("contact.phone")}</h3>
              <p className="opacity-80">{t("contact.phone_value")}</p>
            </div>
          </div>

          <div className="glass-card p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-primary/20 flex-shrink-0 flex items-center justify-center">
              <Mail className="text-brand-primary" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg">{t("contact.email")}</h3>
              <p className="opacity-80">{t("contact.email_value")}</p>
            </div>
          </div>

          <div className="glass-card p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-primary/20 flex-shrink-0 flex items-center justify-center">
              <MapPin className="text-brand-primary" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg">{t("contact.address")}</h3>
              <p className="opacity-80">{t("contact.address_value")}</p>
            </div>
          </div>

          <div className="glass-card p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-primary/20 flex-shrink-0 flex items-center justify-center">
              <Clock className="text-brand-primary" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg">{t("contact.schedule")}</h3>
              <p className="opacity-80">{t("contact.schedule_value")}</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass-panel p-8 md:p-10 rounded-3xl">
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm opacity-80 pl-1">{t("contact.form_name")}</label>
              <input 
                type="text" 
                className="w-full bg-white/50 border border-white/40 rounded-xl px-4 py-3 outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all"
                placeholder="John Doe"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm opacity-80 pl-1">{t("contact.form_email")}</label>
              <input 
                type="email" 
                className="w-full bg-white/50 border border-white/40 rounded-xl px-4 py-3 outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all"
                placeholder="john@example.com"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm opacity-80 pl-1">{t("contact.form_message")}</label>
              <textarea 
                rows={5}
                className="w-full bg-white/50 border border-white/40 rounded-xl px-4 py-3 outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all resize-none"
                placeholder="..."
              ></textarea>
            </div>

            <button 
              type="submit"
              className="mt-2 w-full py-4 rounded-xl bg-brand-primary text-white font-bold text-lg hover:bg-brand-accent hover:shadow-lg transition-all"
            >
              {t("contact.form_submit")}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
