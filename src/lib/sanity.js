// src/lib/sanity.js
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'ma3xnu7x', // Find this in sanity.io/manage
  dataset: 'production',
  useCdn: true, // Set to false for fresh data on statically generated sites
  apiVersion: '2025-09-30', // Use current date in YYYY-MM-DD format
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => {
  return builder.image(source)
}