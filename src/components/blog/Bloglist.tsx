import { Helmet } from "react-helmet-async";
import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import blogPosts, { BlogPost } from "../../data/blog";

const BlogList: React.FC = () => {
  const sortedPosts = [...blogPosts].sort((a, b) => {
    const dateA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
    const dateB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
    return dateB - dateA;
  });

  return (
    <>
      <Helmet>
        <title>Franchise Insights & Articles | Franchise Media</title>
        <meta
          name="description"
          content="Stay updated with the latest franchise news, business insights, and expert tips from Franchise Media to grow your brand and franchise network."
        />
        <meta
          name="keywords"
          content="franchise insights, franchise blog, business tips, franchise growth, franchise consulting articles"
        />
        <meta property="og:title" content="Franchise Insights & Articles | Franchise Media" />
        <meta property="og:description" content="Franchise Media's latest franchise business insights, strategies, and articles for entrepreneurs." />
        <meta property="og:image" content="https://yourdomain.com/og-image-blog.jpg" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://yourdomain.com/blogs" />
      </Helmet>

      <section
        className="px-4 md:px-12 lg:px-20 py-12"
        data-aos="fade-up"
        data-aos-duration={1000}
      >
        <h3 className="text-2xl md:text-4xl font-bold text-indigo-500 mb-10 text-center md:text-left">
          News, insights and more
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {sortedPosts.map((post: BlogPost) => (
            <Link key={post.id} to={`/blog/${post.slug}`} className="group">
              <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500 h-48 bg-gray-100 flex items-center justify-center">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h4 className="mt-4 text-xl md:text-2xl font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300 line-clamp-2">
                {post.title}
              </h4>

              <p className="mt-2 text-gray-600 text-sm md:text-base line-clamp-3">
                {post.excerpt ||
                  post.content?.split("           ")[0] ||
                  "No description available..."}
              </p>

              <div className="mt-3 flex items-center text-indigo-500 font-semibold group-hover:gap-2 transition-all duration-300">
                Read more <FiArrowRight />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default BlogList;
