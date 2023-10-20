import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const Register = () => {
  const { createAccount, updateUserInfo, setLoading } = useContext(AuthContext);
  //   console.log(updateUserInfo);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    // validation
    if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z!@#$%^&*\d]{6,}$/.test(password)) {
      return toast(
        "Please provide password they have at least 6 characters long, contain one uppercase letter, and have  one special character."
      );
    }

    // crate user account
    createAccount(email, password)
      .then(result => {
        console.log(result.user);
        updateUserInfo(name, photo)
          .then(res => {
            console.log("user update done:-->", res);
            setLoading(true);
            Swal.fire({
              title: "Done!",
              text: "Registration Successfully!",
              icon: "success",
              confirmButtonText: "close",
            });
            form.reset();
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(err => {
        console.log(err);
        toast("Registration Failed. Please try again.");
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <h2 className="text-xl md:text-3xl lg:text-4xl text-center underline uppercase font-fontSquare">
            create your identity in car master
          </h2>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 pb-6">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                name="photo"
                type="text"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
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
              <button className="btn btn-secondary">Register</button>
            </div>
          </form>
          <div className="w-full text-center">
            <span className="font-fontSquare uppercase">
              Have identity? please
            </span>{" "}
            <Link className="underline text-blue-500" to="/login">
              login
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Register;
