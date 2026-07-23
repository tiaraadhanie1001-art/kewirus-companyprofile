import Link from "next/link";
import { services } from "@/data/servicesData";

export default function ServicesPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
            Layanan Kami
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Kami menawarkan layanan rekayasa perangkat lunak berkualitas tinggi untuk membantu menyukseskan visi digital Anda.
          </p>
        </div>

        {/* Detailed Services list */}
        <div className="mx-auto mt-16 max-w-5xl space-y-12">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className={`flex flex-col gap-8 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 md:p-12 lg:flex-row lg:items-center ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1">
                <span className="text-5xl mb-4 block">{service.icon}</span>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white sm:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-8">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
                    Fitur & Solusi Utama:
                  </h4>
                  <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center text-sm text-zinc-600 dark:text-zinc-400">
                        <span className="mr-2 text-blue-600">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-center bg-zinc-50 dark:bg-zinc-900/30 rounded-2xl p-8 border border-zinc-100 dark:border-zinc-800 aspect-video lg:max-w-sm">
                <div className="text-center">
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Mulai proyek untuk</p>
                  <p className="text-lg font-bold text-zinc-900 dark:text-white mt-1">{service.title}</p>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500"
                  >
                    Hubungi Kami
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
