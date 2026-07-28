"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/lib/motion";
import Image from "next/image";
import Link from "next/link";
import { HiExternalLink } from "react-icons/hi";
import { RxGithubLogo } from "react-icons/rx";
import { PROJECTS } from "@/constants";
import { useLanguage } from "@/context/LanguageContext";
import { PROJECT_TRANSLATIONS } from "@/lib/translations";

export const Projects = () => {
  const { t, language } = useLanguage();
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const displayLimit = isMobile ? 4 : 4;
  const displayedProjects = showAll ? PROJECTS : PROJECTS.slice(0, displayLimit);

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-16 md:py-20 pb-24 relative overflow-hidden"
    >
      <motion.h1
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-zinc-900 dark:bg-white py-8 md:py-10"
      >
        {t("projectsSection.heading")}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-zinc-600 dark:text-gray-400 text-center mb-10 px-6 max-w-2xl"
      >
        {t("projectsSection.subtitle")}
      </motion.p>

      <div className="
        grid
        grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
        gap-3 sm:gap-6
        px-3 sm:px-6 md:px-10
        max-w-[1400px] w-full
      ">
        {displayedProjects.map((project, index) => {
          const description =
            PROJECT_TRANSLATIONS[project.id]?.[language] ?? project.description;

          return (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="
              group relative overflow-hidden rounded-lg
              border border-zinc-300 dark:border-zinc-700/60 bg-black/3 dark:bg-white/3
              hover:border-zinc-500
              transition-all duration-300
              flex flex-col
              h-[290px] sm:h-[340px] md:h-[400px]
            "
          >
            {/* Image */}
            <div className="relative w-full h-[120px] sm:h-[160px] md:h-[180px] overflow-hidden flex-shrink-0">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-[#030014]/80 via-transparent to-transparent" />

              {/* Tech stack icons on image */}
              <div className="absolute bottom-2 left-2 flex gap-1 flex-wrap">
                {project.techStack?.slice(0, 4).map((tech, i) => (
                  <div
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 relative"
                    title={tech.name}
                  >
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
                {project.techStack && project.techStack.length > 4 && (
                  <span className="text-[9px] sm:text-[10px] text-zinc-600 dark:text-zinc-400 self-center">
                    +{project.techStack.length - 4}
                  </span>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow p-3 sm:p-4">
              <h3 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white mb-1 line-clamp-1">
                {project.title}
              </h3>

              <p className="text-[10px] sm:text-xs text-zinc-600 dark:text-gray-400 flex-grow line-clamp-2 leading-relaxed">
                {description}
              </p>

              {/* Buttons */}
              <div className="mt-3 flex gap-2">
                {project.link ? (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="
                      flex items-center justify-center gap-1 flex-1 px-2 py-1.5
                      bg-zinc-900 hover:bg-zinc-700 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-black rounded-md
                      text-[10px] sm:text-xs transition-all duration-200 font-semibold
                    "
                  >
                    <HiExternalLink className="w-3 h-3 flex-shrink-0" />
                    <span>{t("projectsSection.demo")}</span>
                  </Link>
                ) : (
                  <div className="flex-1" />
                )}
                {project.github ? (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="
                      flex items-center justify-center gap-1 flex-1 px-2 py-1.5
                      border border-zinc-400 dark:border-zinc-600 hover:border-zinc-600 dark:hover:border-zinc-400 hover:bg-black/5 dark:hover:bg-white/5 text-zinc-700 dark:text-zinc-300 rounded-md
                      text-[10px] sm:text-xs transition-all duration-200 font-semibold
                    "
                  >
                    <RxGithubLogo className="w-3 h-3 flex-shrink-0" />
                    <span>{t("projectsSection.code")}</span>
                  </Link>
                ) : (
                  <div className="flex-1" />
                )}
              </div>
            </div>
          </motion.div>
          );
        })}
      </div>

      {PROJECTS.length > displayLimit && (
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
            {showAll ? t("projectsSection.showLess") : `${t("projectsSection.viewAll")} (${PROJECTS.length})`}
          </button>
        </motion.div>
      )}
    </section>
  );
};