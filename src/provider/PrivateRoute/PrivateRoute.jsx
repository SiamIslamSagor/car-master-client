import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import PropTypes from "prop-types";
const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { spinner, user } = useContext(AuthContext);
  if (spinner) {
    return (
      <div className="h-screen flex items-center justify-center">
        <span className="loading loading-lg loading-spinner text-warning"></span>
      </div>
    );
  }
  if (!user) {
    return <Navigate state={location?.pathname} to="/login"></Navigate>;
  }
  return children;
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
