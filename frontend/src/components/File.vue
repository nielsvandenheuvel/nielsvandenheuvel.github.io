<template>
  <div class="file-container">
    <div>
      <span class="title">{{ description ? name + ': ' : name }}</span>
      <span class="description">{{ description }}</span>
    </div>
    <a v-if="path" :href="path" target="_blank">
      <font-awesome-icon :icon="['fas', 'file-export']" />
    </a>
    <a v-else class="disabled">
      <font-awesome-icon :icon="['fas', 'file-export']" />
    </a>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  path: String,
  name: { type: String, required: true },
  description: String,
})
</script>

<style lang="scss" scoped>
.file-container {
  width: 100%;
  display: flex;
  padding: 0 50px;
  justify-content: space-between;

  .title {
    font-weight: 500;
  }

  .description {
    font-weight: 300;
  }

  @media (max-width: 1000px) {
    .description {
      display: none;
    }
  }

  a {
    color: var(--color-accent);

    &:hover {
      color: inherit;
      background-color: inherit;
      text-decoration: none;
      background: none;
    }
  }

  a.disabled {
    color: var(--color-text-vague) !important;
  }
}
</style>
