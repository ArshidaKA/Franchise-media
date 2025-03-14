import type React from "react";
import { Button, TagButtonWithLine } from "./reuse/Buttons";

const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* First Service */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-20">
          <div className="order-2 md:order-1">
            <img
              data-aos="fade-up"
              data-aos-duration="1600"
              src="/home/business02.png"
              alt="Marketing Service Illustration"
              className="w-full max-w-md h-auto mx-auto"
            />
          </div>
          <div className="order-1 md:order-2">
            <TagButtonWithLine label="our Expertise" />
            <h2
              data-aos="fade-up"
              data-aos-duration="1100"
              className="text-3xl md:text-4xl font-bold headingColor mb-6"
            >
              Franchise Marketing Service
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="1300"
              className="contentColor contentFont mb-8"
            >
              If you have a successful business model, it's important to pursue
              growth that is secure, sustainable, and requires less capital
              investment. To plan this process effectively, you will need expert
              guidance for different areas. Reach out to us for franchise
              consulting, development, implementation, marketing phase and
              discover how franchising can help you unlock new avenues for
              growth!
            </p>

            <Button
              navigateTo="Franchise Marketing Service"
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
              className="text-3xl md:text-4xl font-bold headingColor mb-6"
            >
              Start Your Own Franchise Business?
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="1300"
              className="contentColor contentFont mb-8"
            >
              Starting a new franchise can be an exciting yet challenging
              journey. As you embark on this venture, you may encounter various
              matters. Having the right support can make a significant
              difference in overcoming hurdles and ensuring a smooth operational
              launch.
            </p>

            <Button label="Explore Services" />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1600"
            className="flex justify-center"
          >
            <img
              src="/home/business03.png"
              alt="Start Franchise Illustration"
              className="w-full max-w-md h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
