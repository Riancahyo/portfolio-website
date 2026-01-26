"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about-me"
      className="flex flex-col items-center justify-center relative overflow-hidden py-16 md:py-20"
    >
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-white py-6 md:py-8"
      >
        About Me
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-10 px-6 md:px-10 max-w-6xl w-full">

        <motion.div
          variants={slideInFromLeft(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] -mt-8 md:-mt-12">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-3xl opacity-30 animate-pulse" />
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src="/logo.png" 
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={slideInFromRight(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex flex-col gap-4"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Hi! Im{" "}
            <span className="text-transparent bg-clip-text bg-white">
              Rian Cahyo
            </span>
          </h2>

          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            A passionate <span className="text-purple-500 font-semibold">Full Stack Developer </span> 
            and a 6th-semester student of Technology of Software Engineering
            at Politeknik Negeri Madiun  
            I love building complete web applications from crafting beautiful user interfaces 
            to developing powerful backend services. Turning ideas into real, scalable products 
            is what drives me.
          </p>

          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            My tech stack includes 
            <span className="text-cyan-500 font-semibold"> React</span>, 
            <span className="text-cyan-500 font-semibold"> Next.js</span>, 
            <span className="text-cyan-500 font-semibold"> Laravel</span>, 
            <span className="text-cyan-500 font-semibold"> Node.js</span>, 
            and databases like 
            <span className="text-cyan-500 font-semibold"> MySQL</span> & 
            <span className="text-cyan-500 font-semibold"> PostgreSQL</span>.  
            Always learning, building, and continually improving my craft.
          </p>

          <div className="grid grid-cols-2 gap-3 mt-3">
            <div className="border border-[#2A0E61] bg-[#03001417] backdrop-blur-md rounded-lg p-3 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                1+
              </h3>
              <p className="text-gray-400 text-xs md:text-sm mt-1">Years Exp</p>
            </div>
            <div className="border border-[#2A0E61] bg-[#03001417] backdrop-blur-md rounded-lg p-3 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                10+
              </h3>
              <p className="text-gray-400 text-xs md:text-sm mt-1">Projects</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-3">
            <a 
              href="#contact" 
              className="px-5 py-2.5 button-primary text-center text-white cursor-pointer rounded-lg text-sm md:text-base hover:scale-105 transition-transform"
            >
              Contact Me
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              className="px-5 py-2.5 border border-purple-500 text-white cursor-pointer rounded-lg hover:bg-purple-500/20 transition-all text-sm md:text-base"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;