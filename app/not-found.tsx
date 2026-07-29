"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <main className="min-h-[calc(100vh-75px)] w-full flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-4"
      >
        <span className="text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-500">
          404
        </span>

        <h1 className="text-2xl md:text-3xl font-semibold text-zinc-900 dark:text-white">
          {t("notFound.title")}
        </h1>

        <p className="text-zinc-600 dark:text-gray-400 max-w-md">
          {t("notFound.description")}
        </p>

        <Link
          href="/"
          className="mt-4 px-6 py-3 bg-zinc-900 hover:bg-zinc-700 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-black rounded-lg font-semibold text-sm transition-all duration-200"
        >
          {t("notFound.backHome")}
        </Link>
      </motion.div>
    </main>
  );
}