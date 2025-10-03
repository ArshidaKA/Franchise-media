// src/components/blog/BlogList.tsx
import React from "react";
import { Link } from "react-router-dom";
import { usePosts } from "../../hooks/useSanity";
import { urlFor } from "../../lib/sanity";
import { FiArrowRight } from "react-icons/fi";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  mainImage?: { asset: any; alt?: string };
  body?: { children: { text: string }[] }[];
}

const BlogList: React.FC = () => {
  const { posts, loading, error } = usePosts();

  if (loading) return <div className="text-center py-10 text-gray-600">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Error: {error}</div>;

  return (
    <section className="px-4 md:px-12 lg:px-20 py-12" data-aos="fade-up" data-aos-duration={1000}>
      <h3 className="text-2xl md:text-4xl font-bold text-indigo-500 mb-10 text-center md:text-left">
        News, insights and more
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {posts.slice(0, 6).map(post => {
          const typedPost = post as Post;
          return (
            <Link key={typedPost._id} to={`/blog/${typedPost.slug.current}`} className="group">
              <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500">
                {typedPost.mainImage && (
                  <img
                    src={urlFor(typedPost.mainImage).width(600).height(400).url()}
                    alt={typedPost.mainImage.alt || typedPost.title}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>

              <h4 className="mt-4 text-xl md:text-2xl font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300 line-clamp-2">
                {typedPost.title}
              </h4>

              <p className="mt-2 text-gray-600 text-sm md:text-base line-clamp-3">
                {typedPost.excerpt || typedPost.body?.[0]?.children?.[0]?.text || "No description available..."}
              </p>

              <div className="mt-3 flex items-center text-indigo-500 font-semibold group-hover:gap-2 transition-all duration-300">
                Read more <FiArrowRight />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default BlogList;
