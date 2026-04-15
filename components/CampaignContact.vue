<script setup lang="ts">
import type { CampaignContent } from '~/site/campaign'

defineProps<{
  contact: CampaignContent['contact']
  cta: CampaignContent['cta']
}>()
</script>

<template>
  <section id="contact" class="contact">
    <div class="contact__inner">
      <div class="contact__panel">
        <h2 class="contact__title">Contact the campaign</h2>
        <p class="contact__note">{{ contact.locationNote }}</p>
        <dl class="contact__dl">
          <div class="contact__row">
            <dt>Phone</dt>
            <dd>
              <a :href="`tel:${contact.phone.replace(/\s/g, '')}`">{{ contact.phone }}</a>
            </dd>
          </div>
          <div class="contact__row">
            <dt>Email</dt>
            <dd>
              <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
            </dd>
          </div>
        </dl>
        <div class="contact__social">
          <a
            v-for="s in contact.social"
            :key="s.href"
            class="contact__social-link"
            :href="s.href"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ s.label }}
          </a>
        </div>
      </div>
      <div class="contact__cta">
        <h3 class="contact__cta-title">Voters</h3>
        <p class="contact__cta-text">{{ cta.register }}</p>
        <p class="contact__cta-text">{{ cta.vote }}</p>
        <a
          class="contact__iebc"
          href="https://www.iebc.or.ke"
          target="_blank"
          rel="noopener noreferrer"
        >
          Independent Electoral and Boundaries Commission (IEBC) — iebc.or.ke
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: 2rem 1.25rem 4rem;
}

.contact__inner {
  max-width: 1120px;
  margin: 0 auto;
  display: grid;
  gap: 1.5rem;
}

@media (min-width: 800px) {
  .contact__inner {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
}

.contact__panel {
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 1.75rem 1.5rem;
  box-shadow: var(--shadow-soft);
}

.contact__title {
  margin: 0 0 0.5rem;
  font-size: clamp(1.45rem, 2.5vw, 1.75rem);
}

.contact__note {
  margin: 0 0 1.25rem;
  color: var(--color-ink-muted);
  font-size: 0.98rem;
}

.contact__dl {
  margin: 0 0 1.25rem;
}

.contact__row {
  display: grid;
  grid-template-columns: 5rem 1fr;
  gap: 0.5rem 1rem;
  margin-bottom: 0.75rem;
  font-size: 0.98rem;
}

.contact__row dt {
  font-weight: 600;
  color: var(--color-ink-muted);
}

.contact__row dd {
  margin: 0;
}

.contact__social {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
}

.contact__social-link {
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
}

.contact__cta {
  background: var(--color-primary);
  color: #eef7f3;
  border-radius: var(--radius-lg);
  padding: 1.75rem 1.5rem;
}

.contact__cta-title {
  margin: 0 0 0.75rem;
  font-family: var(--font-display);
  font-size: 1.35rem;
}

.contact__cta-text {
  margin: 0 0 0.75rem;
  font-size: 0.98rem;
  opacity: 0.95;
  line-height: 1.55;
}

.contact__cta-text:last-of-type {
  margin-bottom: 1rem;
}

.contact__iebc {
  display: inline-block;
  color: #fff;
  font-weight: 600;
  font-size: 0.92rem;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.contact__iebc:hover {
  color: #fff;
  opacity: 0.92;
}
</style>
