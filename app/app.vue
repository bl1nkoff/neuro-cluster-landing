<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<script
  setup
  lang="ts"
>
</script>

<style lang="sass">
*
  margin: 0
  padding: 0
  box-sizing: border-box
  font: inherit
  color: inherit

  &::-webkit-scrollbar-thumb
    background-color: var(--text-color)
    border-radius: 2px

  &::-webkit-scrollbar
    width: 5px
    height: 8px
    background-color: transparent

html
  scroll-behavior: smooth

body
  --text-color: #E7E7E7
  --text-color-secondary: #ACACAC
  --background-color: #000203
  --background-color--50: #0002037F

  --primary: #04264D
  --primary-50: #04264D7F
  --primary-75: #04264DBF

  // pc
  @media (min-width: 1000px)
    //--primary-button-backgound: linear-gradient(to left, #0622597F 0%, #053AA27F 100%)
    --primary-button-backgound: linear-gradient(to left, #062259 0%, #053AA2 100%)

  // mobile
  @media (max-width: 1000px)
    --primary-button-backgound: linear-gradient(to left, #062259 0%, #053AA2 100%)

  background: var(--background-color)
  color: var(--text-color)
  font-family: 'Inter', sans-serif

a
  text-decoration: none

  //&:visited
  //  color: inherit

ul, ol
  padding-left: 1.5em

.nc-card
  //background: #25252566
  background: linear-gradient(to bottom, #2525257F, #1111117F)
  padding: 20px
  border-radius: 20px
  transition: color .2s ease

  // pc
  @media (min-width: 1000px)
    &--horizontal
      background: linear-gradient(to right, #2525257F, #1111117F)

    &--horizontal-rev
      background: linear-gradient(to left, #2525257F, #1111117F)

  &:hover
    color: var(--text-color)

  &--centered
    // pc
    @media(min-width: 1000px)
      text-align: center

  &__header
    margin-bottom: 16px
    font-weight: bold

    &:not(:first-child)
      margin-top: 24px

    // pc
    @media(min-width: 1000px)
      font-size: 24px

    // mobile
    @media(max-width: 1000px)
      font-size: 20px

  &__content
    font-size: 16px
    color: var(--text-color-secondary)
    transition: color .2s ease

  &:hover &__content
    color: var(--text-color)

.nc-clickable
  cursor: pointer
  position: relative

  &:after
    content: ''
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: #FFFFFF16
    border-radius: inherit
    transition: opacity .2s ease
    opacity: 0

  &:hover::after
    opacity: 1

.nc-separator
  background: linear-gradient(to left, var(--background-color) 0%, var(--primary) 50%, var(--background-color) 100%)
  width: 100%
  height: 4px
  margin: auto

  &--page-separator
    width: var(--layout-content-width)

.nc-space
  flex-grow: 1
</style>
