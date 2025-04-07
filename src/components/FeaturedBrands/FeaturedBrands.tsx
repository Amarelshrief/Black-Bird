import { alibaba, levis, lotto, raymond, samsung } from "@/assets";

function FeaturedBrands() {
  return (
    <section className="main-container m-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Featured Brands</h2>
        <div className="flex items-center justify-between gap-4">
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
    </section>
  );
}

export default FeaturedBrands;
