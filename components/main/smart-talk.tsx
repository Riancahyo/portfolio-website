"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/lib/motion";
import { ChatMessage, ChatLoading } from "@/components/main/ChatMessage";
import { sendMessageToGemini, isGeminiConfigured } from "@/lib/gemini";
import { ChatMessage as ChatMessageType, SUGGESTED_QUESTIONS } from "@/types/chat";

const SmartTalk = () => {
  const [messages, setMessages] = useState<ChatMessageType[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm an AI assistant. Ask me anything about Rian Cahyo, his skills, projects, or certifications!",
    },
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [typingText, setTypingText] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = (behavior: ScrollBehavior = "smooth") => {
    messagesEndRef.current?.scrollIntoView({ behavior });
  };

  const autoTypeResponse = (fullText: string, newMessages: ChatMessageType[]) => {
    setTypingText("");
    setIsTypingDone(false);

    let i = 0;
    const speed = 18;

    const typing = setInterval(() => {
      setTypingText((prev) => prev + fullText[i]);
      i++;

      if (i >= fullText.length) {
        clearInterval(typing);
        setIsTypingDone(true);

        setMessages([
          ...newMessages,
          { role: "assistant", content: fullText },
        ]);

        setTypingText("");
      }
    }, speed);
  };

  const handleSend = async (customMessage?: string) => {
    if ((!input.trim() && !customMessage) || isLoading) return;

    if (!isGeminiConfigured()) {
      alert("Please configure your Gemini API key in the .env.local file");
      return;
    }

    const text = customMessage || input.trim();
    setInput("");

    const newMessages: ChatMessageType[] = [
      ...messages,
      { role: "user", content: text },
    ];

    setMessages(newMessages);
    setIsLoading(true);

    try {
      const assistantMessage = await sendMessageToGemini(newMessages);
      autoTypeResponse(assistantMessage, newMessages);
    } catch (error: any) {
      const err = error?.message || "Unknown error";
      setMessages([
        ...newMessages,
        { role: "assistant", content: `Error: ${err}` },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section
      id="smart-talk"
      className="flex flex-col items-center justify-center py-12 md:py-16 relative overflow-hidden"
    >
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-white py-6 md:py-8 flex items-center gap-3"
      >
        Smart Talk AI
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-gray-400 text-center mb-6 px-6 max-w-2xl text-sm"
      >
        Chat with AI to learn more about me, my skills, and experience
      </motion.p>

      <motion.div
        variants={slideInFromLeft(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-5xl px-6 md:px-10"
      >
        <div className="border border-zinc-700/60 bg-white/3 backdrop-blur-md rounded-lg overflow-hidden">
          <div className="h-[450px] md:h-[380px] overflow-y-auto p-4 md:p-6 space-y-3">
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                animate={
                  isTypingDone && index === messages.length - 1
                    ? { scale: [1, 1.03, 1] }
                    : {}
                }
                transition={{ duration: 0.3 }}
              >
                <ChatMessage message={msg} />
              </motion.div>
            ))}

            {typingText && (
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white/5 border border-zinc-700/60 p-3 rounded-lg w-fit text-zinc-300"
              >
                {typingText}
              </motion.div>
            )}

            {isLoading && <ChatLoading />}

            <div ref={messagesEndRef} />
          </div>

          {messages.length === 1 && (
            <div className="px-4 md:px-6 pb-3 md:pb-4">
              <p className="text-gray-400 text-xs md:text-sm mb-2">Try asking:</p>
              <div className="grid grid-cols-2 gap-2">
                {SUGGESTED_QUESTIONS.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSend(question)}
                    className="text-left text-xs md:text-sm px-3 py-2 bg-white/5 border border-zinc-700 rounded-lg text-zinc-300 hover:border-zinc-400 hover:bg-white/10 transition-all"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="border-t border-zinc-700/60 p-4">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Ask me anything..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isLoading}
                className="flex-1 px-4 py-2.5 text-sm bg-white/5 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-zinc-400 disabled:opacity-50 placeholder:text-zinc-500"
              />
              <button
                onClick={() => handleSend()}
                disabled={isLoading || !input.trim()}
                className="px-6 py-2.5 text-sm font-semibold bg-white hover:bg-zinc-100 text-black rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "..." : "Send"}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SmartTalk;
