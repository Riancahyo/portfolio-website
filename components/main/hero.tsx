import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      {/* Light mode: soft decorative gradient instead of the (mostly black) video */}
      <div className="absolute inset-0 -z-20 hidden dark:block">
        <video
          autoPlay
          muted
          loop
          className="rotate-180 absolute top-[-340px] left-0 w-full h-full object-cover"
        >
          <source src="/videos/blackhole.webm" type="video/webm" />
        </video>
      </div>

      <div className="absolute inset-0 -z-20 block dark:hidden bg-gradient-to-b from-indigo-50 via-white to-white" />
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 -z-10 block dark:hidden w-[500px] h-[500px] rounded-full bg-indigo-200/40 blur-3xl" />

      <HeroContent />
    </div>
  );
};