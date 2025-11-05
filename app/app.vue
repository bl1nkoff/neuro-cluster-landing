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

  --primary: #04264D

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
  background: linear-gradient(to bottom, #2525257F, #1212127F)
  padding: 20px
  border-radius: 20px
  transition: color .2s ease

  &:hover
    color: var(--text-color)

  &__header
    margin-bottom: 16px

    &:not(:first-child)
      margin-top: 16px

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
