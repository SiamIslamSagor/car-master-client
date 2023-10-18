import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";

const Home = () => {
  const brands = useLoaderData();
  return (
    <div>
      <h3>this is Home</h3>
      <Banner></Banner>
      <h3>we have: {brands.length}brands</h3>
    </div>
  );
};

export default Home;
