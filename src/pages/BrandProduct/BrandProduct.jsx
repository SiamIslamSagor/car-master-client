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
  useEffect(() => {
    fetch(
      `https://car-master-server-gcimpo0ow-md-siam-islam-sagors-projects.vercel.app/${clickedBrand}`
    )
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [clickedBrand]);
  return (
    <div className="mt-10">
      {brandInfo && <Slider brandInfo={brandInfo}></Slider>}
      <h3 className="text-center font-fontSquare uppercase text-3xl md:text-5xl mb-16 underline font-bold">
        {products?.length > 0
          ? ` Our Available Product in ${brandInfo?.brand_title.split(": ")[0]}`
          : "PRODUCT NOT AVAILABLE FOR THIS BRAND"}
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
