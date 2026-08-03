"use client";

import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "@/context/LanguageContext";
import { TurnstileWidget, type TurnstileWidgetRef } from "@/components/main/turnstile-widget";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

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
    }
  }, [open]);

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
    <Dialog
      open={open}
      onOpenChange={(nextOpen) => {
        if (!nextOpen) resetAndClose();
      }}
    >
      <DialogContent className="sm:max-w-lg p-5 sm:p-6 gap-3 sm:gap-4">
        <DialogHeader>
          <DialogTitle>{t("testimonialForm.title")}</DialogTitle>
          <DialogDescription>{t("testimonialForm.description")}</DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
            <p className="text-green-600 dark:text-green-400 text-sm flex items-start gap-2">
              <span className="text-lg leading-none">✓</span>
              <span>{t("testimonialForm.success")}</span>
            </p>
            <Button type="button" onClick={resetAndClose} className="mt-4">
              {t("testimonialForm.close")}
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <div className="absolute -left-[9999px] top-0 opacity-0 pointer-events-none" aria-hidden="true">
              <Label htmlFor="testimonial-website">Website</Label>
              <Input
                type="text"
                id="testimonial-website"
                name="website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="testimonial-name" className="text-muted-foreground text-xs font-normal">
                  {t("testimonialForm.nameLabel")}
                </Label>
                <Input
                  id="testimonial-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="testimonial-role" className="text-muted-foreground text-xs font-normal">
                  {t("testimonialForm.roleLabel")}
                </Label>
                <Input
                  id="testimonial-role"
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  placeholder={t("testimonialForm.rolePlaceholder")}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="testimonial-email" className="text-muted-foreground text-xs font-normal">
                {t("testimonialForm.emailLabel")}
              </Label>
              <Input
                id="testimonial-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
              <p className="text-[11px] text-muted-foreground">{t("testimonialForm.emailHint")}</p>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="testimonial-message" className="text-muted-foreground text-xs font-normal">
                {t("testimonialForm.messageLabel")}
              </Label>
              <Textarea
                id="testimonial-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isLoading}
                rows={4}
                placeholder={t("testimonialForm.messagePlaceholder")}
                className="resize-none"
              />
            </div>

            <TurnstileWidget
              ref={turnstileRef}
              onVerify={setTurnstileToken}
              onExpire={() => setTurnstileToken(null)}
            />

            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? t("testimonialForm.sending") : t("testimonialForm.submit")}
            </Button>

            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                <p className="text-red-600 dark:text-red-400 text-sm flex items-center gap-2">
                  <span className="text-base leading-none">✕</span> {error}
                </p>
              </div>
            )}
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};