import { useLoaderData } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Swal from "sweetalert2";
const ProductDetails = () => {
  const loadedProduct = useLoaderData();
  const {
    description,
    design_and_styling_features,
    engine_options_range,
    img,
    luxury_and_comfort_features,
    name,
    price,
    technology_safety_features,
  } = loadedProduct;
  console.log(loadedProduct);

  const handleAddToCart = product => {
    const { _id, ...rest } = product;
    console.log(_id);

    //
    fetch("http://localhost:5000/cart_items", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(rest),
    })
      .then(result => {
        console.log(result);
        Swal.fire({
          title: "Done!",
          text: "Product Added Successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });
      })
      .catch(error => console.log(error));
  };
  return (
    <div className="container mx-auto px-2 my-5">
      <div className="relative">
        <img className="rounded-2xl" src={img} alt="" />
        <div className="absolute w-full max-sm:p-2 p-5 lg:p-10 rounded-b-2xl bottom-0 flex justify-between bg-black opacity-70 text-white items-center">
          <div>
            <h2 className="lg:text-2xl">{name}</h2>
            <h4 className="lg:text-2xl">{price}</h4>
          </div>
          <button
            onClick={() => handleAddToCart(loadedProduct)}
            className="btn btn-outline btn-success hover:rounded-full duration-1000 lg:text-lg"
          >
            <FaShoppingCart></FaShoppingCart>Add To Cart
          </button>
        </div>
      </div>
      <div className="my-4 sm:space-y-2">
        {description &&
        engine_options_range &&
        design_and_styling_features &&
        luxury_and_comfort_features &&
        technology_safety_features ? (
          <div className="my-4 sm:space-y-2">
            <h3 className="md:text-3xl lg:text-4xl underline font-fontSquare">
              Description:
            </h3>
            <p className="text-gray-600 md:text-xl">{description}</p>

            <h3 className="md:text-3xl lg:text-4xl underline font-fontSquare">
              Engine Options Range:
            </h3>
            <p className="text-gray-600 md:text-xl">{engine_options_range}</p>

            <h3 className="md:text-3xl lg:text-4xl underline font-fontSquare">
              Design & Styling Features:
            </h3>
            <p className="text-gray-600 md:text-xl">
              {design_and_styling_features}
            </p>

            <h3 className="md:text-3xl lg:text-4xl underline font-fontSquare">
              Luxury & Comfort Features:
            </h3>
            <p className="text-gray-600 md:text-xl">
              {luxury_and_comfort_features}
            </p>

            <h3 className="md:text-3xl lg:text-4xl underline font-fontSquare">
              Technology & Safety Features:
            </h3>
            <p className="text-gray-600 md:text-xl">
              {technology_safety_features}
            </p>
          </div>
        ) : (
          <div className="my-4 sm:space-y-2">
            <h3 className="md:text-3xl lg:text-4xl underline font-fontSquare">
              Short Description:
            </h3>
            <p className="text-gray-600 md:text-xl">
              {loadedProduct.shortDescription}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
