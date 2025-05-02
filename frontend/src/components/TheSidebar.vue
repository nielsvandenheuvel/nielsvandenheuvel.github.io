<template>
  <aside>
    <header>
      <DarkMode />
      <LanguageSwitcher />
    </header>
    <div class="d-flex flex-column gap-5">
      <router-link class="link" to="contact" v-tooltip.right="'Contact me'">
        <font-awesome-icon :icon="['fas', 'paper-plane']" class="icon"/>
      </router-link>
      <a class="link" href="https://www.linkedin.com/in/niels-van-den-heuvel15" target="blank" v-tooltip.right="'My LinkedIn profile'">
        <font-awesome-icon :icon="['fab', 'linkedin']" class="icon"/>
      </a>
    </div>
    <button class="btn" type="button" @click="downloadCV()">
      <font-awesome-icon :icon="['fas', 'download']" class="icon"/>
    </button>
  </aside>
</template>

<script lang="ts" setup>
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import DarkMode from '@/components/DarkMode.vue'

async function downloadCV() {
  const element = document.getElementById('cv');  // Your CV element
  const html = element.outerHTML;  // Get the HTML content

  try {
    // Make a POST request to the Netlify function
    const response = await fetch('https://cv-generate-pdf.netlify.app/api/generate-pdf', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ html }),
    });

    // Ensure the response is OK
    if (!response.ok) {
      throw new Error('PDF generation failed');
    }

    // Get the blob from the response
    const blob = await response.blob();

    // Create a URL for the blob
    const url = URL.createObjectURL(blob);

    // Create a download link
    const link = document.createElement('a');
    link.href = url;
    link.download = 'My-CV.pdf';  // The name of the downloaded file
    link.click();  // Trigger the download
    URL.revokeObjectURL(url);  // Clean up the object URL
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
}
</script>

<style lang="scss">
@media (max-width: 768px) {
  aside {
    position: sticky;
    max-height: 70px;
    width: 100%;
    flex-direction: row !important;
    padding: 18px 15px !important;

    header {
      flex-direction: row !important;
    }
  }
}

aside {
  z-index: 9999;

  // Positioning
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  padding: 15px 0;

  -webkit-box-shadow: 0px 10px 34px -20px var(--color-shadow);
  -moz-box-shadow: 0px 10px 34px -20px var(--color-shadow);
  box-shadow: 0px 10px 34px -20px var(--color-shadow);

  // Sizing
  height: 100%;
  min-width: 70px;

  justify-content: space-between;

  // Coloring
  background-color: var(--color-bg);
  color: var(--color-accent);

  .link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    .icon {
      font-size: 1.4rem;
      color: var(--color-text-vague);
    }

    &:hover {
      background-color: inherit;
      .icon {
        color: var(--color-accent);
      }
    }
  }

  header {
    display: flex;
    flex-direction: column;
  }

  .item {
    margin: 15px 0;
  }
}
</style>
