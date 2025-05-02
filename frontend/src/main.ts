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
  faWrench,
  faGear,
  faMagnifyingGlass,
  faDatabase,
  faChartPie,
  faComments,
  faPeopleGroup,
  faBolt,
  faGlasses,
  faPaperPlane,
  faDownload,
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
  faFilePen,
  faWrench,
  faGear,
  faMagnifyingGlass,
  faDatabase,
  faChartPie,
  faComments,
  faPeopleGroup,
  faBolt,
  faGlasses,
  faPaperPlane,
  faLinkedin,
  faArrowLeft,
  faDownload,
)

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

// I18n
import i18n from '@/i18n'

// Floating vue
import FloatingVue from 'floating-vue'
import 'floating-vue/dist/style.css'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

// Create the app
const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(i18n)
app.use(FloatingVue)
app.use(createPinia())
app.use(router)

app.mount('#app')
