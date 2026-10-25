<template>
  <figure id="game-preview" class="game-preview">
    <div class="games">
      <section class="game-panel" aria-label="Starter preview">
        <p class="eyebrow">What you get · supplied interface</p>
        <h3>Rock, Paper, Scissors.</h3>
        <div class="moves" aria-label="Three choices">
          <span>✊ Rock</span><span>✋ Paper</span><span>✌️ Scissors</span>
        </div>
        <div class="result starter-result">
          <strong>Starter: game rules not built yet.</strong>
          <p>The page works. RPS-001 will make it decide a winner.</p>
        </div>
      </section>
      <section class="game-panel goal" aria-label="Completed round example">
        <p class="eyebrow">Your goal · finish the rules</p>
        <h3>Rock, Paper, Scissors.</h3>
        <div class="moves" aria-label="Three choices">
          <span>✊ Rock</span><span>✋ Paper</span><span>✌️ Scissors</span>
        </div>
        <div class="result">
          <p class="choices"><span>You: <b>Rock</b></span><span>Computer: <b>Scissors</b></span></p>
          <strong>You win!</strong>
          <p>Rock beats scissors. Choose again for another round.</p>
        </div>
      </section>
    </div>
    <figcaption>Illustrated preview, not a playable game. The first feature is one round; scoring comes later.</figcaption>
  </figure>
</template>

<style scoped>
.game-preview { margin: 24px 0; }
.games { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
.game-panel { border: 1px solid var(--vp-c-divider); border-radius: 16px; padding: 22px; background: var(--vp-c-bg-soft); }
.goal { border-color: var(--vp-c-brand-1); }
.game-panel .eyebrow { margin: 0 0 14px; font-size: 12px; font-weight: 700; letter-spacing: .04em; color: var(--vp-c-text-2); text-transform: uppercase; }
.game-panel h3 { margin: 0 0 20px; font-size: 24px; font-weight: 700; line-height: 1.2; }
.moves { display: flex; flex-wrap: wrap; gap: 8px; }
.moves span { padding: 8px 12px; border: 1px solid var(--vp-c-divider); border-radius: 8px; background: var(--vp-c-bg); font-size: 14px; font-weight: 600; }
.result { margin-top: 20px; padding-top: 16px; border-top: 1px solid var(--vp-c-divider); font-size: 14px; }
.result strong { display: block; margin-top: 8px; color: var(--vp-c-brand-1); font-size: 20px; line-height: 1.4; }
.starter-result strong { color: var(--vp-c-text-1); font-size: 16px; }
.game-panel .result p { margin: 8px 0 0; line-height: 1.5; }
.game-panel .result .choices { display: flex; flex-wrap: wrap; gap: 6px 24px; margin: 0 0 12px; }
figcaption { margin-top: 10px; font-size: 13px; color: var(--vp-c-text-2); line-height: 1.5; }
@media (max-width: 720px) { .games { grid-template-columns: 1fr; } .game-panel { padding: 18px; } }
</style>
