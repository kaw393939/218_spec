# Maintaining this website

This page is for the instructor and documentation contributors. Students do not build this website.

Content lives in `docs/`; navigation lives in `docs/.vitepress/config.mts`. With Node.js 22.13 or newer, run `npm ci`, then `npm run docs:dev` to preview locally. Run `npm run docs:build` before publishing.

Pushes to `main` in `kaw393939/218_spec` publish through [GitHub Actions](https://github.com/kaw393939/218_spec/actions/workflows/deploy.yml). GitHub Pages serves instructions only.

## Two repositories, two purposes

- **[is218-rps-starter](https://github.com/kaw393939/is218-rps-starter):** the student template. Its README is the single assignment path; `SPEC.md` carries current decisions. Keep RPS-001 unfinished on template `main`. Completed trials belong in separate repositories.
- **[218_spec](https://github.com/kaw393939/218_spec):** this documentation site and the earlier Node/SQLite link-library example. Preserve its existing URLs and LINK/PRACTICE feature records as archives.

Do not ask students to install this site's Node dependencies or build VitePress to work on their Python game. Do not copy a completed game solution into the starter.

## Keep the lesson focused

Confirm SSH access, Python, local AI tools, and Git identity during class setup. Demonstrate a short cycle: agree on behavior, save the plan, ask AI to implement and test, then inspect and play.

Keep installation recovery on the help page. Keep background reading optional. Avoid duplicate command sequences and handoff prompts across the site and README.

The [earlier trial report](https://github.com/kaw393939/218_spec/blob/main/research/2026-10-25-full-ssh-assignment-trial.md) identified context handoff and setup friction. These are observations from an agent-enacted trial, not evidence of student learning outcomes. Use real student observation to check whether the revised materials help.
