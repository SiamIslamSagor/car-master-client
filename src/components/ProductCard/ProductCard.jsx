import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
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
        <span>Rating: {rating}</span>
        <span>Price: {price}</span>
        <div className="card-actions justify-end">
          <button className="btn btn-secondary">Update </button>
          <Link to={`/${product?.product_brand}/${_id}`}>
            <button className="btn btn-primary">Details </button>
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
