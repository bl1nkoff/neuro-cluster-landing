<template>
  <header
    class="nc-header__wrapper"
    ref="headerRef"
  >
    <div class="nc-header">
      <a
        href="/#welcome-screen"
        class="nc-header__logo"
      >
        НейроКластер
      </a>

      <nav class="nc-header__nav-bar">
        <a
          href="/#catalog-screen"
          class="nc-header-button"
        >
          Нейро-сотрудники
        </a>

        <a
          href="/#roadmap-screen"
          class="nc-header-button"
        >
          План внедрения
        </a>

        <a
          href="/#gui-screen"
          class="nc-header-button"
        >
          Интерфейс
        </a>

        <a
          href="/#advantages-screen"
          class="nc-header-button"
        >
          Преимущества
        </a>

        <a
          href="/"
          class="nc-header-button"
        >
          Контакты
        </a>

        <a
          href="/#contact-form-screen"
          class="nc-header-button nc-header-button--outline"
        >
          Демо
        </a>
      </nav>
    </div>
  </header>
</template>

<script
  setup
  lang="ts"
>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const headerRef = ref(null)
let resizeObserver: ResizeObserver | undefined = undefined

onMounted(() => {
  if (!headerRef.value) return

  // Создаём ResizeObserver
  resizeObserver = new ResizeObserver(
    (entries) => {
      for (const entry of entries) {
        const height = entry.contentRect.height

        const layoutElem: HTMLElement | null = document.querySelector('.nc-layout')

        if (!layoutElem) {
          console.warn('Не удалось определить элемент лейаута')
          return
        }

        layoutElem.style
          .setProperty(
            '--header-height',
            `${height}px`
          )
      }
    }
  )

  resizeObserver.observe(headerRef.value)
})

onBeforeUnmount(() => {
  if (resizeObserver) {
    resizeObserver.disconnect()
  }
})
</script>

<style lang="sass">
.nc-header
  padding: 16px 8px
  margin: auto
  width: var(--layout-content-width)
  display: flex
  justify-content: space-between
  align-items: center

  &__wrapper
    border-bottom: 3px #00181B solid
    position: sticky
    top: 0
    z-index: 100
    background: var(--background-color)

  &__logo
    color: inherit
    font-size: 32px
    font-weight: bold

.nc-header-button
  padding: 8px 16px
  border-radius: 8px
  transition-timing-function: ease
  transition-duration: 0.2s
  transition-property: color, border-color
  color: #ACACAC

  &:hover
    color: var(--text-color)
    border-color: var(--text-color)

  &--outline
    border: 2px solid #00181B
</style>
