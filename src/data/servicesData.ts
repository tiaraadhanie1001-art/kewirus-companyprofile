export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "web-dev",
    title: "Web Development",
    description: "Kami membangun website modern, cepat, aman, dan ramah SEO dengan menggunakan teknologi terbaru seperti React, Next.js, dan Tailwind CSS.",
    icon: "🌐",
    features: ["Single Page Application (SPA)", "E-Commerce Integration", "Content Management System (CMS)", "PWA (Progressive Web Apps)"]
  },
  {
    id: "mobile-dev",
    title: "Mobile App Development",
    description: "Pembuatan aplikasi mobile (iOS & Android) yang responsif dan berkinerja tinggi menggunakan React Native atau Flutter.",
    icon: "📱",
    features: ["Android & iOS Development", "Cross-Platform Apps", "Offline-First Capability", "App Store & Play Store Deployment"]
  },
  {
    id: "uiux-design",
    title: "UI/UX Design",
    description: "Desain antarmuka pengguna yang intuitif dan menarik untuk memastikan pengguna mendapatkan pengalaman terbaik saat menggunakan produk Anda.",
    icon: "🎨",
    features: ["User Research", "Wireframing & Prototyping", "User Interface (UI) Design", "Usability Testing"]
  },
  {
    id: "it-consulting",
    title: "IT Consulting & Cloud",
    description: "Layanan konsultasi arsitektur IT, migrasi cloud, keamanan data, dan optimalisasi performa infrastruktur server Anda.",
    icon: "☁️",
    features: ["AWS/GCP/Azure Setup", "CI/CD Implementation", "Security Audit", "Infrastructure as Code"]
  }
];
