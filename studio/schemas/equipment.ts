import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'equipment',
  title: 'Equipment',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', title: 'Name' }),
    defineField({ name: 'category', type: 'string', title: 'Category' }),
    defineField({ name: 'description', type: 'array', of: [{ type: 'block' }], title: 'Description' }),
    defineField({
      name: 'techSpecs',
      title: 'Tech Specs',
      type: 'array',
      of: [{ type: 'object', fields: [ { name: 'key', type: 'string' }, { name: 'value', type: 'string' } ] }]
    }),
    defineField({ name: 'images', type: 'array', of: [{ type: 'image' }], title: 'Images' }),
    defineField({ name: 'metadata', type: 'metadata' })
  ]
})
