"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/lib/motion";
import { ChatMessage, ChatLoading } from "@/components/main/ChatMessage";
import { ChatMessage as ChatMessageType } from "@/types/chat";
import { useLanguage } from "@/context/LanguageContext";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

async function sendMessageToServer(messages: ChatMessageType[]): Promise<string> {
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data?.error || "Failed to get response");
  }

  return data.reply as string;
}

const SmartTalk = () => {
  const { t } = useLanguage();

  const [messages, setMessages] = useState<ChatMessageType[]>([
    {
      role: "assistant",
      content: t("smartTalk.greeting"),
    },
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [typingText, setTypingText] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const typingIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    return () => {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    setMessages((prev) => {
      if (prev.length === 1 && prev[0].role === "assistant") {
        return [{ role: "assistant", content: t("smartTalk.greeting") }];
      }
      return prev;
    });
  }, [t]);

  const scrollToBottom = (behavior: ScrollBehavior = "smooth") => {
    messagesEndRef.current?.scrollIntoView({ behavior });
  };

  const autoTypeResponse = (fullText: string, newMessages: ChatMessageType[]) => {
    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
    }

    setTypingText("");
    setIsTypingDone(false);
    setIsTyping(true);

    let i = 0;
    const speed = 18;

    typingIntervalRef.current = setInterval(() => {
      setTypingText((prev) => prev + fullText[i]);
      i++;

      if (i >= fullText.length) {
        if (typingIntervalRef.current) {
          clearInterval(typingIntervalRef.current);
          typingIntervalRef.current = null;
        }
        setIsTypingDone(true);
        setIsTyping(false);

        setMessages([
          ...newMessages,
          { role: "assistant", content: fullText },
        ]);

        setTypingText("");
      }
    }, speed);
  };

  const handleSend = async (customMessage?: string) => {
    if ((!input.trim() && !customMessage) || isLoading || isTyping) return;

    const text = customMessage || input.trim();
    setInput("");

    const newMessages: ChatMessageType[] = [
      ...messages,
      { role: "user", content: text },
    ];

    setMessages(newMessages);
    setIsLoading(true);

    try {
      const assistantMessage = await sendMessageToServer(newMessages);
      autoTypeResponse(assistantMessage, newMessages);
    } catch (error: any) {
      const err = error?.message || t("smartTalk.unknownError");
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

  const suggestedQuestions: readonly string[] = t("smartTalk.questions");

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
        className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-zinc-900 dark:bg-white py-6 md:py-8 flex items-center gap-3"
      >
        {t("smartTalk.heading")}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-zinc-600 dark:text-gray-400 text-center mb-6 px-6 max-w-2xl text-sm"
      >
        {t("smartTalk.subtitle")}
      </motion.p>

      <motion.div
        variants={slideInFromLeft(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-5xl px-6 md:px-10"
      >
        <div className="border border-zinc-300 dark:border-zinc-700/60 bg-black/3 dark:bg-white/3 backdrop-blur-md rounded-lg overflow-hidden">
          <ScrollArea className="h-[450px] md:h-[380px]">
            <div className="p-4 md:p-6 space-y-3">
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
                  className="bg-black/5 dark:bg-white/5 border border-zinc-300 dark:border-zinc-700/60 p-3 rounded-lg w-fit text-zinc-700 dark:text-zinc-300"
                >
                  {typingText}
                </motion.div>
              )}

              {isLoading && <ChatLoading />}

              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {messages.length === 1 && (
            <div className="px-4 md:px-6 pb-3 md:pb-4">
              <p className="text-zinc-600 dark:text-gray-400 text-xs md:text-sm mb-2">{t("smartTalk.tryAsking")}</p>
              <div className="grid grid-cols-2 gap-2">
                {suggestedQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    onClick={() => handleSend(question)}
                    disabled={isLoading || isTyping}
                    className="h-auto justify-start text-left whitespace-normal text-xs md:text-sm px-3 py-2 font-normal bg-black/5 dark:bg-white/5 border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-zinc-500 dark:hover:border-zinc-400 hover:bg-black/10 dark:hover:bg-white/10"
                  >
                    {question}
                  </Button>
                ))}
              </div>
            </div>
          )}

          <div className="border-t border-zinc-300 dark:border-zinc-700/60 p-4">
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder={t("smartTalk.placeholder")}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isLoading || isTyping}
                className="flex-1"
              />
              <Button
                onClick={() => handleSend()}
                disabled={isLoading || isTyping || !input.trim()}
              >
                {isLoading ? "..." : t("smartTalk.send")}
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SmartTalk;