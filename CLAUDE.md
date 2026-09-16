# Grace Fujii Portfolio — maintenance pipeline

## Ongoing maintenance (post-launch), split by edit frequency

| Content | Frequency | Method |
|---|---|---|
| CV | Infrequent | Update Google Doc source-of-truth first, batch into site during maintenance block |
| ENGR 2 Design Notebook / Field Notes | Weekly (graded, real-time) | Write in Google Doc first, trim into `.mk-entry` block via GitHub web editor — no Claude Code needed, it's an append |
| Reading list | Unknown/sporadic | Dedicated append-only markdown file, edited whenever via GitHub web editor |
| Structural changes (new templates, layout redesigns) | As needed | Bring in Claude Code — the only case needing a full dev session |

Recurring maintenance block: 20–30 min every 2–3 weeks during the semester, batching whatever's accumulated into commits. Weekly Design Notebook writing happens on its own graded cadence — the block is for trimming/pushing what's already written, plus CV and reading-list additions.

## Two-artifact writing workflow (ENGR 2)

One piece of writing, two lightly-edited destinations:

1. **Google Doc, written in real time as project activities happen.** The actual graded record, full detail, unedited for outside audiences. Exported to PDF and submitted via Camino as that week's Design Notebook / Reflection entry. Always written first.
2. **Light trim → `.mk-entry` block on the Maker-class site (engr2-maker-log.html).** Same week's paragraph, cut for a public reader, pasted into the growable entry block for that project. An edit, not a second draft.
3. **Optional heavier distillation → Field Notes on the main portfolio.** Only for entries strong enough for REU/grad/hirer audiences — most weeks won't clear this bar. Retrospective curation, done during the maintenance block, not weekly.

Sequencing: Camino deadline drives the writing. The `.mk-entry` trim happens same-day/same-week, while detail is fresh. Field Notes distillation is the only step that can wait.

## Open decision

"Field Notes" (main portfolio) is the current lead candidate for what replaces the removed Ramblings tab — not yet built. Revisit when there's a first real Field Notes-worthy entry.
