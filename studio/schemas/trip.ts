import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'trip',
  title: 'Trip',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Title' }),
    defineField({ name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' } }),
    defineField({ name: 'overview', type: 'array', of: [{ type: 'block' }], title: 'Overview' }),
    defineField({ name: 'duration', type: 'number', title: 'Duration' }),
    defineField({ name: 'price', type: 'number', title: 'Price' }),
    defineField({ name: 'images', type: 'array', of: [{ type: 'image' }], title: 'Images' }),
    defineField({ name: 'route', type: 'object', title: 'Route', fields: [{ name: 'geojson', type: 'text' }] }),
    defineField({ name: 'shuttle', type: 'reference', to: [{ type: 'shuttle' }] }),
    defineField({ name: 'metadata', type: 'metadata' })
  ]
})
