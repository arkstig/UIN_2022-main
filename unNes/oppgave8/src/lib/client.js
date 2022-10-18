import sanityClient from '@sanity/client'

// Nøkler sanity trenger for å fungere
// Disse nøklene må legges i .env filen
const options = {
  projectId: 'y3dyu10s',
  dataset: 'production',
  apiVersion: '2021-03-25',
}

const client = sanityClient({
  ...options,
  useCdn: false,
})

export default client
