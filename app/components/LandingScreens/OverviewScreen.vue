<template>
  <landing-screen
    header="Что такое «НейроКластер»"
    content-class="ls-overview-screen"
    id="overview-screen"
  >
    <div class="ls-overview-screen__description-wrapper">
      <div class="ls-overview-screen__description">
        «НейроКластер» - это платформа, команда инженеров и консалтеров<br>Мы создаем и внедряем нейро-сотрудника в ваши бизнес-процессы
        за 30 дней. Результат - ИИ выполняет рутинную работу быстрее, дешевле, стабильнее и эффективнее человека
      </div>

      <img
        class="ls-overview-screen__image"
        src="/overview-image.png"
        alt="overview-image"
      />
    </div>

    <div class="ls-overview-screen__cards">
      <div class="nc-card ls-overview-screen__card">
        <div class="nc-card__header">Собственная ИИ-платформа</div>

        <div class="nc-card__content">
          Мы не используем чужие конструкторы.<br>Это значит, что ваш нейро-сотрудник будет работать стабильно, данные останутся в безопасности, а мы можем настроить его под любую уникальную задачу
        </div>
      </div>

      <div class="nc-card ls-overview-screen__card">
        <div class="nc-card__header">Инженеры и консалтеры</div>

        <div class="nc-card__content">
          Сначала наши консалтеры находят, где есть точка роста, которая позволит увеличить доходы или сократить расходы. Затем инженеры создают ИИ под эту задачу.<br>Технология ради результата, а не ради технологии
        </div>
      </div>

      <div class="nc-card ls-overview-screen__card">
        <div class="nc-card__header">Решение «под ключ»</div>

        <div class="nc-card__content">
          Мы не бросим вас один-на-один с непонятным конструктором. Мы сами проектируем, обучаем и внедряем нейро-сотрудника. Вы получаете готовый инструмент, который начинает приносить пользу с первого дня
        </div>
      </div>
    </div>
  </landing-screen>
</template>

<script lang="ts" setup>

</script>

<style lang="sass">
.ls-overview-screen
  display: flex
  flex-direction: column
  justify-content: space-evenly
  height: 100%
  flex-grow: 1
  gap: 64px
  padding-bottom: 128px

  &__description-wrapper
    display: flex
    gap: 32px
    align-items: center

    // mobile
    @media(max-width: 1000px)
      flex-direction: column

  &__description
    color: var(--text-color-secondary)
    font-size: 24px

  &__image
    // pc
    @media(min-width: 1000px)
      height: 275px

    // mobile
    @media(max-width: 1000px)
      width: 100%

  &__cards
    display: grid
    gap: 32px
    justify-items: stretch
    color: var(--text-color-secondary)

    // pc
    @media(min-width: 1000px)
      grid-template-columns: repeat(3, 1fr)

  &__card
    flex-grow: 1
    padding: 32px 16px
</style>
