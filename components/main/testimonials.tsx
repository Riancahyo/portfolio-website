"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineChatAlt2, HiPlus } from "react-icons/hi";
import { slideInFromTop, slideInFromLeft } from "@/lib/motion";
import { TESTIMONIALS_DATA } from "@/constants";
import { useLanguage } from "@/context/LanguageContext";
import { TESTIMONIAL_TRANSLATIONS } from "@/lib/translations";
import { TestimonialFormModal } from "@/components/main/testimonial-form-modal";

const Testimonials = () => {
  const { t, language } = useLanguage();
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section
      id="testimonials"
      className="flex flex-col items-center justify-center py-16 md:py-20 relative overflow-hidden"
    >
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-zinc-900 dark:bg-white py-8 md:py-10"
      >
        {t("testimonials.heading")}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-zinc-600 dark:text-gray-400 text-center mb-10 px-6 max-w-2xl"
      >
        {t("testimonials.subtitle")}
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 px-6 md:px-10 max-w-6xl w-full">
        {TESTIMONIALS_DATA.map((testimonial, index) => {
          const quote = TESTIMONIAL_TRANSLATIONS[testimonial.id]?.[language];

          return (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col border border-zinc-300 dark:border-zinc-700/60 bg-black/3 dark:bg-white/3 backdrop-blur-md rounded-lg p-5 sm:p-6 hover:border-zinc-500 transition-all duration-300"
            >
              <HiOutlineChatAlt2 className="w-7 h-7 text-zinc-400 dark:text-zinc-600 mb-3" />

              <p className="text-sm sm:text-base text-zinc-700 dark:text-gray-300 leading-relaxed flex-grow">
                &ldquo;{quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 mt-5 pt-4 border-t border-zinc-200 dark:border-zinc-700/60">
                <div className="w-10 h-10 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        variants={slideInFromLeft(1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-10"
      >
        <button
          type="button"
          onClick={() => setIsFormOpen(true)}
          className="flex items-center gap-2 px-6 py-3 border border-zinc-400 dark:border-zinc-600 hover:border-zinc-600 dark:hover:border-zinc-400 hover:bg-black/5 dark:hover:bg-white/5 text-zinc-700 dark:text-zinc-300 rounded-lg transition-all duration-200 font-medium text-sm"
        >
          <HiPlus className="w-4 h-4" />
          {t("testimonials.addYours")}
        </button>
      </motion.div>

      <TestimonialFormModal open={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
};

export default Testimonials;