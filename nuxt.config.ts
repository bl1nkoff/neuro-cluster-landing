// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: true,
  devServer: {
    port: 3030,
  },
  devtools: {
    enabled: true
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'НейроКластер',
      meta: [
        {property: 'og:title', content: 'НейроКластер'},
        {property: 'og:description', content: 'Создаем, внедряем и управляем нейро-сотрудниками'},
        {property: 'og:locale', content: 'ru_RU'},
        {property: 'og:type', content: 'website'},
        {property: 'og:url', content: 'https://neuro-cluster.com'},
        {property: 'og:site_name', content: 'НейроКластер'},
        {property: 'og:updated_time', content: '2025-10-23T11:00:00.000+03:00'},
        // раскомментируйте, когда добавите og.png в public/
        // { property: 'og:image', content: '/og.png' },
      ],
      link: [
        {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
        {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'},
        {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'},
        {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png'},
        {rel: 'manifest', href: '/site.webmanifest'},
      ],
    },
  },
  runtimeConfig: {
    public: {
      nodeEnv: process.env.NODE_ENV || 'NO_NODE_ENV',
      YANDEX_METRIKA_TAG_ID: process.env.YANDEX_METRIKA_TAG_ID,
    }
  },
})

