import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { createContext, useState } from "react";
import { Helmet} from "react-helmet-async";
import { getAllProductsFromCart, getAllProductsFromWishlist } from ".";

// eslint-disable-next-line react-refresh/only-export-components
export const Context = createContext(null);

function App() {
  const [productsInCart, setProductsInCart] = useState(
    getAllProductsFromCart(),
  );
  const [productsInWishlist, setProductsInWishlist] = useState(
    getAllProductsFromWishlist(),
  );
  const updateState = () => {
    setProductsInCart(getAllProductsFromCart());
    setProductsInWishlist(getAllProductsFromWishlist());
  };

  return (
    <>
      <Context.Provider
        value={{ productsInCart, productsInWishlist, updateState }}
      >
        <Helmet>
          <title>Gadget Heaven</title>
        </Helmet>
        <Toaster />
        <Header />
        <Outlet />
        <Footer />
      </Context.Provider>
    </>
  );
}

export default App;
