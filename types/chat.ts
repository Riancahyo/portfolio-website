export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export const SUGGESTED_QUESTIONS = [
  "What are your main skills?",
  "Tell me about your certifications",
  "What's your experience?",
  "Show me your projects",
] as const;