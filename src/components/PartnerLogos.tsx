import { useRef, useState, useEffect } from "react";

const PartnerLogos: React.FC = () => {
  const partners = [
    { name: "Walmart", logo: "/partner/walmart.png" },
    { name: "FedEx", logo: "/partner/fedex.png" },
    { name: "Amazon", logo: "/partner/amazon.png" },
    { name: "Stripe", logo: "/partner/stripe.png" },
    { name: "Airbnb", logo: "/partner/airbnb.png" },
    { name: "Ripple", logo: "/partner/stripe.png" },
    { name: "Tesla", logo: "/partner/stripe.png" },
    { name: "Microsoft", logo: "/partner/stripe.png" },
    { name: "Google", logo: "/partner/stripe.png" },
    { name: "Netflix", logo: "/partner/stripe.png" },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [momentum, setMomentum] = useState({ x: 0, timestamp: 0 });

  // Handle mouse down
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    setMomentum({ x: e.pageX, timestamp: Date.now() });

    // Change cursor style
    document.body.style.cursor = "grabbing";
    if (scrollRef.current) {
      scrollRef.current.style.cursor = "grabbing";
    }
  };

  // Handle mouse move
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();

    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (startX - x) * 1.5; // Adjust speed factor for smoother scrolling

    // Update momentum for scroll inertia
    setMomentum({ x: e.pageX, timestamp: Date.now() });

    // Apply scroll
    scrollRef.current.scrollLeft = scrollLeft + walk;
  };

  // Handle mouse up with momentum
  const handleMouseUp = (e: React.MouseEvent) => {
    setIsDragging(false);

    // Reset cursor style
    document.body.style.cursor = "";
    if (scrollRef.current) {
      scrollRef.current.style.cursor = "grab";
    }

    // Apply momentum effect
    if (scrollRef.current && Date.now() - momentum.timestamp < 100) {
      const timeDiff = Date.now() - momentum.timestamp;
      const speedFactor = 10; // Adjust for desired momentum effect
      const momentumDistance =
        (momentum.x - e.pageX) * (speedFactor / timeDiff);

      // Apply momentum with animation
      const startScrollLeft = scrollRef.current.scrollLeft;
      const startTime = Date.now();
      const duration = 900; // Animation duration in ms

      const momentumAnimation = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3); // Cubic ease out

        if (scrollRef.current) {
          scrollRef.current.scrollLeft =
            startScrollLeft + momentumDistance * easeOut;
        }

        if (progress < 1) {
          requestAnimationFrame(momentumAnimation);
        }
      };

      requestAnimationFrame(momentumAnimation);
    }
  };

  // Touch support
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    setMomentum({ x: e.touches[0].pageX, timestamp: Date.now() });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return;

    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (startX - x) * 1.5;

    setMomentum({ x: e.touches[0].pageX, timestamp: Date.now() });
    scrollRef.current.scrollLeft = scrollLeft + walk;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsDragging(false);

    // Apply momentum effect
    if (scrollRef.current && Date.now() - momentum.timestamp < 100) {
      const timeDiff = Date.now() - momentum.timestamp;
      const speedFactor = 8; // Slightly reduced for touch
      let momentumDistance = 0;

      if (e.changedTouches && e.changedTouches.length > 0) {
        momentumDistance =
          (momentum.x - e.changedTouches[0].pageX) * (speedFactor / timeDiff);
      }

      // Apply momentum with animation
      const startScrollLeft = scrollRef.current.scrollLeft;
      const startTime = Date.now();
      const duration = 900;

      const momentumAnimation = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);

        if (scrollRef.current) {
          scrollRef.current.scrollLeft =
            startScrollLeft + momentumDistance * easeOut;
        }

        if (progress < 1) {
          requestAnimationFrame(momentumAnimation);
        }
      };

      requestAnimationFrame(momentumAnimation);
    }
  };

  // Clean up
  useEffect(() => {
    return () => {
      document.body.style.cursor = "";
    };
  }, []);

  return (
    <section className="py-10 px-6 md:px-12 lg:px-20 bg-white">
      <div
        ref={scrollRef}
        className={`flex space-x-7 lg:space-x-20 overflow-x-auto hide-scrollbar ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          scrollBehavior: isDragging ? "auto" : "smooth",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {partners.map((partner, index) => (
          <div key={index} className="flex-shrink-0 w-28">
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
