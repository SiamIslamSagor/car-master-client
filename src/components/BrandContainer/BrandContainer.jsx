import { useLoaderData } from "react-router-dom";
import BrandCard from "../BrandCard/BrandCard";

const BrandContainer = () => {
  const brands = useLoaderData();

  return (
    <div className="container mx-auto my-10 px-2">
      <h2 className="text-5xl my-16 font-fontSquare text-center">
        Your Favorite Brands Available Now!
      </h2>
      <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {brands.map(brand => (
          <BrandCard key={brand.id} brand={brand}></BrandCard>
        ))}
      </div>
    </div>
  );
};

export default BrandContainer;
