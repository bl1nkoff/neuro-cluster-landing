<template>
  <footer class="nc-footer__wrapper" id="footer">
    <div class="nc-separator nc-separator--page-separator"/>

    <div class="nc-footer">
      <div class="nc-footer__logo">
        НейроКластер
      </div>

      <div class="nc-footer__legal-content">
        <div class="nc-footer__link nc-footer__link--pseudo">
          © 2025 «НейроКластер». Все&nbsp;права&nbsp;защищены
        </div>

        <a
          class="nc-footer__link"
          href="/legal/privacy-policy"
        >
          Политика конфиденциальности
        </a>

        <a
          class="nc-footer__link"
          href="/legal/user-agreement"
        >
          Пользовательское соглашение
        </a>
      </div>

      <div class="nc-footer__business-content">
        <nav class="nc-footer__content-column">
          <div class="nc-footer__content-header">
            О компании
          </div>

          <a
            class="nc-footer__link nc-footer__link--primary"
            href="/#catalog-screen"
          >
            Нейро-сотрудники
          </a>

          <a
            class="nc-footer__link nc-footer__link--primary"
            href="/#roadmap-screen"
          >
            План внедрения ИИ
          </a>

          <a
            class="nc-footer__link nc-footer__link--primary"
            href="/#gui-screen"
          >
            Интерфейс платформы
          </a>

          <a
            class="nc-footer__link nc-footer__link--primary"
            href="/#advantages-screen"
          >
            Преимущества
          </a>
        </nav>

        <div class="nc-footer__content-column">
          <div class="nc-footer__content-header">
            Контакты
          </div>

          <a
            class="nc-footer__link nc-footer__link--primary"
            href="mailto:dom@neuro-cluster.com"
          >
            <img src="/icons/mail.svg" alt="mail-icon"/>

            <span>dom@neuro-cluster.com</span>
          </a>

          <a
            class="nc-footer__link nc-footer__link--primary"
            href="https://t.me/dom_neuro_cluster"
            target="_blank"
          >
            <img src="/icons/telegram.svg" alt="telegram-icon"/>

            <span>@dom_neuro_cluster</span>
          </a>

          <a
            class="nc-footer__link nc-footer__link--primary"
            href="tel:+79956982820"
          >
            <img src="/icons/phone.svg" alt="phone-icon"/>

            <span>+7 (995) 698-28-20</span>
          </a>

          <a
            class="nc-footer__link nc-footer__link--primary"
            href="https://tenchat.ru/neuro-cluster"
          >
            <img src="/icons/tenchat.svg" alt="tenchat-icon"/>

            <span>Блог в TenChat</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script
  setup
  lang="ts"
>
</script>

<style lang="sass">
.nc-footer
  padding: 32px 16px
  margin: auto
  width: var(--layout-content-width)
  gap: 16px
  display: grid

  // pc
  @media(min-width: 1000px)
    grid-template-areas: 'logo business-content' 'legal-content business-content'
    grid-template-columns: auto max-content

  // mobile
  @media(max-width: 1000px)
    grid-template-areas: 'logo' 'business-content' 'legal-content'

  &__wrapper
    background: var(--background-color)

  &__logo
    color: inherit
    font-weight: bold
    grid-area: logo

    // pc
    @media(min-width: 1000px)
      font-size: 32px

    // mobile
    @media(max-width: 1000px)
      font-size: 24px

  &__content-column
    display: flex
    flex-direction: column

  &__legal-content
    grid-area: legal-content
    align-self: end
    display: flex
    flex-wrap: wrap

  &__business-content
    grid-area: business-content
    display: flex

    // pc
    @media(min-width: 1000px)
      gap: 32px

    // mobile
    @media(max-width: 1000px)
      flex-direction: column
      gap: 16px

  &__content-header
    font-weight: bold
    margin-bottom: 4px

  &__link
    font-size: 14px
    color: #545454
    transition: color .2s ease
    padding: 4px
    display: inline-flex
    gap: 8px

    &--primary
      color: var(--text-color-secondary)

    &:hover:not(&--pseudo)
      color: var(--text-color)

</style>
