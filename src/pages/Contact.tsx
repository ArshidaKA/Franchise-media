import { Helmet } from "react-helmet-async";
import HeroContact from "../components/contact/HeroContact";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Franchise Media</title>
        <meta
          name="description"
          content="Get in touch with Franchise Media for expert franchise consulting, business expansion support, and marketing strategies. Contact us in India or UAE."
        />
        <meta
          name="keywords"
          content="contact franchise media, franchise consulting, franchise marketing, business growth support, franchise help"
        />
        <meta property="og:title" content="Contact Franchise Media" />
        <meta
          property="og:description"
          content="Reach out to Franchise Media for franchise consulting and marketing guidance across India and UAE."
        />
        <meta property="og:image" content="https://yourdomain.com/og-image-contact.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/contact" />
      </Helmet>

      <HeroContact />
    </>
  );
};

export default Contact;
