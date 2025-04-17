import { alibaba, levis, lotto, raymond, samsung } from "@/assets";

function FeaturedBrands() {
  return (
    <section className="my-8" id="brands">
      <div className="main-container">
        <div>
          <h2 className="text-2xl font-bold mb-4">Featured Brands</h2>
          <div className="flex items-center justify-center lg:justify-between gap-8 lg:gap-4 flex-wrap">
            <div>
              <div>
                <img src={alibaba} alt="alibaba" />
              </div>
            </div>
            <div>
              <div>
                <img src={levis} alt="levis" />
              </div>
            </div>
            <div>
              <div>
                <img src={lotto} alt="lotto" className="rounded-xl" />
              </div>
            </div>
            <div>
              <div>
                <img src={raymond} alt="raymond" className="rounded-xl" />
              </div>
            </div>
            <div>
              <div>
                <img src={samsung} alt="samsung" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedBrands;
