import { IoSearch } from "react-icons/io5";
import Navbar from "./Navbar";
import { PropTypes } from "prop-types";

const Banner = ({ setSearch, cart }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target.name.value);
  };

  return (
    <div>
      <Navbar cart={cart} />
      <div className="h-[40vh] md:min-h-[60vh] bg-[#3f1a44] rounded-b-md mb-10 md:mb-14">
        <div className="pt-14 md:pt-24">
          <h2 className="md:text-4xl text-2xl text-slate-300 text-center font-semibold">
            Find Your Product
          </h2>
          <form
            onSubmit={handleSubmit}
            className="bg-white w-[80%] md:w-[400px] rounded-full flex justify-between 
          items-center mx-auto overflow-hidden mt-5 "
          >
            <input
              type="text"
              name="name"
              className=" outline-none py-2 md:py-3 w-10/12 px-4"
              placeholder="Search..."
            />
            <button className=" w-2/12 flex justify-center py-2 md:py-3">
              <IoSearch className="text-xl md:text-2xl text-slate-500" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  setSearch: PropTypes.func,
  cart: PropTypes.array,
};

export default Banner;
