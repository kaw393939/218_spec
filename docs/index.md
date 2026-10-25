---
layout: home
hero:
  name: Working with AI · IS218
  text: Build a game you can trust.
  tagline: A self-paced lab in working with AI. Agree on the rules of Rock, Paper, Scissors, let AI test its work, then play and review it yourself.
  actions:
    - theme: brand
      text: Start the assignment →
      link: https://github.com/kaw393939/is218-rps-starter#readme
    - theme: alt
      text: See the process
      link: /practice
---

<div class="assignment-overview">

## Your game, one small feature

You get a Python app with a browser interface. **The game rules are unfinished.** Work with AI to make one round playable: choose a move, see the computer's choice, and find out who won.

<GamePreview />

## What you will learn

- Turn an idea into a short spec with examples everyone can check.
- Guide AI through a focused change, and ask it to test and review before you play.
- Use tests, code analysis, and formatting checks as repeatable feedback.
- Inspect the result and leave a clear trail from the request to the code and checks.

**Learn through the conversation.** The agent gives one small step, then waits for you. Predict a round, explain one test together, and describe something you saw while playing. Short answers are fine; ask for a hint or example when you're unsure.

**The checks are prepared:** pytest checks behavior, Pylint analyzes Python, and Black checks formatting. Valid and invalid cases describe what you try; unit, integration, and real-browser checks describe how much of the system you exercise. [See the examples and limits](./checks).

## The route

<WorkflowMap />

**Start: your GitHub copy → SSH clone → local AI project.** Follow the [starter README](https://github.com/kaw393939/is218-rps-starter#readme), then open the cloned folder in ChatGPT desktop's Codex mode. Your first conversation explains the project and guides setup one checkpoint at a time, until you can run the unfinished game. [Another coding agent can work with the same files and terminal](./setup#another-coding-agent).

Stay in that project to agree on one feature, save the spec, build, test, and review. Keep the change with terminal Git. Use a browser to play; VS Code is optional.

**Done looks like:** a playable round, checks for all nine matchups, your own browser review, and a merged PR linked to the issue and `SPEC.md`. No API key or deployment is needed.

**Then make it yours:** choose one follow-up feature with less guidance—first-to-two scoring, an explanation of why a move won, or your own visual style. Use the same process again.

[Start with the starter README →](https://github.com/kaw393939/is218-rps-starter#readme)

</div>
