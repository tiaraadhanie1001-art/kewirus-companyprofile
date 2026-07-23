export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Ahmad Fauzi",
    role: "CEO & Founder",
    image: "/images/team/ceo.jpg",
    bio: "Berpengalaman lebih dari 10 tahun di industri software engineering dan manajemen bisnis digital.",
    linkedin: "https://linkedin.com/in/username"
  },
  {
    name: "Tiara Adhanie",
    role: "Chief Technology Officer (CTO)",
    image: "/images/team/cto.jpg",
    bio: "Pakar arsitektur cloud dan pengembangan perangkat lunak skala besar. Fokus pada skalabilitas sistem.",
    linkedin: "https://linkedin.com/in/username"
  },
  {
    name: "Budi Santoso",
    role: "Lead UI/UX Designer",
    image: "/images/team/designer.jpg",
    bio: "Memiliki hasrat kuat untuk menciptakan desain produk yang berpusat pada pengguna (user-centered design).",
    linkedin: "https://linkedin.com/in/username"
  },
  {
    name: "Lia Mariana",
    role: "Senior Full-Stack Developer",
    image: "/images/team/developer.jpg",
    bio: "Ahli dalam Next.js, React Native, dan perancangan API yang efisien serta aman.",
    linkedin: "https://linkedin.com/in/username"
  }
];
