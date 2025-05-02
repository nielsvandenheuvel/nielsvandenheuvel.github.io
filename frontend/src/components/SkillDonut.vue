<script lang="ts" setup>
const props = defineProps({
  percentage: { type: Number, required: true},
  name: { type: String, required: true},
  size: { type: Number, default: 100 },
  stroke: { type: Number, default: 8 },
})

const radius = (props.size - props.stroke) / 2
const circumference = 2 * Math.PI * radius
const offset = circumference - (props.percentage / 100) * circumference
</script>

<template>
  <div class="donut-container">
    <svg :width="size" :height="size" class="donut">
      <circle
        class="donut-ring"
        :r="radius"
        :cx="size / 2"
        :cy="size / 2"
        :stroke-width="stroke"
        fill="transparent"
      />
      <circle
        class="donut-segment"
        :r="radius"
        :cx="size / 2"
        :cy="size / 2"
        :stroke-width="stroke"
        fill="transparent"
        stroke-linecap="butt"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="offset"
      />
      <text class="donut-text" x="50%" y="-50%" text-anchor="middle" dy=".3em">
        {{ percentage }}%
      </text>
    </svg>
    <div class="bottom-text">
        {{ name }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.donut-container {
  align-items: center;
  text-align: center;

  .donut {
    transform: rotate(-90deg);

    .donut-ring {
      stroke: var(--color-text-vague);
      transition: stroke-dashoffset 0.35s;
    }

    .donut-segment {
      stroke: var(--color-accent);
      transition: stroke-dashoffset 0.35s;
    }

    .donut-text {
      fill: var(--color-text);
      font-size: 1.3rem;
      font-weight: 500;
      transform: rotate(90deg);
    }
  }

  .bottom-text {
    margin-top: 10px;
    font-size: 1rem;
    font-weight: 500;
    color: var(--color-text);
  }
}
</style>
