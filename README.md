# Phu Nguyen | Personal Website

My personal website and portfolio, styled like a VS Code editor (dark theme, editor-style tabs). It shows my projects, experience, and a bit about me. The home page is anchored by an interactive guitar fretboard: hover over the strings to pluck them.

## Pages

- **Home** (`/`): intro, featured projects, credentials, experience snapshot, and the guitar.
- **My Projects** (`/projects`): projects, experience and leadership, education, certifications, and skills. Entries are laid out like a music playlist, where "playing" a track expands its details.
- **About Me** (`/about`): who I am and what I do outside of code.

## Tech stack

- [Next.js](https://nextjs.org) (App Router) and React
- TypeScript
- Tailwind CSS v4
- Geist fonts via `next/font`
- The guitar is a hand-drawn SVG (`app/GuitarStrings.tsx`) with real fret spacing and a CSS pluck animation

## Getting started

Install dependencies and start the dev server:

```bash
npm install
npm run dev
# or: pnpm install && pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # run ESLint
```

## Project structure

```
app/
  page.tsx            # home page
  GuitarStrings.tsx   # interactive guitar fretboard
  Nav.tsx             # editor-style tabs
  layout.tsx          # header, fonts, page shell
  globals.css         # theme, pluck and fade-in animations
  about/page.tsx      # About Me
  projects/
    page.tsx          # projects, experience, education, skills
    Playlist.tsx      # expandable "playlist" of entries
    ProjectCard.tsx   # expandable card
```

## Editing content

- **Contact links:** fill in the `CONTACT` object at the top of `app/page.tsx`.
- **Projects, experience, certifications, and skills:** edit the arrays at the top of `app/projects/page.tsx`.
- **Featured projects and timeline on the home page:** edit the arrays at the top of `app/page.tsx`.

## Deployment

Deploy with [Vercel](https://vercel.com/new): import the GitHub repo and it builds automatically on every push.
