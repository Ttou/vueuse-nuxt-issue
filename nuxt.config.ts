import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  srcDir: 'src/',
  modules: ['@vueuse/nuxt'],
  bridge: {
    meta: true,
    vite: true,
    nitro: true
  }
})
