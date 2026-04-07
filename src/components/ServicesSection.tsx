import type React from "react";
import { Button, TagButtonWithLine } from "./reuse/Buttons";

const ServicesSection: React.FC = () => {
  return (
    <section className=" md:pb-16 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* First Service */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-20">
          <div className="order-2 md:order-1">
            <img
              data-aos="fade-up"
              data-aos-duration="1600"
              src="/home/business02.png"
alt="Franchise marketing services in Kerala generating franchise leads"              className="w-full max-w-md h-auto mx-auto"
            />
          </div>
          <div className="order-1 md:order-2">
            <TagButtonWithLine label="our Expertise" />
            <h2
              data-aos="fade-up"
              data-aos-duration="1100"
              className="text-2xl md:text-4xl font-bold headingColor mb-6"
            >
              Franchise Marketing Service
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="1300"
              className="contentColor text-base lg:text-lg contentFont mb-8"
            >
              Our franchise marketing services help brands generate high-quality franchise leads
  across Kerala and the UAE. We create targeted campaigns using Google Ads, Meta Ads,
  and landing pages to attract serious investors and scale your franchise network.
            </p>

            <Button
              navigateTo="/service#FranchiseMarketingService"
              label="Explore Services"
            />
          </div>
        </div>

        {/* Second Service */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <TagButtonWithLine label="our Expertise" />
            <h2
              data-aos="fade-up"
              data-aos-duration="1100"
              className="text-2xl md:text-4xl font-bold headingColor mb-6"
            >
              Start Your Own Franchise Business?
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="1300"
              className="contentColor text-base lg:text-lg contentFont mb-8"
            >
              Looking to start a franchise business in Kerala? We help entrepreneurs choose the
  right franchise opportunities, understand investment requirements, and launch
  successfully with complete support including legal, operations, and marketing.
            </p>

            <Button
              navigateTo="/service#StartYourOwnFranchiseBusiness"
              label="Explore Services"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1600"
            className="flex justify-center"
          >
            <img
              src="/home/business03.png"
alt="Start a franchise business in Kerala with expert consulting support"              className="w-full max-w-md h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
