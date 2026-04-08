import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { TagButtonWithLine } from "./reuse/Buttons";

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Nithin Chandran",
      title: "Founder, Vollmond Agro Processing",
      image: "/testmonia/user.png",
      quote:
        "We came to Franchise Media for branding & communication. Without thinking twice, we can say that they exceeded our expectations. What sets them apart is creativity and top-notch service.",
      location: "Kerala, India",
      bg: true,
      duration: 1000,
    },
    {
      name: "Nandan",
      title: "Sales Head - Sobha Ltd., Kozhikode",
      image: "/testmonia/user.png",
      quote:
        "His team's four-year association with Sobha Ltd., Kozhikode, reflects their customer-centric approach, creativity, and timely execution. Wishing him and Franchise Media success in Kerala's advertising industry.",
      location: "Kozhikode, Kerala",
      bg: true,
      duration: 1200,
    },
    {
      name: "Mohammed Shafi",
      title: "MD - Club Sulaimani",
      image: "/testmonia/user.png",
      quote:
        "We have grown in ways we never dreamed of. Franchise Media is a partner every aspirational business needs.",
      location: "Kerala, India",
      bg: true,
      duration: 1400,
    },
  ];

  // JSON-LD Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Franchise Media",
    "url": "https://thefranchisemedia.com",
    "logo": "https://thefranchisemedia.com/logo/logo.png",
    "review": testimonials.map((t) => ({
      "@type": "Review",
      "author": { "@type": "Person", "name": t.name },
      "datePublished": "2026-04-07",
      "reviewBody": t.quote,
      "reviewRating": { "@type": "Rating", "ratingValue": 5, "bestRating": 5 },
    })),
  };

  return (
    <section
      className="py-16 px-6 md:px-12 lg:px-20"
      aria-labelledby="testimonials-heading"
    >
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center md:text-left">
          <TagButtonWithLine label="TESTIMONIALS" />
          <h2
            id="testimonials-heading"
            data-aos="fade-up"
            data-aos-duration="1100"
            className="text-2xl md:text-4xl font-bold headingColor mb-4"
          >
            What Our Clients Say 
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="1300"
            className="contentColor text-base lg:text-lg contentFont max-w-3xl mx-auto md:mx-0"
          >
            Hear directly from our clients in Kozhikode, Malappuram, and across Kerala about how Franchise Media helped their businesses grow through franchise consulting, branding, and marketing solutions.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              data-aos="fade-up"
              data-aos-duration={t.duration}
              className={`${
                t.bg
                  ? "bg-gradient-to-b from-[#2b3a8f] to-[#0c1129] text-white"
                  : "bg-white contentColor"
              } p-6 rounded-tl-[35px] rounded-br-[35px] border-2 border-blue-800 flex flex-col h-full`}
            >
              <div className="flex items-center mb-4">
                <img
                  src={t.image}
                  alt={`Photo of ${t.name}, ${t.title}, ${t.location}`}
                  className="w-12 h-12 rounded-full mr-4 object-cover bg-gray-200"
                />
                <div>
                  <h3 className="font-bold text-base">{t.name}</h3>
                  <p className="text-sm contentFont">
                    {t.title}, <span className="italic">{t.location}</span>
                  </p>
                </div>
              </div>
              <p className="flex-grow text-base lg:text-lg contentFont">"{t.quote}"</p>
              <div className="text-blue-300 mt-4 text-right">
                <FaQuoteRight size={24} />
              </div>
            </blockquote>
          ))}
        </div>

        {/* Mobile Scroll */}
        <div className="md:hidden w-full overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex space-x-4" style={{ width: "max-content" }}>
            {testimonials.map((t, i) => (
              <blockquote
                key={i}
                data-aos="fade-up"
                data-aos-duration={t.duration}
                className={`${
                  t.bg
                    ? "bg-gradient-to-b from-[#2b3a8f] to-[#0c1129] text-white"
                    : "bg-white contentColor"
                } p-6 rounded-tl-[35px] rounded-br-[35px] border-2 border-blue-800 flex flex-col h-96 w-80`}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={t.image}
                    alt={`Photo of ${t.name}, ${t.title}, ${t.location}`}
                    className="w-12 h-12 rounded-full mr-4 object-cover bg-gray-200"
                  />
                  <div>
                    <h3 className="font-bold text-base">{t.name}</h3>
                    <p className="text-sm contentFont">
                      {t.title}, <span className="italic">{t.location}</span>
                    </p>
                  </div>
                </div>
                <p className="flex-grow text-base lg:text-lg contentFont">"{t.quote}"</p>
                <div className="text-blue-300 mt-4 text-right">
                  <FaQuoteRight size={24} />
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;