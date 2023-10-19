import { useContext, useEffect, useState } from "react";
import { getBrandInLocalStorage } from "../../localStorage";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import ProductCard from "../../components/ProductCard/ProductCard";
import Slider from "../../components/Slider/Slider";

const BrandProduct = () => {
  const { brandsInfo } = useContext(AuthContext);
  const [products, setProducts] = useState(null);
  const clickedBrand = getBrandInLocalStorage();
  const brandInfo = brandsInfo?.find(
    brand => brand?.product_brand === clickedBrand
  );
  console.log(brandInfo);
  useEffect(() => {
    fetch(`http://localhost:5000/${clickedBrand}`)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [clickedBrand]);
  console.log(products);
  return (
    <div className="mt-10">
      {brandInfo && <Slider brandInfo={brandInfo}></Slider>}
      <h3 className="text-center font-fontSquare uppercase text-3xl md:text-5xl mb-16 underline font-bold">
        Our Available Product
      </h3>
      <div className="container mx-auto space-y-6">
        {products && brandInfo ? (
          products?.map(product => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))
        ) : (
          <div className="h-screen flex items-center justify-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandProduct;
