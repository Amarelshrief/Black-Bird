import { Button } from "../ui/button";

function LongBanner() {
  return (
    <section className="main-container m-8">
      <div className="bg">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-6">
            <p className="tracking-widest text-4xl font-bold">
              GIFT <span className="text-[var(--primary)]">50% OFF</span>{" "}
              PERFECT STYLES
            </p>
            <p className="">
              Only until the end of this week. Terms and conditions apply
            </p>
            <div className="">
              <Button className="h-12 w-[9rem] text-lg text-[var(--input)] bg-[var(--primary)] hover:bg-[var(--primary)]/80 duration-300 cursor-pointer">
                Discover Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LongBanner;
