# Working in this repository

This is the instructor’s documentation site for a small AI collaboration exercise. The student game starter is https://github.com/kaw393939/is218-rps-starter, a separate Python repository. Do not copy a completed student solution here or silently implement the starter's unfinished rules.

- Students use ChatGPT desktop to discuss, Codex in the same local project folder to implement/test/review, VS Code to inspect, and terminal Git over SSH. Do not teach the VS Code Command Palette, Git GUI, Copilot, or Codespaces as substitutes.
- Keep one authoritative student path in the starter README. This site introduces the purpose and provides a visual guide, help, and optional background. Do not add a second full setup/assignment path.
- Main cycle: Try → Decide → Build → Check → Keep. Save agreed decisions in SPEC.md. AI tests and reviews before the student plays and inspects the change; accurately state evidence limits.
- RPS-001 is one independent round. RPS-002 first-to-two scoring is a separate later cycle. Avoid new features, grading machinery, token quotas, compulsory reflections, and unnecessary architecture.
- Read relevant files/specs before editing. Preserve links among requirements, issues, PRs, code, and actual checks. Do not invent evidence or source links.
- Documentation lives in docs/; navigation in docs/.vitepress/config.mts. Run npm run docs:build for site changes.
- The existing Node/SQLite link app is an archived worked example. Run npm test for changes affecting it; npm start runs it. GitHub Pages serves instructions only.
- Keep secrets, virtual environments, local SQLite data, caches, and student trial solutions out of this repository. Completed trials belong in separate repositories; research notes may link to them.
- Students already have class GitHub SSH setup. Use git@github.com:USERNAME/REPOSITORY.git and terminal Git in instructions and trials.
