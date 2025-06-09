import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Title' }),
    defineField({ name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' } }),
    defineField({ name: 'author', type: 'reference', to: [{ type: 'teamMember' }] }),
    defineField({ name: 'publishedAt', type: 'datetime', title: 'Published At' }),
    defineField({ name: 'body', type: 'array', of: [{ type: 'block' }], title: 'Body' }),
    defineField({ name: 'tags', type: 'array', of: [{ type: 'string' }], title: 'Tags' }),
    defineField({ name: 'coverImage', type: 'image', title: 'Cover Image' }),
    defineField({ name: 'metadata', type: 'metadata' })
  ]
})
