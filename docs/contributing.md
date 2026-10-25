# Maintaining this website

This page is for the instructor and documentation contributors. Students do not build this website.

Content lives in `docs/`; navigation lives in `docs/.vitepress/config.mts`. With Node.js 22.13 or newer, run `npm ci`, then `npm run docs:dev` to preview locally. Run `npm run docs:build` before publishing.

Pushes to `main` in `kaw393939/218_spec` publish through [GitHub Actions](https://github.com/kaw393939/218_spec/actions/workflows/deploy.yml). GitHub Pages serves instructions only.

## Two repositories, two purposes

- **[is218-rps-starter](https://github.com/kaw393939/is218-rps-starter):** the student template. Its README is the single assignment path; `SPEC.md` carries current decisions. Keep RPS-001 unfinished on template `main`. Completed trials belong in separate repositories.
- **[218_spec](https://github.com/kaw393939/218_spec):** this documentation site and the earlier Node/SQLite link-library example. Preserve its existing URLs and LINK/PRACTICE feature records as archives.

Do not ask students to install this site's Node dependencies or build VitePress to work on their Python game. Do not copy a completed game solution into the starter.

## Keep the lesson focused

The lab must work without a classroom demonstration. Give explicit actions, expected results, and checkpoints in the starter README. Assume the existing class SSH setup, and link precise recovery help for Python, local app access, and Git identity.

Get students into their cloned folder as a local AI project before Python setup. The first conversation explains the goal and supplied files, guides setup, and ends with the student trying the unfinished game. Use short checkpoints so they can ask questions while getting something running.

The README documents ChatGPT desktop. Another agent needs local file read/edit and terminal access; browser/desktop control can help review. Keep discussion, saving the plan, implementation, tests, and review in the same project. VS Code is optional. Keep recovery on the help page and background reading optional. Avoid duplicate command sequences or a second full assignment path on the site.

## Reusable learning projects

Treat each template as a small learning environment: a recognizable goal, a runnable shell, one unfinished concept, examples in a short spec, and prepared checks. The learner sees a result early, makes decisions with AI, and connects one requirement to code and a meaningful test. Setup should introduce the tools in context, with room to ask questions.

Guide the first feature closely. After it works, offer a few small feature ideas and let the student choose one, write the request, and repeat with less prompting. New course projects can reuse this structure while changing the concept being practiced. A website might emphasize audience and design; a hosting project might emphasize deployment and recovery. Keep each project's first task narrow.

The starter's AGENTS.md makes the agent a conversational guide. It gives one small step or question, then waits. Use a few natural pauses: what the starter checks verify, a predicted outcome, what an actual test catches, and a round the learner observed. Give hints or a brief example when needed. Avoid quizzes after every command, grading, and extra reflection documents.

The risk is that the agent completes the exercise while the learner watches. Preserve those student responses; do not write both sides of the conversation or treat “yes” as an explanation. Keep short decisions in SPEC.md and actual observations in the work record. These design choices aim to support learning; agent-enacted walkthroughs cannot establish student engagement or learning outcomes.

Preserve the prepared checks and shared configuration. Explain positive/negative cases separately from unit/integration/E2E levels. The [worked failure example](./checks#when-a-check-fails) must be self-contained; do not require students to introduce bugs or write an extra reflection document.

The [earlier trial report](https://github.com/kaw393939/218_spec/blob/main/research/2026-10-25-full-ssh-assignment-trial.md) identified context handoff and setup friction. These are observations from an agent-enacted trial, not evidence of student learning outcomes. Use real student observation to check whether the revised materials help.
