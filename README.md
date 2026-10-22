# IS218 Program Specs

A VitePress workspace for reviewing program specifications.

**Published site:** https://kaw393939.github.io/218_spec/

## Local development

Use Node.js 22 or newer (GitHub Actions uses Node.js 24).

```sh
npm ci
npm run docs:dev
```

## Build and preview

```sh
npm run docs:build
npm run docs:preview
```

## Add a specification

1. Copy `docs/specs/template.md` to a new file under `docs/specs/`.
2. Fill in requirements and acceptance scenarios.
3. Add a link and review status in `docs/specs/index.md`.
4. Open a pull request and follow `docs/review/index.md`.

Local search, a review guide, and GitHub edit links are included. No program specifications have been imported yet.

## Publishing

GitHub Pages uses **GitHub Actions** as its build source. `.github/workflows/deploy.yml` validates pull requests and publishes pushes to `main`. Build output and dependencies stay out of Git.

The base path is `/218_spec/`. Update it if the repository is renamed.
