import Link from "next/link";
import { ProjectTile } from "@/components/ProjectTile";
import { designProjects } from "@/content/design";

export default function DesignListPage() {
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
          Design — 2026
        </span>
      </header>

      <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-20 md:py-24">
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2">
          {designProjects.map((p, i) => (
            <ProjectTile
              key={p.slug}
              href={`/design/${p.slug}`}
              title={p.title}
              cover={p.cover?.src}
              index={i + 1}
            />
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
