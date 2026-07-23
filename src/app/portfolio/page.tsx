import Link from "next/link";
import { portfolioItems } from "@/data/portfolioData";

export default function PortfolioPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
            Portofolio Kami
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Kumpulan proyek pilihan yang sukses dikerjakan untuk klien dan partner kami.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          {portfolioItems.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Visual Placeholder */}
              <div className="relative aspect-video w-full bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 flex items-center justify-center border-b border-zinc-200 dark:border-zinc-800">
                <span className="text-sm font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                  {project.category}
                </span>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  Klien: {project.client} ({project.year})
                </span>
                <h2 className="mt-3 text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  <Link href={`/portfolio/${project.id}`}>{project.title}</Link>
                </h2>
                <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400 flex-grow">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-900">
                  <Link
                    href={`/portfolio/${project.id}`}
                    className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Pelajari Studi Kasus <span aria-hidden="true" className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
