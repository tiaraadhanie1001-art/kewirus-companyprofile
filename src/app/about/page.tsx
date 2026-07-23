import { teamMembers } from "@/data/teamData";

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
            Tentang Kami
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Membangun masa depan digital dengan integritas, inovasi, dan keahlian rekayasa terbaik.
          </p>
        </div>

        {/* Company Info */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Siapa Kewirus Software?
            </h2>
            <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
              Kewirus Software House didirikan dengan satu misi: membantu pelaku usaha dan organisasi dari berbagai skala bertransformasi secara digital secara mulus. Kami berfokus pada kualitas kode, desain yang intuitif, dan performa aplikasi yang optimal.
            </p>
            <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
              Kami percaya bahwa teknologi terbaik adalah teknologi yang dapat memecahkan masalah nyata bagi penggunanya secara andal. Tim kami terdiri dari pengembang senior, perancang UI/UX berpengalaman, dan manajer proyek yang berdedikasi tinggi.
            </p>
          </div>
          
          <div className="rounded-2xl bg-zinc-50 p-8 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Visi & Misi</h3>
            <div className="mt-4 space-y-4">
              <div>
                <h4 className="font-semibold text-blue-600 dark:text-blue-400">Visi Kami</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                  Menjadi software house terkemuka di Asia Tenggara yang dikenal karena keunggulan rekayasa perangkat lunak dan komitmen tinggi terhadap kepuasan klien.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-600 dark:text-blue-400">Misi Kami</h4>
                <ul className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 list-disc pl-5 space-y-1">
                  <li>Memberikan solusi perangkat lunak kustom yang berkualitas tinggi dan skalabel.</li>
                  <li>Memprioritaskan pengalaman pengguna yang luar biasa pada setiap produk.</li>
                  <li>Menjaga komunikasi yang transparan dan kolaboratif dengan semua partner.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Tim Kami</h2>
            <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
              Orang-orang berbakat di balik solusi teknologi canggih Anda.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center rounded-2xl border border-zinc-200 bg-white p-6 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
              >
                {/* Image Placeholder */}
                <div className="h-24 w-24 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-400 dark:text-zinc-500 font-bold text-xl border border-zinc-200 dark:border-zinc-800">
                  {member.name.charAt(0)}
                </div>
                <h3 className="mt-4 text-lg font-bold text-zinc-900 dark:text-white">{member.name}</h3>
                <p className="text-sm text-blue-600 dark:text-blue-400">{member.role}</p>
                <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400 line-clamp-3">{member.bio}</p>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 text-sm font-semibold text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    LinkedIn ↗
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
