import type { ContactForm } from "~~/types/contact-form";

const EMAIL_VALIDATION_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

function validateForm (contact: ContactForm): string[] {
  const errors: string[] = []

  if (!contact.name) {
    errors.push('name')
  }

  if (!contact.phone) {
    const normalizedPhone = normalizePhoneNumber(contact.phone)

    if (
      typeof normalizedPhone !== 'string'
    ) {
      errors.push('phone')
    }
  }

  if (contact.email) {
    if (
      !EMAIL_VALIDATION_REGEX.test(contact.email)
    ) {
      errors.push('email')
    }
  }

  return errors
}

function normalizePhoneNumber (rawPhone: string) {
  let phone = rawPhone
    .replace(/\D/g, '')

  if (phone.startsWith('8')) {
    phone = phone.replace('8', '7')
  }
  else if (phone.startsWith('9')) {
    phone = '7' + phone
  }

  if (phone.length !== 11) {
    return { error: 'WRONG_PHONE_NUMBER' }
  }

  return phone
}

export {
  validateForm,
}
