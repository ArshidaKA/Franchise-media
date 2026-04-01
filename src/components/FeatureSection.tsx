const FeatureSection = () => {
  const videos = [
    {
      id: 1,
      src: "https://www.youtube.com/embed/6h6Vy1MgYT4?si=9L0a9hU_Djw0ScZT",
      
    },
    {
      id: 2,
      src: "https://www.youtube.com/embed/CoNalvzQbVs?si=LuJC7SYiMuzw1EPz",
    },
    {
      id: 3,
      src: "https://www.youtube.com/embed/3grDBdPstJc?si=Q-s2UlHONI6W2Nqu",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto pt-6 pb-16">
      {/* Heading */}
      <div className="text-center">
        <h2
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
      <div className="pt-10 px-2 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-8">
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
              title={`YouTube video ${video.id}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;