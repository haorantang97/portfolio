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

      <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-20 md:py-32">
        <div className="space-y-28 md:ml-auto md:max-w-[760px] md:space-y-40">
          {buildingProjects.map((p) => (
            <article key={p.slug}>
              <div className="grid gap-y-4 md:grid-cols-[7rem_1fr] md:gap-x-12 md:gap-y-0">
                {/* Meta column */}
                <div className="font-sans text-[10px] font-medium uppercase tracking-[0.14em] leading-[1.8] text-[var(--color-ink-secondary)] md:text-right">
                  <p>{STATUS_LABEL[p.status]}</p>
                  <p className="mt-2">{p.year}</p>
                  {p.stack.length > 0 ? (
                    <div className="mt-4 space-y-1">
                      {p.stack.map((s) => (
                        <p key={s}>{s}</p>
                      ))}
                    </div>
                  ) : null}
                </div>

                {/* Content column */}
                <Link
                  href={`/building/${p.slug}`}
                  className="group block focus-visible:outline-none"
                >
                  <h2 className="font-sans text-[36px] font-light leading-[1.05] tracking-[-0.015em] text-[var(--color-ink)] md:text-[56px]">
                    {p.title}
                  </h2>
                  {p.subtitle ? (
                    <p className="mt-3 font-sans text-[16px] italic text-[var(--color-ink-secondary)]">
                      {p.subtitle}
                    </p>
                  ) : null}
                  {p.pitch ? (
                    <p className="mt-8 max-w-[58ch] font-sans text-[15px] leading-[1.7] text-[var(--color-ink)]">
                      {p.pitch}
                    </p>
                  ) : (
                    <p className="mt-8 font-sans text-[15px] italic text-[var(--color-ink-secondary)]">
                      Forthcoming.
                    </p>
                  )}
                  <span className="relative mt-10 inline-block font-sans text-[13px] tracking-[0.02em] text-[var(--color-ink)]">
                    View case study →
                    <span
                      aria-hidden="true"
                      className="absolute left-0 -bottom-0.5 h-px w-0 transition-[width] duration-200 ease-out group-hover:w-full group-focus-visible:w-full"
                      style={{ background: "var(--gradient-gold)" }}
                    />
                  </span>
                </Link>
              </div>
            </article>
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
