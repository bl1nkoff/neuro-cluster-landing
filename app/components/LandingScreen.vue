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
  margin: 0 auto 200px
  padding: 32px 8px
  display: flex
  flex-direction: column

  &__header
    font-size: 48px
    font-weight: bold
    margin-bottom: 64px

</style>
