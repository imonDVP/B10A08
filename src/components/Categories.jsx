import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export default function Categories({ categories }) {
  return (
    <div className="space-y-4">
      <NavLink
        className={({ isActive }) =>
          `block w-full rounded-full border px-6 py-3 ${isActive ? "bg-[#9538E2] font-bold text-white" : "bg-gray-100"}`
        }
        to="/"
      >
        All Products
      </NavLink>
      {categories.map((category) => (
        <NavLink
          key={category.id}
          className={({ isActive }) =>
            `block w-full rounded-full border px-6 py-3 ${isActive ? "bg-[#9538E2] font-bold text-white" : "bg-gray-100"}`
          }
          to={`/category/${category.category}`}
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
}

Categories.propTypes = {
  categories: PropTypes.array,
};
