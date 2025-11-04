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
  background: url(/background.png) repeat-y
  background-size: 450px

  // mobile
  @media(min-width: 1000px)
    --layout-content-width: min(1500px, calc(100vw - 100px))

  // mobile
  @media(max-width: 1000px)
    --layout-content-width: 100vw
</style>
