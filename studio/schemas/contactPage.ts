import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Title' }),
    defineField({ name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' } }),
    defineField({ name: 'contactText', type: 'array', of: [{ type: 'block' }], title: 'Contact Text' }),
    defineField({
      name: 'officeLocations',
      title: 'Office Locations',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Name' },
            { name: 'address', type: 'string', title: 'Address' },
            { name: 'mapEmbedUrl', type: 'url', title: 'Map Embed URL' }
          ]
        }
      ]
    }),
    defineField({ name: 'metadata', type: 'metadata' })
  ]
})
