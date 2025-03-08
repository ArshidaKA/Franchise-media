import ExpertiseSection from "../components/ExpertiseSection"
import FounderSection from "../components/FounderSection"
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
        <FounderSection />
        <TestimonialsSection />
        
    </div>
  )
}

export default Home