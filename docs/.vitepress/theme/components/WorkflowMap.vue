<script setup lang="ts">
import { withBase } from 'vitepress'
defineProps<{ compact?: boolean }>()
const steps = [
  ['Plan', 'ChatGPT desktop', 'Agree what should change.', '_1-agree-a-plan'],
  ['Record', 'GitHub issue', 'Review the plan and examples.', '_2-record-the-task'],
  ['Build', 'Codex', 'Make one change on a branch.', '_3-build-with-codex'],
  ['Check', 'Browser + VS Code', 'Try it and inspect the diff.', '_4-check-and-give-feedback'],
  ['Keep', 'Git + GitHub PR', 'Save the reviewed change.', '_5-keep-the-reviewed-change']
]
</script>

<template>
  <nav id="assignment-cycle" class="workflow" :class="{ compact }" aria-label="The five-step assignment cycle">
    <ol>
      <li v-for="(step, index) in steps" :key="step[0]">
        <a :href="withBase('/practice.html#' + step[3])">
        <span class="step-number">{{ index + 1 }}</span>
        <strong>{{ step[0] }}</strong>
        <span class="tool">{{ step[1] }}</span>
        <span v-if="!compact">{{ step[2] }}</span>
        </a>
      </li>
    </ol>
    <p v-if="compact">Follow the steps in order. Select a card to return to a step.</p>
    <p v-else>If a check fails, give AI specific feedback, revise, and check again.</p>
  </nav>
</template>

<style scoped>
.workflow { margin: 24px 0; }
.workflow ol { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 12px; list-style: none; padding: 0; margin: 0; }
.workflow li { position: relative; margin: 0; font-size: 13px; line-height: 1.5; }
.workflow a { display: flex; flex-direction: column; gap: 8px; height: 100%; padding: 16px 12px; border: 1px solid var(--vp-c-divider); border-radius: 12px; background: var(--vp-c-bg-soft); color: inherit; text-decoration: none; }
.workflow a:hover { border-color: var(--vp-c-brand-1); }
.workflow a:focus-visible { outline: 2px solid var(--vp-c-brand-1); outline-offset: 3px; }
.workflow li:not(:last-child)::after { content: '→'; position: absolute; right: -12px; top: 30px; z-index: 1; color: var(--vp-c-brand-1); }
.step-number { display: grid; place-items: center; width: 26px; height: 26px; border-radius: 50%; background: var(--vp-c-brand-soft); color: var(--vp-c-brand-1); font-weight: 700; }
.workflow strong { font-size: 17px; }
.tool { font-weight: 600; color: var(--vp-c-brand-1); }
.workflow p { margin: 12px 0 0; font-size: 14px; color: var(--vp-c-text-2); }
.compact a { gap: 4px; padding: 10px; }
@media (max-width: 720px) {
  .workflow ol { grid-template-columns: 1fr; }
  .workflow a { padding: 12px 16px; display: grid; grid-template-columns: 28px 1fr; gap: 2px 12px; }
  .step-number { grid-row: span 3; }
  .workflow li:not(:last-child)::after { content: '↓'; top: auto; bottom: -16px; left: 21px; right: auto; }
}
</style>
