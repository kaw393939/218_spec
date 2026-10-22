# Review process

Read specifications on this site and discuss proposed changes in GitHub pull requests.

## 1. Draft

Start with the [specification template](../specs/template). Name the owner, describe the problem, and write requirements with acceptance criteria. Add the document to the [directory](../specs/).

## 2. Request review

Create a branch and open a pull request. Set the specification's status to **In review** and identify questions that need a decision. Explain the proposed program or revision.

For feedback spanning several documents, [open a review issue](https://github.com/kaw393939/218_spec/issues/new/choose) and link the affected pages.

## 3. Discuss and revise

Reviewers should check:

- The problem, users, and scope are clear.
- Requirements describe behavior that can be verified.
- Inputs, outputs, validation, and failure behavior are defined.
- Acceptance scenarios cover main workflows and important edge cases.
- Dependencies, constraints, and unresolved questions are visible.
- Decisions and changes include their rationale.

Leave line comments on the pull request for specific feedback. Use GitHub review outcomes to record approval or requested changes.

## 4. Approve and publish

After explicit reviewer approval, record the outcome and update the specification and directory to **Approved**. Merge into `main`; GitHub Actions builds and publishes this site automatically.

Check the [deployment workflow](https://github.com/kaw393939/218_spec/actions/workflows/deploy.yml) if an update has not appeared.

## 5. Keep specifications current

Propose requirement changes through another pull request. Preserve stable requirement IDs, explain changes, and update acceptance scenarios. Mark replaced documents **Superseded** and link to replacements.

::: tip A useful review question
Could another person implement and verify this program using only the specification?
:::
