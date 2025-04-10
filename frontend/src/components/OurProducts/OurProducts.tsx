import { camera, furniture, gaming, shirt, sports, toys } from "@/assets";
import { Button } from "../ui/button";

function OurProducts() {
  return (
    <section>
      <div className="main-container flex items center gap-16 mt-4">
        <div className="flex items-center justify-center gap-8 lg:gap-0 lg:justify-between w-full flex-wrap">
          <div className="flex flex-col gap-1 cursor-pointer hover:scale-110 duration-300 rounded-xl">
            <img
              src={toys}
              alt="toy"
              className="object-cover w-[13rem] h-full"
            />
            <Button
              variant="ghost"
              className="flex items-center justify-center text-lg font-bold hover:bg-[var(--primary)] hover:text-[var(--input)] duration-300 rounded-xl cursor-pointer"
            >
              Toys
            </Button>
          </div>
          <div className="flex flex-col gap-1 cursor-pointer hover:scale-110 duration-300 rounded-xl">
            <img
              src={sports}
              alt="sports"
              className="object-cover w-[13rem] h-full"
            />
            <Button
              variant="ghost"
              className="flex items-center justify-center text-lg font-bold hover:bg-[var(--primary)] hover:text-[var(--input)] duration-300 rounded-xl cursor-pointer"
            >
              Sports
            </Button>
          </div>
          <div className="flex flex-col gap-1 cursor-pointer hover:scale-110 duration-300 rounded-xl">
            <img
              src={gaming}
              alt="gaming"
              className="object-cover w-[13rem] h-full"
            />
            <Button
              variant="ghost"
              className="flex items-center justify-center text-lg font-bold hover:bg-[var(--primary)] hover:text-[var(--input)] duration-300 rounded-xl cursor-pointer"
            >
              Gaming
            </Button>
          </div>
          <div className="flex flex-col gap-1 cursor-pointer hover:scale-110 duration-300 rounded-xl">
            <img
              src={furniture}
              alt="furniture"
              className="object-cover w-[13rem] h-full"
            />
            <Button
              variant="ghost"
              className="flex items-center justify-center text-lg font-bold hover:bg-[var(--primary)] hover:text-[var(--input)] duration-300 rounded-xl cursor-pointer"
            >
              Furniture
            </Button>
          </div>
          <div className="flex flex-col gap-1 cursor-pointer hover:scale-110 duration-300 rounded-xl">
            <img
              src={shirt}
              alt="shirt"
              className="object-cover w-[13rem] h-full"
            />
            <Button
              variant="ghost"
              className="flex items-center justify-center text-lg font-bold hover:bg-[var(--primary)] hover:text-[var(--input)] duration-300 rounded-xl cursor-pointer"
            >
              Fashion
            </Button>
          </div>
          <div className="flex flex-col gap-1 cursor-pointer hover:scale-110 duration-300 rounded-xl">
            <img
              src={camera}
              alt="camera"
              className="object-cover w-[13rem] h-full"
            />
            <Button
              variant="ghost"
              className="flex items-center justify-center text-lg font-bold hover:bg-[var(--primary)] hover:text-[var(--input)] duration-300 rounded-xl cursor-pointer"
            >
              Cameras
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurProducts;
