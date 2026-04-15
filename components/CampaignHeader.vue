<script setup lang="ts">
import type { CampaignContent } from '~/site/campaign'

defineProps<{
  candidate: CampaignContent['candidate']
}>()

const nav = [
  { label: 'About', href: '#about' },
  { label: 'Priorities', href: '#priorities' },
  { label: 'Values', href: '#values' },
  { label: 'Contact', href: '#contact' },
]
</script>

<template>
  <header class="header">
    <div class="header__inner">
      <a class="header__brand" href="#top">
        <span class="header__mark" aria-hidden="true" />
        <span class="header__name">{{ candidate.fullName.split(' ')[0] }} <strong>Ludenyi</strong></span>
      </a>
      <nav class="header__nav" aria-label="Primary">
        <a v-for="item in nav" :key="item.href" class="header__link" :href="item.href">{{ item.label }}</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(246, 244, 239, 0.92);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-border);
}

.header__inner {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0.85rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.header__brand {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  text-decoration: none;
  color: var(--color-ink);
  font-weight: 600;
  font-size: 1rem;
}

.header__brand:hover {
  color: var(--color-primary);
}

.header__mark {
  width: 10px;
  height: 28px;
  border-radius: 3px;
  background: linear-gradient(180deg, #000 33%, #de2910 33%, #de2910 66%, #007749 66%);
  box-shadow: 0 2px 8px rgba(15, 77, 58, 0.2);
}

.header__name strong {
  font-weight: 700;
  color: var(--color-primary);
}

.header__nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem 1.15rem;
  align-items: center;
}

.header__link {
  font-size: 0.92rem;
  font-weight: 500;
  color: var(--color-ink-muted);
  text-decoration: none;
}

.header__link:hover {
  color: var(--color-primary);
}

@media (max-width: 640px) {
  .header__nav {
    display: none;
  }
}
</style>
