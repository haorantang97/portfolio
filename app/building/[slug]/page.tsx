import Link from "next/link";
import { notFound } from "next/navigation";
import {
  buildingProjects,
  type BuildingStatus,
} from "@/content/building";
import { AppetizeEmbed } from "@/components/AppetizeEmbed";

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

export function generateStaticParams() {
  return buildingProjects.map((p) => ({ slug: p.slug }));
}

export default function BuildingDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = buildingProjects.find((p) => p.slug === params.slug);
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
          Building — 2026
        </span>
      </header>

      <article className="mx-auto max-w-[720px] px-6 py-12 md:px-20 md:py-16">
        {/* Title block */}
        <h1 className="font-sans text-[40px] font-light leading-[1.1] tracking-[-0.01em] text-[var(--color-ink)] md:text-[48px]">
          {project.title}
        </h1>
        {project.subtitle ? (
          <p className="mt-2 font-sans text-[16px] italic text-[var(--color-ink-secondary)]">
            {project.subtitle}
          </p>
        ) : null}
        <p className="mt-5 inline-flex flex-wrap items-baseline gap-x-3 font-sans text-[12px] font-medium uppercase tracking-[0.08em] text-[var(--color-ink-secondary)]">
          <span>
            <span aria-hidden="true">{STATUS_GLYPH[project.status]}</span>{" "}
            {STATUS_LABEL[project.status]}
          </span>
          <span aria-hidden="true">·</span>
          <span>{project.year}</span>
          {project.stack.length > 0 ? (
            <>
              <span aria-hidden="true">·</span>
              <span>{project.stack.join(" · ")}</span>
            </>
          ) : null}
        </p>

        {project.pitch ? (
          <p className="mt-8 font-sans text-[17px] leading-[1.55] text-[var(--color-ink)]">
            {project.pitch}
          </p>
        ) : null}

        {/* Primary CTAs */}
        {project.links?.appStore || project.links?.website ? (
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-sans text-[13px]">
            {project.links?.appStore ? (
              <a
                href={project.links.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block text-[var(--color-ink)]"
              >
                Download on the App Store ↗
                <span
                  aria-hidden="true"
                  className="absolute left-0 -bottom-0.5 h-px w-0 transition-[width] duration-200 ease-out group-hover:w-full"
                  style={{ background: "var(--gradient-gold)" }}
                />
              </a>
            ) : null}
            {project.links?.website ? (
              <a
                href={project.links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block text-[var(--color-ink)]"
              >
                Visit site ↗
                <span
                  aria-hidden="true"
                  className="absolute left-0 -bottom-0.5 h-px w-0 transition-[width] duration-200 ease-out group-hover:w-full"
                  style={{ background: "var(--gradient-gold)" }}
                />
              </a>
            ) : null}
            {project.links?.privacy ? (
              <a
                href={project.links.privacy}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-ink-secondary)] underline decoration-[var(--color-border)] underline-offset-4"
              >
                Privacy policy
              </a>
            ) : null}
          </div>
        ) : null}

        {/* Appetize embed (if key provided) */}
        {project.appetizeKey ? (
          <div className="mt-14">
            <AppetizeEmbed
              publicKey={project.appetizeKey}
              poster={project.cover}
            />
          </div>
        ) : null}

        {/* Gold divider */}
        <div
          aria-hidden="true"
          className="my-14 h-px w-full"
          style={{ background: "var(--gradient-gold)" }}
        />

        {/* Sections */}
        {project.sections && project.sections.length > 0 ? (
          <div className="space-y-12">
            {project.sections.map((section, i) => (
              <section key={i}>
                <h3 className="font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--color-ink-secondary)]">
                  {section.label}
                </h3>
                {section.body ? (
                  <div className="mt-4 space-y-4 font-sans text-[15px] leading-[1.7] text-[var(--color-ink)]">
                    {section.body.split("\n\n").map((para, j) => (
                      <p key={j}>{para}</p>
                    ))}
                  </div>
                ) : null}
                {section.list ? (
                  <ul className="mt-4 space-y-2 font-sans text-[15px] leading-[1.65] text-[var(--color-ink)]">
                    {section.list.map((item, j) => (
                      <li key={j} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="text-[var(--color-ink-secondary)]"
                        >
                          ·
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        ) : (
          <p className="font-sans text-[14px] italic text-[var(--color-ink-secondary)]">
            Case study coming soon.
          </p>
        )}

        {/* Closer */}
        {project.closer ? (
          <>
            <div
              aria-hidden="true"
              className="my-14 h-px w-full"
              style={{ background: "var(--gradient-gold)" }}
            />
            <p className="font-sans text-[15px] italic leading-[1.7] text-[var(--color-ink-secondary)]">
              {project.closer}
            </p>
          </>
        ) : null}
      </article>

      <footer className="px-6 pb-12 md:px-20 md:pb-12">
        <Link
          href="/building"
          className="text-[13px] italic text-[var(--color-ink-secondary)]"
        >
          ← back to building
        </Link>
      </footer>
    </main>
  );
}
