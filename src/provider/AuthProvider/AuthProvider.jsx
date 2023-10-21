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
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [clickedBrand, setClickedBrand] = useState("");
  const [brandsInfo, setBrandsInfo] = useState(null);
  const [clickedProductDetail, setClickedProductDetail] = useState({});
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(null);
  const [burgerClick, setBurgerClick] = useState(false);
  const [spinner, setSpinner] = useState(true);
  const [webTheme, setWebTheme] = useState(false);

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
    setSpinner(true);
    return signInWithPopup(auth, googleProvider);
  };

  // log out user
  const logOut = () => {
    setSpinner(true);
    return signOut(auth);
  };

  // update user details
  const updateUserInfo = (userName, userPhoto) => {
    return updateProfile(auth.currentUser, {
      displayName: userName,
      photoURL: userPhoto,
    });
  };

  // scroll top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, presentUser => {
      setUser(presentUser);
      console.log("Present User::>", presentUser);
      setSpinner(false);
    });
    return () => {
      unSubscribe();
    };
  }, [loading]);

  useEffect(() => {
    fetch(
      "https://car-master-server-gcimpo0ow-md-siam-islam-sagors-projects.vercel.app"
    )
      .then(res => res.json())
      .then(data => setBrandsInfo(data));
  }, []);

  const data = {
    user,
    burgerClick,
    setBurgerClick,
    createAccount,
    setLoading,
    logIn,
    googleLogIn,
    updateUserInfo,
    logOut,
    scrollToTop,
    brandsInfo,
    spinner,
    setSpinner,
    clickedBrand,
    setClickedBrand,
    clickedProductDetail,
    setClickedProductDetail,
    webTheme,
    setWebTheme,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
