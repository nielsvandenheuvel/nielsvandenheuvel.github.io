<template>
<div class="skill-container">
<div class="skill-block">
  <div class="skill-header">
    <span class="skill-name">{{ name }}</span>
    <span class="skill-percent">{{ percentage }}%</span>
  </div>
  <div class="progress-bar">
    <div
      class="progress-fill"
      :style="{ width: percentage + '%' }"
    ></div>
  </div>
</div>
</div>
</template>

<script lang="ts" setup>
defineProps({
  name: String,
  percentage: Number,
})
</script>

<style lang="scss" scoped>
.skill-container {
  padding-top: 20px;

  .skill-block {

    .skill-header {
      display: flex;
      justify-content: space-between;
      font-size: 17px;
      margin-bottom: 6px;
      text-transform: capitalize;

      .skill-name {
        font-weight: 700;
      }

      .skill-percent {
        color: var(--color-accent);
      }
    }

    .progress-bar {
      width: 100%;
      min-height: 6px;
      background-color: var(--color-text-vague);
      border-radius: 3px;
      overflow: hidden;

      .progress-fill {
        min-height: 6px;
        background-color: var(--color-accent);
        transition: width 0.5s ease-in-out;
      }
    }
  }
}
</style>
