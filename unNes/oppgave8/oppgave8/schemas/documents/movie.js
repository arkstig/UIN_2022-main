const Movie = {
  title: 'movie',
  name: 'movie',
  type: 'document',
  fields: [
    {
      title: 'tittel',
      name: 'title',
      type: 'string',
      description: 'Skriv inn navnet på filmen',
    },
    {
      title: 'actor',
      name: 'actor',
      type: 'reference',
      to: [{ type: 'actor' }],
    },
    {
      title: 'slug',
      name: 'slug',
      type: 'slug',
      description: 'dette er den unike url-en',
      validation: (rule) => rule.required(),
      options: {
        source: 'title',
      },
    },
  ],
}

export default Movie
