import { useEffect, useState } from "react";
import { getBrandInLocalStorage } from "../../localStorage";

const BrandProduct = () => {
  const [products, setProducts] = useState(null);
  const clickedBrand = getBrandInLocalStorage();
  //   console.log(clickedBrand);
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
