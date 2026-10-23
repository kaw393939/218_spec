# Working in this repository

This is a small teaching project about collaborating with AI through ordinary Markdown, focused issues, and reviewable changes.

- Students use ChatGPT desktop, Codex, and VS Code. Explain discussion in ChatGPT, explicit plan handoff to Codex in the same local folder, and inspection in VS Code. Do not substitute Copilot or Codespaces.
- Keep student instructions short, concrete, and accessible. Emphasize practicing the process; avoid adding rubrics, token quotas, or extra process machinery.
- The link library is the worked example. IS117 uses a T-shirt ecommerce site, IS218 a four-function web calculator, and IS373 investigates an existing Docker/CI/CD deployment with a real domain. These course projects are not implemented here.
- Read the relevant spec and existing files before editing. Discuss unresolved behavior before implementing it. Keep each change within its agreed scope.
- Preserve feature IDs and links between specs, issues, PRs, source, and checks. Distinguish implemented behavior from plans. Do not invent evidence or code links.
- Documentation lives in `docs/`; navigation is in `docs/.vitepress/config.mts`.
- Build docs with `npm run docs:build`. Run `npm test` for application changes; `npm start` runs the local app.
- GitHub Pages serves docs only. The app uses Node.js and SQLite. LINK-001 saves links; page reading and AI processing remain planned.
- AI-assisted coding does not require adding AI to the application. Keep secrets and local SQLite data out of Git.
