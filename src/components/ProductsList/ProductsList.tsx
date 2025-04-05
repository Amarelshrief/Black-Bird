import { ChevronRight, Star } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { shirt } from "@/assets";

function ProductsList() {
  return (
    <section className="main-container">
      <div className="flex items-center justify-between gap-4 mt-8">
        <div>
          <h2 className="text-xl text-[var(--primary)] font-bold">
            Deals Of The Day
          </h2>
        </div>
        <div>
          <Link to={"/products"}>
            <div className="flex items-center gap-2 hover:underline hover:translate-x-4 hover:text-[var(--muted)] duration-300">
              <Button
                variant="ghost"
                className="-p-2 hover:bg-transparent cursor-pointer hover:text-[var(--muted)]"
              >
                More Products
              </Button>
              <ChevronRight size={18} />
            </div>
          </Link>
        </div>
      </div>
      <div className="m-4">
        <Carousel className="flex">
          <CarouselContent className="ml-0 flex gap-2">
            <CarouselItem className="flex items-center border p-4 rounded-2xl basis-1/5 duration-300">
              <div className="flex flex-col gap-2 p-4 rounded-xl hover:border-[var(--primary)] duration-300 h-full">
                <div className="pb-4 flex gap-2 items-center">
                  <img
                    src={shirt}
                    alt="shirt"
                    className="hover:scale-110 duration-300 cursor-pointer rounded-2xl"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-[var(--secondary)] font-bold">T-shirt</p>
                  <p className="text-[var(--secondary)] font-bold">$180.00</p>
                  <div className="flex gap-2 items-center">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                  <Button
                    variant="outline"
                    className="w-full text-[] hover:bg-[var(--primary)]/80 duration-200 cursor-pointer"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="flex items-center border p-4 rounded-2xl basis-1/5 duration-300">
              <div className="flex flex-col gap-2 p-4 rounded-xl hover:border-[var(--primary)] duration-300 h-full">
                <div className="pb-4 flex gap-2 items-center">
                  <img
                    src={shirt}
                    alt="shirt"
                    className="hover:scale-110 duration-300 cursor-pointer rounded-2xl"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-[var(--secondary)] font-bold">T-shirt</p>
                  <p className="text-[var(--secondary)] font-bold">$180.00</p>
                  <div className="flex gap-2 items-center">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                  <Button
                    variant="outline"
                    className="w-full text-[] hover:bg-[var(--primary)]/80 duration-200 cursor-pointer"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="flex items-center border p-4 rounded-2xl basis-1/5 duration-300">
              <div className="flex flex-col gap-2 p-4 rounded-xl hover:border-[var(--primary)] duration-300 h-full">
                <div className="pb-4 flex gap-2 items-center">
                  <img
                    src={shirt}
                    alt="shirt"
                    className="hover:scale-110 duration-300 cursor-pointer rounded-2xl"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-[var(--secondary)] font-bold">T-shirt</p>
                  <p className="text-[var(--secondary)] font-bold">$180.00</p>
                  <div className="flex gap-2 items-center">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                  <Button
                    variant="outline"
                    className="w-full text-[] hover:bg-[var(--primary)]/80 duration-200 cursor-pointer"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="flex items-center border p-4 rounded-2xl basis-1/5 duration-300">
              <div className="flex flex-col gap-2 p-4 rounded-xl hover:border-[var(--primary)] duration-300 h-full">
                <div className="pb-4 flex gap-2 items-center">
                  <img
                    src={shirt}
                    alt="shirt"
                    className="hover:scale-110 duration-300 cursor-pointer rounded-2xl"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-[var(--secondary)] font-bold">T-shirt</p>
                  <p className="text-[var(--secondary)] font-bold">$180.00</p>
                  <div className="flex gap-2 items-center">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                  <Button
                    variant="outline"
                    className="w-full text-[] hover:bg-[var(--primary)]/80 duration-200 cursor-pointer"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="flex items-center border p-4 rounded-2xl basis-1/5 duration-300">
              <div className="flex flex-col gap-2 p-4 rounded-xl hover:border-[var(--primary)] duration-300 h-full">
                <div className="pb-4 flex gap-2 items-center">
                  <img
                    src={shirt}
                    alt="shirt"
                    className="hover:scale-110 duration-300 cursor-pointer rounded-2xl"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-[var(--secondary)] font-bold">T-shirt</p>
                  <p className="text-[var(--secondary)] font-bold">$180.00</p>
                  <div className="flex gap-2 items-center">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                  <Button
                    variant="outline"
                    className="w-full text-[] hover:bg-[var(--primary)]/80 duration-200 cursor-pointer"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="flex items-center border p-4 rounded-2xl basis-1/5 duration-300">
              <div className="flex flex-col gap-2 p-4 rounded-xl hover:border-[var(--primary)] duration-300 h-full">
                <div className="pb-4 flex gap-2 items-center">
                  <img
                    src={shirt}
                    alt="shirt"
                    className="hover:scale-110 duration-300 cursor-pointer rounded-2xl"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-[var(--secondary)] font-bold">T-shirt</p>
                  <p className="text-[var(--secondary)] font-bold">$180.00</p>
                  <div className="flex gap-2 items-center">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                  <Button
                    variant="outline"
                    className="w-full text-[] hover:bg-[var(--primary)]/80 duration-200 cursor-pointer"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="flex items-center border p-4 rounded-2xl basis-1/5 duration-300">
              <div className="flex flex-col gap-2 p-4 rounded-xl hover:border-[var(--primary)] duration-300 h-full">
                <div className="pb-4 flex gap-2 items-center">
                  <img
                    src={shirt}
                    alt="shirt"
                    className="hover:scale-110 duration-300 cursor-pointer rounded-2xl"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-[var(--secondary)] font-bold">T-shirt</p>
                  <p className="text-[var(--secondary)] font-bold">$180.00</p>
                  <div className="flex gap-2 items-center">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                  <Button
                    variant="outline"
                    className="w-full text-[] hover:bg-[var(--primary)]/80 duration-200 cursor-pointer"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="flex items-center border p-4 rounded-2xl basis-1/5 duration-300">
              <div className="flex flex-col gap-2 p-4 rounded-xl hover:border-[var(--primary)] duration-300 h-full">
                <div className="pb-4 flex gap-2 items-center">
                  <img
                    src={shirt}
                    alt="shirt"
                    className="hover:scale-110 duration-300 cursor-pointer rounded-2xl"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-[var(--secondary)] font-bold">T-shirt</p>
                  <p className="text-[var(--secondary)] font-bold">$180.00</p>
                  <div className="flex gap-2 items-center">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                  <Button
                    variant="outline"
                    className="w-full text-[] hover:bg-[var(--primary)]/80 duration-200 cursor-pointer"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="flex items-center border p-4 rounded-2xl basis-1/5 duration-300">
              <div className="flex flex-col gap-2 p-4 rounded-xl hover:border-[var(--primary)] duration-300 h-full">
                <div className="pb-4 flex gap-2 items-center">
                  <img
                    src={shirt}
                    alt="shirt"
                    className="hover:scale-110 duration-300 cursor-pointer rounded-2xl"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-[var(--secondary)] font-bold">T-shirt</p>
                  <p className="text-[var(--secondary)] font-bold">$180.00</p>
                  <div className="flex gap-2 items-center">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                  <Button
                    variant="outline"
                    className="w-full text-[] hover:bg-[var(--primary)]/80 duration-200 cursor-pointer"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="flex items-center border p-4 rounded-2xl basis-1/5 duration-300">
              <div className="flex flex-col gap-2 p-4 rounded-xl hover:border-[var(--primary)] duration-300 h-full">
                <div className="pb-4 flex gap-2 items-center">
                  <img
                    src={shirt}
                    alt="shirt"
                    className="hover:scale-110 duration-300 cursor-pointer rounded-2xl"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-[var(--secondary)] font-bold">T-shirt</p>
                  <p className="text-[var(--secondary)] font-bold">$180.00</p>
                  <div className="flex gap-2 items-center">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                  <Button
                    variant="outline"
                    className="w-full text-[] hover:bg-[var(--primary)]/80 duration-200 cursor-pointer"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="flex items-center border p-4 rounded-2xl basis-1/5 duration-300">
              <div className="flex flex-col gap-2 p-4 rounded-xl hover:border-[var(--primary)] duration-300 h-full">
                <div className="pb-4 flex gap-2 items-center">
                  <img
                    src={shirt}
                    alt="shirt"
                    className="hover:scale-110 duration-300 cursor-pointer rounded-2xl"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-[var(--secondary)] font-bold">T-shirt</p>
                  <p className="text-[var(--secondary)] font-bold">$180.00</p>
                  <div className="flex gap-2 items-center">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                  <Button
                    variant="outline"
                    className="w-full text-[] hover:bg-[var(--primary)]/80 duration-200 cursor-pointer"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="flex items-center border p-4 rounded-2xl basis-1/5 duration-300">
              <div className="flex flex-col gap-2 p-4 rounded-xl hover:border-[var(--primary)] duration-300 h-full">
                <div className="pb-4 flex gap-2 items-center">
                  <img
                    src={shirt}
                    alt="shirt"
                    className="hover:scale-110 duration-300 cursor-pointer rounded-2xl"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-[var(--secondary)] font-bold">T-shirt</p>
                  <p className="text-[var(--secondary)] font-bold">$180.00</p>
                  <div className="flex gap-2 items-center">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                  <Button
                    variant="outline"
                    className="w-full text-[] hover:bg-[var(--primary)]/80 duration-200 cursor-pointer"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="flex items-center border p-4 rounded-2xl basis-1/5 duration-300">
              <div className="flex flex-col gap-2 p-4 rounded-xl hover:border-[var(--primary)] duration-300 h-full">
                <div className="pb-4 flex gap-2 items-center">
                  <img
                    src={shirt}
                    alt="shirt"
                    className="hover:scale-110 duration-300 cursor-pointer rounded-2xl"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-[var(--secondary)] font-bold">T-shirt</p>
                  <p className="text-[var(--secondary)] font-bold">$180.00</p>
                  <div className="flex gap-2 items-center">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                  <Button
                    variant="outline"
                    className="w-full text-[] hover:bg-[var(--primary)]/80 duration-200 cursor-pointer"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="cursor-pointer" />
          <CarouselNext className="cursor-pointer" />
        </Carousel>
      </div>
    </section>
  );
}

export default ProductsList;
