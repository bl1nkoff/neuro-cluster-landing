<template>
  <landing-screen
    class="ls-catalog-screen"
    content-class="ls-catalog-screen__content"
    header="Готовые нейро-сотрудники"
    id="catalog-screen"
  >
    <img
      class="ls-catalog-screen__image"
      src="/catalog-image.png"
      alt="catalog-image"
    />

    <div class="ls-catalog-screen__product-list">
      <template
        v-for="(product, productIndex) in PRODUCTS"
        :key="product.code"
      >
        <button
          class="ls-catalog-screen__product"
          :class="{'ls-catalog-screen__product--selected': product.code === selectedProductCode}"
          @click="selectProductCode(product.code)"
        >
          <div class="ls-catalog-screen__product-icon">
            {{ +productIndex + 1 }}
          </div>

          <div class="ls-catalog-screen__product-name">
            {{ product.name }}
          </div>
        </button>

        <product-descriptions-collector
          v-if="selectedProductCode === product.code && $isMobile()"
          :product-code="product.code"
          class="ls-catalog-screen__product-description-wrapper"
        />
      </template>
    </div>

    <product-descriptions-collector
      v-if="selectedProductCode && !$isMobile()"
      :product-code="selectedProductCode"
      class="ls-catalog-screen__product-description-wrapper"
    />
  </landing-screen>
</template>

<script
  lang="ts"
  setup
>
import { provide } from 'vue'
import { PRODUCT_CODES } from '~~/types/products'
import ProductDescriptionsCollector from "~/components/ProductDescriptionsCollector.vue";

const PRODUCT_QUERY_CODE = 'product'

interface Product {
  name: string,
  code: PRODUCT_CODES
}

const PRODUCTS: Product[] = [
  {
    name: 'Нейро-консультант & Продажи',
    code: PRODUCT_CODES.SALES,
  },
  {
    name: 'Нейро-оператор & Поддержка',
    code: PRODUCT_CODES.SUPPORT,
  },
  {
    name: 'Нейро-наставник & Обучение',
    code: PRODUCT_CODES.TEACHER,
  },
  {
    name: 'Нейро-рекрутер & HR',
    code: PRODUCT_CODES.HR,
  },
  {
    name: 'ИИ под заказ',
    code: PRODUCT_CODES.CUSTOM,
  },
] as const

const route = useRoute()
const app = useNuxtApp()

const preselectedProductCode = route.query[PRODUCT_QUERY_CODE] as PRODUCT_CODES | undefined

const selectedProductCode: Ref<PRODUCT_CODES | undefined> = ref(
  preselectedProductCode
  && PRODUCTS
    .some(
      product => product.code === preselectedProductCode
    )
    ? preselectedProductCode
    : !app.$isMobile()
      ? PRODUCT_CODES.SALES
      : undefined
)

const router = useRouter()

function selectProductCode(productCode: PRODUCT_CODES) {
  selectedProductCode.value = productCode

  const newHash = '#catalog-screen'

  const currentQueryParams = window.location.search
    .replace(
      /^\?/,
      ''
    )

  const newQueryParams = new URLSearchParams(currentQueryParams)

  newQueryParams.set(PRODUCT_QUERY_CODE, productCode)

  // Изменяем хеш БЕЗ прокрутки
  if (
    currentQueryParams !== newQueryParams.toString()
    || window.location.hash !== newHash
  ) {
    // // Сохраняем текущую позицию скролла
    // const scrollY = window.scrollY

    // Меняем хеш через history.replaceState — это не вызывает прокрутку
    history.replaceState(null, '', '?' + newQueryParams.toString() + newHash)

    // // Восстанавливаем позицию скролла (на всякий случай, хоть и не должен сбрасываться)
    // window.scrollTo(window.scrollX, scrollY)
  }
}

</script>

<style lang="sass">
.ls-catalog-screen
  position: relative
  overflow: hidden

  &__content
    display: grid
    gap: 32px
    z-index: 1

    // pc
    @media(min-width: 1000px)
      grid-template-columns: repeat(2, 1fr)

    // mobile
    @media(max-width: 1000px)
      flex-direction: column

  &__product-list
    display: flex
    flex-direction: column
    gap: 24px
    flex-shrink: 0
    position: relative

  &__product
    font: inherit
    text-align: left
    background: #25252566
    color: var(--text-color-secondary)
    border: 0 solid transparent
    border-radius: 16px
    padding: 8px 16px
    cursor: pointer
    transition-property: border-color, color, border-width
    transition-duration: 200ms
    transition-timing-function: ease
    display: flex
    flex-wrap: nowrap
    gap: 20px
    align-items: center
    background: linear-gradient(to left, #1111117F, #2525257F)

    // pc
    @media(min-width: 1000px)
      font-size: 24px

    // mobile
    @media(max-width: 1000px)
      font-size: 20px

    &--selected
      color: var(--text-color)
      border-color: var(--text-color)
      border-width: 3px

    &:hover:not(&--selected)
      border-color: var(--text-color-secondary)

  &__product-icon
    position: relative
    z-index: 1
    display: flex
    align-content: center
    justify-content: center
    align-items: center

    //&:before
    //  content: ""
    //  display: block
    //  position: absolute
    //  top: 10px
    //  right: 10px
    //  z-index: 0

    //&, &:before
    &
      height: 50px
      width: 50px
      border-style: solid
      border-width: 3px
      border-color: var(--text-color-secondary)
      border-radius: 10px
      transition-property: border-color, color
      transition-duration: 200ms
      transition-timing-function: ease

  &__product--selected &__product-icon
    border-color: var(--text-color)

  &__image
    display: none
    position: absolute
    z-index: 0
    bottom: 0
    width: 100%

    // pc
    @media(min-width: 1000px)
      right: -50%

    // mobile
    @media(max-width: 1000px)
      left: 0
</style>
