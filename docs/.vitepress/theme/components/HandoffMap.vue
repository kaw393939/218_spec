<template>
  <figure id="codex-handoff" class="handoff" aria-label="Save the plan in SPEC.md, then have Codex read it in the same folder">
    <div class="endpoint"><strong>ChatGPT desktop</strong><span>Discuss and agree</span></div>
    <div class="packet"><strong>Save → SPEC.md</strong><span>Rules, plan, and issue link</span><span>One file carries the decisions.</span></div>
    <div class="endpoint"><strong>Codex · same folder</strong><span>Read AGENTS.md + SPEC.md</span><span>Inspect, build, test, and review</span></div>
  </figure>
</template>

<style scoped>
.handoff { display: grid; grid-template-columns: 1fr 1.2fr 1fr; gap: 12px; margin: 24px 0; align-items: stretch; }
.endpoint, .packet { display: flex; flex-direction: column; gap: 8px; border: 1px solid var(--vp-c-divider); border-radius: 12px; padding: 16px; font-size: 14px; line-height: 1.5; }
.endpoint { justify-content: center; background: var(--vp-c-bg-soft); }
.packet { background: var(--vp-c-brand-soft); }
.packet strong { color: var(--vp-c-brand-1); }
@media (max-width: 720px) { .handoff { grid-template-columns: 1fr; } }
</style>
