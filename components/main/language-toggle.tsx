"use client";

import { useLanguage } from "@/context/LanguageContext";

interface LanguageToggleProps {
  className?: string;
}

export const LanguageToggle = ({ className = "" }: LanguageToggleProps) => {
  const { language, toggleLanguage } = useLanguage();
  const isId = language === "id";

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label="Toggle language"
      title="EN / ID"
      className={`relative inline-flex items-center h-8 w-16 shrink-0 rounded-full border transition-colors duration-300 border-zinc-300 bg-zinc-200 dark:border-white/10 dark:bg-white/5 ${className}`}
    >
      <span
        className={`absolute top-0.5 flex items-center justify-center h-7 w-7 rounded-full bg-white dark:bg-zinc-900 shadow-md text-[10px] font-bold text-zinc-700 dark:text-zinc-200 transition-transform duration-300 ${
          isId ? "translate-x-8" : "translate-x-0.5"
        }`}
      >
        {isId ? "ID" : "EN"}
      </span>
    </button>
  );
};