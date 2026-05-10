# Haoran Tang · Personal Site — Design System v0.1

## 0. Tech Stack

- **Framework**: Next.js 14+ (App Router) + TypeScript
- **Styling**: Tailwind CSS + CSS variables for tokens
- **Fonts**: `next/font/google` for Source Serif 4 (free, used as MVP default; can upgrade to Editorial New later by swapping the import)
- **Deploy**: Vercel
- **No client state needed** — site is fully static

---

## 1. Color Tokens

Define these as CSS custom properties in `app/globals.css`:

```css
:root {
  /* Backgrounds */
  --color-bg: #ECE9DD;              /* Cloud Dancer (Pantone 2026) */

  /* Text */
  --color-ink: #1A1814;              /* Primary — warm ink black */
  --color-ink-secondary: #3A2F1C;    /* Secondary — deep brown */

  /* Borders / dividers / muted */
  --color-border: #C9C4B8;           /* Warm gray */

  /* Gold (used as gradient, never as a flat fill) */
  --color-gold-light: #E8CC85;       /* Champagne highlight */
  --color-gold-mid:   #A6824A;       /* Brass middle (use as fallback flat) */
  --color-gold-dark:  #5C4A22;       /* Deep bronze */

  /* Composed gold gradient — apply this anywhere "gold" is needed */
  --gradient-gold: linear-gradient(
    145deg,
    var(--color-gold-light) 0%,
    var(--color-gold-mid)   50%,
    var(--color-gold-dark)  100%
  );
}
```

**Rule**: gold ONLY appears as `--gradient-gold`. If a single-color gold is unavoidable (e.g. an icon stroke), fall back to `--color-gold-mid`. Never use a flat champagne or brass as a "gold accent."

---

## 2. Typography Tokens

### 2.1 Font Loading

In `app/layout.tsx`:

```tsx
import { Source_Serif_4 } from "next/font/google";

const serif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});
```

Apply `serif.variable` to the `<html>` element.

> **Upgrade path**: when you license Editorial New (Pangram Pangram), self-host via `next/font/local` and swap the variable. All other tokens stay the same.

### 2.2 Type Scale

| Role         | Size  | Line height | Letter spacing | Weight | Style  | Used for                              |
|--------------|-------|-------------|----------------|--------|--------|---------------------------------------|
| `display`    | 32px  | 1.1         | -0.015em       | 500    | normal | Name                                  |
| `module`     | 20px  | 1.9         | 0              | 400    | normal | Module nav links (homepage)           |
| `body`       | 16px  | 1.6         | 0              | 400    | normal | Body text on internal pages           |
| `caption`    | 13px  | 1.5         | 0              | 400    | italic | Positioning line under name           |
| `micro`      | 11px  | 1.4         | +0.05em        | 500    | normal | Labels, metadata, year stamps         |
| `case-title` | 48px  | 1.1         | -0.02em        | 500    | normal | Project case study titles (internal)  |

Tailwind config (`tailwind.config.ts`):

```ts
fontSize: {
  'display':    ['32px', { lineHeight: '1.1',  letterSpacing: '-0.015em' }],
  'module':     ['20px', { lineHeight: '1.9'                              }],
  'body':       ['16px', { lineHeight: '1.6'                              }],
  'caption':    ['13px', { lineHeight: '1.5'                              }],
  'micro':      ['11px', { lineHeight: '1.4',  letterSpacing: '0.05em'    }],
  'case-title': ['48px', { lineHeight: '1.1',  letterSpacing: '-0.02em'   }],
}
```

### 2.3 Casing Rules

- **Module nav**: all lowercase (`about`, `building`, `notes`, `wearing`, `making`, `contact`)
- **Name**: Title Case (`Haoran Tang`)
- **Positioning line**: sentence case
- **Micro labels** (year, section labels in case studies): UPPERCASE with letter-spacing

---

## 3. Spacing

8px base unit. Tailwind defaults already give us 4 → 8 → 12 → 16 → 24 → 32 → 48 → 64 → 80 → 96 → 120 → 160. Use these:

| Token | Value  | Use                                        |
|-------|--------|--------------------------------------------|
| `xs`  | 8px    | Inside related elements (label → value)    |
| `sm`  | 16px   | Tight inline spacing                       |
| `md`  | 24px   | Component internal                         |
| `lg`  | 48px   | Section internal                           |
| `xl`  | 80px   | Edge padding (desktop horizontal)          |
| `2xl` | 96px   | Edge padding (desktop vertical)            |
| `3xl` | 120px  | Major section breaks (internal pages)      |

Mobile horizontal edge padding: 24px. Mobile vertical edge padding: 48px.

---

## 4. Layout Tokens

```css
:root {
  --container-max: 1440px;
  --edge-x-desktop: 80px;
  --edge-y-desktop: 96px;
  --edge-x-mobile:  24px;
  --edge-y-mobile:  48px;
}
```

Mobile breakpoint: 768px (Tailwind default `md:`).

---

## 5. Homepage Spec — `app/page.tsx`

### 5.1 Behavior

- **Static, single viewport, no scroll** (`html, body { overflow: hidden }`)
- Cover image as full-bleed background layer
- Text content layered on top
- Only animation: hover underline on module links

### 5.2 Structure (semantic HTML)

```tsx
<main className="relative h-screen w-screen overflow-hidden bg-[var(--color-bg)]">
  {/* Background image */}
  <img
    src="/cover.jpg"
    alt=""
    aria-hidden="true"
    className="absolute inset-0 w-full h-full object-cover"
    style={{ objectPosition: "70% center" }}
  />

  {/* Content layer */}
  <div className="relative z-10 h-full mx-auto max-w-[1440px] px-20 py-24 flex flex-col justify-between">
    {/* Top group */}
    <header>
      <h1 className="text-display text-[var(--color-ink)] font-medium">Haoran Tang</h1>
      <p className="text-caption italic text-[var(--color-ink-secondary)] mt-2">
        Independent. Between AI products, fashion, and image.
      </p>
    </header>

    {/* Bottom group — module nav */}
    <nav>
      <ul className="space-y-0">
        {[
          ["about",    "/about"],
          ["building", "/building"],
          ["notes",    "/notes"],
          ["wearing",  "/wearing"],
          ["making",   "/making"],
          ["contact",  "/contact"],
        ].map(([label, href]) => (
          <li key={label}>
            <ModuleLink href={href}>{label}</ModuleLink>
          </li>
        ))}
      </ul>
    </nav>
  </div>
</main>
```

### 5.3 ModuleLink Component — `components/ModuleLink.tsx`

```tsx
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
      className="
        relative inline-block
        text-module text-[var(--color-ink)]
        leading-[1.9]
        group
      "
    >
      {children}
      <span
        className="
          absolute left-0 bottom-1 h-px w-0
          transition-[width] duration-200 ease-out
          group-hover:w-full
        "
        style={{ background: "var(--gradient-gold)" }}
      />
    </Link>
  );
}
```

### 5.4 Mobile Adjustments

Below 768px:
- `px-6` (24px) horizontal, `py-12` (48px) vertical
- Name → 24px, positioning → 12px, module → 16px
- Image `objectPosition: "center"`
- Same flex layout (top group + bottom group anchored to edges, image fills middle through flex `justify-between`)

Use Tailwind responsive prefixes:
```tsx
className="text-[24px] md:text-display"
```

---

## 6. Internal Pages (preview spec — to be expanded after homepage is locked)

Each module page (`/about`, `/building`, `/notes`, `/wearing`, `/making`) shares the same page chrome:

- `--color-bg` background (no cover image — clean Cloud Dancer)
- Top-left: small "Haoran Tang" link back to home (caption size, `--color-ink-secondary`)
- Top-right: page label in `micro` style ("BUILDING — 2026")
- Content area: max-width 720px (text-heavy pages) or 1200px (grid pages), centered
- Bottom: small "← back" link

### 6.1 Building (apps/workflow list)

- Grid of project tiles, 2-column desktop / 1-column mobile
- Each tile: small image (16:9 or square), project title (case-title scaled down to 24px), one-line description (caption), micro year tag
- Click tile → detail page

### 6.2 Building Detail

Single column, max-width 720px:
- Project title (case-title, 48px)
- Subtitle / one-line description (caption italic)
- Section divider: 1px gradient-gold line, full width of column
- Sections in order: **Problem → Decision → What didn't work → Final → Outcome**
- Each section: micro UPPERCASE label + body text
- Embedded media: full column width, with caption below

### 6.3 Notes

- List page: simple vertical list, each entry = title + date + 1-line excerpt
- Detail page: same template as Building Detail but content is long-form essay (use prose styling, MDX)

### 6.4 Wearing / Making (visual portfolios)

- Grid of images, 3-column desktop / 1-column mobile
- Click image → enlarged view (lightbox or detail page with single image + caption)
- Optional series titles as micro labels above groupings

---

## 7. File Structure

```
/app
  layout.tsx             # root, font + html lang + global styles
  page.tsx               # homepage
  globals.css            # CSS variables + base
  /about/page.tsx
  /building
    page.tsx             # list
    /[slug]/page.tsx     # detail
  /notes
    page.tsx
    /[slug]/page.tsx
  /wearing/page.tsx
  /making/page.tsx
  /contact/page.tsx
/components
  ModuleLink.tsx
  PageChrome.tsx         # shared header/footer for internal pages
  ProjectTile.tsx        # for Building list
  CaseSection.tsx        # for Building detail
/content                 # MDX or JSON for project data
  /building/*.mdx
  /notes/*.mdx
/public
  cover.jpg              # the gold-leaf cover image (place this here)
  /fonts                 # if self-hosting Editorial New later
tailwind.config.ts
next.config.js
```

---

## 8. Accessibility Minimums

- Background image has `alt=""` and `aria-hidden="true"` (decorative)
- All text meets WCAG AA contrast against `--color-bg` (verified: ink #1A1814 on #ECE9DD = 13.5:1, passes AAA)
- Module links have keyboard focus state — same gold underline as hover
- `prefers-reduced-motion`: disable the underline animation, use instant color change instead

---

## 9. What's NOT in this spec yet

- Project content (real text for each Building / Notes / Wearing / Making piece) — you'll add as MDX files
- Contact page details (form? mailto? socials list?)
- Open Graph / favicon assets
- Analytics

These are MVP-blockers only if you want to ship publicly. For private review, ship without them.
