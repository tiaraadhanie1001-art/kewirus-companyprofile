import Link from "next/link";
import { services } from "@/data/servicesData";
import { portfolioItems } from "@/data/portfolioData";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-white py-24 dark:from-zinc-900/30 dark:via-zinc-950 dark:to-zinc-950 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div className="max-w-2xl">
              <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-950/30 dark:text-blue-400">
                Software House & IT Consultant
              </span>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-6xl">
                Mewujudkan Ide Digital Menjadi{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
                  Realita Premium
                </span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                Kami adalah mitra teknologi terpercaya untuk membangun produk digital berkualitas tinggi: Web App, Mobile App, dan UI/UX Design profesional yang dirancang khusus untuk pertumbuhan bisnis Anda.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="/contact"
                  className="rounded-full bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Konsultasi Gratis
                </Link>
                <Link href="/portfolio" className="text-base font-semibold leading-6 text-zinc-950 hover:text-blue-600 dark:text-zinc-50 dark:hover:text-blue-400">
                  Lihat Portofolio <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            
            {/* Visual Element (Glassmorphic Card) */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md rounded-2xl border border-zinc-200/50 bg-white/40 p-8 shadow-2xl backdrop-blur-md dark:border-zinc-800/50 dark:bg-zinc-900/40">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white font-bold">K</span>
                    <div>
                      <h4 className="font-semibold text-zinc-900 dark:text-white">Kewirus Software House</h4>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">Jakarta, Indonesia</p>
                    </div>
                  </div>
                  <hr className="border-zinc-200/50 dark:border-zinc-800/50" />
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-500 dark:text-zinc-400">Project Complete</span>
                      <span className="font-semibold text-zinc-900 dark:text-white">50+ Projects</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-500 dark:text-zinc-400">Client Satisfaction</span>
                      <span className="font-semibold text-zinc-900 dark:text-white">99%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-500 dark:text-zinc-400">Team Expertise</span>
                      <span className="font-semibold text-zinc-900 dark:text-white">Senior Engineers</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-zinc-50 py-24 dark:bg-zinc-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">Layanan Utama Kami</h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Solusi end-to-end terintegrasi untuk mendigitalkan dan mengoptimasi bisnis Anda.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.id}
                className="relative flex flex-col rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{service.title}</h3>
                <p className="mt-2 flex-grow text-zinc-600 dark:text-zinc-400">{service.description}</p>
                <ul className="mt-6 space-y-2">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zinc-500 dark:text-zinc-400">
                      <span className="mr-2 text-blue-600">✓</span> {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Highlight Section */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">Hasil Karya Terbaru</h2>
              <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                Kumpulan proyek sukses yang telah kami selesaikan untuk membantu partner kami bertumbuh secara digital.
              </p>
            </div>
            <Link
              href="/portfolio"
              className="mt-6 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 md:mt-0"
            >
              Lihat Semua Proyek <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            {portfolioItems.map((project) => (
              <div
                key={project.id}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
              >
                {/* Fallback box styling since we don't have local images yet */}
                <div className="relative aspect-video w-full bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 flex items-center justify-center">
                  <span className="text-sm font-semibold text-zinc-400 dark:text-zinc-500">{project.category}</span>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    {project.client}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    <Link href={`/portfolio/${project.id}`}>
                      {project.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 dark:bg-blue-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Siap Mewujudkan Aplikasi Impian Anda?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Hubungi kami sekarang untuk sesi konsultasi gratis selama 30 menit dan mari diskusikan kebutuhan perangkat lunak Anda.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Mulai Diskusi Sekarang
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
