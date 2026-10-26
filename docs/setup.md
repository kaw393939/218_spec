---
prev: false
next: false
---
# If you get stuck

**Start in the [game starter README](https://github.com/kaw393939/is218-rps-starter#readme).** Clone your own copy, then connect that folder to your AI project before Python setup. The agent can guide you through getting it running. The README uses ChatGPT desktop; [another local coding agent](#another-coding-agent) can use the same project. VS Code is optional.

## Setup or startup

| What you see | Next step |
| --- | --- |
| GitHub has no **Use this template** button | Sign in to GitHub, then reopen the starter repository. |
| Clone has no project files yet | Wait until your new GitHub repository shows its README. Let the agent pull the generated default branch into that untouched clone; do not create replacement files. |
| `Permission denied (publickey)` | Check that the SSH clone address is your own copy. Ask your instructor to help with the existing class SSH setup; do not replace keys or switch to HTTPS. |
| Optional VS Code is unavailable | Keep using ChatGPT desktop's files and the terminal diff. VS Code is not required. |
| `ModuleNotFoundError` for a check tool or Flask | In the project terminal, rerun `.venv/bin/python -m pip install -r requirements.txt`. |
| Playwright says the browser executable is missing | Run `.venv/bin/python -m playwright install chromium`, then rerun the full checks. |
| Chromium reports missing Linux libraries in Ubuntu/WSL | Run `.venv/bin/python -m playwright install-deps chromium` in the class Ubuntu terminal; it may request your system password. Then rerun checks. |
| Port 5050 is in use | Leave other programs alone. Run `PORT=5051 .venv/bin/python run.py` and open **http://127.0.0.1:5051**. |
| Game says its rules are unfinished | Setup worked. You are ready to implement RPS-001. |
| AI cannot find `game.py` | Compare the AI project's folder with `pwd` in your project terminal. In ChatGPT desktop, open your cloned game folder in Codex mode using **This computer**. |
| Browser shows an old version | Save the file and check the running terminal for errors. Confirm the agent and server use the same clone and the browser uses its printed address. In `--plain` mode, restart after Python/template edits; refresh manually after CSS/JavaScript edits. |
| Safari asks to send a form again | Choose Cancel, open the server's printed address in the address bar, then choose a move. |
| Safari's Tab key skips move buttons | Click the game area, then use Option+Tab to focus a button and Enter to play. |
| A red development-server warning or pip update notice | Normal for this local exercise. Open the address after `Running on` (normally `http://127.0.0.1:5050`, or your chosen port); no server replacement or pip update is needed. |

Use your **class terminal**: macOS Terminal or Ubuntu/WSL on Windows. The README's commands use that environment. Ask your instructor if Python or account access is missing.

Keep two terminals straight: the **class terminal runs the game**; the AI app's **project terminal runs checks and Git**. To stop the game, return to the class terminal and press **Ctrl+C**.

**Returning later?** Check your game terminal first. If it is still running, use its printed address. Otherwise `cd` into the existing clone and run `.venv/bin/python run.py`, reusing your `PORT` prefix if needed. Reopen that same project/chat and return to your last README checkpoint. Keep your repository and `.venv`; do not clone or install again.

## See saved changes while you work

After the starter README's setup, run from your game clone:

| Command | What happens |
| --- | --- |
| `.venv/bin/python run.py` | Recommended development mode. Saving Python, template, CSS or JavaScript changes refreshes the open game automatically. Python changes also restart the local server. |
| `.venv/bin/python run.py --plain` | Optional stable preview. No automatic restart or refresh. Restart after Python/template edits; refresh manually after CSS/JavaScript edits. |

Open the address printed in the terminal, normally **http://127.0.0.1:5050**, and leave that terminal running. Live refresh returns to the starting page and clears the current round instead of submitting the previous move again. Only saved files trigger updates. Stop either mode with **Ctrl+C**. Before switching modes, stop the current server; then start the other command and reopen its printed address. Keep any chosen `PORT` prefix.

These updates affect your local game. This GitHub Pages site contains the instructions; it does not run or automatically publish your game.

## Working with AI

**Agent rushing ahead?** Say: “Give me one small step or question, then wait for my answer. Help me work it out before moving on.”

**Unsure what a term means?** Ask: “Explain that using this game's behavior, and show me the file I should inspect.” You do not need to accept a plan you cannot explain.

**New chat forgot the plan?** Point the local agent to your saved `SPEC.md`. The normal route stays in one chat; the file preserves decisions if you need to return later.

**A command fails?** Give the agent the command and error, leaving out passwords and tokens:

> Explain the smallest next step for my class terminal. Do not add game features or stop other programs. Tell me what success should look like.

Once resolved, **return to the same README step**. Do not start a new repository to fix an ordinary error.

## A check fails

Ask AI to explain the file, rule or assertion, and the smallest fix. Keep the agreed expectations and shared settings intact. `.venv/bin/python check.py --fast` gives quick formatting, analysis, and non-browser feedback; run `.venv/bin/python check.py` before review.

For a failure after the browser page opens, look in `test-results/` locally or the **browser-failure** artifact on the failed GitHub run. Installation/launch failures may have logs only. Artifacts are ignored by Git; do not stage them with your code. [How the checks fit together](./checks).

## Open the local coding agent

In ChatGPT desktop, select **Codex** from the ChatGPT dropdown. Use **⌘O / Ctrl+O** to open the cloned folder. Start the chat in that project, choose **Work in → This computer**, and leave **Worktree** off. The terminal, AI, and browser should refer to this same local copy.

**Connection check:** ask it to read `README.md`, `AGENTS.md`, and `SPEC.md`, name the folder, and explain what is supplied and what you will build. Uploading files to an ordinary chat project does not connect the working clone for edits and commands. [Official project guidance](https://learn.chatgpt.com/docs/projects).

Use **New tab → Terminal** for a terminal scoped to the project. Run `pwd` and `cat SPEC.md` to confirm the folder and saved agreement. To open a file in the app, use **⌘P / Ctrl+P** and search its name. No IDE extension or separate CLI installation is required. [Official local-project guidance](https://learn.chatgpt.com/docs/environments/modes), [terminal guidance](https://learn.chatgpt.com/docs/integrated-terminal).

If you cannot select Codex, check that you are signed in with the class account and consult the [official desktop guide](https://learn.chatgpt.com/docs/app). Account access is a setup prerequisite; do not add an API key as a workaround.

## Another coding agent

You can use another agent if it can **read and edit the cloned folder and run terminal commands in it**. Open the same clone, use the README's first prompt, and check that it reads all three named files. Some tools need an explicit request to read `AGENTS.md`.

Browser or desktop control can help it try the interface. The supplied Playwright checks also provide browser automation; you still play and review the result yourself. Browser control alone does not provide the file and terminal access needed to build the feature.

Use your tool's project terminal for the README's checks and Git steps. Exact menus vary; the documented app steps use ChatGPT desktop. Other agents have not been tested in this walkthrough.

## Windows / WSL

The class commands use Ubuntu/WSL, while the desktop app defaults to a Windows-native agent. In the app's **Settings**, set **Agent environment → Windows Subsystem for Linux**, then restart the app. Set **Integrated terminal shell → WSL** too; that is a separate setting and applies to new terminal sessions.

To open your Ubuntu clone, press **Ctrl+O**, type `\\wsl$\` in the folder picker, then navigate into your Ubuntu distribution and its home/projects folder. Choose the same repository you cloned, not a new Windows copy. A project terminal's `pwd` should show a Linux path such as `/home/your-name/.../my-rps`. [Official Windows instructions](https://learn.chatgpt.com/docs/app/windows).

## Python version

Before creating `.venv`, run `python3 --version`. The class and CI reference is **Python 3.12.x**. If `python3` points to another version, let the agent locate and verify your existing class 3.12 interpreter, including its full path if needed, before creating `.venv`. If `python3.12` is available, it can use `python3.12 -m venv .venv`. Do not replace the system Python to fix this exercise.

Cannot find the class interpreter? Follow only [Mac setup: select the course Python version](https://github.com/kaw393939/IS218_Example_Fall2026/blob/main/assignments/assignment-0-mac.md#2-select-the-course-python-version), or the Python section of your [Windows/WSL setup](https://github.com/kaw393939/IS218_Example_Fall2026/blob/main/assignments/assignment-0-windows.md). Do not redo unrelated account, SSH, or editor setup. If you still cannot locate Python 3.12, stop and ask your instructor before creating `.venv`.

Need to recover an environment already created with another version? Stop your server and give the agent the version error. Ask it to preserve the old environment under an unused backup name, recreate `.venv` with the class 3.12 interpreter, and repeat the setup prompt's installation and baseline checks.
