<template>
  <landing-screen
    content-class="ls-advantages-screen"
    header="Преимущества «НейроКластера»"
    id="advantages-screen"
    centered-header
  >
    <div class="ls-advantages-screen__card-wrapper">
      <div class="nc-card nc-card--horizontal ls-advantages-screen__card">
        <div class="nc-card__header">
          Запуск за 14 дней, а&nbsp;не&nbsp;за&nbsp;полгода
        </div>

        <div class="nc-card__content">
          Вы получаете прототип через 2 недели после старта. Мы берем на себя 90% работы: от анализа процессов до
          интеграции и обучения, чтобы вам не пришлось нанимать разработчиков или проходить долгое обучение
        </div>
      </div>

      <img
        class="ls-advantages-screen__card-bg-image"
        src="/overview-image.svg"
        alt="overview-image"
      />
    </div>

    <div class="ls-advantages-screen__card-wrapper">
      <div class="nc-card nc-card--horizontal-rev ls-advantages-screen__card">
        <div class="nc-card__header">
          Прозрачный&nbsp;ROI и 30+&nbsp;метрик в&nbsp;личном&nbsp;кабинете
        </div>

        <div class="nc-card__content">
          Вы всегда знаете, за что платите. В личном кабинете в реальном времени отслеживается десятки бизнес-метрик: от
          количества обработанных диалогов до прямого влияния на выручку
        </div>
      </div>

      <img
        class="ls-advantages-screen__card-bg-image"
        src="/overview-image.svg"
        alt="overview-image"
      />
    </div>

    <div class="ls-advantages-screen__card-wrapper">
      <div class="nc-card nc-card--horizontal ls-advantages-screen__card">
        <div class="nc-card__header">
          Команда с опытом 120+&nbsp;внедрений
        </div>

        <div class="nc-card__content">
          Над вашим проектом работает команда с опытом в консалтинге, финтехе и Enterprise-разработке. Мы реализовали
          более 120 проектов в 10 разных отраслях. Поэтому мы понимаем ваш бизнес, а не просто пишем код
        </div>
      </div>

      <img
        class="ls-advantages-screen__card-bg-image"
        src="/overview-image.svg"
        alt="overview-image"
      />
    </div>

    <div class="ls-advantages-screen__card-wrapper">
      <div class="nc-card nc-card--horizontal-rev ls-advantages-screen__card">
        <div class="nc-card__header">
          Своя ИИ-платформа: 20%&nbsp;экономии, х10&nbsp;гибкости
        </div>

        <div class="nc-card__content">
          Мы инвестировали миллионы в свою ИИ-платформу, чтобы не зависеть от конструкторов. Это значит: никакой
          переплаты за чужие лицензии, 100% контроль за кодом и максимальная гибкость для ваших уникальных задач
        </div>
      </div>

      <img
        class="ls-advantages-screen__card-bg-image"
        src="/overview-image.svg"
        alt="overview-image"
      />
    </div>

    <div class="ls-advantages-screen__card-wrapper">
      <div class="nc-card nc-card--horizontal ls-advantages-screen__card">
        <div class="nc-card__header">
          Полная интеграция с&nbsp;200+&nbsp;системами
        </div>

        <div class="nc-card__content">
          Мы обеспечиваем интеграцию с более чем 200 популярными CRM, ERP, 1С и другими системами. Это гарантирует, что
          ИИ всегда оперирует актуальными данными
        </div>
      </div>

      <img
        class="ls-advantages-screen__card-bg-image"
        src="/overview-image.svg"
        alt="overview-image"
      />
    </div>

    <div class="ls-advantages-screen__card-wrapper">
      <div class="nc-card nc-card--horizontal-rev ls-advantages-screen__card">
        <div class="nc-card__header">
          На 90%&nbsp;меньше человеческих&nbsp;ошибок
        </div>

        <div class="nc-card__content">
          ИИ не устает и не совершает ошибок связанных с «человеческим фактором». Он следует бизнес-процессу с точностью
          более 96%. Это сокращает издержки на исправление проблем
        </div>
      </div>


      <img
        class="ls-advantages-screen__card-bg-image"
        src="/overview-image.svg"
        alt="overview-image"
      />
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

  // pc
  @media(min-width: 1000px)
    grid-template-columns: repeat(2, 1fr)
    gap: 32px

  // mobile
  @media(max-width: 1000px)
    gap: 16px

  &__card-wrapper
    position: relative
    border-radius: 20px
    overflow: hidden

  &__card
    flex-grow: 1
    padding: 32px 16px
    z-index: 1
    position: relative

  &__card-bg-image
    position: absolute
    right: -25px
    top: -25px
    z-index: 0
    height: 100px

    // pc
    @media(min-width: 1000px)
      display: none
</style>
