<template>
  <landing-screen
    content-class="ls-catalog-screen"
    header="Готовые нейро-сотрудники"
    id="catalog-screen"
  >
    <div class="ls-catalog-screen__product-list">
      <button
        v-for="(product, productIndex) in PRODUCTS"
        :key="product.code"
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
    </div>

    <div class="ls-catalog-screen__product-description-wrapper">
      <div
        v-show="!selectedProductCode || selectedProductCode === PRODUCT_CODES.SALES"
        class="nc-card ls-catalog-screen__product-description"
      >
        <div class="nc-card__header">
          Функционал
        </div>

        <ul>
          <li>Отвечает 24/7 за 3 секунды на 96% обращений</li>
          <li>Квалифицирует и отсеивает нецелевых клиентов</li>
          <li>Консультирует по продуктам на основе базы знаний</li>
          <li>Собирает контакты и создает сделку в CRM</li>
          <li>Передает "прогретого" лида менеджеру</li>
        </ul>

        <div class="nc-card__header">
          Результат
        </div>

        <ul>
          <li>Экономит 1-2 часа в день каждому менеджеру</li>
          <li>Исключает упущенные лиды в нерабочее время</li>
        </ul>
      </div>

      <div
        v-show="selectedProductCode && selectedProductCode === PRODUCT_CODES.SUPPORT"
        class="nc-card ls-catalog-screen__product-description"
      >
        <div class="nc-card__header">
          Функционал
        </div>

        <ul>
          <li>Отвечает 24/7 за 3 секунды даже в пиковые часы</li>
          <li>Решает проблемы по документам из базы знаний</li>
          <li>Создает и обновляет тикеты в HelpDesk системе</li>
          <li>Эскалирует сложные случаи на нужного специалиста</li>
          <li>Собирает обратную связь о качестве обслуживания</li>
        </ul>

        <div class="nc-card__header">
          Результат
        </div>

        <ul>
          <li>Решает 5-7 из 10 обращений без участия человека</li>
          <li>Увеличивает уровень сервиса (NPS/CSI)</li>
        </ul>
      </div>

      <div
        v-show="selectedProductCode && selectedProductCode === PRODUCT_CODES.TEACHER"
        class="nc-card ls-catalog-screen__product-description"
      >
        <div class="nc-card__header">
          Функционал
        </div>

        <ul>
          <li>Отвечает 24/7 на вопросы по регламентам, процессам и продуктам</li>
          <li>Помогает адаптироваться новым сотрудникам</li>
          <li>Мгновенно находит нужный документ или эксперта</li>
          <li>Назначает обучение для повышения квалификации</li>
          <li>Оценивает уровень знаний и навыков</li>
        </ul>

        <div class="nc-card__header">
          Результат
        </div>

        <ul>
          <li>Увеличивает скорость адаптации новичка на 20-30%</li>
          <li>Освобождает наставнику и руководителю 4-5 часов в неделю</li>
        </ul>
      </div>

      <div
        v-show="selectedProductCode && selectedProductCode === PRODUCT_CODES.HR"
        class="nc-card ls-catalog-screen__product-description"
      >
        <div class="nc-card__header">
          Функционал
        </div>

        <ul>
          <li>Обрабатывает 96% откликов и резюме 24/7</li>
          <li>Проводит первичное интервью с кандидатом</li>
          <li>Отвечает на вопросы о вакансии и компании</li>
          <li>Согласует и назначает собеседования в календаре</li>
          <li>Формирует шорт-лист релевантных кандидатов</li>
        </ul>

        <div class="nc-card__header">
          Результат
        </div>

        <ul>
          <li>Находит 10 лучших кандидатов из 200 за 15 минут</li>
          <li>Экономит рекрутеру 3-4 часа в день на ручном отборе</li>
        </ul>
      </div>

      <div
        v-show="selectedProductCode && selectedProductCode === PRODUCT_CODES.CUSTOM"
        class="ls-catalog-screen__product-description-wrapper--pseudo"
      >
        <div
          class="nc-card ls-catalog-screen__product-description"
        >
          <div class="nc-card__header">
            Не нашли ИИ под свою задачу?
          </div>

          Мы можем создать нейро-сотрудника для ваших уникальных задач и бизнес-процессов

          <div class="nc-card__header">
            Как мы работаем:
          </div>

          <ul>
            <li>Изучаем ваши цели, задачи и процессы</li>
            <li>Разрабатываем и обучаем ИИ</li>
            <li>Интегрируем его в вашу рабочую среду</li>
          </ul>
        </div>

        <a
          class="ls-catalog-screen__button nc-clickable"
          href="/#contact-form-screen"
        >
          Обсудить мою задачу с экспертом
        </a>
      </div>
    </div>
  </landing-screen>
</template>

<script
  lang="ts"
  setup
>

const PRODUCT_QUERY_CODE = 'product'

interface Product {
  name: string,
  code: PRODUCT_CODES
}

enum PRODUCT_CODES {
  SALES = 'SALES',
  SUPPORT = 'SUPPORT',
  TEACHER = 'TEACHER',
  HR = 'HR',
  CUSTOM = 'CUSTOM',
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

const preselectedProductCode = route.query[PRODUCT_QUERY_CODE] as PRODUCT_CODES | undefined

const selectedProductCode: Ref<PRODUCT_CODES | undefined> = ref(
  preselectedProductCode
  && PRODUCTS
    .some(
      product => product.code === preselectedProductCode
    )
    ? preselectedProductCode
    : PRODUCT_CODES.SALES
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
    // Сохраняем текущую позицию скролла
    const scrollY = window.scrollY

    // Меняем хеш через history.replaceState — это не вызывает прокрутку
    history.replaceState(null, '', newQueryParams.toString() + newHash)

    // Восстанавливаем позицию скролла (на всякий случай, хоть и не должен сбрасываться)
    window.scrollTo(window.scrollX, scrollY)
  }

  router
    .push(
      {
        hash: '#catalog-screen',
        query: {
          ...route.query,
          [ PRODUCT_QUERY_CODE ]: productCode,
        }
      }
    )
}

</script>

<style lang="sass">
.ls-catalog-screen
  display: flex
  gap: 32px

  // mobile
  @media(max-width: 1000px)
    flex-direction: column

  &__product-list
    display: flex
    flex-direction: column
    gap: 24px
    flex-shrink: 0

    // pc
    @media(min-width: 1000px)
      width: 600px

  &__product
    font: inherit
    font-size: 24px
    text-align: left
    background: #25252566
    color: var(--text-color-secondary)
    border: 3px solid transparent
    border-radius: 16px
    padding: 16px
    cursor: pointer
    transition-property: border-color, color
    transition-duration: 200ms
    transition-timing-function: ease
    display: flex
    flex-wrap: nowrap
    gap: 20px
    align-items: center

    &--selected
      color: var(--text-color)
      border-color: var(--text-color)

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

  &__product-description-wrapper
    flex-grow: 1
    display: flex
    flex-direction: column
    gap: 24px

    &--pseudo
      display: contents

  &__product-description
    flex-grow: 1
    font-size: 20px
    padding: 20px

    // pc
    @media(min-width: 1000px)
      padding-top: 110px

  &__button
    display: block
    font-size: 24px
    background: linear-gradient(to right, #062259 0%, #053AA2 100%)
    padding: 30px
    border-radius: 20px
    text-align: center
</style>
