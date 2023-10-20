import { IoIosAddCircle } from "react-icons/io";
import { getObjInLS } from "../../localStorage";
import { useState } from "react";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const clickUpdateCardData = getObjInLS();
  console.log(clickUpdateCardData);

  const {
    _id,
    img,
    name,
    brand_name,
    product_brand: route,
    type,
    price,
    shortDescription,
    rating,
    description,
  } = clickUpdateCardData;
  console.log(route, brand_name);

  ///
  console.log(brand_name);
  const [productBrand, setProductBrand] = useState(`${route} ${brand_name}`);
  const [selectRating, setSelectRating] = useState("5 star");
  const handleChangeSelect = e => {
    setProductBrand(e.target.value);
  };
  const handleChangeRating = e => {
    setSelectRating(e.target.value);
  };
  console.log(selectRating);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const img = form.image.value;
    const name = form.name.value;
    const brandName = productBrand.split(" ");
    const product_brand = brandName[0];
    const brand_name = brandName[1];
    const type = form.type.value;
    const numberPrice = form.price.value;
    const price = "$" + numberPrice + " (MSRP)";
    const shortDescription = form.shortDescription.value;
    const rating = selectRating;
    const updatedData = {
      img,
      name,
      brand_name,
      type,
      rating,
      price,
      shortDescription,
      product_brand,
    };
    console.log(product_brand);
    //
    fetch(
      `https://car-master-server-gcimpo0ow-md-siam-islam-sagors-projects.vercel.app/${route}/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedData),
      }
    )
      .then(result => {
        console.log(result);
        console.log(brand_name, route);
        Swal.fire({
          title: "Done!",
          text: "Information Update Successfully!",
          icon: "success",
          confirmButtonText: "close",
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="container mx-auto min-h-screen mt-20">
      <h2 className="text-center font-fontSquare uppercase text-3xl md:text-5xl mb-16 underline font-bold">
        Update a Product{" "}
      </h2>
      <div className="bg-base-100">
        <form onSubmit={handleSubmit} className="p-10 xl:p-24">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              defaultValue={img}
              name="image"
              type="text"
              placeholder="Image"
              className="input input-bordered"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                defaultValue={name}
                name="name"
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <select
                onChange={handleChangeSelect}
                className="input input-bordered"
              >
                {brand_name === "Toyota" && (
                  <option value="toyota_products Toyota">Toyota</option>
                )}

                {brand_name === "Lamborghini" && (
                  <option value="lamborghini_products Lamborghini">
                    Lamborghini
                  </option>
                )}

                {brand_name === "BMW" && (
                  <option value="bmw_products BMW">BMW</option>
                )}

                {brand_name === "Marcedes-Benz" && (
                  <option value="mercedes_products Mercedes-Benz">
                    Mercedes-Benz
                  </option>
                )}

                {brand_name === "Tesla" && (
                  <option value="tesla_products Tesla">Tesla</option>
                )}

                {brand_name === "Honda" && (
                  <option value="honda_products Honda">Honda</option>
                )}

                <option value="toyota_products Toyota">Toyota</option>
                <option value="lamborghini_products Lamborghini">
                  Lamborghini
                </option>
                <option value="bmw_products BMW">BMW</option>
                <option value="mercedes_products Mercedes-Benz">
                  Mercedes-Benz
                </option>
                <option value="tesla_products Tesla">Tesla</option>
                <option value="honda_products Honda">Honda</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Type </span>
              </label>
              <input
                defaultValue={type}
                name="type"
                type="text"
                placeholder="Type"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                defaultValue={price}
                name="price"
                type="text"
                placeholder="Price"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Short description</span>
              </label>
              <input
                defaultValue={shortDescription ? shortDescription : description}
                name="shortDescription"
                type="text"
                placeholder="Short description"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <select
                onChange={handleChangeRating}
                className="input input-bordered"
              >
                {rating === "4.9 star" && (
                  <option value="4.9 Star">4.9 Star</option>
                )}

                {rating === "4.8 star" && (
                  <option value="4.8 Star">4.8 Star</option>
                )}

                {rating === "4.7 star" && (
                  <option value="4.7 Star">4.7 Star</option>
                )}

                {rating === "4.6 star" && (
                  <option value="4.6 Star">4.6 Star</option>
                )}

                {rating === "4.5 star" && (
                  <option value="4.5 Star">4.5 Star</option>
                )}

                {rating === "4.4 star" && (
                  <option value="4.4 Star">4.4 Star</option>
                )}
                <option value="4.9 Star">4.9 Star</option>
                <option value="4.8 Star">4.8 Star</option>
                <option value="4.7 Star">4.7 Star</option>
                <option value="4.6 Star">4.6 Star</option>
                <option value="4.5 Star">4.5 Star</option>
                <option value="4.4 Star">4.4 Star</option>
                <option value="4.2 Star">4.2 Star</option>
                <option value="4 Star">4 Star</option>
                <option value="3.5 Star">3.5 Star</option>
                <option value="3 Star">3 Star</option>
                <option value="2 Star">2 Star</option>
                <option value="1 Star">1 Star</option>
              </select>
            </div>
          </div>

          <div className="form-control  mt-6">
            <button className="btn btn-outline btn-accent hover:rounded-full rounded-lg duration-700">
              Update Product
              <IoIosAddCircle className="text-xl"></IoIosAddCircle>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
