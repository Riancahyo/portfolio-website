"use client";

import dynamic from "next/dynamic";

const StarsCanvas = dynamic(
  () => import("@/components/main/star-background").then((mod) => mod.StarsCanvas),
  { ssr: false }
);

export const StarBackgroundLoader = () => <StarsCanvas />;