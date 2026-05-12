import { cookies } from "next/headers";
import type { Locale } from "./i18n";

export const LOCALE_COOKIE = "pf-locale";

export function getLocale(): Locale {
  const value = cookies().get(LOCALE_COOKIE)?.value;
  return value === "zh" ? "zh" : "en";
}
