---
title: Specification template
description: A reusable starting point for a program specification.
---

# Specification template

Copy this page for each program. Replace the prompts and explain meaningful exclusions.

## Document details

| Field | Value |
| --- | --- |
| Program | To be named |
| Status | Draft |
| Owner | To be assigned |
| Reviewers | To be assigned |
| Version | 0.1 |
| Updated | YYYY-MM-DD |
| Review | Link to the pull request |

## Problem and purpose

Describe the problem, who experiences it, and the intended outcome.

## Users and workflows

Identify users and describe their main tasks from start to finish.

## Scope

### Included

List what this version delivers.

### Excluded

List explicit boundaries and deferred capabilities.

## Requirements

Give each requirement a stable identifier. Write observable, testable behavior.

| ID | Requirement | Priority | Acceptance criteria |
| --- | --- | --- | --- |
| FR-001 | Describe the required behavior | Must / Should / Could | State the observable result |

## Inputs, outputs, and data

Describe input formats, validation rules, stored data, output formats, and example values. Use sample data suitable for public documentation.

## Interfaces and design

Describe screens, commands, APIs, components, and external dependencies. Include examples or diagrams where useful.

## Errors and edge cases

Describe empty input, invalid data, duplicates, unavailable services, and recovery behavior as applicable.

## Quality requirements

Define relevant performance, accessibility, security, privacy, and reliability expectations with measurable criteria.

## Acceptance scenarios

```gherkin
Given a defined starting state
When the user performs an action
Then the program produces an observable result
```

Add normal, error, and boundary scenarios. Link them to the requirements they verify.

## Open questions

| Question | Owner | Decision needed by | Resolution |
| --- | --- | --- | --- |
| Record unresolved questions here | To be assigned | YYYY-MM-DD | Pending |

## Decisions and revisions

| Date | Decision or change | Reason | Reference |
| --- | --- | --- | --- |
| YYYY-MM-DD | Initial draft | Establish the proposed requirements | Pull request link |

## Review outcome

Record the reviewer, date, outcome, and follow-up requirements after review. Keep the document in Draft or In review until approval is explicit.
