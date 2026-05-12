import { notFound } from "next/navigation";
import {
  buildingProjects,
  type BuildingProject,
  type BuildingStatus,
} from "@/content/building";
import { AppetizeEmbed } from "@/components/AppetizeEmbed";
import { DouyinAgentDiagram } from "@/components/DouyinAgentDiagram";
import { t, tArr, ui, type L, type Locale } from "@/lib/i18n";
import { getLocale } from "@/lib/locale-server";

const STATUS_LABEL: Record<BuildingStatus, L> = {
  "live-beta": ui.liveBeta,
  "in-progress": ui.inProgress,
  running: ui.running,
};

const STATUS_GLYPH: Record<BuildingStatus, string> = {
  "live-beta": "●",
  "in-progress": "○",
  running: "◐",
};

function ProjectBody({
  project,
  locale,
}: {
  project: BuildingProject;
  locale: Locale;
}) {
  return (
    <>
      {/* Title block */}
      <div className="flex items-start gap-5 md:gap-7">
        {project.appIcon ? (
          <img
            src={project.appIcon}
            alt=""
            aria-hidden="true"
            className="h-[72px] w-[72px] shrink-0 rounded-[22%] shadow-[0_10px_28px_-12px_rgba(26,24,20,0.3),0_4px_10px_-6px_rgba(26,24,20,0.15)] md:h-[104px] md:w-[104px]"
          />
        ) : null}
        <div className="min-w-0 flex-1">
          <h1 className="font-sans text-[40px] font-light leading-[1.1] tracking-[-0.01em] text-[var(--color-ink)] md:text-[48px]">
            {t(project.title, locale)}
          </h1>
          {project.subtitle ? (
            <p className="mt-2 font-sans text-[16px] italic text-[var(--color-ink-secondary)]">
              {t(project.subtitle, locale)}
            </p>
          ) : null}
        </div>
      </div>

      {/* Meta */}
      <p className="mt-5 inline-flex flex-wrap items-baseline gap-x-3 font-sans text-[12px] font-medium uppercase tracking-[0.08em] text-[var(--color-ink-secondary)]">
        <span>
          <span aria-hidden="true">{STATUS_GLYPH[project.status]}</span>{" "}
          {t(STATUS_LABEL[project.status], locale)}
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
        <p className="mt-8 font-sans text-[17px] font-light leading-[1.55] text-[var(--color-ink)]">
          {t(project.pitch, locale)}
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
              {t(ui.appStoreCTA, locale)}
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
              {t(ui.visitSite, locale)}
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
              {t(ui.privacyPolicy, locale)}
            </a>
          ) : null}
        </div>
      ) : null}

      {/* Custom diagram for the Douyin Automation agent skill */}
      {project.slug === "douyin-automation" ? (
        <div className="mt-12 md:mt-14">
          <DouyinAgentDiagram />
        </div>
      ) : null}

      {/* Inline product screenshots (iPhone-shaped, in-body figure) */}
      {project.screens && project.screens.length > 0 ? (
        <div className="mt-10 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex items-center gap-4 md:gap-5">
            {project.screens.map((src, i) => (
              <div
                key={i}
                className="relative h-[280px] shrink-0 overflow-hidden bg-black shadow-[0_26px_50px_-24px_rgba(26,24,20,0.32),0_12px_24px_-16px_rgba(26,24,20,0.18)] ring-1 ring-[var(--color-ink)]/8 md:h-[380px]"
                style={{
                  aspectRatio: "9 / 19.5",
                  borderRadius: "12.8% / 5.9%",
                }}
              >
                <img
                  src={src}
                  alt=""
                  aria-hidden="true"
                  className="block h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
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
                {t(section.label, locale)}
              </h3>
              {section.body ? (
                <div className="mt-4 space-y-4 font-sans text-[15px] font-light leading-[1.7] text-[var(--color-ink)]">
                  {t(section.body, locale)
                    .split("\n\n")
                    .map((para, j) => (
                      <p key={j}>{para}</p>
                    ))}
                </div>
              ) : null}
              {section.list ? (
                <ul className="mt-4 space-y-2 font-sans text-[15px] font-light leading-[1.65] text-[var(--color-ink)]">
                  {tArr(section.list, locale).map((item, j) => (
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
          {t(ui.caseStudyComing, locale)}
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
          <p className="font-sans text-[15px] font-light italic leading-[1.7] text-[var(--color-ink-secondary)]">
            {t(project.closer, locale)}
          </p>
        </>
      ) : null}
    </>
  );
}

export default function BuildingDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const locale = getLocale();
  const project = buildingProjects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const hasDemo = Boolean(project.appetizeKey);

  return (
    <main className="min-h-screen bg-[var(--color-bg)] font-sans text-[var(--color-ink)]">
      {project.hero && project.hero.length > 0 ? (
        <section
          aria-label="Hero gallery"
          className="mt-10 w-full overflow-x-auto overflow-y-hidden py-16 md:mt-14 md:py-24 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex items-center gap-6 px-6 md:gap-10 md:px-20">
            {project.hero.map((src, i) => {
              const yOffsets = [0, -18, 12, -8, 22, -14, 8, -4];
              const rotations = [-0.6, 0.5, -0.3, 0.6, -0.5, 0.4, -0.2, 0.3];
              const delays = [0, 1.4, 0.6, 2.0, 0.8, 1.6, 0.4, 1.8];
              const ty = yOffsets[i % yOffsets.length];
              const rot = rotations[i % rotations.length];
              const delay = delays[i % delays.length];

              return (
                <div
                  key={i}
                  className="shrink-0"
                  style={{
                    transform: `translateY(${ty}px) rotate(${rot}deg)`,
                  }}
                >
                  <div
                    className="relative h-[360px] overflow-hidden bg-black shadow-[0_30px_60px_-25px_rgba(26,24,20,0.35),0_18px_36px_-22px_rgba(26,24,20,0.25)] motion-safe:animate-[heroFloat_7s_ease-in-out_infinite] md:h-[520px]"
                    style={{
                      aspectRatio: "9 / 19.5",
                      animationDelay: `${delay}s`,
                    }}
                  >
                    <img
                      src={src}
                      alt=""
                      aria-hidden="true"
                      className="block h-full w-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
            {/* right-edge breathing room for scroll-end */}
            <div aria-hidden="true" className="w-2 shrink-0 md:w-12" />
          </div>
        </section>
      ) : null}

      {hasDemo ? (
        // 2-column: content left, sticky demo right
        <div className="mx-auto max-w-[1200px] px-6 py-12 md:px-20 md:py-16">
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-[1fr_400px] md:items-start md:gap-x-16 md:gap-y-0 lg:gap-x-20">
            <article className="min-w-0">
              <ProjectBody project={project} locale={locale} />
            </article>
            <aside className="md:sticky md:top-24 md:self-start">
              <AppetizeEmbed
                publicKey={project.appetizeKey!}
                poster={project.cover}
                locale={locale}
              />
            </aside>
          </div>
        </div>
      ) : (
        // single column for projects without a live demo
        <article className="mx-auto max-w-[720px] px-6 py-12 md:px-20 md:py-16">
          <ProjectBody project={project} locale={locale} />
        </article>
      )}
    </main>
  );
}
