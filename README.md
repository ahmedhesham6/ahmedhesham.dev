# ahmedhesham.dev

Personal website and blog — built with Astro, Tailwind CSS, and MDX.

## Stack

- **Framework**: [Astro v5](https://astro.build) with Content Collections and View Transitions
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) with the typography plugin
- **Content**: MDX with Zod-validated frontmatter
- **Code Highlighting**: Shiki with multi-theme support (8 themes)
- **Package Manager**: pnpm

## Features

- **9 themes** — Paper, Dawn, Sakura (light) and Night, Midnight, Ember, Cosmos, Forest, Noir (dark). Each with unique fonts, colors, border radii, shadows, background patterns, and code highlighting.
- **Multi-blob aurora hero** — Stripe-inspired animated mesh gradient with per-theme color blobs
- **Sticky sidebar TOC** — Active heading tracking on desktop, collapsible inline on mobile
- **Reading progress bar** — Gradient accent bar at the top of blog posts
- **Reactions** — Per-post reaction system with SVG icons
- **GitHub pinned repos** — Fetched via GraphQL (requires `GITHUB_TOKEN`)
- **Scroll reveal animations** — IntersectionObserver-based entrance animations
- **RSS feed** and **sitemap** auto-generated

## Getting Started

```bash
pnpm install
pnpm dev
```

## Commands

| Command         | Action                                      |
| :-------------- | :------------------------------------------ |
| `pnpm dev`      | Start dev server at `localhost:4321`         |
| `pnpm build`    | Build production site to `./dist/`           |
| `pnpm preview`  | Preview the build locally before deploying   |

## Environment Variables

| Variable       | Description                          | Required |
| :------------- | :----------------------------------- | :------- |
| `GITHUB_TOKEN` | GitHub PAT for pinned repos GraphQL  | Optional |

## Project Structure

```
src/
├── components/       # Astro components (Header, Hero, ThemePicker, etc.)
├── data/blog/        # MDX blog posts
├── layouts/          # BaseLayout, BlogPostLayout, PageLayout
├── lib/              # Utilities (GitHub API)
├── pages/            # Routes (index, blog, tags, 404, RSS)
└── styles/           # global.css (themes, patterns, animations)
```

## License

MIT
