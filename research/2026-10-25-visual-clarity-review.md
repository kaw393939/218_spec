# Critical review of visual clarity

October 25, 2026. Agent-enacted student-path review, not a study with human participants. Started on the live site at c8a8c77. This review concerns orientation, reading load, and visual navigation; it does not repeat the app implementation or claim the desktop handoff passed.

## What the live browser exposed

| Finding | Why it matters | Revision |
| --- | --- | --- |
| Home's large slogan occupied most of the first screen; the specific task was below it. | A new learner could see enthusiasm without knowing what they would actually do. | Smaller hero with the concrete Note-help task and a shorter statement of the process. |
| The home comparison included unrelated form content. | A one-sentence difference was visually small among fields that were not changing. | Focus both screenshots on the Note field; retain full-size image links and text alternatives. |
| The assignment repeated the purpose, two stacked screenshots, and the full map before step 1. | Useful visuals became another reading barrier. In the original 1280×720 opening, only the first screenshot had begun; step 1 was not visible. | Keep the exact task at the top, make the repeated comparison expandable, and use a shorter map. In the revised opening, the step-1 heading is visible. This is a viewport observation, not a completion-time measurement. |
| The worked example's entry offered only a README route. | A prepared learner arriving there could be sent through setup again or confuse LINK-001 with their task. | Name PRACTICE-001 in a callout and provide prepared/new-student routes. Remove automatic next-page suggestions on this optional example. |
| The issue/PR steps gave actions without a brief reason beside them. | A small coding task could feel like form-filling. | Explain that the issue preserves the agreement and the PR gathers the proposed change and checks for review. |

## Repeat checks

In the local browser preview, the comparison expanded and opened the real completed screenshot. The compact Plan card reached the first-step anchor. The overview now names the concrete task before any scrolling at the tested viewport. File-finding instructions name the VS Code path docs → specs → practice.md. Existing SSH setup, scope, handoff contents, browser checks, and terminal Git commands remain intact.

A first CSS adjustment moved the hero too near the fixed header. The screenshot exposed that regression; adjusted the spacing and visually rechecked before publishing.

The Playwright click did not consistently navigate from the example callout, despite its correct href and no matching console error. On the published site, activating that same visible link through its accessibility control did reach the assignment. The live Plan card then reached the first-step anchor. This was treated as a control-method limitation, not a student-facing broken link.

The documentation build, CI checks, and Pages deployment passed for 80cd2cf. Refreshed the live home page to clear the earlier loaded version and visually confirmed the concrete task and reduced hero spacing. The published assignment retained the collapsed comparison and compact map. This review changed documentation and presentation only; the unfinished app starter and SSH workflow remain intact.

## What this says about engagement

The diagrams are useful when they locate a step or show what to carry between tools. Repeating a large overview before every action made the exercise feel longer. The revision reduces that passive reading without expanding the project. The small task still offers limited creative ownership; its value is a first rehearsal, and the existing instruction to save a personally useful link is retained. Only students can establish whether they find it interesting or complete it independently.

## Evidence

- [Original home opening](./evidence/2026-10-25-visual-clarity/home-before.png)
- [Original assignment opening](./evidence/2026-10-25-visual-clarity/practice-before.png)
- [Revised live home opening](./evidence/2026-10-25-visual-clarity/home-after.png)
- [Shorter assignment opening](./evidence/2026-10-25-visual-clarity/practice-after.png)
- [Revised live assignment](./evidence/2026-10-25-visual-clarity/practice-live.png)
- [First action reached from Plan](./evidence/2026-10-25-visual-clarity/plan-next-action.png)
- [Worked-example signpost](./evidence/2026-10-25-visual-clarity/example-after.png)
