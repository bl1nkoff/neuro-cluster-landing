<template>
  <label
    class="nc-checkbox"
    :class="{'nc-checkbox--error': error}"
  >
    <input
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
      class="nc-checkbox__input"
    />

    <span class="nc-checkbox__custom">
      <svg
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="nc-checkbox__check-icon"
      >
        <path
          d="M3 8L6.5 11.5L13 4.5"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>

    <span
      v-if="label"
      class="nc-checkbox__label"
    >{{ label }}
    </span>
    <span
      v-else-if="$slots.label"
      class="nc-checkbox__label"
    >
      <slot name="label"/>
    </span>
  </label>
</template>

<script
  setup
  lang="ts"
>
interface Props {
  modelValue: boolean
  label?: string
  disabled?: boolean
  error?: boolean
}

const props = defineProps<Props>()

defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()
</script>

<style
  lang="sass"
  scoped
>
.nc-checkbox
  display: flex
  align-items: flex-start
  gap: 12px
  cursor: pointer
  user-select: none
  line-height: 22px
  transition-property: background-color, border-color
  transition-duration: 200ms
  transition-timing-function: ease
  border: 3px transparent solid
  padding: 10px 16px
  border-radius: 16px

  &:hover
    background: #25252566

  &--error
    border-color: #661414

  // Скрываем нативный инпут
  &__input
    position: absolute
    opacity: 0
    pointer-events: none


  // Кастомный "бокс"
  &__custom
    display: flex
    align-items: center
    justify-content: center
    width: 20px
    height: 20px
    border: 2px solid #444
    border-radius: 4px
    background: #1e1e1e
    transition: all 0.2s ease
    flex-shrink: 0


  // Состояния
  &:has(&__input:focus)
    .nc-checkbox__custom
      outline: 2px solid #4d9eff
      outline-offset: 2px


  &:has(&__input:hover):not(:has(&__input:disabled))
    .nc-checkbox__custom
      border-color: #666


  &:has(&__input:checked)
    .nc-checkbox__custom
      background: var(--primary-button-backgound)
      border-color: var(--text-color-secondary)


    .nc-checkbox__check-icon
      opacity: 1


  &:has(&__input:disabled)
    opacity: 0.6
    cursor: not-allowed

    .nc-checkbox__custom
      cursor: not-allowed


  // Иконка галочки
  &__check-icon
    width: 12px
    height: 12px
    color: white
    opacity: 0
    transition: opacity 0.2s ease
    stroke: currentColor

  // Текст метки
  &__label
    overflow-wrap: break-word


</style>
