'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 20);
  };

  const observerOptions = {
    root: null,
    rootMargin: '-100px 0px -66% 0px', 
    threshold: 0,
  };

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    const intersectingEntries = entries.filter(entry => entry.isIntersecting);
    
    if (intersectingEntries.length > 0) {
      const topmost = intersectingEntries.reduce((prev, current) => {
        const prevTop = prev.boundingClientRect.top;
        const currentTop = current.boundingClientRect.top;
        return Math.abs(currentTop) < Math.abs(prevTop) ? current : prev;
      });
      
      setActiveSection(topmost.target.id);
    }
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  const sectionIds = ['home', 'about-me', 'skills', 'projects', 'achievements', 'smart-talk', 'contact'];
  
  sectionIds.forEach(sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      observer.observe(element);
    }
  });

  const handleInitial = () => {
    const hash = window.location.hash.replace('#', '');
    if (hash && sectionIds.includes(hash)) {
      setActiveSection(hash);
    } else {
      setActiveSection('home');
    }
  };

  handleInitial();
  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
    observer.disconnect();
  };
}, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`w-full h-[75px] fixed top-0 z-50 px-4 md:px-10 transition-all duration-300 ${
          scrolled 
            ? "bg-[#03001490] backdrop-blur-xl shadow-2xl shadow-purple-500/20" 
            : "bg-[#03001427] backdrop-blur-md shadow-lg shadow-[#2A0E61]/50"
        }`}
      >
        <div className="w-full h-full flex items-center justify-between max-w-[1800px] mx-auto">
          <Link href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-purple-500/30 rounded-full blur-xl group-hover:bg-purple-500/50 transition-all" />
              <Image
                src="/logo.png"
                alt="Logo"
                width={55}
                height={55}
                draggable={false}
                className="cursor-pointer relative z-10 group-hover:scale-110 transition-transform"
              />
            </div>
            <span className="hidden md:block font-bold text-xl bg-white bg-clip-text text-transparent">
              Rian Cahyo
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 bg-[#0F0728]/60 backdrop-blur-md px-6 py-3 rounded-full border border-purple-500/20">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.link.replace('#', '');
              return (
                <motion.div key={link.title} layout className="relative">
                  <Link
                    href={link.link}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                      isActive ? "text-white" : "text-gray-400 hover:text-white"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.title}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full -z-10"
                        transition={{ type: "spring", duration: 0.6 }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
                className="group relative"
              >
                <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/20 rounded-full blur-xl transition-all" />
                <div className="relative p-2 bg-[#0F0728]/60 backdrop-blur-md rounded-full border border-purple-500/20 hover:border-purple-500/50 transition-all">
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </div>
              </Link>
            ))}
          </div>

          <button
            className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[280px] bg-gradient-to-br from-[#0F0728] to-[#1a0b3d] z-50 lg:hidden shadow-2xl shadow-purple-500/50"
            >
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-purple-500/20 hover:bg-purple-500/30 transition-colors"
              >
                <span className="text-white text-2xl">&times;</span>
              </button>

              <div className="flex flex-col h-full pt-20 px-6">
                <nav className="flex flex-col gap-2">
                  {NAV_LINKS.map((link, index) => {
                    const isActive = activeSection === link.link.replace('#', '');
                    return (
                      <motion.div
                        key={link.title}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={link.link}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                            isActive
                              ? "bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-white border border-purple-500/30"
                              : "text-gray-400 hover:text-white hover:bg-purple-500/10"
                          }`}
                        >
                          {link.title}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                <div className="my-6 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col gap-3"
                >
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Connect With Me</p>
                  <div className="flex gap-3">
                    {SOCIALS.map(({ link, name, icon: Icon }) => (
                      <Link
                        href={link}
                        target="_blank"
                        rel="noreferrer noopener"
                        key={name}
                        className="group"
                      >
                        <div className="p-3 bg-[#0F0728] rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all">
                          <Icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="mt-auto pb-6 text-center"
                >
                  <p className="text-xs text-gray-600">
                    © 2026 Rian Cahyo | All rights reserved
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
