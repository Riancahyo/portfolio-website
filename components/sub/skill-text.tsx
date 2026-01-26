"use client";

import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-3xl md:text-4xl text-white font-semibold mt-[50px] text-center mb-[15px]"
      >
        Skills
      </motion.div>
    </div>
  );
};
