import { useState } from "react";

const Media = () => {
  // Main image for gallery
  const [mainImage, setMainImage] = useState("/gallery/2.png");

  // Small images list
  const smallImages = [
    { image: "/gallery/14.png", name: "Franchise Media gallery image showing business networking at franchise expo" },
    { image: "/gallery/3.png", name: "Franchise Media event photo highlighting franchise opportunities and partnerships" },
    { image: "/gallery/4.png", name: "Business owner consulting with Franchise Media representative at franchise exhibition" },
    { image: "/gallery/5.png", name: "Franchise Media engaging entrepreneurs about business expansion and franchising" },
    { image: "/gallery/6.png", name: "Entrepreneurs discussing franchise business models with Franchise Media" },
    { image: "/gallery/7.png", name: "Franchise Media networking with potential franchise partners at expo" },
    { image: "/gallery/8.png", name: "Business collaboration showcased in Franchise Media gallery event photo" },
    { image: "/gallery/9.png", name: "Franchise Media consultation booth with entrepreneurs at franchise show" },
    { image: "/gallery/10.png", name: "Investors interacting with Franchise Media about franchise growth opportunities" },
    { image: "/gallery/11.png", name: "Franchise Media team explaining brand promotion strategies at expo" },
    { image: "/gallery/12.png", name: "Entrepreneurship discussion at Franchise Media booth during franchise exhibition" },
    { image: "/gallery/13.png", name: "Franchise Media representative connecting with business owners for franchise success" },
  ];

  return (
    <div className="max-w-7xl px-6 md:px-12 lg:px-20 mx-auto py-16">

      {/* ===========================
          🔵 NEW TOP FEATURE SECTION
      ============================ */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-20">

        {/* Feature Image */}
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="rounded-3xl overflow-hidden shadow-md"
        >
          <img
            src="/gallery/15.png"
            alt="UAE Malayali Hoteliers Meet"
            className="w-full h-[22rem] md:h-[30rem] object-cover rounded-3xl"
          />
        </div>

        {/* Feature Description */}
        <div data-aos="fade-left" data-aos-duration="1100">
          <h2 className="text-2xl md:text-4xl font-bold text-[#1F2B6C] mb-4">
            Attended the UAE Malayali Hoteliers Meet
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            A gathering of some of the most respected names in the hospitality space,
            including Sumesh Govind (CEO, Paragon Restaurant Group), Abdul Gafoor
            (Owner of Airlines Restaurant, Malappuram), and several leading restaurateurs
            and hoteliers.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            The event wasn’t just networking — it was a reminder that discipline,
            operational clarity, and consistency are still the engines behind truly scalable brands.
          </p>

          <h4 className="font-semibold text-[#2C3EBD] mb-2">
             Key discussions covered:
          </h4>

          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>Sustainable expansion frameworks</li>
            <li>Operational bottlenecks that stall growing brands</li>
            <li>Opportunities for Malayali restaurants to enter the U.S. market</li>
            <li>Malayali brands leading the F&B sector across regions</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mt-4">
            A valuable and perspective-sharpening experience that highlighted
            what truly drives long-term growth in the industry. 
          </p>
        </div>
      </section>

      {/* ===========================
          EXISTING MEDIA GALLERY BELOW
      ============================ */}
      <section>
        {/* <h2
          data-aos="fade-up"
          data-aos-duration="1100"
          className="text-2xl md:text-4xl font-bold text-indigo-400 mb-8"
        >
          Media
        </h2> */}

        <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-6">
          
          {/* Main Large Image */}
          <div className="md:col-span-2">
            <div
              data-aos="fade-up"
              data-aos-duration="1300"
              className="rounded-4xl overflow-hidden"
            >
              <img
                src={mainImage}
                alt="Franchise Media event"
                className="lg:w-[38rem] w-full h-[20rem] lg:h-[33rem] object-cover rounded-4xl"
              />
            </div>
          </div>

          {/* Small Images Scroll */}
          <div className="grid grid-cols-2 gap-2 h-[22rem] lg:h-[33rem] overflow-y-scroll scrollBar">
            {smallImages.map((image, idx) => (
              <div
                key={idx}
                className="rounded-4xl overflow-hidden h-36 shadow-md cursor-pointer"
                onClick={() => setMainImage(image.image)}
              >
                <img
                  src={image.image}
                  alt={image.name}
                  className="w-full h-40 object-cover rounded-4xl"
                />
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Media;
