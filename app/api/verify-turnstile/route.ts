import { NextRequest, NextResponse } from "next/server";

const VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json();

    if (!token || typeof token !== "string") {
      return NextResponse.json(
        { success: false, error: "Missing verification token" },
        { status: 400 }
      );
    }

    const secretKey = process.env.TURNSTILE_SECRET_KEY;
    if (!secretKey) {
      return NextResponse.json(
        { success: false, error: "Turnstile is not configured on the server" },
        { status: 500 }
      );
    }

    const body = new URLSearchParams();
    body.append("secret", secretKey);
    body.append("response", token);

    const ip = request.headers.get("x-forwarded-for");
    if (ip) body.append("remoteip", ip);

    const verifyRes = await fetch(VERIFY_URL, {
      method: "POST",
      body,
    });

    const outcome = (await verifyRes.json()) as { success?: boolean };

    return NextResponse.json({ success: outcome.success === true });
  } catch {
    return NextResponse.json(
      { success: false, error: "Verification request failed" },
      { status: 500 }
    );
  }
}