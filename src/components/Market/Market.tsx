import { bannerImg5, bannerImg6 } from "@/assets";

function Market() {
  return (
    <section className="main-container m-8">
      <div className="flex flex-col w-full lg:flex-row items-center justify-between gap-4">
        <div className="relative w-full">
          <div className="w-full">
            <img
              src={bannerImg5}
              alt="final-reduction"
              className="w-full object-cover rounded-xl"
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-center gap-2 p-12">
            <p className="text-sm tracking-widest">Final Reduction</p>
            <p className="text-md lg:text-xl font-bold">Sale up to 20% Off</p>
            <p className="text-sm lg:text-md tracking-wider">
              Only From{" "}
              <span className="text-[var(--secondary)] text-xl">$270.00</span>
            </p>
          </div>
        </div>
        <div className="relative w-full">
          <div className="w-full">
            <img
              src={bannerImg6}
              alt="weekend-sale"
              className="w-full object-cover rounded-xl"
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-center gap-2 p-12  text-[var(--input)]">
            <p className="text-sm tracking-widest">Weekend Sale</p>
            <p className="text-md lg:text-xl font-bold">Fine Smart Speaker</p>
            <p className="text-sm lg:text-md tracking-wider">
              Starting at $185.00
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Market;
