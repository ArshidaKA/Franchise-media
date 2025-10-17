import { useRef, useEffect } from "react";

const PartnerLogos: React.FC = () => {
  const partners = [
    { name: "Zaika Bakes & Restaurant", logo: "/partner/043.png", height: "h-16" },
    { name: "Melban", logo: "/partner/044.png", height: "h-24" },
    { name: "Chicken Story - Food Franchise Client", logo: "/partner/01.jpg", height: "h-20" },
    { name: "Dialogue Digital Gallery", logo: "/partner/02.png", height: "h-30" },
    { name: "Frapino", logo: "/partner/03.png", height: "h-30" },
    { name: "Gelato Cafe", logo: "/partner/04.png", height: "h-20" },
    { name: "Ht Wingz", logo: "/partner/05.png", height: "h-34" },
    { name: "Grapa’s Burger Lounge", logo: "/partner/06.jpg", height: "h-20" },
    { name: "Chai Habbat", logo: "/partner/07.jpg", height: "h-14" },
    { name: "Crunchy's", logo: "/partner/08.jpg", height: "h-24" },
    { name: "Cake Studio", logo: "/partner/09.jpg", height: "h-20" },
    { name: "Cake Lounge", logo: "/partner/010.jpg", height: "h-20" },
    { name: "Tea Studio", logo: "/partner/011.jpg", height: "h-20" },
    { name: "Mobile Mate", logo: "/partner/012.png", height: "h-10" },
    { name: "Naradan’s", logo: "/partner/013.jpg", height: "h-20" },
    { name: "Nice Cream", logo: "/partner/015.png", height: "h-26" },
    { name: "Kiwi Ice Cream", logo: "/partner/016.png", height: "h-20" },
    { name: "Twist on Softserve & Deserve", logo: "/partner/017.png", height: "h-34" },
    
    { name: "The Charcoal Bay", logo: "/partner/018.png", height: "h-24" },
    { name: "Jaazo", logo: "/partner/019.png", height: "h-20" },
    { name: "Kenz Karam", logo: "/partner/020.png", height: "h-20" },
    { name: "Taste of Malabar", logo: "/partner/021.jpg", height: "h-40" },
    { name: "Albaik Feasto Express", logo: "/partner/022.png", height: "h-24" },
    { name: "Ampure", logo: "/partner/023.png", height: "h-34" },
    { name: "Banwet", logo: "/partner/024.png", height: "h-20" },
    { name: "Club Sulaimani", logo: "/partner/025.png", height: "h-22" },
    { name: "Frozen Bottle", logo: "/partner/026.png", height: "h-32" },
    
    { name: "Fzone", logo: "/partner/027.png", height: "h-20" },
    { name: "The Grillax", logo: "/partner/029.png", height: "h-26" },
    { name: "Hap & Hope", logo: "/partner/030.png", height: "h-12" },
    { name: "Heroelectric", logo: "/partner/031.png", height: "h-38" },
    { name: "IFCS", logo: "/partner/032.png", height: "h-32" },
    { name: "Ojin", logo: "/partner/033.png", height: "h-20" },
    { name: "Parisons Tea House", logo: "/partner/034.png", height: "h-34" },
    { name: "Vollmond", logo: "/partner/035.png", height: "h-20" },
    { name: "Wayn", logo: "/partner/036.png", height: "h-38" },
    { name: "Team Care & Cure", logo: "/partner/037.png", height: "h-24" },
    { name: "Avilpro", logo: "/partner/038.jpeg", height: "h-18" },
    { name: "Grama Bakes & Sweets", logo: "/partner/039.jpg", height: "h-32" },
    { name: "KPG Roofings", logo: "/partner/040.jpeg", height: "h-36" },
    { name: "Royal", logo: "/partner/041.jpg", height: "h-20" },
    { name: "Kaymas", logo: "/partner/042.png", height: "h-20" },
    { name: "Cakevista", logo: "/partner/045.png", height: "h-16" },
    { name: "Chaska Bun", logo: "/partner/046.png", height: "h-16" },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const autoScroll = () => {
      if (!scrollContainer) return;

      scrollPosition += scrollSpeed;
      if (scrollPosition >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(autoScroll);
    };

    animationId = requestAnimationFrame(autoScroll);

    const pauseScroll = () => cancelAnimationFrame(animationId);
    const resumeScroll = () => (animationId = requestAnimationFrame(autoScroll));

    scrollContainer.addEventListener("mouseenter", pauseScroll);
    scrollContainer.addEventListener("mouseleave", resumeScroll);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener("mouseenter", pauseScroll);
      scrollContainer.removeEventListener("mouseleave", resumeScroll);
    };
  }, []);

  return (
    <section className="py-10 px-6 md:px-12 lg:px-20 bg-white max-w-7xl mx-auto">
      <h2
        data-aos="fade-up"
        data-aos-duration="1100"
        className="text-2xl md:text-4xl font-bold headingColor mb-6 text-center"
      >
        Our Clients
      </h2>

      <div
        ref={scrollRef}
        className="flex space-x-7 lg:space-x-20 overflow-x-auto hide-scrollbar"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center"
            title={partner.name}
          >
            <img
              src={partner.logo}
              alt={partner.name}
              draggable="false"
              className={`object-contain w-auto ${partner.height}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnerLogos;
