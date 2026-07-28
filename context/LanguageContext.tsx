"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";
import { flushSync } from "react-dom";

import { translations, type Language } from "@/lib/translations";

interface LanguageContextValue {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: (path: string) => any;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "language";

type DocumentWithViewTransition = Document & {
  startViewTransition?: (callback: () => void) => void;
};

function getByPath(obj: any, path: string): any {
  return path.split(".").reduce((acc, key) => (acc == null ? acc : acc[key]), obj);
}

export const LanguageProvider = ({ children }: PropsWithChildren) => {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Language | null;
    if (stored === "en" || stored === "id") {
      setLanguageState(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("lang", language);
  }, [language]);

  const applyLanguage = (lang: Language) => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    setLanguageState(lang);
  };

  const setLanguage = (lang: Language) => {
    const doc = document as DocumentWithViewTransition;

    if (doc.startViewTransition) {
      doc.startViewTransition(() => {
        flushSync(() => applyLanguage(lang));
      });
    } else {
      applyLanguage(lang);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "id" : "en");
  };

  const t = (path: string) => {
    const value = getByPath(translations[language], path);
    if (value === undefined) {
      return getByPath(translations.en, path) ?? path;
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
};