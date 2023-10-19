import { useContext, useEffect, useState } from "react";
import { getBrandInLocalStorage } from "../../localStorage";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import ProductCard from "../../components/ProductCard/ProductCard";

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
    <div>
      <h4>Brand is : {brandInfo?.brand_title}</h4>
      <div className="container mx-auto space-y-6">
        {products ? (
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
