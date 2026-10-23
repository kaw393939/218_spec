# Start here

Practice guiding AI through one small change. The aim is to get comfortable describing what you want, discussing it, and checking the result.

Use the AI coding tool available in your class. Keep the project in GitHub and the specification in ordinary Markdown. No special spec tool or AI API key is needed for this exercise.

## Follow one cycle

1. **Read the intention.** Start with the instructor's project spec. Ask AI to explain anything unclear.
2. **Discuss one change.** Say what you want. Ask AI to identify missing decisions and suggest a small plan. Read it and resolve questions before implementation.
3. **Write a short issue.** Include the feature ID, a link to the spec, and a few examples of what should happen.
4. **Build the change.** Ask AI to implement that issue. Use a branch and keep unrelated work out of the change.
5. **Try it together.** Open the result, try the examples, and inspect the changed files. Ask for an explanation where needed. Give specific feedback and repeat until it behaves as intended.
6. **Keep the result visible.** Link the issue in a pull request. Update the spec if a decision changed, add code and check links, then review and merge.

Start by watching the instructor complete a cycle. Then repeat it with one small change of your own. The [worked example](./example) shows how the pieces connect.

## A prompt to begin

> Read this project spec and the relevant existing files. Help me choose one small change. Explain what it should do, identify any questions, and propose a short plan before editing code.

When the plan is clear:

> Implement only the agreed issue. Use the existing project conventions. Run the relevant checks, then show me what changed and how I can try it myself.

If the result needs work, describe what you observed: “Submitting an empty field shows a result of zero. Show a message asking for a number instead.”

## Same process, different projects

| Class | Practice project | Example of a small task |
| --- | --- | --- |
| IS117 | Plain white T-shirt ecommerce site | Revise the product page to express the chosen brand direction. |
| IS218 | Four-function web calculator | Show a clear message when dividing by zero. |
| IS373 | Investigate an existing Docker-hosted site with CI/CD and a real domain | Trace how one visible page change reaches the public site. |

These are practice settings, not a requirement to build every feature at once. This repository's link library is the shared worked example; it is not the IS218 calculator assignment.

Continue with [the worked example](./example), or copy the [short spec template](./specs/template).
