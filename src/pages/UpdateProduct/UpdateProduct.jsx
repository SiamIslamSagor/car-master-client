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
  console.log(rating);

  ///
  console.log(brand_name);
  const [productBrand, setProductBrand] = useState(`${route} ${brand_name}`);
  const [selectRating, setSelectRating] = useState("5 star");
  const [selectType, setSelectType] = useState(`${type}`);
  console.log(selectType);
  const handleChangeSelect = e => {
    setProductBrand(e.target.value);
  };
  const handleChangeRating = e => {
    setSelectRating(e.target.value);
  };
  console.log(selectRating);
  const handleChangeType = e => {
    setSelectType(e.target.value);
  };

  const handleSubmit = e => {
    Swal.fire({
      title: "Loading...!",
      text: "Information updating, please wait!",
      icon: "info",
      confirmButtonText: "close",
    });
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
    console.log(type);
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
              <select
                onChange={handleChangeType}
                className="input input-bordered"
              >
                {type === "car" && <option value="car">car</option>}
                {type === "Passenger Car" && (
                  <option value="Passenger Car">Passenger Car</option>
                )}
                {type === "Trucks" && <option value="Trucks">Trucks</option>}
                {type === "Vans" && <option value="Vans">Vans</option>}
                {type === "Electric Vehicles" && (
                  <option value="Electric Vehicles">Electric Vehicles</option>
                )}
                {type === "Hybrid Vehicles" && (
                  <option value="Hybrid Vehicles">Hybrid Vehicles</option>
                )}
                {type === "Luxury Cars" && (
                  <option value="Luxury Cars">Luxury Cars</option>
                )}
                {type === "Sports Cars" && (
                  <option value="Sports Cars">Sports Cars</option>
                )}
                {type === "Classic and Vintage Cars" && (
                  <option value="Classic and Vintage Cars">
                    Classic and Vintage Cars
                  </option>
                )}
                {type === "Motorcycles" && (
                  <option value="Motorcycles">Motorcycles</option>
                )}

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
                defaultValue={price.split(" ")[0].slice(1, price.length)}
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
                {rating === "5 star" ||
                  (rating === "5 Star" && (
                    <option value="5 Star">5 Star</option>
                  ))}

                {rating === "4.9 star" ||
                  (rating === "4.9 Star" && (
                    <option value="4.9 Star">4.9 Star</option>
                  ))}

                {rating === "4.8 star" ||
                  (rating === "4.8 Star" && (
                    <option value="4.8 Star">4.8 Star</option>
                  ))}

                {rating === "4.7 star" ||
                  (rating === "4.7 Star" && (
                    <option value="4.7 Star">4.7 Star</option>
                  ))}

                {rating === "4.6 star" ||
                  (rating === "4.6 Star" && (
                    <option value="4.6 Star">4.6 Star</option>
                  ))}

                {rating === "4.5 star" ||
                  (rating === "4.5 Star" && (
                    <option value="4.5 Star">4.5 Star</option>
                  ))}

                {rating === "4.4 star" ||
                  (rating === "4.4 Star" && (
                    <option value="4.4 Star">4.4 Star</option>
                  ))}

                {rating === "4.3 star" ||
                  (rating === "4.3 Star" && (
                    <option value="4.3 Star">4.3 Star</option>
                  ))}

                {rating === "4.2 star" ||
                  (rating === "4.2 Star" && (
                    <option value="4.2 Star">4.2 Star</option>
                  ))}

                {rating === "4.1 star" ||
                  (rating === "4.1 Star" && (
                    <option value="4.1 Star">4.1 Star</option>
                  ))}

                {rating === "4 star" ||
                  (rating === "4 Star" && (
                    <option value="4 Star">4 Star</option>
                  ))}

                {rating === "3.9 star" ||
                  (rating === "3.9 Star" && (
                    <option value="3.9 Star">3.9 Star</option>
                  ))}

                {rating === "3.8 star" ||
                  (rating === "3.8 Star" && (
                    <option value="3.8 Star">3.8 Star</option>
                  ))}

                {rating === "3.7 star" ||
                  (rating === "3.7 Star" && (
                    <option value="3.7 Star">3.7 Star</option>
                  ))}

                {rating === "3.6 star" ||
                  (rating === "3.6 Star" && (
                    <option value="3.6 Star">3.6 Star</option>
                  ))}

                {rating === "3.5 star" ||
                  (rating === "3.5 Star" && (
                    <option value="3.5 Star">3.5 Star</option>
                  ))}

                {rating === "3.4 star" ||
                  (rating === "3.4 Star" && (
                    <option value="3.4 Star">3.4 Star</option>
                  ))}

                {rating === "3.3 star" ||
                  (rating === "3.3 Star" && (
                    <option value="3.3 Star">3.3 Star</option>
                  ))}

                {rating === "3.2 star" ||
                  (rating === "3.2 Star" && (
                    <option value="3.2 Star">3.2 Star</option>
                  ))}

                {rating === "3.1 star" ||
                  (rating === "3.1 Star" && (
                    <option value="3.1 Star">3.1 Star</option>
                  ))}

                {rating === "3 star" ||
                  (rating === "3 Star" && (
                    <option value="3 Star">3 Star</option>
                  ))}

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
