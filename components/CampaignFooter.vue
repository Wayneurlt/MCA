<script setup lang="ts">
defineProps<{
  name: string
  ward: string
  county: string
}>()

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="footer__inner">
      <p class="footer__line">
        © {{ year }} {{ name }}. Campaign materials for MCA — {{ ward }}, {{ county }}.
      </p>
      <p class="footer__line footer__line--muted">
        Paid for by the campaign · Content on this site is for information; verify registration and candidates with IEBC.
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 2rem 1.25rem;
  border-top: 1px solid var(--color-border);
  background: rgba(20, 34, 26, 0.03);
}

.footer__inner {
  max-width: 1120px;
  margin: 0 auto;
}

.footer__line {
  margin: 0 0 0.5rem;
  font-size: 0.88rem;
  color: var(--color-ink-muted);
}

.footer__line--muted {
  font-size: 0.82rem;
  opacity: 0.9;
}
</style>
