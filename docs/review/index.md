# Keep the work visible

For RPS-001, keep the current decisions in your local `SPEC.md`. GitHub connects the request to the change so you can return later without reconstructing a chat.

| Record | What belongs there |
| --- | --- |
| **Spec** | Intended behavior, examples, agreed plan, and links to the work. |
| **Issue** | One bounded task, identified as RPS-001, linked from the spec. |
| **Pull request** | The change, actual check results, and `Closes #N` for your issue. |
| **Code and tests** | The implementation and checks that support the behavior. |

An issue records the task. A branch keeps your edits together. A pull request lets you review those edits before merging them into `main`. GitHub's issue number is separate from the feature ID RPS-001.

Keep the record short. Write **Not implemented** or **Not verified** until you have evidence. Passing tests do not establish visual usability, and AI should not claim a browser review it did not perform.

Use relative links such as `[game.py](game.py)` and `[tests](tests/test_game.py)` in `SPEC.md` so they follow the version being viewed. Record important limits and your actual browser observations. No project board or full chat transcript is needed.

[Return to the starter README →](https://github.com/kaw393939/is218-rps-starter#readme)

Optional: [earlier worked example](../example) · [short spec template](../specs/template)
