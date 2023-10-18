import PropTypes from "prop-types";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import { setBrandInLocalStorage } from "../../localStorage";
const BrandCard = ({ brand }) => {
  console.log(brand);
  const { brand_img, brand_title, product_brand } = brand;

  return (
    <Link to="/brand">
      <div
        onClick={() => setBrandInLocalStorage(product_brand)}
        className="card max-lg:max-w-[400px] lg:max-w-[400px] bg-base-100 shadow-xl"
      >
        <figure>
          <img
            className="lg:w-[400px] max-lg:h-[250px] lg:h-[270px] max-lg:w-full"
            src={brand_img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-fontSquare">{brand_title}</h2>
        </div>
      </div>
    </Link>
  );
};

BrandCard.propTypes = {
  brand: PropTypes.object,
};

export default BrandCard;