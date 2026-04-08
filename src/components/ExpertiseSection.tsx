import type React from "react";
import { Button, TagButtonWithLine } from "./reuse/Buttons";


const ExpertiseSection: React.FC = () => {
  return (
    <section className="py-6 md:py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <TagButtonWithLine label="our Expertise" />
          <h2
            data-aos="fade-up"
            data-aos-duration="1100"
            className="text-2xl md:text-4xl font-bold headingColor mb-6"
          >
Franchise Your Business with Expert Consultants?          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="1300"
            className="contentColor text-base lg:text-lg contentFont mb-8"
          >
            If you have a successful business model, our franchise consultants help you expand through structured franchise development, legal documentation, and scalable systems. We support businesses in Calicut, Malappuram, and across Kerala, as well as UAE expansion, ensuring sustainable growth with minimal risk and investment.
          </p>
            <p
            data-aos="fade-up"
            data-aos-duration="1300"
            className="contentColor text-base lg:text-lg contentFont mb-8"
          >
From franchise planning and SOP creation to marketing and franchisee recruitment, we provide end-to-end franchise consulting services tailored for startups and established brands.          </p>
          

          <Button
            navigateTo="/service#FranchiseYourBusiness"
            label="Explore Services"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1600"
          className="flex justify-center"
        >
          <img
            src="/home/business01.png"
alt="Franchise consulting services in Kerala by Franchise Media helping businesses expand"            className="w-full max-w-md h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
