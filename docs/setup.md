---
prev: false
next: false
---
# If you get stuck

**Start in the [game starter README](https://github.com/kaw393939/is218-rps-starter#readme).** This page helps you return to the step where you stopped. Use the class Python/Git/SSH setup, one local coding-agent chat in ChatGPT desktop, and a browser. VS Code is optional.

## Setup or startup

| What you see | Next step |
| --- | --- |
| `Permission denied (publickey)` | Check that the SSH clone address is your own copy. Ask your instructor to help with the existing class SSH setup; do not replace keys or switch to HTTPS. |
| Optional VS Code is unavailable | Keep using ChatGPT desktop's files and the terminal diff. VS Code is not required. |
| `ModuleNotFoundError` for a check tool or Flask | In the project terminal, rerun `.venv/bin/python -m pip install -r requirements.txt`. |
| Playwright says the browser executable is missing | Run `.venv/bin/python -m playwright install chromium`, then rerun the full checks. |
| Chromium reports missing Linux libraries in Ubuntu/WSL | Run `.venv/bin/python -m playwright install-deps chromium` in the class Ubuntu terminal; it may request your system password. Then rerun checks. |
| Port 5050 is in use | Leave other programs alone. Run `PORT=5051 .venv/bin/python run.py` and open **http://127.0.0.1:5051**. |
| Game says its rules are unfinished | Setup worked. You are ready to implement RPS-001. |
| AI cannot find `game.py` | Compare the ChatGPT desktop local project's folder with `pwd` in your project terminal. Open your cloned game folder in Codex mode, using **This computer**, not a cloud project. |
| Browser shows an old version | Check the running terminal for errors, then refresh the printed address. Restart your own app if needed. |
| A red development-server warning or pip update notice | Normal for this local exercise. Look for `Running on http://127.0.0.1:5050` and open that address; no server replacement or pip update is needed. |

Use your **class terminal**: macOS Terminal or Ubuntu/WSL on Windows. The README's commands use that environment. Ask your instructor if Python or account access is missing.

Keep two terminals straight: the **class terminal runs the game**; ChatGPT desktop's **project terminal runs checks and Git**. To stop the game, return to the class terminal and press **Ctrl+C**.

**Returning later?** In the class terminal, `cd` into your existing clone and run `.venv/bin/python run.py` again. Reopen that same folder and chat in ChatGPT desktop, then return to your last README checkpoint. Keep your existing repository and `.venv`; do not repeat the template or clone steps.

## Working with AI

**Unsure what a term means?** Ask: “Explain that using this game's behavior, and show me the file I should inspect.” You do not need to accept a plan you cannot explain.

**New chat forgot the plan?** Point the local agent to your saved `SPEC.md`. The normal route stays in one chat; the file preserves decisions if you need to return later.

**A command fails?** Give Codex the command and error, leaving out passwords and tokens:

> Explain the smallest next step for my class terminal. Do not add game features or stop other programs. Tell me what success should look like.

Once resolved, **return to the same README step**. Do not start a new repository to fix an ordinary error.

## A check fails

Ask AI to explain the file, rule or assertion, and the smallest fix. Keep the agreed expectations and shared settings intact. `.venv/bin/python check.py --fast` gives quick formatting, analysis, and non-browser feedback; run `.venv/bin/python check.py` before review.

For a failure after the browser page opens, look in `test-results/` locally or the **browser-failure** artifact on the failed GitHub run. Installation/launch failures may have logs only. Artifacts are ignored by Git; do not stage them with your code. [How the checks fit together](./checks).

## Open the local coding agent

In ChatGPT desktop, select **Codex** from the ChatGPT dropdown. Use **⌘O / Ctrl+O** to open the cloned folder. Start the chat in that project, choose **Work in → This computer**, and leave **Worktree** off. The terminal, AI, and browser should refer to this same local copy.

Use **New tab → Terminal** for a terminal scoped to the project. Run `pwd` and `cat SPEC.md` to confirm the folder and saved agreement. To open a file in the app, use **⌘P / Ctrl+P** and search its name. No IDE extension or separate CLI installation is required. [Official local-project guidance](https://learn.chatgpt.com/docs/environments/modes), [terminal guidance](https://learn.chatgpt.com/docs/integrated-terminal).

If you cannot select Codex, check that you are signed in with the class account and consult the [official desktop guide](https://learn.chatgpt.com/docs/app). Account access is a setup prerequisite; do not add an API key as a workaround.

## Windows / WSL

The class commands use Ubuntu/WSL, while the desktop app defaults to a Windows-native agent. In the app's **Settings**, set **Agent environment → Windows Subsystem for Linux**, then restart the app. Set **Integrated terminal shell → WSL** too; that is a separate setting and applies to new terminal sessions.

To open your Ubuntu clone, press **Ctrl+O**, type `\\wsl$\` in the folder picker, then navigate into your Ubuntu distribution and its home/projects folder. Choose the same repository you cloned, not a new Windows copy. A project terminal's `pwd` should show a Linux path such as `/home/your-name/.../my-rps`. [Official Windows instructions](https://learn.chatgpt.com/docs/app/windows).

## Python version

Before creating `.venv`, run `python3 --version`. The class and CI reference is **Python 3.12.x**. If `python3` points to another version, use your existing class setup to select 3.12, or use `python3.12 -m venv .venv` if that command is available. Do not replace the system Python to fix this exercise.

Cannot find the class interpreter? Follow only [Mac setup: select the course Python version](https://github.com/kaw393939/IS218_Example_Fall2026/blob/main/assignments/assignment-0-mac.md#2-select-the-course-python-version), or the Python section of your [Windows/WSL setup](https://github.com/kaw393939/IS218_Example_Fall2026/blob/main/assignments/assignment-0-windows.md). Do not redo unrelated account, SSH, or editor setup. If you still cannot locate Python 3.12, stop and ask your instructor before creating `.venv`.

Need to recover an environment already created with another version? Stop your server, rename `.venv` to an unused backup name, then recreate it with the class 3.12 interpreter and rerun the README install commands.
