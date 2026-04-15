<script setup lang="ts">
import type { CampaignContent } from '~/site/campaign'

defineProps<{
  bio: CampaignContent['bio']
}>()
</script>

<template>
  <section id="about" class="about">
    <div class="about__inner">
      <h2 class="about__title">About Wayne</h2>
      <p class="about__lead">{{ bio.intro }}</p>
      <p v-for="(p, i) in bio.paragraphs" :key="i" class="about__p">{{ p }}</p>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 3rem 1.25rem;
  background: linear-gradient(180deg, rgba(15, 77, 58, 0.06) 0%, transparent 100%);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.about__inner {
  max-width: 720px;
  margin: 0 auto;
}

.about__title {
  margin: 0 0 1rem;
  font-size: clamp(1.65rem, 3vw, 2rem);
}

.about__lead {
  margin: 0 0 1rem;
  font-size: 1.12rem;
  font-weight: 500;
  color: var(--color-ink);
}

.about__p {
  margin: 0 0 1rem;
  color: var(--color-ink-muted);
}

.about__p:last-child {
  margin-bottom: 0;
}
</style>
