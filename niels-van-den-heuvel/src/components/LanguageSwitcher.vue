<template>
  <div class="btn-group dropdown" :class="['dropdown', { dropend: isLargeScreen }]">
    <button
      class="btn"
      type="button"
      id="dropdownMenu2"
      data-bs-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <font-awesome-icon class="icon" :icon="['fa', 'globe']" /><span>{{
      }}</span>
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
      <button
        class="dropdown-item"
        :style="lang == currentLocale ? { color: 'var(--color-accent)', fontWeight: 600 } : {}"
        type="button"
        v-for="lang in availableLocales"
        :key="lang"
        @click="changeLanguage(lang)"
      >
        {{ translateLang(lang) }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { watchEffect, computed } from 'vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const { locale, availableLocales, messages } = useI18n()

const currentLocale = computed(() => {
  return locale.value || 'en'
})

const changeLanguage = (newLang: string) => {
  locale.value = newLang
  localStorage.setItem('lang', newLang)
}

watchEffect(() => {
  const storedLang = localStorage.getItem('lang')
  if (storedLang) {
    locale.value = storedLang
  }
})

const translateLang = (localeCode: string) => {
  return messages.value[localeCode]['locale'] ?? messages.value['en']['locale']
}

const isLargeScreen = ref(window.innerWidth >= 768)

function handleResize() {
  isLargeScreen.value = window.innerWidth >= 768
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped lang="scss">
@media (max-width: 796px) {

}

.btn-group{
  z-index: 9999;

  button {
    color: var(--color-text-vague);
    background-color: transparent;

    font-size: 1rem;

    .icon {
      font-size: 1rem;
    }

    &:hover {
      color: var(--color-accent);
    }

    &:focus {
      border: none;
    }
  }

	.dropdown-menu{
		border: none;
		background: var(--color-bg);
		-webkit-box-shadow: 0px 10px 34px -20px var(--color-shadow);
		-moz-box-shadow: 0px 10px 34px -20px var(--color-shadow);
		box-shadow: 0px 10px 34px -20px var(--color-shadow);
		padding: 0;
		min-width: 18rem;

		&:after, &:before{
			content: ' ';
		  display: block;
		  border-style: solid;
		  border-width: 0 .7em .6em .7em;
		  border-color: transparent;
		  position: absolute;
		  right: 0;
		  margin-right: 16px;
		  z-index: -1;
		}
		&:before{
			top: -.6em;
		  border-bottom-color: var(--color-bg);
		}
		&:after{
			top: -.5em;
	    border-bottom-color: var(--color-bg);
		}
		.dropdown-item{
			font-size: 16px;
			color: var(--color-text);
			font-weight: 300;
			padding: 15px 30px;
			position: relative;
			border-bottom: 1px solid var(--color-shadow);
      .active {
        color: var(--color-accent);
      }
			&:last-child(){
				border: none;
			}
			&:after{
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				content: '';
				width: 4px;
				opacity: 0;
			}
			span{
				font-size: 20px;
			}
    }
  }
}
</style>
