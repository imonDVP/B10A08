export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto w-11/12 max-w-screen-xl py-12 sm:py-16 md:py-20 lg:py-24">
        <h2 className="mb-3 text-center text-2xl font-bold">Gadget Heaven</h2>
        <p className="mb-6 text-center text-sm sm:text-base">
          Leading the way in cutting-edge technology and innovation.
        </p>
        <hr />
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="text-center">
            <h3 className="mb-2 font-bold">Services</h3>
            <ul className="text-sm sm:text-base">
              <li>Product Support</li>
              <li>Order Tracking</li>
              <li>Shipping & Delivery</li>
              <li>Returns</li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="mb-2 font-bold">Company</h3>
            <ul className="text-sm sm:text-base">
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="mb-2 font-bold">Legal</h3>
            <ul className="text-sm sm:text-base">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
