'use client';

import { usePathname, useRouter } from 'next/navigation';
import { locales, localeNames } from '../i18n/routing';
import { useLocale } from 'next-intl';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const switchTo = (nextLocale: string) => {
    if (nextLocale === currentLocale) return;

    const segments = pathname.split('/');
    segments[1] = nextLocale;
    router.push(segments.join('/'));
  };

  return (
    <div className="flex gap-2">
      {locales.map((loc: any) => (
        <button
          key={loc}
          onClick={() => switchTo(loc)}
          className={`px-3 py-1 rounded border ${
            loc === currentLocale ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'
          }`}
        >
          {localeNames[loc]}
        </button>
      ))}
    </div>
  );
}
