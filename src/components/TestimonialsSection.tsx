import type React from "react";
import { FaQuoteRight } from "react-icons/fa";

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Grace Turner",
      title: "Director",
      image: "/home/male.png",
      quote:
        "Financial expertise has made a significant impact on our nonprofit financial stability, allowing us to better serve our community",
    },
    {
      name: "Mohammed Shafi",
      title: "Club Sulaimani",
      image: "/home/male.png",
      quote:
        "We have grown in ways we have never envisioned. Franchise media is a partner every aspirational business needs.",
    },
    {
      name: "Alex Walker",
      title: "Attorney",
      image: "/home/male.png",
      quote:
        "Estate planning is crucial, and they made the process seamless and stress-free. I can rest assured knowing family's future is secure",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-md text-sm font-medium mb-4">
            TESTIMONIALS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Discover the Success Stories and Satisfaction of Clients Who Have
            Benefited from Our Expertise and Personalized Financial Guidance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-tl-[35px] rounded-br-[35px] border-2 border-blue-800 flex flex-col h-full"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-blue-700">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-700 flex-grow">{testimonial.quote}</p>
              <div className="text-blue-300 mt-4 text-right">
                <FaQuoteRight size={24} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
