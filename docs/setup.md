# Setup

Use **ChatGPT desktop, Codex, and VS Code**. All work for this exercise stays in one project folder on your computer.

| Tool | Use it for |
| --- | --- |
| ChatGPT desktop | Discuss the intention and a short plan. |
| Codex, working locally | Read and edit the project files and run checks. |
| VS Code | Open the files, inspect changes, and use the terminal. |

No OpenAI API key is needed for the example app. Sign in to the class tools with your account. If access is unavailable, show the message to your instructor.

## 1. Check your tools

Have [ChatGPT desktop](https://learn.chatgpt.com/docs/app), [VS Code](https://code.visualstudio.com/), [Git](https://git-scm.com/install/), and [Node.js 24 LTS](https://nodejs.org/en/download) installed. If class setup is already complete, keep using it.

In VS Code, select **Terminal → New Terminal**. A terminal is the panel where you type commands. Run these one line at a time:

```sh
git --version
node --version
npm --version
```

Each should print a version, with Node.js showing `v24...` (22.13 or newer also works). If a command is not found, finish that tool's installation and reopen VS Code, or ask your instructor for help.

## 2. Make your copy

Sign in to GitHub. Open [the starter repository](https://github.com/kaw393939/218_spec), select **Fork**, then **Create fork** with your account as the owner. Keep the name `218_spec`.

The address should now be `github.com/YOUR-USERNAME/218_spec`, not `kaw393939/218_spec`. YOUR-USERNAME means your actual GitHub username. In **your fork**, open **Settings → General → Features** and enable **Issues** if needed. Open your fork’s **Actions** tab and enable workflows if GitHub asks; this lets your practice PR run its checks.

On your fork's **Code → HTTPS** menu, copy its clone URL. In VS Code, open the Command Palette (**View → Command Palette**), choose **Git: Clone**, paste that URL, and choose a local location. When asked, open the cloned repository. [VS Code cloning guide](https://code.visualstudio.com/docs/sourcecontrol/intro-to-git)

**Check:** the file list shows `app/`, `docs/`, and `package.json`. This is your local project folder. In VS Code, open a new terminal inside it and run:

```sh
git remote -v
```

The `origin` address should contain your GitHub username. If it points to the instructor's repository, fix the clone before continuing.

## 3. Run the app

In that VS Code terminal:

```sh
npm ci
npm start
```

Leave it running. Open **http://127.0.0.1:3000** in your browser. You should see **“Keep something useful.”** above Link and Note fields. This local app is separate from the GitHub Pages instructions.

## 4. Open the same folder in Codex

In ChatGPT desktop, select **Codex**, add/open a **local project**, and choose the same `218_spec` folder that is open in VS Code. Start a local chat working on this computer, in that folder. Use the current folder rather than a separate worktree or cloud environment for this first exercise. [Local projects](https://learn.chatgpt.com/docs/projects), [Codex environments](https://learn.chatgpt.com/docs/environments/modes)

Paste into **Codex**:

> Read AGENTS.md and docs/specs/practice.md in this project. Tell me the practice task and which existing HTML file it affects. Do not change anything yet.

**Ready:** the reply identifies PRACTICE-001 and `app/public/index.html`. Open that file in VS Code and compare it with the explanation. If Codex cannot find it, check that both tools opened the same folder.

Continue to [Your first change](./practice). It tells you what to discuss in ChatGPT and what to give Codex. Do not assume a separate chat automatically shares your plan or files; carry the agreed plan into Codex explicitly.

## If you get stuck

- **Windows says npm scripts are disabled:** in VS Code's terminal dropdown, open a **Command Prompt** terminal and retry. No security-policy change is needed.
- **Port 3000 is in use:** another copy may be running. Stop your earlier app terminal with Ctrl+C and retry; ask for help if you cannot identify it.
- **Git asks for your name, email, or GitHub sign-in:** complete your Git identity/sign-in setup with your instructor before committing or pushing. Use your own account.
- **Files or changes are missing:** check the folder in VS Code and the local project selected in Codex.
- **Finished for now:** stop `npm start` with Ctrl+C. Your files stay in the project folder.
