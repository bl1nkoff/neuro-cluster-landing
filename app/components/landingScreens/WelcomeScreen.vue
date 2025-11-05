<template>
  <landing-screen
    class="ls-welcome-screen"
    content-class="ls-welcome-screen__content"
    id="welcome-screen"
  >
    <div class="ls-welcome-screen__info">
      <h1 class="ls-welcome-screen__slogan">
        Усиливаем бизнес<br/>искусственным интеллектом
      </h1>

      <div class="ls-welcome-screen__description">
        Создаем, внедряем и управляем нейро-сотрудниками, чтобы убрать рутину, снизить расходы, роботизировать процессы с помощью ИИ-платформы «НейроКластер»
      </div>

      <a
        href="/#contact-form-screen"
        class="ls-welcome-screen__go-to-form nc-clickable"
      >
        Посмотреть демо
      </a>
    </div>

    <img
      class="ls-welcome-screen__image"
      src="/welcome-image-6.svg"
      alt="welcome-image"
    />
  </landing-screen>
</template>

<script lang="ts" setup>

</script>

<style lang="sass">
.ls-welcome-screen
  display: flex
  justify-content: center
  align-items: center
  height: calc(100vh - var(--header-height, 0px))
  position: relative
  overflow: hidden

  &__content
    width: 100%

  &__info
    display: flex
    flex-direction: column
    gap: 64px
    z-index: 1
    position: relative

  &__slogan
    font-weight: bold

    // pc
    @media(min-width: 1000px)
      font-size: 64px

    // mobile
    @media(max-width: 1000px)
      font-size: 32px

  &__description
    color: var(--text-color-secondary)

    // pc
    @media(min-width: 1000px)
      font-size: 24px
      width: 100%
      max-width: 700px

    // mobile
    @media(max-width: 1000px)
      font-size: 20px

  &__go-to-form
    border-radius: 8px
    font-size: 24px
    font-weight: bold
    padding: 20px
    color: var(--text-color)
    text-align: center
    background: linear-gradient(to left, #0622597F 0%, #053AA27F 100%)

    // pc
    @media(min-width: 1000px)
      width: 400px

    // mobile
    @media(max-width: 1000px)
      //font-size: 36px

  &__image
    position: absolute
    z-index: 0
    height: 100%
    padding: 125px 0
    top: 0

    // pc
    @media(min-width: 1000px)
      right: 0

    // mobile
    @media(max-width: 1000px)
      left: 0
</style>
