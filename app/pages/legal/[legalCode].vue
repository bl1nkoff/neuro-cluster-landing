<template>
  <div class="legal-page">
    <div class="legal-page__header">
      <div class="legal-page__legal-name">
        {{legal?.name}}
      </div>

      <a
        :href="`/${legalCode}.docx`"
        class="legal-page__download-btn nc-clickable"
        :download="`${legal?.name}.docx`"
      >
        Скачать в формате .docx
      </a>
    </div>

    <div
      class="legal-page__legal-content"
      v-html="htmlContent"
    />
  </div>
</template>

<script setup lang="ts">
interface Legal {
  name: string,
  code: string,
}

const LEGALS: Legal[] = [
  {
    name: 'Пользовательское соглашение',
    code: 'user-agreement',
  },
  {
    name: 'Политика конфиденциальности',
    code: 'privacy-policy',
  },
]

const route = useRoute()
const legalCode: ComputedRef<string> = computed(
  () => route.params.legalCode as string
)

const legal: ComputedRef<Legal|undefined> = computed(
  () => LEGALS
    .find(
      legal => legal.code === legalCode.value
    )
)

watch(
  legal,
  function () {
    if (!legal.value) {
      throw createError({ statusCode: 404, fatal: true })
    }
  },
  {
    immediate: true,
  }
)

// Конвертация на этапе сборки (SSG)
const { data: htmlContent } = await useAsyncData(
  `legal-${legalCode.value}`,
  async () => {
    if (!legal.value) {
      throw createError(
        {
          statusCode: 404,
          statusMessage: 'Такой документ не найден',
          fatal: true // ← важно для SSG/SSR
        }
      )
    }

    // Этот код выполняется ТОЛЬКО на сервере (или при SSG)
    const fs = await import('node:fs/promises')
    const path = await import('node:path')
    const process = await import('node:process')
    const mammoth = await import('mammoth')

    const docxPath = path.resolve(
      process.cwd(),
      'public',
      `${legalCode.value}.docx`
    )

    const buffer = await fs.readFile(docxPath)
    const result = await mammoth.convertToHtml({ buffer })

    return result.value
  },
  {
    lazy: false,
    server: true, // ← ГАРАНТИРУЕТ выполнение ТОЛЬКО на сервере
  }
)

definePageMeta(
  {
    // Для SSG: предварительно сгенерировать все страницы
    generate: {
      routes: LEGALS
        .map(
          legal => legal.code
        )
    }
  }
)
</script>

<style lang="sass">
.legal-page
  max-width: 800px
  margin: 0 auto
  padding: 32px 8px

  &__header
    display: flex
    justify-content: space-between
    gap: 20px
    align-items: center
    margin-bottom: 20px

  &__legal-name
    font-size: 24px
    font-weight: bold

  &__legal-content
    line-height: 1.5em

    & > p
      margin: .75em 0

  &__download-btn
    padding: 15px 20px
    border-radius: 20px
    display: inline-block
    background: linear-gradient(to right, #062259 0%, #053AA2 100%)
    color: var(--text-color)
    text-decoration: none

</style>
