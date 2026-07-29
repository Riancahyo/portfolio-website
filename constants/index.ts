import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com/rianchyoa",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://linkedin.com/in/riancahyoanggoro",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/Riancahyo",
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Laravel",
    image: "laravel.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    id: "haw-reload",
    title: "HAW RELOAD",
    description:
      "A real-time financial information and point of sale system for managing internet voucher, mobile credit, PPOB product sales, and cash/transfer transactions. Features include shift management, live transaction monitoring via Server-Sent Events (SSE), and financial report export to Excel and PDF.",
    image: "/projects/hawreload.png",
    link: "https://hawreload.online",
    github: "#",
    techStack: [
      { name: "Next.js", icon: "/skills/next.png" },
      { name: "Express.js", icon: "/skills/express.png" },
      { name: "TypeScript", icon: "/skills/ts.png" },
      { name: "MySQL", icon: "/skills/mysql.png" },
    ]
  },
  {
    id: "ngopai",
    title: "NGOPAI",
    description:
      "A digital education platform built with Next.js for the Ministry of Religious Affairs, East Java (Kemenag Jatim). Key features include activity management, learning materials, participant attendance tracking, and automated certificate generation.",
    image: "/projects/ngopai.png",
    link: "https://ngopai-paislove.vercel.app/",
    github: "#",
    techStack: [
      { name: "Next.js", icon: "/skills/next.png" },
      { name: "TypeScript", icon: "/skills/ts.png" },
      { name: "Tailwind CSS", icon: "/skills/tailwind.png" },
      { name: "PostgreSQL", icon: "/skills/postgresql.png" },
    ]
  },
  {
    id: "paratamu-coffee",
    title: "Paratamu Coffee",
    description:
      "A website for a local café built with React and Express.js. Key features include an interactive menu display, facility information, and an online reservation system with room selection.",
    image: "/projects/paratamu-coffee.png",
    link: "https://paratamu-coffee.vercel.app/",
    github: "https://github.com/Riancahyo/paratamu-coffee.git",
    techStack: [
      { name: "React", icon: "/skills/react.png" },
      { name: "TypeScript", icon: "/skills/ts.png" },
      { name: "Tailwind CSS", icon: "/skills/tailwind.png" },
      { name: "Express.js", icon: "/skills/express.png" },
      { name: "PostgreSQL", icon: "/skills/postgresql.png" },
    ]
  },
  {
    id: "ai-career-roadmap",
    title: "AI Career Roadmap",
    description:
      "An AI-powered career path platform built with Next.js. Key features include personalized roadmap recommendations, relevant skill suggestions, and learning progress tracking through dynamic visualizations.",
    image: "/projects/project-1.png",
    link: "https://career-roadmap-dev.vercel.app/",
    github: "https://github.com/Riancahyo/career-roadmap.git",
    techStack: [
      { name: "Next.js", icon: "/skills/next.png" },
      { name: "TypeScript", icon: "/skills/ts.png" },
      { name: "Tailwind CSS", icon: "/skills/tailwind.png" },
    ]
  },
  {
    id: "gulaguard",
    title: "GulaGuard",
    description:
      "An AI-powered nutrition assistant PWA that helps users track daily sugar intake to reduce diabetes risk. Integrates Google Gemini API for AI-driven food analysis with image-based input for a fast, installable mobile experience.",
    image: "/projects/gula.png",
    link: "https://gulaguard.vercel.app",
    github: "https://github.com/Riancahyo/gulaguard",
    techStack: [
      { name: "React", icon: "/skills/react.png" },
      { name: "TypeScript", icon: "/skills/ts.png" },
      { name: "Tailwind CSS", icon: "/skills/tailwind.png" },
    ]
  },
  {
    id: "ebook-library",
    title: "E-Book Library",
    description:
      "A digital e-book borrowing system built with Laravel and Livewire for real-time interaction. Features include a digital book catalog, time-limited borrowing system, auto-renewal, reminder notifications, and an admin dashboard for monitoring borrowing activity.",
    image: "/projects/project-3.png",
    link: "http://ebook-library.great-site.net/",
    github: "https://github.com/Riancahyo/Books.git",
    techStack: [
      { name: "Laravel", icon: "/skills/laravel.png" },
      { name: "Livewire", icon: "/skills/livewire.png" },
      { name: "MySQL", icon: "/skills/mysql.png" },
    ]
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with Next.js for optimal performance and SEO. Features a project showcase, skills, work experience, and contact information with a modern responsive design using Next.js App Router, TypeScript, and Tailwind CSS.",
    image: "/projects/project-5.png",
    link: "https://portfolio-riancahyo.vercel.app/",
    github: "https://github.com/Riancahyo/portfolio-website.git",
    techStack: [
      { name: "Next.js", icon: "/skills/next.png" },
      { name: "TypeScript", icon: "/skills/ts.png" },
      { name: "Tailwind CSS", icon: "/skills/tailwind.png" },
    ]
  },
  {
    id: "ai-financial-assistant",
    title: "AI Financial Assistant",
    description:
      "An AI-powered personal finance application built with React. Helps users manage their finances smartly by analyzing spending patterns, providing financial insights, and generating automatic budget recommendations. Includes expense tracking, financial planning, and interactive chart visualizations.",
    image: "/projects/project-2.png",
    link: "https://keuangan-balqis.vercel.app/",
    github: "https://github.com/Riancahyo/web_finance.git",
    techStack: [
      { name: "React", icon: "/skills/react.png" },
      { name: "TypeScript", icon: "/skills/ts.png" },
      { name: "Tailwind CSS", icon: "/skills/tailwind.png" },
    ]
  },
  {
    id: "bimbel-management-system",
    title: "Bimbel Management System",
    description:
      "A full-stack tutoring center management system built with Node.js. Features include student and teacher management, automated class scheduling, payment tracking, student progress reports, and a real-time attendance system.",
    image: "/projects/project-4.png",
    link: "#",
    github: "https://github.com/Riancahyo/scheduling.git",
    techStack: [
      { name: "Laravel", icon: "/skills/laravel.png" },
      { name: "MySQL", icon: "/skills/mysql.png" },
    ]
  },
] as const;

export const NAV_LINKS = [
  {
    key: "home",
    title: "Home",
    link: "#home",
  },
  {
    key: "about",
    title: "About me",
    link: "#about-me",
  },
  {
    key: "skills",
    title: "Skills",
    link: "#skills",
  },
  {
    key: "projects",
    title: "Projects",
    link: "#projects",
  },
  {
    key: "achievements",
    title: "Achievements",
    link: "#achievements",
  },
  {
    key: "smartTalk",
    title: "Smart Talk",
    link: "#smart-talk",
  },
  {
    key: "contact",
    title: "Contact",
    link: "#contact",
  },
] as const;

export const ACHIEVEMENTS_DATA = [
  {
    id: "bnsp-certified-junior-web-developer",
    title: "BNSP Certified Junior Web Developer",
    description: "Official National Competency Certification in Web Development from BNSP Indonesia",
    year: "2024",
    image: "/achievements/achievement-1.jpg",
  },
  {
    id: "fullstack-programming",
    title: "Fullstack Programming",
    description: "Completed comprehensive Fullstack Programming course via Udemy & BISA AI Academy",
    year: "2025",
    image: "/achievements/achievement-2.jpg",
  },
  {
    id: "junior-web-developer-vsga",
    title: "Junior Web Developer - VSGA",
    description: "Vocational School Graduate Academy participant by Kominfo (Digital Talent Scholarship)",
    year: "2024",
    image: "/achievements/achievement-3.png",
  },
  {
    id: "database-foundations-specialist",
    title: "Database Foundations Specialist",
    description: "Completed intensive training in Database Foundations through Oracle Academy and TSA Kominfo",
    year: "2024",
    image: "/achievements/achievement-4.png",
  },
  {
    id: "ai-productivity-api-integration",
    title: "AI Productivity & API Integration",
    description: "Learned to build AI-powered chatbots and integrate AI APIs at Hacktiv8 Indonesia",
    year: "2025",
    image: "/achievements/achievement-5.png",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "Actively participated in UI/UX Design training program with dibimbing.id",
    year: "2023",
    image: "/achievements/achievement-6.png",
  },
  {
    id: "ai-fundamentals-certified",
    title: "AI Fundamentals Certified",
    description: "Earned 'Belajar Dasar AI' certification from Dicoding Academy",
    year: "2025",
    image: "/achievements/achievement-7.png",
  },
  {
    id: "cloud-gen-ai-on-aws",
    title: "Cloud & Gen AI on AWS",
    description: "Certified in Cloud Fundamentals and Generative AI on AWS through Dicoding",
    year: "2025",
    image: "/achievements/achievement-8.png",
  },
  {
    id: "alibaba-cloud-certified-associate",
    title: "Alibaba Cloud Certified Associate",
    description: "Professional international certification for Cloud Computing from Alibaba Cloud",
    year: "2024",
    image: "/achievements/achievement-9.png",
  },
  {
    id: "cloud-networking-administration",
    title: "Cloud & Networking Administration",
    description: "Completed Fundamentals of Cloud and Networking for Digital Entrepreneurs at DEA Kominfo",
    year: "2024",
    image: "/achievements/achievement-10.png",
  },
  {
    id: "asean-data-science-explorer",
    title: "ASEAN Data Science Explorer",
    description: "Participated in the ADSE 2024 Enablement Session covering SAP Analytics Cloud and SAP Build Apps",
    year: "2024",
    image: "/achievements/achievement-11.png",
  },
  {
    id: "database-foundations-course",
    title: "Database Foundations Course",
    description: "Awarded for satisfactory completion of all coursework in Database Foundations by Oracle Academy",
    year: "2024",
    image: "/achievements/achievement-12.png",
  },
  {
    id: "oracle-database-final-exam",
    title: "Oracle Database Final Exam",
    description: "Successfully completed the Database Foundations course final exam from Oracle Academy",
    year: "2024",
    image: "/achievements/achievement-13.png",
  },
];
export const TIMELINE_DATA = [
  {
    id: "inka-it-intern",
    title: "IT Planning & Transformation Intern",
    org: "PT Industri Kereta Api (Persero)",
    type: "internship",
    startDate: "2026-07",
    endDate: null,
  },
  {
    id: "reparasi-jiwa-intern",
    title: "Full Stack Developer Intern",
    org: "Reparasi Jiwa Indonesia",
    type: "internship",
    startDate: "2026-07",
    endDate: null,
  },
  {
    id: "kreasi-bali-sasmita-intern",
    title: "Full Stack Developer Intern",
    org: "PT Kreasi Bali Sasmita",
    type: "internship",
    startDate: "2026-02",
    endDate: "2026-07",
  },
  {
    id: "dicoding-community-builder",
    title: "Community Builder",
    org: "Dicoding Indonesia (Giterpal)",
    type: "community",
    startDate: "2025-11",
    endDate: "2026-07",
  },
  {
    id: "hmtrpl-coordinator",
    title: "Coordinator of Domestic Affairs Division",
    org: "Himpunan Mahasiswa Teknologi Rekayasa Perangkat Lunak",
    type: "organization",
    startDate: "2025-01",
    endDate: "2026-01",
  },
  {
    id: "pkm-pengabdian-dosen",
    title: "Community Service Project Team Member",
    org: "PKM Pengabdian Dosen, Politeknik Negeri Madiun",
    type: "volunteer",
    startDate: "2024-07",
    endDate: "2024-10",
  },
  {
    id: "vsga-junior-web-developer",
    title: "Junior Web Developer Trainee",
    org: "BPSDMP KOMINFO Surabaya (VSGA)",
    type: "training",
    startDate: "2024-07",
    endDate: "2024-07",
  },
  {
    id: "novo-club-member",
    title: "Member",
    org: "Novo Club by Paragon Corp",
    type: "organization",
    startDate: "2024-02",
    endDate: "2024-07",
  },
] as const;

export const TESTIMONIALS_DATA = [
  {
    id: "testimonial-1",
    name: "Nama Dosen Pembimbing",
    role: "Dosen Pembimbing Skripsi",
    initials: "DP",
  },
  {
    id: "testimonial-2",
    name: "Nama Rekan Tim",
    role: "Rekan Satu Tim Proyek",
    initials: "RT",
  },
  {
    id: "testimonial-3",
    name: "Nama Klien",
    role: "Klien Freelance",
    initials: "KF",
  },
] as const;