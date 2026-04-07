import React from "react";

const FeatureSection: React.FC = () => {
  const videos = [
    {
      id: 1,
      src: "https://www.youtube.com/embed/6h6Vy1MgYT4?si=9L0a9hU_Djw0ScZT",
      title: "Franchise Media Interview on Business Growth",
    },
    {
      id: 2,
      src: "https://www.youtube.com/embed/CoNalvzQbVs?si=LuJC7SYiMuzw1EPz",
      title: "Franchise Media Feature on Marketing Strategies",
    },
    {
      id: 3,
      src: "https://www.youtube.com/embed/3grDBdPstJc?si=Q-s2UlHONI6W2Nqu",
      title: "Franchise Media Interview: Entrepreneurship Tips",
    },
  ];

  // Optional: JSON-LD structured data for videos
  const videoStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": videos.map((video, index) => ({
      "@type": "VideoObject",
      "position": index + 1,
      "name": video.title,
      "thumbnailUrl": `https://img.youtube.com/vi/${video.src.split("/embed/")[1].split("?")[0]}/hqdefault.jpg`,
      "uploadDate": "2026-04-07",
      "contentUrl": video.src,
      "embedUrl": video.src,
    })),
  };

  return (
    <section
      className="max-w-7xl mx-auto pt-6 pb-16 px-4 md:px-0"
      aria-labelledby="feature-videos-heading"
    >
      {/* JSON-LD for videos */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoStructuredData) }}
      />

      {/* Heading */}
      <div className="text-center">
        <h2
          id="feature-videos-heading"
          data-aos="fade-up"
          data-aos-duration="1100"
          className="text-2xl md:text-4xl font-bold headingColor mb-4"
        >
          Interviews & Features
        </h2>

        <p
          data-aos="fade-up"
          data-aos-duration="1300"
          className="contentColor text-base lg:text-lg contentFont"
        >
          Watch interviews and media segments featuring Franchise Media
        </p>
      </div>

      {/* Videos Grid */}
      <div className="pt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {videos.map((video, index) => (
          <div
            key={video.id}
            data-aos="fade-up"
            data-aos-duration={1200 + index * 200}
            className="w-full"
          >
            <iframe
              className="w-full aspect-video rounded-lg shadow-lg"
              src={video.src}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;