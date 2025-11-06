<template>
  <div class="product-descriptions-collector__product-description-wrapper">
    <div
      v-show="!productCode || productCode === PRODUCT_CODES.SALES"
      class="nc-card nc-card--horizontal-rev product-descriptions-collector__product-description"
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
      v-show="productCode && productCode === PRODUCT_CODES.SUPPORT"
      class="nc-card nc-card--horizontal-rev product-descriptions-collector__product-description"
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
      v-show="productCode && productCode === PRODUCT_CODES.TEACHER"
      class="nc-card nc-card--horizontal-rev product-descriptions-collector__product-description"
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
      v-show="productCode && productCode === PRODUCT_CODES.HR"
      class="nc-card nc-card--horizontal-rev product-descriptions-collector__product-description"
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
      v-show="productCode && productCode === PRODUCT_CODES.CUSTOM"
      class="product-descriptions-collector__product-description-wrapper--pseudo"
    >
      <div
        class="nc-card nc-card--horizontal-rev product-descriptions-collector__product-description"
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
        class="product-descriptions-collector__button nc-clickable"
        href="/#contact-form-screen"
      >
        Обсудить мою задачу с экспертом
      </a>
    </div>
  </div>

</template>
<script
  setup
  lang="ts"
>
import {PRODUCT_CODES} from "~~/types/products";

defineProps<
  {
    productCode: string,
  }
>()
</script>

<style lang="sass">
.product-descriptions-collector
  &__product-description-wrapper
    flex-grow: 1
    display: flex
    flex-direction: column
    gap: 24px
    position: relative

    &--pseudo
      display: contents

  &__product-description
    flex-grow: 1
    padding: 20px

    // pc
    @media(min-width: 1000px)
      padding-top: 95px

  &__button
    display: block
    background: var(--primary-button-backgound)
    border-radius: 20px
    text-align: center

    // pc
    @media(min-width: 1000px)
      padding: 22px
      font-size: 24px

    // mobile
    @media(max-width: 1000px)
      padding: 20px
      font-size: 20px
</style>
