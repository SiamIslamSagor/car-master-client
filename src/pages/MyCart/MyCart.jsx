import { useState } from "react";
import CartCard from "../../components/CartCard/CartCard";
import { useLoaderData } from "react-router-dom";

const MyCart = () => {
  //   const [loadedCartData, setLoadedCartData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://car-master-server-gcimpo0ow-md-siam-islam-sagors-projects.vercel.app/cart_items")
  //       .then(res => res.json())
  //       .then(data => setLoadedCartData(data));
  //   }, []);
  //   console.log("loaded:::>", loadedCartData);

  //
  const loadedCartData = useLoaderData();
  const [updatedCart, setUpdatedCart] = useState(loadedCartData);
  console.log(">>>>>", updatedCart);
  return (
    <div>
      <h2>Cart Data Coming Soon</h2>
      <div className=" space-y-10 mx-auto border">
        {updatedCart?.map(singleProduct => (
          <CartCard
            key={singleProduct._id}
            singleProduct={singleProduct}
            setUpdatedCart={setUpdatedCart}
            updatedCart={updatedCart}
          ></CartCard>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
