import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Rian Cahyo Anggoro - Full Stack Developer Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #030014 0%, #0f0c29 50%, #24243e 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px 24px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.25)",
            color: "#a5b4fc",
            fontSize: 24,
            marginBottom: 32,
          }}
        >
          Full Stack Developer Portfolio
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: -1,
          }}
        >
          Rian Cahyo Anggoro
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#94a3b8",
            marginTop: 20,
          }}
        >
          React · Next.js · TypeScript · Laravel · Node.js
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}