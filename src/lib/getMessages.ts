import { notFound } from 'next/navigation';
import { locales } from '@/i18n';

export async function getMessages(locale: string) {
  // اطمینان حاصل کن که locales به صورت as const تعریف شده
  if (!locales.includes(locale as (typeof locales)[number])) notFound();

  const messages = (await import(`@/messages/${locale}.json`)).default;
  return messages;
}
