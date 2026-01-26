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
    title: "AI Career Roadmap",
    description:
      "Platform jalur karir berbasis AI yang dibangun dengan React Next.js. Fitur utamanya mencakup rekomendasi roadmap personal, saran skill relevan, dan pelacakan progres belajar melalui visualisasi dinamis.",
    image: "/projects/project-1.png",
    link: "https://career-roadmap-dev.vercel.app/",
    github: "https://github.com/Riancahyo/career-roadmap.git",
    techStack: [
      { name: "Next.js", icon: "/skills/next.png" },
      { name: "React", icon: "/skills/react.png" },
      { name: "TypeScript", icon: "/skills/ts.png" },
      { name: "Tailwind CSS", icon: "/skills/tailwind.png" },
    ]
  },
  {
    title: "E-Book Library",
    description:
      "Sistem peminjaman e-book digital yang dibangun dengan Laravel dan Livewire untuk interaksi real-time. Platform ini menyediakan fitur katalog buku digital, sistem peminjaman dengan batas waktu, perpanjangan otomatis, notifikasi reminder, dan dashboard admin untuk monitoring aktivitas peminjaman. Livewire memberikan pengalaman user yang dinamis tanpa reload halaman.",
    image: "/projects/project-3.png",
    link: "#",
    github: "https://github.com/Riancahyo/Books.git",
    techStack: [
      { name: "Laravel", icon: "/skills/laravel.png" },
      { name: "Livewire", icon: "/skills/livewire.png" },
      { name: "MySQL", icon: "/skills/mysql.png" },
      { name: "React", icon: "/skills/react.png" },
    ]
  },
  {
    title: "Portfolio Website",
    description:
      "Website portfolio personal yang dibangun dengan Next.js untuk performa optimal dan SEO-friendly. Menampilkan project showcase, skills, pengalaman kerja, dan informasi kontak dengan desain modern dan responsive. Menggunakan Next.js App Router, TypeScript untuk type safety, dan Tailwind CSS untuk styling yang efisien dan konsisten.",
    image: "/projects/project-5.png",
    link: "https://link-project-kamu.com",
    github: "https://github.com",
    techStack: [
      { name: "Next.js", icon: "/skills/next.png" },
      { name: "React", icon: "/skills/react.png" },
      { name: "TypeScript", icon: "/skills/ts.png" },
      { name: "Tailwind CSS", icon: "/skills/tailwind.png" },
    ]
  },
  {
    title: "AI Financial Assistant",
    description:
      "Aplikasi keuangan berbasis AI yang dibangun dengan React. Membantu pengguna mengelola keuangan pribadi dengan smart menggunakan artificial intelligence untuk menganalisis pola pengeluaran, memberikan insight keuangan, dan rekomendasi budget otomatis. Dilengkapi fitur expense tracking, financial planning, dan visualisasi data keuangan yang komprehensif dengan chart interaktif.",
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
    title: "Bimbel Management System",
    description:
      "Sistem manajemen bimbingan belajar full stack yang dibangun dengan Node.js. Fitur mencakup manajemen siswa dan pengajar, penjadwalan kelas otomatis, tracking pembayaran, laporan progress siswa, dan sistem absensi real-time. Menggunakan Node.js untuk backend API yang cepat dan scalable dengan arsitektur modern untuk performa optimal.",
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
    title: "Home",
    link: "#home",
  },
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Achievements",
    link: "#achievements",
  },
  {
    title: "Smart Talk",
    link: "#smart-talk",
  },
  {
    title: "Contact",
    link: "#contact",
  },
] as const;

export const ACHIEVEMENTS_DATA = [
  {
    title: "BNSP Certified Junior Web Developer",
    description: "Official National Competency Certification in Web Development from BNSP Indonesia",
    year: "2024",
    color: "from-purple-500 to-cyan-500",
    image: "/achievements/achievement-1.jpg",
    link: "https://drive.google.com/file/d/1zB9oXv7asvf4O0aFG18gq7V7e38MvK2O/view?usp=sharing",
  },
  {
    title: "Fullstack Programming",
    description: "Completed comprehensive Fullstack Programming course via Udemy & BISA AI Academy",
    year: "2025",
    color: "from-purple-500 to-cyan-500",
    image: "/achievements/achievement-2.jpg",
    link: "https://drive.google.com/file/d/1Z_7aigEGuekZ27pTOws_V2nEQp7G6Hhn/view?usp=sharing",
  },
  {
    title: "Junior Web Developer - VSGA",
    description: "Vocational School Graduate Academy participant by Kominfo (Digital Talent Scholarship)",
    year: "2024",
    color: "from-purple-500 to-cyan-500",
    image: "/achievements/achievement-3.png",
    link: "https://drive.google.com/file/d/1ilo_QbfZndSLuI9Z-nfUmSN_YGYRkIR8/view?usp=sharing",
  },
  {
    title: "Database Foundations Specialist",
    description: "Completed intensive training in Database Foundations through Oracle Academy and TSA Kominfo",
    year: "2024",
    color: "from-purple-500 to-cyan-500",
    image: "/achievements/achievement-4.png",
    link: "https://drive.google.com/file/d/1k1Yjw8HK1hWMqisQ3WCf36neLookNRMv/view?usp=sharing",
  },
  {
    title: "AI Productivity & API Integration",
    description: "Learned to build AI-powered chatbots and integrate AI APIs at Hacktiv8 Indonesia",
    year: "2025",
    color: "from-purple-500 to-cyan-500",
    image: "/achievements/achievement-5.png",
    link: "https://drive.google.com/file/d/1JSrQu43a9HIg5TC55ESe-PV8EDw2U2US/view?usp=drive_link",
  },
  {
    title: "UI/UX Design",
    description: "Actively participated in UI/UX Design training program with dibimbing.id",
    year: "2023",
    color: "from-purple-500 to-cyan-500",
    image: "/achievements/achievement-6.png",
    link: "https://drive.google.com/file/d/1pLRxvsoygC8oDMkWiDoqOm2bq2__XoBk/view?usp=drive_link",
  },
  {
    title: "AI Fundamentals Certified",
    description: "Earned 'Belajar Dasar AI' certification from Dicoding Academy",
    year: "2025",
    color: "from-purple-500 to-cyan-500",
    image: "/achievements/achievement-7.png",
    link: "https://drive.google.com/file/d/1RmFjG4565mi-LGUjz9lt4Z-QbRk3fYCd/view?usp=sharing",
  },
  {
    title: "Cloud & Gen AI on AWS",
    description: "Certified in Cloud Fundamentals and Generative AI on AWS through Dicoding",
    year: "2025",
    color: "from-purple-500 to-cyan-500",
    image: "/achievements/achievement-8.png",
    link: "https://drive.google.com/file/d/15fMJU25tdxXJKD_HvV8G3ft4zHnO3gIT/view?usp=sharing",
  },
  {
    title: "Alibaba Cloud Certified Associate",
    description: "Professional international certification for Cloud Computing from Alibaba Cloud",
    year: "2024",
    color: "from-purple-500 to-cyan-500",
    image: "/achievements/achievement-9.png",
    link: "https://drive.google.com/file/d/1K7r2f4M2YVrUtcJyunhGFmPP_yGsmB8T/view?usp=drive_link",
  },
  {
    title: "Cloud & Networking Administration",
    description: "Completed Fundamentals of Cloud and Networking for Digital Entrepreneurs at DEA Kominfo",
    year: "2024",
    color: "from-purple-500 to-cyan-500",
    image: "/achievements/achievement-10.png",
    link: "https://drive.google.com/file/d/17EjL3v4lj-U3MGp7SgbAOcqVbwJPIBY0/view?usp=drive_link",
  },
  {
    title: "ASEAN Data Science Explorer",
    description: "Participated in the ADSE 2024 Enablement Session covering SAP Analytics Cloud and SAP Build Apps",
    year: "2024",
    color: "from-purple-500 to-cyan-500",
    image: "/achievements/achievement-11.png",
    link: "https://drive.google.com/file/d/1LJ9E6XpLF9bMrhO2WxVJ9X5_7DYKtTaW/view?usp=drive_link",
  },
  {
    title: "Database Foundations Course",
    description: "Awarded for satisfactory completion of all coursework in Database Foundations by Oracle Academy",
    year: "2024",
    color: "from-purple-500 to-cyan-500",
    image: "/achievements/achievement-12.png",
    link: "https://drive.google.com/file/d/1H-TzmfS2PV58zksy67nK738TWW0zinA9/view?usp=drive_link",
  },
  {
    title: "Oracle Database Final Exam",
    description: "Successfully completed the Database Foundations course final exam from Oracle Academy",
    year: "2024",
    color: "from-purple-500 to-cyan-500",
    image: "/achievements/achievement-13.png",
    link: "https://drive.google.com/file/d/1DunPuW29y6NvYj0pLE_Wt3Lq9-3ODcVg/view?usp=drive_link",
  },
];