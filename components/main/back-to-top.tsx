"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowUp } from "react-icons/hi";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          aria-label="Back to top"
          title="Back to top"
          className={cn(
            buttonVariants({ size: "icon" }),
            "fixed bottom-6 right-4 sm:right-6 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full shadow-lg shadow-black/20 dark:shadow-black/40"
          )}
        >
          <HiArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};