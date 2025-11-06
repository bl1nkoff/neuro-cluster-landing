<template>
  <div class="landing-screen">
    <div
      v-if="header || $slots.header"
      class="landing-screen__header"
      :class="{'landing-screen__header--centered': centeredHeader}"
    >
      {{header}}
      <slot name="header"/>
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
    centeredHeader?: boolean,
    contentClass?: string,
  }
>()
</script>

<style lang="sass">

.landing-screen
  width: var(--layout-content-width)
  margin: auto
  display: flex
  flex-direction: column

  // pc
  @media(min-width: 1000px)
    padding: calc(max(var(--header-height, 0), 32px) + 32px) 16px 32px
    margin-bottom: 64px

  // mobile
  @media(max-width: 1000px)
    padding: calc(max(var(--header-height, 0), 32px) + 16px) 16px 16px
    margin-bottom: 0

  &__header
    font-weight: bold
    z-index: 1

    // pc
    @media(min-width: 1000px)
      font-size: 48px
      margin-bottom: 64px

    // mobile
    @media(max-width: 1000px)
      font-size: 24px
      margin-bottom: 24px

    &--centered
      text-align: center

</style>
