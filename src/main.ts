import './assets/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { localize, setLocale } from '@vee-validate/i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'
import { configure, defineRule } from 'vee-validate'
import App from './App.vue'
import router from './router'
import en from '@vee-validate/i18n/dist/locale/en.json'
import de from '@vee-validate/i18n/dist/locale/de.json'
import '@fontsource/clear-sans';

import { required, email, min } from '@vee-validate/rules'

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)

configure({
  generateMessage: localize({
    en,
    de
  })
})

setLocale('de')

const i18n = createI18n({
  legacy: false,
  locale: 'de',
  messages
})




const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')
