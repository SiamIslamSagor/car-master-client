import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { CgDetailsMore } from "react-icons/cg";
import { GrDocumentUpdate } from "react-icons/gr";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import { setObjInLS } from "../../localStorage";
import StarRatings from "react-star-ratings";
const ProductCard = ({ product }) => {
  const { setClickedProductDetail } = useContext(AuthContext);
  const handleUpdate = () => {
    console.log("handle update called.");
    setObjInLS(product);
    setClickedProductDetail(product);
  };
  console.log(product);
  const { _id, img, name, brand_name, rating, type, price } = product;

  return (
    <div className="card card-side bg-base-100 shadow-xl max-lg:flex-col">
      <figure>
        <img
          className="h-[350px] max-w-[580px] max-sm:h-[240px] max-lg:rounded-2xl lg:w-[700px]"
          src={img}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-fontSquare">{name}</h2>
        <p className="text-gray-600">Brand Name: {brand_name}</p>
        <span>Type: {type}</span>
        <div className="flex items-center gap-2">
          <span>Rating: {rating.split(" ")[0]}</span>
          <StarRatings
            rating={rating.split(" ")[0] / 1}
            starDimension="25px"
            starSpacing="8px"
            starHoverColor="green"
            starRatedColor={`${
              rating.split(" ")[0] >= 4.8 ? "yellow" : "green"
            } `}
          />
        </div>
        <span>Price: {price}</span>

        <div className="card-actions justify-end">
          <Link to="/updateProduct">
            <button
              onClick={handleUpdate}
              className="btn btn-secondary btn-outline hover:rounded-full duration-1000"
            >
              Update
              <GrDocumentUpdate className="text-xl text-white"></GrDocumentUpdate>
            </button>
          </Link>
          <Link to={`/${product?.product_brand}/${_id}`}>
            <button className="btn btn-primary btn-outline hover:rounded-full duration-1000">
              Details<CgDetailsMore className="text-xl"></CgDetailsMore>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
