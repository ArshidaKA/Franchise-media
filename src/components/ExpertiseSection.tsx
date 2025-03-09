import type React from "react";

const ExpertiseSection: React.FC = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-md text-sm font-medium mb-4">
            OUR EXPERTISE
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
            Franchise Your Business?
          </h2>
          <p className="text-gray-700 mb-8">
            If you have a successful business model, it's important to pursue
            growth that is secure, sustainable, and requires less capital
            investment. To plan this process effectively, you will need expert
            guidance for different areas. Reach out to us for franchise
            consulting, development, implementation, marketing phase and
            discover how franchising can help you unlock new avenues for growth!
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg cursor-pointer transition duration-300">
            Explore Services
          </button>
        </div>
        <div className="flex justify-center">
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
