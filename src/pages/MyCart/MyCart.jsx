import { useContext, useState } from "react";
import CartCard from "../../components/CartCard/CartCard";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";

const MyCart = () => {
  const { user } = useContext(AuthContext);
  const loadedCartData = useLoaderData();
  const [updatedCart, setUpdatedCart] = useState(loadedCartData);
  const userCartItem = updatedCart.filter(
    cartItem => cartItem.userEmail === user?.email
  );
  return (
    <div>
      {userCartItem.length > 0 && (
        <h3 className="text-center mt-10 font-fontSquare font-bold uppercase underline text-lg md:text-3xl">
          Your Added Cart Item
        </h3>
      )}
      <div className=" my-10 space-y-10 mx-auto border">
        {userCartItem.length > 0 ? (
          userCartItem.map(singleProduct => (
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
