import {
  FaBriefcase,
} from "react-icons/fa";
import Lottie from "react-lottie-player";
import {  TagButtonWithLine } from "../reuse/Buttons";


interface OurServiceProps {
  item: {
    title: string;
    content: string;
    img: object;
    tag: string;
    subTitle: string;
    list: string[];
    navigateTo:string;
  };
}
const OurService = ({ item }: OurServiceProps) => {
  return (
    <div>
      {/* Franchise Your Business Section */}
      <section
      id={item.navigateTo}
        className={`max-w-7xl mx-auto ${
          item.title === "Franchise Marketing Service" ? "py-0" : "py-16"
        } px-4 md:px-8`}
      >
        <h2
          data-aos="fade-up"
          data-aos-duration="1100"
          className="text-3xl md:text-4xl  font-bold text-center headingColor mb-8"
        >
          {item.title}
        </h2>

        <p
          data-aos="fade-up"
          data-aos-duration="1300"
          className="text-center max-w-4xl mx-auto text-lg contentColor contentFont leading-relaxed contentColor mb-4 "
        >
          {item.content}
        </p>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="md:w-1/2 will-change-transform"
          >
            <Lottie
              loop
              animationData={item.img}
              play
              style={{ width: "100%", height: "auto" }}
            />
          </div>

          <div className="md:w-1/2">
            <TagButtonWithLine label={item.tag} />

            <h3
              data-aos="fade-up"
              data-aos-duration="1200"
              className="text-3xl md:text-4xl font-bold headingColor mb-6"
            >
              {item.subTitle}
            </h3>

            <ul className="space-y-4">
              {item.list.map((item: string, index: number) => (
                <li
                  data-aos="fade-up"
                  data-aos-duration="1400"
                  key={index}
                  className="flex items-center"
                >
                  <div className="bg-indigo-100 p-2 rounded-md mr-3">
                    <FaBriefcase className="headingColor" />
                  </div>
                  <span className="text-lg contentColor contentFont">
                    {item}
                  </span>
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