import { BiBadgeCheck } from "react-icons/bi";
import { BsCheck2Circle, BsFillClipboardDataFill } from "react-icons/bs";
import { LuPhoneCall } from "react-icons/lu";
import { TbTargetArrow } from "react-icons/tb";
const CarBuy = () => {
  return (
    <div className="container mx-auto mb-20 px-2">
      <h3 className="text-3xl font-fontSquare my-20 text-center">
        How to buy your car with Car Master?
      </h3>
      <div className="bg-white rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center max-lg:gap-10">
        <div className="flex flex-col items-center justify-center gap-5 max-md:border-b-[2px] md:border-r-[2px]">
          <h3 className="flex items-center gap-2 text-2xl">
            <BiBadgeCheck></BiBadgeCheck>
            Step 1
          </h3>
          <h1 className="text-5xl">
            <BsCheck2Circle></BsCheck2Circle>
          </h1>
          <h2 className="text-2xl font-fontSquare ">Choose Your Car</h2>
          <p className="text-center p-3 text-gray-500 font-medium">
            We have compiled recommended information that you want to know to
            buy your car.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-5 max-md:border-b-[2px] lg:border-r-[2px]">
          <h3 className="flex items-center gap-2 text-2xl">
            <BiBadgeCheck></BiBadgeCheck>
            Step 2
          </h3>
          <h1 className="text-5xl">
            <LuPhoneCall></LuPhoneCall>
          </h1>
          <h2 className="text-2xl font-fontSquare ">Contact Seller</h2>
          <p className="text-center p-3 text-gray-500 font-medium">
            After you have selected a car, we arrange a viewing to seller
            location or one of our points.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-5 max-md:border-b-[2px] md:border-r-[2px]">
          <h3 className="flex items-center gap-2 text-2xl">
            <BiBadgeCheck></BiBadgeCheck>
            Step 3
          </h3>
          <h1 className="text-5xl">
            <BsFillClipboardDataFill></BsFillClipboardDataFill>
          </h1>
          <h2 className="text-2xl font-fontSquare ">
            Financing & Registration
          </h2>
          <p className="text-center p-3 text-gray-500 font-medium">
            We deal with the paper work to avail your financing and registration
            in 24 hours
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-5 max-md:border-b-[2px]">
          <h3 className="flex items-center gap-2 text-2xl">
            <BiBadgeCheck></BiBadgeCheck>
            Step 4
          </h3>
          <h1 className="text-5xl">
            <TbTargetArrow></TbTargetArrow>
          </h1>
          <h2 className="text-2xl font-fontSquare ">Get Your Car</h2>
          <p className="text-center p-3 text-gray-500 font-medium">
            Embrace the joy of Car Ownership without any of the hassle!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarBuy;
