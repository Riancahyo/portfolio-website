'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { NAV_LINKS, SOCIALS } from "@/constants";
import { useLanguage } from "@/context/LanguageContext";
import { ThemeToggle } from "@/components/main/theme-toggle";
import { LanguageToggle } from "@/components/main/language-toggle";

export const Navbar = () => {
  const { t } = useLanguage();
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
            ? "bg-white/90 dark:bg-[#03001490] backdrop-blur-xl shadow-2xl shadow-black/10 dark:shadow-black/20" 
            : "bg-white/70 dark:bg-[#03001427] backdrop-blur-md shadow-lg shadow-black/10 dark:shadow-black/30"
        }`}
      >
        <div className="w-full h-full flex items-center justify-between max-w-[1800px] mx-auto">
          <Link href="#home" className="flex items-center gap-3 group">
            <span className="font-bold text-xl bg-zinc-900 dark:bg-white bg-clip-text text-transparent">
              Rian Cahyo
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 bg-black/5 dark:bg-white/5 backdrop-blur-md px-6 py-3 rounded-full border border-zinc-300 dark:border-white/10">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.link.replace('#', '');
              return (
                <motion.div key={link.title} layout className="relative">
                  <Link
                    href={link.link}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                      isActive ? "text-zinc-900 dark:text-white" : "text-zinc-500 hover:text-zinc-900 dark:text-gray-400 dark:hover:text-white"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t(`nav.${link.key}`)}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute inset-0 bg-black/10 dark:bg-white/10 rounded-full -z-10"
                        transition={{ type: "spring", duration: 0.6 }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <LanguageToggle />
            <ThemeToggle />
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
                className="group relative"
              >
                <div className="relative p-2 bg-black/5 dark:bg-white/5 backdrop-blur-md rounded-full border border-zinc-300 dark:border-white/10 hover:border-zinc-500 dark:hover:border-white/30 transition-all">
                  <Icon className="w-5 h-5 text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" />
                </div>
              </Link>
            ))}
          </div>

          <div className="lg:hidden flex items-center gap-1.5 sm:gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <button
              className="relative w-9 h-9 sm:w-10 sm:h-10 flex flex-col items-center justify-center gap-1.5 group flex-shrink-0"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-zinc-900 dark:bg-white transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-6 h-0.5 bg-zinc-900 dark:bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`w-6 h-0.5 bg-zinc-900 dark:bg-white transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
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
              className="fixed inset-0 bg-black/40 dark:bg-black/80 backdrop-blur-sm z-40 lg:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[280px] bg-white dark:bg-[#030014] z-50 lg:hidden border-l border-zinc-200 dark:border-white/10"
            >
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition-colors"
              >
                <span className="text-zinc-900 dark:text-white text-2xl">&times;</span>
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
                              ? "bg-black/10 dark:bg-white/10 text-zinc-900 dark:text-white border border-zinc-300 dark:border-white/20"
                              : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                          }`}
                        >
                          {t(`nav.${link.key}`)}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                <div className="my-6 h-px bg-gradient-to-r from-transparent via-zinc-300 dark:via-white/20 to-transparent" />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col gap-3"
                >
                  <p className="text-xs text-zinc-500 dark:text-gray-500 uppercase tracking-wider">{t("nav.connect")}</p>
                  <div className="flex gap-3">
                    {SOCIALS.map(({ link, name, icon: Icon }) => (
                      <Link
                        href={link}
                        target="_blank"
                        rel="noreferrer noopener"
                        key={name}
                        className="group"
                      >
                        <div className="p-3 bg-black/5 dark:bg-white/5 rounded-lg border border-zinc-300 dark:border-white/10 hover:border-zinc-500 dark:hover:border-white/30 transition-all">
                          <Icon className="w-6 h-6 text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" />
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
                  <p className="text-xs text-zinc-500 dark:text-gray-600">
                    © 2026 Rian Cahyo | {t("nav.rights")}
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
