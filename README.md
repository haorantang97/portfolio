# Haoran Tang — Personal Site

Personal portfolio for Haoran Tang. Homepage MVP only — internal pages are placeholders.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Source Serif 4 via `next/font/google`
- Deploy target: Vercel

## Run

```bash
npm install
npm run dev
```

Opens at http://localhost:3000.

## Cover image

The homepage references `/public/cover.webp`. The original brief said `cover.jpg`; the asset provided was a `.webp`, so the filename and path in `app/page.tsx` track the actual format. To swap, drop a new file in `public/` and update the `src` in `app/page.tsx`.

## Design system

See `design-system.md` for full tokens and rules. Key constraints baked into the build:

- Homepage is `100vh`, no scroll, single static viewport.
- Cover image is full-bleed via `object-cover` + `objectPosition: "70% center"` (desktop) and centered on mobile.
- Only animation is the gold gradient underline on module-link hover (`200ms` left-to-right draw); also fires on `:focus-visible` for keyboard users.
- All colors come from CSS variables in `app/globals.css`.
- All font sizes come from the type scale in `tailwind.config.ts`.
- `prefers-reduced-motion` shortens the underline transition to instant.

## TODO — next steps

- [ ] Lock homepage with stakeholder review (you)
- [ ] Internal page chrome: build `components/PageChrome.tsx`
- [ ] `/about` — bio + positioning
- [ ] `/building` list page (2-col grid of `ProjectTile`s) + `/building/[slug]` detail (`CaseSection`s)
- [ ] `/notes` list + `/notes/[slug]` detail (MDX, prose styling)
- [ ] `/wearing` and `/making` — visual portfolio grids + lightbox
- [ ] `/contact` — finalize: form vs `mailto` vs socials list
- [ ] License Editorial New (Pangram Pangram), self-host via `next/font/local`, swap font variable
- [ ] OpenGraph image, favicon, `apple-touch-icon`
- [ ] Analytics (Plausible / Vercel)
- [ ] Deploy to Vercel
