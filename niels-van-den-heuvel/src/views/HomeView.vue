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
  <div class="container">
    <div class="resume">
      <header>
        <div class="d-flex flex-row align-items-center">
          <img src="@/assets/portrait.jpg"/>
          <div class="m-5">
          <h1>{{ $t('resume') }}</h1>
            <div class="keywords">
              <span class="keyword">{{ $t('mphil-graduate') }}</span>
              <span class="separator">/</span>
              <span class="keyword">{{ $t('mphil-graduate') }}</span>
              <span class="separator">/</span>
              <span class="keyword">{{ $t('mphil-graduate') }}</span></div>
              <span>{{ $t('about-me') }}</span>
            </div>
          </div>
      </header>
      <hr>
      <h2><font-awesome-icon :icon="['fas', 'graduation-cap']" class="icon"/>{{ $t('education') }}</h2>
      <div class="d-flex flex-wrap p-2 gap-4">
        <Education name="tinbergen"/>
        <Education name="erasmus"/>
        <Education name="bhrc"/>
      </div>
      <hr>
      <h2><font-awesome-icon :icon="['fas', 'person-digging']" class="icon"/>{{ $t('work-experience') }}</h2>
      <div class="d-flex flex-wrap p-2 gap-4">
        <Education name="vollido"/>
        <Education name="ta"/>
        <Education name="dnb"/>
        <Education name="sba"/>
        <Education name="simplex"/>
      </div>

      <hr>

      <h2><font-awesome-icon :icon="['fas', 'file-pen']" class="icon"/>{{ $t('writing-samples') }}</h2>
      <div class="d-flex flex-column p-2 mt-3 gap-3">
        <File path="/files/Bachelor___2023.pdf" name="BSc Thesis" description="Nonparametric Bankruptcy Prediction Using Heteroscedastic Survival BART"/>
        <File name="MPhil Thesis" description="TBD"/>
      </div>

      <hr>
      <div class="row" style="row-gap: 50px;">
        <div class="col-12 col-sm-12 col-md-8 col-lg-8">
          <h2 class="mb-4"><font-awesome-icon :icon="['fas', 'code']" class="icon"/>{{ $t('coding-skills') }}</h2>
          <div class="row" style="row-gap: 25px;">
            <div class="col-12 col-sm-6 col-md-4 col-lg-4">
              <SkillDonut name="Julia" :percentage="75"/>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-4">
              <SkillDonut name="Python" :percentage="65"/>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-4">
              <SkillDonut name="Vue.js" :percentage="60"/>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-4">
              <SkillDonut name="Matlab" :percentage="70"/>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-4">
              <SkillDonut name="R" :percentage="55"/>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-4">
              <SkillDonut name="CodeIgniter" :percentage="80"/>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-12 col-md-4 col-lg-4">
          <h2><font-awesome-icon :icon="['fas', 'language']" class="icon"/>{{ $t('languages') }}</h2>
          <SkillBar :name="$t('dutch')" :percentage="100"/>
          <SkillBar :name="$t('english')" :percentage="95"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
main {
  position: fixed;
  left: 70px;
  display: flex;
  flex-direction: row;
  width: 100%;

  img {
    height: 30vh;
    left: 70px;
  }

  @media (max-width: 1000px) {
    img {
      display: none;
    }
  }

  .resume {
    display: flex;
    flex-direction: column;
    padding: 100px 70px;
    color: var(--color-text);
    background-color: var(--color-bg);
    height: 100%;
    width: 100%;
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
}
</style>
