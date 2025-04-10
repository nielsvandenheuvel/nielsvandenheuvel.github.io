<template>
<div class="education-container">
  <header>
    <span>{{ $t( name + '.institute') }}</span>
    <span>{{ $t( name + '.period') }}</span>
  </header>
  <div class="list" v-html="$t( name + '.description')"></div>
</div>
</template>

<script lang="ts" setup>
defineProps({
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

    span {
      font-weight: 700;
    }
  }
}
</style>
