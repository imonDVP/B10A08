import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../App";

export default function Navbar() {
  const { productsInCart, productsInWishlist } = useContext(Context);

  return (
    <nav className="py-2">
      <div className="navbar mx-auto w-11/12 max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost pl-0 lg:hidden"
            >
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 gap-2 rounded-box bg-base-100 p-2 text-black shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/statistics">Statistics</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
              <li>
                <NavLink to="/support">Support</NavLink>
              </li>
            </ul>
          </div>
          <a className="text-lg font-bold sm:text-xl">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-4 px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/statistics">Statistics</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/support">Support</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-circle bg-white shadow-none"
            >
              <div className="indicator">
                <img src="/assets/cart.svg" alt="" className="h-5 w-5" />
                <span className="badge indicator-item badge-sm">
                  {productsInCart.length}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card dropdown-content card-compact z-[1] mt-3 w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold text-black">
                  {productsInCart.length} Items
                </span>
                <span className="text-info">
                  Subtotal: ${productsInCart.reduce((a, b) => a + b.price, 0)}
                </span>
                <div className="card-actions">
                  <NavLink
                    to="/dashboard/cart"
                    className="btn btn-block bg-[#9538E2] text-white"
                  >
                    View cart
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-circle bg-white shadow-none"
            >
              <div className="indicator">
                <img src="/assets/heart.svg" alt="" className="h-5 w-5" />
                <span className="badge indicator-item badge-sm">
                  {productsInWishlist.length}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card dropdown-content card-compact z-[1] mt-3 w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold text-black">
                  {productsInWishlist.length} Items
                </span>
                <span className="text-info">
                  Subtotal: $
                  {productsInWishlist.reduce((a, b) => a + b.price, 0)}
                </span>
                <div className="card-actions">
                  <NavLink
                    to="/dashboard/wishlist"
                    className="btn btn-block bg-[#9538E2] text-white"
                  >
                    View wishlist
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
