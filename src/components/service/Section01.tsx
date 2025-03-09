import type React from "react";
import { FaHandshake } from "react-icons/fa";

const FranchiseServices: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto pb-16 px-4 md:px-8">
      <div className="flex flex-col items-center pb-6 ">
        <div className=" flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-indigo-800 mb-4">
              Start Your Own Franchise Business?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-8">
              Starting a new franchise can be an exciting yet challenging
              journey. As you embark on this venture, you may encounter various
              matters. Having the right support can make a significant
              difference in overcoming hurdles and ensuring a smooth operational
              launch.
            </p>
          </div>

          <div className="md:w-1/2 relative">
            <img
              src="/service/03.png"
              alt="Franchise Business Illustration"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-indigo-800 mb-6">
            Service we offered
          </h3>
          <div className="flex items-start">
            <div className="bg-blue-100 p-2 rounded-md mr-4 mt-1">
              <FaHandshake className="text-blue-500 text-xl" />
            </div>
            <div>
              <h4 className="text-sm bg-blue-100 px-3 w-fit py-1 rounded-md font-bold text-indigo-800 uppercase mb-2">
                INDEPENDENT FRANCHISE BUSINESS SUPPORT
              </h4>
              <p className="text-gray-700">
                We provide comprehensive assistance to help you establish your
                own franchise business with minimal effort. From consultation to
                franchise options, we make running a franchise straightforward
                and seamless.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-blue-100 p-2 rounded-md mr-4 mt-1">
              <FaHandshake className="text-blue-500 text-xl" />
            </div>
            <div>
              <h4 className="text-sm font-bold bg-blue-100 px-3 w-fit py-1 rounded-md text-indigo-800 uppercase mb-2">
                FEASIBILITY ANALYSIS OF YOUR CHOSEN FRANCHISE
              </h4>
              <p className="text-gray-700">
                If you've already selected a franchise model, we'll assess its
                feasibility and provide the guidance you need to make an
                informed decision.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-blue-100 p-2 rounded-md mr-4 mt-1">
              <FaHandshake className="text-blue-500 text-xl" />
            </div>
            <div>
              <h4 className="text-sm font-bold bg-blue-100 px-3 w-fit py-1 rounded-md text-indigo-800 uppercase mb-2">
                FRANCHISE SUPPORT FOR ESTABLISHED BUSINESS OWNERS
              </h4>
              <p className="text-gray-700">
                If you already have an established business and wish to explore
                other franchise business opportunities, you can rely on us for
                expert consultation and franchise assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseServices;
