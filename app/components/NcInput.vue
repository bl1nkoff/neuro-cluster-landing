<template>
  <div
    class="nc-input__wrapper"
    :class="{'nc-input__wrapper--error': error}"
  >
    <div class="nc-input__body">
      <component
        :is="componentTag"
        @input="onInput"
        :value="modelValue"
        :disabled="readonly"
        :placeholder="placeholder"
        :type="type || 'text'"
        :class="{
          'nc-input--multiline': multiline,
        }"
        class="nc-input"
        ref="inputRef"
      />
    </div>

    <slot />
  </div>
</template>

<script lang="ts" setup>

import {
  computed, nextTick, onMounted, ref, watch,
  type Ref,
} from 'vue'

const props = defineProps<{
  modelValue: string | number | undefined,
  multiline?: boolean,
  readonly?: boolean,
  label: string,
  placeholder?: string,
  type?: string,
  error?: boolean,
}>()

const emit = defineEmits(
  [ 'update:modelValue' ]
)

const componentTag = computed(
  () => props.multiline
    ? 'textarea'
    : 'input'
)

function onInput(event: { target: { value: string | undefined } }) {
  emit('update:modelValue', event.target.value)
}

const inputRef: Ref<HTMLInputElement|null> = ref(null)

function resize() {
  if (!props.multiline) {
    console.log('не мультилайн')
    return
  }

  if (!inputRef.value) {
    console.log('не нашли инпут')
    return
  }

  inputRef.value.style.height = 'auto'
  inputRef.value.style.height = `${inputRef.value.scrollHeight}px`
}

onMounted(
  () => {
    if (props.multiline) {
      watch(
        () => props.modelValue,
        function () {
          nextTick(
            () => resize()
          )
        },
        {
          immediate: true,
        }
      )
    }
  }
)

</script>

<style lang="sass">
@use '../styles/variables.sass'

.nc-input
  border: none
  font: inherit
  color: inherit
  background: none
  width: 100%
  resize: none
  outline: none
  -webkit-appearance: none
  padding: 24px
  //padding: 8px 16px 16px
  font-size: 20px

  &--multiline
    max-height: 350px
    overflow-y: auto

  &__wrapper
    display: flex
    //border: variables.$xs solid black
    border-radius: 20px
    background: #25252533
    transition-property: background-color, border-color
    transition-duration: 200ms
    transition-timing-function: ease
    border: 3px transparent solid

    &:hover
      background: #25252566

    &--error
      border-color: #661414

  &__body
    flex-grow: 1

  &__label
    font-size: 16px
    opacity: .8
    flex-grow: 1
    margin-left: 16px
    margin-bottom: 8px
</style>
