import type React from "react";
import { FaHandshake } from "react-icons/fa";
import Lottie from "react-lottie-player";
import Business from "../../../public/json/Start Your Own Franchise Business.json";

const FranchiseServices: React.FC = () => {
  return (
    <section
      id="StartYourOwnFranchiseBusiness"
      className="max-w-7xl mx-auto pb-16 mt-20 lg:mt-0 px-4 md:px-8"
    >
      <div className="flex flex-col items-center pb-6 ">
        <div className=" flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2
              data-aos="fade-up"
              data-aos-duration="1100"
              className="text-2xl md:text-4xl font-bold headingColor  mb-4"
            >
              Start Your Own Franchise Business?
            </h2>

            <p
              data-aos="fade-up"
              data-aos-duration="1300"
              className="contentColor text-base lg:text-lg contentFont leading-relaxed mb-8"
            >
              Starting a new franchise can be an exciting yet challenging
              journey. As you embark on this venture, you may encounter various
              matters. Having the right support can make a significant
              difference in overcoming hurdles and ensuring a smooth operational
              launch.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="md:w-1/2 relative will-change-transform"
          >
            <Lottie
              loop
              animationData={Business}
              play
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1400" className="space-y-6">
          <h3 className="text-2xl md:text-4xl font-bold headingColor mb-6">
            Service we offered
          </h3>
          <div
            data-aos="fade-up"
            data-aos-duration="1300"
            className="flex items-start"
          >
            <div className="bg-blue-100 p-2 rounded-sm mr-4 mt-1">
              <FaHandshake className="headingColor text-xl" />
            </div>
            <div>
              <h4 className="text-sm contentFont bg-blue-100 contentFont px-3 w-fit py-1 rounded-sm font-bold headingColor uppercase mb-2">
                INDEPENDENT FRANCHISE BUSINESS SUPPORT
              </h4>
              <p className=" contentFont contentColor">
                We provide comprehensive assistance to help you establish your
                own franchise business with minimal effort. From consultation to
                franchise options, we make running a franchise straightforward
                and seamless.
              </p>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1400"
            className="flex items-start"
          >
            <div className="bg-blue-100 p-2 rounded-sm mr-4 mt-1">
              <FaHandshake className="headingColor text-xl" />
            </div>
            <div>
              <h4 className="text-sm font-bold contentFont bg-blue-100 px-3 w-fit py-1 rounded-sm headingColor contentFont uppercase mb-2">
                FEASIBILITY ANALYSIS OF YOUR CHOSEN FRANCHISE
              </h4>
              <p className=" contentFont contentColor">
                If you've already selected a franchise model, we'll assess its
                feasibility and provide the guidance you need to make an
                informed decision.
              </p>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="flex items-start"
          >
            <div className="bg-blue-100 p-2 rounded-sm mr-4 mt-1">
              <FaHandshake className="headingColor text-xl" />
            </div>
            <div>
              <h4 className="text-sm font-bold contentFont bg-blue-100 px-3 w-fit py-1 rounded-sm headingColor contentFont uppercase mb-2">
                FRANCHISE SUPPORT FOR ESTABLISHED BUSINESS OWNERS
              </h4>
              <p className=" contentFont contentColor">
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
