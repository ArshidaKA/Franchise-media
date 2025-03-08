import type React from "react";

const PartnerLogos: React.FC = () => {
  const partners = [
    { name: "Walmart", logo: "/partner/walmart.png" },
    { name: "FedEx", logo: "/partner/fedex.png" },
    { name: "Amazon", logo: "/partner/amazon.png" },
    { name: "Stripe", logo: "/partner/stripe.png" },
    { name: "Airbnb", logo: "/partner/airbnb.png" },
    { name: "Ripple", logo: "/partner/ripple.png" },
  ];

  return (
    <section className="py-10 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex justify-center">
              <img src={partner.logo} className="w-28" alt={partner.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
