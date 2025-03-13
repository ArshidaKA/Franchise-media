export default function Franchisable() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 font-sans">
      {/* Blog Header */}
      <div className="mb-4">
        <h2 className="text-blue-700 font-medium text-lg">Blog</h2>
      </div>

      {/* Blog Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-6">
        Why Franchising Is the Safer Option
      </h1>

      {/* Featured Image */}
      <div className="mb-6">
        <img
          src="/blog/top01.png"
          alt="People meeting in a restaurant with brick walls and plants"
          className="w-full h-auto rounded-md"
        />
      </div>

      {/* Blog Content */}
      <div className="space-y-4 text-gray-800 leading-relaxed">
        <p>
          Startup culture is taking over the modern world and is quickly
          becoming a popular choice for youngsters. A great place to start your
          entrepreneurial journey is deciding whether you want to build your own
          business from scratch - study the industry, do your research, build
          your product based on market needs. Or you could just franchise!
          Choose a well-flourished business that has already established itself.
        </p>

        <p>
          But how is becoming a franchise owner the safer option? The biggest
          advantage of owning a franchise is - you are investing in a business
          that is already tested and proven. The risks relating to profit and
          profit are lowered to quite a good extent, which helps a lot,
          especially if you do not have previous experience in the business.
        </p>

        <p>
          Launching your own business from the ground up poses a multitude of
          challenges, including growing a customer base, establishing brand name
          and reputation, and managing it all with few effective forms of
          support or guidance. These challenges can make or break your business,
          which is why statistically 90% of startups fail within two years of
          launching!
        </p>

        <p>
          What if you had hands-on support and an established operational system
          to kick off your business with? That's exactly what franchising
          offers. It's not just about using the brand name that is already
          widely hot, it is a proven concept that entrepreneurs who invest in
          franchises with a good business model are more successful. They have
          the advantage of established operations and processes compared to
          those launching their startups from scratch.
        </p>
      </div>
    </div>
  );
}
