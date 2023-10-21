import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider/AuthProvider";
import { BsArrowUpCircle } from "react-icons/bs";
import Footer from "../components/Footer/Footer";
const Root = () => {
  const { scrollToTop } = useContext(AuthContext);

  const { burgerClick } = useContext(AuthContext);
  return (
    <div className="font-fontNoto overflow-x-hidden bg-base-200">
      <Navbar></Navbar>
      <div className={`${burgerClick ? "max-lg:mt-60" : "mt-0"} duration-700`}>
        <Outlet></Outlet>
      </div>
      <div className="container mx-auto flex  justify-end py-10">
        <button
          className="hover:text-indigo-700 flex gap-2 items-center"
          onClick={scrollToTop}
        >
          <span className="text-2xl uppercase font-fontSquare">
            back to top
          </span>
          <BsArrowUpCircle className="text-3xl"></BsArrowUpCircle>
        </button>
      </div>

      <Footer></Footer>
      <div className="text-center footer items-center p- bg-neutral text-neutral-content">
        <aside className="mx-auto items-center grid-flow-col">
          <span className="font-fontSquare text-lg">Car master</span>
          <p>Copyright © 2023 - All right reserved</p>
        </aside>
      </div>
    </div>
  );
};

export default Root;
