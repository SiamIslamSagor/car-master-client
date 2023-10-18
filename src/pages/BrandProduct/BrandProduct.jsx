import { getBrandInLocalStorage } from "../../localStorage";

const BrandProduct = () => {
  const clickedBrand = getBrandInLocalStorage();
  console.log(clickedBrand);
  return (
    <div>
      <h4>Brand is :</h4>
    </div>
  );
};

export default BrandProduct;
