export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'mainImage',
    },
    {
      name: 'href',
      type: 'url',
      title: 'Href'
    },
    {
      name: 'repo',
      type: 'url',
      title: 'Repo'
    },
    {
      name: 'caseStudy',
      title: 'Case Study',
      type: 'blockContent'
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'tags',
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return Object.assign({}, selection)
    },
  },
}