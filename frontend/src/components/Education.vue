<template>
<div class="education-container">
  <header>
    <div class="title">
      <div class="period">
        <span>{{ $t( name + '.period') }}</span>
        <hr>
      </div>
      <a :href="link" target="_blank" class="institute" :class="{ 'enabled': link }">{{ $t( name + '.institute') }}</a>
      <span class="location">{{ $t( name + '.location') }}</span>
    </div>
    <img :src="'/src/assets/' + logo" :alt="name + '-logo'" v-if="logo">
  </header>
  <div class="description">{{ $t( name + '.description') }}</div>
</div>
</template>

<script lang="ts" setup>
defineProps({
  logo: String,
  link: String,
  name: { type: String, required: true },
})
</script>

<style lang="scss" scoped>
.education-container {
  padding-top: 15px;
  padding-left: 30px;

  header {
    display: flex;
    flex-direction: auto;
    justify-content: space-between;
    max-height: 90px;
    margin-bottom: 13px;

    .title {
      display: flex;
      flex-direction: column;

      a {
        padding: 0;
        color: var(--color-text);
        text-decoration: none;

        &:hover {
          background-color: transparent;
        }
      }

      .enabled:hover {
        cursor: pointer;
      }

      .period {
        color: var(--color-text-vague);
        font-size: 12px;

        hr {
          width: 100%;
          margin-top: 3px;
          margin-bottom: 5px;
        }
      }

      .institute {
        font-weight: 700;
      }

      .location {
        color: var(--color-accent);
        font-weight: 300;
      }
    }

    img {
      height: 90px;
      max-width: 160px;
      object-fit: contain;
    }
  }

  .description {
    font-size: 15px;
    line-height: 1.8;
  }
}
</style>
