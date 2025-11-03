export default defineNuxtPlugin(
  nuxtApp => {
    if (
      process.client
      && nuxtApp.$config.public.nodeEnv === 'PRODUCTION'
    ) {
      console.log('Яндекс метрика подключена')

      const yaMetrikaId = nuxtApp.$config.public.YANDEX_METRIKA_TAG_ID

      window.ym = window.ym
        || function () {
          (window.ym.a = window.ym.a || [])
            .push(arguments)
        }

      window.ym.l = 1 * new Date()

      let scriptElement = document.createElement('script')
      let firstDocumentScriptElement = document.getElementsByTagName('script')[0]

      scriptElement.async = 1
      scriptElement.src = 'https://mc.yandex.ru/metrika/tag.js'
      firstDocumentScriptElement.parentNode.insertBefore(scriptElement, firstDocumentScriptElement)

      window.ym(
        yaMetrikaId,
        'init',
        {
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor: true
        }
      )
    }
    else {
      console.log('Я.Метрика не подключена')
    }
  }
)
