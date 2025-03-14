import type React from "react";
import { Button } from "./reuse/Buttons";

const HeroSection: React.FC = () => {
  return (
    <section className=" px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h1
            data-aos="fade-up"
            data-aos-duration="1100"
            className="text-4xl md:text-5xl lg:text-6xl font-semibold headingColor leading-tight"
          >
            A Thriving Platform for Business Expertise!
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="1300"
            className="mt-6 contentColor contentFont text-lg mb-6"
          >
            Empowering your journey to global financial success through
            customised and personalised financial Consulting for every client
          </p>
          <Button label="Request for a free consultation" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="order-1 md:order-2"
        >
          <img
            src="/hero/hero.png"
            alt="World Map Illustration"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
