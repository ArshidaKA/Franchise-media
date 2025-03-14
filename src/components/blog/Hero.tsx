import { Link } from "react-router-dom"


const Hero = () => {



  return (
    <div className="max-w-7xl px-6 md:px-12 lg:px-20 mx-auto py-16">
      {/* Blog Section */}
      <section className="mb-16 ">
        <h2 className="text-3xl  font-bold headingColor mb-2">Blog</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-indigo-400 mb-8">
          News, insights and more
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Blog Post 1 */}
          <Link to="/safeOption">
            <div>
              <div className="rounded-4xl overflow-hidden mb-4">
                <img
                  src="/blog/top01.png"
                  alt="People in a restaurant"
                  className="w-full h-64 object-cover"
                />
              </div>
              <h4 className="text-2xl font-bold headingColor mb-2">
                Why Franchising Is the Safer Option
              </h4>
              <p className="contentColor contentFont text-lg">
                Startup culture is taking over the modern world and is quickly
                becoming a popular choice for youngsters. A great place to start
                your...
              </p>
            </div>
          </Link>

          {/* Blog Post 2 */}
          <Link to="/franchisable">
            <div>
              <div className="rounded-4xl overflow-hidden mb-4">
                <img
                  src="/blog/top02.png"
                  alt="McDonald's restaurant"
                  className="w-full h-64 object-cover"
                />
              </div>
              <h4 className="text-2xl font-bold headingColor mb-2">
                Is My Business Franchisable?
              </h4>
              <p className="contentColor contentFont text-lg">
                The franchise industry, although a relatively new concept in
                India, is making a significant mark in the market. For many
                business owners,...
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Media Section */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-400 mb-8">
          Media
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 justify-between items-center gap-3">
          {/* Large Image */}
          <div className="md:col-span-2">
            <div className="rounded-4xl   ">
              <img
                src="/blog/bottomMain.png"
                alt="Person with camera"
                className="lg:w-[40rem] w-full   object-cover"
              />
            </div>
          </div>

          {/* Small Images Column */}
          <div className="space-y-2 ">
            <div className=" rounded-4xl overflow-hidden shadow-md">
              <img
                src="/blog/bottom01.png"
                alt="Sunset landscape"
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="bg-gray-100 rounded-4xl overflow-hidden shadow-md">
              <img
                src="/blog/bottom02.png"
                alt="Tree at sunset"
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="bg-gray-100 rounded-4xl overflow-hidden shadow-md">
              <img
                src="/blog/bottom03.png"
                alt="Field at sunset"
                className="w-full h-40 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero