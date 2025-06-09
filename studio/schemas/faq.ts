import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({ name: 'question', type: 'string', title: 'Question' }),
    defineField({ name: 'answer', type: 'array', of: [{ type: 'block' }], title: 'Answer' }),
    defineField({ name: 'metadata', type: 'metadata' })
  ]
})
