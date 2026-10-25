---
prev: false
next: false
---
# Build a game you can trust

**RPS-001 is a self-paced, guided first lab:** make one round of Rock, Paper, Scissors work. Choose a move, see both choices, and get the correct win, lose, or tie result.

**Follow the [starter README](https://github.com/kaw393939/is218-rps-starter#readme) for the actions and commands.** This page explains the process. Keep using your own cloned game folder; this site's build tools are not part of your assignment.

<WorkflowMap compact />

## 1. Try the starter

Run the supplied app and open its address. Click a move: expect both choices and **“Starter: game rules not built yet.”** A missing winner is the unfinished task, not a broken setup.

**Checkpoint:** the browser shows the game and its unfinished notice.

## 2. Decide with your coding agent

Use **Codex mode inside ChatGPT desktop**, open your cloned folder, and choose **Work in → This computer**, with Worktree off. Stay in this local chat for the exercise.

Predict one matchup yourself, then ask the agent to read `AGENTS.md` and `SPEC.md` and propose a short plan without editing. Compare it with the nine expected outcomes. Ask about anything you cannot explain.

Agree on the rules and a small test plan. A valid loss is a **positive case**; an unsupported move is a **negative case**. Those describe the inputs, while unit, integration, and E2E describe the [level of a check](./checks).

Once you agree, ask the agent to save the plan in `SPEC.md`. Use the app's terminal to inspect the saved file and run the prepared baseline checks. They verify the supplied shell, not the missing rules. Create one issue and ask the agent to add its real URL to the spec.

<HandoffMap />

**Checkpoint:** you have read the saved plan, the baseline passes with **STARTER BASELINE ONLY**, and `SPEC.md` contains your issue link.

## 3. Build in the same chat

Create the feature branch with terminal Git. Ask the same agent to compare the saved plan with the code, explain conflicts, and implement only RPS-001 and its tests.

Expect the rule function in `game.py`, rule/request tests in `tests/test_game.py`, a real-browser test in `tests/e2e/test_round.py`, and the work record in `SPEC.md`. Leave scoring for later.

**Checkpoint:** AI explains its focused changes, runs the full prepared checks, and reviews the diff before you play. It reports actual results and remaining human checks.

## 4. Check and give feedback

Play several rounds and try the keyboard controls. Are both choices visible? Is the result correct? Can you play again?

Run the full checks yourself and inspect the diff in the app's terminal. Find your predicted matchup in the tests and compare its assertion with the spec. You can open files in ChatGPT desktop; VS Code is optional.

Nine deterministic unit cases check the rules; request tests check server integration; a small real-browser journey checks a completed round and replay. Passing checks still leave you to judge the experience.

If something fails, use the [worked failure example](./checks#when-a-check-fails): describe the action, expected result, and observed result; ask for a focused fix and retest. Keep meaningful assertions and shared settings. You do not need to invent a bug.

**Checkpoint:** you can connect one requirement to code and a meaningful test. Ask the agent to record actual checks and your browser observations in `SPEC.md`.

## 5. Keep the reviewed change

Use the README's terminal Git steps to review, commit, and push. Open a PR linked to your issue. Inspect the changed files and actual check results before merging. Added tests must exercise the real rules; unchanged starter checks alone do not establish completion.

**Done:** your game works locally, the PR is merged, its issue is closed, and `SPEC.md` links to the implementation and actual checks. Stop the game with **Ctrl+C in the original class terminal**. No extra reflection document is required.

<details>
<summary>Another cycle, after the first one works</summary>

**RPS-002: first to two wins; ties do not count.** Write your own short request and test plan with less guidance. Decide when the match ends and what reset clears. Use a separate issue and PR. Personalizing the game can wait until its rules work.

</details>
