import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { RiDeleteBin5Line } from "react-icons/ri";
const CartCard = ({ singleProduct, setUpdatedCart, updatedCart }) => {
  const { _id, img, name, brand_name, rating, type, price } = singleProduct;

  const handleDelete = id => {
    console.log(id);
    // to delete
    fetch(`http://localhost:5000/cart_items/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.deletedCount === 1) {
          Swal.fire({
            title: "Done!",
            text: "Product remove form Cart successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          const updatedCartData = updatedCart.filter(
            singleData => singleData._id !== id
          );
          setUpdatedCart(updatedCartData);
          console.log("data set done>");
        }
      });
  };

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
              <button
                onClick={() => handleDelete(_id)}
                className=" btn btn-outline btn-error btn-circle text-xl"
              >
                <RiDeleteBin5Line></RiDeleteBin5Line>
              </button>
            </div>
          </div>
        </div>
        <figure>
          <img
            className="h-[350px] max-w-[580px] max-sm:h-[240px] max-lg:rounded-2xl lg:w-[540px]"
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
  updatedCart: PropTypes.array,
  setUpdatedCart: PropTypes.func,
};

export default CartCard;
