import { NavLink, Outlet } from "react-router-dom";
import Heading from "./Heading";
import { Helmet } from "react-helmet-async";

export default function Dashboard() {
  return (
    <>
      <Helmet>
        <title>Dashboard | Gadget Heaven</title>
      </Helmet>
      <div>
        <Heading
          title="Dashboard"
          description="Manage your product cart and wishlist here. Add, edit, and delete products from your cart and wishlist. Keep track of your total cost and payment status."
        />
        <div className="flex items-center justify-center gap-6 bg-[#9538E2] pb-8">
          <NavLink
            to="/dashboard/cart"
            className={({ isActive }) =>
              `inline-block min-w-32 rounded-full border px-6 py-3 text-center ${isActive ? "bg-white font-bold text-[#9538E2]" : "text-white"}`
            }
          >
            Cart
          </NavLink>
          <NavLink
            to="/dashboard/wishlist"
            className={({ isActive }) =>
              `inline-block min-w-32 rounded-full border px-6 py-3 text-center ${isActive ? "bg-white font-bold text-[#9538E2]" : "text-white"}`
            }
          >
            Wishlist
          </NavLink>
        </div>
        <Outlet />
      </div>
    </>
  );
}
