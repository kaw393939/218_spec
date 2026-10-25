# Guided onboarding self-evaluation — October 25, 2026

## Scope and evidence

This is a practical agent-enacted simulation, not observation of a human student. The instructor authorized a fresh SSH clone, completing RPS-001, and fixing confusing instructions. After the desktop-control limit was explained, the instructor explicitly requested simulated learner/AI interactions using real tools.

Computer Use had previously rejected control of ChatGPT desktop and macOS Terminal. This run does not retry or bypass that restriction. Native Safari/browser interaction, command execution on the Mac, repository files, and GitHub checks are real. Desktop menus, project connection, and a second desktop chat are not tested. The short learner questions below are constructed probes, not a verbatim student transcript or private reasoning trace.

- Source starter: `70f5605f39c7a77bacfc88dfe882342f6ea9a54a`.
- Student copy: [rps-onboarding-trial-1025](https://github.com/kaw393939/rps-onboarding-trial-1025), generated through Safari's **Use this template** form.
- Initial copy commit: `2293f48010bfece15770e235ad5f34749a8a2232`.
- Initial fresh SSH clone: `/Users/kwilliams/Documents/is218/rps-onboarding-trial-1025` (preserved elsewhere after cleanup; see below).
- The distributed starter remains unfinished. This trial copy contains the walkthrough solution.

## Walkthrough log

| Stage / learner probe | Agent response and actual action | Observation / adjustment |
| --- | --- | --- |
| Start: “Where is Use this template?” | Read the live homepage and README in the in-app browser. It was signed out. Opened the same template in already-signed-in Safari; created the public copy with all branches off and Copilot blank. | The button is absent when signed out. Add “Sign in to GitHub” beside template creation. The README otherwise matches the current creation form. |
| Clone: “Am I in my copy?” | Fresh `git clone git@github.com:kaw393939/rps-onboarding-trial-1025.git`; checked `pwd`, SSH origin, clean `main`. | Both remote lines name this copy. No cloning, Git, or app implementation shortcut was needed. Command tools substitute for the Terminal UI; record that limit. |
| First project conversation: “What am I making?” | Read README.md, AGENTS.md, SPEC.md, supplied server, and fixtures. Explain: the page/server are supplied; game.py needs the winner rule; check.py runs prepared checks. | Simulated local-file connection succeeds through command tools. No desktop project-connection claim is made. Keep this explanation brief and defer the feature plan. |
| Setup: “Python says 3.14. Did I break something?” | Verified the default is 3.14.7, read the linked class setup, and located the already-installed 3.12.14 interpreter. Use it only to create this clone's new .venv. | This Mac uses an existing uv-managed interpreter, while the class guide uses pyenv. Do not install another version manager or change the global Python just for this trial. |
| Baseline: “Everything passed. Am I done?” | Installed pinned dependencies and Chromium, then ran full check.py: Black/Pylint passed, 12 non-browser tests and 1 Chromium test passed. Explained STARTER BASELINE ONLY. | No tracked files changed during setup. All passes are about the shell; the browser's unfinished notice makes the missing task visible. Dependencies/browser assets were cached on this Mac; this does not measure a student's first-download time. |
| Launch: “The address is in use.” | Default run.py exited with port 5050 in use. Used the help page's `PORT=5051 .venv/bin/python run.py`; clicked Rock in Safari and saw both choices plus the unfinished notice. | Recovery works without stopping an unrelated server. Add a return-later reminder to reuse the selected port/address. |
| Decide: “Rock loses to Paper; paper covers rock. Is a loss a negative test?” | Explained that a valid expected loss is positive; missing/unsupported input is negative. Compared the table and saved the short plan in SPEC.md before editing game.py. | Directly link the table at this point. Clarify that the student's separate project terminal opens in Step 2, rather than implying it was already opened. |
| Issue/branch: “Do I need labels and a project board?” | Opened Safari's real issue form. Safari focus changed while entering the draft; continued without interrupting the user's browsing and submitted [issue #1](https://github.com/kaw393939/rps-onboarding-trial-1025/issues/1) through the connector. Added the link to SPEC.md; verified only SPEC.md was modified on main, then switched to rps-001. | Optional GitHub metadata can stay blank. This run verified the issue form's fields, but submission used the API. The intended plan carried onto the new branch. |
| Build/check: “How do we know the new tests check the missing feature?” | Added nine literal unit cases, one real request, and a real-browser replay. Before implementation, all 10 new non-browser cases failed. Implemented only game.py; full check then passed Black/Pylint, 22 non-browser cases and 2 Chromium cases. Inspected the diff and both new files; a second read-only code review found no functional issue. | Real missing behavior gave useful failing-test feedback; no deliberate bug was needed. Fixed only randomness in request/E2E tests. The extra review is another agent perspective, not independent proof. |
| Play: “Can I trust the green checks?” | After the AI checks/review, used the separate in-app browser at port 5051. Observed Rock/Rock tie, Paper/Rock win, Tab then Enter for Rock/Scissors win, and Scissors/Rock loss. Both choices and result changed, and replay worked. | These were real interactions against the running clone with ordinary randomness. Browser tests cover fixed sequences; the learner still needs to try the result. This run's browser review is automated rather than human. |
| Inspect: “The new tests aren't in git diff. Did they disappear?” | `git status --short` showed two ?? paths. Read both files explicitly. Connected the literal Rock/Paper/lose row to game.py's losing path and the real-request Computer wins assertion. | Existing README explains untracked files correctly. Four expected files changed; no new dependencies, scoring, server/interface changes, or weakened settings. |
| Keep: “What shows that we finished?” | Reviewed/staged the four files, committed and SSH-pushed rps-001, created the PR through the connector, and inspected Files changed in the browser. Waited for CI before merging; confirmed the issue closed. Stopped only this trial's server with Ctrl+C, switched to main and pulled the merged result. | The linked issue/PR/spec/code/checks form a usable completion record. PR creation/merge used the API, not the GitHub form. Local main was clean after the pull. |

## Representative simulated exchange

These are concise constructed prompts/responses grounded in the real steps above:

- **Learner:** “I cloned it. Help me get started, one checkpoint at a time.” **AI:** “This is your local copy. The page/server are supplied; game.py needs the winner rule. First we will verify Python and the prepared checks, then you will try the unfinished page.”
- **Learner:** “Python says 3.14. Should I reinstall?” **AI:** “The class reference is 3.12. We found that interpreter already installed; use it for this project's .venv and leave the global Python alone.”
- **Learner:** “All the checks passed. Is the feature done?” **AI:** “The output says STARTER BASELINE ONLY. Click a move: the unfinished notice shows what we still need to build.”
- **Learner:** “Rock loses to Paper. I agree with the small plan.” **AI:** “Save that plan in SPEC.md, inspect it, and link the issue. Then create the feature branch before implementation.”
- **Learner:** “It works when I click. Why inspect the tests?” **AI:** “A few random rounds do not exercise all nine matchups. Find your Rock/Paper example in the literal tests and compare its expected loss with the real request result.”

## Final result and fixes

- [PR #2](https://github.com/kaw393939/rps-onboarding-trial-1025/pull/2) merged feature commit `04704b713916fc850660eae3821cb64d5a1f1b02` as `544eb159bccc46727b8a1d5424cacc3e42d3e829`. Issue #1 closed automatically.
- [PR CI](https://github.com/kaw393939/rps-onboarding-trial-1025/actions/runs/40237513010) and [merged-main CI](https://github.com/kaw393939/rps-onboarding-trial-1025/actions/runs/40237594557) passed. There are 24 behavior cases: nine rule units, thirteen request/shell cases, and two Chromium journeys.
- [Starter commit cdaa419](https://github.com/kaw393939/is218-rps-starter/commit/cdaa4190261268eae6feb242f57c88c60ebe881d) adds the sign-in reminder, links the expected-results table, explains when the second terminal opens, preserves the selected port on return, and puts next-feature Git/branch steps before running the app or editing the spec. Its [CI passed](https://github.com/kaw393939/is218-rps-starter/actions/runs/40237588137).
- A second fresh SSH clone of that starter commit confirmed the revised text and the original unfinished game.py. No solution or added feature tests were published into the template.
- Site setup help now includes the missing-template-button recovery and alternate-port reminder. The site build passed locally.
- The disposable trial repository is archived read-only. Its PR and issue remain readable. Only this trial's server was stopped; the existing service on port 5050 was left alone.
- Evidence is preserved at `/Users/kwilliams/Documents/is218-cleanup-2026-10-25/onboarding-trial-1025`: verified complete Git bundle, PR/issue metadata, merged CI log, before/after and merged-PR screenshots, and the starter recheck clone. The completed local clone is at `/Users/kwilliams/Documents/is218-cleanup-2026-10-25/local-checkouts/rps-onboarding-trial-1025`.

## Critical interpretation

Connecting the agent before environment setup is useful here: both real setup snags could be addressed within the conversation, with a concrete next checkpoint. The baseline warning and unfinished page give a clear distinction between getting the shell running and finishing the feature. Predicting one result provides a specific example to revisit in the code and tests.

The remaining learning risk is passive prompt-following. A simulated learner can produce every expected response without understanding it. The student decisions and inspection steps should stay: explain a prediction, question the plan, identify an assertion, and try the result. The next-feature choices then reduce prompting and ask the learner to frame a change. Additional documentation alone cannot demonstrate that this transfer occurs.

The first step still includes several concepts and two terminal roles. The concrete connection/run checkpoints make the sequence coherent in this simulation, but a real learner may need different pacing. Do not claim that desktop navigation, engagement, or understanding is resolved by this run.

## Follow-up: conversational guidance

The instructor asked to address passive prompt-following. The starter's AGENTS.md and README now ask for one small step or question per learner-facing turn, with an actual wait for a response. Four natural conversations cover the starter checks, a predicted matchup, one real test, and a round the learner played. The plan, implementation, checks, and Git path remain the same.

Short read-only agent response samples checked the revised guidance:

- With setup already complete, “Help me plan RPS-001” produced only: “You choose Rock; the computer chooses Paper. What should happen, and why?” It stopped before giving the answer or plan.
- A mistaken “rock is stronger” answer received a rule-based hint and one follow-up question. A corrected explanation received a short plan and a request to agree, without editing files.
- After implementation/checks, the first response showed unnecessary request-fixture code. The guidance was tightened to prefer the literal unit case and assertion. The next sample used only `("rock", "paper", "lose")` and `assert determine_winner(player, computer) == expected`, then asked what mistake the test would catch.
- “I don't know what assert means” received a short explanation and one nearby example. Continued uncertainty received a direct explanation and the next small action, without an endless quiz or a demand for a correct answer to proceed.
- That transition initially said to refresh the page. The guidance now explicitly uses the server's printed address and selected port to avoid resubmitting a prior POST; the repeated sample used the corrected instruction.

The student-facing text offers hints and examples, accepts brief answers, and adds no grading or separate reflection document. Later features keep these conversations while asking the learner to supply the first example themselves. The process diagram and help page reflect this approach.

These are a few response samples, not a reliability estimate or evidence of student learning. The samples used current guidance and actual source/test files, with no app control, code edits, test execution, or new GitHub trial repositories. Application behavior and the unfinished starter were left unchanged.

## Limits

This can expose broken commands, mismatched instructions, missing references, and plausible decision overload. It cannot establish how long an NJIT student will take, whether they learn the concepts, or whether they feel engaged. Real student observation remains necessary for those claims.
