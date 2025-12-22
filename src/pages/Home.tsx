import { Helmet } from "react-helmet-async";
import ExpertiseSection from "../components/ExpertiseSection";
import FeatureSection from "../components/FeatureSection";
import HeroSection from "../components/HeroSection";
import PartnerLogos from "../components/PartnerLogos";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import BusinessOpportunities from "../components/FranchiseOpportunites";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Franchise Media | Franchise Business Experts in Kerala</title>
        <meta
          name="description"
          content="Franchise Media helps businesses expand through expert franchise consulting, marketing, and development services in Kerala and beyond."
        />
        <meta
          name="keywords"
          content="franchise consulting, franchise development, franchise marketing, Kerala, business growth"
        />
        <meta property="og:title" content="Franchise Media | Franchise Experts in Kerala" />
        <meta property="og:description" content="Grow your business through professional franchise consulting and marketing solutions." />
        <meta property="og:image" content="/og-image-home.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
      </Helmet>

      <HeroSection />
      <PartnerLogos />
      <ExpertiseSection />
            <BusinessOpportunities/>

      <ServicesSection />
      <TestimonialsSection />
      <FeatureSection />
    </div>
  );
};

export default Home;
