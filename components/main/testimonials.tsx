"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineChatAlt2, HiPlus, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { slideInFromTop, slideInFromLeft } from "@/lib/motion";
import { TESTIMONIALS_DATA } from "@/constants";
import { useLanguage } from "@/context/LanguageContext";
import { TESTIMONIAL_TRANSLATIONS } from "@/lib/translations";
import { TestimonialFormModal } from "@/components/main/testimonial-form-modal";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const TestimonialCard = ({
  quote,
  initials,
  name,
  role,
}: {
  quote: string;
  initials: string;
  name: string;
  role: string;
}) => (
  <Card className="flex flex-col h-full border-zinc-300 dark:border-zinc-700/60 bg-black/[0.03] dark:bg-white/[0.03] backdrop-blur-md hover:border-zinc-500 transition-all duration-300 shadow-none">
    <CardContent className="flex flex-col flex-grow p-4 sm:p-6">
      <HiOutlineChatAlt2 className="w-6 h-6 sm:w-7 sm:h-7 text-zinc-400 dark:text-zinc-600 mb-2 sm:mb-3" />

      <p className="text-sm sm:text-base text-zinc-700 dark:text-gray-300 leading-relaxed flex-grow">
        &ldquo;{quote}&rdquo;
      </p>

      <div className="flex items-center gap-3 mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-zinc-200 dark:border-zinc-700/60">
        <Avatar className="bg-zinc-900 dark:bg-white shrink-0">
          <AvatarFallback className="bg-zinc-900 dark:bg-white text-white dark:text-black font-bold">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-zinc-900 dark:text-white truncate">{name}</p>
          <p className="text-xs text-zinc-500 dark:text-gray-500 truncate">{role}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const TestimonialCarousel = ({
  items,
}: {
  items: { id: string; quote: string; initials: string; name: string; role: string }[];
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);

  const updateActiveFromScroll = () => {
    const track = trackRef.current;
    if (!track) return;

    const trackCenter = track.scrollLeft + track.clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Infinity;

    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const itemCenter = el.offsetLeft + el.offsetWidth / 2;
      const distance = Math.abs(itemCenter - trackCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = i;
      }
    });

    setActiveIndex(closestIndex);
  };

  const handleScroll = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(updateActiveFromScroll);
  };

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const goTo = (index: number) => {
    const clamped = Math.max(0, Math.min(items.length - 1, index));
    itemRefs.current[clamped]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
    setActiveIndex(clamped);
  };

  return (
    <div className="relative w-full">
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth px-[11%] gap-4 [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none" }}
      >
        {items.map((testimonial, index) => (
          <div
            key={testimonial.id}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            className={cn(
              "shrink-0 w-[78%] snap-center transition-all duration-300",
              index === activeIndex ? "scale-100 opacity-100" : "scale-90 opacity-40"
            )}
          >
            <TestimonialCard
              quote={testimonial.quote}
              initials={testimonial.initials}
              name={testimonial.name}
              role={testimonial.role}
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => goTo(activeIndex - 1)}
        disabled={activeIndex === 0}
        aria-label="Previous testimonial"
        className="absolute left-1 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 dark:bg-zinc-900/90 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 shadow-md disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
      >
        <HiChevronLeft className="w-5 h-5" />
      </button>

      <button
        type="button"
        onClick={() => goTo(activeIndex + 1)}
        disabled={activeIndex === items.length - 1}
        aria-label="Next testimonial"
        className="absolute right-1 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 dark:bg-zinc-900/90 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 shadow-md disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
      >
        <HiChevronRight className="w-5 h-5" />
      </button>

      <div className="flex items-center justify-center gap-1.5 mt-4">
        {items.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`Go to testimonial ${index + 1}`}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              index === activeIndex
                ? "w-5 bg-zinc-900 dark:bg-white"
                : "w-1.5 bg-zinc-400/50 dark:bg-zinc-600"
            )}
          />
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => {
  const { t, language } = useLanguage();
  const [isFormOpen, setIsFormOpen] = useState(false);

  const items = TESTIMONIALS_DATA.map((testimonial) => ({
    id: testimonial.id,
    quote: TESTIMONIAL_TRANSLATIONS[testimonial.id]?.[language] ?? "",
    initials: testimonial.initials,
    name: testimonial.name,
    role: testimonial.role,
  }));

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

      {/* Mobile: coverflow carousel */}
      <div className="md:hidden w-full">
        <TestimonialCarousel items={items} />
      </div>

      {/* Desktop: static grid */}
      <div className="hidden md:flex md:flex-wrap md:justify-center gap-5 sm:gap-6 px-6 md:px-10 max-w-6xl w-full">
        {TESTIMONIALS_DATA.map((testimonial, index) => {
          const quote = TESTIMONIAL_TRANSLATIONS[testimonial.id]?.[language];

          return (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="w-full md:w-[calc(33.333%-1rem)] max-w-[360px]"
            >
              <TestimonialCard
                quote={quote}
                initials={testimonial.initials}
                name={testimonial.name}
                role={testimonial.role}
              />
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
        <Button
          type="button"
          variant="outline"
          onClick={() => setIsFormOpen(true)}
          className="border-zinc-400 dark:border-zinc-600 hover:border-zinc-600 dark:hover:border-zinc-400 text-zinc-700 dark:text-zinc-300"
        >
          <HiPlus className="w-4 h-4 mr-2" />
          {t("testimonials.addYours")}
        </Button>
      </motion.div>

      <TestimonialFormModal open={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
};

export default Testimonials;