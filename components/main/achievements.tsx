"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/lib/motion";
import Image from "next/image";
import { HiExternalLink } from "react-icons/hi";
import { ACHIEVEMENTS_DATA } from "@/constants";

const Achievements = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
        className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-white py-8 md:py-10"
      >
        My Achievements
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-gray-400 text-center mb-10 px-6 max-w-2xl"
      >
        Milestones and accomplishments throughout my journey
      </motion.p>

      <div className="
        grid 
        grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 
        gap-3 sm:gap-6 
        px-3 sm:px-6 md:px-10 
        max-w-[1400px] w-full
      ">
        {displayedAchievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="
              group relative overflow-hidden rounded-lg 
              border border-[#2A0E61] bg-[#03001417] 
              hover:border-purple-500/50 
              transition-all duration-300
              flex flex-col justify-between
              h-[320px] sm:h-[350px] md:h-[380px] xl:h-[400px]
            "
          >
            <div className="relative w-full h-[120px] sm:h-[170px] md:h-[180px] overflow-hidden">
              <Image
                src={achievement.image}
                alt={achievement.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />

              <span
                className={`absolute top-2 right-2 text-[10px] sm:text-xs px-2 py-1 rounded-full bg-gradient-to-r ${achievement.color} text-white`}
              >
                {achievement.year}
              </span>
            </div>

            <div className="flex flex-col flex-grow p-3 sm:p-4">
              <h3 className="text-sm sm:text-lg font-bold text-white mb-1 sm:mb-2 line-clamp-2">
                {achievement.title}
              </h3>

              <p className="text-[10px] sm:text-sm text-gray-400 flex-grow line-clamp-3 sm:line-clamp-none">
                {achievement.description}
              </p>

              <div className="mt-3">
                <a
                  href={achievement.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="
                    flex items-center justify-center gap-1 px-3 py-1.5 
                    bg-purple-600 text-white rounded-md 
                    text-[10px] sm:text-sm hover:bg-purple-700
                  "
                >
                  <HiExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                  View Details
                </a>
              </div>
            </div>
          </motion.div>
        ))}
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
            className="px-8 py-3 button-primary text-center text-white cursor-pointer rounded-lg hover:scale-105 transition-transform"
          >
            {showAll ? "Show Less" : `View All (${ACHIEVEMENTS_DATA.length})`}
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default Achievements;