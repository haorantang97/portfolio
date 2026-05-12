import Link from "next/link";
import { studioWorks } from "@/content/studio";
import { t, ui } from "@/lib/i18n";
import { getLocale } from "@/lib/locale-server";

export default function StudioPage() {
  const locale = getLocale();
  return (
    <main className="min-h-screen bg-[var(--color-bg)] font-sans text-[var(--color-ink)]">
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-20 md:py-24">
        <div className="columns-1 gap-4 md:columns-3">
          {studioWorks.map((w, i) => (
            <Link
              key={w.slug}
              href={`/studio/${w.slug}`}
              className="mb-8 block break-inside-avoid focus-visible:outline-none"
            >
              {w.cover ? (
                <img
                  src={w.cover}
                  alt=""
                  aria-hidden="true"
                  className="block h-auto w-full"
                />
              ) : (
                <div className="relative aspect-square w-full overflow-hidden bg-[var(--color-border)]">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center justify-center font-sans text-[64px] font-thin tracking-[0.05em] text-[var(--color-ink-secondary)] opacity-25"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              )}
              <h2 className="mt-3 font-sans text-[13px] font-light tracking-[0.05em] text-[var(--color-ink)]">
                {t(w.title, locale)}
              </h2>
            </Link>
          ))}
        </div>
      </div>

    </main>
  );
}
