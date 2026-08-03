"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  const { t } = useLanguage();

  return (
    <section
      id="about-me"
      className="flex flex-col items-center justify-center relative overflow-hidden py-16 md:py-20"
    >
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-zinc-900 dark:bg-white py-6 md:py-8"
      >
        {t("about.heading")}
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-10 px-6 md:px-10 max-w-6xl w-full">

        <motion.div
          variants={slideInFromLeft(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[400px] md:h-[400px] md:-mt-12">
            <div className="absolute inset-0 bg-black/10 dark:bg-white/10 rounded-full blur-3xl opacity-20 animate-pulse" />
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src="/logo.png" 
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={slideInFromRight(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex flex-col gap-4"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white">
            {t("about.greeting")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-700 to-zinc-500 dark:from-zinc-100 dark:to-zinc-400">
              Rian Cahyo
            </span>
          </h2>

          <p className="text-base md:text-lg text-zinc-700 dark:text-gray-300 leading-relaxed">
            {t("about.paragraph1")}
          </p>

          <p className="text-base md:text-lg text-zinc-700 dark:text-gray-300 leading-relaxed">
            {t("about.paragraph2")}
          </p>

          <div className="grid grid-cols-2 gap-3 mt-3">
            <Card className="border-zinc-300 dark:border-zinc-700/60 bg-black/5 dark:bg-white/5 backdrop-blur-md shadow-none">
              <CardContent className="p-3 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white">
                  1+
                </h3>
                <p className="text-zinc-600 dark:text-gray-400 text-xs md:text-sm mt-1">{t("about.yearsExp")}</p>
              </CardContent>
            </Card>
            <Card className="border-zinc-300 dark:border-zinc-700/60 bg-black/5 dark:bg-white/5 backdrop-blur-md shadow-none">
              <CardContent className="p-3 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white">
                  10+
                </h3>
                <p className="text-zinc-600 dark:text-gray-400 text-xs md:text-sm mt-1">{t("about.projects")}</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-row gap-3 mt-3">
            <Button asChild className="flex-1 sm:flex-none">
              <a href="#contact">{t("about.contactMe")}</a>
            </Button>
            <Button asChild variant="outline" className="flex-1 sm:flex-none border-zinc-400 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300">
              <a href="/resume.pdf" target="_blank">{t("about.downloadCv")}</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;