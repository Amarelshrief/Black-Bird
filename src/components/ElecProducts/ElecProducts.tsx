import { ChevronRight, Star } from "lucide-react";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { furniture, gaming, shirt, sports } from "@/assets";

function ElecProducts() {
  return (
    <section className="main-container m-8">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h2 className="mb-4 text-2xl font-bold">Electronic Products</h2>
          <div className="flex items-center gap-2 hover:translate-x-2 hover:text-[var(--muted)] duration-300">
            <Button
              variant="ghost"
              className="-p-2 hover:bg-transparent cursor-pointer hover:text-[var(--muted)]"
            >
              Wireless Speaker
            </Button>
          </div>
          <div className="flex items-center gap-2 hover:translate-x-2 hover:text-[var(--muted)] duration-300">
            <Button
              variant="ghost"
              className="-p-2 hover:bg-transparent cursor-pointer hover:text-[var(--muted)]"
            >
              Tablet
            </Button>
          </div>
          <div className="flex items-center gap-2 hover:translate-x-2 hover:text-[var(--muted)] duration-300">
            <Button
              variant="ghost"
              className="-p-2 hover:bg-transparent cursor-pointer hover:text-[var(--muted)]"
            >
              Smartphone
            </Button>
          </div>
          <div className="flex items-center gap-2 hover:translate-x-2 hover:text-[var(--muted)] duration-300">
            <Button
              variant="ghost"
              className="-p-2 hover:bg-transparent cursor-pointer hover:text-[var(--muted)]"
            >
              Laptop
            </Button>
          </div>
          <div className="flex items-center gap-2 hover:translate-x-2 hover:text-[var(--muted)] duration-300">
            <Button
              variant="ghost"
              className="-p-2 hover:bg-transparent cursor-pointer hover:text-[var(--muted)]"
            >
              iMac
            </Button>
          </div>
          <div className="flex items-center gap-2 hover:translate-x-2 hover:text-[var(--muted)] duration-300">
            <Button
              variant="ghost"
              className="-p-2 hover:bg-transparent cursor-pointer hover:text-[var(--muted)]"
            >
              Game Controller
            </Button>
          </div>
          <div className="flex items-center gap-2 hover:translate-x-2 hover:text-[var(--muted)] duration-300">
            <Button
              variant="ghost"
              className="-p-2 hover:bg-transparent cursor-pointer hover:text-[var(--muted)]"
            >
              Drone
            </Button>
          </div>
          <div className="flex items-center gap-2 hover:translate-x-2 hover:text-[var(--muted)] duration-300">
            <Button
              variant="ghost"
              className="-p-2 hover:bg-transparent cursor-pointer hover:text-[var(--muted)]"
            >
              Apple
            </Button>
          </div>
          <div className="-ml-3 flex items-center gap-2 hover:underline hover:translate-x-2 hover:text-[var(--muted)] duration-300 mt-4">
            <Button
              variant="ghost"
              className="-p-2 hover:bg-transparent cursor-pointer hover:text-[var(--muted)]"
            >
              Browse All
              <ChevronRight className="cursor-pointer" size={18} />
            </Button>
          </div>
        </div>
        <div className="max-w-[65rem]">
          <Carousel className="flex">
            <CarouselContent className="ml-0 flex">
              <CarouselItem className="flex items-center border hover:border-[var(--primary)] duration-300 p-4 rounded-2xl basis-full lg:basis-1/3">
                <div className="flex flex-col gap-2 p-4 rounded-xl h-full">
                  <div className="flex items-center">
                    <img
                      src={gaming}
                      alt="gaming"
                      className="hover:scale-110 duration-300 cursor-pointer rounded-2xl w-full h-full"
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
                      className="w-full text-[var(--secondary)] hover:bg-[var(--primary)]/80 duration-200 cursor-pointer"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="flex items-center border hover:border-[var(--primary)] duration-300 p-4 rounded-2xl basis-full lg:basis-1/3">
                <div className="flex flex-col gap-2 p-4 rounded-xl h-full">
                  <div className="flex items-center">
                    <img
                      src={sports}
                      alt="sports"
                      className="hover:scale-110 duration-300 cursor-pointer rounded-2xl w-full h-full"
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
                      className="w-full text-[var(--secondary)] hover:bg-[var(--primary)]/80 duration-200 cursor-pointer"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="flex items-center border hover:border-[var(--primary)] duration-300 p-4 rounded-2xl basis-full lg:basis-1/3">
                <div className="flex flex-col gap-2 p-4 rounded-xl h-full">
                  <div className="flex items-center">
                    <img
                      src={furniture}
                      alt="furniture"
                      className="hover:scale-110 duration-300 cursor-pointer rounded-2xl w-full h-full"
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
                      className="w-full text-[var(--secondary)] hover:bg-[var(--primary)]/80 duration-200 cursor-pointer"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="flex items-center border hover:border-[var(--primary)] duration-300 p-4 rounded-2xl basis-full lg:basis-1/3">
                <div className="flex flex-col gap-2 p-4 rounded-xl h-full">
                  <div className="flex items-center">
                    <img
                      src={gaming}
                      alt="gaming"
                      className="hover:scale-110 duration-300 cursor-pointer rounded-2xl w-full h-full"
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
                      className="w-full text-[var(--secondary)] hover:bg-[var(--primary)]/80 duration-200 cursor-pointer"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="flex items-center border hover:border-[var(--primary)] duration-300 p-4 rounded-2xl basis-full lg:basis-1/3">
                <div className="flex flex-col gap-2 p-4 rounded-xl h-full">
                  <div className="flex items-center">
                    <img
                      src={shirt}
                      alt="shirt"
                      className="hover:scale-110 duration-300 cursor-pointer rounded-2xl w-full h-full"
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
                      className="w-full text-[var(--secondary)] hover:bg-[var(--primary)]/80 duration-200 cursor-pointer"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="flex items-center border hover:border-[var(--primary)] duration-300 p-4 rounded-2xl basis-full lg:basis-1/3">
                <div className="flex flex-col gap-2 p-4 rounded-xl h-full">
                  <div className="flex items-center">
                    <img
                      src={shirt}
                      alt="shirt"
                      className="hover:scale-110 duration-300 cursor-pointer rounded-2xl w-full h-full"
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
                      className="w-full text-[var(--secondary)] hover:bg-[var(--primary)]/80 duration-200 cursor-pointer"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="flex items-center border hover:border-[var(--primary)] duration-300 p-4 rounded-2xl basis-full lg:basis-1/3">
                <div className="flex flex-col gap-2 p-4 rounded-xl h-full">
                  <div className="flex items-center">
                    <img
                      src={shirt}
                      alt="shirt"
                      className="hover:scale-110 duration-300 cursor-pointer rounded-2xl w-full h-full"
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
                      className="w-full text-[var(--secondary)] hover:bg-[var(--primary)]/80 duration-200 cursor-pointer"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="flex items-center border hover:border-[var(--primary)] duration-300 p-4 rounded-2xl basis-full lg:basis-1/3">
                <div className="flex flex-col gap-2 p-4 rounded-xl h-full">
                  <div className="flex items-center">
                    <img
                      src={shirt}
                      alt="shirt"
                      className="hover:scale-110 duration-300 cursor-pointer rounded-2xl w-full h-full"
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
                      className="w-full text-[var(--secondary)] hover:bg-[var(--primary)]/80 duration-200 cursor-pointer"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="flex items-center border hover:border-[var(--primary)] duration-300 p-4 rounded-2xl basis-full lg:basis-1/3">
                <div className="flex flex-col gap-2 p-4 rounded-xl h-full">
                  <div className="flex items-center">
                    <img
                      src={shirt}
                      alt="shirt"
                      className="hover:scale-110 duration-300 cursor-pointer rounded-2xl w-full h-full"
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
                      className="w-full text-[var(--secondary)] hover:bg-[var(--primary)]/80 duration-200 cursor-pointer"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="flex items-center border hover:border-[var(--primary)] duration-300 p-4 rounded-2xl basis-full lg:basis-1/3">
                <div className="flex flex-col gap-2 p-4 rounded-xl h-full">
                  <div className="flex items-center">
                    <img
                      src={shirt}
                      alt="shirt"
                      className="hover:scale-110 duration-300 cursor-pointer rounded-2xl w-full h-full"
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
                      className="w-full text-[var(--secondary)] hover:bg-[var(--primary)]/80 duration-200 cursor-pointer"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious variant="default" className="cursor-pointer" />
            <CarouselNext variant="default" className="cursor-pointer" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default ElecProducts;
