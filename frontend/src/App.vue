<template>
  <div class="app w-100 h-100 d-flex flex-column flex-md-row">
    <TheSidebar v-if="showSidebar" />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import TheSidebar from './components/TheSidebar.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const showSidebar = computed(() => !['NotFound'].includes(route.name))
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
//   border: 1px dashed red; /* You can change the color and style */
// }

.app {
  font-family: 'Poppins', sans-serif;
  position: absolute;
  left: 0;
  top: 0;

  background-color: var(--color-bg);

  main {
    flex: 1;
    overflow-y: auto;
    background-color: var(--color-bg);
  }
}
</style>
