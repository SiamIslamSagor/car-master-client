import PropTypes from "prop-types";
const BrandCard = ({ brand }) => {
  console.log(brand);
  const { brand_img, brand_title } = brand;
  return (
    <div className="card max-lg:max-w-[400px] lg:max-w-[400px] bg-base-100 shadow-xl">
      <figure>
        <img
          className="lg:w-[400px] max-lg:h-[250px] lg:h-[270px] max-lg:w-full"
          src={brand_img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-fontSquare">{brand_title}</h2>
      </div>
    </div>
  );
};

BrandCard.propTypes = {
  brand: PropTypes.object,
};

export default BrandCard;
