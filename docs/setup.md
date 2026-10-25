---
prev: false
next: false
---
# If you get stuck

**Start in the [game starter README](https://github.com/kaw393939/is218-rps-starter#readme).** This page helps you get back to the step where you stopped. Students use their existing Python, Git/SSH, ChatGPT desktop, Codex, and VS Code setup from class.

## Setup or startup

| What you see | Next step |
| --- | --- |
| `Permission denied (publickey)` | Check that the SSH clone address is your own copy. Ask your instructor to help with the existing class SSH setup; do not replace keys or switch to HTTPS. |
| `code .` is not found | In VS Code, use **File → Open Folder** and select the folder you cloned. |
| `ModuleNotFoundError: flask` or `pytest` | In the project terminal, rerun the README's install command using `.venv/bin/python`. |
| Port 5050 is in use | Leave other programs alone. Run `PORT=5051 .venv/bin/python run.py` and open **http://127.0.0.1:5051**. |
| Game says its rules are unfinished | Setup worked. You are ready to implement RPS-001. |
| AI cannot find `game.py` | Compare its local project folder with `pwd` in your project terminal. Codex and VS Code must use your cloned game folder. |
| Browser shows an old version | Check the running terminal for errors, then refresh the printed address. Restart your own app if needed. |
| A red development-server warning or pip update notice | Normal for this local exercise. Look for `Running on http://127.0.0.1:5050` and open that address; no server replacement or pip update is needed. |

Use your **class terminal**: macOS Terminal or Ubuntu/WSL on Windows. The README's commands use that environment. Ask your instructor if Python or account access is missing.

## Working with AI

**Unsure what a term means?** Ask: “Explain that using this game's behavior, and show me the file I should inspect.” You do not need to accept a plan you cannot explain.

**New chat forgot the plan?** Point Codex to your saved `SPEC.md`. Keep decisions there rather than rebuilding the chat history.

**A command fails?** Give Codex the command and error, leaving out passwords and tokens:

> Explain the smallest next step for my class terminal. Do not add game features or stop other programs. Tell me what success should look like.

Once resolved, **return to the same README step**. Do not start a new repository to fix an ordinary error.
