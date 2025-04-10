<template>
  <aside>
    <header>
      <DarkMode />
      <LanguageSwitcher />
    </header>

    <footer>
      <font-awesome-icon :icon="['fas', 'cloud-arrow-down']" class="icon"/>
    </footer>
  </aside>
</template>

<script lang="ts" setup>
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import DarkMode from '@/components/DarkMode.vue'
</script>

<style lang="scss">
@media (max-width: 768px) {
  aside {
    position: sticky;
    max-height: 70px;
    width: 100%;
    flex-direction: row !important;
    padding: 18px 15px !important;

    header {
      flex-direction: row !important;
    }
  }
}

aside {
  z-index: 9999;

  // Positioning
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  padding: 15px 0;

  // Sizing
  height: 100%;
  min-width: 70px;

  justify-content: space-between;

  // Coloring
  background-color: var(--color-bg);
  color: var(--color-accent);

  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .icon {
    font-size: 1.6rem;
  }

  .item {
    margin: 15px 0;
  }
}
</style>
