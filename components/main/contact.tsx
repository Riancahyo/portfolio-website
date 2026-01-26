"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";
import { RxGithubLogo, RxLinkedinLogo, RxInstagramLogo } from "react-icons/rx";
import { HiMail, HiLocationMarker, HiPhone } from "react-icons/hi";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

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
    
    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (formData.message.length < 10) {
      setError("Message must be at least 10 characters long.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Configuration missing. Please try again later.");
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
      setError("Failed to send message. Please check your connection or try again.");
    } finally {
      setIsLoading(false);
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
        className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-white py-8 md:py-10"
      >
        Get In Touch
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-gray-400 text-center mb-8 px-6 max-w-2xl text-sm md:text-base"
      >
        Have a project in mind? Let&apos;s work together!
      </motion.p>

      <div className="flex flex-col lg:flex-row gap-8 md:gap-10 px-6 md:px-10 max-w-6xl w-full">
        <motion.div
          variants={slideInFromLeft(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full lg:w-1/3 space-y-5"
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
            Contact Information
          </h3>

          <div className="flex items-start gap-3">
            <div className="p-2.5 bg-purple-500/20 rounded-lg">
              <HiMail className="text-purple-500 text-xl" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm md:text-base">Email</h4>
              <a href="mailto:riancahyo75@gmail.com" className="text-gray-400 text-sm hover:text-purple-400 transition-colors">
                riancahyo75@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 bg-purple-500/20 rounded-lg">
              <HiPhone className="text-purple-500 text-xl" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm md:text-base">Phone</h4>
              <a href="tel:+6281217251350" className="text-gray-400 text-sm hover:text-purple-400 transition-colors">
                +62 812-1725-1350
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 bg-purple-500/20 rounded-lg">
              <HiLocationMarker className="text-purple-500 text-xl" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm md:text-base">Location</h4>
              <p className="text-gray-400 text-sm">Ngawi, Jawa Timur, Indonesia</p>
            </div>
          </div>

          <div className="pt-4 md:pt-6">
            <h4 className="text-white font-semibold mb-3 text-sm md:text-base">Follow Me</h4>
            <div className="flex gap-3">
              <a href="https://github.com/Riancahyo" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-[#0F0728] border border-purple-500/30 rounded-lg hover:border-purple-500 transition-all hover:scale-110">
                <RxGithubLogo className="text-white text-xl" />
              </a>
              <a href="https://linkedin.com/in/riancahyoanggoro" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-[#0F0728] border border-purple-500/30 rounded-lg hover:border-purple-500 transition-all hover:scale-110">
                <RxLinkedinLogo className="text-white text-xl" />
              </a>
              <a href="https://instagram.com/rianchyoa" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-[#0F0728] border border-purple-500/30 rounded-lg hover:border-purple-500 transition-all hover:scale-110">
                <RxInstagramLogo className="text-white text-xl" />
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="text-gray-400 text-xs md:text-sm mb-2 block">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base bg-[#0F0728] border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500 disabled:opacity-50"
                />
              </div>
              <div>
                <label className="text-gray-400 text-xs md:text-sm mb-2 block">Your Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base bg-[#0F0728] border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500 disabled:opacity-50"
                />
              </div>
            </div>

            <div>
              <label className="text-gray-400 text-xs md:text-sm mb-2 block">Subject *</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                disabled={isLoading}
                placeholder="Project Inquiry"
                className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base bg-[#0F0728] border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500 disabled:opacity-50"
              />
            </div>

            <div>
              <label className="text-gray-400 text-xs md:text-sm mb-2 block">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isLoading}
                rows={5}
                className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base bg-[#0F0728] border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500 resize-none disabled:opacity-50"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full md:w-auto px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base button-primary text-white rounded-lg hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>

            {isSubmitted && (
              <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                <p className="text-green-400 text-sm md:text-base flex items-center gap-2">
                  <span className="text-lg">✓</span> Message sent successfully!
                </p>
              </div>
            )}

            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                <p className="text-red-400 text-sm md:text-base flex items-center gap-2">
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