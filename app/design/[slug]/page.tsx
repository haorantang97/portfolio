import Link from "next/link";
import { notFound } from "next/navigation";
import { designProjects } from "@/content/design";

export function generateStaticParams() {
  return designProjects.map((p) => ({ slug: p.slug }));
}

export default function DesignDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = designProjects.find((p) => p.slug === params.slug);
  if (!project) notFound();

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

      <article className="mx-auto max-w-[720px] px-6 py-16 md:px-20 md:py-24">
        <h1 className="font-sans text-[48px] font-medium leading-[1.1] tracking-[-0.02em] text-[var(--color-ink)]">
          {project.title}
        </h1>
        <p className="mt-8 text-[14px] text-[var(--color-ink-secondary)]">
          Content to be added.
        </p>
      </article>

      <footer className="px-6 pb-12 md:px-20 md:pb-12">
        <Link
          href="/design"
          className="text-[13px] italic text-[var(--color-ink-secondary)]"
        >
          ← back to design
        </Link>
      </footer>
    </main>
  );
}
