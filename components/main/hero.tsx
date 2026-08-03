import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full overflow-hidden">
      <div className="absolute inset-0 -z-20 hidden dark:block pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          controls={false}
          preload="auto"
          className="rotate-180 absolute top-[-340px] left-0 w-full h-full object-cover pointer-events-none select-none"
        >
          <source src="/videos/blackhole.webm" type="video/webm" />
        </video>
      </div>

      <div className="absolute inset-0 -z-20 block dark:hidden bg-gradient-to-b from-indigo-50 via-white to-white" />
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 -z-10 block dark:hidden w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-indigo-200/40 blur-3xl" />

      <HeroContent />
    </div>
  );
};