<template>
  <div class="landing-screen">
    <div
      v-if="header"
      class="landing-screen__header"
    >
      {{header}}
    </div>

    <div
      :class="contentClass"
      class="landing-screen__content"
    >
      <slot/>
    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>

defineProps<
  {
    header?: string,
    contentClass?: string,
  }
>()
</script>

<style lang="sass">

.landing-screen
  width: var(--layout-content-width)
  margin: auto
  padding: 32px 16px
  display: flex
  flex-direction: column

  // pc
  @media(min-width: 1000px)
    margin-bottom: 100px

  // mobile
  @media(max-width: 1000px)
    margin-bottom: 64px

  &__header
    font-weight: bold
    margin-bottom: 64px

    // pc
    @media(min-width: 1000px)
      font-size: 48px

    // mobile
    @media(max-width: 1000px)
      font-size: 32px

</style>
