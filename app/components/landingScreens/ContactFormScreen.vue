<template>
  <landing-screen
    content-class="ls-contact-form-screen"
    id="contact-form-screen"
  >
    <div class="nc-card ls-contact-form-screen__card">
      <div class="nc-card__header ls-contact-form-screen__card-header">
        Хотите увидеть, как ИИ усилит ваш бизнес?
      </div>

      <div class="nc-card__content ls-contact-form-screen__card-content">
        <p>Мы покажем как работает платформа «НейроКластер», разберем ваши бизнес-задачи, и расскажем как
          нейро-сотрудник сможет их решить
        </p>
      </div>

      <div class="nc-card__header">
        На 30-минутной онлайн встрече вы увидите:
      </div>

      <div class="nc-card__content ls-contact-form-screen__card-content">
        <ul>
          <li>Насколько ИИ способен решить ваши задачи</li>
          <li>Как работает нейро-сотрудник на реальном примере</li>
          <li>Как быстро запустить и настроить его под ваши цели</li>
          <li>Как оценить эффективность, результаты и ROI</li>
          <li>Как управлять расходами с точностью до копейки</li>
          <li>С чего начать внедрение в ваших условиях</li>
          <li>Сколько стоит и насколько быстро окупается ИИ</li>
        </ul>
      </div>
    </div>

    <div class="nc-card ls-contact-form-screen__contacts-card">
      <div class="nc-card__header">
        Наши контакты
      </div>

      <div class="nc-card__content ls-contact-form-screen__contacts">
        <a
          class="ls-contact-form-screen__contact-link"
          href="mailto:dom@neuro-cluster.com"
        >
          <img src="/icons/mail.svg" alt="mail-icon"/>

          <span>dom@neuro-cluster.com</span>
        </a>

        <a
          class="ls-contact-form-screen__contact-link"
          href="https://t.me/dom_neuro_cluster"
        >
          <img src="/icons/telegram.svg" alt="telegram-icon"/>

          <span>@dom_neuro_cluster</span>
        </a>

        <a
          class="ls-contact-form-screen__contact-link"
          href="tel:+79956982820"
        >
          <img src="/icons/phone.svg" alt="phone-icon"/>

          <span>+7 (995) 698-28-20</span>
        </a>
      </div>
    </div>

    <form
      class="nc-card ls-contact-form-screen__form"
      @submit="submitForm($event)"
    >
      <div class="ls-contact-form-screen__form-inputs">
        <nc-input
          v-model="form.name"
          label="Имя*"
          placeholder="Имя*"
          :error="invalidFormFields.includes('name')"
        />

        <nc-input
          v-model="form.phone"
          label="Телефон*"
          placeholder="Телефон*"
          type="phone"
          :error="invalidFormFields.includes('phone')"
        />

        <nc-input
          v-model="form.email"
          label="Электронная почта"
          placeholder="Электронная почта"
          type="email"
          :error="invalidFormFields.includes('email')"
        />

        <nc-input
          v-model="form.company"
          label="Компания"
          placeholder="Компания"
          :error="invalidFormFields.includes('company')"
        />

        <nc-input
          v-model="form.message"
          label="Сообщение"
          placeholder="Сообщение"
          :error="invalidFormFields.includes('message')"
          multiline
        />

        <nc-checkbox
          v-model="form.personalDataProcessingApproval"
          :error="invalidFormFields.includes('personalDataProcessingApproval')"
          class="ls-contact-form-screen__pd-checkbox"
          label="Согласие на обработку персональных данных"
        />

        <div class="ls-contact-form-screen__legal-footer">
          <span>Отправляя форму, вы принимаете правила</span> <a href="/legal/privacy-policy" class="ls-contact-form-screen__legal-footer-link" target="_blank">Политики конфиденциальности</a> <span>и</span> <a href="/legal/user-agreement" class="ls-contact-form-screen__legal-footer-link" target="_blank">Пользовательского соглашения</a>
        </div>
      </div>

      <div
        v-show="invalidFormFields.length"
        class="ls-contact-form-screen__form-error"
      >
        Подсветили ошибки в форме
      </div>

      <button
        type="submit"
        class="ls-contact-form-screen__form-submit nc-clickable"
      >
        Узнать, как это работает
      </button>
    </form>
  </landing-screen>
</template>

<script
  setup
  lang="ts"
>
import type {Reactive} from "vue";
import type {ContactForm, ContactFormSendingResponse} from "~~/types/contact-form";
import {validateForm} from "~~/utils/contact-form.utils";

interface ContactFormClient extends ContactForm {
  personalDataProcessingApproval: boolean
}

const form: Reactive<ContactFormClient> = reactive(
  {
    name: '',
    phone: '',
    email: '',
    company: '',
    message: '',
    personalDataProcessingApproval: false,
  }
)

const invalidFormFields: Ref<string[]> = ref([])

function validateClientForm (): void {
  const errors: string[] = []

  if (!form.personalDataProcessingApproval) {
    errors
      .push(
        'personalDataProcessingApproval'
      )
  }

  const invalidFields = validateForm(form)

  errors.push(...invalidFields)

  invalidFormFields.value = errors
}

const isSubmitting = ref(false)

async function submitForm (event: SubmitEvent) {
  event.preventDefault()

  validateClientForm()

  if (invalidFormFields.value.length >= 1) {
    return
  }

  isSubmitting.value = true

  try {
    await $fetch<ContactFormSendingResponse>(
      '/api/contact',
    {
        method: 'POST',
        body: form,
      }
    )

    alert('Спасибо! Мы скоро свяжемся с вами.')

    resetForm()
  } catch (error) {
    console.error('Ошибка отправки формы:', error)

    alert(`Не удалось отправить сообщение. Попробуйте позже.\n${error}`)
  } finally {
    isSubmitting.value = false
  }
}

function resetForm(): void {
  form.name = ''
  form.phone = ''
  form.email = ''
  form.company = ''
  form.message = ''
  form.personalDataProcessingApproval = false
}

</script>

<style lang="sass">
.ls-contact-form-screen
  display: grid
  gap: 24px

  // pc
  @media(min-width: 1000px)
    grid-template-areas: 'card form' 'contacts-card form'

  // pc
  @media(max-width: 1000px)
    grid-template-areas: 'card' 'contacts-card' 'form'

  &__card
    grid-area: card
    padding: 32px 20px
    background: linear-gradient(to right, #2525257F, #1111117F)

  &__card-header
    font-weight: bold

    // pc
    @media(min-width: 1000px)
      font-size: 32px
      margin-bottom: 24px

    // mobile
    @media(max-width: 1000px)
      font-size: 24px
      margin-bottom: 24px

  &__card-content
    display: flex
    flex-direction: column
    gap: 32px
    color: var(--text-color)

  &__contacts-card
    grid-area: contacts-card
    background: linear-gradient(to right, #2525257F, #1111117F)

  &__contacts
    display: flex
    flex-direction: column

  &__contact-link
    color: var(--text-color-secondary)
    transition: color .2s ease
    padding: 8px 4px
    display: inline-flex
    gap: 8px

    &:hover
      color: var(--text-color)

  &__form
    grid-area: form
    display: flex
    flex-direction: column
    gap: 24px

    // pc
    @media(min-width: 1000px)
      padding: 32px 20px

    // mobile
    @media(max-width: 1000px)
      padding: 20px 10px

  &__form-inputs
    display: flex
    flex-direction: column
    gap: 8px

  &__pd-checkbox,
  &__legal-footer
    color: var(--text-color-secondary)
    font-size: 14px

  &__legal-footer
    padding: 0 16px
    margin-left: 36px
    font-size: 14px

  &__legal-footer-link
    color: #4978D5
    padding: 4px
    border-radius: 8px
    transition: color 200ms ease

    &:hover
      color: #5091f2

  &__form-submit
    border-radius: 20px
    font-weight: bold
    color: var(--text-color)
    text-align: center
    background: linear-gradient(to right, #062259 0%, #053AA2 100%)
    border: none

    // pc
    @media(min-width: 1000px)
      font-size: 20px
      padding: 24px

    // mobile
    @media(max-width: 1000px)
      font-size: 20px
      padding: 20px

  &__form-error
    padding: 20px
    border-radius: 20px
    background: rgba(102, 20, 20, 0.4)
</style>
