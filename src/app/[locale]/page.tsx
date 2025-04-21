import "../../styles/global.css";

import { Fragment } from "react";
import Header from "@/components/Header";
import Link from "next/link";
import SignOutButton from "@/components/signout-button";
import { auth } from "@/auth";
import { getTranslations } from "next-intl/server";

// eslint-disable-next-line
export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: "HomePage" });
  // const t = useTranslations("HomePage");
  const session = await auth();

  return (
    <main className="min-h-screen bg-white text-gray-800 p-6">
      <header className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-bold">{t("name")}</h1>
        <nav className="space-x-4 rtl:space-x-reverse">
          {session?.user ? (
            <SignOutButton />
          ) : (
            <Fragment>
              <Link
                href="/api/auth/signin"
                className="text-blue-600 hover:underline"
              >
                {t("login")}
              </Link>
              <span className="mx-2">/</span>
              <Link href="/register" className="text-blue-600 hover:underline">
                {t("register")}
              </Link>
            </Fragment>
          )}
        </nav>
      </header>

      <Header />

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2"> {t("welcome")}👋</h2>
        <p className="text-gray-600">{t("description")}</p>
      </section>

      <section className="mb-10">
        <Link
          href={`/create`}
          className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          {t("addRoute")}
        </Link>
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-3">{t("lastRoutes")}</h3>
        <ul className="space-y-4">
          {[1, 2, 3].map((id) => (
            <li
              key={id}
              className="border p-4 rounded shadow-sm hover:shadow-md transition"
            >
              <Link
                href={`/routes/${id}`}
                className="block text-blue-700 font-medium hover:underline"
              >
                {t("routeTitle")} {id}
              </Link>
              <p className="text-sm text-gray-500">
                {t("routeDescription")} {id}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

//
