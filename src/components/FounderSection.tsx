import type React from "react";

const FounderSection: React.FC = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img
            src="/home/founder.png"
            alt="Mr. Safwan CK"
            className="w-full max-w-md h-auto rounded-lg mx-auto"
          />
        </div>
        <div>
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-md text-sm font-medium mb-4">
            FOUNDER'S NOTE
          </div>
          <p className="text-gray-700 mb-8">
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
          <h3 className="text-xl font-bold text-blue-700">Mr. Safwan CK</h3>
          <p className="text-gray-600">Founder - Franchise Media</p>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
