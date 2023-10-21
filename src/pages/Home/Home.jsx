import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import BrandContainer from "../../components/BrandContainer/BrandContainer";
import CarBuy from "../../components/CarBuy/CarBuy";
import Welcome from "../../components/Welcome/Welcome";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Car Master | Home</title>
      </Helmet>
      <Banner></Banner>
      <BrandContainer></BrandContainer>
      <Welcome></Welcome>
      <CarBuy></CarBuy>
    </div>
  );
};

export default Home;
