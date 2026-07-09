"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-6 md:px-20 mt-20 md:mt-32 w-full z-[20] gap-8 min-h-[calc(100vh-100px)]"
    >
      <div className="h-full w-full flex flex-col gap-4 justify-center text-start max-w-[650px]">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[10px] px-[15px] border border-zinc-600/50 opacity-[0.9] w-fit"
        >
          <h1 className="Welcome-text text-[13px]">
            Full Stack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white w-auto h-auto"
        >
          <span className="leading-tight">
            Building powerful applications
            <br />from frontend to backend.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-400 my-3 max-w-[600px]"
        >
          Hi! I&apos;m a Full Stack Developer who loves creating scalable, high-performance web applications.  
          I work with modern technologies like React, Next.js, TypeScript, Laravel, Node.js, Express.js, MySQL and PostgreSQL.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-wrap gap-4 mt-2"
        >
          <a
            href="#projects"
            className="py-3 px-6 bg-white hover:bg-zinc-100 text-black text-center cursor-pointer rounded-lg min-w-[160px] transition-all duration-200 font-semibold text-sm"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="py-3 px-6 text-center text-zinc-300 cursor-pointer rounded-lg min-w-[160px] border border-zinc-600 hover:border-zinc-400 hover:bg-white/5 transition-all duration-200 font-medium text-sm"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center max-w-[600px]"
      >
        <Image
          src="/hero-bg.svg"
          alt="Full stack tech visualization"
          height={550}
          width={550}
          draggable={false}
          className="select-none w-full h-auto"
        />
      </motion.div>
    </motion.div>
  );
};
