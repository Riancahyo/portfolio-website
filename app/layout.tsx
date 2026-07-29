import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

import { Footer } from "@/components/main/footer";
import { Navbar } from "@/components/main/navbar";
import { StarsCanvas } from "@/components/main/star-background";
import { BackToTop } from "@/components/main/back-to-top";
import { siteConfig, SITE_URL } from "@/config";
import { SOCIALS } from "@/constants";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#030014",
};

export const metadata: Metadata = siteConfig;

const themeInitScript = `
(function() {
  try {
    var theme = window.localStorage.getItem('theme');
    if (theme !== 'light') {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rian Cahyo Anggoro",
  url: SITE_URL,
  jobTitle: "Full Stack Developer",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Politeknik Negeri Madiun",
  },
  address: {
    "@type": "PostalAddress",
    addressRegion: "East Java",
    addressCountry: "ID",
  },
  sameAs: SOCIALS.map((social) => social.link),
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body
        className={cn(
          "bg-white text-zinc-900 dark:bg-[#030014] dark:text-white overflow-y-scroll overflow-x-hidden transition-colors duration-300",
          inter.className
        )}
      >
        <ThemeProvider>
          <LanguageProvider>
            <StarsCanvas />
            <Navbar />
            {children}
            <Footer />
            <BackToTop />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}