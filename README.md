# TSKINDIA Technology LLP — Website

Single-page marketing site for **TSKINDIA TECHNOLOGY LLP**, built with Next.js (App Router), TypeScript, Tailwind CSS v4, and Framer Motion.

## Features

- Fully responsive single-page site (mobile, tablet, desktop)
- Dark / light theme toggle (top right, remembers your choice)
- Animated hero, scroll-reveal sections, and a signature morphing gradient mark
- Sections: Hero, Services, About (with company/LLP details), Process, Contact (opens email app), Footer
- Company logo used in the navbar, footer, and browser tab icon

## Run it locally

You need [Node.js](https://nodejs.org) version 18.18 or newer installed.

```bash
# 1. Install dependencies
npm install

# 2. Start the local dev server
npm run dev
```

Then open **http://localhost:3000** in your browser.

> First run needs an internet connection once, so Next.js can download the
> Google Fonts (Space Grotesk + Inter) used in the design.

## Build for production

```bash
npm run build
npm run start
```

## Project structure

```
src/
  app/
    layout.tsx      -> fonts, metadata, theme init script
    page.tsx         -> assembles all sections
    globals.css       -> color tokens (light/dark) + Tailwind setup
  components/
    Navbar.tsx        -> sticky nav, logo, theme toggle
    ThemeToggle.tsx    -> dark/light switch
    Hero.tsx           -> headline + animated flow mark
    FlowMark.tsx        -> signature morphing gradient shape
    Services.tsx         -> services grid
    About.tsx             -> company story + LLP details
    Process.tsx            -> 5-step working process
    Contact.tsx             -> contact form + info cards
    Footer.tsx               -> footer
public/
  tsk-logo.png          -> company logo
```

## Editing content

- Company details (email, address, LLPIN) live in `src/components/About.tsx` and `src/components/Contact.tsx`.
- Colors live as CSS variables in `src/app/globals.css` (`:root` for light, `.dark` for dark mode).
- Services and process steps are plain arrays at the top of `Services.tsx` and `Process.tsx` — edit the text there.
