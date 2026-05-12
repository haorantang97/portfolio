import Link from "next/link";
import {
  buildingProjects,
  type BuildingStatus,
} from "@/content/building";
import { t, ui, type L } from "@/lib/i18n";
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

export default function BuildingPage() {
  const locale = getLocale();
  const mainProjects = buildingProjects.filter((p) => !p.sideProject);
  const sideProjects = buildingProjects.filter((p) => p.sideProject);

  return (
    <main className="flex min-h-screen flex-col bg-[var(--color-bg)] font-sans text-[var(--color-ink)]">
      <div className="flex flex-1 flex-col items-end px-6 py-16 md:px-20 md:py-24">
        {/* Main projects — top-right cluster */}
        <div className="w-full max-w-[520px] space-y-10 md:space-y-12">
          {mainProjects.map((p) => (
            <article key={p.slug}>
              <Link
                href={`/building/${p.slug}`}
                className="group block focus-visible:outline-none"
              >
                <div className="flex items-start justify-between gap-4">
                  <h2 className="font-sans text-[26px] font-light leading-[1.1] tracking-[-0.01em] text-[var(--color-ink)] md:text-[36px]">
                    <span className="relative inline-block">
                      {t(p.title, locale)}
                      <span
                        aria-hidden="true"
                        className="absolute left-0 -bottom-0.5 h-px w-0 transition-[width] duration-300 ease-out group-hover:w-full group-focus-visible:w-full"
                        style={{ background: "var(--gradient-gold)" }}
                      />
                    </span>
                  </h2>
                  <span className="mt-2 inline-flex shrink-0 items-baseline gap-2 font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--color-ink-secondary)] md:mt-3">
                    <span aria-hidden="true">{STATUS_GLYPH[p.status]}</span>
                    {t(STATUS_LABEL[p.status], locale)}
                  </span>
                </div>

                {p.subtitle ? (
                  <p className="mt-2 font-sans text-[13px] italic text-[var(--color-ink-secondary)] md:text-[14px]">
                    {t(p.subtitle, locale)}
                  </p>
                ) : null}

                {p.pitch ? (
                  <p className="mt-4 font-sans text-[14px] font-light leading-[1.6] text-[var(--color-ink)] md:text-[14px]">
                    {t(p.pitch, locale)}
                  </p>
                ) : null}
              </Link>
            </article>
          ))}
        </div>

        {/* Side projects — bottom-right cluster */}
        {sideProjects.length > 0 ? (
          <aside className="mt-auto w-full max-w-[520px] pt-24 md:pt-32">
            <h2 className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--color-ink-secondary)]">
              {t(ui.sideProjects, locale)}
            </h2>
            <div className="mt-4 space-y-3">
              {sideProjects.map((p) => (
                <article key={p.slug}>
                  <Link
                    href={`/building/${p.slug}`}
                    className="group flex items-baseline justify-between gap-4 focus-visible:outline-none"
                  >
                    <h3 className="font-sans text-[15px] font-light leading-[1.3] text-[var(--color-ink)] md:text-[17px]">
                      <span className="relative inline-block">
                        {t(p.title, locale)}
                        <span
                          aria-hidden="true"
                          className="absolute left-0 -bottom-0.5 h-px w-0 transition-[width] duration-300 ease-out group-hover:w-full group-focus-visible:w-full"
                          style={{ background: "var(--gradient-gold)" }}
                        />
                      </span>
                    </h3>
                    <span className="inline-flex shrink-0 items-baseline gap-2 font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--color-ink-secondary)]">
                      <span aria-hidden="true">{STATUS_GLYPH[p.status]}</span>
                      {t(STATUS_LABEL[p.status], locale)}
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          </aside>
        ) : null}
      </div>
    </main>
  );
}
