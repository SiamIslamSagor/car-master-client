import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  const { logIn, googleLogIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // login user
    logIn(email, password)
      .then(result => {
        console.log(result.user);

        Swal.fire({
          title: "Done!",
          text: "Login Successfully!",
          icon: "success",
          confirmButtonText: "close",
        });
        form.reset();
        navigate(location.state ? location.state : "/");
      })
      .catch(err => {
        console.log(err);
        toast("Invalid email or password. Please try again.");
      });
  };

  const handleGoogleLoggedIn = () => {
    googleLogIn()
      .then(() => {
        Swal.fire({
          title: "Done!",
          text: "Google Login Successfully!",
          icon: "success",
          confirmButtonText: "close",
        });
        navigate(location.state ? location.state : "/");
      })
      .catch(err => {
        console.log(err);
        Swal.fire({
          title: "Failed!",
          text: "Failed to login with google, please try again!",
          icon: "error",
          confirmButtonText: "close",
        });
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <h2 className="text-xl md:text-3xl lg:text-4xl text-center underline uppercase font-fontSquare">
            Login in your car master account
          </h2>
        </div>
        <div className="pb-10 card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-accent">Login</button>
            </div>
          </form>
          <div className="w-full text-center">
            <span className="font-fontSquare uppercase">
              new in car master?
            </span>{" "}
            <Link className="underline text-blue-500" to="/register">
              Register
            </Link>
            <p className="text-gray-500">or</p>
            <p className="text-gray-500">Login with</p>
            <div className="w-full flex justify-center items-center ">
              <button
                onClick={handleGoogleLoggedIn}
                className="py-2 rounded-lg px-4 lg:px-6  border border-[#1d4ed8] hover:rounded-full hover:bg-[#1d4ed8] hover:text-white duration-700 flex items-center gap-2 mt-2"
              >
                google <FcGoogle></FcGoogle>
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
