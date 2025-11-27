import { Link } from "react-router-dom";

const data = [
  {
    category: "Food and Beverage",
    title: "Frapino-Italian IceCream Cafe",
    slug: "cinnzeo-bakery",
    image: "https://iili.io/2e0eQEb.png",
    description:`
Hap n Hope is a growing kidswear brand that blends comfort,
style, and quality to create joyful fashion for children.`
  },
  {
    category: "Retail & Clothing Brands",
    title: "Hap n Hop",
    slug: "Hap n Hop",
    image: "/partner/030.png",
     description:`
Hap n Hope is a growing kidswear brand that blends comfort,
style, and quality to create joyful fashion for children.`
  },
  {
    category: "Hospital & Clinic",
    title: "Team Care & Cure",
    slug: "Team Care & Cure",
    image: "/partner/037.png",
     description:`
For over a decade, Care and Cure has provided vital, trustbased healthcare services for rural and
semi-urban communities throughout Kerala`
  },
  
  {
    category: "Food & Beverage Brand",
    title: "Cake Studio",
    slug: "cake-studio",
    image: "/partner/09.jpg",
    description:`
Cake studio, cakes & cafe, a delightful heaven for
cake lovers in kerala.Now we have 18000 square feet platform of head
office, around 25 outlets`
  },
  {
    category: "Food & Beverage Brand",
    title: "Grapa’s Burger Lounge",
    slug: "Grapa’s Burger Lounge",
    image: "/partner/06.jpg",
    description:`
At Burger Lounge, we're not just flipping burgers; we're
redefining the burger experience. the first authentic
burger chain in Kerala.`
  },
  {
    category: "Food & Beverage Brand",
    title: "Cake Lounge",
    slug: "Cake Lounge",
    image: "/partner/010.jpg",
    description:`

Cake Lounge, is one’s perfect go-to destination for
exquisite cakes and desserts.Crafting
special cakes for every occasion one celebrates.`
  },
   {
    category: "Food & Beverage Brand",
    title: "Kiwi icecream",
    slug: "Kiwi icecream",
    image: "/partner/016.png",
    description:`
Kiwi Premium Ice Creams,
with over 11 years of
experience in serving the
market of Kerala`
  },
  {
    category: "Food & Beverage Brand",
    title: " Grama Bakes",
    slug: " Grama Bakes",
    image: "/partner/039.jpg",
    description:`
Grama Bakes & Sweets is a pioneering bakery concept, proudly developed by F-Zone-a
respected brand with a strong legacy in the food and hospitality industry.`
  },
];

const BusinessOpportunities = () => {
  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      
      {/* Title */}
      <h2
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-2xl md:text-4xl font-bold headingColor mb-6"
      >
        Top Business Opportunities
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-duration="1200"
            className="border rounded-xl p-4 shadow-sm hover:shadow-md transition bg-white"
            style={{ borderColor: "#DCEBFF" }}
          >
            {/* Image */}
            <div
              data-aos="zoom-in"
              className="w-full h-36 flex items-center justify-center rounded-md"
              style={{ background: "#F6F9FF" }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="max-h-full object-contain"
              />
            </div>

            {/* Category */}
            <p
              data-aos="fade-right"
              className="text-sm mt-3"
              style={{ color: "#2C3EBD" }}
            >
              {item.category}
            </p>

            {/* Title */}
            <h3
              data-aos="fade-right"
              className="text-lg font-semibold mt-1"
              style={{ color: "#1F2B6C" }}
            >
              {item.title}
            </h3>

            {/* Details */}
            <div
              data-aos="fade-left"
              className="mt-3 space-y-1 text-sm"
              style={{ color: "#4A4A4A" }}
            >
              <p>
                <span className="font-semibold"></span>
                {item.description}
              </p>
             
            </div>

            {/* Know More Button */}
            <Link to={`/business/${item.slug}`}>
              <button
                data-aos="fade-up"
                data-aos-duration="1400"
                className="mt-6 border border-green-500 text-green-600 
                text-base font-medium py-2.5 px-6 rounded-lg 
                cursor-pointer transition duration-300 hover:bg-green-500 hover:text-black"
              >
                Know More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessOpportunities;
