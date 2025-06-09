import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'shuttle',
  title: 'Shuttle',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', title: 'Name' }),
    defineField({ name: 'type', type: 'string', title: 'Type', options: { list: ['Long-Haul', 'Shuttle', 'Cargo'] } }),
    defineField({ name: 'capacity', type: 'number', title: 'Capacity' }),
    defineField({
      name: 'specs',
      title: 'Specs',
      type: 'array',
      of: [{ type: 'object', fields: [ { name: 'key', type: 'string' }, { name: 'value', type: 'string' } ] }]
    }),
    defineField({ name: 'images', type: 'array', of: [{ type: 'image' }], title: 'Images' }),
    defineField({ name: 'metadata', type: 'metadata' })
  ]
})
