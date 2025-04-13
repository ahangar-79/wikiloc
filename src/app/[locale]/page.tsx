// app/page.tsx
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
            ورود
          </Link>
          <Link href="/register" className="text-blue-600 hover:underline">
            ثبت‌نام
          </Link>
        </nav>
      </header>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">به Wikiloc خوش اومدی 👋</h2>
        <p className="text-gray-600">مسیرهای طبیعت‌گردی، دوچرخه‌سواری و کوهنوردی رو کشف کن و مسیر خودتو ثبت کن.</p>
      </section>

      <section className="mb-10">
        <Link
          href="/create"
          className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          ➕ افزودن مسیر جدید
        </Link>
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-3">آخرین مسیرها</h3>
        <ul className="space-y-4">
          {[1, 2, 3].map((id) => (
            <li key={id} className="border p-4 rounded shadow-sm hover:shadow-md transition">
              <Link href={`/routes/${id}`} className="block text-blue-700 font-medium hover:underline">
                مسیر شماره {id}
              </Link>
              <p className="text-sm text-gray-500">توضیح کوتاه مسیر {id}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
