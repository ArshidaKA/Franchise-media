import React from "react";
import { useParams } from "react-router-dom";
import blogPosts, { BlogPost } from "../../data/blog";

// Helper function
const formatContent = (content?: string) => {
  if (!content) return null;
  return content.split("\n").map((line, idx) => {
    const trimmedLine = line.trim();
    if (!trimmedLine) return <br key={idx} />;
    if (trimmedLine.endsWith(":")) {
      return (
        <h4 key={idx} className="mt-6 mb-2 text-lg font-semibold">
          {trimmedLine}
        </h4>
      );
    }
    if (trimmedLine.startsWith("•")) {
      return (
        <li key={idx} className="ml-6 list-disc">
          {trimmedLine.slice(1).trim()}
        </li>
      );
    }
    return <p key={idx}>{trimmedLine}</p>;
  });
};

// Split into sentences
const splitIntoSentences = (text: string) => {
  return text.match(/[^.!?]+[.!?]+/g) || [text];
};

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post: BlogPost | undefined = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <p className="text-center py-10 text-red-500">Post not found.</p>;
  }

  const content = post.content ?? post.excerpt ?? "";
  const sentences = splitIntoSentences(content);

  const firstPart = sentences.slice(0, 6).join(" ");
  const remainingPart = sentences.slice(6).join(" ");

  return (
    <article className="max-w-3xl mx-auto px-4 py-10">
      {/* Title */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{post.title}</h1>
        {post.publishedAt && (
          <p className="text-gray-500 text-sm">
            
                        {new Date(post.publishedAt).toLocaleDateString()}
          </p>
        )}
      </header>

      {/* First 6 sentences */}
      <div className="text-base leading-relaxed font-sans">
        {formatContent(firstPart)}
      </div>

      {/* Image after 6 sentences */}
      {post.imageUrl && (
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-[400px] object-cover rounded-lg my-6"
        />
      )}

      {/* Remaining content */}
      <div className="text-base leading-relaxed font-sans">
        {formatContent(remainingPart)}
      </div>
    </article>
  );
};

export default BlogPostPage;
