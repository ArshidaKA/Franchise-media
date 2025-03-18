const FeatureSection = () => {
  return (
    <div className="max-w-7xl mx-auto pt-6 pb-16">
      <div className="text-center ">
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
      <div className="flex justify-center items-center pt-10">
        <iframe
          className="w-full max-w-2xl aspect-video rounded-lg "
          src="https://www.youtube.com/embed/6h6Vy1MgYT4?si=9L0a9hU_Djw0ScZT"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>


      </div>
    </div>
  );
};

export default FeatureSection;