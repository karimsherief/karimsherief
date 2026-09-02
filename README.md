# Karim — Portfolio (Next.js)

Dark, minimal front-end developer portfolio. Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Project structure

```
app/
  layout.tsx      Fonts (Fraunces, Inter, JetBrains Mono) + global metadata
  page.tsx         Assembles all sections
  globals.css      Base styles, focus states, reduced-motion handling
components/
  Header.tsx       Sticky nav + "available for freelance" status pill
  Hero.tsx         Headline + the live-typing code → live-preview animation
  StackMarquee.tsx Scrolling tech stack strip
  Work.tsx         Selected work grid — PLACEHOLDER projects, see below
  Approach.tsx     "How I work" principles list
  About.tsx        Bio + skills
  Footer.tsx       Contact CTA + email + social links
```

## Things to customize before shipping

- **`components/Work.tsx`** — swap the `PROJECTS` array for your real projects (title, description, tags, and a real screenshot/visual instead of the gradient placeholder).
- **`components/Footer.tsx`** — replace `hello@example.com` and the GitHub/LinkedIn/Twitter links.
- **`app/layout.tsx`** — update the `metadata` description if you want different SEO copy.
- **`components/About.tsx`** — adjust the bio and the `SKILLS` list to match you exactly.
- Colors and fonts are design tokens in `tailwind.config.ts` (`bg`, `surface`, `accent`, etc.) — change them there and they'll propagate everywhere.

## Deploy

Easiest path is [Vercel](https://vercel.com): push this to a GitHub repo, import it in Vercel, and it deploys automatically on every push.
