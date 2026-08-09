<h1 align=center>phon</h1>

Landing page linking out to [Hassan Javed](https://github.com/divizn)'s live projects.
Will eventually replace the portfolio site at [phons.dev](https://phons.dev) — not cut
over yet, see CLAUDE.md.

## Stack

- Astro 7 (static output), with a SolidJS island for the particles background
- TailwindCSS v4 (CSS-first config), design tokens shared by hand with
  [portfolio-site](https://github.com/divizn/portfolio-site)
- Deployed to Cloudflare Workers Static Assets

## Commands

Package manager is `pnpm`.

```sh
pnpm install     # install deps
pnpm dev         # start dev server
pnpm build       # production build -> dist/
pnpm preview     # preview the built output
pnpm check       # type-check .astro files
pnpm lint        # eslint .
pnpm fmt         # prettier --write .
pnpm cf:preview  # astro build && wrangler dev, for Cloudflare-accurate local preview
pnpm cf:deploy   # astro build && wrangler deploy
```
