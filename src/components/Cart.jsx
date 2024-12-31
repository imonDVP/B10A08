import { useContext, useState } from "react";
import CartItem from "./CartItem";
import { getAllProductsFromCart, removeFromCart } from "..";
import { Context } from "../App";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Cart() {
  const [cartItems, setCartItems] = useState(getAllProductsFromCart());
  const { updateState } = useContext(Context);
  const navigate = useNavigate();

  const [total, setTotal] = useState(0);

  const handleTotal = () => {
    const total = cartItems.reduce((a, b) => a + b.price, 0);
    setTotal(total);
  };

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
    setCartItems(getAllProductsFromCart());
    updateState();
  };

  const handleSortByPrice = () => {
    const sortedCartItems = [...cartItems].sort((a, b) => b.price - a.price);
    setCartItems(sortedCartItems);
  };

  const handlePurchase = () => {
    document.getElementById("my_modal_1").showModal();
    handleTotal();
    localStorage.setItem("cart", JSON.stringify([]));
    setCartItems([]);
    updateState();
  };

  return (
    <>
      <Helmet>
        <title>Cart | Gadget Heaven</title>
      </Helmet>
      <div className="mx-auto w-11/12 max-w-screen-xl">
        <div className="my-8 flex flex-col items-center justify-between sm:flex-row">
          <h2 className="text-xl font-bold">Cart</h2>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <h2 className="text-xl font-bold">
              Total cost: ${cartItems.reduce((a, b) => a + b.price, 0)}
            </h2>
            <button
              onClick={handleSortByPrice}
              className="flex gap-2 rounded-full border border-[#9538E2] px-6 py-3 font-bold text-[#9538E2]"
            >
              Sort by Price <img src="/assets/sort.svg" alt="" />
            </button>
            <button
              disabled={cartItems.length === 0}
              onClick={() => handlePurchase()}
              className="rounded-full bg-[#9538E2] px-6 py-3 text-white disabled:bg-[#9538E2]/50"
            >
              Purchase
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {cartItems.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          ))}
        </div>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <div className="mb-4 flex justify-center">
              <img src="/assets/success.svg" alt="" className="h-20 w-20" />
            </div>
            <h3 className="text-center text-2xl font-bold">
              Payment Successful
            </h3>
            <hr className="my-4 w-full" />
            <p className="mb-2 text-center">Thanks for purchasing!</p>
            <p className="mb-4 text-center">Total: ${total}</p>

            <div className="modal-action">
              <form method="dialog" className="w-full">
                <button
                  onClick={() => navigate("/")}
                  className="w-full rounded-full bg-gray-200 px-4 py-2"
                >
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
        <div className="h-24"></div>
      </div>
    </>
  );
}
