"use client";

import { locales } from "@/i18n/routing";
import { useRouter, usePathname } from "../i18n/navigation";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const params = useParams();

  const switchTo = (nextLocale: string) => {
    if (nextLocale === currentLocale) return;

    const segments = pathname.split("/");
    segments[1] = nextLocale;
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: nextLocale }
    );
  };

  return (
    <div className="flex gap-2">
      {locales.map((loc: string) => (
        <button
          key={loc}
          onClick={() => switchTo(loc)}
          className={`px-3 py-1 rounded border ${
            loc === currentLocale
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600"
          }`}
        >
          {loc}
        </button>
      ))}
    </div>
  );
}
