import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [clickedBrand, setClickedBrand] = useState("");
  const [brandsInfo, setBrandsInfo] = useState(null);
  const [clickedProductDetail, setClickedProductDetail] = useState({});
  const [user, setUser] = useState(null);
  // const [spinner, setSpinner] = useState(true);

  ///// Authentication

  // google provider
  const googleProvider = new GoogleAuthProvider();

  // create user account
  const createAccount = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in user account
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google log in
  const googleLogIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // log out user
  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, presentUser => {
      setUser(presentUser);
      console.log("please add ENV,Present User::>", presentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  useEffect(() => {
    fetch(
      "https://car-master-server-gcimpo0ow-md-siam-islam-sagors-projects.vercel.app"
    )
      .then(res => res.json())
      .then(data => setBrandsInfo(data));
  }, []);

  console.log(brandsInfo);
  const data = {
    user,
    createAccount,
    logIn,
    googleLogIn,
    logOut,
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
