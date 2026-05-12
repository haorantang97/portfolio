"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const V = "v4";
const IMAGES = [
  `/design/portfolio/01.jpg?${V}`,
  `/design/portfolio/02.jpg?${V}`,
  `/design/portfolio/03.jpg?${V}`,
  `/design/portfolio/04.jpg?${V}`,
  `/design/portfolio/05.jpg?${V}`,
];

export function DesignImmersive() {
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const slideEls = slideRefs.current.filter(
      (el): el is HTMLElement => el !== null,
    );
    if (slideEls.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
            const idx = slideEls.indexOf(entry.target as HTMLElement);
            if (idx >= 0) setActiveIdx(idx);
          }
        }
      },
      { root: container, threshold: [0.55, 0.8] },
    );

    slideEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSlide = (idx: number) => {
    const el = slideRefs.current[idx];
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div
        ref={containerRef}
        className="h-[100dvh] w-full snap-y snap-mandatory overflow-y-auto bg-black [-webkit-overflow-scrolling:touch] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {IMAGES.map((src, i) => (
          <section
            key={i}
            ref={(el) => {
              slideRefs.current[i] = el;
            }}
            className="relative h-[100dvh] w-full snap-start snap-always overflow-hidden"
          >
            <img
              src={src}
              alt=""
              aria-hidden="true"
              className={
                "absolute inset-0 h-full w-full object-contain motion-safe:transition-transform motion-safe:duration-[1200ms] motion-safe:ease-out " +
                (activeIdx === i ? "scale-100" : "scale-[1.05]")
              }
            />
          </section>
        ))}
      </div>

      {/* Page indicators — auto-contrast via mix-blend-difference */}
      <div className="pointer-events-none fixed right-6 top-1/2 z-30 flex -translate-y-1/2 flex-col gap-2 mix-blend-difference md:right-10">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => scrollToSlide(i)}
            aria-label={`Page ${i + 1}`}
            className={
              "pointer-events-auto w-1.5 rounded-full transition-all duration-300 ease-out " +
              (activeIdx === i
                ? "h-8 bg-white"
                : "h-1.5 bg-white/45 hover:bg-white/80")
            }
          />
        ))}
      </div>

      {/* Custom back arrow — white with mix-blend so it stays visible on any image bg */}
      <Link
        href="/"
        aria-label="Back"
        className="fixed bottom-6 left-6 z-30 flex h-6 w-10 items-center justify-start text-white mix-blend-difference transition-opacity hover:opacity-65 md:bottom-10 md:left-10"
      >
        <svg
          width="34"
          height="10"
          viewBox="0 0 34 10"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M0 5 L34 5 M5 0.5 L0 5 L5 9.5" />
        </svg>
      </Link>

    </>
  );
}
