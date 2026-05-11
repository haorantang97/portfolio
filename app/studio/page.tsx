import Link from "next/link";
import { studioWorks } from "@/content/studio";

export default function StudioPage() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] font-sans text-[var(--color-ink)]">
      <header className="flex items-baseline justify-between px-6 pt-8 md:px-20 md:pt-12">
        <Link
          href="/"
          className="text-[13px] italic text-[var(--color-ink-secondary)]"
        >
          Haoran Tang
        </Link>
        <span className="font-sans text-[11px] font-medium uppercase tracking-[0.05em] text-[var(--color-ink-secondary)]">
          Studio — 2026
        </span>
      </header>

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
                {w.title}
              </h2>
            </Link>
          ))}
        </div>
      </div>

      <footer className="px-6 pb-12 md:px-20 md:pb-12">
        <Link
          href="/"
          className="text-[13px] italic text-[var(--color-ink-secondary)]"
        >
          ← back
        </Link>
      </footer>
    </main>
  );
}
