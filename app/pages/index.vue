<template>
  <div
    class="index-page"
    ref="indexPageRef"
  >
    <welcome-screen/>

    <overview-screen/>

    <catalog-screen/>

    <roadmap-screen/>

    <gui-screen/>

    <advantages-screen/>

    <contact-form-screen/>
  </div>
</template>

<script setup lang="ts">
import { type Ref } from 'vue'

import WelcomeScreen from '~/components/LandingScreens/WelcomeScreen.vue'
import OverviewScreen from '~/components/LandingScreens/OverviewScreen.vue'
import CatalogScreen from '~/components/LandingScreens/CatalogScreen.vue'
import RoadmapScreen from '~/components/LandingScreens/RoadmapScreen.vue'
import GuiScreen from '~/components/LandingScreens/GuiScreen.vue'
import AdvantagesScreen from '~/components/LandingScreens/AdvantagesScreen.vue'
import ContactFormScreen from '~/components/LandingScreens/ContactFormScreen.vue'
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
