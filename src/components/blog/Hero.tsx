import { useState } from "react";

const Hero = () => {
  // State for the main media image
  const [mainImage, setMainImage] = useState("/gallery/2.png");

  // List of small images
  const smallImages = [
  {
    image: "/gallery/14.png",
    name: "Franchise Media gallery image showing business networking at franchise expo",
  },
  {
    image: "/gallery/3.png",
    name: "Franchise Media event photo highlighting franchise opportunities and partnerships",
  },
  {
    image: "/gallery/4.png",
    name: "Business owner consulting with Franchise Media representative at franchise exhibition",
  },
  {
    image: "/gallery/5.png",
    name: "Franchise Media engaging entrepreneurs about business expansion and franchising",
  },
  {
    image: "/gallery/6.png",
    name: "Entrepreneurs discussing franchise business models with Franchise Media",
  },
  {
    image: "/gallery/7.png",
    name: "Franchise Media networking with potential franchise partners at expo",
  },
  {
    image: "/gallery/8.png",
    name: "Business collaboration showcased in Franchise Media gallery event photo",
  },
  {
    image: "/gallery/9.png",
    name: "Franchise Media consultation booth with entrepreneurs at franchise show",
  },
  {
    image: "/gallery/10.png",
    name: "Investors interacting with Franchise Media about franchise growth opportunities",
  },
  {
    image: "/gallery/11.png",
    name: "Franchise Media team explaining brand promotion strategies at expo",
  },
  {
    image: "/gallery/12.png",
    name: "Entrepreneurship discussion at Franchise Media booth during franchise exhibition",
  },
  {
    image: "/gallery/13.png",
    name: "Franchise Media representative connecting with business owners for franchise success",
  },
];


  return (
    <div className="max-w-7xl px-6 md:px-12 lg:px-20 mx-auto py-16">
      {/* Media Section */}
      <section>
        <h2
          data-aos="fade-up"
          data-aos-duration="1100"
          className="text-2xl md:text-4xl font-bold text-indigo-400 mb-8"
        >
          Media
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 items-center ">
          {/* Large Image */}
          <div
            data-aos="fade-up"
            data-aos-duration="1300"
            className="md:col-span-2 mb-4 md:mb-0"
          >
            <div className="rounded-4xl">
              <img
                src={mainImage}
                alt="Franchise Media event "
                className="lg:w-[35rem] w-full h-[20rem] lg:h-[33rem] rounded-4xl "
              />
            </div>
          </div>

          {/* Small Images Column */}
          <div className="grid grid-cols-2 scrollBar md:grid-cols-2 gap-2 h-[21rem] lg:h-[28rem] overflow-y-scroll">
            {smallImages.map((image, index) => (
              <div
                key={index}
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

export default Hero;
