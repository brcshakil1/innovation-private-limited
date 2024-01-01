import { PropTypes } from "prop-types";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const Product = ({ product }) => {
  const price = (product?.price * product?.discountPercentage) / 100;

  return (
    <div className="hover:shadow-3xl transition-all duration-300 ease-in-out  p-4">
      <img
        src={product?.thumbnail}
        className="w-full h-[250px] object-cover"
        alt={product?.title}
      />
      <div>
        <h3>{product?.title}</h3>
        <p>{product?.description.slice(0, 50)}...</p>
        <p>${price.toFixed(2)}</p>
        <Rating style={{ maxWidth: 100 }} value={product?.rating} readOnly />
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object,
};

export default Product;
