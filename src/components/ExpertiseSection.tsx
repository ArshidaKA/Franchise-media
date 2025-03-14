import type React from "react";
import { Button, TagButtonWithLine } from "./reuse/Buttons";


const ExpertiseSection: React.FC = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <TagButtonWithLine label="our Expertise" />
          <h2
            data-aos="fade-up"
            data-aos-duration="1100"
            className="text-2xl md:text-4xl font-bold headingColor mb-6"
          >
            Franchise Your Business?
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="1300"
            className="contentColor text-base lg:text-lg contentFont mb-8"
          >
            If you have a successful business model, it's important to pursue
            growth that is secure, sustainable, and requires less capital
            investment. To plan this process effectively, you will need expert
            guidance for different areas. Reach out to us for franchise
            consulting, development, implementation, marketing phase and
            discover how franchising can help you unlock new avenues for growth!
          </p>

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
            alt="Business People Illustration"
            className="w-full max-w-md h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
