import { Link } from "react-router-dom";
import WelcomeBG from "../../assets/hondaCover.jpg";
import WelcomeCar from "../../assets/w-h.png";
const Welcome = () => {
  const bannerStyle = {
    backgroundImage: `url(${WelcomeBG})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div style={bannerStyle}>
      <div className="container mt-20 mx-auto flex flex-col md:flex-row-reverse justify-around">
        <div className=" py-10 space-y-3 px-2">
          <h3 className="text-4xl text-white  font-fontSquare">
            Welcome to Car Master.
          </h3>
          <p className="max-w-[450px] text-white">
            {" "}
            your ultimate destination for everything automotive. Dive into a
            world of endless possibilities where you can search for your dream
            car from our extensive listings, read reviews, and compare models
            effortlessly. Our dynamic community is here to share their
            experiences, and our expert content keeps you informed about the
            latest trends and industry news. Ready to take the wheel? Start your
            journey with us today and unlock the full potential of your
            automotive passion
          </p>
          <button className="btn btn-outline btn-info hover:rounded-full duration-700">
            <Link to="/register">Get Started</Link>
          </button>
        </div>
        <div className=" flex items-center justify-center">
          <img className="" src={WelcomeCar} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
