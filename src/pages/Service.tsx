import OurService from "../components/service/OurService";
import FranchiseServices from "../components/service/Section01";

export interface ExperienceDataType {
  title: string;
  content: string;
  img: string;
  tag: string;
  subTitle: string;
  list: string[];
}
const experienceData: ExperienceDataType[] = [
  {
    title: "Franchise Your Business?",
    content:
      "If you have a successful business model, it’s important to pursue growth that is secure, sustainable, and requires less capital investment. To plan this process effectively, you will need expert guidance for different areas. Reach out to us for franchise consulting, development, implementation, marketing phase and discover how franchising can help you unlock new avenues for growth!",
    img: "/service/01.png",
    tag: "OUr services",
    subTitle: "Franchise Consulting Services",
    list: [
      "Strategic Planning for Franchise Growth",
      "Franchise Legal Documentation",
      "Franchise Operations and Training Documentation",
      "Franchisee Recruitment Marketing Strategies",
      "Franchise Sales Training",
    ],
  },
  {
    title: "Franchise Marketing Service",
    content:
      "If you have a successful business model, it’s important to pursue growth that is secure, sustainable, and requires less capital investment. To plan this process effectively, you will need expert guidance for different areas. Reach out to us for franchise consulting, development, implementation, marketing phase and discover how franchising can help you unlock new avenues for growth!",
    img: "/service/02.png",
    tag: "Our services",
    subTitle: "Services for Existing Franchisors",
    list: [
      "International Expansion Planning and Market Analysis",
      "Franchise Sales Coaching",
      "Operations Manuals and Training Program Development",
      "Franchise Organizational Audits",
    ],
  },
];

const Service = () => {
  return (
    <div>
      {experienceData.map((item, i) => (
        <OurService item={item} key={i} />
      ))}
      <FranchiseServices />
    </div>
  );
};

export default Service;
