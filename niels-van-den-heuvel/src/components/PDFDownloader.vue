<template>
  <button class="btn" type="button" @click="downloadPDF()" disabled><font-awesome-icon :icon="['fas', 'cloud-arrow-down']"/></button>
</template>

<script lang="ts" setup>
import html2pdf from 'html2pdf.js'

const bgColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color-bg').trim();

const downloadPDF = () => {
  const element = document.getElementById('pdf-content')

  html2pdf()
    .from(element)
    .set({
      margin: 0,
      filename: 'cv_niels_vd_heuvel.pdf',
      image: { type: 'png', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, backgroundColor: bgColor },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    })
    .save()
}
</script>

<style lang="scss" scoped>
button {
  color: gray;

  &:disabled {
    color: gray;
    border: none;
  }
}
</style>
