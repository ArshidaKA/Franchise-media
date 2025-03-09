
import {
  FaBriefcase,
} from "react-icons/fa";

interface OurServiceProps {
  item: {
    title: string;
    content: string;
    img: string;
    tag: string;
    subTitle: string;
    list: string[];
  };
}
const OurService = ({ item }: OurServiceProps) => {
  return (
    <div>
      {/* Franchise Your Business Section */}
      <section
        className={`max-w-6xl mx-auto ${
          item.title === "Franchise Marketing Service" ? "py-0" : "py-16"
        } px-4 md:px-8`}
      >
        <h2 className="text-3xl font-bold text-center text-indigo-800 mb-8">
          {item.title}
        </h2>

        <p className="text-center max-w-4xl mx-auto text-gray-700 leading-relaxed mb-4 ">
          {item.content}
        </p>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img
              src={item.img}
              alt="Franchise illustration"
              className="w-full h-auto"
            />
          </div>

          <div className="md:w-1/2">
            <div className="inline-block uppercase bg-indigo-100 text-indigo-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              {item.tag}
            </div>

            <h3 className="text-2xl font-bold text-indigo-800 mb-6">
              {item.subTitle}
            </h3>

            <ul className="space-y-4">
              {item.list.map((item: string, index: number) => (
                <li key={index} className="flex items-center">
                  <div className="bg-indigo-100 p-2 rounded-md mr-3">
                    <FaBriefcase className="text-indigo-800" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurService