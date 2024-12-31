export default function Banner() {
  return (
    <section className="mx-4 md:mx-5 lg:mx-6">
      <div className="bg-[#9538E2] text-white">
        <div className="mx-auto w-11/12 max-w-screen-xl">
          <div className="mx-auto max-w-screen-lg text-center">
            <h1 className="py-6 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="mx-auto max-w-prose text-sm sm:text-base">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <button className="my-8 rounded-full bg-white px-6 py-3 font-bold text-[#9538E2]">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className="relative p-4 md:p-0">
        <div className="mx-auto max-w-screen-lg rounded-2xl border-2 bg-white/20 p-4">
          <img
            src="/assets/banner.jpg"
            alt=""
            className="aspect-video rounded-2xl object-cover"
          />
        </div>
        <div className="absolute inset-0 -z-10 grid h-full w-full grid-rows-3">
          <div className="row-span-1 rounded-b-xl bg-[#9538E2]"></div>
          <div className="row-span-2"></div>
        </div>
        <div className="h-24"></div>
      </div>
    </section>
  );
}
