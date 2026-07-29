"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/lib/motion";
import Image from "next/image";
import { HiEye } from "react-icons/hi";
import { ACHIEVEMENTS_DATA } from "@/constants";
import { useLanguage } from "@/context/LanguageContext";
import { ACHIEVEMENT_TRANSLATIONS } from "@/lib/translations";
import { CertificateLightbox } from "@/components/main/certificate-lightbox";

const Achievements = () => {
  const { t, language } = useLanguage();
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const displayLimit = isMobile ? 4 : 5;
  const displayedAchievements = showAll ? ACHIEVEMENTS_DATA : ACHIEVEMENTS_DATA.slice(0, displayLimit);

  const lightboxItems = ACHIEVEMENTS_DATA.map((achievement) => ({
    src: achievement.image,
    title: achievement.title,
    subtitle: achievement.year,
  }));

  return (
    <section
      id="achievements"
      className="flex flex-col items-center justify-center py-16 md:py-20 relative overflow-hidden"
    >
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-zinc-900 dark:bg-white py-8 md:py-10"
      >
        {t("achievements.heading")}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-zinc-600 dark:text-gray-400 text-center mb-10 px-6 max-w-2xl"
      >
        {t("achievements.subtitle")}
      </motion.p>

      <div className="
        grid 
        grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 
        gap-3 sm:gap-6 
        px-3 sm:px-6 md:px-10 
        max-w-[1400px] w-full
      ">
        {displayedAchievements.map((achievement, index) => {
          const description =
            ACHIEVEMENT_TRANSLATIONS[achievement.id]?.[language] ?? achievement.description;

          return (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="
              group relative overflow-hidden rounded-lg 
              border border-zinc-300 dark:border-zinc-700/60 bg-black/3 dark:bg-white/3
              hover:border-zinc-500 
              transition-all duration-300
              flex flex-col justify-between
              h-[320px] sm:h-[350px] md:h-[380px] xl:h-[400px]
            "
          >
            <button
              type="button"
              onClick={() => setLightboxIndex(index)}
              className="relative w-full h-[120px] sm:h-[170px] md:h-[180px] overflow-hidden cursor-pointer"
            >
              <Image
                src={achievement.image}
                alt={achievement.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />

              <span
                className="absolute top-2 right-2 text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-white/70 dark:bg-black/60 border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 font-medium"
              >
                {achievement.year}
              </span>
            </button>

            <div className="flex flex-col flex-grow p-3 sm:p-4">
              <h3 className="text-sm sm:text-lg font-bold text-zinc-900 dark:text-white mb-1 sm:mb-2 line-clamp-2">
                {achievement.title}
              </h3>

              <p className="text-[10px] sm:text-sm text-zinc-600 dark:text-gray-400 flex-grow line-clamp-3 sm:line-clamp-none">
                {description}
              </p>

              <div className="mt-3">
                <button
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  className="
                    w-full flex items-center justify-center gap-1 px-3 py-1.5 
                    bg-zinc-900 hover:bg-zinc-700 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-black rounded-md 
                    text-[10px] sm:text-sm transition-all duration-200 font-semibold
                  "
                >
                  <HiEye className="w-3 h-3 sm:w-4 sm:h-4" />
                  {t("achievements.viewDetails")}
                </button>
              </div>
            </div>
          </motion.div>
          );
        })}
      </div>

      {ACHIEVEMENTS_DATA.length > displayLimit && (
        <motion.div
          variants={slideInFromLeft(1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 bg-zinc-900 hover:bg-zinc-700 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-black text-center cursor-pointer rounded-lg transition-all duration-200 font-semibold text-sm"
          >
            {showAll ? t("achievements.showLess") : `${t("achievements.viewAll")} (${ACHIEVEMENTS_DATA.length})`}
          </button>
        </motion.div>
      )}

      <CertificateLightbox
        items={lightboxItems}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </section>
  );
};

export default Achievements;