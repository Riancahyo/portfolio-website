export type Language = "en" | "id";

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About me",
      skills: "Skills",
      projects: "Projects",
      achievements: "Achievements",
      smartTalk: "Smart Talk",
      contact: "Contact",
      connect: "Connect With Me",
      rights: "All rights reserved",
    },
    hero: {
      badge: "Full Stack Developer Portfolio",
      titleLine1: "Building powerful applications",
      titleLine2: "from frontend to backend.",
      description:
        "Hi! I'm a Full Stack Developer who loves creating scalable, high-performance web applications. I work with React, Next.js, TypeScript, Laravel, Node.js, and more.",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
    },
    about: {
      heading: "About Me",
      greeting: "Hi! I'm",
      paragraph1:
        "A passionate Full Stack Developer and a 7th-semester student of Technology of Software Engineering at Politeknik Negeri Madiun. I love building complete web applications from crafting beautiful user interfaces to developing powerful backend services. Turning ideas into real, scalable products is what drives me.",
      paragraph2:
        "My tech stack includes React, Next.js, TypeScript, Laravel, Node.js, Express.js, and databases like MySQL & PostgreSQL. Always learning, building, and continually improving my craft.",
      yearsExp: "Years Exp",
      projects: "Projects",
      contactMe: "Contact Me",
      downloadCv: "Download CV",
    },
    skills: {
      heading: "Skills",
    },
    projectsSection: {
      heading: "My Projects",
      subtitle: "Here are some of my recent projects showcasing my fullstack development skills.",
      demo: "Demo",
      code: "Code",
      showLess: "Show Less",
      viewAll: "View All",
    },
    achievements: {
      heading: "My Achievements",
      subtitle: "Milestones and accomplishments throughout my journey",
      viewDetails: "View Details",
      showLess: "Show Less",
      viewAll: "View All",
    },
    contact: {
      heading: "Get In Touch",
      subtitle: "Have a project in mind? Let's work together!",
      infoHeading: "Contact Information",
      email: "Email",
      phone: "Phone",
      location: "Location",
      locationValue: "Ngawi, East Java, Indonesia",
      followMe: "Follow Me",
      nameLabel: "Your Name *",
      emailLabel: "Your Email *",
      subjectLabel: "Subject *",
      subjectPlaceholder: "Project Inquiry",
      messageLabel: "Message *",
      messagePlaceholder: "Tell me about your project...",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully!",
      errorInvalidEmail: "Please enter a valid email address.",
      errorShortMessage: "Message must be at least 10 characters long.",
      errorConfigMissing: "Configuration missing. Please try again later.",
      errorSendFailed: "Failed to send message. Please check your connection or try again.",
      errorTurnstile: "Please complete the security verification before sending.",
    },
    smartTalk: {
      heading: "Smart Talk AI",
      subtitle: "Chat with AI to learn more about me, my skills, and experience",
      greeting:
        "Hi! I'm an AI assistant. Ask me anything about Rian Cahyo, his skills, projects, or certifications!",
      tryAsking: "Try asking:",
      placeholder: "Ask me anything...",
      send: "Send",
      apiKeyMissing: "Please configure your Gemini API key in the .env.local file",
      unknownError: "Unknown error",
      questions: [
        "What are your main skills?",
        "Tell me about your certifications",
        "What's your experience?",
        "Show me your projects",
      ],
    },
    themeToggle: {
      switchToLight: "Switch to light mode",
      switchToDark: "Switch to dark mode",
    },
    notFound: {
      title: "Page Not Found",
      description: "The page you're looking for doesn't exist or has been moved.",
      backHome: "Back to Home",
    },
    timeline: {
      heading: "My Journey",
      subtitle: "Organizations, internships, and volunteer projects along the way",
      present: "Present",
    },
    testimonials: {
      heading: "What People Say",
      subtitle: "Feedback from advisors, teammates, and clients I've worked with",
      addYours: "Leave a Recommendation",
    },
    testimonialForm: {
      title: "Leave a Recommendation",
      description: "Worked with me? Share a few words",
      nameLabel: "Your Name *",
      roleLabel: "Your Role *",
      rolePlaceholder: "e.g. Thesis Advisor, Teammate, Client",
      emailLabel: "Your Email *",
      emailHint: "Not published, only used so I can verify and reply if needed.",
      messageLabel: "Your Recommendation *",
      messagePlaceholder: "Share your experience working with me...",
      submit: "Send Recommendation",
      sending: "Sending...",
      success: "Thank you! Your recommendation has been sent.",
      errorShortMessage: "Please write at least 20 characters.",
      errorInvalidEmail: "Please enter a valid email address.",
      errorTurnstile: "Please complete the security verification before sending.",
      errorConfigMissing: "Configuration missing. Please try again later.",
      errorSendFailed: "Failed to send. Please check your connection or try again.",
      close: "Close",
    },
    lightbox: {
      close: "Close",
      previous: "Previous",
      next: "Next",
    },
  },
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang Saya",
      skills: "Keahlian",
      projects: "Proyek",
      achievements: "Pencapaian",
      smartTalk: "Smart Talk",
      contact: "Kontak",
      connect: "Terhubung Dengan Saya",
      rights: "Seluruh hak cipta dilindungi",
    },
    hero: {
      badge: "Portofolio Full Stack Developer",
      titleLine1: "Membangun aplikasi yang tangguh",
      titleLine2: "dari frontend hingga backend.",
      description:
        "Hai! Saya seorang Full Stack Developer yang senang membangun aplikasi web yang scalable dan berperforma tinggi. Saya bekerja dengan React, Next.js, TypeScript, Laravel, Node.js, dan lainnya.",
      viewProjects: "Lihat Proyek",
      contactMe: "Hubungi Saya",
    },
    about: {
      heading: "Tentang Saya",
      greeting: "Hai! Saya",
      paragraph1:
        "Seorang Full Stack Developer yang bersemangat dan mahasiswa semester 7 Teknologi Rekayasa Perangkat Lunak di Politeknik Negeri Madiun. Saya suka membangun aplikasi web secara menyeluruh, mulai dari merancang antarmuka yang menarik hingga mengembangkan layanan backend yang andal. Mengubah ide menjadi produk nyata dan scalable adalah hal yang memotivasi saya.",
      paragraph2:
        "Tech stack saya meliputi React, Next.js, TypeScript, Laravel, Node.js, Express.js, serta database seperti MySQL & PostgreSQL. Selalu belajar, membangun, dan terus mengasah kemampuan.",
      yearsExp: "Tahun Pengalaman",
      projects: "Proyek",
      contactMe: "Hubungi Saya",
      downloadCv: "Unduh CV",
    },
    skills: {
      heading: "Keahlian",
    },
    projectsSection: {
      heading: "Proyek Saya",
      subtitle: "Berikut beberapa proyek terbaru saya yang menampilkan kemampuan fullstack development.",
      demo: "Demo",
      code: "Kode",
      showLess: "Tampilkan Lebih Sedikit",
      viewAll: "Lihat Semua",
    },
    achievements: {
      heading: "Pencapaian Saya",
      subtitle: "Tonggak sejarah dan pencapaian sepanjang perjalanan saya",
      viewDetails: "Lihat Detail",
      showLess: "Tampilkan Lebih Sedikit",
      viewAll: "Lihat Semua",
    },
    contact: {
      heading: "Hubungi Saya",
      subtitle: "Punya proyek yang ingin dikerjakan? Ayo bekerja sama!",
      infoHeading: "Informasi Kontak",
      email: "Email",
      phone: "Telepon",
      location: "Lokasi",
      locationValue: "Ngawi, Jawa Timur, Indonesia",
      followMe: "Ikuti Saya",
      nameLabel: "Nama Anda *",
      emailLabel: "Email Anda *",
      subjectLabel: "Subjek *",
      subjectPlaceholder: "Pertanyaan Proyek",
      messageLabel: "Pesan *",
      messagePlaceholder: "Ceritakan tentang proyek Anda...",
      send: "Kirim Pesan",
      sending: "Mengirim...",
      success: "Pesan berhasil terkirim!",
      errorInvalidEmail: "Silakan masukkan alamat email yang valid.",
      errorShortMessage: "Pesan harus terdiri dari minimal 10 karakter.",
      errorConfigMissing: "Konfigurasi belum tersedia. Silakan coba lagi nanti.",
      errorSendFailed: "Gagal mengirim pesan. Periksa koneksi Anda atau coba lagi.",
      errorTurnstile: "Silakan selesaikan verifikasi keamanan terlebih dahulu sebelum mengirim.",
    },
    smartTalk: {
      heading: "Smart Talk AI",
      subtitle: "Ngobrol dengan AI untuk mengenal lebih jauh tentang saya, keahlian, dan pengalaman saya",
      greeting:
        "Hai! Saya asisten AI. Tanyakan apa saja tentang Rian Cahyo, keahliannya, proyek, atau sertifikasinya!",
      tryAsking: "Coba tanyakan:",
      placeholder: "Tanyakan apa saja...",
      send: "Kirim",
      apiKeyMissing: "Silakan atur Gemini API key Anda di file .env.local",
      unknownError: "Terjadi kesalahan yang tidak diketahui",
      questions: [
        "Apa saja keahlian utama Anda?",
        "Ceritakan tentang sertifikasi Anda",
        "Bagaimana pengalaman Anda?",
        "Tunjukkan proyek Anda",
      ],
    },
    themeToggle: {
      switchToLight: "Ganti ke mode terang",
      switchToDark: "Ganti ke mode gelap",
    },
    notFound: {
      title: "Halaman Tidak Ditemukan",
      description: "Halaman yang kamu cari tidak ada atau sudah dipindahkan.",
      backHome: "Kembali ke Beranda",
    },
    timeline: {
      heading: "Perjalanan Saya",
      subtitle: "Organisasi, magang, dan proyek volunteer sepanjang perjalanan",
      present: "Sekarang",
    },
    testimonials: {
      heading: "Kata Mereka",
      subtitle: "Tanggapan dari dosen pembimbing, rekan tim, dan klien yang pernah bekerja sama",
      addYours: "Beri Rekomendasi",
    },
    testimonialForm: {
      title: "Beri Rekomendasi",
      description: "Pernah kerja sama dengan saya? Tuliskan pengalamanmu",
      nameLabel: "Nama Anda *",
      roleLabel: "Peran/Hubungan *",
      rolePlaceholder: "contoh: Dosen Pembimbing, Rekan Tim, Klien",
      emailLabel: "Email Anda *",
      emailHint: "Tidak dipublikasikan, hanya dipakai untuk verifikasi dan balasan bila diperlukan.",
      messageLabel: "Rekomendasi Anda *",
      messagePlaceholder: "Ceritakan pengalaman kerja sama dengan saya...",
      submit: "Kirim Rekomendasi",
      sending: "Mengirim...",
      success: "Terima kasih! Rekomendasi kamu sudah terkirim.",
      errorShortMessage: "Tulisan minimal 20 karakter ya.",
      errorInvalidEmail: "Silakan masukkan alamat email yang valid.",
      errorTurnstile: "Silakan selesaikan verifikasi keamanan terlebih dahulu sebelum mengirim.",
      errorConfigMissing: "Konfigurasi belum tersedia. Silakan coba lagi nanti.",
      errorSendFailed: "Gagal mengirim. Periksa koneksi Anda atau coba lagi.",
      close: "Tutup",
    },
    lightbox: {
      close: "Tutup",
      previous: "Sebelumnya",
      next: "Berikutnya",
    },
  },
} as const;

export const PROJECT_TRANSLATIONS: Record<string, { en: string; id: string }> = {
  "edumind": {
    en: "A school well-being platform that helps schools monitor students' emotional well-being through self-assessment, teacher reflection, professional referrals, and school insights. Built with a responsive interface to support educators in creating a safe and supportive learning environment.",
    id: "Platform kesejahteraan sekolah yang membantu sekolah memantau kesejahteraan emosional siswa melalui self-assessment, refleksi guru, rujukan profesional, dan insight sekolah. Dibangun dengan antarmuka yang responsif untuk mendukung terciptanya lingkungan belajar yang aman dan suportif.",
  },
  "haw-reload": {
    en: "A real-time financial information and point of sale system for managing internet voucher, mobile credit, PPOB product sales, and cash/transfer transactions. Features include shift management, live transaction monitoring via Server-Sent Events (SSE), and financial report export to Excel and PDF.",
    id: "Sistem informasi keuangan dan point of sale real-time untuk mengelola voucher internet, pulsa, penjualan produk PPOB, serta transaksi tunai/transfer. Dilengkapi manajemen shift, pemantauan transaksi secara langsung melalui Server-Sent Events (SSE), dan ekspor laporan keuangan ke Excel dan PDF.",
  },
  "ngopai": {
    en: "A digital education platform built with Next.js for the Ministry of Religious Affairs, East Java (Kemenag Jatim). Key features include activity management, learning materials, participant attendance tracking, and automated certificate generation.",
    id: "Platform edukasi digital yang dibangun dengan Next.js untuk Kementerian Agama Provinsi Jawa Timur (Kemenag Jatim). Fitur utama meliputi manajemen kegiatan, materi pembelajaran, pelacakan kehadiran peserta, dan pembuatan sertifikat otomatis.",
  },
  "paratamu-coffee": {
    en: "A website for a local café built with React and Express.js. Key features include an interactive menu display, facility information, and an online reservation system with room selection.",
    id: "Website untuk sebuah kafe lokal yang dibangun dengan React dan Express.js. Fitur utama meliputi tampilan menu interaktif, informasi fasilitas, dan sistem reservasi online dengan pemilihan ruangan.",
  },
  "ai-career-roadmap": {
    en: "An AI-powered career path platform built with Next.js. Key features include personalized roadmap recommendations, relevant skill suggestions, and learning progress tracking through dynamic visualizations.",
    id: "Platform panduan karier bertenaga AI yang dibangun dengan Next.js. Fitur utama meliputi rekomendasi roadmap yang dipersonalisasi, saran keahlian yang relevan, dan pelacakan progres belajar melalui visualisasi dinamis.",
  },
  "gulaguard": {
    en: "An AI-powered nutrition assistant PWA that helps users track daily sugar intake to reduce diabetes risk. Integrates Google Gemini API for AI-driven food analysis with image-based input for a fast, installable mobile experience.",
    id: "PWA asisten nutrisi bertenaga AI yang membantu pengguna melacak asupan gula harian untuk mengurangi risiko diabetes. Mengintegrasikan Google Gemini API untuk analisis makanan berbasis AI dengan input gambar untuk pengalaman mobile yang cepat dan dapat diinstal.",
  },
  "ebook-library": {
    en: "A digital e-book borrowing system built with Laravel and Livewire for real-time interaction. Features include a digital book catalog, time-limited borrowing system, auto-renewal, reminder notifications, and an admin dashboard for monitoring borrowing activity.",
    id: "Sistem peminjaman e-book digital yang dibangun dengan Laravel dan Livewire untuk interaksi real-time. Fitur meliputi katalog buku digital, sistem peminjaman dengan batas waktu, perpanjangan otomatis, notifikasi pengingat, dan dashboard admin untuk memantau aktivitas peminjaman.",
  },
  "portfolio-website": {
    en: "A personal portfolio website built with Next.js for optimal performance and SEO. Features a project showcase, skills, work experience, and contact information with a modern responsive design using Next.js App Router, TypeScript, and Tailwind CSS.",
    id: "Website portofolio pribadi yang dibangun dengan Next.js untuk performa dan SEO yang optimal. Menampilkan galeri proyek, keahlian, pengalaman kerja, dan informasi kontak dengan desain responsif modern menggunakan Next.js App Router, TypeScript, dan Tailwind CSS.",
  },
  "ai-financial-assistant": {
    en: "An AI-powered personal finance application built with React. Helps users manage their finances smartly by analyzing spending patterns, providing financial insights, and generating automatic budget recommendations. Includes expense tracking, financial planning, and interactive chart visualizations.",
    id: "Aplikasi keuangan pribadi bertenaga AI yang dibangun dengan React. Membantu pengguna mengelola keuangan secara cerdas dengan menganalisis pola pengeluaran, memberikan wawasan keuangan, dan menghasilkan rekomendasi anggaran otomatis. Dilengkapi pelacakan pengeluaran, perencanaan keuangan, dan visualisasi grafik interaktif.",
  },
  "bimbel-management-system": {
    en: "A full-stack tutoring center management system built with Node.js. Features include student and teacher management, automated class scheduling, payment tracking, student progress reports, and a real-time attendance system.",
    id: "Sistem manajemen bimbingan belajar full-stack yang dibangun dengan Node.js. Fitur meliputi manajemen siswa dan pengajar, penjadwalan kelas otomatis, pelacakan pembayaran, laporan progres siswa, dan sistem absensi real-time.",
  },
};

export const ACHIEVEMENT_TRANSLATIONS: Record<string, { en: string; id: string }> = {
  "bnsp-certified-junior-web-developer": {
    en: "Official National Competency Certification in Web Development from BNSP Indonesia",
    id: "Sertifikasi Kompetensi Nasional resmi di bidang Pengembangan Web dari BNSP Indonesia",
  },
  "fullstack-programming": {
    en: "Completed comprehensive Fullstack Programming course via Udemy & BISA AI Academy",
    id: "Menyelesaikan kursus Fullstack Programming yang komprehensif melalui Udemy & BISA AI Academy",
  },
  "junior-web-developer-vsga": {
    en: "Vocational School Graduate Academy participant by Kominfo (Digital Talent Scholarship)",
    id: "Peserta Vocational School Graduate Academy oleh Kominfo (Digital Talent Scholarship)",
  },
  "database-foundations-specialist": {
    en: "Completed intensive training in Database Foundations through Oracle Academy and TSA Kominfo",
    id: "Menyelesaikan pelatihan intensif Database Foundations melalui Oracle Academy dan TSA Kominfo",
  },
  "ai-productivity-api-integration": {
    en: "Learned to build AI-powered chatbots and integrate AI APIs at Hacktiv8 Indonesia",
    id: "Mempelajari cara membangun chatbot bertenaga AI dan mengintegrasikan API AI di Hacktiv8 Indonesia",
  },
  "ui-ux-design": {
    en: "Actively participated in UI/UX Design training program with dibimbing.id",
    id: "Berpartisipasi aktif dalam program pelatihan UI/UX Design bersama dibimbing.id",
  },
  "ai-fundamentals-certified": {
    en: "Earned 'Belajar Dasar AI' certification from Dicoding Academy",
    id: "Meraih sertifikasi 'Belajar Dasar AI' dari Dicoding Academy",
  },
  "cloud-gen-ai-on-aws": {
    en: "Certified in Cloud Fundamentals and Generative AI on AWS through Dicoding",
    id: "Bersertifikat Cloud Fundamentals dan Generative AI on AWS melalui Dicoding",
  },
  "alibaba-cloud-certified-associate": {
    en: "Professional international certification for Cloud Computing from Alibaba Cloud",
    id: "Sertifikasi internasional profesional untuk Cloud Computing dari Alibaba Cloud",
  },
  "cloud-networking-administration": {
    en: "Completed Fundamentals of Cloud and Networking for Digital Entrepreneurs at DEA Kominfo",
    id: "Menyelesaikan Fundamentals of Cloud and Networking for Digital Entrepreneurs di DEA Kominfo",
  },
  "asean-data-science-explorer": {
    en: "Participated in the ADSE 2024 Enablement Session covering SAP Analytics Cloud and SAP Build Apps",
    id: "Berpartisipasi dalam ADSE 2024 Enablement Session yang membahas SAP Analytics Cloud dan SAP Build Apps",
  },
  "database-foundations-course": {
    en: "Awarded for satisfactory completion of all coursework in Database Foundations by Oracle Academy",
    id: "Diberikan atas keberhasilan menyelesaikan seluruh materi Database Foundations oleh Oracle Academy",
  },
  "oracle-database-final-exam": {
    en: "Successfully completed the Database Foundations course final exam from Oracle Academy",
    id: "Berhasil menyelesaikan ujian akhir kursus Database Foundations dari Oracle Academy",
  },
};

export const TIMELINE_TRANSLATIONS: Record<string, { en: string; id: string }> = {
  "inka-it-intern": {
    en: "Interning in IT planning and digital transformation at Indonesia's state-owned train manufacturer.",
    id: "Magang di divisi perencanaan dan transformasi digital IT di pabrikan kereta api milik negara.",
  },
  "reparasi-jiwa-intern": {
    en: "Remote full stack internship, building product features end-to-end.",
    id: "Magang full stack developer secara remote, membangun fitur produk dari ujung ke ujung.",
  },
  "kreasi-bali-sasmita-intern": {
    en: "Built full-stack features, including AI integration, for EduMind AI (a school wellbeing platform) and Parahita LMS (an AI-powered therapist training platform), developing backend APIs with FastAPI, PostgreSQL, and Alembic.",
    id: "Membangun fitur full-stack, termasuk integrasi AI, untuk EduMind AI (platform kesejahteraan sekolah) dan Parahita LMS (platform pelatihan terapis berbasis AI), serta mengembangkan backend API dengan FastAPI, PostgreSQL, dan Alembic.",
  },
  "dicoding-community-builder": {
    en: "Co-founded and grew Giterpal, a Dicoding Community chapter, from 0 to 60+ active members in two months, organizing technical sessions on Git workflows and personal branding.",
    id: "Ikut mendirikan dan mengembangkan Giterpal, komunitas chapter Dicoding, dari 0 menjadi 60+ anggota aktif dalam dua bulan, serta menyelenggarakan sesi teknis seputar Git workflow dan personal branding.",
  },
  "hmtrpl-coordinator": {
    en: "Led the Domestic Affairs Division, supervising 10+ members across 3 internal programs and chairing major department events including the Joint Meeting.",
    id: "Memimpin Divisi Dalam Negeri, membina 10+ anggota di 3 program kerja internal, serta menjadi ketua pelaksana acara besar himpunan seperti Joint Meeting.",
  },
  "pkm-pengabdian-dosen": {
    en: "Helped build a Computer-Based Test (CBT) application for OSN simulation and trained 5+ teachers to adopt digital learning tools.",
    id: "Membantu mengembangkan aplikasi Computer-Based Test (CBT) untuk simulasi OSN dan melatih 5+ guru dalam mengadopsi alat pembelajaran digital.",
  },
  "vsga-junior-web-developer": {
    en: "Completed intensive training under the Vocational School Graduate Academy (VSGA), building and testing responsive web apps with a 4-member team.",
    id: "Menyelesaikan pelatihan intensif Vocational School Graduate Academy (VSGA), membangun dan menguji aplikasi web responsif bersama tim beranggotakan 4 orang.",
  },
  "novo-club-member": {
    en: "Took part in organizational programs focused on collaboration and networking.",
    id: "Berpartisipasi dalam program organisasi yang berfokus pada kolaborasi dan networking.",
  },
};

export const TESTIMONIAL_TRANSLATIONS: Record<string, { en: string; id: string }> = {
  "testimonial-1": {
    en: "Working with Rian on our team project was smooth, he communicates clearly, delivers on time, and always double-checks the details before shipping.",
    id: "Kerja bareng Rian di proyek tim berjalan lancar, komunikasinya jelas, selalu tepat waktu, dan rajin cek ulang detail sebelum rilis.",
  },
  "testimonial-2": {
    en: "We hired Rian for a full-stack feature build and were impressed by how quickly he understood our requirements and turned them into a working product.",
    id: "Kami memakai jasa Rian untuk membangun fitur full-stack dan terkesan dengan kecepatannya memahami kebutuhan kami lalu mewujudkannya jadi produk yang jalan.",
  },
};