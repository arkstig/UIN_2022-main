import client from '../client'

const actorFields = `
fullname,
_id,
slug, 
`

export const getActors = async () => {
  const data = await client.fetch(`*[_type == 'actor']{${actorFields}}`)
  return data
}
