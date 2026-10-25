# Self-paced RPS walkthrough: fresh SSH clone

October 25, 2026. This walkthrough starts from published starter revision `27368c9` and a fresh SSH clone. The continuation implements and checks the feature through the current coding chat, command tool, and browser. It is not a study of actual students or a completed ChatGPT desktop UI trial.

## What actually happened

1. Opened the published README through Computer Use. The in-app browser was signed out of GitHub; Safari had the user's existing signed-in session.
2. In Safari, used **Use this template → Create a new repository**, kept Public, left Include all branches off and the optional Copilot prompt empty, and created [rps-self-paced-trial-1025](https://github.com/kaw393939/rps-self-paced-trial-1025). Verified the generated initial commit `a145bd7` and the copied unfinished starter.
3. Used the command tool to run `git clone git@github.com:kaw393939/rps-self-paced-trial-1025.git`. Verified the clone directory and both SSH remotes. This was a fresh clone, not a reused working directory.
4. Followed the Python checkpoint. This machine's default `python3` is 3.14.7. Both `python3.12` and `pyenv` were absent from the command tool's PATH. Followed the published help to the class Mac setup, which uses pyenv. To avoid installing or changing system-wide tools during the trial, used an already installed managed Python 3.12.14 by absolute path to create `.venv`. This required facilitator knowledge and does **not** count as an unaided setup success.
5. Installed the pinned requirements into the new environment. Packages and Chromium were already cached on the computer; this does not measure download time on a new student machine.
6. Started `.venv/bin/python run.py` on port 5050 using the command tool. Opened it in Safari with Computer Use and clicked Rock. The page displayed player Rock, computer Paper, and **Starter: game rules not built yet**. That matches the README's first checkpoint.
7. Ran the documented Chromium install and `.venv/bin/python check.py`: Black and Pylint passed; 12 non-browser checks and one real Chromium check passed. The runner clearly printed **STARTER BASELINE ONLY** and warned that the game rules/completion were not verified.
8. In the continuation, predicted Rock/Paper as a loss, saved a four-step plan in `SPEC.md`, created [issue #1](https://github.com/kaw393939/rps-self-paced-trial-1025/issues/1) through Safari's form, saved its URL, and created terminal Git branch `rps-001`. Verified the uncommitted plan carried from `main` to the new branch.
9. Added nine literal unit outcomes and one real request/result case. All ten failed against the unfinished rules. Implemented the rule function and added one real Chromium journey that wins and then replays to a loss; only randomness is fixed. The full command passed Black, Pylint, 22 non-browser cases, and two Chromium cases. Shared app, fixtures, interface, and check configuration stayed unchanged. Read-only AI peer review found no actionable defects; it is not independent human validation.
10. Through Computer Use in Safari, observed Rock/Scissors win, Paper/Paper tie, and Scissors/Rock loss. Replay replaced choices and result. Plain Tab skipped the move buttons with this browser's settings; clicking the game area and using Option+Tab visibly focused Rock. Enter submitted Rock/Paper and displayed the predicted loss. Refreshing a previous POST produced Safari's form-resubmission dialog; canceled it and reopened the server's printed address successfully.
11. Inspected the local diff and both untracked test files, replaced the work record with actual checks/observations, reviewed all four staged files, committed `b6a5fb5`, and pushed over SSH. Created [PR #2](https://github.com/kaw393939/rps-self-paced-trial-1025/pull/2) using the GitHub connector after Safari comparison controls became unreliable to automate. Opened the published four-file diff in the in-app browser and verified the plan, implementation, literal expectations, real-rule browser journey, and issue-closing link.
12. [Python checks on the PR](https://github.com/kaw393939/rps-self-paced-trial-1025/actions/runs/40210348786) passed. Verified the head was still `b6a5fb5` and mergeable, then merged with the GitHub connector. Verified merge commit `479fe98` and that issue #1 closed automatically. The completed game belongs to this trial repository; the distributed starter remains unfinished.

## Access limitation

Computer Use rejected access to both `com.openai.codex` (the ChatGPT desktop application) and `com.apple.Terminal` for safety reasons. These restrictions were not bypassed. Safari interaction worked; shell commands used the command tool, not Terminal's UI.

Requested a manual handoff to open the fresh clone in ChatGPT desktop and submit its planning prompt. The user instead asked to continue. The continuation used the current coding chat and command tool, with Safari for the issue form and browser play, and the GitHub connector for PR creation and merge. The native desktop restriction was not bypassed. No ChatGPT desktop planning interaction, Terminal UI success, or independent student/human review is claimed.

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
| `git diff` omits the new, untracked tests; the original review step displayed only the rule test. | Show `git status --short` and explicitly inspect both new test files, explaining `??` before the full staged review. |
| “Refresh the game” triggers Safari's form-resubmission prompt after a round. | Reopen the server's printed address instead. Add a brief Cancel-and-reopen recovery hint. No app redesign is needed for this lab. |
| “Try Tab and Enter” appears broken when Safari skips buttons under its current settings. | Add the observed Option+Tab hint; keep browser settings unchanged. |

## Critical assessment and next observation

The first browser payoff is clear: the page works while the missing rules are visibly the student's task. The baseline warning is useful and honest. Setup still depends on the previously established class environment; this instructor machine did not meet that prerequisite through its current PATH. Treat that as a prerequisite/support issue rather than adding more setup choices to the main lab.

The most consequential remaining uncertainty is **opening the correct local folder and supervising the first agent response in ChatGPT desktop**. Code/test/GitHub workflow evidence does not resolve that interaction. The current agent played the reviewer role; actual independent student success, engagement, and learning still need observation. Automation failures in Safari's comparison controls were treated as tooling limitations, not evidence that ordinary students would fail to use those controls.
