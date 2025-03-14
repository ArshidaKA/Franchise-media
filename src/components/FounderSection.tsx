import type React from "react";
import { TagButtonWithLine } from "./reuse/Buttons";

const FounderSection: React.FC = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-4 lg:gap-0 items-center">
        <div data-aos="fade-up" data-aos-duration="1400">
          <img
            src="/home/founder.png"
            alt="Mr. Safwan CK"
            className=" h-[30rem] rounded-lg mx-auto object-cover"
          />
        </div>
        <div className="mt-8 md:mt-0">
          <TagButtonWithLine label="Founder’s Note" />
          <p
            data-aos="fade-up"
            data-aos-duration="1200"
            className="contentColor contentFont text-base lg:text-lg mb-8"
          >
            "The pioneering franchise consulting company in Kerala, Franchise
            Media, is dedicated to empowering entrepreneurs and businesses by
            providing comprehensive and tailored solutions in the franchising
            landscape. Franchising holds immense potential for economic
            development, and we believe that with the right support and
            expertise, businesses can thrive. So, our focus is to facilitate
            growth and success for both aspiring franchisees and established
            franchisors, guiding you through every step of your business
            journey. Our approach is client-centric, ensuring that we listen to
            your needs and tailor our services to meet your specific goals.
            Whether you are looking to launch a franchise, expand your existing
            business, or seek guidance on best practices for your new franchise
            thought, we are here to assist you every step of the way!"
          </p>
          <h3
            data-aos="fade-up"
            data-aos-duration="1200"
            className="text-xl font-bold headingColor"
          >
            Mr. Safwan CK
          </h3>
          <p
            data-aos="fade-up"
            data-aos-duration="1200"
            className="headingColor contentFont"
          >
            Founder - Franchise Media
          </p>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
