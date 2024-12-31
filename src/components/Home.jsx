import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "./Categories";
import { Helmet } from "react-helmet-async";

export default function Home() {
  const categories = useLoaderData();
  return (
    <>
      <Helmet>
        <title>Gadget Heaven</title>
      </Helmet>
      <section>
        <div className="mx-auto mb-24 w-11/12 max-w-screen-xl">
          <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">
            Explore Cutting-Edge Gadgets
          </h2>
          <div className="flex flex-col gap-6 sm:flex-row">
            <div>
              <div className="rounded-xl bg-white p-4">
                <Categories categories={categories} />
              </div>
            </div>

            <div className="flex-1">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
