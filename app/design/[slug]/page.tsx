import Link from "next/link";
import { notFound } from "next/navigation";
import { designProjects, type DesignImage } from "@/content/design";

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

  const slots: DesignImage[] = [
    project.cover ?? {},
    ...(project.images ?? []),
  ];

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

      <article className="mx-auto max-w-[900px] px-6 py-12 md:px-20 md:py-16">
        <h1 className="font-sans text-[48px] font-medium leading-[1.1] tracking-[-0.02em] text-[var(--color-ink)]">
          {project.title}
        </h1>

        {slots.map((slot, i) => (
          <div
            key={i}
            className="relative mt-12 w-full overflow-hidden bg-[var(--color-border)]"
            style={{ aspectRatio: slot.aspect ?? "4 / 3" }}
          >
            {slot.src ? (
              <img
                src={slot.src}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <span
                aria-hidden="true"
                className="absolute inset-0 flex items-center justify-center font-sans text-[48px] font-thin tracking-[0.05em] text-[var(--color-ink-secondary)] opacity-25"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            )}
          </div>
        ))}
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
