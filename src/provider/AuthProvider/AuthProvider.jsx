import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [clickedBrand, setClickedBrand] = useState("");
  const [brandsInfo, setBrandsInfo] = useState(null);
  const [clickedProductDetail, setClickedProductDetail] = useState({});

  useEffect(() => {
    fetch(
      "https://car-master-server-gcimpo0ow-md-siam-islam-sagors-projects.vercel.app"
    )
      .then(res => res.json())
      .then(data => setBrandsInfo(data));
  }, []);

  console.log(brandsInfo);
  const data = {
    user: "moksed ali",
    brandsInfo,
    clickedBrand,
    setClickedBrand,
    clickedProductDetail,
    setClickedProductDetail,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
