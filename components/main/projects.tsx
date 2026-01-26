"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";
import { slideInFromLeft, slideInFromTop } from "@/lib/motion";

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? PROJECTS : PROJECTS.slice(0, 3);

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
        className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-white py-8 md:py-10"
      >
        My Projects
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-gray-400 text-center mb-10 px-6 max-w-2xl"
      >
        Here are some of my recent projects showcasing my fullstack development skills.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-10 max-w-7xl w-full">
        {displayedProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <ProjectCard
              src={project.image}
              title={project.title}
              description={project.description}
              demoLink={project.link}
              githubLink={project.github}
              techStack={project.techStack}
            />
          </motion.div>
        ))}
      </div>

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
          {showAll ? "Show Less" : `View All (${PROJECTS.length})`}
        </button>
      </motion.div>
    </section>
  );
};