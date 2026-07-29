"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiX } from "react-icons/hi";
import emailjs from "@emailjs/browser";
import { useLanguage } from "@/context/LanguageContext";
import { TurnstileWidget, type TurnstileWidgetRef } from "@/components/main/turnstile-widget";

interface TestimonialFormModalProps {
  open: boolean;
  onClose: () => void;
}

export const TestimonialFormModal = ({ open, onClose }: TestimonialFormModalProps) => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({ name: "", role: "", email: "", message: "" });
  const [website, setWebsite] = useState("");
  const formLoadedAt = useRef<number>(Date.now());
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileWidgetRef>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (open) {
      formLoadedAt.current = Date.now();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError("");
  };

  const resetAndClose = () => {
    setFormData({ name: "", role: "", email: "", message: "" });
    setTurnstileToken(null);
    turnstileRef.current?.reset();
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const submittedTooFast = Date.now() - formLoadedAt.current < 1500;
    if (website.trim() !== "" || submittedTooFast) {
      setIsSubmitted(true);
      setFormData({ name: "", role: "", email: "", message: "" });
      return;
    }

    if (!validateEmail(formData.email)) {
      setError(t("testimonialForm.errorInvalidEmail"));
      return;
    }

    if (formData.message.trim().length < 20) {
      setError(t("testimonialForm.errorShortMessage"));
      return;
    }

    if (process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && !turnstileToken) {
      setError(t("testimonialForm.errorTurnstile"));
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
          throw new Error(t("testimonialForm.errorTurnstile"));
        }
      }

      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(t("testimonialForm.errorConfigMissing"));
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: `New testimonial recommendation - ${formData.role}`,
        message: `Role: ${formData.role}\n\n${formData.message}`,
        to_email: "riancahyo75@gmail.com",
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setIsSubmitted(true);
      setFormData({ name: "", role: "", email: "", message: "" });
    } catch (err: any) {
      setError(err?.message || t("testimonialForm.errorSendFailed"));
    } finally {
      setIsLoading(false);
      setTurnstileToken(null);
      turnstileRef.current?.reset();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={resetAndClose}
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white dark:bg-[#0a0620] border border-zinc-300 dark:border-zinc-700/60 rounded-lg shadow-2xl p-5 sm:p-6"
          >
            <button
              type="button"
              onClick={resetAndClose}
              aria-label={t("testimonialForm.close")}
              className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-zinc-700 dark:text-zinc-200 transition-colors"
            >
              <HiX className="w-5 h-5" />
            </button>

            <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white pr-10">
              {t("testimonialForm.title")}
            </h3>
            <p className="text-sm text-zinc-600 dark:text-gray-400 mt-1 mb-5">
              {t("testimonialForm.description")}
            </p>

            {isSubmitted ? (
              <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                <p className="text-green-600 dark:text-green-400 text-sm flex items-start gap-2">
                  <span className="text-lg leading-none">✓</span>
                  <span>{t("testimonialForm.success")}</span>
                </p>
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="mt-4 px-4 py-2 text-sm font-semibold bg-zinc-900 hover:bg-zinc-700 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-black rounded-lg transition-all duration-200"
                >
                  {t("testimonialForm.close")}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="absolute -left-[9999px] top-0 opacity-0 pointer-events-none" aria-hidden="true">
                  <label htmlFor="testimonial-website">Website</label>
                  <input
                    type="text"
                    id="testimonial-website"
                    name="website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-zinc-600 dark:text-gray-400 text-xs mb-1.5 block">
                      {t("testimonialForm.nameLabel")}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      className="w-full px-3 py-2.5 text-sm bg-black/5 dark:bg-white/5 border border-zinc-300 dark:border-zinc-700 rounded-lg text-zinc-900 dark:text-white focus:outline-none focus:border-zinc-500 dark:focus:border-zinc-400 disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label className="text-zinc-600 dark:text-gray-400 text-xs mb-1.5 block">
                      {t("testimonialForm.roleLabel")}
                    </label>
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      placeholder={t("testimonialForm.rolePlaceholder")}
                      className="w-full px-3 py-2.5 text-sm bg-black/5 dark:bg-white/5 border border-zinc-300 dark:border-zinc-700 rounded-lg text-zinc-900 dark:text-white focus:outline-none focus:border-zinc-500 dark:focus:border-zinc-400 disabled:opacity-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-zinc-600 dark:text-gray-400 text-xs mb-1.5 block">
                    {t("testimonialForm.emailLabel")}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full px-3 py-2.5 text-sm bg-black/5 dark:bg-white/5 border border-zinc-300 dark:border-zinc-700 rounded-lg text-zinc-900 dark:text-white focus:outline-none focus:border-zinc-500 dark:focus:border-zinc-400 disabled:opacity-50"
                  />
                  <p className="text-[11px] text-zinc-500 dark:text-gray-500 mt-1">
                    {t("testimonialForm.emailHint")}
                  </p>
                </div>

                <div>
                  <label className="text-zinc-600 dark:text-gray-400 text-xs mb-1.5 block">
                    {t("testimonialForm.messageLabel")}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    rows={4}
                    placeholder={t("testimonialForm.messagePlaceholder")}
                    className="w-full px-3 py-2.5 text-sm bg-black/5 dark:bg-white/5 border border-zinc-300 dark:border-zinc-700 rounded-lg text-zinc-900 dark:text-white focus:outline-none focus:border-zinc-500 dark:focus:border-zinc-400 resize-none disabled:opacity-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
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
                  className="w-full px-6 py-2.5 text-sm font-semibold bg-zinc-900 hover:bg-zinc-700 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-black rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? t("testimonialForm.sending") : t("testimonialForm.submit")}
                </button>

                {error && (
                  <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <p className="text-red-600 dark:text-red-400 text-sm flex items-center gap-2">
                      <span className="text-base leading-none">✕</span> {error}
                    </p>
                  </div>
                )}
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};