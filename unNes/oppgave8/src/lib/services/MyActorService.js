import client from '../client'

const fields = `
fullname,
_id,
"slug", slug.current
`

export const MyGetActors = async () => {
  const data = await client.fetch(
    `*[_type == "actor" && slug.current == $slug]{${fields}}`,
    { slug }
  )
  return data?.[0]
}
