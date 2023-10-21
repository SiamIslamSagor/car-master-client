import { NavLink } from "react-router-dom";
import defaultProfile from "../../assets/default_profile.jpg";
import logo from "/car_img_logo.png";
import lightLogo from "/car_logo_light.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
const Navbar = () => {
  const { user, logOut, burgerClick, setBurgerClick } = useContext(AuthContext);

  const [webTheme, setWebTheme] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Done!",
          text: "Log Out Successfully!",
          icon: "success",
          confirmButtonText: "close",
        });
      })
      .catch(error => {
        console.log(error);
        toast("Log Out Failed");
      });
  };

  //theme changer
  const handleTheme = () => {
    const theme = localStorage.getItem("theme");
    theme === "light"
      ? localStorage.setItem("theme", "synthwave")
      : localStorage.setItem("theme", "light");
    setWebTheme(!webTheme);
  };

  useEffect(() => {
    localStorage.getItem("theme") || localStorage.setItem("theme", "light");
    const presentTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", presentTheme);
  }, [webTheme]);

  const links = (
    <>
      <li className="hover:font-medium">
        <NavLink
          style={({ isActive }) => ({
            color: isActive && "#1d4ed8",
            background: isActive && "none",
            textDecoration: "underline",
          })}
          className="hover:text-[#1d4ed8] max-2xl:px-2"
          to="/"
        >
          HOME
        </NavLink>
      </li>
      <li className="hover:font-medium">
        <NavLink
          style={({ isActive }) => ({
            color: isActive && "#1d4ed8",
            background: isActive && "none",
            textDecoration: "underline",
          })}
          className="hover:text-[#1d4ed8] max-2xl:px-2"
          to="/addProduct"
        >
          ADD PRODUCT
        </NavLink>
      </li>
      <li className="hover:font-medium">
        <NavLink
          style={({ isActive }) => ({
            color: isActive && "#1d4ed8",
            background: isActive && "none",
            textDecoration: "underline",
          })}
          className="hover:text-[#1d4ed8] max-2xl:px-2"
          to="/myCart"
        >
          MY CART
        </NavLink>
      </li>
      <li className="hover:font-medium">
        <NavLink
          style={({ isActive }) => ({
            color: isActive && "#1d4ed8",
            background: isActive && "none",
            textDecoration: "underline",
          })}
          className="hover:text-[#1d4ed8] max-2xl:px-2"
          to="/about"
        >
          ABOUT
        </NavLink>
      </li>
      <li className="hover:font-medium ">
        <NavLink
          style={({ isActive }) => ({
            color: isActive && "#1d4ed8",
            background: isActive && "none",
            textDecoration: "underline",
          })}
          className="hover:text-[#1d4ed8]"
          to="/login"
        >
          LOGIN
        </NavLink>
      </li>
      <li onClick={handleLogOut} className="hover:font-medium md:hidden">
        <NavLink
          style={({ isActive }) => ({
            color: isActive && "#1d4ed8",
            background: isActive && "none",
            textDecoration: "underline",
          })}
          className="hover:text-[#1d4ed8]"
          to="/login"
        >
          LOG OUT
        </NavLink>
      </li>
      <li className="hover:font-medium ">
        <NavLink
          style={({ isActive }) => ({
            color: isActive && "#1d4ed8",
            background: isActive && "none",
            textDecoration: "underline",
          })}
          className="hover:text-[#1d4ed8]"
          to="/register"
        >
          REGISTER
        </NavLink>
      </li>
    </>
  );
  return (
    <div className={`z-50 duration-700 font-fontSquare   drop-shadow-lg`}>
      <div className="navbar  container mx-auto">
        <div className="navbar-start">
          <details className="dropdown">
            <summary
              tabIndex={0}
              onClick={() => setBurgerClick(!burgerClick)}
              className="btn btn-ghost lg:hidden"
            >
              {burgerClick ? (
                <AiOutlineClose className="text-2xl"></AiOutlineClose>
              ) : (
                <AiOutlineMenu className="text-2xl"></AiOutlineMenu>
              )}
            </summary>
            <ul
              tabIndex={0}
              className="lg:hidden menu mt-6 menu-sm bg-[#111827] text-white dropdown-content  z-[1] p-2 shadow rounded-box w-52"
            >
              {links}
            </ul>
          </details>
          <a className="">
            <img
              className=" rounded-xl max-w-[100px] md:max-w-[150px]"
              src={`${
                localStorage.getItem("theme") === "light" ? logo : lightLogo
              }`}
              alt="car master logo"
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <div className="  max-md:hidden">
            {user && (
              <button
                onClick={handleLogOut}
                className="py-2 mr-4 text-custom-color px-3 lg:px-6  border border-[#1d4ed8] rounded-full hover:bg-[#1d4ed8] hover:text-white duration-700 flex items-center gap-2"
              >
                Log Out
              </button>
            )}
          </div>
          <div className="flex items-center gap-2 lg:gap-4">
            {user ? (
              <div>
                <h4 className="max-sm:hidden text-center">
                  {user?.displayName}
                </h4>
              </div>
            ) : (
              <div>
                <h4 className="max-sm:hidden text-center">USER NAME</h4>
              </div>
            )}

            {user ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full  duration-500">
                    <img
                      className="h-12 rounded-full "
                      src={user?.photoURL}
                      alt="default user img"
                    />
                  </div>
                </label>
              </div>
            ) : (
              <div>
                <img
                  className="h-12 rounded-full "
                  src={defaultProfile}
                  alt="default user img"
                />
              </div>
            )}
            <div
              onClick={handleTheme}
              className=" rounded-full  cursor-pointer bg-base-200 drop-shadow-xl w-[84px]"
            >
              {localStorage.getItem("theme") === "synthwave" ? (
                <div className="pl-12 duration-500 text-2xl md:text-3xl  text-blue-400 bg-[#172554] rounded-full py-1">
                  <BsMoonStarsFill className="p-1"></BsMoonStarsFill>
                </div>
              ) : (
                <div className=" pr-12 duration-500 text-2xl md:text-3xl bg-white px-1 rounded-full py-1">
                  <BsFillSunFill className="p-1"></BsFillSunFill>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Navbar;
