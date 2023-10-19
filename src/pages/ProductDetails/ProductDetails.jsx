import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h4>Product details</h4>
    </div>
  );
};

export default ProductDetails;
