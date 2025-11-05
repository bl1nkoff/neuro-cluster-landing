<template>
  <landing-screen
    content-class="ls-roadmap-screen"
    header="Дорожная карта по внедрению ИИ"
    id="roadmap-screen"
  >
    <div
      class="ls-roadmap-screen__step-row"
      ref="firstCardRef"
    >
      <div class="ls-roadmap-screen__step nc-card nc-card--horizontal-rev">
        <img
          class="ls-roadmap-screen__step-number"
          src="/roadmap-1.svg"
          alt="1"
        />

        <div class="nc-card__header ls-roadmap-screen__step-name">
          Аудит и проектирование
        </div>

        <div class="nc-card__content ls-roadmap-screen__step-description">
          <ul>
            <li>Анализируем ваши бизнес-процессы, чтобы найти точки роста</li>
            <li>Разрабатываем детальную дорожную карту проекта</li>
            <li>Формируем «Паспорт Нейро-сотрудника»</li>
            <li>Определяем где и как ИИ принесет максимум пользы</li>
          </ul>
        </div>
      </div>

      <svg
        class="ls-roadmap-screen__line"
        preserveAspectRatio="none"
        ref="firstLineRef"
      >
        <path
          :d="linePath"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>

    <div class="ls-roadmap-screen__step-row">
      <svg
        class="ls-roadmap-screen__line"
        preserveAspectRatio="none"
      >
        <path
          :d="linePath"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <div class="ls-roadmap-screen__step nc-card nc-card--horizontal">
        <img
          class="ls-roadmap-screen__step-number"
          src="/roadmap-2.svg"
          alt="2"
        />

        <div class="nc-card__header ls-roadmap-screen__step-name">
          Разработка и обучение
        </div>

        <div class="nc-card__content ls-roadmap-screen__step-description">
          <ul>
            <li>Разрабатываем нейро-сотрудника и обучаем на ваших данных</li>
            <li>Проводим внутреннее тестирование для оценки качества</li>
            <li>Открываем вам доступы для совместного тестирования</li>
            <li>Калибруем ИИ, доводя его ответы до нужного вам уровня</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="ls-roadmap-screen__step-row">
      <div class="ls-roadmap-screen__step nc-card">
        <img
          class="ls-roadmap-screen__step-number nc-card--horizontal-rev"
          src="/roadmap-3.svg"
          alt="3"
        />

        <div class="nc-card__header ls-roadmap-screen__step-name">
          Интеграция и пилотный запуск
        </div>

        <div class="nc-card__content ls-roadmap-screen__step-description">
          <ul>
            <li>Подключаем нейро-сотрудника к вашим IT-системам</li>
            <li>Запускаем ИИ в безопасном режиме на группе пользователей</li>
            <li>Отслеживаем ключевые метрики и собираем обратную связь</li>
            <li>Подтверждаем готовность к масштабированию на весь поток</li>
          </ul>
        </div>
      </div>

      <svg
        class="ls-roadmap-screen__line"
        preserveAspectRatio="none"
      >
        <path
          :d="linePath"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>

    <div class="ls-roadmap-screen__step-row ls-roadmap-screen__step-row--no-line">
      <div class="ls-roadmap-screen__step nc-card nc-card--horizontal">
        <img
          class="ls-roadmap-screen__step-number"
          src="/roadmap-4.svg"
          alt="4"
        />

        <div class="nc-card__header ls-roadmap-screen__step-name">
          Полноценный запуск и поддержка
        </div>

        <div class="nc-card__content ls-roadmap-screen__step-description">
          <ul>
            <li>Масштабируем работу ИИ на весь поток задач</li>
            <li>Обучаем команду эффективной работе с новым инструментом</li>
            <li>Обеспечиваем постоянное сопровождение и поддержку</li>
            <li>Развиваем и дообучаем нейро-сотрудника на новых данных</li>
          </ul>
        </div>
      </div>
    </div>
  </landing-screen>
</template>

<script
  setup
  lang="ts"
>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const linePath: Ref<string> = ref('')

const firstLineRef: Ref<HTMLElement|undefined> = ref()
const firstCardRef: Ref<HTMLElement|undefined> = ref()

function recalculateLinePath () {
  const lineElem = firstLineRef.value

  if (!lineElem) {
    console.warn('Не удалось рассчитать линии для роадмапа')
    return
  }

  const x = lineElem.getBoundingClientRect().width
  const y = lineElem.getBoundingClientRect().height

  const RADIUS = 50

  linePath.value =`M 0 ${y * .5} L ${x * .5 - RADIUS} ${y * .5} A ${RADIUS} ${RADIUS} 0 0 1 ${x  * .5} ${y * .5 + RADIUS} L ${x * .5} ${y}`
}

let resizeObserver: ResizeObserver | undefined = undefined

onMounted(() => {
  if (!firstCardRef.value) return

  recalculateLinePath()

  // Создаём ResizeObserver
  resizeObserver = new ResizeObserver(
    () => {
      recalculateLinePath()
    }
  )

  resizeObserver.observe(firstCardRef.value)
})

onBeforeUnmount(() => {
  if (resizeObserver) {
    resizeObserver.disconnect()
  }
})


</script>

<style lang="sass">
.ls-roadmap-screen
  &__step-row
    display: flex
    width: 100%

    // mobile
    @media(max-width: 1000px)
      &:not(:last-child)
        margin-bottom: 16px

    &--no-line
      // pc
      @media(min-width: 1000px)
        justify-content: flex-end

  &__step
    padding: 24px  24px 32px
    flex-shrink: 0
    display: grid
    transition: .2s ease color
    grid-template-columns: min-content auto

    // pc
    @media(min-width: 1000px)
      width: calc(50% - 32px)
      grid-template-areas: 'number name' '_ description'

    // mobile
    @media(max-width: 1000px)
      width: 100%
      grid-template-areas: 'number name' 'description description'

  &__step:hover &__step-number
    transform: scale(1.05)

  &__step-number
    grid-area: number
    margin-right: 16px
    transition: transform 0.2s ease

    // pc
    @media(min-width: 1000px)
      height: 48px

    // mobile
    @media(max-width: 1000px)
      height: 36px

  &__step-name
    grid-area: name
    align-self: center
    margin: 0 !important

  &__step-description
    grid-area: description

    // pc
    @media(min-width: 1000px)
      margin-top: 8px

    // mobile
    @media(max-width: 1000px)
      margin-top: 16px

  &__line
    flex-grow: 1
    width: 100%
    height: 100%
    stroke: #25252566
    stroke-width: 10px
    align-self: flex-end

    // mobile
    @media(max-width: 1000px)
      display: none

    &:first-child
      transform: scaleX(-1)
</style>
