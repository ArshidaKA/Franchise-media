import type React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { TagButtonWithLine } from "./reuse/Buttons";

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Grace Turner",
      title: "Director",
      image: "/home/male.png",
      quote:
        "Financial expertise has made a significant impact on our nonprofit financial stability, allowing us to better serve our community",
      bg: false,
      duration: 1000,
    },
    {
      name: "Mohammed Shafi",
      title: "Club Sulaimani",
      image: "/home/male.png",
      quote:
        "We have grown in ways we have never envisioned. Franchise media is a partner every aspirational business needs.",
      bg: true,
      duration: 1200,
    },
    {
      name: "Alex Walker",
      title: "Attorney",
      image: "/home/male.png",
      quote:
        "Estate planning is crucial, and they made the process seamless and stress-free. I can rest assured knowing family's future is secure",
      bg: false,
      duration: 1400,
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 ">
      <div className="max-w-7xl mx-auto">
        <div className=" mb-12">
          <TagButtonWithLine label="TESTIMONIALS" />
          <h2
            data-aos="fade-up"
            data-aos-duration="1100"
            className="text-3xl md:text-4xl font-bold headingColor mb-4"
          >
            What Our Customers Say
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="1300"
            className="contentColor contentFont max-w-3xl "
          >
            Discover the Success Stories and Satisfaction of Clients Who Have
            Benefited from Our Expertise and Personalized Financial Guidance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              data-aos="fade-up"
              data-aos-duration={testimonial.duration}
              key={index}
              className={`${
                testimonial.bg === true
                  ? "bg-gradient-to-b from-[#2b3a8f] to-[#0c1129]  text-white"
                  : "bg-white contentColor"
              } p-6 rounded-tl-[35px] rounded-br-[35px] border-2 border-blue-800 flex flex-col h-full`}
            >
              <div className="flex  items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="">
                  <h4 className="font-bold ">{testimonial.name}</h4>
                  <p className=" text-sm contentFont">{testimonial.title}</p>
                </div>
              </div>
              <p className=" flex-grow contentFont">{testimonial.quote}</p>
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
