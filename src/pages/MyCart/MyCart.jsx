import { useEffect, useState } from "react";
import CartCard from "../../components/CartCard/CartCard";

const MyCart = () => {
  const [loadedCartData, setLoadedCartData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/cart_items")
      .then(res => res.json())
      .then(data => setLoadedCartData(data));
  }, []);
  console.log("loaded:::>", loadedCartData);
  return (
    <div>
      <h2>Cart Data Coming Soon</h2>
      <div className=" space-y-10 mx-auto border">
        {loadedCartData.map(singleProduct => (
          <CartCard
            key={singleProduct._id}
            singleProduct={singleProduct}
          ></CartCard>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
