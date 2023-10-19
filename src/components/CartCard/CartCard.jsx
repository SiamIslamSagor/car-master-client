import PropTypes from "prop-types";
const CartCard = ({ singleProduct }) => {
  const { _id, img, name, brand_name, rating, type, price } = singleProduct;

  return (
    <div className="container mx-auto">
      <div className="card max-w-[980px] mx-auto card-side bg-base-100 shadow-xl max-lg:flex-col-reverse">
        <div className="card-body">
          <h2 className="card-title font-fontSquare">{name}</h2>
          <p className="text-gray-600">Brand Name: {brand_name}</p>
          <span>Type: {type}</span>
          <span>Rating: {rating}</span>
          <span>Price: {price}</span>
          <div className="flex items-center">
            <p className="grow text-gray-700 ">Remove</p>
            <div className=" border-2 h-1 w-full mx-4 px-10"></div>
            <div className="grow">
              {" "}
              <button className=" btn btn-secondary btn-circle">X</button>
            </div>
          </div>
        </div>
        <figure>
          <img
            className="h-[350px] max-w-[580px] max-sm:h-[240px] max-lg:rounded-2xl"
            src={img}
            alt="Movie"
          />
        </figure>
      </div>
    </div>
  );
};

CartCard.propTypes = {
  singleProduct: PropTypes.object,
};

export default CartCard;
