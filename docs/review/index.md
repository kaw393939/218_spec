# How we work

Keep the plan short and the work easy to follow.

## One issue per feature

Use a stable ID such as **LINK-001** in the spec and issue title. Each issue needs only:

- What the user should be able to do.
- A short checklist describing when it is done.
- A link to the specification.

Use **open** for work remaining and **closed** for completed work. Add labels only when they help; no extra project board is required.

## Link the implementation

Reference the feature ID in the pull request and use `Closes #123` for its issue. Add links to the implementing code and relevant tests in the spec's tracking table. Close a feature when its acceptance criteria work, not just when files exist.

Until implementation exists, write **Not implemented** instead of guessing file paths.

## Review and publish

Read the spec together, resolve unclear behavior in the issue, and keep decisions beside the feature. Use pull requests for changes that benefit from review; small documentation edits can go directly to `main`.

Run `npm run docs:build` before publishing. Every push to `main` updates this site through [GitHub Actions](https://github.com/kaw393939/218_spec/actions/workflows/deploy.yml).

[Open issues](https://github.com/kaw393939/218_spec/issues) · [Start a project](../specs/template)
