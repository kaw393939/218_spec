# Working with AI

A short guided exercise in collaborating with AI through Markdown specs, focused GitHub issues, and small changes. Includes a working link-saving example.

**Site:** https://kaw393939.github.io/218_spec/

Start with the [exercise](docs/start.md), follow the [worked example](docs/example.md), and explore the optional [background and further reading](docs/background.md).

The [personal link library spec](docs/specs/link-library.md) describes the example project. Its five features link to GitHub issues, code, and tests. LINK-001 is implemented: save URLs and notes in SQLite, validate input, and reopen existing entries for duplicate URLs. Other features are planned.

## Run the application

Use Node.js 22.13 or newer (Node.js 24 is used in CI).

```sh
npm ci
npm start
```

Open http://127.0.0.1:3000. The app binds to your computer only. SQLite data lives in `data/links.sqlite` and is ignored by Git. Stop the app before copying the `data/` directory for a backup. `PORT` and `LINKS_DB_PATH` optionally change the port and database path.

`npm run dev` restarts the server after code changes. `npm test` runs the LINK-001 acceptance tests against isolated databases. Saving works without an API key; page reading and AI processing are not implemented yet.

GitHub Pages serves documentation only; run the application locally.

## Run the docs

Use Node.js 22.13 or newer.

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
