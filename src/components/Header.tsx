'use client';

import LanguageSwitcher from './LanguageSwitcher';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center mb-10">
      <h1 className="text-3xl font-bold">
        <Link href="/">Wikiloc</Link>
      </h1>
      <LanguageSwitcher />
    </header>
  );
}
