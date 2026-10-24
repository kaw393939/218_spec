# Your first change

First complete [Setup](./setup). Keep the app open in your browser and the same local project folder open in VS Code and Codex.

**Task: PRACTICE-001.** Add this sentence directly below the optional Note box:

> Add a short note (up to 4,000 characters).

The app already limits notes to 4,000 characters, but does not explain that limit beside the box. This task changes the help text only. The [practice spec](./specs/practice) is already in your workspace at `docs/specs/practice.md`.

## 1. Discuss the plan

In **ChatGPT desktop**, attach the file `docs/specs/practice.md` from your local folder (or paste its contents). Then ask:

> Help me understand PRACTICE-001 and agree a short plan. Explain what should change and how I can try the result. Do not write code yet.

ChatGPT can discuss the supplied spec. **Codex** will inspect the actual implementation before editing it.

Read the reply. A sufficient plan is to add the sentence below Note, connect it to that field in HTML, keep saving unchanged, then run the existing checks and try the form. If it proposes extra work, reply: “Keep this to the help text and its connection to the Note field.”

## 2. Record your task

In a separate GitHub tab, open **your fork → Issues → New issue → Small feature or change**. If Issues is missing, see [Setup](./setup#_2-make-your-copy).

Use this title:

```text
PRACTICE-001: Explain the note limit
```

Fill the three fields with:

**Feature and spec link**

```text
PRACTICE-001
https://kaw393939.github.io/218_spec/specs/practice.html
Workspace file: docs/specs/practice.md
```

**What should change?**

```text
Below the optional Note box, show:
Add a short note (up to 4,000 characters).
Connect the help text to the Note field for assistive technology.
Keep saving, validation, and duplicate behavior unchanged.
```

**Examples to try**

```text
Open the app: the help appears below Note, even before typing.
Save https://example.com with a note: saving still works.
```

Create the issue and copy its URL. **PRACTICE-001** is our feature name; GitHub assigns its own issue number, which may differ. The instructor's closed issue #1 is only a historical example.

## 3. Make the change with AI

In **VS Code**, open **Terminal → New Terminal** so the first terminal can keep the app running. Enter:

```sh
git switch -c practice-001-note-help
```

This creates your working branch. If you are returning to a branch you already created, use `git switch practice-001-note-help` instead.

In **Codex**, paste the short plan you agreed in ChatGPT, then this prompt. Replace the final line with your actual issue URL:

> Implement only PRACTICE-001 from docs/specs/practice.md using the plan pasted above. Inspect the existing HTML first and raise any conflict with the plan before editing. Update that spec with my issue URL, code link, and checks actually performed. Keep the tracking row short. Use a GitHub URL for the changed source file, not a relative documentation link. Run npm test and npm run docs:build. Show the changed files and tell me how to check the page. Do not commit or push yet.
>
> My issue URL: PASTE YOUR ISSUE URL HERE

Review requests to edit files or run commands before accepting them. If you only receive suggested code in ChatGPT, switch to Codex in the local project and ask it to apply the agreed change there.

## 4. Check and give feedback

**Restart the app after the edit:** in its running terminal, press Ctrl+C and rerun the same start command you used in Setup. Refresh the browser tab at the address printed by that terminal. Refresh alone will not load the changed HTML in this app.

- The exact sentence appears below Note before you type anything.
- Save `https://example.com` with a short note. The entry appears. If already saved, reopening the existing entry is expected.
- Submit that same URL with a different note. The existing entry should keep its original note.
- Read the diff (the before/after changes) in VS Code's **Source Control** view. Ask AI to explain anything unclear, including how it connected the help text to the field.

If needed, say what you observed and what should change: “The help appears above Note. Put it directly below the box.” Recheck after the revision. A passing test result is useful; also try the page yourself.

Tell Codex what you actually observed and ask it to record that in the spec. A short tracking row is enough:

```text
PRACTICE-001 | my issue URL | GitHub URL of the HTML on my branch | npm test: 6 passed; docs build passed; I checked help text, saving, and duplicate note preservation in the browser.
```

Use your real links and results. Ask Codex to make the source link point to `app/public/index.html` on your fork's `practice-001-note-help` branch. Do not report a browser check you have not done.

## 5. Review and keep your work

In Source Control, expect changes to `app/public/index.html` and `docs/specs/practice.md`. If other files appear, ask Codex why before staging. The commands below stage only the two assignment files.

In the second terminal:

```sh
git add app/public/index.html docs/specs/practice.md
git commit -m "PRACTICE-001: explain the note limit"
git push -u origin practice-001-note-help
```

Open **your fork → Pull requests → New pull request**. Check both the **base repository** and **head repository** are your own fork. Use base `main` and compare `practice-001-note-help`; do not send this practice change to the instructor's repository.

Describe what changed and what you tried. Add `Closes #N`, replacing N with your own issue's number. Create the PR, inspect **Files changed**, and wait for the build checks. A passing build is required; a skipped deployment is expected because your fork does not publish this site. If no checks appear, check that workflows were enabled in Setup and ask your instructor for help before merging. Merge when the change matches the spec and the checks pass. Verify the issue is closed.

**This cycle is finished when:** your fork has a merged PR linked to your issue, the help text works, and the practice spec records your actual checks. No GitHub Pages deployment is required for the student copy. Stop the app terminal with Ctrl+C when done.
