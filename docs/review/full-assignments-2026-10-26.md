# Full coached assignment trials — October 26, 2026

Instructor evidence only. These trials used fresh GitHub template copies, **real SSH clones**, local code and real browsers, with separate AI agents supplying simulated learner replies. Coaches waited for those replies rather than writing both sides. Substantial setup, implementation and checking were performed by AI. This cannot establish real student engagement, learning, customer preference or complete accessibility.

Both first features were completed, reviewed and merged after their checks passed. Optional next-feature requests were discussed and left unimplemented. Student templates remain unfinished.

## Scope and tools

| Trial | Separate student repository | Current evidence |
| --- | --- | --- |
| IS218 | [is218-coached-full-1026](https://github.com/kaw393939/is218-coached-full-1026), cloned over SSH | [Merged PR #2](https://github.com/kaw393939/is218-coached-full-1026/pull/2), closed issue #1, clean local `main` matching the remote, and [successful main CI](https://github.com/kaw393939/is218-coached-full-1026/actions/runs/40270791837). |
| IS117 | [is117-coached-full-1026](https://github.com/kaw393939/is117-coached-full-1026), cloned over SSH | Baseline 17 cases; completed checks pass formatting/lint and 20 cases (7 server + 13 Chromium). [PR #2 merged](https://github.com/kaw393939/is117-coached-full-1026/pull/2); [main CI/publication passed](https://github.com/kaw393939/is117-coached-full-1026/actions/runs/40272223895). [Open the completed fictional shop](https://kaw393939.github.io/is117-coached-full-1026/). |

Terminal Git used SSH remotes. The evaluation used local file/terminal tools for commands and `gh` for GitHub operations; the student path uses GitHub in a browser. Real Chromium and native browser control supplied visual evidence. Native Terminal input and the desktop local-project picker were not retried after the earlier safety block. Commands ran through permitted tools on the actual Mac; native input and picker interaction remain unverified. This is not a newly reproduced UI failure. Windows/WSL and cold-machine installation were not tested; downloads reused caches.

This report covers the full-assignment trials. The earlier [onboarding report](./onboarding-2026-10-26) separately covers startup and switching preview modes. Its manual mode-switch and save probes are not claimed as newly rerun here.

## IS218: decisions, help and actual review

The learner first asked to get the unfinished game running. The coach read the clone before creating its own Python 3.12 environment, installing pinned requirements and Chromium, and checking the shell. All **18 baseline cases** passed: 13 non-browser + 5 Chromium, with **STARTER BASELINE ONLY**. Port 5050 belonged to another program and was left alone; the trial used 5051.

Before the feature plan, the learner explained that page/input checks do not establish absent winner rules. It predicted Rock against Paper should lose because Paper covers Rock, supplied `lizard` as rejected input, and chose one round without scoring. The coach clarified the specified result message, explained a valid loss as a positive case, and distinguished rejected input from test level. The learner created its issue, switched branches and approved the saved plan.

After implementation and AI checks, the coach showed the actual Rock/Paper/`lose` unit case and assertion. A **prescribed passive-response probe**, explicitly requested for this evaluation, made the learner initially answer “It passed, so yes?” This was scripted role-play, not a naturally observed student response. One explanation of inputs/assertion and one concrete follow-up produced an assisted explanation: returning `win` would fail against expected `lose`. The coach did not count the initial acknowledgment as understanding or repeat a quiz until a correct phrase appeared.

The learner agent then operated the actual random game: Rock/Scissors displayed **You win!**, Scissors/Scissors tied, and Tab/Enter submitted another round. It connected the win to Rock beating Scissors. The root evaluator’s separate native-browser spot check observed Rock/Rock → tie; that supplements the learner-agent observation.

<img src="/review/full-assignments-2026-10-26/is218-learner.png" alt="Actual Chromium keyboard round showing Rock against Scissors and You win in the simulated IS218 trial" width="550" />

During PR review, the learner independently noticed that the notes promised PR/CI links absent from SPEC. The coach added the actual links before merging the latest checked head. The optional transfer prompt supplied no feature answer: the learner chose first-to-two and proposed **1–1, Rock/Scissors → 2–1 and a player match-win message**. That follow-up was not implemented.

The [trial SPEC](https://github.com/kaw393939/is218-coached-full-1026/blob/main/SPEC.md), [code/tests](https://github.com/kaw393939/is218-coached-full-1026/pull/2/files) and [simulation notes](https://github.com/kaw393939/is218-coached-full-1026/blob/main/docs/coach-trial.md) preserve decisions, assistance and evidence limits. Final local and main CI checks passed Black/Pylint and **29 cases: 23 non-browser + 6 Chromium**, including nine literal rules, a real request/result and real browser replay. AI self-review is not independent proof.

## The starter correction this exposed

Completing the rules exposed a supplied development-refresh test that still demanded the unfinished notice. After formatting was corrected, the completed trial had 23 fast passes and **5 browser passes / 1 failure** at that obsolete assertion. The focused fix retains the saved-Python marker and checks the fresh starting page has no prior choices/outcome. No shared configuration or meaningful feature assertion was disabled.

[Starter PR #6](https://github.com/kaw393939/is218-rps-starter/pull/6) merged that fix, clarified one friendly follow-up for bare “yes/it passed,” and required real PR/CI links before final review. Its [CI](https://github.com/kaw393939/is218-rps-starter/actions/runs/40271107225) passed **18 cases: 13 + 5**, still reporting the unfinished baseline. The completed 29-case solution remains in the separate trial repository.

## IS117: checked slice, assisted explanations and review limits

Two **prescribed passive-response probes** tested the existing coaching contract; they are scripted role-play, not naturally observed student behavior. At the name decision, “Can you just pick one for me?” led the coach to offer Common Ground (shared/welcoming) and Side Street (after-class plans). The learner chose Side Street as less formal and better for friends: an assisted choice and reason. It later qualified Explorer as local cafés, not big adventures, chose A because the bold phone headline was easier to read while B felt too fancy, and supplied the jeans/open-overshirt example itself. It kept the wordmark after reading the smallest phone row and finding the turn cue secondary to the name. The 112px row remains a reviewed stress case, not an invented minimum.

The completed local `npm run check` passed formatting/lint and **20 cases: 7 server + 13 Chromium**. Feature tests compare identical offers in both studies, storefront/guide computed styles and 156/140px navigation logos at 1280/375px, and valid/invalid phone bag actions. AI render/code review corrected headline word spacing, B’s overlapping label, stale comparison text, the completed trial README’s handoff wording, and a bag link’s accessible name that excluded its visible count. These were trial implementation/content fixes. No IS117 coaching-instruction defect was found; its existing README/AGENTS handled the probes without adding to the student path.

The actual test discussion used submitting without a size: helpful error visible and bag count still zero. The prescribed “It passed… explain?” response received a hint about the wrong state, count one. The learner then explained that a shirt would have been added without knowing its size and the page should ask first. This explanation came **after help**.

The learner reported a clear dark-green desktop impression, familiar class-to-café voice and phone size choices remaining in one row. Its browser inventory was empty, so it could not operate its own browser. Root instead used native browser controls: Tab/Enter activated Skip to content, Space/Right selected M, then Tab/Enter on Add produced bag count one. The learner viewed the capture and distinguished selected M from focus on Add. This establishes root-operated keyboard behavior and assisted image interpretation; it is not independent learner keyboard or touch evidence.

<img src="/review/full-assignments-2026-10-26/is117-desktop.png" alt="Actual desktop Side Street storefront with the kept turn-cue wordmark, bold headline, white shirt and size choices" width="600" />

The shared live guide uses the storefront’s actual headline/support/button classes and SVG, including genuine one-color artwork. The free outfit tip and familiar language apply reciprocity/liking as design hypotheses, with no invented product claims or testimonials. The learner read and approved the accuracy of `LEARNING.md` before its first excerpts were staged or pushed. [PR #2 and its files](https://github.com/kaw393939/is117-coached-full-1026/pull/2/files) preserve that reviewed record, implementation and test evidence; its [latest reviewed-head CI](https://github.com/kaw393939/is117-coached-full-1026/actions/runs/40272131884) passed. The learner approved keeping the coherent logo, colors and headline; the exact checked head was merged. A separate publication decision preceded the successful main deployment. Computer Use verified the live shop/guide and no-size feedback/count 0, then M/Add/count 1. Read the compact [LEARNING record](https://github.com/kaw393939/is117-coached-full-1026/blob/main/LEARNING.md) alongside the [SPEC](https://github.com/kaw393939/is117-coached-full-1026/blob/main/SPEC.md).

For the optional transfer, with no supplied feature list, the learner requested a Size help link revealing how to measure an existing shirt. After the coach pointed out the missing verified garment measurements, the learner ruled out an invented size chart or fit promise. That boundary explanation is assisted. This additional paraphrase was separately shown and approved for accuracy; no follow-up was built. [Delivery documentation PR #3](https://github.com/kaw393939/is117-coached-full-1026/pull/3) merged after its own checks passed and records the verified result.
## What this suggests for the lesson

The useful pauses were concrete: predict a matchup, pick a visible design detail for a visitor, explain what one actual assertion would reject, and review the result. The agent handled setup and implementation while returning the next meaningful decision to the learner. A hint helped both test explanations; neither initial approval nor the assisted reply was treated as proof of independent understanding.

The main risks remain AI-supplied language becoming the learner’s answer, a polished artifact hiding weak reasoning, and too many checkpoints feeling like a questionnaire. Keep one relevant question, allow useful hints, preserve assistance, and reuse an explanation instead of asking again to fill a record. Actual students are still needed to judge pace, interest and what they can explain without help. These agent roles are unusually capable and cannot represent a typical class.

## Preserved examples and cleanup

Both completed examples and screenshot evidence are preserved separately from the student templates. The trial servers were stopped, leaving the unrelated port-5050 program alone. Disposable trial repositories are retired through recoverable GitHub archive after final checks; their files, issues, PRs and published evidence remain readable.

The active student paths remain the unfinished [IS218 template README](https://github.com/kaw393939/is218-rps-starter#readme) and [IS117 template README](https://github.com/kaw393939/is117-brand-studio#readme). This report adds no student deliverable, grading machinery or second assignment path.
