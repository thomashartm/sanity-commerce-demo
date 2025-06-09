import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', title: 'Name' }),
    defineField({ name: 'role', type: 'string', title: 'Role' }),
    defineField({ name: 'bio', type: 'array', of: [{ type: 'block' }], title: 'Bio' }),
    defineField({ name: 'photo', type: 'image', title: 'Photo' }),
    defineField({
      name: 'socialLinks',
      type: 'array',
      title: 'Social Links',
      of: [{ type: 'object', fields: [ { name: 'platform', type: 'string' }, { name: 'url', type: 'url' } ] }]
    }),
    defineField({ name: 'metadata', type: 'metadata' })
  ]
})
