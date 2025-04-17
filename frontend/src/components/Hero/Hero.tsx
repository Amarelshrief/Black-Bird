import { bannerImg1, bannerImg2, bannerImg3, bannerImg4 } from "@/assets";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

function Hero() {
  const [banner, setBanner] = useState(0);
  const banners = [bannerImg1, bannerImg4];
  function nextImg() {
    setBanner(banner === 1 ? 0 : (prev) => prev + 1);
  }
  useEffect(() => {
    const nextImgInterval = setInterval(nextImg, 5000);
    return () => clearInterval(nextImgInterval);
  }, [banners]);
  return (
    <section className="mt-16">
      <div className="main-container flex items-center justify-between bg-[var(--card)] p-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 overflow-x-hidden">
          <div className="w-full h-full overflow-x-hidden">
            <div className="">
              <div
                className="flex w-[70vw] h-full transition-transform duration-1000"
                // style={{ transform: `translateX(-${banner * 62.5}vw)` }}
              >
                <div className="relative">
                  <div className="xl:block hidden">
                    <img
                      src={banners[1]}
                      alt="banner-image"
                      className="rounded-md w-[130rem] h-[33rem] object-cover"
                    />
                  </div>
                  <div className="xl:absolute top-0 left-0 w-full h-full flex flex-col items-start justify-center gap-4 p-12">
                    <p className="text-2xl xl:text-3xl">LIFESTYLE COLLECTION</p>
                    <p className="text-3xl xl:text-4xl font-bold">WOMEN</p>
                    <p className="text-2xl xl:text-3xl">
                      SALE UP TO{" "}
                      <span className="text-[var(--primary)]">30% OFF</span>
                    </p>
                    <p className="text-2xl xl:text-3xl">
                      Get Free Shipping on orders over{" "}
                      <span className="text-[var(--primary)]">$99.00</span>
                    </p>
                    <div>
                      <Button className="h-12 w-[9rem] text-lg text-[var(--input)] bg-[var(--primary)] hover:bg-[var(--primary)]/80 duration-200 cursor-pointer">
                        Shop Now
                      </Button>
                    </div>
                  </div>
                </div>
                {/* <div className="relative">
                  <div>
                    <img
                      src={banners[1]}
                      alt="banner-image"
                      className="rounded-md w-[130rem] h-[33rem] object-cover"
                    />
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-center gap-4 p-12">
                    <p className="text-3xl">LIFESTYLE COLLECTION</p>
                    <p className="text-4xl font-bold">WOMEN</p>
                    <p className="text-3xl">
                      SALE UP TO{" "}
                      <span className="text-[var(--primary)]">30% OFF</span>
                    </p>
                    <p className="text-3xl">
                      Get Free Shipping on orders over{" "}
                      <span className="text-[var(--primary)]">$99.00</span>
                    </p>
                    <div>
                      <Button className="h-12 w-[9rem] text-lg bg-[var(--primary)] hover:bg-[var(--primary)]/80 duration-200 cursor-pointer">
                        Shop Now
                      </Button>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 w-full xl:w-[44rem]">
            <div className="relative w-full">
              <div>
                <img
                  src={bannerImg3}
                  alt="banner-image"
                  className="rounded-md h-[16rem] w-[44rem] object-cover"
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-center gap-2 p-12">
                <p className="text-lg">NEW ARRIVALS</p>
                <p className="text-xl font-bold">SUMMER</p>
                <p className="text-xl font-bold">
                  SALE <span className="text-[var(--primary)]">20% OFF</span>
                </p>
                <div className="flex items-center gap-2 hover:underline hover:translate-x-4 hover:text-[var(--secondary)] duration-300">
                  <Button
                    variant="ghost"
                    className="-p-2 hover:bg-transparent cursor-pointer hover:text-[var(--secondary)]"
                  >
                    Shop Now
                  </Button>
                  <ChevronRight size={18} />
                </div>
              </div>
            </div>
            <div className="relative w-full">
              <div>
                <img
                  src={bannerImg2}
                  alt="banner-image"
                  className="rounded-md h-[16rem] w-[44rem] object-cover"
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-center gap-2 p-12">
                <p className="text-md">GAMING 4K</p>
                <p className="text-lg font-bold">DESKTOPS &</p>
                <p className="text-lg font-bold">LAPTOPS</p>
                <div className="flex items-center gap-2 hover:underline hover:translate-x-4 hover:text-[var(--secondary)] duration-300">
                  <Button
                    variant="ghost"
                    className="-p-2 hover:bg-transparent cursor-pointer hover:text-[var(--secondary)]"
                  >
                    Shop Now
                  </Button>
                  <ChevronRight size={18} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
