# Personal link library

Paste a link. Get a useful summary. Find it later.

**For:** one person. **Progress:** planned; application code has not been written.

## How it works

1. Paste a URL and optionally add a note.
2. The app saves it, reads the page, and uses OpenAI to suggest a category, topic tags, and a short summary.
3. Browse or search your library. Open an entry to read the summary, visit the source, or make corrections.

Keep the interface to a URL box, a searchable list with category filters, and an entry detail view. Show **Processing**, **Ready**, or **Needs attention** on each entry.

## Features

| ID | Feature | Done when |
| --- | --- | --- |
| LINK-001 | Save a link | A valid URL and optional note are saved in SQLite before processing. Submitting the same normalized URL opens the existing entry. |
| LINK-002 | Read the page | The app extracts available page text and metadata. A blocked or unreadable page shows a clear reason, with options to retry or paste text. |
| LINK-003 | Organize and summarize | The entry gets a category, topic tags, a short summary, and key points based on retrieved or pasted content. Missing facts stay unknown. |
| LINK-004 | Browse and search | Search titles, summaries, tags, and notes; filter by category; open the original source. |
| LINK-005 | Edit an entry | Change the category, tags, summary, or notes. Reprocessing preserves manual edits unless you choose to replace them. |

## Categories

Start with **Article**, **Tutorial / docs**, **Repository / tool**, **Event**, **Research**, and **Other**. Use flexible topic tags such as AI, Python, or teaching.

Summaries match the category: events emphasize dates, venues, and speakers; tutorials emphasize what you learn; tools emphasize what they do; research emphasizes findings and limitations. Include only details present in the source.

## Keep the build small

- One web app with a backend and one SQLite database file.
- OpenAI calls run on the backend; the API key stays out of the browser and Git.
- Save the URL, extracted content, generated result, manual edits, and processing status.
- A failed fetch or AI request leaves the saved link intact and offers a retry.
- Limit page size and request time. Fetch public web URLs only, including after redirects.
- Keep the SQLite file on persistent storage and make regular backups.

Start for personal use locally. Before making the running app internet-accessible, decide how to restrict access. GitHub Pages hosts these docs; the running app needs a backend host.

## Later, if useful

Shared accounts, team roles, browser extensions, bulk imports, scheduled refreshes, and vector search can wait. No separate queue service or microservices for the first version.

## Work and code

Each feature has one issue. As implementation lands, add its pull request, source files, and tests here. **Planned** means the feature is not implemented yet.

| Feature | Issue | Implementation | Verification |
| --- | --- | --- | --- |
| LINK-001 | [#1](https://github.com/kaw393939/218_spec/issues/1) | Not implemented | Not verified |
| LINK-002 | [#2](https://github.com/kaw393939/218_spec/issues/2) | Not implemented | Not verified |
| LINK-003 | [#3](https://github.com/kaw393939/218_spec/issues/3) | Not implemented | Not verified |
| LINK-004 | [#4](https://github.com/kaw393939/218_spec/issues/4) | Not implemented | Not verified |
| LINK-005 | [#5](https://github.com/kaw393939/218_spec/issues/5) | Not implemented | Not verified |

## Decisions still to make

- Backend language and framework.
- Where to host the app after the local version works.

Next step: review the five features, then implement the smallest end-to-end path: save one link, summarize it, and display it.
