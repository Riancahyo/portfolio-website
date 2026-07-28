"use client";

import { useLanguage } from "@/context/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full h-full bg-transparent text-zinc-700 dark:text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="mb-[20px] text-[15px] text-center">
          &copy; Rian Cahyo {new Date().getFullYear()} Inc. {t("nav.rights")}.
        </div>
      </div>
    </div>
  );
};
