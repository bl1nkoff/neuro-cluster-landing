<template>
  <div class="nc-layout">
    <nc-header />

    <slot />

    <nc-footer />
  </div>
</template>
<script
  setup
  lang="ts"
>
</script>

<style lang="sass">
.nc-layout
  min-height: 100vh

  // pc
  @media(min-width: 1000px)
    //background: url('/Frame 233.svg') repeat-y //, url('/Frame 232.svg') repeat-y right
    //background-size: 100px

  // mobile
  @media(max-width: 1000px)
    //background: url('/Frame 233.svg') repeat-y
    //background-size: 100px

  // mobile
  @media(min-width: 1000px)
    --layout-content-width: min(1500px, calc(100vw - 100px))

  // mobile
  @media(max-width: 1000px)
    --layout-content-width: 100vw
</style>
