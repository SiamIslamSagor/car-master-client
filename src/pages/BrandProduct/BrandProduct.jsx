import { useContext, useEffect, useState } from "react";
import { getBrandInLocalStorage } from "../../localStorage";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";

const BrandProduct = () => {
  const { brandsInfo } = useContext(AuthContext);
  const [products, setProducts] = useState(null);
  const clickedBrand = getBrandInLocalStorage();
  const brandInfo = brandsInfo.find(
    brand => brand.product_brand === clickedBrand
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
      <h4>Brand is :</h4>
    </div>
  );
};

export default BrandProduct;
