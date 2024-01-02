import { PropTypes } from "prop-types";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const Product = ({ product }) => {
  const discountPrice = (product?.price * product?.discountPercentage) / 100;
  const price = product?.price - discountPrice;

  return (
    <div className="hover:shadow-3xl transition-all duration-300 ease-in-out  p-4">
      <img
        src={product?.thumbnail}
        className="w-full h-[250px] object-cover"
        alt={product?.title}
      />
      <div>
        <p className="pt-3">{product?.description.slice(0, 40)}...</p>
        <p className=" text-[#884692] font-semibold py-1">
          ${price.toFixed(2)}
        </p>
        <p className="text-sm">
          <span className="line-through text-gray-600">${product?.price}</span>{" "}
          -{product?.discountPercentage.toFixed(1)}
        </p>
        <Rating style={{ maxWidth: 80 }} value={product?.rating} readOnly />
        <button
          className="hover:bg-[#3f1a44c7] bg-[#3f1a44] mt-2 w-full 
        font-semibold text-base text-white rounded-md uppercase py-2"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object,
};

export default Product;
