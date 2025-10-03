// src/components/blog/BlogPost.tsx
import React from "react";
import { useParams } from "react-router-dom";
import { PortableTextBlock } from "@portabletext/types";
// import { PortableText } from "@portabletext/react";
import { usePost } from "../../hooks/useSanity";
import { urlFor } from "../../lib/sanity";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  mainImage?: { asset: any; alt?: string };
  publishedAt: string;
  franchiseCategory: string;
  body: PortableTextBlock[];
}



const BlogPost: React.FC = () => {
const { slug } = useParams<{ slug: string }>();
  const { post, loading, error } = usePost(slug);

  if (loading) return <div className="text-center py-10 text-gray-500">Loading post...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Error: {error}</div>;
  if (!post) return <div className="text-center py-10 text-gray-400">Post not found</div>;

  const typedPost = post as Post;

  // Convert blocks into plain text (to split into sentences)
  const allText = typedPost.body
    ?.map(block => (block.children ? block.children.map(child => child.text).join(" ") : ""))
    .join(" ") || "";

  const sentences = allText.split(/(?<=[.!?])\s+/); // split by sentence endings
  const introText = sentences.slice(0, 6).join(" "); // first 6 sentences
  const remainingText = sentences.slice(6).join(" "); // rest

  return (
    <article className="max-w-3xl mx-auto px-4 py-10">
      {/* Title */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{typedPost.title}</h1>
        <div className="flex justify-center gap-4 text-sm text-gray-500">
          <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full font-medium">
            {typedPost.franchiseCategory}
          </span>
          <span>
            {new Date(typedPost.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
      </header>

      {/* Intro (first 6 sentences) */}
      {introText && <p className="text-lg text-gray-700 leading-relaxed mb-6">{introText}</p>}

      {/* Hero Image */}
      {typedPost.mainImage && (
        <div className="my-8">
          <img
            src={urlFor(typedPost.mainImage).width(900).height(500).url()}
            alt={typedPost.mainImage.alt || typedPost.title}
            className="w-full rounded-2xl shadow-md object-cover"
          />
        </div>
      )}

      {/* Remaining text */}
      {remainingText && (
        <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
          <p>{remainingText}</p>
        </div>
      )}
    </article>
  );
};

export default BlogPost;
