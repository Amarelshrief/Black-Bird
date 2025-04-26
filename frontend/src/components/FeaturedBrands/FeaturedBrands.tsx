import { alibaba, levis, lotto, raymond, samsung } from "@/assets";

function FeaturedBrands() {
  return (
    <section className="my-8" id="brands">
      <div className="main-container">
        <div>
          <h2 className="text-2xl text-primary font-bold mb-4">
            Featured Brands
          </h2>
          <div className="flex items-center justify-center lg:justify-between gap-8 lg:gap-4 flex-wrap">
            <div>
              <div>
                <img
                  src={alibaba}
                  alt="alibaba"
                  className="hover:scale-110 duration-300 cursor-pointer rounded-xl"
                />
              </div>
            </div>
            <div>
              <div>
                <img
                  src={levis}
                  alt="levis"
                  className="hover:scale-110 duration-300 cursor-pointer rounded-xl"
                />
              </div>
            </div>
            <div>
              <div>
                <img
                  src={lotto}
                  alt="lotto"
                  className="hover:scale-110 duration-300 cursor-pointer rounded-xl"
                />
              </div>
            </div>
            <div>
              <div>
                <img
                  src={raymond}
                  alt="raymond"
                  className="hover:scale-110 duration-300 cursor-pointer rounded-xl"
                />
              </div>
            </div>
            <div>
              <div>
                <img
                  src={samsung}
                  alt="samsung"
                  className="hover:scale-110 duration-300 cursor-pointer rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedBrands;
