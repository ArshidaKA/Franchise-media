import { ReactNode } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../FranchiseOpportunties/FranchiseOppertunities";

/* ---------- Types ---------- */

interface Franchise {
  slug: string;
  title: string;
  category: string;
  image: string;
  area: string;
  investment: string;
  roi: string;
  about: string;
  franchisedetails: string;
  description: string;
  vision?: string;
  mission?: string;
}

interface InfoCardProps {
  label: string;
  value: string;
}

interface SectionProps {
  title: string;
  children: ReactNode;
}

interface InputProps {
  type?: string;
  placeholder: string;
}

/* ---------- Main Component ---------- */

const BusinessDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const business = (data as Franchise[]).find(
    (item) => item.slug === slug
  );

  if (!business) {
    return (
      <div className="text-center py-20 text-gray-500">
        Business not found
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-20 px-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
        <img
          src={business.image}
          alt={business.title}
          className="w-44 h-44 object-contain rounded-2xl shadow-md bg-white"
        />

        <div>
          <h1 className="headingColor text-4xl font-bold tracking-tight mb-2">
            {business.title}
          </h1>
          <p className="text-sm uppercase tracking-widest text-gray-500">
            {business.category}
          </p>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <InfoCard label="Area Required" value={business.area} />
        <InfoCard label="Investment Size" value={business.investment} />
        <InfoCard label="ROI" value={business.roi} />
      </div>

      {/* About Brand */}
      <Section title="About Brand">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <p className="whitespace-pre-line text-xl text-gray-600 leading-relaxed">
            {business.about}
          </p>

          <img
            src={business.image}
            alt="About brand"
            className="w-full max-h-80 object-contain rounded-2xl shadow-lg"
          />
        </div>
      </Section>

      {/* Vision & Mission */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div className="rounded-2xl p-8 shadow-lg bg-[#0f1e3a] text-white">
          <h3 className="text-2xl font-bold mb-4 tracking-wide">
            Our Vision
          </h3>
          <p className="text-lg leading-relaxed opacity-90">
            {business.vision ||
              "To become a leading and trusted brand by delivering consistent quality, innovation, and value across all our franchise operations."}
          </p>
        </div>

        <div className="rounded-2xl p-8 shadow-lg bg-[#0f1e3a] text-white">
          <h3 className="text-2xl font-bold mb-4 tracking-wide">
            Our Mission
          </h3>
          <p className="text-lg leading-relaxed opacity-90">
            {business.mission ||
              "To empower entrepreneurs through a proven business model, strong support system, and sustainable growth opportunities."}
          </p>
        </div>
      </div>

      {/* Franchise Details */}
      <Section title="Franchise Details">
        <ul className="whitespace-pre-line text-gray-600 text-xl font-semibold leading-relaxed list-disc pl-5 space-y-2">
          {business.franchisedetails
            .split("\n")
            .map((line, i) => (
              <li key={i}>{line}</li>
            ))}
        </ul>
      </Section>

      {/* Interested Section */}
      <Section title={`Interested in ${business.title} Franchise?`}>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input placeholder="Your Name" />
          <Input placeholder="Email Address" type="email" />
          <Input placeholder="Phone Number" type="tel" />
          <Input placeholder="Preferred Location" />

          <button className="md:col-span-2 bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition">
            Apply Now
          </button>
        </form>
      </Section>

      {/* You might also be interested */}
      <div className="mt-24">
        <h2 className="headingColor text-2xl md:text-3xl font-bold mb-8">
          You might also be interested in these franchise opportunities
        </h2>

        <div className="flex space-x-6 overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory">
          {(data as Franchise[])
            .filter((item) => item.slug !== business.slug)
            .map((item, index) => (
              <Link
                key={index}
                to={`/business/${item.slug}`}
                className="min-w-[260px] md:min-w-[300px] snap-start"
              >
                <div className="rounded-2xl p-4 shadow-md bg-white hover:shadow-lg transition">
                  <div className="w-full h-36 flex items-center justify-center rounded-xl bg-[#F6F9FF]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-full object-contain"
                    />
                  </div>

                  <p className="text-sm mt-3 text-gray-500 uppercase tracking-wide">
                    {item.category}
                  </p>

                  <h3 className="text-lg font-semibold mt-1 headingColor">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-gray-600">
                    {item.description.length > 90
                      ? `${item.description.substring(0, 90)}...`
                      : item.description}
                  </p>

                  <button className="mt-6 w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition">
                    Know More
                  </button>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessDetail;

/* ---------- Reusable Components ---------- */

const InfoCard: React.FC<InfoCardProps> = ({ label, value }) => (
  <div className="rounded-2xl p-6 text-center shadow-lg bg-[#0f1e3a] text-white">
    <p className="text-xs uppercase tracking-widest opacity-70 mb-2">
      {label}
    </p>
    <p className="text-xl font-semibold">{value}</p>
  </div>
);

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <div className="mb-20">
    <h2 className="headingColor text-2xl font-semibold mb-6 inline-block">
      {title}
      <span className="block w-14 h-[3px] bg-green-700 mt-2 rounded-full" />
    </h2>

    <div className="rounded-2xl p-8 bg-white shadow-md">
      {children}
    </div>
  </div>
);

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
}) => (
  <input
    type={type}
    placeholder={placeholder}
    className="
      rounded-xl
      px-4
      py-3
      text-gray-700
      bg-gray-50
      focus:outline-none
      focus:ring-2
      focus:ring-green-700
      transition
    "
  />
);
