"use client";

import Image from "next/image";
import Link from "next/link";
import { RxGithubLogo } from "react-icons/rx";
import { HiExternalLink } from "react-icons/hi";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type TechStack = {
  name: string;
  icon: string;
};

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  demoLink: string;
  githubLink?: string;
  techStack?: readonly TechStack[];
};

export const ProjectCard = ({
  src,
  title,
  description,
  demoLink,
  githubLink,
  techStack,
}: ProjectCardProps) => {
  return (
    <Card className="group relative overflow-hidden rounded-xl border-zinc-700/60 bg-white/[0.03] backdrop-blur-sm hover:border-zinc-500 transition-all duration-300 flex flex-col h-full shadow-none">
      <div className="relative w-full h-[180px] md:h-[200px] overflow-hidden">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

        {/* Desktop hover overlay */}
        <div className="hidden md:flex absolute inset-0 items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Button asChild size="sm" className="bg-white hover:bg-zinc-100 text-black">
            <Link
              href={demoLink}
              target="_blank"
              rel="noreferrer noopener"
              onClick={(e) => e.stopPropagation()}
            >
              <HiExternalLink className="w-4 h-4 mr-1.5" />
              View Demo
            </Link>
          </Button>

          {githubLink && (
            <Button
              asChild
              size="sm"
              variant="outline"
              className="border-zinc-500 hover:border-zinc-300 hover:bg-white/5 bg-black/40 text-white"
            >
              <Link
                href={githubLink}
                target="_blank"
                rel="noreferrer noopener"
                onClick={(e) => e.stopPropagation()}
              >
                <RxGithubLogo className="w-4 h-4 mr-1.5" />
                Code
              </Link>
            </Button>
          )}
        </div>
      </div>

      <CardContent className="relative p-4 md:p-5 flex flex-col flex-grow">
        <h2 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-zinc-300 transition-colors duration-200">
          {title}
        </h2>
        <p className="text-sm text-gray-400 leading-relaxed line-clamp-3 flex-grow">
          {description}
        </p>

        {techStack && techStack.length > 0 && (
          <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-zinc-700/60">
            <div className="flex items-center gap-2 md:gap-3 flex-wrap">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="group/tech relative"
                  title={tech.name}
                >
                  <div className="w-6 h-6 md:w-8 md:h-8 relative transition-all duration-300 transform group-hover/tech:scale-110">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Mobile action buttons - always visible */}
        <div className="flex md:hidden gap-2 mt-4">
          <Button asChild size="sm" className="flex-1 bg-white hover:bg-zinc-100 text-black text-xs">
            <Link href={demoLink} target="_blank" rel="noreferrer noopener">
              <HiExternalLink className="w-3.5 h-3.5 mr-1.5" />
              View Demo
            </Link>
          </Button>
          {githubLink && (
            <Button asChild size="sm" variant="outline" className="flex-1 border-zinc-600 text-zinc-300 text-xs">
              <Link href={githubLink} target="_blank" rel="noreferrer noopener">
                <RxGithubLogo className="w-3.5 h-3.5 mr-1.5" />
                Code
              </Link>
            </Button>
          )}
        </div>
      </CardContent>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="absolute inset-0 bg-white/3 blur-xl" />
      </div>
    </Card>
  );
};