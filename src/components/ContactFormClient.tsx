'use client'
import ContactForm, { ContactFormFields } from './ContactForm'

export default function ContactFormClient() {
  function handleSubmit(fields: ContactFormFields) {
    console.log('send', fields)
  }
  return <ContactForm onSubmit={handleSubmit} />
}
