import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";
import { getFromLS } from "../utils/getItemsFromLS";

const Navbar = ({ cart }) => {
  const navigate = useNavigate();
  const user = getFromLS("user");

  const totalPrice = cart?.reduce((total, product) => {
    const discountPrice = (product?.price * product?.discountPercentage) / 100;
    const price = product?.price - discountPrice;
    return total + price;
  }, 0);

  const handleLogout = () => {
    localStorage.clear("user");
    navigate("/login");
  };

  return (
    <div className="max-w-7xl mx-auto px-5">
      <div className="navbar ">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {cart?.length && (
                  <span className="badge badge-sm indicator-item">
                    {cart?.length}
                  </span>
                )}
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">
                  {cart?.length} Products
                </span>

                <span className="text-info">
                  Subtotal: ${totalPrice ? totalPrice.toFixed(2) : 0}
                </span>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full border-2 border-slate-600">
                <img alt="Tailwind CSS Navbar component" src={user?.image} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between font-semibold">{user?.name}</a>
              </li>
              <li onClick={handleLogout}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  cart: PropTypes.array,
  setCart: PropTypes.func,
};

export default Navbar;
