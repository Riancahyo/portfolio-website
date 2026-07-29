"use client";

import React from "react";
import { motion } from "framer-motion";
import { HiBriefcase, HiUserGroup, HiHeart, HiAcademicCap } from "react-icons/hi";
import { slideInFromTop } from "@/lib/motion";
import { TIMELINE_DATA } from "@/constants";
import { useLanguage } from "@/context/LanguageContext";
import { TIMELINE_TRANSLATIONS } from "@/lib/translations";

const TYPE_CONFIG: Record<
  string,
  { icon: React.ElementType; badgeEn: string; badgeId: string }
> = {
  internship: { icon: HiBriefcase, badgeEn: "Internship", badgeId: "Magang" },
  organization: { icon: HiUserGroup, badgeEn: "Organization", badgeId: "Organisasi" },
  community: { icon: HiUserGroup, badgeEn: "Community", badgeId: "Komunitas" },
  volunteer: { icon: HiHeart, badgeEn: "Volunteer", badgeId: "Volunteer" },
  training: { icon: HiAcademicCap, badgeEn: "Training", badgeId: "Pelatihan" },
};

const formatPeriod = (
  startDate: string,
  endDate: string | null,
  language: "en" | "id",
  presentLabel: string
) => {
  const formatter = new Intl.DateTimeFormat(language === "id" ? "id-ID" : "en-US", {
    month: "short",
    year: "numeric",
  });
  const start = formatter.format(new Date(`${startDate}-01`));
  const end = endDate ? formatter.format(new Date(`${endDate}-01`)) : presentLabel;
  return `${start} – ${end}`;
};

const Timeline = () => {
  const { t, language } = useLanguage();

  return (
    <section
      id="timeline"
      className="flex flex-col items-center justify-center py-16 md:py-20 relative overflow-hidden"
    >
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-zinc-900 dark:bg-white py-8 md:py-10"
      >
        {t("timeline.heading")}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-zinc-600 dark:text-gray-400 text-center mb-12 px-6 max-w-2xl"
      >
        {t("timeline.subtitle")}
      </motion.p>

      <div className="relative w-full max-w-3xl px-6 md:px-10">
        {/* Vertical line */}
        <div className="absolute left-[52px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-zinc-300 dark:bg-zinc-700" />

        <div className="flex flex-col gap-8 md:gap-10">
          {TIMELINE_DATA.map((entry, index) => {
            const config = TYPE_CONFIG[entry.type] ?? TYPE_CONFIG.internship;
            const Icon = config.icon;
            const badge = language === "id" ? config.badgeId : config.badgeEn;
            const description = TIMELINE_TRANSLATIONS[entry.id]?.[language];
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 4) * 0.1 }}
                className={`relative flex items-start gap-4 md:gap-0 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Icon marker */}
                <div className="relative z-10 flex-shrink-0 w-14 h-14 md:absolute md:left-1/2 md:-translate-x-1/2 flex items-center justify-center rounded-full bg-white dark:bg-[#030014] border-2 border-zinc-300 dark:border-zinc-700">
                  <Icon className="w-6 h-6 text-zinc-700 dark:text-zinc-300" />
                </div>

                {/* Card */}
                <div
                  className={`flex-1 md:w-[calc(50%-40px)] ${
                    isEven ? "md:pr-0" : "md:pl-0"
                  }`}
                >
                  <div className="border border-zinc-300 dark:border-zinc-700/60 bg-black/3 dark:bg-white/3 backdrop-blur-md rounded-lg p-4 md:p-5 hover:border-zinc-500 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <span className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-black/10 dark:bg-white/10 text-zinc-700 dark:text-zinc-300 font-medium">
                        {badge}
                      </span>
                      <span className="text-[10px] sm:text-xs text-zinc-500 dark:text-gray-500">
                        {formatPeriod(entry.startDate, entry.endDate, language, t("timeline.present"))}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white">
                      {entry.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-gray-400 mb-2">
                      {entry.org}
                    </p>
                    {description && (
                      <p className="text-xs sm:text-sm text-zinc-600 dark:text-gray-400 leading-relaxed">
                        {description}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;