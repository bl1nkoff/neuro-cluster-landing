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

      <button
        @click="toggleNavbarOpen()"
        class="nc-header__navbar-toggler"
      >
        <img
          :src="isNavbarOpen ? '/icons/close.svg' : '/icons/menu.svg'"
          alt="menu-icon"
          class="nc-header__navbar-toggler-icon"
        />
      </button>

      <nav
        class="nc-header__navbar"
        :class="{
          'nc-header__navbar--opened': isNavbarOpen,
          'nc-header__navbar--closed': !isNavbarOpen,
        }"
      >
        <a
          href="/#catalog-screen"
          class="nc-navbar-link"
          @click="onNavLinkClick()"
        >
          Нейро-сотрудники
        </a>

        <a
          href="/#roadmap-screen"
          class="nc-navbar-link"
          @click="onNavLinkClick()"
        >
          План внедрения
        </a>

        <a
          href="/#gui-screen"
          class="nc-navbar-link"
          @click="onNavLinkClick()"
        >
          Интерфейс
        </a>

        <a
          href="/#advantages-screen"
          class="nc-navbar-link"
          @click="onNavLinkClick()"
        >
          Преимущества
        </a>

        <a
          href="#footer"
          class="nc-navbar-link"
          @click="onNavLinkClick()"
        >
          Контакты
        </a>

        <a
          href="/#contact-form-screen"
          class="nc-navbar-link nc-navbar-link--outline"
          @click="onNavLinkClick()"
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

const isNavbarOpen: Ref<boolean> = ref(false)

function toggleNavbarOpen (value?: boolean): void {
  isNavbarOpen.value = value ?? !isNavbarOpen.value
}

function onNavLinkClick(): void {
  toggleNavbarOpen(false)
}
</script>

<style lang="sass">
.nc-header
  padding: 16px
  margin: auto
  width: var(--layout-content-width)
  justify-content: space-between
  align-items: center
  display: grid

  // pc
  @media(min-width: 1000px)
    grid-template-areas: 'logo navbar'

  // mobile
  @media(max-width: 1000px)
    grid-template-areas: 'logo navbar-toggler' 'navbar navbar'

  &__wrapper
    border-bottom: 3px var(--primary-75) solid
    //border-bottom: 3px var(--text-color) solid
    position: sticky
    top: 0
    z-index: 100
    background: var(--background-color)

  &__logo
    grid-area: logo
    color: inherit
    font-weight: bold

    // pc
    @media(min-width: 1000px)
      font-size: 32px

    // mobile
    @media(max-width: 1000px)
      font-size: 24px

  &__navbar
    grid-area: navbar

    // mobile
    @media(max-width: 1000px)
      display: flex
      flex-direction: column
      margin-top: 16px

    &--closed
      // mobile
      @media(max-width: 1000px)
        display: none
        position: absolute

  &__navbar-toggler
    grid-area: navbar-toggler
    background: none
    border: none

    // pc
    @media(min-width: 1000px)
      display: none

  &__navbar-toggler-icon
    // pc
    @media(min-width: 1000px)
      height: 24px

    // mobile
    @media(max-width: 1000px)
      height: 20px

.nc-navbar-link
  display: inline-block
  padding: 8px 16px
  border-radius: 8px
  transition-timing-function: ease
  transition-duration: 0.2s
  transition-property: color, border-color
  color: var(--text-color-secondary)

  // pc
  @media(min-width: 1000px)
    padding: 8px 16px

  // mobile
  @media(max-width: 1000px)
    padding: 8px 16px
    font-size: 20px

  &:hover
    color: var(--text-color)
    border-color: var(--text-color)

  &--outline
    border: 2px solid var(--primary)
</style>
