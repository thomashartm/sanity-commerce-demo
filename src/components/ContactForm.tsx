import { FormEvent } from 'react'

export interface ContactFormFields {
  name: string
  email: string
  message: string
}

export interface ContactFormProps {
  onSubmit: (fields: ContactFormFields) => void
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const fields: ContactFormFields = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value
    }
    onSubmit(fields)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="name" placeholder="Name" className="border p-2 w-full" />
      <input name="email" type="email" placeholder="Email" className="border p-2 w-full" />
      <textarea name="message" placeholder="Message" className="border p-2 w-full" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Send
      </button>
    </form>
  )
}
