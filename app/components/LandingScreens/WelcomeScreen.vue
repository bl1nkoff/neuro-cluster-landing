<template>
  <landing-screen
    content-class="ls-welcome-screen"
    id="welcome-screen"
  >
    <img
      class="ls-welcome-screen__image"
      src="/welcome-image.png"
      alt="welcome-image"
    />

    <div class="ls-welcome-screen__content">
      <h1 class="ls-welcome-screen__slogan">
        Усиливаем бизнес<br/>искусственным интеллектом
      </h1>

      <div class="ls-welcome-screen__description">
        Создаем, внедряем и управляем нейро-сотрудниками, чтобы убрать рутину, снизить расходы, роботизировать процессы с помощью ИИ платформы «НейроКластер»
      </div>

      <a
        href="/#contact-form-screen"
        class="ls-welcome-screen__go-to-form nc-clickable"
      >
        Посмотреть демо
      </a>
    </div>
  </landing-screen>
</template>

<script lang="ts" setup>

</script>

<style lang="sass">
.ls-welcome-screen
  display: flex
  justify-content: flex-start
  align-items: center
  height: calc(100vh - var(--header-height, 0px))
  min-height: unset
  position: relative

  &__content
    display: flex
    flex-direction: column
    gap: 64px
    z-index: 1

  &__slogan
    font-size: 64px
    font-weight: bold

  &__description
    color: #ACACAC
    font-size: 28px
    max-width: 66%

  &__go-to-form
    border-radius: 8px
    font-size: 28px
    font-weight: bold
    padding: 24px
    width: 400px
    color: var(--text-color)
    text-align: center
    background: linear-gradient(to right, #062259 0%, #053AA2 100%)

  &__image
    position: absolute
    right: 0
    height: 100%
    z-index: 0
</style>
