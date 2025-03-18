import type React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { TagButtonWithLine } from "./reuse/Buttons";

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Nithin Chandran",
      title: "Founder,Vollmond Agro Processing",
      image: "/testmonia/user.png",
      quote:
        " We came to franchise media for branding & Communication purpose.Without thinking twice we can say that , they rised to our level of expectation.What keep them out of crowd is ceativity and service.",
      bg: false,
      duration: 1000,
    },
    {
      name: "Nandan",
      title: "sales head - Sobha ltd., Kozhikode",
      image: "/testmonia/user.png",
      quote:
        "Collaborating with Mr. Safwan of Western Ad Factory has been a pleasure. As he expands to Franchise Media, clients can expect enhanced services. His team’s four-year association with Sobha Ltd., Kozhikode, reflects their customer-centric approach, creativity, and timely execution. Wishing him and Franchise Media success in Kerala’s advertising industry.",
      bg: true,
      duration: 1200,
    },
    {
      name: "Mohammed Shafi",
      title: "Club Sulaimani",
      image: "/testmonia/user.png",
      quote:
        "We have grown in ways we have never dreamed of, Franchise media is a partner every aspirational business need.",
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
            className="text-2xl md:text-4xl font-bold headingColor mb-4"
          >
            What Our Customers Say
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="1300"
            className="contentColor text-base lg:text-lg contentFont max-w-3xl "
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
                  <h4 className="font-bold text-base ">{testimonial.name}</h4>
                  <p className=" text-sm contentFont">{testimonial.title}</p>
                </div>
              </div>
              <p className=" flex-grow text-base lg:text-lg contentFont">
                {testimonial.quote}
              </p>
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
