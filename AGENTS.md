# Working in this repository

This is the instructor’s documentation site for a small AI collaboration exercise. The student game starter is https://github.com/kaw393939/is218-rps-starter, a separate Python repository. Do not copy a completed student solution here or silently implement the starter's unfinished rules.

- Onboard in this order: create the student's GitHub template copy → SSH clone → open the clone as a local AI project → explain the project and guide setup → run the unfinished game. Connect the agent before Python setup so it can help with errors. Keep the first conversation brief and paced by checkpoints.
- The documented path uses one local Codex chat inside ChatGPT desktop to discuss/save SPEC.md/implement/test/review, plus terminal Git over SSH and a browser. Other agents need local file read/edit and terminal access; browser/desktop control is useful for review but is insufficient alone. VS Code is optional. Do not require an IDE extension, separate CLI, app-to-app handoff, Command Palette, Git GUI, Copilot, or Codespaces.
- The exercise is fully self-paced with explicit actions and success checkpoints. Do not rely on classroom demonstrations. Use a self-contained worked failure example; no required extra reflection or bug-making task.
- Keep one authoritative student path in the starter README. This site introduces the purpose and provides a visual guide, help, and optional background. Do not add a second full setup/assignment path.
- Main cycle: Try → Decide → Build → Check → Keep. Save agreed decisions in SPEC.md. AI tests and reviews before the student plays and inspects the change; accurately state evidence limits.
- Keep the student agent conversational: one small step or question, then wait for an actual learner response. Pause for starter-check scope, a prediction before the plan, explanation of one actual test after AI checks, and a browser observation. Help with hints/examples; no command-by-command quizzes, grading, or invented student replies. The starter's AGENTS.md holds the detailed coaching behavior.
- Explain positive/negative cases separately from unit/integration/E2E levels. The starter's check.py combines Black, Pylint, pytest and a small real-browser journey with shared configuration. Keep this prepared; do not add tool-setup choices, score targets, or weaken checks to pass.
- RPS-001 is one independent round. Offer one optional follow-up at a time with less guidance; RPS-002 first-to-two scoring is the suggested next cycle. Avoid implementing follow-ups in the starter, grading machinery, token quotas, compulsory reflections, and unnecessary architecture.
- Read relevant files/specs before editing. Preserve links among requirements, issues, PRs, code, and actual checks. Do not invent evidence or source links.
- Documentation lives in docs/; navigation in docs/.vitepress/config.mts. Run npm run docs:build for site changes.
- The existing Node/SQLite link app is an archived worked example. Run npm test for changes affecting it; npm start runs it. GitHub Pages serves instructions only.
- Keep secrets, virtual environments, local SQLite data, caches, and student trial solutions out of this repository. Completed trials belong in separate repositories; research notes may link to them.
- Retire disposable trial repositories after walkthroughs and preserve the findings/evidence. Keep the active student path pointed at the unfinished template, not a solved trial.
- Students already have class GitHub SSH setup. Use git@github.com:USERNAME/REPOSITORY.git and terminal Git in instructions and trials.
