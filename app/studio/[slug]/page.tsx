import Link from "next/link";
import { notFound } from "next/navigation";
import { studioWorks } from "@/content/studio";

export function generateStaticParams() {
  return studioWorks.map((w) => ({ slug: w.slug }));
}

export default function StudioDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const work = studioWorks.find((w) => w.slug === params.slug);
  if (!work) notFound();

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

      <article className="mx-auto max-w-[900px] px-6 py-12 md:px-20 md:py-16">
        {work.cover ? (
          <img
            src={work.cover}
            alt=""
            aria-hidden="true"
            className="block h-auto w-full"
          />
        ) : (
          <div className="relative aspect-square w-full bg-[var(--color-border)]" />
        )}
        <h1 className="mt-8 font-sans text-[24px] font-light tracking-[0.05em] text-[var(--color-ink)]">
          {work.title}
        </h1>
        {work.caption ? (
          <p className="mt-4 text-[14px] text-[var(--color-ink-secondary)]">
            {work.caption}
          </p>
        ) : null}
      </article>

      <footer className="px-6 pb-12 md:px-20 md:pb-12">
        <Link
          href="/studio"
          className="text-[13px] italic text-[var(--color-ink-secondary)]"
        >
          ← back to studio
        </Link>
      </footer>
    </main>
  );
}
