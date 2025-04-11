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
    <div class="resume pt-5 pb-5 ps-1 pe-1 ps-sm-2 pe-sm-2 ps-md-3 pe-md-3 ps-lg-5 pe-lg-5">
      <header>
        <div class="d-flex flex-row align-items-center">
          <img src="@/assets/portrait.jpg"/>
          <div class="m-5">
          <h1>{{ $t('resume') }}</h1>
            <div class="keywords">
              <span class="keyword">{{ $t('econometrics') }}</span>
              <span class="separator">/</span>
              <span class="keyword">{{ $t('avid-programmer') }}</span>
              <span class="separator">/</span>
              <span class="keyword">{{ $t('mphil-graduate') }}</span></div>
              <span>{{ $t('about-me') }}</span>
            </div>
          </div>
      </header>
      <hr>
      <h2><font-awesome-icon :icon="['fas', 'graduation-cap']" class="icon"/>{{ $t('education') }}</h2>
      <div class="d-flex flex-wrap p-2 gap-4">
        <Education name="tinbergen" link="https://tinbergen.nl/graduate-program"/>
        <Education name="erasmus" link="https://www.eur.nl/en/bachelor/double-bachelor-bsc2-econometrics-and-economics"/>
        <Education name="bhrc"/>
      </div>
      <hr>
      <h2><font-awesome-icon :icon="['fas', 'person-digging']" class="icon"/>{{ $t('work-experience') }}</h2>
      <div class="d-flex flex-wrap p-2 gap-4">
        <Education name="vollido" link="https://vvvollido.nl/"/>
        <Education name="ta" link="https://tinbergen.nl/graduate-program"/>
        <Education name="dnb" link="https://www.dnb.nl/en/research/dnb-s-econometric-models/"/>
        <Education name="sba" :link="'https://site.sba.nl/?lang=en'"/>
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
        <div class="col-12 col-sm-12 col-md-6 col-lg-4">
          <h2 class="mb-4"><font-awesome-icon :icon="['fas', 'code']" class="icon"/>{{ $t('coding-skills') }}</h2>
          <div class="row" style="row-gap: 25px;">
            <div class="col-6">
              <SkillDonut name="Julia" :percentage="75"/>
            </div>
            <div class="col-6">
              <SkillDonut name="Python" :percentage="65"/>
            </div>
            <div class="col-6">
              <SkillDonut name="Vue.js" :percentage="60"/>
            </div>
            <div class="col-6">
              <SkillDonut name="Matlab" :percentage="70"/>
            </div>
            <div class="col-6">
              <SkillDonut name="R" :percentage="55"/>
            </div>
            <div class="col-6">
              <SkillDonut name="CodeIgniter" :percentage="80"/>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-8">
          <div class="row">
            <h2><font-awesome-icon :icon="['fas', 'language']" class="icon"/>{{ $t('languages') }}</h2>
            <div class="row ms-3">
              <SkillBar :name="$t('dutch')" :percentage="100"/>
              <SkillBar :name="$t('english')" :percentage="95"/>
            </div>
          </div>
          <div class="row mt-5">
            <h2><font-awesome-icon :icon="['fas', 'wrench']" class="icon"/>{{ $t('other-skills') }}</h2>
            <div class="other-skills-container row mt-3 ms-3">
              <div class="col-12 col-sm-6 col-md-6 col-lg-6 mb-4">
                  <div class="skill row">
                    <div class="col-1"><font-awesome-icon class="icon" :icon="['fas', 'chart-pie']" /></div>
                    <div class="col-11">{{ $t('statistics') }}</div>
                  </div>
                  <div class="skill row">
                    <div class="col-1"><font-awesome-icon class="icon" :icon="['fas', 'magnifying-glass']" /></div>
                    <div class="col-11">{{ $t('research') }}</div>
                  </div>
                  <div class="skill row">
                    <div class="col-1"><font-awesome-icon class="icon" :icon="['fas', 'cog']" /></div>
                    <div class="col-11">{{ $t('backend') }}</div>
                  </div>
                  <div class="skill row">
                    <div class="col-1"><font-awesome-icon class="icon" :icon="['fas', 'database']" /></div>
                    <div class="col-11">{{ $t('database') }}</div>
                  </div>
              </div>
              <div class="col-12 col-sm-6 col-md-6 col-lg-6">
                  <div class="skill row">
                    <div class="col-1"><font-awesome-icon class="icon" :icon="['fas', 'comments']" /></div>
                    <div class="col-11">{{ $t('communicative') }}</div>
                  </div>
                  <div class="skill row">
                    <div class="col-1"><font-awesome-icon class="icon" :icon="['fas', 'people-group']" /></div>
                    <div class="col-11">{{ $t('team-player') }}</div>
                  </div>
                  <div class="skill row">
                    <div class="col-1"><font-awesome-icon class="icon" :icon="['fas', 'bolt']" /></div>
                    <div class="col-11">{{ $t('energetic') }}</div>
                  </div>
                  <div class="skill row">
                    <div class="col-1"><font-awesome-icon class="icon" :icon="['fas', 'glasses']" /></div>
                    <div class="col-11">{{ $t('critical-thinker') }}</div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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

  .other-skills-container {

    .skill {
      margin-bottom: 7px;

      .icon {
        color: var(--color-accent);
      }
    }
  }
}
</style>
