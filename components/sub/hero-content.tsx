"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";
import { useLanguage } from "@/context/LanguageContext";

export const HeroContent = () => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-5 md:px-20 mt-20 md:mt-32 w-full z-[20] gap-6 min-h-[calc(100vh-80px)] lg:min-h-[calc(100vh-100px)]"
    >
      <div className="h-full w-full flex flex-col gap-3 md:gap-4 justify-center text-start max-w-[650px]">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[14px] border border-zinc-300 dark:border-zinc-600/50 opacity-[0.9] w-fit"
        >
          <h1 className="Welcome-text text-[12px] md:text-[13px]">
            {t("hero.badge")}
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-3 mt-2 md:mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white w-auto h-auto"
        >
          <span className="leading-tight">
            {t("hero.titleLine1")}
            <br />
            {t("hero.titleLine2")}
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm md:text-lg text-zinc-600 dark:text-gray-400 my-2 md:my-3 max-w-[600px] leading-relaxed"
        >
          {t("hero.description")}
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-col sm:flex-row gap-3 mt-2"
        >
          <a
            href="#projects"
            className="py-3 px-6 bg-zinc-900 hover:bg-zinc-700 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-black text-center cursor-pointer rounded-lg transition-all duration-200 font-semibold text-sm w-full sm:w-auto sm:min-w-[160px]"
          >
            {t("hero.viewProjects")}
          </a>
          <a
            href="#contact"
            className="py-3 px-6 text-center text-zinc-700 dark:text-zinc-300 cursor-pointer rounded-lg border border-zinc-400 dark:border-zinc-600 hover:border-zinc-600 dark:hover:border-zinc-400 hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200 font-medium text-sm w-full sm:w-auto sm:min-w-[160px]"
          >
            {t("hero.contactMe")}
          </a>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="hidden lg:flex w-full h-full justify-center items-center max-w-[600px]"
      >
        <Image
          src="/hero-bg.svg"
          alt="Full stack tech visualization"
          height={550}
          width={550}
          draggable={false}
          className="select-none w-full h-auto"
        />
      </motion.div>
    </motion.div>
  );
};
