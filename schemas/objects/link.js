export default {
  name: 'link',
  type: 'object',
  title: 'Link',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'href',
      title: 'Href',
      type: 'url'
    },
    {
      name: 'svg',
      title: 'Svg',
      type: 'code',
      options: {
        language: 'html'
      }
    }
  ],
}