import { Link } from "react-router-dom";
import errorImg from "../../assets/notFound.png";
import { BsChevronDoubleLeft } from "react-icons/bs";

const ErrorPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex  flex-col lg:flex-row-reverse justify-between container items-center mx-auto">
        <div>
          <img src={errorImg} alt="error img" />
        </div>
        <div className="border p-10 rounded-lg">
          <h2 className="text-5xl">Page not found</h2>
          <Link to="/">
            <button className="btn mt-4 font-fontSquare btn-ghost text-blue-700 font-bold">
              <BsChevronDoubleLeft></BsChevronDoubleLeft>
              Go Back Our Side
            </button>
          </Link>
          <hr />
          <p className="max-w-sm text-gray-500">
            Oops, it seems like there is been a roadblock on your journey
            through Car Master. We apologize for the inconvenience. Our team is
            working tirelessly to get things back on track. Please check back
            shortly, and in the meantime, feel free to explore our other
            exciting features and offerings. Thank you for your understanding
            and patience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
