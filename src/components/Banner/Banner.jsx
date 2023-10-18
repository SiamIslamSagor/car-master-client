import bannerImg from "../../assets/banner_img.jpg";
const Banner = () => {
  const bannerStyle = {
    backgroundImage: `url(${bannerImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div>
      <div
        style={bannerStyle}
        className="h-[40vh] md:h-[70vh] lg:h-screen text-white"
      >
        <div className="p-2 max-md:max-w-lg max-;lg:max-w-[820px] lg:pl-8">
          <h3 className=" mt-[30px] sm:mt-[50px] md:mt-[70px] lg:mt-[120px] text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-fontSquare">
            Cruising into the Future:
            <br />
            Your Ultimate Automotive Destination
          </h3>
          <p className="sm:text-lg lg:text-xl max-w-[850px]">
            Welcome to an automotive wonderland where innovation meets passion.
            Explore the latest in cars, industry insights, and driving
            adventures at our one-stop automotive destination.At Car Master, we
            are not just a website; we are your companion on the road to
            automotive excellence. Our platform is designed for car enthusiasts,
            drivers, and anyone who shares a deep appreciation for the world of
            automobiles.
          </p>
          <button className="btn border-none bg-red-500 text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
