<template>
  <figure id="codex-handoff" class="saved-plan" aria-label="One local project chat uses SPEC.md to keep agreed decisions in the project">
    <figcaption>One local project chat · your cloned folder</figcaption>
    <div class="plan-flow">
      <div class="part"><strong>Discuss and agree</strong><span>You decide the rules and plan.</span></div>
      <div class="part file"><strong>SPEC.md</strong><span>Ask the agent to save the agreed plan.</span><span>Read it in the app's terminal.</span></div>
      <div class="part"><strong>Continue in the same chat</strong><span>Read the saved decisions.</span><span>Build, test, and review.</span></div>
    </div>
  </figure>
</template>

<style scoped>
.saved-plan { margin: 24px 0; border: 1px solid var(--vp-c-divider); border-radius: 12px; overflow: hidden; }
figcaption { padding: 12px 16px; background: var(--vp-c-bg-soft); font-size: 13px; font-weight: 700; line-height: 1.5; }
.plan-flow { display: grid; grid-template-columns: 1fr 1.15fr 1fr; gap: 12px; padding: 16px; }
.part { display: flex; flex-direction: column; justify-content: center; gap: 8px; border-radius: 8px; padding: 12px; font-size: 14px; line-height: 1.5; }
.file { background: var(--vp-c-brand-soft); }
.file strong { color: var(--vp-c-brand-1); }
@media (max-width: 720px) { .plan-flow { grid-template-columns: 1fr; } }
</style>
