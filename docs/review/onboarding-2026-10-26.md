# Fresh SSH onboarding trial — October 26, 2026

This instructor trial followed both starter READMEs on the same Mac from new GitHub template copies and **real fresh SSH clones**. It tested onboarding and preview modes, not completion of either student feature. Temporary visual probes were restored; brand decisions and RPS-001 remain unfinished.

## What actually ran

| Starter | Fresh setup and checks | Browser verification |
| --- | --- | --- |
| [IS117](https://github.com/kaw393939/is117-brand-studio#readme) | New `npm ci`; project shell selected Node 24.20.0. Formatting/lint, 7 server + 10 Chromium cases passed. | Neutral page; missing-size feedback; M/Add gave bag count 1. Saved HTML/CSS/JS/SVG changed the open page automatically; HTML refresh emptied the bag. Plain preview waited until manual Reload. `npm start` also started development mode. |
| [IS218](https://github.com/kaw393939/is218-rps-starter#readme) | New independent `.venv` with existing Python 3.12.14; pinned requirements installed. Initial Black/Pylint, 13 non-browser + 4 Chromium passed. After the fix below, 13 + 5 passed in both the source project and fresh clone. | Unfinished notice and submitted moves displayed. Saved template/CSS/JS/Python edits refreshed automatically. Python edits restarted the server and returned a submitted round to GET without a resubmission prompt. Plain preview stayed unchanged until the documented restart/reopen. |

No Reload or navigation action occurred between each development-mode save and its observed update. Both servers stopped and restarted in their existing clones; no second dependency installation was needed. Runtime/browser downloads reused caches, so this was fresh-clone setup, not a cold-machine installation.

## Stops and guesses corrected

- **Which terminal owns the website?** IS117 now has the agent prepare/check dependencies, then the learner runs the persistent preview in the original class terminal. Agent commands use its separate project terminal. Both READMEs identify Ctrl+C and resuming an existing server before starting another.
- **Which URL and mode?** IS117 reproduced a port collision by starting plain preview while development was still running. Stop before switching and reopen the new server's printed address. Keep a chosen `PORT` prefix on later starts. In Python plain mode, restart after Python/template edits; CSS/JS needs manual refresh.
- **An occupied port is not broken setup.** Port 5050 belonged to an existing process. It was left running; the documented `PORT=5051` command worked. The alternate is now beside the normal startup command, not only on the help page. IS117 documents its 5175 fallback and leaves 5174 for prepared checks.
- **The available Python was not the class Python.** Host `python3` was 3.14.7 and `python3.12` was absent from PATH. The agent located/verified an already installed 3.12 interpreter and created a new environment from it. No system Python replacement or copied environment.
- **Fresh copy and return later.** IS218 now waits for generated README/files, confirms the full path plus SSH origin, and reuses an existing clone. Both new copies were ready in this trial; an empty-clone failure was not reproduced here.

## A real defect found while switching modes

An already-open IS218 development page kept requesting `/__dev__/revision` after the server switched to plain mode, flooding its terminal with 404s. The client now stops polling when that route returns 404; transient restart/network failures retain retry behavior. The regression failed against the old client and passed with the fix. In the actual browser/server switch after the patch, one 404 was logged and no further polls followed. Ordinary request/error logging remains checked.

Follow-up tracked in [IS117 issue 10](https://github.com/kaw393939/is117-brand-studio/issues/10) and [IS218 issue 3](https://github.com/kaw393939/is218-rps-starter/issues/3).

## Saved browser evidence

These are temporary probe edits, not a solved student design. The IS117 image shows changed JavaScript copy, accent CSS and a separately refreshed SVG. The IS218 image shows a saved template and cleared round. Probe edits were restored after verification.

![IS117 browser after saved JavaScript, CSS and SVG probe changes](/review/onboarding-2026-10-26/is117-refresh.png)

![IS218 browser after saved template change, without reloading or resubmitting the round](/review/onboarding-2026-10-26/is218-refresh.png)

## Limits

Computer Use blocked native Terminal control. Commands ran on this Mac through the terminal tool; browser interactions and screenshots used Computer Use. Native Terminal input, ChatGPT desktop folder-picker interaction, Windows/WSL and real student learning were not verified. The coaching contracts were read and reviewed; these results establish the observed setup/preview behavior, not learning outcomes.

Disposable template copies are [IS117 onboarding 1026](https://github.com/kaw393939/is117-onboarding-1026) and [IS218 onboarding 1026](https://github.com/kaw393939/is218-onboarding-1026). Their remote baseline copies and local trial evidence are preserved for review; the active student links point to the unfinished instructor templates.
