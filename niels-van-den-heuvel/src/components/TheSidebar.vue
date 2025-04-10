<template>
  <aside>
    <header>
      <DarkMode />
      <LanguageSwitcher />
    </header>
    <!--
    <div class="item">
      <font-awesome-icon :icon="['fas', 'toolbox']" class="icon"/>
    </div>
    <div class="item">
      <font-awesome-icon :icon="['fas', 'toolbox']" class="icon"/>
    </div>
    -->

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
aside {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  // Positioning
  position: absolute;
  top: 0;
  left: 0;

  // Sizing
  height: 100%;
  min-width: 70px;

  // Coloring
  background-color: var(--color-bg);
  color: var(--color-accent);

  footer {
    // Positioning
    position: fixed;
    bottom: 15px;
  }

  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    // Positioning
    position: fixed;
    top: 15px;
  }

  .icon {
    font-size: 1.6rem;
  }

  .item {
    margin: 15px 0;
  }
}
</style>
