import Link from "next/link";

export function ModuleLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="relative inline-block text-[16px] md:text-module text-[var(--color-ink)] leading-[1.9] group focus:outline-none focus-visible:outline-none"
    >
      {children}
      <span
        aria-hidden="true"
        className="absolute left-0 bottom-1 h-px w-0 transition-[width] duration-200 ease-out group-hover:w-full group-focus-visible:w-full"
        style={{ background: "var(--gradient-gold)" }}
      />
    </Link>
  );
}
