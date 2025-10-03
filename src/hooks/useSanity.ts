// src/hooks/useSanity.ts
import { useState, useEffect } from "react";
import { client } from "../lib/sanity";
import { PortableTextBlock } from "@portabletext/types";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  mainImage?: { asset: any; alt?: string };
  publishedAt: string;
  franchiseCategory?: string;
  body?: PortableTextBlock[];
}

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data: Post[] = await client.fetch(`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
          _id,
          title,
          slug,
          excerpt,
          mainImage,
          publishedAt,
          franchiseCategory,
          body
        }`);
        setPosts(data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch posts");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return { posts, loading, error };
};

export const usePost = (slug?: string) => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;

      try {
        setLoading(true);
        const data: Post = await client.fetch(
          `*[_type == "post" && slug.current == $slug][0] {
            _id,
            title,
            slug,
            excerpt,
            mainImage,
            publishedAt,
            franchiseCategory,
            body
          }`,
          { slug }
        );
        setPost(data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch post");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  return { post, loading, error };
};
