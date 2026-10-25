# Rock, Paper, Scissors: first student-path trial

> **Archived trial record.** The disposable review repositories are now read-only. Use the [current student starter](https://github.com/kaw393939/is218-rps-starter#readme) for the assignment. See the [release and cleanup record](2026-10-25-student-release-and-cleanup.md).

October 25, 2026. This is an agent-enacted trial, not research with human students. It cannot establish student motivation, boredom, completion time, or independent success.

## Materials and baseline

- Instructor site: [218_spec](https://kaw393939.github.io/218_spec/), deployed from 7ca4f44; initial site build and deployment succeeded.
- New game-only template: [is218-rps-starter](https://github.com/kaw393939/is218-rps-starter), initial revision 55029c0. Python/Flask interface and server supplied; game.py deliberately raises NotImplementedError. Initial 12 tests cover the shell, not the rules.
- Student copy: [rps-student-trial-1025](https://github.com/kaw393939/rps-student-trial-1025), initial revision b108565. Created through Safari's actual Use this template → Create a new repository form, with all branches off and optional Copilot prompt left blank.
- Fresh SSH clone: git@github.com:kaw393939/rps-student-trial-1025.git into /Users/kwilliams/Documents/is218/rps-student-trial-1025. Both origin URLs matched the student's copy.

## What was exercised

1. Read the published overview and starter README. The page distinguishes the illustrated goal from the real unfinished app, and sends students to one authoritative README.
2. Ran the README's terminal commands: SSH clone, code ., python3 -m venv .venv, install requirements, and .venv/bin/python run.py. The default Python on this Mac is 3.14.7; setup and checks passed there. Separately verified the supplied starter on the class Python 3.12.14 baseline. No venv activation or Node/docs build was needed in the student copy.
3. Browser GET showed “Starter: game rules not built yet.” Clicking Rock showed both choices but no false winner. This made unfinished behavior distinguishable from broken setup.
4. Used actual Codex UI for a no-code planning conversation. It explained player-perspective results, all nine expected outcomes, fixed-choice integration testing, and the limits of shell tests. Saved the resulting short plan into SPEC.md through VS Code's normal Find/Replace editor controls; no Command Palette or Git GUI was used.
5. Created [issue #1](https://github.com/kaw393939/rps-student-trial-1025/issues/1) through Safari's issue form. Saved its real URL in SPEC.md through VS Code. Terminal git status showed main...origin/main and only the intended SPEC.md edit; created rps-001.
6. Started a **new** Codex chat with the README's implementation prompt, carrying no planning transcript. It read the saved plan and issue, proposed only game.py, tests/test_game.py, and SPEC.md, and waited for approval. Approved the plan in the actual composer.
7. Codex implemented the rules, added nine explicit outcomes plus one real Flask request/result integration check with fixed computer scissors, ran pytest, and reviewed the diff before browser play. Its report said 22 passed and correctly left browser checks pending. Independently reran the README's pytest command: 22 passed. Reviewed the diff and new test file; expected answers were literal values from the table, not computed by the implementation.
8. In the browser, saw Paper/Paper tie, Rock/Rock tie, Scissors/Paper win, and Rock/Scissors win. Both choices were visible, the unfinished notice disappeared, and each choice began a new round. Tab focused Rock; Enter submitted another correct round. Random browser play did not exercise all nine cases; automated checks did.

9. Gave actual browser observations to Codex through its UI, asked for an explanation of rock/scissors and its test, and requested replacement of pending human-check text. It explained the literal expected answer and updated only SPEC.md. Inspected the final staged diff: the plan and issue remained, rule/test links were real, and browser observations were limited to four matchups.
10. Committed 3ee544c and pushed rps-001 over SSH. Created [PR #2](https://github.com/kaw393939/rps-student-trial-1025/pull/2) through Safari, including actual checks and Closes #1. GitHub's Python 3.12 check passed in eight seconds. Reviewed Files changed in Safari, then Merge pull request → Confirm merge. Verified merge commit 76c694d and issue #1 closed automatically.
11. Kept the completed solution in the trial repository. Rechecked the instructor starter: game.py still raises NotImplementedError, its SPEC still states unfinished rules, and its worktree is clean. Starter README follow-up corrections are published in 5c86079. The instructor site repository is no longer offered as a template, reducing the chance of copying the wrong project; is218-rps-starter is the public template.

## Friction and changes

**Template creation offers another AI product.** GitHub presents an optional Copilot prompt during repository creation. The README now explicitly says to leave it blank; students are using the class's ChatGPT/Codex tools.

**Successful startup still looks alarming.** Flask prints a red development-server warning, and pip offers an update notice. Setup help now distinguishes these from startup failure and points to the Running on address. No new production server or package update is required for this exercise.

**Copying the agreed plan remains the main manual handoff.** Saving one short section in SPEC.md worked, and a new Codex chat recovered it without a transcript. This is simpler than collecting plan, issue URL, and runtime context into another prompt, but actual learners may still need a demonstration of replacing just the intended paragraph.

**The final spec must replace starter statements.** A preflight review identified a risk of adding evidence while leaving Not implemented or Rules not verified text. The README now explicitly says to replace starter status, preserving the plan and issue. In this trial Codex already did that correctly on its first implementation pass.

**The browser check needs a new move.** Refreshing an existing POST view initially left the old visible round in place; choosing another move showed the changed app. Server logs confirmed automatic Python reload. The guide should explicitly ask students to choose a new move after refresh rather than judge readiness from an old round alone.

**The main behavior is easy for AI to implement.** That is intentional for the first cycle. The learning opportunity is agreeing expected outcomes and comparing actual evidence, not manufacturing defects or making students implement extra architecture. RPS-002 provides a later, separate state/scoring change with less prompting.

**Remaining questions for an actual student pilot.** Can learners save the short plan without overwriting the expected-result table? Can they explain one rule and distinguish its real test from the supplied shell stubs? Will they inspect the result instead of treating a green check as completion? This assisted run cannot answer those questions. No extra rubric or required reflection was added to address assumptions about learners.

## Evidence and limits

- [Unfinished starter](./evidence/2026-10-25-rps-trial/starter.png)
- [Played game after implementation](./evidence/2026-10-25-rps-trial/completed-game.png)
- [Published overview](./evidence/2026-10-25-rps-trial/published-site.png)
- [Merged trial PR](./evidence/2026-10-25-rps-trial/merged-pr.png)

Repository creation, issue creation, planning, separate-chat handoff, plan/issue editing, Codex implementation/feedback, and browser play used real UI controls. SSH clone, environment/startup, Git commands, source diff/test inspection, and independent checks used direct terminal tooling rather than native terminal input. The separate ChatGPT desktop planning application remains untested because its control was rejected in an earlier trial; planning here used a disclosed separate Codex conversation. This establishes a saved-file handoff between chats, not a completed ChatGPT-desktop-to-Codex trial.

Native Code source-link navigation and input produced delayed/stale accessibility states. These are Computer Use limitations, not established student-facing application defects. Verified actual text before sending requests and inspected real files/diffs rather than treating a stale title as proof.
