const Actor = {
  title: 'actor',
  name: 'actor',
  type: 'document',
  fields: [
    {
      title: 'fullname',
      name: 'fullname',
      type: 'string',
      description: 'Skriv inn fullt navn på author',
    },
    {
      title: 'slug',
      name: 'slug',
      type: 'slug',
      description: 'dette er den unike url-en',
      validation: (rule) => rule.required(),
      options: {
        source: 'fullname',
      },
    },
  ],
}

export default Actor
