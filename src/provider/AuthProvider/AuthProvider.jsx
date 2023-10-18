import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [clickedBrand, setClickedBrand] = useState("");
  const [brandsInfo, setBrandsInfo] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000")
      .then(res => res.json())
      .then(data => setBrandsInfo(data));
  }, []);

  const data = {
    user: "moksed ali",
    brandsInfo,
    clickedBrand,
    setClickedBrand,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
