<script setup lang="ts">
import type { CampaignContent } from '~/site/campaign'

defineProps<{
  priorities: CampaignContent['priorities']
}>()
</script>

<template>
  <section id="priorities" class="priorities">
    <div class="priorities__inner">
      <header class="priorities__head">
        <h2 class="priorities__title">What he stands for</h2>
        <p class="priorities__subtitle">
          Practical priorities for the ward — edit each card in <code>site/campaign.ts</code> to match Wayne’s manifesto.
        </p>
      </header>
      <ul class="priorities__grid">
        <li v-for="(item, index) in priorities" :key="item.title" class="priorities__card">
          <span class="priorities__index" aria-hidden="true">{{ String(index + 1).padStart(2, '0') }}</span>
          <h3 class="priorities__card-title">{{ item.title }}</h3>
          <p class="priorities__card-text">{{ item.summary }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.priorities {
  padding: 3.5rem 1.25rem;
}

.priorities__inner {
  max-width: 1120px;
  margin: 0 auto;
}

.priorities__head {
  max-width: 640px;
  margin-bottom: 2rem;
}

.priorities__title {
  margin: 0 0 0.5rem;
  font-size: clamp(1.65rem, 3vw, 2rem);
}

.priorities__subtitle {
  margin: 0;
  color: var(--color-ink-muted);
  font-size: 1rem;
}

.priorities__subtitle code {
  font-size: 0.88em;
  background: rgba(15, 77, 58, 0.08);
  padding: 0.1em 0.35em;
  border-radius: 4px;
}

.priorities__grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 640px) {
  .priorities__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 960px) {
  .priorities__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.priorities__card {
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 1.35rem 1.25rem 1.4rem;
  box-shadow: 0 8px 24px rgba(15, 77, 58, 0.04);
  position: relative;
  overflow: hidden;
}

.priorities__card::before {
  content: '';
  position: absolute;
  inset: 0 0 auto 0;
  height: 3px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  opacity: 0.85;
}

.priorities__index {
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--color-accent);
  margin-bottom: 0.35rem;
}

.priorities__card-title {
  margin: 0 0 0.5rem;
  font-size: 1.15rem;
}

.priorities__card-text {
  margin: 0;
  font-size: 0.95rem;
  color: var(--color-ink-muted);
  line-height: 1.55;
}
</style>
