# Student release and cleanup

October 25, 2026. The active course entry points are:

- [Instructions and visual overview](https://kaw393939.github.io/218_spec/).
- [Student template and authoritative README](https://github.com/kaw393939/is218-rps-starter#readme).

## Verified starting state

The student template's `main` remains unfinished: `game.py` raises `NotImplementedError`, `SPEC.md` has the initial plan/issue/work-record placeholders, and neither completed feature-test file is supplied. Only `main` is published. The repository is a public GitHub template with no practice issues or PRs.

The final release check used Python 3.12.14 and `.venv/bin/python check.py`: Black and Pylint passed, 12 supplied request cases passed, and one real Chromium case passed. Output correctly says **STARTER BASELINE ONLY**. These verify the supplied shell, not completion of the student's game.

The README retains one self-paced path: create a template copy, SSH clone it, use one local Codex chat inside ChatGPT desktop, use terminal Git, and review the result in a browser. VS Code is optional. The earlier desktop UI control limitation remains unverified; this cleanup does not establish independent student success.

## Retired trial repositories

These nine assistant-created repositories are now **archived and read-only**. They are historical review evidence, not alternative starter projects:

- `kaw393939/218_spec_student_trial`
- `kaw393939/218_spec_student_trial_2`
- `kaw393939/ai-practice-starter-review`
- `kaw393939/ai-practice`
- `kaw393939/ai-practice-simple-review`
- `kaw393939/ai-practice-visual-review`
- `kaw393939/ai-practice-full-review-1025`
- `kaw393939/rps-student-trial-1025`
- `kaw393939/rps-self-paced-trial-1025`

No repositories were permanently deleted: GitHub denied deletion because the authenticated CLI lacks `delete_repo` permission. Archiving preserved the original issue/PR URLs while removing the trials from active work. Historical reports are marked accordingly.

Before archiving, saved and verified local Git mirrors and portable bundles, plus repository metadata, issues/comments, PRs/reviews/files, and workflow records. Eight clean disposable local checkouts, the latest screenshots, and an old untracked handoff draft were moved into the local cleanup backup outside both course repositories. The backup manifest records their locations.

## Instructor repository cleanup

Preserved the original LINK-001 implementation, issue #1, merged PR #6, and code/test links. Closed the four obsolete LINK-002–LINK-005 backlog issues as not planned, and removed the merged `link-001-save-link` branch after backing it up and checking its PR head. The earlier Node demo server was stopped; its local SQLite data was preserved.

Trial PR attachments were removed from this chat; the original instructor PR attachment was retained. No unrelated course or personal repositories were changed.
