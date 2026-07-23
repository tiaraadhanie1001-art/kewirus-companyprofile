import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Logo / Deskripsi */}
          <div className="space-y-4">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-xl font-bold tracking-tight text-transparent dark:from-blue-400 dark:to-indigo-400">
              Kewirus Software
            </span>
            <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              Solusi rekayasa perangkat lunak premium untuk mewujudkan transformasi digital bisnis Anda dengan performa terbaik.
            </p>
          </div>

          {/* Links */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-100">Navigasi</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/about" className="text-sm leading-6 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
                      Tentang Kami
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-sm leading-6 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
                      Layanan
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio" className="text-sm leading-6 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
                      Portofolio
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-100">Layanan Kami</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">Web Development</li>
                  <li className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">Mobile Apps</li>
                  <li className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">UI/UX Design</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-100">Kontak & Lokasi</h3>
              <ul role="list" className="mt-6 space-y-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                <li>📍 Jakarta, Indonesia</li>
                <li>📧 info@kewirus-software.com</li>
                <li>📞 +62 812-3456-7890</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
          <p className="text-xs leading-5 text-zinc-500 dark:text-zinc-500 text-center">
            &copy; {currentYear} Kewirus Software House. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
