import Link from "next/link";

type Props = {
  href: string;
  title: string;
  cover?: string;
  index?: number;
};

export function ProjectTile({ href, title, cover, index }: Props) {
  return (
    <Link href={href} className="group block focus-visible:outline-none">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--color-border)]">
        {cover ? (
          <img
            src={cover}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : index !== undefined ? (
          <span
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center font-sans text-[48px] font-thin tracking-[0.05em] text-[var(--color-ink-secondary)] opacity-25"
          >
            {String(index).padStart(2, "0")}
          </span>
        ) : null}
      </div>
      <h2 className="mt-4 font-sans text-[14px] font-light tracking-[0.05em] text-[var(--color-ink)]">
        {title}
      </h2>
    </Link>
  );
}
