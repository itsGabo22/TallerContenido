"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function NosotrosPage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col gap-12 pt-8 max-w-4xl mx-auto">
      
      <div className="text-center flex flex-col gap-4 mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold">{t("about.title")}</h1>
        <p className="opacity-70 text-lg">{t("about.subtitle")}</p>
      </div>

      <div className="glass-panel p-8 md:p-12 rounded-3xl flex flex-col gap-6">
        <div className="flex items-center gap-4 mb-2">
          <div className="w-12 h-12 rounded-2xl bg-brand-primary/20 flex items-center justify-center text-brand-primary text-2xl">
            📜
          </div>
          <h2 className="text-3xl font-bold">{t("about.history_title")}</h2>
        </div>
        <p className="opacity-80 leading-relaxed text-lg">
          {t("about.history_text")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-card p-8 flex flex-col gap-4">
          <div className="w-12 h-12 rounded-2xl bg-brand-accent/30 flex items-center justify-center text-brand-primary text-2xl">
            🎯
          </div>
          <h2 className="text-2xl font-bold">{t("about.mission_title")}</h2>
          <p className="opacity-80 leading-relaxed">
            {t("about.mission_text")}
          </p>
        </div>

        <div className="glass-card p-8 flex flex-col gap-4">
          <div className="w-12 h-12 rounded-2xl bg-brand-accent/30 flex items-center justify-center text-brand-primary text-2xl">
            👁️
          </div>
          <h2 className="text-2xl font-bold">{t("about.vision_title")}</h2>
          <p className="opacity-80 leading-relaxed">
            {t("about.vision_text")}
          </p>
        </div>
      </div>

    </div>
  );
}
