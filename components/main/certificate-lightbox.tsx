"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { HiX, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useLanguage } from "@/context/LanguageContext";

export interface LightboxItem {
  src: string;
  title: string;
  subtitle?: string;
}

interface CertificateLightboxProps {
  items: LightboxItem[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const CertificateLightbox = ({
  items,
  index,
  onClose,
  onNavigate,
}: CertificateLightboxProps) => {
  const { t } = useLanguage();
  const isOpen = index !== null;
  const current = index !== null ? items[index] : null;

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && index !== null && index > 0) {
        onNavigate(index - 1);
      }
      if (e.key === "ArrowRight" && index !== null && index < items.length - 1) {
        onNavigate(index + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, index, items.length, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {isOpen && current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label={t("lightbox.close")}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
          >
            <HiX className="w-6 h-6" />
          </button>

          {index !== null && index > 0 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onNavigate(index - 1);
              }}
              aria-label={t("lightbox.previous")}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            >
              <HiChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          )}

          {index !== null && index < items.length - 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onNavigate(index + 1);
              }}
              aria-label={t("lightbox.next")}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            >
              <HiChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          )}

          <motion.div
            key={current.src}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[85vh] flex flex-col items-center gap-3"
          >
            <div className="relative w-full max-h-[75vh] aspect-[4/3] bg-white rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={current.src}
                alt={current.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
            </div>
            <div className="text-center px-4">
              <p className="text-white font-semibold text-sm sm:text-base">{current.title}</p>
              {current.subtitle && (
                <p className="text-zinc-300 text-xs sm:text-sm mt-0.5">{current.subtitle}</p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};