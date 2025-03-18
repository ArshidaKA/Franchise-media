import ExpertiseSection from "../components/ExpertiseSection"
import FeatureSection from "../components/FeatureSection"
import HeroSection from "../components/HeroSection"
import PartnerLogos from "../components/PartnerLogos"
import ServicesSection from "../components/ServicesSection"
import TestimonialsSection from "../components/TestimonialsSection"


const Home = () => {
  return (
    <div>
        <HeroSection />
        <PartnerLogos />
        <ExpertiseSection />
        <ServicesSection />
        <TestimonialsSection />
        <FeatureSection />
    </div>
  )
}

export default Home