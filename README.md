# Ascend International School Website

Premium redesign of [Ascend International School](https://www.ascendinternationalschool.org/) built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and next-themes.

## Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS v4
- Framer Motion
- next-themes (light / dark)
- React Hook Form + Zod
- Lucide Icons
- next/font (Cormorant Garamond + Plus Jakarta Sans)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint

## Structure

- `src/app` — routes and SEO (`robots.ts`, `sitemap.ts`)
- `src/components` — layout, home sections, forms, UI primitives
- `src/data/content.ts` — programs, faculty, news, FAQs, gallery
- `src/lib` — site config and utilities
- `public/images` — brand and campus assets sourced from the official site

## Notes

- Theme preference is persisted via `next-themes`
- Forms validate client-side; wire them to your admissions backend / email service before production launch
- Contact details reflect publicly listed Ascend information (Yangon campus)
