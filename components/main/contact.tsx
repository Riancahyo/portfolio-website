"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";
import { RxGithubLogo, RxLinkedinLogo, RxInstagramLogo } from "react-icons/rx";
import { HiMail, HiLocationMarker, HiPhone } from "react-icons/hi";
import emailjs from '@emailjs/browser';
import { useLanguage } from "@/context/LanguageContext";
import { TurnstileWidget, type TurnstileWidgetRef } from "@/components/main/turnstile-widget";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [website, setWebsite] = useState("");
  const formLoadedAt = React.useRef<number>(Date.now());
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = React.useRef<TurnstileWidgetRef>(null);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const submittedTooFast = Date.now() - formLoadedAt.current < 1500;
    if (website.trim() !== "" || submittedTooFast) {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
      return;
    }

    if (!validateEmail(formData.email)) {
      setError(t("contact.errorInvalidEmail"));
      return;
    }

    if (formData.message.length < 10) {
      setError(t("contact.errorShortMessage"));
      return;
    }

    if (process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && !turnstileToken) {
      setError(t("contact.errorTurnstile"));
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      if (turnstileToken) {
        const verifyRes = await fetch("/api/verify-turnstile", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token: turnstileToken }),
        });
        const verifyData = await verifyRes.json();

        if (!verifyData.success) {
          throw new Error(t("contact.errorTurnstile"));
        }
      }

      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(t("contact.errorConfigMissing"));
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: "riancahyo75@gmail.com", 
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err: any) {
      setError(err?.message || t("contact.errorSendFailed"));
    } finally {
      setIsLoading(false);
      setTurnstileToken(null);
      turnstileRef.current?.reset();
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-16 md:py-20 relative overflow-hidden"
    >
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-zinc-900 dark:bg-white py-8 md:py-10"
      >
        {t("contact.heading")}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-zinc-600 dark:text-gray-400 text-center mb-8 px-6 max-w-2xl text-sm md:text-base"
      >
        {t("contact.subtitle")}
      </motion.p>

      <div className="flex flex-col lg:flex-row gap-8 md:gap-10 px-6 md:px-10 max-w-6xl w-full">
        <motion.div
          variants={slideInFromLeft(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full lg:w-1/3 space-y-5"
        >
          <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white mb-4 md:mb-6">
            {t("contact.infoHeading")}
          </h3>

          <div className="flex items-start gap-3">
            <div className="p-2.5 bg-black/10 dark:bg-white/10 rounded-lg">
              <HiMail className="text-zinc-700 dark:text-zinc-300 text-xl" />
            </div>
            <div>
              <h4 className="text-zinc-900 dark:text-white font-semibold text-sm md:text-base">{t("contact.email")}</h4>
              <a href="mailto:riancahyo75@gmail.com" className="text-zinc-600 dark:text-zinc-400 text-sm hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">
                riancahyo75@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 bg-black/10 dark:bg-white/10 rounded-lg">
              <HiPhone className="text-zinc-700 dark:text-zinc-300 text-xl" />
            </div>
            <div>
              <h4 className="text-zinc-900 dark:text-white font-semibold text-sm md:text-base">{t("contact.phone")}</h4>
              <a href="tel:+6281217251350" className="text-zinc-600 dark:text-zinc-400 text-sm hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">
                +62 812-1725-1350
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 bg-black/10 dark:bg-white/10 rounded-lg">
              <HiLocationMarker className="text-zinc-700 dark:text-zinc-300 text-xl" />
            </div>
            <div>
              <h4 className="text-zinc-900 dark:text-white font-semibold text-sm md:text-base">{t("contact.location")}</h4>
              <p className="text-zinc-600 dark:text-gray-400 text-sm">{t("contact.locationValue")}</p>
            </div>
          </div>

          <div className="pt-4 md:pt-6">
            <h4 className="text-zinc-900 dark:text-white font-semibold mb-3 text-sm md:text-base">{t("contact.followMe")}</h4>
            <div className="flex gap-3">
              <a href="https://github.com/Riancahyo" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-black/5 dark:bg-white/5 border border-zinc-300 dark:border-zinc-600 rounded-lg hover:border-zinc-500 dark:hover:border-zinc-400 hover:bg-black/10 dark:hover:bg-white/10 transition-all">
                <RxGithubLogo className="text-zinc-900 dark:text-white text-xl" />
              </a>
              <a href="https://linkedin.com/in/riancahyoanggoro" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-black/5 dark:bg-white/5 border border-zinc-300 dark:border-zinc-600 rounded-lg hover:border-zinc-500 dark:hover:border-zinc-400 hover:bg-black/10 dark:hover:bg-white/10 transition-all">
                <RxLinkedinLogo className="text-zinc-900 dark:text-white text-xl" />
              </a>
              <a href="https://instagram.com/rianchyoa" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-black/5 dark:bg-white/5 border border-zinc-300 dark:border-zinc-600 rounded-lg hover:border-zinc-500 dark:hover:border-zinc-400 hover:bg-black/10 dark:hover:bg-white/10 transition-all">
                <RxInstagramLogo className="text-zinc-900 dark:text-white text-xl" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={slideInFromRight(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full lg:w-2/3"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div
              className="absolute -left-[9999px] top-0 opacity-0 pointer-events-none"
              aria-hidden="true"
            >
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                name="website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="text-zinc-600 dark:text-gray-400 text-xs md:text-sm mb-2 block">{t("contact.nameLabel")}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base bg-black/5 dark:bg-white/5 border border-zinc-300 dark:border-zinc-700 rounded-lg text-zinc-900 dark:text-white focus:outline-none focus:border-zinc-500 dark:focus:border-zinc-400 disabled:opacity-50"
                />
              </div>
              <div>
                <label className="text-zinc-600 dark:text-gray-400 text-xs md:text-sm mb-2 block">{t("contact.emailLabel")}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base bg-black/5 dark:bg-white/5 border border-zinc-300 dark:border-zinc-700 rounded-lg text-zinc-900 dark:text-white focus:outline-none focus:border-zinc-500 dark:focus:border-zinc-400 disabled:opacity-50"
                />
              </div>
            </div>

            <div>
              <label className="text-zinc-600 dark:text-gray-400 text-xs md:text-sm mb-2 block">{t("contact.subjectLabel")}</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                disabled={isLoading}
                placeholder={t("contact.subjectPlaceholder")}
                className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base bg-black/5 dark:bg-white/5 border border-zinc-300 dark:border-zinc-700 rounded-lg text-zinc-900 dark:text-white focus:outline-none focus:border-zinc-500 dark:focus:border-zinc-400 disabled:opacity-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
              />
            </div>

            <div>
              <label className="text-zinc-600 dark:text-gray-400 text-xs md:text-sm mb-2 block">{t("contact.messageLabel")}</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isLoading}
                rows={5}
                className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base bg-black/5 dark:bg-white/5 border border-zinc-300 dark:border-zinc-700 rounded-lg text-zinc-900 dark:text-white focus:outline-none focus:border-zinc-500 dark:focus:border-zinc-400 resize-none disabled:opacity-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
                placeholder={t("contact.messagePlaceholder")}
              />
            </div>

            <TurnstileWidget
              ref={turnstileRef}
              onVerify={setTurnstileToken}
              onExpire={() => setTurnstileToken(null)}
            />

            <button
              type="submit"
              disabled={isLoading}
              className="w-full md:w-auto px-6 md:px-8 py-2.5 md:py-3 text-sm font-semibold bg-zinc-900 hover:bg-zinc-700 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-black rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? t("contact.sending") : t("contact.send")}
            </button>

            {isSubmitted && (
              <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                <p className="text-green-600 dark:text-green-400 text-sm md:text-base flex items-center gap-2">
                  <span className="text-lg">✓</span> {t("contact.success")}
                </p>
              </div>
            )}

            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                <p className="text-red-600 dark:text-red-400 text-sm md:text-base flex items-center gap-2">
                  <span className="text-lg">✕</span> {error}
                </p>
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;