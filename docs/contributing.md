# Maintaining this website

This page is for contributors to the instructor's documentation site. It is not part of the student's first exercise.

Content lives in `docs/`; navigation lives in `docs/.vitepress/config.mts`. Use Node.js 22.13 or newer, run `npm ci`, then `npm run docs:dev` to preview locally.

Run `npm run docs:build` before publishing. Pull requests validate the build. Pushes to `main` in `kaw393939/218_spec` publish through [GitHub Actions](https://github.com/kaw393939/218_spec/actions/workflows/deploy.yml). Student forks run checks without deploying the instructor's site.

Keep the first learner path short. Place optional background in reference pages. Preserve links between features, issues, PRs, code, and checks.
