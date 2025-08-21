import { useRef, useEffect } from "react";

const PartnerLogos: React.FC = () => {
  const partners = [
    { name: "Chicken story-food franchise client", logo: "/partner/01.jpg" },
    { name: "dailogue digital gallery- Franchise Client of Franchise Media Kerala", logo: "/partner/02.png" },
    { name: "Frapino- franchise partner", logo: "/partner/03.png" },
    { name: "gelato cafe-ice cream franchise client", logo: "/partner/04.png" },
    { name: "Ht wingz - franchise restaurant client", logo: "/partner/05.png" },
    { name: "Grapa’s Burger Lounge – burger franchise client", logo: "/partner/06.jpg" },
    { name: "Chai Habbat – tea franchise client", logo: "/partner/07.jpg" },
    { name: "Crunchy's -franchise client", logo: "/partner/08.jpg" },
    { name: "Cake sudio -Successful franchise outlet developed by Franchise Media in Kerala", logo: "/partner/09.jpg" },
    { name: "Cake lounge -Successful franchise outlet developed by Franchise Media in Kerala", logo: "/partner/010.jpg" },
    { name: "tea studio -best franchise for cafe", logo: "/partner/011.jpg" },
    { name: "Mobile Mate – mobile franchise ", logo: "/partner/012.png" },
    { name: "Naradan’s – Franchise Media client", logo: "/partner/013.jpg" },
    { name: "Nice Cream – ice cream franchise client", logo: "/partner/015.png" },
    { name: "Kiwi Ice Cream – franchise client", logo: "/partner/016.png" },
    { name: "Twist on  softserve & deserve", logo: "/partner/017.png" },
    { name: "The charcoal bay", logo: "/partner/018.png" },
    { name: "jaazo", logo: "/partner/019.png" },
    { name: "kenz karam", logo: "/partner/020.png" },
    { name: "taste of malabar", logo: "/partner/021.jpg" },
    { name: "Albaik Feasto Express – restaurant franchise client", logo: "/partner/022.png" },
    { name: "ampure", logo: "/partner/023.png" },
    { name: "banwet", logo: "/partner/024.png" },
    { name: "club sulaimani", logo: "/partner/025.png" },
    { name: "frozen bottle ", logo: "/partner/026.png" },
    { name: "fzone ", logo: "/partner/027.png" },
    { name: "the grillax", logo: "/partner/029.png" },
    { name: "hap &  hope ", logo: "/partner/030.png" },
    { name: "Heroelectric", logo: "/partner/031.png" },
    { name: "IFCS – Franchise Media corporate client", logo: "/partner/032.png" },
    { name: "ojin", logo: "/partner/033.png" },
    { name: "Parisons Tea House – tea franchise client", logo: "/partner/034.png" },
    { name: "Vollmond – franchise client", logo: "/partner/035.png" },
    { name: "wayn", logo: "/partner/036.png" },
    { name: "team care & cure", logo: "/partner/037.png" },
    { name: "avilpro", logo: "/partner/038.jpeg" },
    { name: "Grama Bakes & Sweets – bakery franchise client", logo: "/partner/039.png" },
    { name: "kpg roofings", logo: "/partner/040.jpeg" },
    

    
  






  ];

  const scrollRef = useRef<HTMLDivElement>(null);   

  // Auto scroll effect     
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Pixels per frame - adjust for faster/slower scrolling

    const autoScroll = () => {
      if (!scrollContainer) return;

      scrollPosition += scrollSpeed;

      // Reset scroll position when it reaches the end
      if (
        scrollPosition >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      ) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(autoScroll);
    };

    // Start auto-scrolling
    animationId = requestAnimationFrame(autoScroll);

    // Pause scrolling when user hovers over the container
    const pauseScroll = () => {
      cancelAnimationFrame(animationId);
    };

    const resumeScroll = () => {
      animationId = requestAnimationFrame(autoScroll);
    };

    scrollContainer.addEventListener("mouseenter", pauseScroll);
    scrollContainer.addEventListener("mouseleave", resumeScroll);

    // Clean up on component unmount
    return () => {
      cancelAnimationFrame(animationId);
      if (scrollContainer) {
        scrollContainer.removeEventListener("mouseenter", pauseScroll);
        scrollContainer.removeEventListener("mouseleave", resumeScroll);
      }
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
          <div key={index} className="flex-shrink-0 w-28 flex items-center">
            <img
              src={partner.logo}
              className="w-full"
              alt={partner.name}
              draggable="false"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnerLogos;
