const actors = {
  title: 'Actors',
  name: 'actors',
  type: 'document',
  fields: [
    {
      title: 'Tittel',
      name: 'title',
      type: 'string',
      description: 'Nav på skuespiller',
    },
    {
      type: 'slug',
      name: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
      validation: (Rule) => Rule.required(),
    },
  ],
}

export default actors
