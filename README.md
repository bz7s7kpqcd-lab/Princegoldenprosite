# Prince GoldenPro — Personal Site

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Structure

- `app/` — root layout, global styles, the single page (`page.tsx`)
- `components/` — one component per section (Hero, About, Products, Philosophy,
  Timeline, Now, Writing, Skills, TechStack, Contact, Footer), plus shared
  pieces (`Reveal`, `MagneticLink`, `GeometricMesh`, `Nav`)
- `lib/data.ts` — all content (products, timeline, posts, skills, tech stack,
  contact links) in one typed file. Edit this file to change copy without
  touching any component.
- `public/` — favicon and Open Graph image

## Deploying on Vercel

1. Import this GitHub repo in Vercel.
2. Framework preset: **Next.js** (auto-detected).
3. No environment variables required for the base site.
4. Deploy — point your real domain at it from Vercel's Domains tab.

## Before you launch

- Update contact links/email in `lib/data.ts`.
- Update `siteUrl` in `app/layout.tsx` once you pick a domain.
- Swap product placeholders in `components/Products.tsx` for real screenshots.
