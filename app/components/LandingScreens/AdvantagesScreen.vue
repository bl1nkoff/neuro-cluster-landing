<template>
  <landing-screen
    content-class="ls-advantages-screen"
    header="Почему нам доверяют внедрение ИИ"
    id="advantages-screen"
  >
    <div class="nc-card">
      <div class="nc-card__header">
        Готовое бизнес-решение
      </div>

      <div class="nc-card__content">
        Вы получаете не конструктор, а полностью настроенного и обученного нейро-сотрудника. Мы берем на себя всю техническую сложность: от создания базы знаний до интеграции и дообучения
      </div>
    </div>

    <div class="nc-card">
      <div class="nc-card__header">
        Радикальная прозрачность
      </div>

      <div class="nc-card__content">
        Вы всегда знаете, за что платите и какой результат получаете. В личном кабинете десятки, если не сотни бизнес-метрик
      </div>
    </div>

    <div class="nc-card">
      <div class="nc-card__header">
        Глубокая интеграция в ваши процессы
      </div>

      <div class="nc-card__content">
        Наш ИИ работает внутри ваших CRM, ERP и других систем. Он всегда использует актуальные данные: проверяет статусы, создает заявки и работает с остатками.
      </div>
    </div>

    <div class="nc-card">
      <div class="nc-card__header">
        Бизнес-экспертиза в фундаменте
      </div>

      <div class="nc-card__content">
        Мы говорим на языке бизнеса, а не кода. Начинаем с анализа ваших KPI и бизнес-задач, чтобы ИИ приносил измеримую пользу и окупал инвестиции в себя
      </div>
    </div>

    <div class="nc-card">
      <div class="nc-card__header">
        Команда с опытом в консалтинге и IT
      </div>

      <div class="nc-card__content">
        Над вашим проектом работают не просто разработчики, а команда с опытом в консалтинге, управлении и создании сложных IT-продуктов. Это гарантирует глубокое понимание ваших задач и высокий уровень исполнения
      </div>
    </div>

    <div class="nc-card">
      <div class="nc-card__header">
        Низкая цена без посредников
      </div>

      <div class="nc-card__content">
        Мы владеем собственными технологиями и платформой, исключает наценки посредников и гарантирует вам максимум возможностей за разумный бюджет
      </div>
    </div>
  </landing-screen>
</template>

<script
  setup
  lang="ts"
>
</script>

<style lang="sass">
.ls-advantages-screen
  display: grid
  grid-template-columns: repeat(2, 1fr)
  gap: 32px
  color: #ACACAC
</style>
