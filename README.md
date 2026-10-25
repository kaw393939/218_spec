# Build a game you can trust—with AI

Use Rock, Paper, Scissors to practice a repeatable process: agree what should happen, guide AI, let it test and review its work, then check the result yourself.

**Students: [start in the game starter README](https://github.com/kaw393939/is218-rps-starter#readme).** Create your own copy there and clone it with SSH. Use your class Python, one local Codex chat inside ChatGPT desktop, terminal Git, and a browser. VS Code is optional. No API key or website deployment is needed.

**Try → Decide → Build → Check → Keep.** Your first change makes one round playable. A later change adds first-to-two scoring. Keep the first task small.

[Visual overview](https://kaw393939.github.io/218_spec/) · [Setup help](https://kaw393939.github.io/218_spec/setup.html) · [Background](https://kaw393939.github.io/218_spec/background.html)

## About this repository

This repository publishes the instructor’s VitePress site. **It is not the student game starter.** Students do not need Node.js, SQLite, or a documentation build for the game exercise.

The previous link-library application and specs remain as an [archived worked example](https://kaw393939.github.io/218_spec/example.html). Research records describe agent-enacted trials, not studies with human students.

To maintain this site with Node.js 22.13+:

```sh
npm ci
npm run docs:dev
```

Run `npm run docs:build` before publishing. `npm test` checks the archived link application, and `npm start` runs it locally. [Website maintenance](docs/contributing.md).
