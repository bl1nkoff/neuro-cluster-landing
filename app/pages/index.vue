<template>
  <div
    class="index-page"
    ref="indexPageRef"
  >
    <welcome-screen/>

    <div class="nc-separator nc-separator--page-separator"/>

    <overview-screen/>

    <catalog-screen/>

    <roadmap-screen/>

    <gui-screen/>

    <advantages-screen/>

    <div class="nc-separator nc-separator--page-separator"/>

    <contact-form-screen/>
  </div>
</template>

<script setup lang="ts">
import { type Ref } from 'vue'

import WelcomeScreen from '~/components/landingScreens/WelcomeScreen.vue'
import OverviewScreen from '~/components/landingScreens/OverviewScreen.vue'
import CatalogScreen from '~/components/landingScreens/CatalogScreen.vue'
import RoadmapScreen from '~/components/landingScreens/RoadmapScreen.vue'
import GuiScreen from '~/components/landingScreens/GuiScreen.vue'
import AdvantagesScreen from '~/components/landingScreens/AdvantagesScreen.vue'
import ContactFormScreen from '~/components/landingScreens/ContactFormScreen.vue'
import {debounce} from "~~/utils"

const indexPageRef: Ref<HTMLElement | undefined> = ref(undefined)

const router = useRouter()

function scrollListener() {
  const screenElems = indexPageRef.value
    ?.children

  if (!screenElems) {
    return
  }

  const currentScreen = [ ...screenElems ]
    .find(
      elem => {
        const box = elem.getBoundingClientRect()

        return box.top > window.innerHeight * -.30
      }
    )

  if (!currentScreen) {
    return
  }

  const newHash = `#${currentScreen.id}`

  // Изменяем хеш БЕЗ прокрутки
  if (window.location.hash !== newHash) {
    // Меняем хеш через history.replaceState — это не вызывает прокрутку
    history.replaceState(null, '', newHash)

    // // Сохраняем текущую позицию скролла
    // const scrollY = window.scrollY

    // Восстанавливаем позицию скролла (на всякий случай, хоть и не должен сбрасываться)
    // window.scrollTo(window.scrollX, scrollY)
  }
}

const debouncedScrollListener = debounce(scrollListener, 200)

onMounted(
  () => {
  document
    .addEventListener(
      'scroll',
      debouncedScrollListener
    )
})

onBeforeMount(
  () => {
    document
      .removeEventListener(
        'scroll',
        debouncedScrollListener
      )
  }
)
</script>

<style lang="sass">
</style>
