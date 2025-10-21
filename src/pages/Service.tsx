import { Helmet } from "react-helmet-async";
import OurService from "../components/service/OurService";
import FranchiseServices from "../components/service/Section01";
import consult from "../../public/json/Franchise Consulting Services.json";
import Existing from "../../public/json/Services for Existing Franchisors.json";

export interface ExperienceDataType {
  title: string;
  content: string;
  img: object;
  tag: string;
  subTitle: string;
  list: string[];
  navigateTo: string;
}

const experienceData: ExperienceDataType[] = [
  {
    title: "Franchise Your Business?",
    content:
      "If you have a successful business model, we guide you through every step of franchising — from legal documentation to marketing and sales strategy.",
    img: consult,
    navigateTo: "FranchiseYourBusiness",
    tag: "Our services",
    subTitle: "Franchise Consulting Services",
    list: [
      "Strategic Planning for Franchise Growth",
      "Franchise Legal Documentation",
      "Training Documentation",
      "Recruitment Marketing Strategies",
      "Sales Training",
    ],
  },
  {
    title: "Franchise Marketing Service",
    content:
      "We help existing franchisors expand internationally with market analysis, coaching, and operational support.",
    img: Existing,
    navigateTo: "FranchiseMarketingService",
    tag: "Our services",
    subTitle: "Services for Existing Franchisors",
    list: [
      "International Expansion Planning",
      "Sales Coaching",
      "Manuals & Training Program Development",
      "Organizational Audits",
    ],
  },
];

const Service = () => {
  return (
    <div>
      <Helmet>
        <title>Our Services | Franchise Consulting & Marketing</title>
        <meta
          name="description"
          content="Explore our franchise consulting, marketing, and business development services designed to help brands scale efficiently."
        />
        <meta name="keywords" content="franchise services, consulting, marketing, expansion" />
      </Helmet>

      {experienceData.map((item, i) => (
        <OurService item={item} key={i} />
      ))}
      <FranchiseServices />
    </div>
  );
};

export default Service;
