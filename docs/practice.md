---
prev: false
next: false
---
# Build a game you can trust

**RPS-001 is a self-paced, guided first lab:** make one round of Rock, Paper, Scissors work. Choose a move, see both choices, and get the correct win, lose, or tie result.

**Follow the [starter README](https://github.com/kaw393939/is218-rps-starter#readme) for the actions and commands.** This page explains the process. Keep using your own cloned game folder; this site's build tools are not part of your assignment.

<WorkflowMap compact />

The agent should give one small step or question, then wait for your response. A sentence is enough. “I'm not sure” is a useful answer; ask for a hint or an example. Keep learning in the conversation as you work.

## 1. Try the starter

Create your GitHub copy of the template, SSH-clone it, and open that folder as a local AI project. The README shows the ChatGPT desktop path and the first prompt. Ask the agent to explain what you will build and what is supplied, then guide setup one checkpoint at a time.

Let the agent prepare the class Python environment and run the baseline checks. They verify the supplied shell, not the missing rules. Then start the app in your class terminal and open its printed address. Click a move: expect both choices and **“Starter: game rules not built yet.”**

**Checkpoint:** the agent can read your clone, the checks pass with **STARTER BASELINE ONLY**, and the browser shows the unfinished game. You have something running before you plan the change.

Tell the agent what you see, then discuss what those passing starter checks verified.

## 2. Decide with your coding agent

Continue in the same local project chat.

The agent asks you to predict a matchup before explaining it or proposing the plan. Give the expected result and why. Check the nine expected outcomes together, then agree on a short plan without editing the app yet. Ask about anything that doesn't make sense.

Agree on the rules and a small test plan. A valid loss is a **positive case**; an unsupported move is a **negative case**. Those describe the inputs, while unit, integration, and E2E describe the [level of a check](./checks).

Once you agree, ask the agent to save the plan in `SPEC.md`. Use the project terminal to inspect the saved file. Create one issue and ask the agent to add its real URL to the spec.

<HandoffMap />

**Checkpoint:** you have read the saved plan and `SPEC.md` contains your issue link.

## 3. Build in the same chat

Create the feature branch with terminal Git. Ask the same agent to compare the saved plan with the code, explain conflicts, and implement only RPS-001 and its tests.

Expect the rule function in `game.py`, rule/request tests in `tests/test_game.py`, a real-browser test in `tests/e2e/test_round.py`, and the work record in `SPEC.md`. Leave scoring for later.

**Checkpoint:** AI explains its focused changes, runs the full prepared checks, and reviews the diff before you play. Then it shows one actual test for your predicted matchup and asks what mistake it could catch. Talk it through before moving on; you can ask for a hint.

## 4. Check and give feedback

Open the server's printed address again, play several rounds, and try the keyboard controls. In Safari, use Option+Tab if Tab skips buttons. Are both choices visible? Is the result correct? Can you play again?

Run the full checks yourself and inspect the diff in the app's terminal. `git diff` omits new, untracked files: inspect both new test files too, as the README shows. Find your predicted matchup in the tests and compare its assertion with the spec. You can open files in ChatGPT desktop; VS Code is optional.

Nine deterministic unit cases check the rules; request tests check server integration; a small real-browser journey checks a completed round and replay. Passing checks still leave you to judge the experience.

If something fails, use the [worked failure example](./checks#when-a-check-fails): describe the action, expected result, and observed result; ask for a focused fix and retest. Keep meaningful assertions and shared settings. You do not need to invent a bug.

**Checkpoint:** tell the agent about one round: both moves and why the result makes sense. You can connect one requirement to code and a meaningful test. Ask the agent to record actual checks and your browser observations in `SPEC.md`.

## 5. Keep the reviewed change

Use the README's terminal Git steps to review, commit, and push. Open a PR linked to your issue. Inspect the changed files and actual check results before merging. Added tests must exercise the real rules; unchanged starter checks alone do not establish completion.

**Done:** your game works locally, the PR is merged, its issue is closed, and `SPEC.md` links to the implementation and actual checks. Stop the game with **Ctrl+C in the original class terminal**. No extra reflection document is required.

<details>
<summary>Another cycle, after the first one works</summary>

Choose **one** [next feature](https://github.com/kaw393939/is218-rps-starter/blob/main/NEXT.md): first-to-two scoring, an explanation of the result, or personalizing the interface. Write your own short request and test plan with less guidance. Use a separate issue and PR, and preserve the working rules and checks.

</details>
