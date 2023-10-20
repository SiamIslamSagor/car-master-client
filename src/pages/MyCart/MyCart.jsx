import { useState } from "react";
import CartCard from "../../components/CartCard/CartCard";
import { useLoaderData } from "react-router-dom";

const MyCart = () => {
  const loadedCartData = useLoaderData();
  const [updatedCart, setUpdatedCart] = useState(loadedCartData);
  console.log(">>>>>", updatedCart);
  return (
    <div>
      <div className=" my-10 space-y-10 mx-auto border">
        {updatedCart.length > 0 ? (
          updatedCart.map(singleProduct => (
            <CartCard
              key={singleProduct._id}
              singleProduct={singleProduct}
              setUpdatedCart={setUpdatedCart}
              updatedCart={updatedCart}
            ></CartCard>
          ))
        ) : (
          <div className="h-[80vh] flex items-center justify-center">
            <h3 className="text-4xl text-center">
              You have not added any products to your cart
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCart;
