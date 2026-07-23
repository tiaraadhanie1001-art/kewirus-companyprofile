import { notFound } from "next/navigation";
import { portfolioItems } from "@/data/portfolioData";
import Link from "next/link";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = portfolioItems.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/portfolio"
          className="inline-flex items-center text-sm font-semibold text-zinc-500 hover:text-blue-600 dark:hover:text-blue-400 mb-8"
        >
          ← Kembali ke Portofolio
        </Link>

        {/* Category & Title */}
        <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-950/30 dark:text-blue-400">
          {project.category}
        </span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
          {project.title}
        </h1>

        {/* Project Metadata Table */}
        <div className="mt-8 grid grid-cols-2 gap-4 border-y border-zinc-200 py-6 dark:border-zinc-800 sm:grid-cols-4">
          <div>
            <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Klien</p>
            <p className="mt-1 text-sm font-medium text-zinc-900 dark:text-white">{project.client}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Tahun</p>
            <p className="mt-1 text-sm font-medium text-zinc-900 dark:text-white">{project.year}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Kategori</p>
            <p className="mt-1 text-sm font-medium text-zinc-900 dark:text-white">{project.category}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Status</p>
            <p className="mt-1 text-sm font-medium text-green-600 dark:text-green-400">Selesai / Sukses</p>
          </div>
        </div>

        {/* Visual Mockup Box */}
        <div className="mt-12 aspect-video w-full rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
          <p className="text-zinc-400 dark:text-zinc-500 text-sm font-semibold">Tampilan Utama Proyek</p>
        </div>

        {/* Details & Tech Stack */}
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Deskripsi Proyek & Solusi</h2>
            <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed whitespace-pre-line">
              {project.details}
            </p>
          </div>
          <div className="rounded-2xl bg-zinc-50 p-6 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 h-fit">
            <h3 className="text-base font-bold text-zinc-900 dark:text-white">Teknologi yang Digunakan</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-xs font-semibold text-zinc-700 shadow-sm border border-zinc-200 dark:bg-zinc-900 dark:text-zinc-300 dark:border-zinc-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
