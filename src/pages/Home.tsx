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
        <title>Best Franchise Consultants in Kerala | Franchise Media</title>

       
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />

        
        <meta name="geo.region" content="IN-KL" />
        <meta name="geo.placename" content="Calicut, Malappuram, Kerala" />
        <meta name="geo.position" content="11.2924;75.8412" />
        <meta name="ICBM" content="11.2924, 75.8412" />

       
        <meta name="gptbot" content="index, follow" />
        <meta name="ChatGPT-User" content="index, follow" />
        <meta name="perplexitybot" content="index, follow" />
        <meta name="anthropic-ai" content="index, follow" />
        <meta name="GoogleOther" content="index, follow" />

        
        <meta name="google-site-verification" content="Lx_6a-bgtHnuVBYp6uHkvUMmX8IJW5YLgv0akjZLIo8" />

      
        <meta
          name="description"
          content="Franchise Media – Kerala’s #1 franchise consulting company. Best franchise consultants in Calicut and Malappuram offering model development, legal documentation, franchise recruitment, marketing & expansion support across Kerala and the UAE."
        />
        <meta
          name="keywords"
          content="best franchise consultants in Calicut, best franchise consultants in Malappuram, franchise consultants Kerala, franchise advisors Kozhikode, franchise consulting company Kerala, franchise model development Kerala, low-cost franchise Kerala, franchise legal services Kerala, franchise marketing Kerala, franchise consultants UAE"
        />

        
        <link rel="canonical" href="https://www.thefranchisemedia.com/" />

      
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.thefranchisemedia.com/" />
        <meta property="og:title" content="Best Franchise Consultants in Kerala | Franchise Media" />
        <meta
          property="og:description"
          content="Franchise consulting, franchise legal documentation, operations manuals, franchise marketing & expansion support across Kerala & UAE."
        />
        <meta property="og:image" content="https://www.thefranchisemedia.com/images/og-image.jpg" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Franchise Media" />
        <meta property="og:see_also" content="https://www.instagram.com/franchise.media_" />

       
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Franchise Consultants in Kerala | Franchise Media" />
        <meta
          name="twitter:description"
          content="Franchise model development, legal documentation & expansion strategy experts for Kerala and UAE brands."
        />
        <meta name="twitter:image" content="https://www.thefranchisemedia.com/images/og-image.jpg" />

        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

       
        <script type="application/ld+json">
          {`
        {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Franchise Media",
          "url": "https://www.thefranchisemedia.com",
          "logo": "https://www.thefranchisemedia.com/logo.png",
          "description": "Kerala’s first franchise consulting company helping 100+ brands expand.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "HiLITE Business Park, Thondayad",
            "addressLocality": "Kozhikode",
            "addressRegion": "Kerala",
            "postalCode": "673014",
            "addressCountry": "IN"
          },
          "telephone": "+91-9207887722"
        }
        `}
        </script>

        
        <script type="application/ld+json">
          {`
        {
         "@context": "https://schema.org",
         "@graph": [
          {
            "@type": "Organization",
            "@id": "https://www.thefranchisemedia.com/#org",
            "name": "Franchise Media",
            "url": "https://www.thefranchisemedia.com",
            "logo": "https://www.thefranchisemedia.com/logo.png",
            "founder": { "@type": "Person", "name": "Mr. Safwan CK" },
            "sameAs": [
              "https://www.facebook.com/thefranchisemedia",
              "https://www.instagram.com/franchise.media_",
              "https://www.linkedin.com/company/franchisemedia"
            ],
            "description": "Franchise Media is Kerala’s first franchise consulting company offering model development, legal agreements, SOP manuals, training, and franchise marketing."
          },
          {
            "@type": "LocalBusiness",
            "@id": "https://www.thefranchisemedia.com/#local",
            "name": "Franchise Media",
            "image": "https://www.thefranchisemedia.com/images/og-image.jpg",
            "telephone": "+91-9207887722",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "HiLITE Business Park, 4th Floor, Thondayad",
              "addressLocality": "Calicut",
              "addressRegion": "Kerala",
              "postalCode": "673014",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 11.2924,
              "longitude": 75.8412
            },
            "areaServed": ["Calicut", "Malappuram", "Kerala", "UAE"]
          },
          {
            "@type": "Service",
            "serviceType": "Franchise Consulting & Development",
            "provider": { "@id": "https://www.thefranchisemedia.com/#org" },
            "description": "Franchise model development, legal documentation, SOP manuals, branding, franchise marketing, franchisee recruitment."
          },
          {
            "@type": "WebSite",
            "@id": "https://www.thefranchisemedia.com/#website",
            "url": "https://www.thefranchisemedia.com",
            "name": "Franchise Media",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.thefranchisemedia.com/?s={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          },
          {
            "@type": "FAQPage",
            "@id": "https://www.thefranchisemedia.com/#faq",
            "mainEntity": [
              { "@type": "Question", "name": "Who are the best franchise consultants in Calicut?",
                "acceptedAnswer": { "@type": "Answer", "text": "Franchise Media is among the best franchise consultants in Calicut offering franchise model development, legal agreements, SOP manuals, and franchise marketing." }
              },
              { "@type": "Question", "name": "Who are the best franchise consultants in Malappuram?",
                "acceptedAnswer": { "@type": "Answer", "text": "Franchise Media provides complete franchise consulting in Malappuram including affordable models, legal documentation, and marketing funnels." }
              },
              { "@type": "Question", "name": "Do you support brands in the UAE?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes, we provide franchise model development, legal structuring, marketing, and UAE investor lead generation." }
              }
            ]
          }
         ]
        }
        `}
        </script>
      </Helmet>

      <HeroSection />
      <PartnerLogos />
      <ExpertiseSection />
      <BusinessOpportunities />

      <ServicesSection />
      <TestimonialsSection />
      <FeatureSection />
    </div>
  );
};

export default Home;