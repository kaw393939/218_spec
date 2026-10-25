# Tooling, logic, and learning audit

October 25, 2026. Reviewed the RPS starter, README, SPEC, supplied tests, quality runner, CI, and instructional site. This combines source inspection, actual automated checks, and instructional judgment. It is not a study of NJIT students.

## Judgment

The exercise is a useful **guided introduction** to supervising a coding agent. Its strongest lessons are agreeing observable behavior, keeping decisions in a short spec, selecting meaningful checks, reviewing real evidence, and giving focused feedback. It does not establish independent proficiency in test design or professional AI engineering after one small game.

The course's published Python/pytest/SSH/Git/PR materials justify reusing those skills. They do not establish uniform mastery. Design for uneven confidence and recoverable interruptions, rather than a demographic stereotype of a “typical NJIT student.”

## Findings and corrections

| Finding | Evidence | Correction |
| --- | --- | --- |
| Tooling preceded the first visible payoff. | The first draft installed Chromium and ran every check before opening the game. A pasted block could continue to server startup after a failed check. | Let students see the unfinished shell first. Prepare browser checks in the second, project-scoped terminal; require the baseline checkpoint before proceeding. |
| The first cycle could become copying rather than deciding. | Rules, expected outcomes, issue structure, and a long implementation prompt were all supplied. | Explicitly call it guided practice. Ask for one prediction before AI, then locate its assertion. Shorten the build prompt to applying the saved agreement. Make the scoring cycle less scripted. |
| App transfer added work with little learning payoff. | The old path required ChatGPT planning, manual SPEC editing in VS Code, and a separate Codex handoff. | Use one local Codex chat inside ChatGPT desktop. The agent saves the approved SPEC; the student inspects it. VS Code is optional. |
| Green shell checks cannot certify a completed feature. | In a throwaway copy, an always-tie implementation with no added feature tests passed all supplied checks. | Label the runner's fast phase “non-browser checks,” print STARTER BASELINE ONLY when expected feature-test files are absent, and explicitly review new real-rule tests before merging. File presence is not evidence of test quality. No test-count grading gate was added. |
| The documented Python baseline was not established. | This Mac's default python3 is 3.14.7, while the class/CI reference is 3.12. | Add a pre-venv version checkpoint and recovery instructions. Verify the smoke clone with the installed 3.12 interpreter explicitly. |
| Failure-artifact wording overpromised. | A missing-browser error fails before a page exists; it produces logs without a page screenshot/trace. | Distinguish installation/launch errors from failures after a page opens. |
| A negative invariant was only partly tested. | Unsupported-move cases prevented rule calls; the missing-move case initially checked only status/message. | Add the same fail-if-called sentinel for missing input. The app was correct; the regression evidence is stronger. |
| A classroom demonstration was assumed. | The first draft proposed an instructor fault demonstration. | Replace it with a self-contained, clearly labeled worked failure example and a diagnosis prompt. No required bug-making or extra reflection task. |

## Actual engineering evidence

- The class Python 3.12.14 environment passed Black, Pylint, 12 integration checks, and one actual Chromium browser check. The game rules remain deliberately unfinished.
- A fresh SSH clone of published starter a074897 installed the pinned requirements and ran the full checks successfully with Python 3.12. Browser binaries were already available in the machine cache; this was not a cold-download timing trial. [Linux CI for that revision](https://github.com/kaw393939/is218-rps-starter/actions/runs/40167325179) passed too.
- Fast-forwarded that clean smoke clone to audited revision 27368c9 and reran the full checks: Black/Pylint, 12 integration cases and one real Chromium case passed, with the new baseline-only notice. [Linux CI for the audited starter](https://github.com/kaw393939/is218-rps-starter/actions/runs/40167856447) also passed.
- A temporary completed copy passed 9 real rule cases, a real submitted-round integration check, supplied shell checks, and a real-browser round/replay, without changing shared configuration. Completed code was not put into the distributed starter.
- Controlled formatting, undefined-name, and assertion defects each caused the appropriate gate to fail and the shared runner to exit 1.
- More substantially, changed a winning pair in the temporary completed implementation. Formatting and analysis still passed; unit/integration tests produced three failures and Chromium produced one failure. Restored the original function exactly; the 11 affected tests passed afterward.
- A deliberate browser expectation failure retained a screenshot and trace. A missing browser failed the full command; --fast explicitly reported browser checks skipped instead of claiming full success.
- Local docs builds and whitespace checks passed. Follow-up commits publish the audited wording and runner notice after the initial tooling revision above.
- Corrected a workflow-card anchor left over after renaming the Check section. Verified all five workflow targets and the Python, Windows/WSL, and worked-failure anchors against built HTML.

## Pedagogy and engagement

RPS makes the correctness model understandable before code appears. The student can compare an outcome with familiar rules, then connect it to a literal assertion. Valid wins, losses, and ties are positive cases; invalid/missing moves are negative cases. Unit/integration/E2E is a separate axis. Using many cheap rule checks and a small browser journey models efficient testing.

The supplied shell and settings intentionally remove architecture/framework/tool-selection decisions. This helps an introductory process exercise, but the first feature offers limited creative agency. Optional personalization comes after behavior works; RPS-002 adds state and regression decisions with less prompting. Advanced students may need that next cycle for useful challenge.

Engagement remains a design hypothesis. The likely pressure points are environment recovery, navigating GitHub forms, and reading tool output. Early visual payoff, a single AI chat, short checkpoints, and specific recovery help should reduce avoidable friction; no agent trial proves students find the exercise enjoyable or complete it unaided.

## Self-paced desktop route and remaining evidence gap

Official documentation supports one local Codex chat inside ChatGPT desktop, opening the SSH-cloned folder, Work in → This computer, an integrated terminal, and file review without VS Code. Windows students using the class Ubuntu environment must align both the agent and terminal with WSL; these are separate app settings. [Local environments](https://learn.chatgpt.com/docs/environments/modes), [projects](https://learn.chatgpt.com/docs/projects), [terminal](https://learn.chatgpt.com/docs/integrated-terminal), [Windows/WSL](https://learn.chatgpt.com/docs/app/windows).

That route was documentation-verified, not newly exercised through desktop UI. Earlier Computer Use restrictions prevented controlling the separate ChatGPT desktop application; the prior complete assignment trial used Codex UI chats and terminal helpers. Windows/WSL student interaction and fully independent learner success still need actual observation. The new material is ready for a self-paced pilot, not a claim of validated learning outcomes.
