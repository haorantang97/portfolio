"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const HIDDEN_PATHS = new Set(["/design"]);

function getBackHref(pathname: string): string | null {
  if (pathname === "/") return null;
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length <= 1) return "/";
  return "/" + segments.slice(0, -1).join("/");
}

export function BackButton() {
  const pathname = usePathname();
  if (HIDDEN_PATHS.has(pathname)) return null;
  const href = getBackHref(pathname);
  if (!href) return null;
  return (
    <Link
      href={href}
      aria-label="Back"
      className="fixed bottom-6 left-6 z-50 flex h-6 w-10 items-center justify-start text-[var(--color-ink-secondary)] transition-colors hover:text-[var(--color-ink)] md:bottom-10 md:left-10"
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
  );
}
