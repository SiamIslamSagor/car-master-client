import { useContext, useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import BrandContainer from "../../components/BrandContainer/BrandContainer";
import CarBuy from "../../components/CarBuy/CarBuy";
import Welcome from "../../components/Welcome/Welcome";
import "./Home.css";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
const Home = () => {
  const { scrollToTop } = useContext(AuthContext);
  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);
  return (
    <div>
      <Banner></Banner>
      <BrandContainer></BrandContainer>
      <Welcome></Welcome>
      <CarBuy></CarBuy>
    </div>
  );
};

export default Home;
