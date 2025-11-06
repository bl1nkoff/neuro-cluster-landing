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
      src="/welcome-image.svg"
      alt="welcome-image"
    />
  </landing-screen>
</template>

<script lang="ts" setup>

</script>

<style lang="sass">
.ls-welcome-screen
  display: flex
  position: relative
  overflow: hidden
  min-height: calc(100vh - var(--header-height, 0px))

  // pc
  @media(min-width: 1000px)
    align-items: center
    justify-content: center

  // mobile
  @media(max-width: 1000px)
    align-items: start
    justify-content: start

  &__content
    width: 100%

  &__info
    display: flex
    flex-direction: column
    z-index: 1
    position: relative

  &__slogan
    font-weight: bold

    // pc
    @media(min-width: 1000px)
      margin-bottom: 64px
      font-size: 64px

    // mobile
    @media(max-width: 1000px)
      margin-top: 46px
      margin-bottom: 20px
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
      font-size: 16px

  &__go-to-form
    border-radius: 8px
    font-size: 24px
    font-weight: bold
    color: var(--text-color)
    text-align: center
    background: var(--primary-button-backgound)

    // pc
    @media(min-width: 1000px)
      width: 400px
      margin-top: 64px

    // mobile
    @media(max-width: 1000px)
      //font-size: 36px
      margin-top: 64px
      padding: 16px

  &__image
    position: absolute
    height: 100%
    z-index: 0
    padding: 50px 0
    top: 0
    object-fit: cover

    // pc
    @media(min-width: 1000px)
      right: 0

    // mobile
    @media(max-width: 1000px)
      opacity: .6
      right: -100px
      height: 75%
      top: 10%
</style>
