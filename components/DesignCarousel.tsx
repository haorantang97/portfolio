"use client";

import { useEffect, useRef, useState } from "react";
import type { DesignImage } from "@/content/design";

type Slide = number | number[];

type Props = {
  slides: Slide[];
  images: DesignImage[];
};

export function DesignCarousel({ slides, images }: Props) {
  const slideRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const slideEls = slideRefs.current.filter(
      (el): el is HTMLElement => el !== null,
    );
    if (slideEls.length === 0) return;
    const scrollRoot = slideEls[0].closest("[data-design-scroller]");
    if (!scrollRoot) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
            const idx = slideEls.indexOf(entry.target as HTMLElement);
            if (idx >= 0) setActiveIdx(idx);
          }
        }
      },
      { root: scrollRoot, threshold: [0.55, 0.8] },
    );

    slideEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [slides.length]);

  const scrollToSlide = (idx: number) => {
    const el = slideRefs.current[idx];
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {slides.map((slide, i) => (
        <section
          key={i}
          ref={(el) => {
            slideRefs.current[i] = el;
          }}
          className="flex h-[100dvh] w-full snap-start snap-always items-center justify-center px-6 md:px-16"
        >
          {Array.isArray(slide) ? (
            <div className="flex h-full w-full max-w-[1400px] flex-row items-center justify-center gap-3 md:gap-10">
              {slide.map((imgIdx) => {
                const src = images[imgIdx]?.src;
                if (!src) return null;
                return (
                  <img
                    key={imgIdx}
                    src={src}
                    alt=""
                    aria-hidden="true"
                    className="max-h-[68vh] max-w-[48%] object-contain"
                  />
                );
              })}
            </div>
          ) : (
            <img
              src={images[slide]?.src ?? ""}
              alt=""
              aria-hidden="true"
              className="max-h-[64vh] max-w-full object-contain"
            />
          )}
        </section>
      ))}

      {slides.length > 1 ? (
        <div className="pointer-events-none fixed right-6 top-1/2 z-10 flex -translate-y-1/2 flex-col gap-2 md:right-10">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToSlide(i)}
              aria-label={`Slide ${i + 1}`}
              className={
                "pointer-events-auto w-1.5 rounded-full transition-all duration-300 ease-out " +
                (activeIdx === i
                  ? "h-8 bg-[var(--color-ink)]"
                  : "h-1.5 bg-[var(--color-ink-secondary)]/30 hover:bg-[var(--color-ink-secondary)]/55")
              }
            />
          ))}
        </div>
      ) : null}
    </>
  );
}
