import { getRequestConfig } from "next-intl/server";
import { locales } from "./routing";
import { notFound } from "next/navigation";

export default getRequestConfig(async ({ locale = ""  }) => {
  // Typically corresponds to the `[locale]` segment

  // eslint-disable-next-line
  if (!locales.includes(locale as any)) notFound();


  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
