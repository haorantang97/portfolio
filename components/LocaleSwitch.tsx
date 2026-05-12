"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Locale = "en" | "zh";

const COOKIE = "pf-locale";

const HIDDEN_PATHS = new Set(["/contact", "/design"]);

export function LocaleSwitch() {
  const router = useRouter();
  const pathname = usePathname();
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const match = document.cookie.match(/pf-locale=([^;]+)/);
    if (match) setLocale(match[1] === "zh" ? "zh" : "en");
  }, []);

  const switchTo = (target: Locale) => {
    if (target === locale) return;
    document.cookie = `${COOKIE}=${target};path=/;max-age=31536000;samesite=lax`;
    setLocale(target);
    router.refresh();
  };

  if (HIDDEN_PATHS.has(pathname)) return null;

  return (
    <div className="fixed right-6 top-6 z-50 flex items-baseline gap-2 font-sans text-[11px] font-medium uppercase tracking-[0.08em] md:right-10 md:top-10">
      <button
        type="button"
        onClick={() => switchTo("en")}
        className={
          locale === "en"
            ? "text-[var(--color-ink)]"
            : "text-[var(--color-ink-secondary)] transition-colors hover:text-[var(--color-ink)]"
        }
      >
        EN
      </button>
      <span aria-hidden="true" className="text-[var(--color-ink-secondary)]">
        ·
      </span>
      <button
        type="button"
        onClick={() => switchTo("zh")}
        className={
          locale === "zh"
            ? "text-[var(--color-ink)]"
            : "text-[var(--color-ink-secondary)] transition-colors hover:text-[var(--color-ink)]"
        }
      >
        中文
      </button>
    </div>
  );
}
