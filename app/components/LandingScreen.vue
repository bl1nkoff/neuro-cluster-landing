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
  padding: calc(max(var(--header-height, 0), 32px) + 32px) 16px 32px
  display: flex
  flex-direction: column

  // pc
  @media(min-width: 1000px)
    margin-bottom: 64px

  // mobile
  @media(max-width: 1000px)
    margin-bottom: 48px

  &__header
    font-weight: bold

    // pc
    @media(min-width: 1000px)
      font-size: 48px
      margin-bottom: 64px

    // mobile
    @media(max-width: 1000px)
      font-size: 24px
      margin-bottom: 24px

</style>
