# Setup

Use **ChatGPT desktop, Codex, and VS Code**. Do this once, before the practice exercise. All work stays in one project folder on your computer. If your workspace is already prepared, go straight to [Ready to begin](#ready-to-begin).

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

Sign in to GitHub. On [the starter repository](https://github.com/kaw393939/218_spec), choose **Use this template → Create a new repository**. Select your account, name the repository `ai-practice`, choose **Public**, and leave **Include all branches** unchecked. Select **Create repository from template**.

You now have your own repository. Its address should be `github.com/YOUR-USERNAME/ai-practice`. In that repository, copy **Code → HTTPS**. In VS Code, open **View → Command Palette**, choose **Git: Clone**, paste the URL, select a local location, and open the cloned folder.

**Already started?** Reopen your existing local folder and continue your issue. Do not clone the instructor's repository over your work or create a second copy. If VS Code offers to open an existing clone, check its folder before accepting.

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

Wait for `Personal link library: http://127.0.0.1:3000`. Leave this terminal running; use a second terminal for other commands. Open **http://127.0.0.1:3000** in your browser. You should see **“Keep something useful.”** above Link and Note fields. This local app is separate from the GitHub Pages instructions.

## 4. Open the same folder in Codex

Open **Codex** from ChatGPT desktop and add/open a **local project** using the same cloned folder that is open in VS Code. Start a local chat working on this computer, in that folder. Use the current folder rather than a separate worktree or cloud environment for this first exercise. [Local projects](https://learn.chatgpt.com/docs/projects), [Codex environments](https://learn.chatgpt.com/docs/environments/modes)

Paste into **Codex**:

> Read AGENTS.md and docs/specs/practice.md in this project. Tell me the practice task and which existing HTML file it affects. Do not change anything yet.

The reply should identify PRACTICE-001 and `app/public/index.html`. Open that file in VS Code and compare it with the explanation. If Codex cannot find it, check that both tools opened the same folder.

## Ready to begin

Check these together with your instructor before starting the exercise:

- Your repository has **Issues** and **Actions** tabs, and `origin` points to your account. If a tab or workflow is unavailable, ask your instructor before starting.
- The app opens in your browser. Keep its address handy.
- Codex can read `app/public/index.html` from the folder open in VS Code.
- In a second VS Code terminal, run the checks below. The first two should show your Git name and email. The last checks push access without changing GitHub:

```sh
git config user.name
git config user.email
git push --dry-run origin main
```

**Success:** a name, an email, and `Everything up-to-date`. If a value is blank, ask Codex to help configure your own Git identity. If GitHub requests sign-in, use your account and retry. For a rejected push or another error, share the message with your instructor; do not force-push.

If one is missing, ask for setup help here. The exercise begins with a working workspace, not with troubleshooting installations.

Continue to [Your first change](./practice). It tells you what to discuss in ChatGPT and what to give Codex. Do not assume a separate chat automatically shares your plan or files; carry the agreed plan into Codex explicitly.

## If you get stuck

- **Windows says npm scripts are disabled:** in VS Code's terminal dropdown, open a **Command Prompt** terminal and retry. No security-policy change is needed.
- **Port 3000 is in use (`EADDRINUSE`):** if you recognize your earlier app terminal, stop it with Ctrl+C and retry. Otherwise leave it alone and use port 3001 below. Open the address printed by this new terminal.
- **The page still shows the old version:** stop this app's terminal with Ctrl+C, rerun its start command, and refresh the matching browser address. This app loads HTML when the server starts.
- **npm prints warnings:** check whether the command finished successfully. A warning alone does not mean setup failed. Share the actual output if unsure.
- **Git asks for your name, email, or GitHub sign-in:** complete your Git identity/sign-in setup with your instructor before committing or pushing. Use your own account.
- **Files or changes are missing:** check the folder in VS Code and the local project selected in Codex.
- **Finished for now:** stop `npm start` with Ctrl+C. Your files stay in the project folder.

### Use another port

**macOS / Linux**

```sh
PORT=3001 npm start
```

**Windows Command Prompt**

```bat
set PORT=3001
npm start
```

Open **http://127.0.0.1:3001**. Use that same command and address after a restart.

### Ask AI for setup help

Paste the failing command and its error into Codex, with this prompt. Omit passwords, tokens, and other secrets.

> I am doing the setup, not changing the app yet. Explain this error in plain language and suggest the smallest next step for my operating system. Do not edit files or stop other programs. Tell me what success should look like.
