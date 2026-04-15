<script setup lang="ts">
defineProps<{
  values: string[]
}>()
</script>

<template>
  <section id="values" class="values">
    <div class="values__inner">
      <h2 class="values__title">Principles</h2>
      <ul class="values__list">
        <li v-for="(v, i) in values" :key="i" class="values__item">
          <span class="values__check" aria-hidden="true">✓</span>
          <span>{{ v }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.values {
  padding: 3rem 1.25rem 3.5rem;
}

.values__inner {
  max-width: 720px;
  margin: 0 auto;
}

.values__title {
  margin: 0 0 1.25rem;
  font-size: clamp(1.65rem, 3vw, 2rem);
}

.values__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.values__item {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  font-size: 1.02rem;
  color: var(--color-ink-muted);
  line-height: 1.5;
}

.values__check {
  flex-shrink: 0;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 999px;
  background: var(--color-primary);
  color: #fff;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.15rem;
}
</style>
