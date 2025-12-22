import { Link } from "react-router-dom";
import data from "../FranchiseOpportunties/FranchiseOppertunities";

const BusinessOpportunities = () => {
  return (
    <div className="py-6 md:py-16 px-6 md:px-12 lg:px-20">

      <h2
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-2xl md:text-4xl font-bold headingColor mb-6"
      >
        Top Business Opportunities
      </h2>

      {/* Horizontal Scroll Wrapper */}
      <div
        className="
          flex 
          space-x-6 
          overflow-x-auto 
          pb-4 
          hide-scrollbar 
          snap-x snap-mandatory
        "
      >
        {data.map((item, index) => (
          <Link
            key={index}
            to={`/business/${item.slug}`}
            className="min-w-[260px] md:min-w-[300px] snap-start"
          >
            <div
              data-aos="fade-up"
              data-aos-duration="1200"
              className="
                border rounded-xl p-4 shadow-sm 
                hover:shadow-md transition bg-white 
                w-full h-full cursor-pointer
              "
              style={{ borderColor: "#DCEBFF" }}
            >
              {/* Image */}
              <div
                data-aos="zoom-in"
                className="w-full h-36 flex items-center justify-center rounded-md"
                style={{ background: "#F6F9FF" }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full object-contain"
                />
              </div>

              {/* Category */}
              <p
                data-aos="fade-right"
                className="text-sm mt-3"
                style={{ color: "#2C3EBD" }}
              >
                {item.category}
              </p>

              {/* Title */}
              <h3
                data-aos="fade-right"
                className="text-lg font-semibold mt-1"
                style={{ color: "#1F2B6C" }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <div
                data-aos="fade-left"
                className="mt-3 text-sm"
                style={{ color: "#4A4A4A" }}
              >
                <p>
                  {item.description.length > 80 ? (
                    <>
                      {item.description.substring(0, 100)}
                      <span className="text-gray-500 text-xs"> more..</span>
                    </>
                  ) : (
                    item.description
                  )}
                </p>
              </div>

              {/* Button */}
              <button
                data-aos="fade-up"
                data-aos-duration="1400"
                className="mt-6 bg-green-500 text-black 
                text-base font-medium py-2 px-6 rounded-lg 
                cursor-pointer transition duration-300 hover:bg-green-600"
              >
                Know More
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BusinessOpportunities;
