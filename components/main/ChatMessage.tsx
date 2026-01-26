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
            ? "bg-purple-500/20" 
            : "bg-gradient-to-r from-purple-500 to-cyan-500"
        }`}>
          {isUser ? (
            <HiUser className="text-purple-500 text-sm" />
          ) : (
            <HiSparkles className="text-white text-sm" />
          )}
        </div>
        
        <div className={`rounded-lg p-2.5 md:p-3 ${
          isUser 
            ? "bg-purple-500/20" 
            : "bg-[#0F0728]"
        }`}>
          <p className="text-white text-sm leading-relaxed whitespace-pre-wrap">
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
        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center">
          <HiSparkles className="text-white text-sm" />
        </div>
        <div className="rounded-lg p-2.5 md:p-3 bg-[#0F0728]">
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
          </div>
        </div>
      </div>
    </div>
  );
};