import { Link } from "react-router-dom";
import bannerImg from "../../assets/banner_img.jpg";
const Banner = () => {
  const bannerStyle = {
    backgroundImage: `url(${bannerImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div
      style={bannerStyle}
      className="h-[40vh] md:h-[70vh] lg:h-screen text-white"
    >
      <div className="p-2 max-md:max-w-lg max-;lg:max-w-[820px] lg:pl-16 space-y-2 md:space-y-4 lg:space-y-8">
        <h3 className=" mt-[30px] md:mt-[50px]  lg:mt-[120px] text-2xl md:text-3xl lg:text-6xl font-fontSquare">
          Cruising into the Future:
          <br />
          Your Ultimate Automotive Destination
        </h3>
        <p className="md:text-lg lg:text-xl max-w-[850px]">
          Welcome to an automotive wonderland where innovation meets passion.
          Explore the latest in cars, industry insights, and driving adventures
          at our one-stop automotive destination.
        </p>
        <button className="btn btn-outline btn-info hover:rounded-full duration-700">
          <Link to="/register">Get Started</Link>
        </button>
      </div>
    </div>
  );
};

export default Banner;
