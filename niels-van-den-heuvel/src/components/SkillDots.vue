<template>
  <div class="skill-circle">
    <div class="skill-name">{{ name }}</div>
    <div class="circle-container">
      <!-- Loop through 10 circles -->
      <div
        v-for="n in 10"
        :key="n"
        class="circle"
        :class="{
          filled: n <= percentage / 10
        }"
      ></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  percentage: Number
});
</script>

<style scoped>
.skill-circle {
  text-align: center;
  margin-bottom: 20px;
}

.circle-container {
  display: flex;
  justify-content: space-between;
  gap: 5px; /* Space between circles */
  margin-bottom: 10px; /* Space between circles and the name */
}

.circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #e6e6e6; /* Empty circle color */
  transition: background-color 0.3s ease;
}

.circle.filled {
  background-color: #3498db; /* Filled circle color */
}

.skill-name {
  font-size: 1rem;
  font-weight: bold;
}
</style>
