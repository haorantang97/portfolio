import { notFound } from "next/navigation";
import { designProjects } from "@/content/design";
import { DesignCarousel } from "@/components/DesignCarousel";
import { DesignAlbum } from "@/components/DesignAlbum";
import { t } from "@/lib/i18n";
import { getLocale } from "@/lib/locale-server";

export default function DesignDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const locale = getLocale();
  const project = designProjects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const slots = project.images ?? [];
  const featuredSlides = project.featured?.slides ?? null;

  // Indices of images consumed by the carousel — excluded from the thumb grid.
  const featuredSet = new Set<number>();
  if (featuredSlides) {
    for (const slide of featuredSlides) {
      if (Array.isArray(slide)) slide.forEach((i) => featuredSet.add(i));
      else featuredSet.add(slide);
    }
  }

  const remaining = featuredSlides
    ? slots
        .map((img, i) => ({ img, i }))
        .filter(({ i }) => !featuredSet.has(i))
        .map(({ img }) => img)
    : slots;

  const hasCarousel = Boolean(featuredSlides);

  return (
    <main
      data-design-scroller=""
      className={
        "font-sans text-[var(--color-ink)] " +
        (hasCarousel
          ? "h-[100dvh] overflow-y-auto snap-y snap-proximity [-webkit-overflow-scrolling:touch]"
          : "min-h-screen")
      }
      style={{ background: project.bg ?? "var(--color-bg)" }}
    >
      {/* Title block — compact so the first slide image fully appears above the fold */}
      <header className="mx-auto max-w-[900px] px-6 pt-12 pb-2 md:px-20 md:pt-14 md:pb-3">
        <h1 className="font-sans text-[30px] font-medium leading-[1.05] tracking-[-0.02em] text-[var(--color-ink)] md:text-[40px]">
          {t(project.title, locale)}
        </h1>
        {project.year ? (
          <p className="mt-1.5 font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--color-ink-secondary)]">
            {project.year}
          </p>
        ) : null}
      </header>

      {featuredSlides ? (
        // Carousel (vertical snap) + larger thumbnail album
        <>
          <DesignCarousel slides={featuredSlides} images={slots} />

          {remaining.length > 0 ? (
            <div className="mx-auto max-w-[1600px] px-6 pb-24 pt-16 md:px-12 md:pb-32 md:pt-20">
              <h2 className="mb-8 font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--color-ink-secondary)] md:mb-10">
                {locale === "zh" ? "更多页面" : "More pages"}
              </h2>
              <DesignAlbum images={remaining} />
            </div>
          ) : null}
        </>
      ) : (
        // Plain vertical list (fallback / other projects)
        <article className="mx-auto max-w-[900px] px-6 pb-12 md:px-20 md:pb-16">
          {slots.map((slot, i) => {
            if (slot.src) {
              if (slot.aspect) {
                return (
                  <div
                    key={i}
                    className="relative mt-12 w-full overflow-hidden"
                    style={{ aspectRatio: slot.aspect }}
                  >
                    <img
                      src={slot.src}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                );
              }
              return (
                <div key={i} className="mt-12 w-full">
                  <img
                    src={slot.src}
                    alt=""
                    aria-hidden="true"
                    className="block h-auto w-full"
                  />
                </div>
              );
            }
            return (
              <div
                key={i}
                className="relative mt-12 w-full overflow-hidden bg-[var(--color-border)]"
                style={{ aspectRatio: slot.aspect ?? "4 / 3" }}
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center justify-center font-sans text-[48px] font-thin tracking-[0.05em] text-[var(--color-ink-secondary)] opacity-25"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            );
          })}
        </article>
      )}
    </main>
  );
}
