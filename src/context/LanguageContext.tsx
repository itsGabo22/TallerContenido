"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import es from "../data/es.json";
import en from "../data/en.json";

type Locale = "es" | "en";
type Dictionary = typeof es;

interface LanguageContextType {
  locale: Locale;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("es");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check if locale is stored in localStorage
    const stored = localStorage.getItem("locale") as Locale;
    if (stored === "es" || stored === "en") {
      setLocale(stored);
    }
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    const nextLocale = locale === "es" ? "en" : "es";
    setLocale(nextLocale);
    localStorage.setItem("locale", nextLocale);
    document.documentElement.lang = nextLocale;
  };

  const getNestedValue = (obj: any, path: string) => {
    return path.split(".").reduce((acc, part) => acc && acc[part], obj);
  };

  const t = (key: string): string => {
    const dict = locale === "es" ? es : en;
    const val = getNestedValue(dict, key);
    if (!val) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return val;
  };

  return (
    <LanguageContext.Provider value={{ locale, toggleLanguage, t }}>
      <div className={!mounted ? "invisible" : ""}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
