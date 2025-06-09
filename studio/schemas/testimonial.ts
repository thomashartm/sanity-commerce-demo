import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'customerName', type: 'string', title: 'Customer Name' }),
    defineField({ name: 'role', type: 'string', title: 'Role' }),
    defineField({ name: 'rating', type: 'number', title: 'Rating' }),
    defineField({ name: 'quote', type: 'text', title: 'Quote' }),
    defineField({ name: 'photo', type: 'image', title: 'Photo' }),
    defineField({ name: 'metadata', type: 'metadata' })
  ]
})
