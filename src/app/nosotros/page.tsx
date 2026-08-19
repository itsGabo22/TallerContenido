"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { BookOpen, Target, Eye } from "lucide-react";

export default function NosotrosPage() {
  const { t, locale } = useLanguage();

  return (
    <div className="flex flex-col gap-12 pt-8 max-w-4xl mx-auto">
      
      <div className="text-center flex flex-col gap-4 mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold">{t("about.title")}</h1>
        <p className="opacity-70 text-lg">{t("about.subtitle")}</p>
      </div>

      <div className="glass-panel p-8 md:p-12 rounded-3xl flex flex-col gap-6 relative overflow-hidden">
        <div className="flex items-center gap-4 mb-2 z-10">
          <div className="w-12 h-12 rounded-2xl bg-brand-primary/20 flex items-center justify-center">
            <BookOpen className="text-brand-primary" size={24} />
          </div>
          <h2 className="text-3xl font-bold">{t("about.history_title")}</h2>
        </div>
        <p className="opacity-80 leading-relaxed text-lg z-10">
          {t("about.history_text")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-card p-8 flex flex-col gap-4 overflow-hidden relative">
          <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay">
            <Image 
              src="https://gaseosaslacigarra.co/wp-content/uploads/2025/05/mision-de-una-empresa.jpg"
              alt={locale === "es" ? "Misión de la empresa" : "Company Mission"}
              fill
              className="object-cover"
            />
          </div>
          <div className="w-12 h-12 rounded-2xl bg-brand-primary/20 flex items-center justify-center z-10">
            <Target className="text-brand-primary" size={24} />
          </div>
          <h2 className="text-2xl font-bold z-10">{t("about.mission_title")}</h2>
          <p className="opacity-90 leading-relaxed z-10 font-medium">
            {t("about.mission_text")}
          </p>
        </div>

        <div className="glass-card p-8 flex flex-col gap-4 overflow-hidden relative">
          <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay">
            <Image 
              src="https://gaseosaslacigarra.co/wp-content/uploads/2025/05/iStock_000043250640_Small-1.jpg"
              alt={locale === "es" ? "Visión de la empresa" : "Company Vision"}
              fill
              className="object-cover"
            />
          </div>
          <div className="w-12 h-12 rounded-2xl bg-brand-primary/20 flex items-center justify-center z-10">
            <Eye className="text-brand-primary" size={24} />
          </div>
          <h2 className="text-2xl font-bold z-10">{t("about.vision_title")}</h2>
          <p className="opacity-90 leading-relaxed z-10 font-medium">
            {t("about.vision_text")}
          </p>
        </div>
      </div>

    </div>
  );
}
