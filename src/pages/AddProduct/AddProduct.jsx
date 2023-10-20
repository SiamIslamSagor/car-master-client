import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";

const AddProduct = () => {
  const [productBrand, setProductBrand] = useState("toyota_products Toyota");
  const [selectRating, setSelectRating] = useState("5 star");
  const [selectType, setSelectType] = useState("car");
  const handleChangeSelect = e => {
    setProductBrand(e.target.value);
  };
  // console.log(productBrand);
  const handleChangeRating = e => {
    setSelectRating(e.target.value);
  };

  const handleChangeType = e => {
    setSelectType(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const img = form.image.value;
    const name = form.name.value;
    const brandName = productBrand.split(" ");
    const product_brand = brandName[0];
    const brand_name = brandName[1];
    const type = selectType;
    const numberPrice = form.price.value;
    const price = "$" + numberPrice + " (MSRP)";
    const shortDescription = form.shortDescription.value;
    const rating = selectRating;
    const data = {
      img,
      name,
      brand_name,
      type,
      rating,
      price,
      shortDescription,
      product_brand,
    };

    //
    fetch(
      `https://car-master-server-gcimpo0ow-md-siam-islam-sagors-projects.vercel.app/${product_brand}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then(result => {
        console.log(result);
      })
      .catch(error => console.log(error));
  };
  return (
    <div className="container mx-auto min-h-screen mt-20">
      <h2 className="text-center font-fontSquare uppercase text-3xl md:text-5xl mb-16 underline font-bold">
        Add new Product{" "}
      </h2>
      <div className="bg-base-100">
        <form onSubmit={handleSubmit} className="p-10 xl:p-24">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
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
              <select
                onChange={handleChangeType}
                className="input input-bordered"
              >
                <option value="car">car</option>
                <option value="Passenger Car">Passenger Car</option>
                <option value="Trucks">Trucks</option>
                <option value="Vans">Vans</option>
                <option value="Electric Vehicles">Electric Vehicles</option>
                <option value="Hybrid Vehicles">Hybrid Vehicles</option>
                <option value="Luxury Cars">Luxury Cars</option>
                <option value="Sports Cars">Sports Cars</option>
                <option value="Classic and Vintage Cars">
                  Classic and Vintage Cars
                </option>
                <option value="Motorcycles">Motorcycles</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                name="price"
                type="number"
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
                <option value="5 Star">5 Star</option>
                <option value="4.9 Star">4.9 Star</option>
                <option value="4.8 Star">4.8 Star</option>
                <option value="4.7 Star">4.7 Star</option>
                <option value="4.6 Star">4.6 Star</option>
                <option value="4.5 Star">4.5 Star</option>
                <option value="4.4 Star">4.4 Star</option>
                <option value="4.2 Star">4.2 Star</option>
                <option value="4 Star">4 Star</option>
                <option value="3.9 Star">3.9 Star</option>
                <option value="3.8 Star">3.8 Star</option>
                <option value="3.7 Star">3.7 Star</option>
                <option value="3.6 Star">3.6 Star</option>
                <option value="3.5 Star">3.5 Star</option>
                <option value="3.4 Star">3.4 Star</option>
                <option value="3.3 Star">3.3 Star</option>
                <option value="3.2 Star">3.2 Star</option>
                <option value="3.1 Star">3.1 Star</option>
                <option value="3 Star">3 Star</option>
                <option value="2 Star">2 Star</option>
                <option value="1 Star">1 Star</option>
              </select>
            </div>
          </div>

          <div className="form-control  mt-6">
            <button className="btn btn-outline btn-info hover:rounded-full rounded-lg duration-700">
              Add Product<IoIosAddCircle className="text-xl"></IoIosAddCircle>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
