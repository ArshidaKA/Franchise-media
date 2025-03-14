import type React from "react";
import expert from '../../../public/json/A Bunch of Expert Teams.json'
import Lottie from "react-lottie-player";


const WhoAreWe: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Who Are We Section */}
      <section className="max-w-7xl mx-auto py-16 px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center headingColor mb-8">
          Who Are we?
        </h2>

        <p className="text-center contentFont text-lg max-w-4xl mx-auto contentColor leading-relaxed">
          <span className="font-bold  headingColor">Franchise Media</span>, is
          the first franchise business provider & consultant in Kerala, which is
          working across several industries, 100 plus brands to bring out the
          best franchise opportunities for all the business enthusiasts out
          there. From the establishing year 2016, The company offered the
          structure to grow, develop, expand, and flourish the business models
          of the franchise industries. From franchise strategic planning to
          franchise marketing, our dedicated team is equipped with extensive
          resources to offer the expertise, guidance, and support necessary to
          expand a brand via the franchise distribution model.
        </p>

        <div className="flex justify-center mt-6">
          <div className="h-1 w-32 bg-green-500"></div>
        </div>
      </section>

      {/* Expert Teams Section */}
      <section className="max-w-6xl mx-auto  px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold headingColor mb-6">
              A Bunch of Expert Teams!
            </h2>
            <p className="contentColor contentFont text-lg leading-relaxed">
              We have experts by innovative ideas and extensive experience in
              the field of franchise consulting. Our team consists of business
              consultants, marketing specialists, creative designers, technology
              professionals, chartered accountants, legal advisors, and more. We
              learn, analyse, and customize each of our solutions to align with
              your specific business circumstances. We achieve this by
              supporting you every step of the way throughout your journey!
            </p>
          </div>
          <div className="md:w-1/2">
            <Lottie
              loop
              animationData={expert}
              play
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="max-w-6xl mx-auto py-7 px-4 md:px-8 bg-white">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-6 text-center">
            <h2 className="text-3xl md:text-4xl  font-bold mb-6">Vision</h2>
            <p className="text-gray-700 text-lg contentFont leading-relaxed">
              Our vision is to make the dream of entrepreneurship accessible to
              every like-minded individual and Catalyse franchising globally
              too.
            </p>
          </div>

          <div className="hidden md:block w-px bg-green-500 mx-auto"></div>

          <div className="md:w-1/2 p-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Mission</h2>
            <p className="text-gray-700 text-lg contentFont leading-relaxed">
              Our mission is to collaborate with business experts, franchisees,
              and all stakeholders, enhancing their productivity and developing
              strategies for rapid growth.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoAreWe;
