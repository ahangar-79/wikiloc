'use client';

import { useTranslations } from "next-intl";
import Link from "next/link";
import '../../styles/global.css'
import { Button } from "@/components/ui/button";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <main className="min-h-screen bg-white text-gray-800 p-6">
      <header className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-bold">{t("name")}</h1>
        <nav className="space-x-4">
          <Link href="/login" className="text-blue-600 hover:underline">
            {t("login")}
          </Link>
          <Link href="/register" className="text-blue-600 hover:underline">
            {t("register")}
          </Link>
        </nav>
      </header>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2"> {t("welcome")}👋</h2>
        <p className="text-gray-600">{t("description")}</p>
      </section>

      <section className="mb-10">
        <Link
          href="/create"
          className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
            {t("addRoute")}
        </Link>
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-3">{t("lastRoutes")}</h3>
        <ul className="space-y-4">
          {[1, 2, 3].map((id) => (
            <li key={id} className="border p-4 rounded shadow-sm hover:shadow-md transition">
              <Link href={`/routes/${id}`} className="block text-blue-700 font-medium hover:underline">
                {t("routeTitle")} {id}
              </Link>
              <p className="text-sm text-gray-500">{t("routeDescription")} {id}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}