<script setup lang="ts">
import Education from '@/components/Education.vue';
import SkillBar from '@/components/SkillBar.vue';
import SkillDonut from '@/components/SkillDonut.vue';
import SkillDots from '@/components/SkillDots.vue';

</script>

<template>
  <main>
    <img src="@/assets/portrait.jpg"/>
    <div class="resume">
      <h1>{{ $t('resume') }}</h1>
      <span>{{ $t('about-me') }}</span>
      <hr>
      <h2><font-awesome-icon :icon="['fas', 'graduation-cap']" class="icon"/>{{ $t('education') }}</h2>
      <Education name="tinbergen"/>
      <Education name="erasmus"/>
      <hr>
      <h2><font-awesome-icon :icon="['fas', 'person-digging']" class="icon"/>{{ $t('work-experience') }}</h2>

      <hr>
      <div class="skills-container">
        <div class="code-container">
          <h2><font-awesome-icon :icon="['fas', 'code']" class="icon"/>{{ $t('coding-skills') }}</h2>
          <div class="row">
            <div class="col-md-6 col-12 mb-4"><SkillDonut name="Julia" :percentage="80"/></div>
            <div class="col-md-6 col-12 mb-4"><SkillDonut name="Python" :percentage="80"/></div>
          </div>
          <div class="row">
            <div class="col-md-6 col-12 mb-4"><SkillDonut name="Matlab" :percentage="80"/></div>
            <div class="col-md-6 col-12 mb-4"><SkillDonut name="R" :percentage="80"/></div>
          </div>
          <div class="row">
            <div class="col-md-6 col-12 mb-4"><SkillDonut name="CodeIgntier/PHP" :percentage="80"/></div>
            <div class="col-md-6 col-12 mb-4"><SkillDonut name="Vue.js" :percentage="80"/></div>
          </div>
        </div>
        <div class="language-container">
          <h2><font-awesome-icon :icon="['fas', 'language']" class="icon"/>{{ $t('languages') }}</h2>
          <SkillBar :name="$t('dutch')" :percentage="80"/>
          <SkillBar :name="$t('english')" :percentage="80"/>
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
