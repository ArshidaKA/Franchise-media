// src/hooks/useSanityData.js
import { useState, useEffect } from 'react'
import { client } from '../lib/sanity'

// Query to get all posts
const getAllPostsQuery = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  franchiseCategory,
  body
}`

// Query to get single post by slug
const getPostBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  franchiseCategory,
  body
}`

export const usePosts = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
        const data = await client.fetch(getAllPostsQuery)
        setPosts(data)
        setError(null)
      } catch (err) {
        setError('Failed to fetch posts')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  return { posts, loading, error }
}

export const usePost = (slug) => {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return
      
      try {
        setLoading(true)
        const data = await client.fetch(getPostBySlugQuery, { slug })
        setPost(data)
        setError(null)
      } catch (err) {
        setError('Failed to fetch post')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [slug])

  return { post, loading, error }
}