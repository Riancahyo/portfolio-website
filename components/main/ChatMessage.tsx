import React from "react";
import { HiSparkles, HiUser } from "react-icons/hi";
import { ChatMessage as ChatMessageType } from "@/types/chat";

interface ChatMessageProps {
  message: ChatMessageType;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div className={`flex gap-2 max-w-[85%] md:max-w-[80%] ${isUser ? "flex-row-reverse" : "flex-row"}`}>
        <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center ${
          isUser 
            ? "bg-black/15 dark:bg-white/15" 
            : "bg-black/10 dark:bg-white/10"
        }`}>
          {isUser ? (
            <HiUser className="text-zinc-700 dark:text-zinc-300 text-sm" />
          ) : (
            <HiSparkles className="text-zinc-800 dark:text-zinc-200 text-sm" />
          )}
        </div>
        
        <div className={`rounded-lg p-2.5 md:p-3 ${
          isUser 
            ? "bg-black/10 dark:bg-white/10 border border-zinc-300 dark:border-zinc-600/50" 
            : "bg-black/5 dark:bg-white/5 border border-zinc-300 dark:border-zinc-700/60"
        }`}>
          <p className="text-zinc-900 dark:text-white text-sm leading-relaxed whitespace-pre-wrap">
            {message.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export const ChatLoading: React.FC = () => {
  return (
    <div className="flex justify-start">
      <div className="flex gap-2 max-w-[80%]">
        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-black/10 dark:bg-white/10 border border-zinc-300 dark:border-zinc-700/60 flex items-center justify-center">
          <HiSparkles className="text-zinc-700 dark:text-zinc-300 text-sm" />
        </div>
        <div className="rounded-lg p-2.5 md:p-3 bg-black/5 dark:bg-white/5 border border-zinc-300 dark:border-zinc-700/60">
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 bg-zinc-500 dark:bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
            <div className="w-1.5 h-1.5 bg-zinc-500 dark:bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
            <div className="w-1.5 h-1.5 bg-zinc-500 dark:bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
          </div>
        </div>
      </div>
    </div>
  );
};