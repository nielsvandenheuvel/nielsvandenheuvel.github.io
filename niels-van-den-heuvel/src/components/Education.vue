<template>
<div class="education-container">
  <header>
    <div class="title">
      <span class="period">{{ $t( name + '.period') }}</span>
      <hr>
      <span class="institute">{{ $t( name + '.institute') }}</span>
      <span class="location">{{ $t( name + '.location') }}</span>
    </div>
    <img :src="'/src/assets/' + logo" :alt="name + '-logo'">
  </header>
  <div class="description">{{ $t( name + '.description') }}</div>
</div>
</template>

<script lang="ts" setup>
const props = defineProps({
  logo: String,
  name: String,
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

    .title {
      display: flex;
      flex-direction: column;

      hr {
        width: 45%;
        margin-top: 3px;
        margin-bottom: 5px;
      }

      .period {
        color: var(--color-text-vague);
        font-size: 12px;
      }

      .institute {
        font-weight: 700;
      }

      .location {
        color: var(--color-text-vague);
        font-weight: 500;
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
    text-align: justify;
  }
}
</style>
