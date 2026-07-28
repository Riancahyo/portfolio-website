"use client";

import { HiMoon, HiSun } from "react-icons/hi";

import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle = ({ className = "" }: ThemeToggleProps) => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? t("themeToggle.switchToLight") : t("themeToggle.switchToDark")}
      title={isDark ? t("themeToggle.switchToLight") : t("themeToggle.switchToDark")}
      className={`relative inline-flex items-center h-8 w-14 shrink-0 rounded-full border transition-colors duration-300 border-zinc-300 bg-zinc-200 dark:border-white/10 dark:bg-white/5 ${className}`}
    >
      <span
        className={`absolute top-0.5 flex items-center justify-center h-7 w-7 rounded-full bg-white dark:bg-zinc-900 shadow-md transition-transform duration-300 ${
          isDark ? "translate-x-6" : "translate-x-0.5"
        }`}
      >
        {isDark ? (
          <HiMoon className="w-4 h-4 text-zinc-200" />
        ) : (
          <HiSun className="w-4 h-4 text-amber-500" />
        )}
      </span>
    </button>
  );
};