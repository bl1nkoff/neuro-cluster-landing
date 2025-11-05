<template>
  <landing-screen
    content-class="ls-gui-screen"
    header="Единый центр управления ИИ"
    id="gui-screen"
  >
    <div class="ls-gui-screen__cards">
      <div class="nc-card ls-gui-screen__card">
        <div class="nc-card__header">
          Детальная аналитика
        </div>

        <div class="nc-card__content ls-gui-screen__card-content">
          <ul>
            <li>Проверка KPI и качества работы</li>
            <li>Контроль расходов до копейки</li>
            <li>Анализ ROI и влияния на бизнес</li>
          </ul>

          <p>Абсолютная прозрачность результатов</p>
        </div>
      </div>

      <div class="nc-card ls-gui-screen__card">
        <div class="nc-card__header">
          Поведение и База знаний
        </div>

        <div class="nc-card__content ls-gui-screen__card-content">
          <ul>
            <li>Настройка роли и тона общения</li>
            <li>Редактирование сценариев поведения</li>
            <li>Мгновенное обновление базы знаний</li>
          </ul>

          <p>Полный контроль над «мозгом» ИИ</p>
        </div>
      </div>

      <div class="nc-card ls-gui-screen__card">
        <div class="nc-card__header">Решение «под ключ»</div>

        <div class="nc-card__content ls-gui-screen__card-content">
          <ul>
            <li>Подключение готовых решений из каталога</li>
            <li>Разработка интеграций под заказ</li>
            <li>Централизованное управление доступами</li>
          </ul>

          <p>Гибкая экосистема под ваши задачи</p>
        </div>
      </div>
    </div>

    <div class="ls-gui-screen__screenshots">
<!--      <img-->
<!--        v-for="(screenshotUrl, screenshotIndex) in SCREENSHOT_URL"-->
<!--        :key="screenshotIndex"-->
<!--        :src="screenshotUrl"-->
<!--        :alt="`Скриншот № ${screenshotIndex}`"-->
<!--        class="ls-gui-screen__screenshot"-->
<!--      />-->
      <img
        src="/gui-screenshots.png"
        alt="Скриншоты панели управления"
        class="ls-gui-screen__screenshots"
      />
    </div>
  </landing-screen>
</template>

<script
  setup
  lang="ts"
>
const SCREENSHOT_URL: string[] = [
  '/gui-screenshot-1.png',
  '/gui-screenshot-2.png',
  '/gui-screenshot-3.png'
]
</script>

<style lang="sass">
.ls-gui-screen
  &__cards
    display: grid
    gap: 32px
    justify-items: stretch
    margin-bottom: 64px

    // pc
    @media(min-width: 1000px)
      grid-template-columns: repeat(3, 1fr)

  &__card
    flex-grow: 1
    padding: 32px 16px

  &__card-content
    display: flex
    flex-direction: column
    gap: 16px

  &__screenshot
    width: 75%
    border-radius: 20px
    border: 3px solid var(--text-color-secondary)

    &:not(:first-child)
      margin-top: -15%

    &:nth-child(odd)
      float: right

    &:nth-child(even)
      float: left

  &__screenshots
    width: 100%
</style>
