import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faCloudArrowDown,
  faCloudMoon,
  faSun,
  faGlobe,
  faToolbox,
  faCode,
  faGraduationCap,
  faLanguage,
  faPersonDigging,
  faFileExport,
  faFilePen,
} from '@fortawesome/free-solid-svg-icons'
library.add(
  faCloudArrowDown,
  faCloudMoon,
  faSun,
  faGlobe,
  faToolbox,
  faCode,
  faGraduationCap,
  faLanguage,
  faPersonDigging,
  faFileExport,
  faFilePen
)

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

// I18n
import i18n from '@/i18n'

// Create the app
const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(i18n)
app.use(createPinia())
app.use(router)

app.mount('#app')
