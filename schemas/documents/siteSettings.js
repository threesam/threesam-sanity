export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: ['update', /*'create', 'delete',*/ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your blog for search engines and social media.'
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Image'
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'tags',
    },
    {
      name: 'author',
      type: 'reference',
      title: 'Founder',
      to: [{ type: 'author' }]
    }
  ]
}
