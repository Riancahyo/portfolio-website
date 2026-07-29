import type { Metadata } from "next";

export const SITE_URL = "https://portfolio-riancahyo.vercel.app";

const description =
  "Rian Cahyo Anggoro - Full Stack Developer portfolio showcasing projects, skills, and achievements in React, Next.js, TypeScript, Laravel, and Node.js.";

export const siteConfig: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Rian Cahyo Anggoro | Full Stack Developer",
    template: "%s | Rian Cahyo Anggoro",
  },
  description,
  keywords: [
    "Rian Cahyo Anggoro",
    "Full Stack Developer",
    "Web Developer Portfolio",
    "React Developer",
    "Next.js Developer",
    "Laravel Developer",
    "Politeknik Negeri Madiun",
  ],
  authors: [{ name: "Rian Cahyo Anggoro", url: "https://github.com/Riancahyo" }],
  creator: "Rian Cahyo Anggoro",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Rian Cahyo Anggoro | Full Stack Developer",
    description,
    siteName: "Rian Cahyo Anggoro Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Rian Cahyo Anggoro - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rian Cahyo Anggoro | Full Stack Developer",
    description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
} as const;