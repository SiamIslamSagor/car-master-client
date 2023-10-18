import PropTypes from "prop-types";
const ProductCard = ({ product }) => {
  const { img, name, brand_name, rating, type, price } = product;
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img className="h-[350px] w-[580px]" src={img} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-gray-600">Brand Name: {brand_name}</p>
        <span>Type: {type}</span>
        <span>Rating: {rating}</span>
        <span>Price: {price}</span>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Details </button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
