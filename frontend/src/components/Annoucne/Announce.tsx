import { announce1, announce2, announce3 } from "@/assets";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

function Announce() {
  return (
    <section className="mt-8" id="announce">
      <div className="main-container">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="relative">
            <div className="w-full">
              <img
                src={announce1}
                alt="ski-clothes"
                className="w-full object-cover rounded-xl"
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-center gap-2 p-12">
              <p className="text-sm tracking-widest">NEW ARRIVALS</p>
              <p className="text-md md:text-xl font-bold">SKI CLOTHES SALE</p>
              <p className="text-sm md:text-md tracking-wider text-[var(--secondary)]">
                SALE UP TO 35% OFF
              </p>
              <div className="flex items-center gap-2 hover:underline hover:translate-x-2 hover:text-[var(--secondary)] duration-300">
                <Button
                  variant="ghost"
                  className="-p-2 hover:bg-transparent cursor-pointer hover:text-[var(--secondary)]"
                >
                  Shop Now
                </Button>
                <ChevronRight className="cursor-pointer" size={18} />
              </div>
            </div>
          </div>
          <div className="relative text-[var(--input)]">
            <div className="w-full">
              <img
                src={announce2}
                alt="trending-women"
                className="w-full object-cover rounded-xl"
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-center gap-2 p-12">
              <p className="text-sm tracking-widest">BEST SELLER</p>
              <p className="text-md md:text-xl font-bold">TRENDING WOMEN</p>
              <p className="text-sm md:text-md tracking-wider">SUNGLASSES</p>
              <div className="flex items-center gap-2 hover:underline hover:translate-x-2 hover:text-[var(--input)] duration-300">
                <Button
                  variant="ghost"
                  className="-p-2 hover:bg-transparent cursor-pointer hover:text-[var(--input)]"
                >
                  Shop Now
                </Button>
                <ChevronRight className="cursor-pointer" size={18} />
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="w-full">
              <img
                src={announce3}
                alt="new-bags"
                className="w-full object-cover rounded-xl"
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-center gap-2 p-12">
              <p className="text-sm tracking-widest">NEW ARRIVALS</p>
              <p className="text-md md:text-xl font-bold">NEW LATEST BAG</p>
              <p className="text-sm md:text-md tracking-wider text-[var(--secondary)]">
                COLLECTION
              </p>
              <div className="flex items-center gap-2 hover:underline hover:translate-x-2 hover:text-[var(--secondary)] duration-300">
                <Button
                  variant="ghost"
                  className="-p-2 hover:bg-transparent cursor-pointer hover:text-[var(--secondary)]"
                >
                  Shop Now
                </Button>
                <ChevronRight className="cursor-pointer" size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Announce;
