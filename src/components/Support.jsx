import Heading from "./Heading";
import { Helmet } from "react-helmet-async";

export default function Support() {
  return (
    <>
      <Helmet>
        <title>Support | Gadget Heaven</title>
      </Helmet>
      <div>
        <Heading
          title="Support"
          description="We are here to help you. If you have any questions or concerns, please don't hesitate to contact us. We are committed to providing the best possible support for our customers."
        />
        <div className="mx-auto w-11/12 max-w-screen-xl">
          <div className="my-12">
            <h3 className="mb-4 text-xl font-bold">Contact Form</h3>
            <form>
              <div className="mb-4">
                <label className="mb-2 block">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded border p-2"
                />
              </div>
              <div className="mb-4">
                <label className="mb-2 block">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded border p-2"
                />
              </div>
              <div className="mb-4">
                <label className="mb-2 block">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full rounded border p-2"
                ></textarea>
              </div>
              <button
                onClick={(event) => {
                  event.preventDefault();
                }}
                type="submit"
                className="rounded-full bg-[#9538E2] px-4 py-2 text-white"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="my-12">
            <h3 className="mb-4 text-xl font-bold">FAQ</h3>

            <div className="join join-vertical w-full">
              <div className="collapse join-item collapse-arrow border border-base-300">
                <input type="radio" name="my-accordion-4" defaultChecked />
                <div className="collapse-title text-lg font-medium">
                  What is your return policy?
                </div>
                <div className="collapse-content">
                  <p>
                    We offer a 30-day return policy. Please contact us to
                    initiate a return.
                  </p>
                </div>
              </div>
              <div className="collapse join-item collapse-arrow border border-base-300">
                <input type="radio" name="my-accordion-4" defaultChecked />
                <div className="collapse-title text-lg font-medium">
                  How do I track my order?
                </div>
                <div className="collapse-content">
                  <p>You can track your order by logging into your account.</p>
                </div>
              </div>
              <div className="collapse join-item collapse-arrow border border-base-300">
                <input type="radio" name="my-accordion-4" defaultChecked />
                <div className="collapse-title text-lg font-medium">
                  What payment methods do you accept?
                </div>
                <div className="collapse-content">
                  <p>We accept all major credit cards.</p>
                </div>
              </div>
              <div className="collapse join-item collapse-arrow border border-base-300">
                <input type="radio" name="my-accordion-4" defaultChecked />
                <div className="collapse-title text-lg font-medium">
                  How long does shipping take?
                </div>
                <div className="collapse-content">
                  <p>
                    Shipping time depends on your location. However, it usually
                    takes 3-5 business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
