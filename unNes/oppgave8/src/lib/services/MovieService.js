import client from '../client'

const movieFields = `
title,
_id,
actor->{fullname}, 
slug
`

export const getMovies = async () => {
  const data = await client.fetch(`*[_type == 'movie']{${movieFields}}`)
  return data
}
