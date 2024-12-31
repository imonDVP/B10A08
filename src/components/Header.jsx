import Navbar from "./Navbar";
import Banner from "./Banner";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" ? (
        <header>
          <div className="mx-4 mt-6 rounded-t-xl bg-[#9538E2] text-white md:mx-5 lg:mx-6">
            <Navbar />
          </div>
          <Banner />
        </header>
      ) : (
        <header className="mx-4 mt-6 md:mx-5 lg:mx-6">
          <Navbar />
        </header>
      )}
    </>
  );
}
