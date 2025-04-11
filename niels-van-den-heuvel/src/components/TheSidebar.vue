<template>
  <aside>
    <header>
      <DarkMode />
      <LanguageSwitcher />
    </header>
    <PDFDownloader />
  </aside>
</template>

<script lang="ts" setup>
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import DarkMode from '@/components/DarkMode.vue'
import PDFDownloader from './PDFDownloader.vue';
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

  -webkit-box-shadow: 0px 10px 34px -20px var(--color-shadow);
  -moz-box-shadow: 0px 10px 34px -20px var(--color-shadow);
  box-shadow: 0px 10px 34px -20px var(--color-shadow);

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
  }

  .item {
    margin: 15px 0;
  }
}
</style>
