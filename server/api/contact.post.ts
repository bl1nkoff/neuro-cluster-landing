import { initEnv } from "~~/server/init-env";
initEnv()

import {defineEventHandler, readBody} from 'h3'
import nodemailer from 'nodemailer'
import process from 'node:process'
import type {ContactForm, ContactFormSendingResponse} from "~~/types/contact-form";
import {validateForm} from "~~/utils/contact-form.utils";

export default defineEventHandler(async function (event): Promise<ContactFormSendingResponse> {
  if (
    event.node.req.method !== 'POST'
  ) {
    throw createError(
      {
        statusCode: 405,
        statusMessage: 'Method Not Allowed'
      }
    )
  }

  try {
    const SMTP_HOST = process.env.SMTP_HOST
    const SMTP_PORT = process.env.SMTP_PORT
    const SMTP_USER = process.env.SMTP_USER
    const SMTP_PASS = process.env.SMTP_PASS
    const DESTINATION_EMAIL = process.env.LANDING_FORM_DESTINATION_EMAIL

    const SENDER_NAME = 'НейроКластер Лендинг'

    const form: ContactForm = await readBody(event)

    const formInvalidFields = validateForm(form)

    if (
      formInvalidFields.length >= 1
    ) {
      throw createError(
        {
          statusCode: 400,
          statusMessage: `Ошибка в поле: ${formInvalidFields.join(', ')}`
        }
      )
    }

    const transporter = nodemailer
      .createTransport(
        {
          host: SMTP_HOST,
          port: Number(SMTP_PORT),
          secure: true,
          auth: {
            user: SMTP_USER,
            pass: SMTP_PASS,
          },
        }
      )

    await transporter
      .sendMail(
        {
          from: `"${SENDER_NAME}" <${SMTP_USER}>`,
          to: DESTINATION_EMAIL,
          subject: `Новая заявка с лендинга`,
          text: [
            `Имя: ${form.name}`,
            `Телефон: ${form.phone}`,
            form.email
              && `E-Mail: ${form.email}`,
            form.company
              && `Компания: ${form.company}`,
            form.message
              && `Сообщение: ${form.message}`,
          ]
            .filter(Boolean)
            .map(
              str => `* ${str}`
            )
            .join('\n'),
        }
      )

    return {
      ok: true
    }
  }
  catch (error) {
    console.error('Ошибка отправки email:', error)
    throw createError(
      {
        statusCode: 500,
        statusMessage: `Failed to send email: ${error}`
      }
    )
  }
})
