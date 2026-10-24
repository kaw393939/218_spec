# Visual assignment and instructional review

October 24, 2026. Agent-enacted review; no human participant was observed. Successful tool-assisted completion does not establish student engagement or independent learning.

## Design intent

The first screen should answer: What am I doing? Why? What will I learn? What steps do I follow? What does finished look like?

The exercise now frames the learner as the developer responsible for the result, with AI helping plan and edit. Its three learning outcomes are bounded planning, evidence-based review, and traceability from requirement to work. The small Note help change remains the rehearsal; no new app features or assessment machinery were added.

## Visuals and orientation

- A Mermaid chart in the README shows Plan → Record → Build → Check → Keep, with a feedback loop from Check to Build. Opened the GitHub diagram viewer and visually verified that it renders.
- The site shows the same five steps as accessible HTML cards, using the same numbering as the assignment headings. No diagram runtime dependency was added. Cards link to the corresponding instructions.
- Actual before/after screenshots come from the unfinished instructor app and the previously completed trial app. The instructor source was not changed to make an after image. Images retain full-size links and descriptive alternatives; CSS focuses the comparison on Note.
- The handoff visual shows the agreed plan, issue URL, and working app command/address moving into Codex in the cloned local folder.
- The planning prompt now requests separate Plan for Codex and GitHub issue draft sections. The plan is limited to five bullets, making the thing to carry over explicit.
- Setup is labeled Get ready and kept outside the five-step cycle. Deliverables are stated before the detailed steps. Optional material remains optional.

## Problems caught and corrected

1. Two screenshots at narrow assignment width made the new text hard to read. Changed the assignment comparison to stacked, focused Note views; retained a broader side-by-side view on the home page. Visually inspected the actual result.
2. A sidebar label numbered README as step 1 while the cycle also started at 1. Renamed it README: get ready.
3. Step cards looked like navigation but initially did not navigate. Made each a link to its matching section; clicked Build and verified arrival at the Build instructions and handoff visual.
4. A custom home-page anchor put The route under the sticky header. Added scroll margins to the custom headings/visual anchors.

## Assisted fresh-copy retry

Created [ai-practice-visual-review](https://github.com/kaw393939/ai-practice-visual-review) from instructor revision 4d4e5a8 and cloned using `git clone git@github.com:kaw393939/ai-practice-visual-review.git`. Verified SSH origin and a clean main. npm ci and dry-run push succeeded. Started the app on the documented alternate port 3001, leaving other apps alone.

Computer Use confirmed the fresh app had no help sentence. The scoped implementation on practice-001-note-help added the sentence and aria-describedby, preserving maxlength=4000. Only app/public/index.html and docs/specs/practice.md changed. Six tests and the docs build passed. After restarting and refreshing, the browser showed the exact help below Note. Saving a new Git diff reference worked; submitting it again with a different note preserved the original. The spec records those actual results and real issue/source links.

Reviewed the two-file diff and committed d26cb60, then pushed via SSH. [PR #2](https://github.com/kaw393939/ai-practice-visual-review/pull/2) links [issue #1](https://github.com/kaw393939/ai-practice-visual-review/issues/1) and discloses the assisted nature of this retry.

GitHub CI passed (13 seconds), with deployment skipped as expected. Reviewed the public diff, squash-merged as fdbe02a, and verified the issue closed automatically both through GitHub state and the public PR page. Kept the practice branch so the spec's source link remains usable. The instructor starter remains unfinished.

## Limits and next useful observation

Native VS Code input again failed to populate the Codex composer; no invisible prompt was submitted. Direct ChatGPT desktop control remained restricted by the earlier automatic approval rejection and was not retried or bypassed. The separate desktop planning conversation/handoff was not validated. Direct tools performed repository/issue creation, clone, terminal commands, edits, and Git/PR operations; Computer Use inspected the instructions, rendered diagram, and real browser app. Responsive CSS provides stacked narrow layouts, but this run was not a mobile-device usability test.

The new pages visibly provide the purpose, target, outcomes, route, and completion criteria. That is stronger orientation evidence than the previous instructions supplied. It is not proof of enjoyment. The next useful human observation is whether a student can explain their role and carry only the agreed plan into the correct Codex folder without instructor prompting.

## Evidence

- [Rendered README Mermaid](./evidence/2026-10-24-visual-instruction-review/readme-mermaid.png)
- [Overview and route](./evidence/2026-10-24-visual-instruction-review/overview-route.png)
- [Handoff instructions](./evidence/2026-10-24-visual-instruction-review/handoff.png)
- [Fresh unfinished app](./evidence/2026-10-24-visual-instruction-review/starter.png)
- [Actual browser checks](./evidence/2026-10-24-visual-instruction-review/browser-checks.png)
- [Merged PR and closed issue](./evidence/2026-10-24-visual-instruction-review/merged-pr.png)
