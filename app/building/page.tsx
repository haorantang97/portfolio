import Link from "next/link";
import {
  buildingProjects,
  type BuildingStatus,
} from "@/content/building";

const STATUS_LABEL: Record<BuildingStatus, string> = {
  "live-beta": "Live beta",
  "in-progress": "In progress",
  running: "Running",
};

const STATUS_GLYPH: Record<BuildingStatus, string> = {
  "live-beta": "●",
  "in-progress": "○",
  running: "◐",
};

export default function BuildingPage() {
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
          Building — 2026
        </span>
      </header>

      <div className="mx-auto max-w-[900px] space-y-24 px-6 py-16 md:px-20 md:py-24">
        {buildingProjects.map((p) => (
          <Link
            key={p.slug}
            href={`/building/${p.slug}`}
            className="group block focus-visible:outline-none"
          >
            {/* Hero */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[var(--color-border)]">
              {p.cover ? (
                <img
                  src={p.cover}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <span
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center justify-center font-sans text-[14px] font-light tracking-[0.15em] uppercase text-[var(--color-ink-secondary)] opacity-50"
                >
                  No cover yet
                </span>
              )}
              <span className="absolute right-4 top-4 inline-flex items-center gap-2 border border-[var(--color-bg)]/40 bg-[var(--color-ink)]/70 px-2.5 py-1 font-sans text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--color-bg)] backdrop-blur-sm">
                <span aria-hidden="true">{STATUS_GLYPH[p.status]}</span>
                {STATUS_LABEL[p.status]}
              </span>
            </div>

            {/* Body */}
            <div className="mt-6">
              <h2 className="font-sans text-[32px] font-light leading-[1.15] tracking-[-0.005em] text-[var(--color-ink)] md:text-[40px]">
                {p.title}
              </h2>
              {p.subtitle ? (
                <p className="mt-1 font-sans text-[14px] italic text-[var(--color-ink-secondary)]">
                  {p.subtitle}
                </p>
              ) : null}
              <p className="mt-3 font-sans text-[12px] font-medium uppercase tracking-[0.08em] text-[var(--color-ink-secondary)]">
                {p.year}
                {p.stack.length > 0 ? ` · ${p.stack.join(" · ")}` : ""}
              </p>
              {p.pitch ? (
                <p className="mt-5 max-w-[60ch] font-sans text-[15px] leading-[1.65] text-[var(--color-ink)]">
                  {p.pitch}
                </p>
              ) : null}

              <span className="relative mt-6 inline-block font-sans text-[13px] tracking-[0.02em] text-[var(--color-ink)]">
                View case study →
                <span
                  aria-hidden="true"
                  className="absolute left-0 -bottom-0.5 h-px w-0 transition-[width] duration-200 ease-out group-hover:w-full group-focus-visible:w-full"
                  style={{ background: "var(--gradient-gold)" }}
                />
              </span>
            </div>
          </Link>
        ))}
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
