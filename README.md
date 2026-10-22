# IS218 Program Specs

Short plans and feature tracking for personal projects.

**Site:** https://kaw393939.github.io/218_spec/

Start with the [personal link library spec](docs/specs/link-library.md). Its five features link to GitHub issues; code and test links will be added during implementation. No application code has been written yet.

## Run the docs

Use Node.js 22 or newer.

```sh
npm ci
npm run docs:dev
```

## Publish

```sh
npm run docs:build
```

Push to `main` to publish through GitHub Actions. Pull requests also run the build.

## Add a project

Copy `docs/specs/template.md`, add the project to `docs/specs/index.md` and the sidebar in `docs/.vitepress/config.mts`, then follow `docs/review/index.md`.

The GitHub Pages base path is `/218_spec/`.
