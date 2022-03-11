import sanityClient from '@sanity/client'

const options = {
  projectId: 'rdi3owlj',
  dataset: 'production',
  apiVersion: '2021-03-25',
}

const client = sanityClient({
  ...options,
  useCdn: false,
})

export default client
