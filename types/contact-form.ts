interface ContactForm {
  name: string,
  phone: string,
  email: string,
  company: string,
  message: string,
}

interface ContactFormSendingResponse {
  ok: true
}

export type {
  ContactForm,
  ContactFormSendingResponse,
}
