import PropTypes from "prop-types";

export default function CartItem({ product, handleRemoveFromCart }) {
  return (
    <div className="relative flex w-full flex-col justify-between gap-6 rounded-xl bg-white p-6 sm:flex-row">
      <div className="w-32">
        <img
          src={product.image}
          alt=""
          className="h-full rounded-lg object-cover"
        />
      </div>
      <div className="flex-1">
        <h3 className="mb-3 text-lg font-bold">{product.title}</h3>
        <p className="mb-3">{product.description}</p>
        <p className="font-semibold">Price: ${product.price}</p>
      </div>
      <div className="absolute right-6 top-6">
        <button
          onClick={() => handleRemoveFromCart(product)}
          className="flex rounded-full border border-red-500 p-1"
        >
          <img src="/assets/cancel.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  product: PropTypes.object,
  handleRemoveFromCart: PropTypes.func,
};
