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
  --background-color: #000001

  --primary: #04264D
  --primary-50: #04264D7F
  --primary-75: #04264DBF

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

  &:hover
    color: var(--text-color)

  &--horizontal
    background: linear-gradient(to right, #2525257F, #1111117F)

  &--horizontal-rev
    background: linear-gradient(to left, #2525257F, #1111117F)

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
</style>
