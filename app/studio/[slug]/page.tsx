import Link from "next/link";
import { notFound } from "next/navigation";
import { studioWorks, type StudioImage } from "@/content/studio";

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

  const images: StudioImage[] =
    work.images && work.images.length > 0
      ? work.images
      : work.cover
      ? [{ src: work.cover }]
      : [];

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
        <div className="space-y-6 md:space-y-10">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative w-full overflow-hidden"
              style={img.aspect ? { aspectRatio: img.aspect } : undefined}
            >
              <img
                src={img.src}
                alt=""
                aria-hidden="true"
                className={
                  img.aspect
                    ? "absolute inset-0 h-full w-full object-cover"
                    : "block h-auto w-full"
                }
              />
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16">
          <h1 className="font-sans text-[32px] font-light leading-[1.15] tracking-[-0.005em] text-[var(--color-ink)] md:text-[40px]">
            {work.title}
          </h1>
          <dl className="mt-5 space-y-1 font-sans text-[14px] leading-[1.6] text-[var(--color-ink-secondary)]">
            {work.year ? (
              <div className="flex gap-3">
                <dt className="sr-only">Year</dt>
                <dd>{work.year}</dd>
              </div>
            ) : null}
            {work.medium ? (
              <div className="flex gap-3">
                <dt className="sr-only">Medium</dt>
                <dd className="italic">{work.medium}</dd>
              </div>
            ) : null}
          </dl>
          {work.description ? (
            <p className="mt-6 max-w-[60ch] font-sans text-[14px] leading-[1.7] text-[var(--color-ink)]">
              {work.description}
            </p>
          ) : null}
        </div>
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
