# dan.rosensha.in

Personal blog of Dan Rosenshain, built with [AstroPaper v6](https://github.com/satnaing/astro-paper) on Astro 6 and deployed to Cloudflare Pages (Workers Static Assets).

- **Live site:** https://dan.rosensha.in
- **Repository:** https://github.com/dan-dr/dan.rosensha.in

## Tech Stack

- [Astro 6](https://astro.build/) — static site framework
- [pnpm](https://pnpm.io/) — package manager
- [TypeScript](https://www.typescriptlang.org/) — type checking
- [MDX](https://mdxjs.com/) — component-rich Markdown for posts
- [Tailwind CSS](https://tailwindcss.com/) — styling
- [Pagefind](https://pagefind.app/) — static site search
- [Shiki](https://shiki.style/) — syntax highlighting
- [AstroCMS](https://www.astrocms.dev/) — local content editing (dev only)

## Prerequisites

- Node >= 22.12 (pinned to 22 via `.node-version`)
- pnpm

## Getting Started

```bash
pnpm install     # install dependencies
pnpm dev         # dev server at http://localhost:4321
pnpm build       # type-check, build to dist/, run Pagefind indexing
pnpm preview     # preview the production build locally
```

## Content Management

Content lives in `src/content/`. AstroCMS 0.1.3 runs in local project mode for development convenience — start it with `pnpm astrocms` and open http://localhost:4001/astrocms.

> Note: the AstroCMS rich-text UI can corrupt component-heavy MDX. For posts that use components, prefer editing the source files directly via the CMS file API or your editor.

## Linting & Type Checking

- `pnpm lint` — runs `oxlint --deny-warnings src` (this project uses oxlint, not ESLint)
- `pnpm astro check` — type-checks `.astro` and related files
- `pnpm format` / `pnpm format:check` — Prettier formatting

## Deployment

The site is deployed to Cloudflare Pages via the GitHub Git integration. Pushes to `main` trigger a rebuild.

`wrangler.jsonc` configures Workers Static Assets:

- `assets.directory` = `./dist`
- `not_found_handling` = `404-page`

No SSR adapter is used — the build is fully static.

- **Custom domain:** https://dan.rosensha.in
- **workers.dev:** https://dan-rosensha-in.danrosenshain.workers.dev

## Project Structure

```
src/
├── components/     # UI components
├── content/
│   ├── pages/      # standalone pages (e.g. about.md)
│   └── posts/      # blog posts (MDX/Markdown)
├── layouts/        # page/post layouts
├── pages/          # file-based routes
├── styles/         # global styles
├── utils/          # helpers
├── config.ts       # site config
└── content.config.ts
astro-paper.config.ts  # user-defined site configuration
```

## License

Licensed under the MIT License. See [LICENSE](./LICENSE) (originally from AstroPaper by Sat Naing).
