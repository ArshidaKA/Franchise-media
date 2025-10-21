import { Helmet } from "react-helmet-async";
import WhoAreWe from "../components/about/WhoAreWe";
import FounderSection from "../components/FounderSection";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About Franchise Media | Leading Franchise Consultants</title>
        <meta
          name="description"
          content="Learn about Franchise Media’s journey, vision, and leadership team helping brands grow through franchising."
        />
        <meta
          name="keywords"
          content="about franchise media, franchise experts, franchise consultants Kerala"
        />
      </Helmet>

      <WhoAreWe />
      <FounderSection />
    </div>
  );
};

export default About;
