// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: false,
  modules: [
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxtjs/mdc'
  ],
  i18n: {
    defaultLocale: 'fr',
    locales:['en', 'es', 'fr', 'de', 'ru', 'pt', 'zh', 'kr', 'jp']
  }
})