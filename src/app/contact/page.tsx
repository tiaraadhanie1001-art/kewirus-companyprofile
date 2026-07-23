"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate API request
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
            Hubungi Kami
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Ada ide proyek digital menarik? Mari bicarakan bersama dan wujudkan solusi terbaik.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Info Card */}
          <div className="flex flex-col justify-between rounded-3xl bg-zinc-50 p-8 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">Info Kontak</h2>
              <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                Silakan hubungi kami melalui salah satu saluran berikut atau kirimkan formulir kontak di samping.
              </p>
              
              <dl className="mt-8 space-y-6">
                <div className="flex gap-x-4">
                  <dt className="text-2xl">📍</dt>
                  <dd>
                    <p className="text-sm font-semibold text-zinc-900 dark:text-white">Alamat Kantor</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">Sudirman Central Business District (SCBD), Jakarta, Indonesia</p>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="text-2xl">📧</dt>
                  <dd>
                    <p className="text-sm font-semibold text-zinc-900 dark:text-white">Email</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">info@kewirus-software.com</p>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="text-2xl">📞</dt>
                  <dd>
                    <p className="text-sm font-semibold text-zinc-900 dark:text-white">Telepon</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">+62 812-3456-7890</p>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-800">
              <h3 className="text-sm font-bold text-zinc-900 dark:text-white">Jam Operasional</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Senin - Jumat: 09.00 - 18.00 WIB</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl bg-white p-8 border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">Kirim Pesan</h2>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold leading-6 text-zinc-900 dark:text-white">Nama Lengkap</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 dark:bg-zinc-900 dark:text-white dark:ring-zinc-800"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-zinc-900 dark:text-white">Alamat Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 dark:bg-zinc-900 dark:text-white dark:ring-zinc-800"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold leading-6 text-zinc-900 dark:text-white">Subjek</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 dark:bg-zinc-900 dark:text-white dark:ring-zinc-800"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-zinc-900 dark:text-white">Detail Pesan / Kebutuhan Proyek</label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 dark:bg-zinc-900 dark:text-white dark:ring-zinc-800"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex w-full justify-center rounded-full bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 disabled:bg-blue-400"
                >
                  {status === "loading" ? "Mengirim..." : "Kirim Pesan"}
                </button>
              </div>

              {status === "success" && (
                <p className="text-sm font-semibold text-green-600 dark:text-green-400 text-center mt-4">
                  ✓ Pesan berhasil terkirim! Kami akan menghubungi Anda segera.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
