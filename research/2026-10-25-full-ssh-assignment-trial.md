# Full fresh SSH assignment trial

October 25, 2026. Tested instructor revision 291696e in a new copy, [ai-practice-full-review-1025](https://github.com/kaw393939/ai-practice-full-review-1025). Local folder: `/Users/kwilliams/Documents/is218/ai-practice-full-review-1025`; initial commit 04f6893. This is an agent-enacted trial, not a study with human students.

## What was actually exercised

| Stage | Observation |
| --- | --- |
| Site → README | The live start button opened the README in a new tab. The Mermaid chart rendered. The page explained the task and expected outcome. |
| Repository and SSH clone | Created a new template copy using direct GitHub tooling; cloned using git@github.com SSH. Both origin URLs matched the copy. All older trials remained separate. |
| Open editor | The README's code . command opened the fresh folder successfully. The native Open Folder dialog had previously left Open disabled despite selecting the folder; that UI result was not treated as a student Git problem. |
| Install and run | npm ci completed with zero vulnerabilities and install-script warnings. npm start failed because port 3000 was occupied. The documented PORT=3001 recovery worked without stopping the other app. Git identity presence and dry-run push succeeded. |
| Try the starter | Actual browser showed the unfinished Note box. Saved an HTML reference and a note, as the README requests. |
| Planning and clarification | Actual Codex UI read AGENTS.md and the practice spec, confirmed the fresh folder, and produced a five-bullet plan plus issue draft without edits. Asked it to explain the help association and test coverage in plain language; its reply explained matching id/aria-describedby and why saving tests do not establish visible placement. |
| Record | Used signed-in Safari's Small feature or change form, entered the actual AI draft into its single body field, reviewed it, and created issue #1. |
| Build | Created practice-001-note-help using terminal Git. Entered the approved plan, real issue URL, command/address, and bounded implementation request in actual Codex. It changed only app/public/index.html and docs/specs/practice.md. It reported six tests, docs build, and diff check passed. It did not commit or push. |
| Inspect and check | Opened the changed HTML in VS Code through the assistant's source-file link. Reviewed the terminal diff. Restarted this trial's server and refreshed. Browser confirmed exact help below Note before typing. |
| Feedback | Reusing the setup URL returned Already saved. Then saved a new Git diff URL and verified a duplicate preserved its original note. Reported these real observations to Codex and requested removal of temporary publishing status from the spec. Actual Codex updated only the tracking row. |
| Keep | Reviewed the two-file staged change, committed 200f3c7, and pushed through SSH. Created PR #2 through Safari with real checks and Closes #1. GitHub build passed (15 seconds); deployment skipped as expected. |

Reviewed Files changed in Safari, then used Merge pull request and Confirm merge after checks passed. PR #2 merged as 9e3b7b5; issue #1 closed automatically. Confirmed both through GitHub state and the public PR page. Kept the practice branch so the spec's source link remains usable. Stopped only this trial's server.

## Remaining points of friction

**The handoff still needs assembly.** The named Plan for Codex section is a useful improvement. The learner still collects that plan, an issue URL, and the working app command/address, then combines them with another prompt. This is explicit, but it remains context-management work. No evidence here establishes whether a novice can do it unaided.

**Technical language needs a question, not blind acceptance.** The plan used aria-describedby before explaining it. The actual clarification exchange was short and useful. Students should be comfortable asking what a term means and what to inspect; preserving that agency is more valuable than adding a glossary to every step.

**The first browser save should explicitly use a new URL.** Setup already asks learners to save a useful link. Reusing that same link during the later saving check returned Already saved, with the original note. That is correct app behavior but does not exercise a fresh post-edit save. A small instruction change to “Save a different URL you have not saved yet” would make the three checks distinct.

**AI can add stale metadata even when its code is correct.** The first tracking row included “local change; not pushed.” That would become false after the next step. Asked Codex to remove it and record the actual checks. It complied, although the resulting row was still wordy. This was a real review-and-feedback opportunity, not an intentionally planted defect.

**Warnings followed by a crash are intimidating.** npm printed install-script advice and startup then produced a long EADDRINUSE trace. The existing help page resolved both cases, but a learner has to distinguish an advisory from a failure and leave the main path. These are setup frictions, not evidence that the application change is difficult.

**A clean branch is not defined beside the command.** The initial status output was only ## main...origin/main. The exercise says start clean without showing that this is success. One expected-output sentence could remove that guess.

**The payoff remains small relative to the workflow.** Most effort concerned moving context, interpreting tools, and tracking work, rather than testing a meaningful behavior change. This supports the user's emerging game proposal: retain the same structured process, but give it an observable behavioral problem worth discussing and checking.

## AI checks, review, and the human role

Codex ran checks before the browser trial and explicitly left browser verification pending. The human-role browser actions then established placement and saving behavior. An additional read-only Codex review was requested, but automation interrupted that turn before findings; it is not reported as a completed review. The final source diff and GitHub checks were reviewed before merge. The proposed next exercise should explicitly include AI tests and review before the learner plays, while still requiring the learner to judge the request and actual experience.

## Course alignment discussed after the trial

Reviewed public README material from [IS218_Example_Fall2026](https://github.com/kaw393939/IS218_Example_Fall2026), [is218-oop-calculator](https://github.com/kaw393939/is218-oop-calculator), [is218-calculator-patterns](https://github.com/kaw393939/is218-calculator-patterns), [is218-command-factory-statistics](https://github.com/kaw393939/is218-command-factory-statistics), and [is218-act-1-operate-deliver](https://github.com/kaw393939/is218-act-1-operate-deliver), plus public practice examples. These establish a published path through Python/pytest, terminal Git/SSH, issues/PRs/CI, OOP, controlled history, commands, factories, and evidence for claims. They show intended instruction, not proof of each student's mastery. No private assessment contents were needed.

The user selected Rock, Paper, Scissors as the next design direction. A proposed first cycle is a playable round with independently expected results for all nine matchups, followed by AI tests/review and learner play. A small later change such as first-to-two scoring provides state and regression checks. No replacement game repository or assignment was implemented during this discussion.

## Tooling limits

The separate ChatGPT desktop planning conversation and handoff were not exercised: direct control remained restricted by the prior automatic approval rejection. Planning and clarification used actual Codex as a disclosed adaptation. Repository creation, clone, runtime control, Git identity/access checks, branching, diff/stage/commit/push, and CI monitoring used direct terminal tools. Codex planning/editing/feedback and GitHub issue/PR forms used actual native application controls; browser tests used Computer Use. Native input/capture failures and delayed accessibility updates required verifying text before submitting. These are not claimed as ordinary student failures.

## Evidence

- [Fresh unfinished app](./evidence/2026-10-25-full-ssh-trial/starter.png)
- [Created issue](./evidence/2026-10-25-full-ssh-trial/issue.png)
- [Reusing the setup link](./evidence/2026-10-25-full-ssh-trial/reused-setup-link.png)
- [New save and duplicate checks](./evidence/2026-10-25-full-ssh-trial/browser-checks.png)
- [Practice PR](https://github.com/kaw393939/ai-practice-full-review-1025/pull/2)
- [Merged PR](./evidence/2026-10-25-full-ssh-trial/merged-pr.png)

No claims about student boredom, motivation, completion time, or independent success can be inferred from this assisted run. The findings above identify concrete outcomes and plausible places to stop or guess.
