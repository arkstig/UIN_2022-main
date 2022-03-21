import client from '../client'

const eventFields = `
  title,
  'slug': slug.current,
  image,

`

const actorFields = `
title,
  "relatedMovies": *[_type=='movies' && references(^._id)], 
  	title,
  	slug,
`

const actorFelt = `
title,
'slug': slug.current,
`

export const getMovies = async () => {
  const data = await client.fetch(`*[_type == "movies"]{${eventFields}}`)
  return data
}

export const getActors = async () => {
  const data = await client.fetch(`*[_type == "actors"]{${actorFelt}}`)
  return data
}

export async function getActorBySlug(slug) {
  const data = await client.fetch(
    `*[_type == 'actors' && slug.current == $slug]{${actorFields}}`,
    { slug }
  )

  return data?.[0]
}

export async function getMovieBySlug(slug) {
  const data = await client.fetch(
    `*[_type == 'movies' && slug.current == $slug]{${eventFields}}`,
    { slug }
  )

  return data?.[0]
}
