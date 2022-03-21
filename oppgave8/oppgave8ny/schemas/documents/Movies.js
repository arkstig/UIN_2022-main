const movies = {
  title: 'Movies',
  name: 'movies',
  type: 'document',
  fields: [
    {
      title: 'Tittel',
      name: 'title',
      type: 'string',
      description: 'Tittel på filmen',
    },

    {
      title: 'Actors',
      name: 'actors',
      type: 'reference',
      to: [{ type: 'actors' }],
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

export default movies
