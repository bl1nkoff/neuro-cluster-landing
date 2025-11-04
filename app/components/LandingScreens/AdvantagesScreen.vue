<template>
  <landing-screen
    content-class="ls-advantages-screen"
    header="Почему нам доверяют внедрение ИИ"
    id="advantages-screen"
  >
    <div class="nc-card">
      <div class="nc-card__header">
        Запуск за 14 дней, а не за полгода
      </div>

      <div class="nc-card__content">
        Вы получаете прототип через 2 недели после старта. Мы берем на себя 90% работы: от анализа процессов до интеграции и обучения, чтобы вам не пришлось нанимать разработчиков или проходить долгое обучение
      </div>
    </div>

    <div class="nc-card">
      <div class="nc-card__header">
        Прозрачный ROI и 30+ метрик в личном кабинете
      </div>

      <div class="nc-card__content">
        Вы всегда знаете, за что платите. В личном кабинете в реальном времени отслеживается десятки бизнес-метрик: от количества обработанных диалогов до прямого влияния на выручку
      </div>
    </div>

    <div class="nc-card">
      <div class="nc-card__header">
        Команда с опытом 120+ внедрений
      </div>

      <div class="nc-card__content">
        Над вашим проектом работает команда с опытом в консалтинге, финтехе и Enterprise-разработке. Мы реализовали более 120 проектов в 10 разных отраслях. Поэтому мы понимаем ваш бизнес, а не просто пишем код
      </div>
    </div>

    <div class="nc-card">
      <div class="nc-card__header">
        Своя ИИ-платформа: 20% экономии, х10 гибкости
      </div>

      <div class="nc-card__content">
        Мы инвестировали миллионы в свою ИИ-платформу, чтобы не зависеть от конструкторов. Это значит: никакой переплаты за чужие лицензии, 100% контроль за кодом и максимальная гибкость для ваших уникальных задач
      </div>
    </div>

    <div class="nc-card">
      <div class="nc-card__header">
        Полная интеграция с 200+ системами
      </div>

      <div class="nc-card__content">
        Мы обеспечиваем интеграцию с более чем 200 популярными CRM, ERP, 1С и другими системами. Это гарантирует, что ИИ всегда оперирует актуальными данными
      </div>
    </div>

    <div class="nc-card">
      <div class="nc-card__header">
        На 90% меньше человеческих ошибок
      </div>

      <div class="nc-card__content">
        ИИ не устает и не совершает ошибок связанных с «человеческим фактором». Он следует бизнес-процессу с точностью более 96%. Это сокращает издержки на исправление проблем
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
  gap: 32px

  // pc
  @media(min-width: 1000px)
    grid-template-columns: repeat(2, 1fr)
</style>
