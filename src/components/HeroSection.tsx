import type React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className=" px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#2B3A8F] leading-tight">
            A Thriving Platform for Business Expertise!
          </h1>
          <p className="mt-6 text-gray-700 text-lg">
            Empowering your journey to global financial success through
            customised and personalised financial Consulting for every client
          </p>
          <button className="mt-8 bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg cursor-pointer transition duration-300">
            Request for a free consultation
          </button>
        </div>
        <div className="order-1 md:order-2">
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
