"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  images: string[];
};

/**
 * Horizontal snap-scroll hero gallery for Carte.
 * No rotation, no Y stagger, no floating animation — just a clean row of
 * uniform phone-shaped cards. The one nearest the viewport's horizontal
 * center scales up + un-dims; the others stay at slightly reduced scale
 * and opacity, creating a deliberate "spotlight" effect as the user scrolls.
 */
export function CarteWebGallery({ images }: Props) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    let raf = 0;

    const recompute = () => {
      const sRect = scroller.getBoundingClientRect();
      const center = sRect.left + sRect.width / 2;
      let bestIdx = 0;
      let bestDist = Infinity;
      for (let i = 0; i < itemRefs.current.length; i++) {
        const el = itemRefs.current[i];
        if (!el) continue;
        const r = el.getBoundingClientRect();
        const c = r.left + r.width / 2;
        const d = Math.abs(c - center);
        if (d < bestDist) {
          bestDist = d;
          bestIdx = i;
        }
      }
      setActiveIdx(bestIdx);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(recompute);
    };

    scroller.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", recompute);
    recompute();

    return () => {
      scroller.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", recompute);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      aria-label="Hero gallery"
      className="w-full"
    >
      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory items-center gap-8 overflow-x-auto py-10 md:gap-12 md:py-14 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {/* Leading spacer — keeps first card centerable inside the scroller */}
        <div
          aria-hidden="true"
          className="shrink-0 w-[calc(50%_-_92px)] md:w-[calc(50%_-_129px)]"
        />
        {images.map((src, i) => (
          <div
            key={i}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            className={
              "shrink-0 snap-center motion-safe:transition-all motion-safe:duration-[600ms] motion-safe:ease-out " +
              (activeIdx === i
                ? "scale-100 opacity-100"
                : "scale-[0.86] opacity-50")
            }
          >
            <div
              className={
                "relative h-[400px] overflow-hidden bg-white ring-1 ring-[var(--color-ink)]/8 motion-safe:transition-shadow motion-safe:duration-[600ms] motion-safe:ease-out md:h-[560px] " +
                (activeIdx === i
                  ? "shadow-[0_36px_70px_-20px_rgba(26,24,20,0.32),0_18px_36px_-22px_rgba(26,24,20,0.18)]"
                  : "")
              }
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
          </div>
        ))}
        {/* Trailing spacer — keeps last card centerable inside the scroller */}
        <div
          aria-hidden="true"
          className="shrink-0 w-[calc(50%_-_92px)] md:w-[calc(50%_-_129px)]"
        />
      </div>
    </section>
  );
}
