import { useRef, useEffect } from "react";

const PartnerLogos: React.FC = () => {
  const partners = [
    { name: "Walmart", logo: "/partner/01.jpg" },
    { name: "FedEx", logo: "/partner/02.png" },
    { name: "Amazon", logo: "/partner/03.png" },
    { name: "Stripe", logo: "/partner/04.png" },
    { name: "Airbnb", logo: "/partner/05.png" },
    { name: "Ripple", logo: "/partner/06.jpg" },
    { name: "Tesla", logo: "/partner/07.jpg" },
    { name: "Microsoft", logo: "/partner/08.jpg" },
    { name: "Google", logo: "/partner/09.jpg" },
    { name: "Netflix", logo: "/partner/011.jpg" },
    { name: "Netflix", logo: "/partner/012.png" },
    { name: "Netflix", logo: "/partner/013.jpg" },
    { name: "Netflix", logo: "/partner/015.png" },
    { name: "Netflix", logo: "/partner/016.png" },
    { name: "Netflix", logo: "/partner/017.png" },
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
