import { NextRequest, NextResponse } from "next/server";
import { getGeminiReply, isGeminiConfigured } from "@/lib/gemini";
import type { ChatMessage } from "@/types/chat";

export async function POST(request: NextRequest) {
  try {
    if (!isGeminiConfigured()) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY is not configured on the server" },
        { status: 500 }
      );
    }

    const { messages } = (await request.json()) as { messages?: ChatMessage[] };

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Missing or invalid 'messages' array" },
        { status: 400 }
      );
    }

    const reply = await getGeminiReply(messages);

    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error("Chat API error:", error);

    const status = error?.status && Number.isInteger(error.status) ? error.status : 500;

    return NextResponse.json(
      { error: error?.message || "Failed to get response" },
      { status }
    );
  }
}