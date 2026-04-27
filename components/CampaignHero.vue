<script setup lang="ts">
import { ref } from 'vue'
import type { CampaignContent } from '~/site/campaign'

defineProps<{
  candidate: CampaignContent['candidate']
}>()

const photoLoaded = ref(false)
const photoFailed = ref(false)
const photoPath = '/wayne.jpg'
</script>

<template>
  <section id="top" class="hero">
    <div class="hero__grid">
      <div class="hero__copy">
        <p class="hero__eyebrow">{{ candidate.roleLabel }}</p>
        <h1 class="hero__title">{{ candidate.fullName }}</h1>
        <p class="hero__tagline">{{ candidate.shortTagline }}</p>
        <ul class="hero__meta" aria-label="Electoral context">
          <li><span class="hero__label">County</span> {{ candidate.county }}</li>
          <li><span class="hero__label">Ward</span> {{ candidate.ward }}</li>
          <li><span class="hero__label">Ballot</span> {{ candidate.party }}</li>
        </ul>
        <div class="hero__actions">
          <a class="btn btn--primary" href="#priorities">See priorities</a>
          <a class="btn btn--ghost" href="#contact">Get in touch</a>
        </div>
      </div>
      <div class="hero__visual">
        <div class="hero__card">
          <div class="hero__frame">
            <img
              class="hero__img"
              :src="photoPath"
              alt=""
              width="480"
              height="600"
              loading="eager"
              decoding="async"
              :class="{ 'hero__img--show': photoLoaded && !photoFailed }"
              @load="photoLoaded = true"
              @error="photoFailed = true"
            >
            <div
              class="hero__photo-placeholder"
              :class="{ 'hero__photo-placeholder--hide': photoLoaded && !photoFailed }"
              role="img"
              :aria-label="candidate.photoAlt"
            >
              <span class="hero__initials" aria-hidden="true">WGL</span>
            </div>
          </div>
          <p class="hero__photo-hint">
            Place a head-and-shoulders photo at <code>public/wayne.jpg</code> (it loads automatically).
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 2.5rem 1.25rem 3.5rem;
  max-width: 1120px;
  margin: 0 auto;
}

.hero__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  align-items: center;
}

@media (min-width: 900px) {
  .hero__grid {
    grid-template-columns: 1.1fr 0.9fr;
    gap: 3rem;
  }
}

.hero__eyebrow {
  margin: 0 0 0.5rem;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-primary);
}

.hero__title {
  margin: 0 0 0.75rem;
  font-size: clamp(2rem, 4vw, 2.85rem);
}

.hero__tagline {
  margin: 0 0 1.5rem;
  font-size: 1.15rem;
  color: var(--color-ink-muted);
  max-width: 36ch;
}

.hero__meta {
  list-style: none;
  margin: 0 0 1.75rem;
  padding: 0;
  display: grid;
  gap: 0.5rem;
  font-size: 0.98rem;
}

.hero__label {
  display: inline-block;
  min-width: 4.5rem;
  font-weight: 600;
  color: var(--color-ink-muted);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.25rem;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  border: 1px solid transparent;
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
}

.btn--primary {
  background: var(--color-primary);
  color: #fff;
}

.btn--primary:hover {
  background: var(--color-primary-hover);
  color: #fff;
}

.btn--ghost {
  background: transparent;
  color: var(--color-primary);
  border-color: rgba(15, 77, 58, 0.35);
}

.btn--ghost:hover {
  background: var(--color-accent-soft);
  border-color: var(--color-accent);
  color: var(--color-primary-hover);
}

.hero__visual {
  justify-self: stretch;
}

.hero__card {
  background: var(--color-bg-elevated);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  box-shadow: var(--shadow-soft);
  border: 1px solid var(--color-border);
}

.hero__frame {
  position: relative;
  aspect-ratio: 4/5;
  border-radius: var(--radius-md);
  overflow: hidden;
  background: #0f4d3a;
}

.hero__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.35s ease;
}

.hero__img--show {
  opacity: 1;
}

.hero__photo-placeholder {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(145deg, #0f4d3a 0%, #1a6b52 45%, #c17f2f 100%);
  transition: opacity 0.35s ease;
}

.hero__photo-placeholder--hide {
  opacity: 0;
  pointer-events: none;
}

.hero__initials {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 6vw, 3.5rem);
  font-weight: 700;
  color: rgba(255, 255, 255, 0.95);
  letter-spacing: 0.08em;
}

.hero__photo-hint {
  margin: 1rem 0 0;
  font-size: 0.82rem;
  color: var(--color-ink-muted);
  line-height: 1.45;
}

.hero__photo-hint code {
  font-size: 0.8em;
  background: rgba(15, 77, 58, 0.08);
  padding: 0.1em 0.35em;
  border-radius: 4px;
}
</style>
