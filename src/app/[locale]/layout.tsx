import {NextIntlClientProvider} from 'next-intl';
import '../../styles/global.css';
// import {routing} from '@/i18n/routing';
 
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  const direction = locale === 'fa' ? 'rtl' : 'ltr';

 
  return (
    <html lang={locale} dir={direction}>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}