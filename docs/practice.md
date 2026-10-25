---
prev: false
next: false
---
# Build a game you can trust

**RPS-001:** make one round of Rock, Paper, Scissors work. Choose a move; see both choices and the correct win, lose, or tie result. Playing again starts another round.

**Do the assignment in the [starter README](https://github.com/kaw393939/is218-rps-starter#readme).** This page explains the process. Keep using your own cloned game folder; you do not need a second copy or this site's build tools.

<WorkflowMap compact />

## 1. Try the starter

Use the README's setup and startup command. Open the printed address. Expect **“Starter: game rules not built yet.”** The interface is supplied, but a move will not produce a game result yet. That is the unfinished task, not a broken setup.

**Checkpoint:** you can see the game in your browser and its files in VS Code.

## 2. Decide with ChatGPT

Discuss your local `SPEC.md` in **ChatGPT desktop** before coding. Read the nine-matchup table: for each player/computer pair, is the expected result correct? Those are the expectations you will ask AI to test.

Agree on a short plan. Save it in `SPEC.md` using VS Code. Create one GitHub issue for RPS-001 and put its URL in the same file. You do not need to copy the whole conversation.

<HandoffMap />

**Checkpoint:** `SPEC.md` holds the rules, agreed plan, and your real issue link. You can explain what is included and what can wait.

## 3. Build with Codex

Use terminal Git to create the feature branch named in the README. Open **the same cloned folder** in Codex. Ask it to read `AGENTS.md` and your saved `SPEC.md`, inspect the code, and flag conflicts before implementing RPS-001.

The main task is the unfinished rule function in `game.py`, with meaningful tests and a short record in `SPEC.md`. Leave the supplied browser/server shell alone unless a specific problem requires a fix. Ask AI to explain any extra edit. Do not add scoring yet.

**Checkpoint:** AI has made a focused change and can explain which files changed and why.

## 4. Let AI check, then play

Before you play, ask Codex to run the checks and review the change against the spec. Tests should cover **all nine matchups** and verify that a browser request reaches the game logic. A random click is not a reliable way to check a particular matchup.

Its report should tell you **what it actually tested, what passed or failed, and what still needs your review**. An AI review is another chance to catch mistakes; it does not prove the experience is good.

Refresh, choose a new move, then play several rounds. Are both choices visible? Is each displayed result correct? Can you play again? In VS Code and the terminal diff, inspect how the outcome is decided and compare the tests with the spec's expected results.

Give specific feedback: “I chose Rock, the computer chose Paper, but it said I won.” Ask for a focused fix and rerun affected checks. If the result is correct, you do not need to invent a defect. Record only checks you actually performed.

**Checkpoint:** tests and your browser observations support the agreed behavior; any remaining limits are stated.

## 5. Keep the reviewed change

Follow the README's terminal Git steps to inspect, stage, commit, and push. Open a PR in your repository, describe the result and actual checks, and use `Closes #N` with your issue number. Review the diff and passing GitHub check before merging.

`SPEC.md` connects RPS-001 to the issue, implementation, and checks. Keep the record short; no chat transcript is needed.

**Done:** you have a playable round, a merged PR, a closed issue, and evidence you can explain. Optional class discussion: what did you ask AI to clarify or correct?

<details>
<summary>Another cycle, after the first one works</summary>

**RPS-002: first to two wins; ties do not count.** Agree on scoring, when the match ends, and what reset clears. Update the spec, implement, and test without breaking the original round rules. This is a later feature, not part of RPS-001. Personalize the title, colors, or wording after the core game works.

</details>
