import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'metadata',
  title: 'Metadata',
  type: 'object',
  fields: [
    defineField({ name: 'seoTitle', type: 'string', title: 'SEO Title' }),
    defineField({ name: 'seoDesc', type: 'text', title: 'SEO Description' }),
    defineField({ name: 'keywords', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'slug', type: 'slug', title: 'Slug' }),
    defineField({ name: 'canonicalUrl', type: 'url', title: 'Canonical URL' }),
    defineField({ name: 'robots', type: 'string', title: 'Robots' }),
    defineField({
      name: 'openGraph',
      title: 'Open Graph',
      type: 'object',
      fields: [
        { name: 'title', type: 'string', title: 'Title' },
        { name: 'description', type: 'text', title: 'Description' },
        { name: 'image', type: 'image', title: 'Image' },
        { name: 'type', type: 'string', title: 'Type' }
      ]
    }),
    defineField({
      name: 'twitter',
      title: 'Twitter',
      type: 'object',
      fields: [
        { name: 'card', type: 'string', title: 'Card' },
        { name: 'site', type: 'string', title: 'Site' },
        { name: 'creator', type: 'string', title: 'Creator' }
      ]
    }),
    defineField({ name: 'locale', type: 'string', title: 'Locale' }),
    defineField({ name: 'market', type: 'string', title: 'Market' }),
    defineField({ name: 'translations', type: 'array', of: [{ type: 'reference', to: [{ type: 'metadata' }] }] }),
    defineField({
      name: 'slug_i18n',
      type: 'object',
      title: 'Localized Slug',
      fields: [
        { name: 'de', type: 'slug', title: 'German' },
        { name: 'en', type: 'slug', title: 'English' }
      ]
    }),
    defineField({ name: 'fallbackLocales', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'requiresAuth', type: 'boolean', title: 'Requires Auth' }),
    defineField({ name: 'allowedRoles', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'visibility', type: 'string', title: 'Visibility' }),
    defineField({
      name: 'permissions',
      type: 'object',
      title: 'Permissions',
      fields: [
        { name: 'view', type: 'boolean', title: 'View' },
        { name: 'edit', type: 'boolean', title: 'Edit' }
      ]
    }),
    defineField({ name: 'authRedirect', type: 'url', title: 'Auth Redirect' })
  ]
})
