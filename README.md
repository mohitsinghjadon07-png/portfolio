# Mohit Singh Jadon | Developer Portfolio

A responsive, animated portfolio built with React, Vite, React Router, Framer Motion and React Icons. Pages: Home, About, Projects, Resume and Contact. Particles are drawn with a small canvas component, so there is no extra particle library.

## Requirements

- Node.js 18 or newer
- npm

## Install and run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
npm run preview    # preview the production build
```

## Edit your content

Almost everything lives in `src/data/site.js`:

| Field | What it does |
| --- | --- |
| `site.linkedin` | Paste your LinkedIn URL. While empty, LinkedIn is hidden everywhere. |
| `site.email` | Paste an email address to show an email link. |
| `site.resumeFile` | Put your PDF in `public/` (for example `public/resume.pdf`) and set `'/resume.pdf'` to show Download resume. |
| `projects[].repo` | Add a repository URL. While `null`, the card links to your GitHub profile. |
| `projects[].live` | Live demo URL, or `null` to hide the button. |

Colors, fonts and spacing are CSS variables at the top of `src/styles/global.css`.

## Project structure

```
src/
  components/   Navbar, Footer, ParticleBackground, Preloader, Typewriter,
                ScrollToTop, ProjectCard, ProjectArt, SectionHeading, ...
  pages/        Home, About, Projects, Resume, Contact, NotFound
  data/         site.js (all editable content)
  styles/       global.css, pages.css
  App.jsx, main.jsx
```

## Deploy

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/mohitsinghjadon07-png/<repo-name>.git
git push -u origin main
```

Create the empty `<repo-name>` repository on GitHub first.

### 2. Deploy on Vercel

1. Sign in at vercel.com with your GitHub account.
2. Choose **Add New, Project** and import the repository.
3. Vercel detects Vite. Keep the defaults: build command `npm run build`, output directory `dist`.
4. Click **Deploy**.

`vercel.json` already rewrites all routes to `index.html`, so refreshing `/about` or `/projects` works.

### Using GitHub Pages instead

Set `base: '/<repo-name>/'` in `vite.config.js`, switch `BrowserRouter` to `HashRouter` in `src/main.jsx`, then publish the `dist` folder.

## Accessibility and performance

- Respects `prefers-reduced-motion`: particles freeze, typing and counters show final values, motion is simplified.
- Cursor glow and magnetic buttons only run on devices with a fine pointer.
- Particle animation pauses when the tab is hidden.
