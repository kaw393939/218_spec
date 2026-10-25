# Self-paced RPS walkthrough: fresh SSH clone

October 25, 2026. This is a **partial computer walkthrough**, not a completed assignment or a study of actual students. It tests the published starter at revision `27368c9` and records the remaining desktop-access blocker explicitly.

## What actually happened

1. Opened the published README through Computer Use. The in-app browser was signed out of GitHub; Safari had the user's existing signed-in session.
2. In Safari, used **Use this template → Create a new repository**, kept Public, left Include all branches off and the optional Copilot prompt empty, and created [rps-self-paced-trial-1025](https://github.com/kaw393939/rps-self-paced-trial-1025). Verified the generated initial commit `a145bd7` and the copied unfinished starter.
3. Used the command tool to run `git clone git@github.com:kaw393939/rps-self-paced-trial-1025.git`. Verified the clone directory and both SSH remotes. This was a fresh clone, not a reused working directory.
4. Followed the Python checkpoint. This machine's default `python3` is 3.14.7. Both `python3.12` and `pyenv` were absent from the command tool's PATH. Followed the published help to the class Mac setup, which uses pyenv. To avoid installing or changing system-wide tools during the trial, used an already installed managed Python 3.12.14 by absolute path to create `.venv`. This required facilitator knowledge and does **not** count as an unaided setup success.
5. Installed the pinned requirements into the new environment. Packages and Chromium were already cached on the computer; this does not measure download time on a new student machine.
6. Started `.venv/bin/python run.py` on port 5050 using the command tool. Opened it in Safari with Computer Use and clicked Rock. The page displayed player Rock, computer Paper, and **Starter: game rules not built yet**. That matches the README's first checkpoint.
7. Ran the documented Chromium install and `.venv/bin/python check.py`: Black and Pylint passed; 12 non-browser checks and one real Chromium check passed. The runner clearly printed **STARTER BASELINE ONLY** and warned that the game rules/completion were not verified.

## Access limitation

Computer Use rejected access to both `com.openai.codex` (the ChatGPT desktop application) and `com.apple.Terminal` for safety reasons. These restrictions were not bypassed. Safari interaction worked; shell commands used the command tool, not Terminal's UI.

Requested a manual handoff: open this fresh clone in ChatGPT desktop, select the local Codex route with Worktree off, and submit the README's read-and-plan prompt without editing. That step remains pending. No desktop UI success, agent planning interaction, implementation, human review of completed rules, issue, or PR is claimed for this trial. The new repository stays intentionally unfinished for continuing the actual walkthrough.

The app route remains supported by [official environment guidance](https://learn.chatgpt.com/docs/environments/modes) and [integrated-terminal guidance](https://learn.chatgpt.com/docs/integrated-terminal). Documentation is not a substitute for observing the interaction.

## Instruction problems corrected

These are walkthrough observations and reviewer judgments, not quotes from actual students.

| Potential stop or misunderstanding | Change |
| --- | --- |
| A full pasted setup block can continue after clone or `cd` fails. | Tell students to run one command at a time and stop on error; verify `pwd` before creating `.venv`. |
| The game occupies the first terminal, but later instructions switch to an app terminal without explaining their roles. | Name the class terminal as the running server and the app project terminal as the place for checks and Git. Specify which terminal receives Ctrl+C. |
| Returning to the exercise could look like a reason to repeat template creation or clone/install. | Move the existing-copy instruction earlier and add a short return-later note using the existing clone, environment, and chat. |
| The Python recovery link opens a long setup assignment with unrelated account/editor/SSH steps. | Link directly to course-Python selection; say not to redo unrelated setup and to stop for instructor help if the class interpreter cannot be found. Do not add a second package-manager workflow. |
| A modified `SPEC.md` on `main` before branch creation could look like a Git mistake. | Explain that the uncommitted agreed plan intentionally carries onto the feature branch. |

## Critical assessment and next observation

The first browser payoff is clear: the page works while the missing rules are visibly the student's task. The baseline warning is useful and honest. Setup still depends on the previously established class environment; this instructor machine did not meet that prerequisite through its current PATH. Treat that as a prerequisite/support issue rather than adding more setup choices to the main lab.

The most consequential remaining uncertainty is **opening the correct local folder and supervising the first agent response in ChatGPT desktop**. Continue there before judging the full assignment usable without a demonstration. Later checkpoints—saving the plan, creating the issue/branch, implementation and meaningful tests, student play, PR review/CI/merge—remain to be observed in this fresh copy.
