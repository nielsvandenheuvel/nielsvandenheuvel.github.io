<script setup lang="ts">
import Education from '@/components/Education.vue';
import SkillBar from '@/components/SkillBar.vue';
import SkillDonut from '@/components/SkillDonut.vue';
import SkillDots from '@/components/SkillDots.vue';
import File from '@/components/File.vue';
import { useDarkMode } from '@/stores/darkmode';

const darkmode = useDarkMode()
</script>

<template>
  <main>
    <img src="@/assets/portrait.jpg"/>
    <div class="resume">
      <h1>{{ $t('resume') }}</h1>
      <div class="keywords">
        <span class="keyword">{{ $t('mphil-graduate') }}</span>
        <span class="separator">/</span>
        <span class="keyword">{{ $t('mphil-graduate') }}</span>
        <span class="separator">/</span>
        <span class="keyword">{{ $t('mphil-graduate') }}</span></div>
      <span>{{ $t('about-me') }}</span>
      <hr>
      <h2><font-awesome-icon :icon="['fas', 'graduation-cap']" class="icon"/>{{ $t('education') }}</h2>
      <div class="row">
        <div class="col-4"><Education name="tinbergen"/></div>
        <div class="col-4"><Education name="erasmus"/></div>
        <div class="col-4"><Education name="bhrc"/></div>
      </div>
      <hr>
      <h2><font-awesome-icon :icon="['fas', 'person-digging']" class="icon"/>{{ $t('work-experience') }}</h2>
      <div class="row">
        <div class="col-8">
          <div class="row">
            <div class="col-6"><Education name="vollido"/></div>
            <div class="col-6"><Education name="ta"/></div>
          </div>
          <div class="row mt-3">
            <div class="col-6"><Education name="sba"/></div>
            <div class="col-6"><Education name="simplex"/></div>
          </div>
        </div>
        <div class="col-4"><Education name="dnb"/></div>
      </div>

      <hr>

      <h2><font-awesome-icon :icon="['fas', 'file-pen']" class="icon"/>{{ $t('writing-samples') }}</h2>
      <div class="row">
        <File path="/src/assets/Bachelor___2023.pdf" name="BSc Thesis" description="Nonparametric Bankruptcy Prediction Using Heteroscedastic Survival BART"/>
        <File name="MPhil Thesis" description="TBD"/>
      </div>

      <hr>
      <div class="skills-container">
        <div class="code-container">
          <h2><font-awesome-icon :icon="['fas', 'code']" class="icon"/>{{ $t('coding-skills') }}</h2>
          <div class="row">
            <div class="col-md-6 col-12 mb-4"><SkillDonut name="Julia" :percentage="75"/></div>
            <div class="col-md-6 col-12 mb-4"><SkillDonut name="Python" :percentage="65"/></div>
          </div>
          <div class="row">
            <div class="col-md-6 col-12 mb-4"><SkillDonut name="Matlab" :percentage="70"/></div>
            <div class="col-md-6 col-12 mb-4"><SkillDonut name="R" :percentage="55"/></div>
          </div>
          <div class="row">
            <div class="col-md-6 col-12 mb-4"><SkillDonut name="CodeIgntier/PHP" :percentage="80"/></div>
            <div class="col-md-6 col-12 mb-4"><SkillDonut name="Vue.js" :percentage="60"/></div>
          </div>
        </div>
        <div class="language-container">
          <h2><font-awesome-icon :icon="['fas', 'language']" class="icon"/>{{ $t('languages') }}</h2>
          <SkillBar :name="$t('dutch')" :percentage="100"/>
          <SkillBar :name="$t('english')" :percentage="95"/>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
img {
  position: fixed;
  height: 100vh;
  left: 70px;
  z-index: 0;
}

.resume {
  display: flex;
  flex-direction: column;
  padding: 100px 70px;
  position: fixed;
  right: 0;
  color: var(--color-text);
  background-color: var(--color-bg);
  height: 100%;
  width: 64vw;
  overflow-y: auto;

  .keywords {
    margin: 20px 0;

    .keyword {
      color: var(--color-accent);
      font-weight: 500;
    }

    .separator {
      margin: 0 20px;
      font-weight: 400;
    }
  }

  span {
    color: var(--color-text-vague);
  }

  hr {
    margin: 40px 0;
  }

  h2 {
    font-size: 30px;
    font-weight: 400;
    .icon {
      color: var(--color-accent);
      margin-right: 20px;
    }
  }

  .skills-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 0;

    .code-container {
      max-width: 25%;

      h2 {
        margin-bottom: 35px;
      }
    }

    .language-container {
      min-width: 71%;
      max-width: 71%;
    }
  }
}
</style>
