---
prev: false
next: false
---
# Give AI a reliable feedback loop

AI proposes a change. Tools check specific claims. **You decide whether the result meets the spec.** The starter supplies the tools and settings; you do not need to choose extensions or invent a testing framework.

| Tool | What it checks | What it cannot establish |
| --- | --- | --- |
| **pytest** | Explicit expected behavior, from a small function to a browser journey. | Requirements nobody tested. |
| **Pylint** | Suspicious Python and shared code standards, such as undefined names or unused imports. | That the game follows its rules. |
| **Black** | Consistent Python formatting. | Correct behavior or good design. |

Run the starter README's **one check command** before asking someone to review the game. It runs formatting, analysis, fast tests, and a real Chromium browser check. GitHub runs that same command on the PR. The check command reports failures; it does not silently rewrite files.

## Positive and negative cases

**Positive tests use supported inputs and expect the correct behavior.** Rock against scissors wins; rock against paper loses; matching moves tie. A losing round is still a positive test.

**Negative tests exercise invalid input or failure conditions.** Submit `lizard` or omit the move: the supplied server should reject the request with a helpful explanation and HTTP 400, without calling the game rules. Test the intended error response, not merely that something crashed.

“Positive” does not mean the test passes. A positive test fails when valid play is broken; a negative test passes when invalid input is handled correctly.

## Choose the right test level

Positive/negative describes the case. Unit/integration/end-to-end describes how much of the system the test exercises.

| Level | RPS example | Efficient scope |
| --- | --- | --- |
| **Unit** | Call `determine_winner` directly and compare its return with the spec. | All nine matchups; quick, easy to diagnose. |
| **Integration** | Submit a Flask request and check validation, real rules, and rendered response together. | One valid round using real rules, plus supplied missing/invalid-move checks. No browser needed. |
| **End-to-end (E2E)** | A real browser clicks Rock and sees the server's result, then plays again. | One short journey covering both choices, the result, and replay. |

The supplied shell tests sometimes substitute the rules to isolate the interface. **Those do not verify the game.** New rule and completed-round tests must use the real rule function. For repeatability, fix only the computer's choice; do not replace the function you are trying to verify.

## Manage AI efficiently

Before coding, ask AI for a small test plan: **which valid and invalid cases, at which levels, and what will each prove?** Review expected answers against `SPEC.md`.

While fixing a problem, rerun the relevant test or the fast checks. Before human review and the PR, run the full checks. Avoid repeating nine cases through a slow browser when unit tests already cover the rules. Browser tests use waiting assertions, not arbitrary sleeps or retries until green.

Ask AI to report actual commands, failures, fixes, and remaining limits. Fix the cause; do not delete assertions or weaken shared settings just to pass. Failures after a browser page opens retain a screenshot and trace; CI makes them available with the failed run. Installation or launch errors may have logs only.

## Understand the measurements

Pinned dependencies, checked-in settings, controlled inputs, and the class Python 3.12 environment make checks repeatable. CI uses Ubuntu 24.04 and Python 3.12 as the shared reference environment; a different Python or operating system can still expose differences.

A pass means the configured checks found no problem. The unfinished starter passes its **shell** checks; RPS-001 still needs real rule and completed-game checks. Test counts, lint ratings, and coverage percentages are not quality grades. Coverage can help find untested code later. Application speed needs its own measurements; passing these checks does not prove performance.

**Why review the new tests?** During our audit, an “always tie” implementation passed the supplied shell checks when no feature tests were added. With the real rule and completed-game tests present, a wrong winner failed unit, integration, and browser checks. Green is only meaningful in relation to the expectations tested.

## When a check fails

This is a worked example, **not output from your own project**. You do not need to break your game to follow it.

1. The spec says player Rock against computer Scissors returns `win`.
2. The test expects `win`, but the function returns `lose`.
3. pytest reports the mismatch: `assert 'lose' == 'win'`.
4. Compare the expectation and implementation with the spec. Here, the expected answer is right; the implementation needs investigation. In another failure, the test itself could be wrong.

Ask your coding agent:

> Compare this failure with SPEC.md and the test. Explain the mismatch, make the smallest justified correction, rerun the relevant test, then run the full checks. Do not change an expected answer merely to get a pass. Tell me what remains unverified.

**Try the reasoning:** which part of that example establishes the expected answer—the AI's explanation, the test output, or the agreed rule? Keep the answer in your conversation; no separate submission is needed.

[Continue in the starter README →](https://github.com/kaw393939/is218-rps-starter#readme)

Further reading: [pytest assertions](https://docs.pytest.org/en/stable/how-to/assert.html), [Pylint](https://pylint.readthedocs.io/en/stable/user_guide/usage/run.html), [Black check mode](https://black.readthedocs.io/en/stable/usage_and_configuration/the_basics.html), [Playwright's pytest browser fixtures](https://playwright.dev/python/docs/test-runners).
