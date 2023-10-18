import Banner from "../../components/Banner/Banner";
import BrandContainer from "../../components/BrandContainer/BrandContainer";
import CarBuy from "../../components/CarBuy/CarBuy";
import Welcome from "../../components/Welcome/Welcome";

const Home = () => {
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
