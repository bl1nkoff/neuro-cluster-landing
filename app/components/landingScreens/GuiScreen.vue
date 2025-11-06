<template>
  <landing-screen
    content-class="ls-gui-screen"
    header="Единый центр управления ИИ"
    id="gui-screen"
  >
    <div class="ls-gui-screen__cards">
      <div class="nc-card ls-gui-screen__card">
        <div class="nc-card__header">
          Полный контроль над «мозгом» ИИ
        </div>

        <div class="nc-card__content ls-gui-screen__card-content">
          <ul>
            <li>Настройка роли и тона общения</li>
            <li>Редактирование сценариев поведения</li>
            <li>Мгновенное обновление базы знаний</li>
          </ul>

          <p>На страницах: «База знаний», «Роли и сценарии»</p>
        </div>
      </div>

      <div class="nc-card ls-gui-screen__card">
        <div class="nc-card__header">
          Детальная и прозрачная аналитика
        </div>

        <div class="nc-card__content ls-gui-screen__card-content">
          <ul>
            <li>Проверяйте KPI и качество работы</li>
            <li>Контролируйте расходы до копейки</li>
            <li>Анализируйте ROI и влияние на бизнес</li>
          </ul>

          <p>На страницах: «Дашборд», «Аналитика», «Расходы ИИ»</p>
        </div>
      </div>

      <div class="nc-card ls-gui-screen__card">
        <div class="nc-card__header">Гибкие интеграции с ИТ-системими</div>

        <div class="nc-card__content ls-gui-screen__card-content">
          <ul>
            <li>Подключайте готовые решения из каталога</li>
            <li>Заказывайте разработку интеграции под вас</li>
            <li>Централизованно управляйте доступами</li>
          </ul>

          <p>На странице: «Интеграции»</p>
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
    justify-items: stretch
    margin-bottom: 64px

    // pc
    @media(min-width: 1000px)
      grid-template-columns: repeat(3, 1fr)
      gap: 32px

    // mobile
    @media(max-width: 1000px)
      gap: 16px

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
