export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  client: string;
  year: string;
  technologies: string[];
  image: string;
  details: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "e-commerce-platform",
    title: "E-Commerce Enterprise Platform",
    category: "Web Development",
    description: "Platform e-commerce modern dengan fitur integrasi pembayaran lokal, manajemen inventaris real-time, dan optimasi SEO tingkat tinggi.",
    client: "PT Maju Bersama Retail",
    year: "2025",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Node.js", "PostgreSQL"],
    image: "/images/portfolio/ecommerce.jpg",
    details: "Kami berhasil mengembangkan platform e-commerce tangguh yang mampu menangani lebih dari 10.000 transaksi harian dengan tingkat uptime 99.9%. Fitur unggulan mencakup checkout 1-klik, kalkulasi ongkos kirim otomatis, dan dashboard admin intuitif."
  },
  {
    id: "health-tracking-app",
    title: "Health & Fitness Tracker Mobile App",
    category: "Mobile App Development",
    description: "Aplikasi kesehatan mobile untuk memantau kalori, langkah kaki, detak jantung, serta menyediakan konsultasi dokter online secara instan.",
    client: "Medika Utama Digital",
    year: "2025",
    technologies: ["React Native", "Expo", "Redux Toolkit", "Firebase", "Express.js"],
    image: "/images/portfolio/healthapp.jpg",
    details: "Aplikasi ini dirancang dengan antarmuka yang ramah pengguna dan terintegrasi dengan perangkat smartwatch Apple Health dan Google Fit. Diunduh oleh lebih dari 50.000 pengguna dalam 3 bulan pertama."
  },
  {
    id: "hris-saas-dashboard",
    title: "HRIS & Payroll SaaS Dashboard",
    category: "UI/UX Design & Development",
    description: "Sistem informasi sumber daya manusia (HRIS) berbasis web untuk pencatatan absensi, pengajuan cuti, dan otomatisasi slip gaji karyawan.",
    client: "Sinergi Karyawan Global",
    year: "2024",
    technologies: ["Next.js", "Tailwind CSS", "shadcn/ui", "Prisma", "MySQL"],
    image: "/images/portfolio/hris.jpg",
    details: "Proyek ini mencakup perancangan ulang UI/UX dari sistem lama (legacy) yang kaku menjadi dashboard modern yang interaktif, mengurangi waktu pemrosesan payroll bulanan HR hingga 60%."
  }
];
