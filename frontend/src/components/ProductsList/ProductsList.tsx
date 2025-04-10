import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { gaming } from "@/assets";
import { Rating } from "react-simple-star-rating";

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
      <div className="mt-4 max-w-full p-8 sm:p-16 lg:p-0">
        <Carousel className="">
          <CarouselContent className="ml-0 flex">
            <CarouselItem className="flex items-center border p-8 rounded-2xl sm:basis-1/3 lg:basis-1/5 hover:border hover:border-[var(--primary)] duration-300">
              <div className="flex flex-col gap-2 rounded-xl h-full">
                <div className="pb-4 flex gap-2 items-center">
                  <img
                    src={gaming}
                    alt="shirt"
                    className="hover:scale-110 duration-300 cursor-pointer rounded-2xl"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-[var(--secondary)] font-bold">T-shirt</p>
                  <p className="text-[var(--secondary)] font-bold">$180.00</p>
                  <p className="flex items-center justify-center">
                    <Rating
                      initialValue={5}
                      className="relative bottom-[2px] w-full"
                      iconsCount={5}
                      readonly={true}
                      SVGclassName={`inline-block`}
                      allowFraction={true}
                      size={22}
                    />
                  </p>
                  <Button
                    variant="outline"
                    className="w-full text-[var(--secondary)] hover:bg-[var(--primary)]/80 duration-200 cursor-pointer"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="flex items-center p-8 border rounded-2xl sm:basis-1/3 lg:basis-1/5 hover;border hover:border-[var(--primary)]  duration-300">
              <div className="flex flex-col gap-2 rounded-xl h-full">
                <div className="pb-4 flex gap-2 items-center">
                  <img
                    src={gaming}
                    alt="shirt"
                    className="hover:scale-110 duration-300 cursor-pointer rounded-2xl"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-[var(--secondary)] font-bold">T-shirt</p>
                  <p className="text-[var(--secondary)] font-bold">$180.00</p>
                  <p className="flex items-center justify-center">
                    <Rating
                      initialValue={5}
                      className="relative bottom-[2px] w-full"
                      iconsCount={5}
                      readonly={true}
                      SVGclassName={`inline-block`}
                      allowFraction={true}
                      size={22}
                    />
                  </p>
                  <Button
                    variant="outline"
                    className="w-full text-[var(--secondary)] hover:bg-[var(--primary)]/80 duration-200 cursor-pointer"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="flex items-center border p-8 rounded-2xl sm:basis-1/3 lg:basis-1/5 hover;border hover:border-[var(--primary)]  duration-300">
              <div className="flex flex-col gap-2 rounded-xl h-full">
                <div className="pb-4 flex gap-2 items-center">
                  <img
                    src={gaming}
                    alt="shirt"
                    className="hover:scale-110 duration-300 cursor-pointer rounded-2xl"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-[var(--secondary)] font-bold">T-shirt</p>
                  <p className="text-[var(--secondary)] font-bold">$180.00</p>
                  <p className="flex items-center justify-center">
                    <Rating
                      initialValue={5}
                      className="relative bottom-[2px] w-full"
                      iconsCount={5}
                      readonly={true}
                      SVGclassName={`inline-block`}
                      allowFraction={true}
                      size={22}
                    />
                  </p>
                  <Button
                    variant="outline"
                    className="w-full text-[var(--secondary)] hover:bg-[var(--primary)]/80 duration-200 cursor-pointer"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="flex items-center border p-8 rounded-2xl sm:basis-1/3 lg:basis-1/5 hover;border hover:border-[var(--primary)]  duration-300">
              <div className="flex flex-col gap-2 rounded-xl h-full">
                <div className="pb-4 flex gap-2 items-center">
                  <img
                    src={gaming}
                    alt="shirt"
                    className="hover:scale-110 duration-300 cursor-pointer rounded-2xl"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-[var(--secondary)] font-bold">T-shirt</p>
                  <p className="text-[var(--secondary)] font-bold">$180.00</p>
                  <p className="flex items-center justify-center">
                    <Rating
                      initialValue={5}
                      className="relative bottom-[2px] w-full"
                      iconsCount={5}
                      readonly={true}
                      SVGclassName={`inline-block`}
                      allowFraction={true}
                      size={22}
                    />
                  </p>
                  <Button
                    variant="outline"
                    className="w-full text-[var(--secondary)] hover:bg-[var(--primary)]/80 duration-200 cursor-pointer"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="flex items-center border p-8 rounded-2xl sm:basis-1/3 lg:basis-1/5 hover;border hover:border-[var(--primary)]  duration-300">
              <div className="flex flex-col gap-2 rounded-xl h-full">
                <div className="pb-4 flex gap-2 items-center">
                  <img
                    src={gaming}
                    alt="shirt"
                    className="hover:scale-110 duration-300 cursor-pointer rounded-2xl"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-[var(--secondary)] font-bold">T-shirt</p>
                  <p className="text-[var(--secondary)] font-bold">$180.00</p>
                  <p className="flex items-center justify-center">
                    <Rating
                      initialValue={5}
                      className="relative bottom-[2px] w-full"
                      iconsCount={5}
                      readonly={true}
                      SVGclassName={`inline-block`}
                      allowFraction={true}
                      size={22}
                    />
                  </p>
                  <Button
                    variant="outline"
                    className="w-full text-[var(--secondary)] hover:bg-[var(--primary)]/80 duration-200 cursor-pointer"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="flex items-center border p-8 rounded-2xl sm:basis-1/3 lg:basis-1/5 hover;border hover:border-[var(--primary)]  duration-300">
              <div className="flex flex-col gap-2 rounded-xl h-full">
                <div className="pb-4 flex gap-2 items-center">
                  <img
                    src={gaming}
                    alt="shirt"
                    className="hover:scale-110 duration-300 cursor-pointer rounded-2xl"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-[var(--secondary)] font-bold">T-shirt</p>
                  <p className="text-[var(--secondary)] font-bold">$180.00</p>
                  <p className="flex items-center justify-center">
                    <Rating
                      initialValue={5}
                      className="relative bottom-[2px] w-full"
                      iconsCount={5}
                      readonly={true}
                      SVGclassName={`inline-block`}
                      allowFraction={true}
                      size={22}
                    />
                  </p>
                  <Button
                    variant="outline"
                    className="w-full text-[var(--secondary)] hover:bg-[var(--primary)]/80 duration-200 cursor-pointer"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="flex items-center border p-8 rounded-2xl sm:basis-1/3 lg:basis-1/5 hover;border hover:border-[var(--primary)]  duration-300">
              <div className="flex flex-col gap-2 rounded-xl h-full">
                <div className="pb-4 flex gap-2 items-center">
                  <img
                    src={gaming}
                    alt="shirt"
                    className="hover:scale-110 duration-300 cursor-pointer rounded-2xl"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-[var(--secondary)] font-bold">T-shirt</p>
                  <p className="text-[var(--secondary)] font-bold">$180.00</p>
                  <p className="flex items-center justify-center">
                    <Rating
                      initialValue={5}
                      className="relative bottom-[2px] w-full"
                      iconsCount={5}
                      readonly={true}
                      SVGclassName={`inline-block`}
                      allowFraction={true}
                      size={22}
                    />
                  </p>
                  <Button
                    variant="outline"
                    className="w-full text-[var(--secondary)] hover:bg-[var(--primary)]/80 duration-200 cursor-pointer"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="flex items-center border p-8 rounded-2xl sm:basis-1/3 lg:basis-1/5 hover;border hover:border-[var(--primary)]  duration-300">
              <div className="flex flex-col gap-2 rounded-xl h-full">
                <div className="pb-4 flex gap-2 items-center">
                  <img
                    src={gaming}
                    alt="shirt"
                    className="hover:scale-110 duration-300 cursor-pointer rounded-2xl"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-[var(--secondary)] font-bold">T-shirt</p>
                  <p className="text-[var(--secondary)] font-bold">$180.00</p>
                  <p className="flex items-center justify-center">
                    <Rating
                      initialValue={5}
                      className="relative bottom-[2px] w-full"
                      iconsCount={5}
                      readonly={true}
                      SVGclassName={`inline-block`}
                      allowFraction={true}
                      size={22}
                    />
                  </p>
                  <Button
                    variant="outline"
                    className="w-full text-[var(--secondary)] hover:bg-[var(--primary)]/80 duration-200 cursor-pointer"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="flex items-center border p-8 rounded-2xl sm:basis-1/3 lg:basis-1/5 hover;border hover:border-[var(--primary)]  duration-300">
              <div className="flex flex-col gap-2 rounded-xl h-full">
                <div className="pb-4 flex gap-2 items-center">
                  <img
                    src={gaming}
                    alt="shirt"
                    className="hover:scale-110 duration-300 cursor-pointer rounded-2xl"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-[var(--secondary)] font-bold">T-shirt</p>
                  <p className="text-[var(--secondary)] font-bold">$180.00</p>
                  <p className="flex items-center justify-center">
                    <Rating
                      initialValue={5}
                      className="relative bottom-[2px] w-full"
                      iconsCount={5}
                      readonly={true}
                      SVGclassName={`inline-block`}
                      allowFraction={true}
                      size={22}
                    />
                  </p>
                  <Button
                    variant="outline"
                    className="w-full text-[var(--secondary)] hover:bg-[var(--primary)]/80 duration-200 cursor-pointer"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="flex items-center border p-8 rounded-2xl sm:basis-1/3 lg:basis-1/5 hover;border hover:border-[var(--primary)]  duration-300">
              <div className="flex flex-col gap-2 rounded-xl h-full">
                <div className="pb-4 flex gap-2 items-center">
                  <img
                    src={gaming}
                    alt="shirt"
                    className="hover:scale-110 duration-300 cursor-pointer rounded-2xl"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-[var(--secondary)] font-bold">T-shirt</p>
                  <p className="text-[var(--secondary)] font-bold">$180.00</p>
                  <p className="flex items-center justify-center">
                    <Rating
                      initialValue={5}
                      className="relative bottom-[2px] w-full"
                      iconsCount={5}
                      readonly={true}
                      SVGclassName={`inline-block`}
                      allowFraction={true}
                      size={22}
                    />
                  </p>
                  <Button
                    variant="outline"
                    className="w-full text-[var(--secondary)] hover:bg-[var(--primary)]/80 duration-200 cursor-pointer"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="flex items-center border p-8 rounded-2xl sm:basis-1/3 lg:basis-1/5 hover;border hover:border-[var(--primary)]  duration-300">
              <div className="flex flex-col gap-2 rounded-xl h-full">
                <div className="pb-4 flex gap-2 items-center">
                  <img
                    src={gaming}
                    alt="shirt"
                    className="hover:scale-110 duration-300 cursor-pointer rounded-2xl"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-[var(--secondary)] font-bold">T-shirt</p>
                  <p className="text-[var(--secondary)] font-bold">$180.00</p>
                  <p className="flex items-center justify-center">
                    <Rating
                      initialValue={5}
                      className="relative bottom-[2px] w-full"
                      iconsCount={5}
                      readonly={true}
                      SVGclassName={`inline-block`}
                      allowFraction={true}
                      size={22}
                    />
                  </p>
                  <Button
                    variant="outline"
                    className="w-full text-[var(--secondary)] hover:bg-[var(--primary)]/80 duration-200 cursor-pointer"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="flex items-center border p-8 rounded-2xl sm:basis-1/3 lg:basis-1/5 hover;border hover:border-[var(--primary)]  duration-300">
              <div className="flex flex-col gap-2 rounded-xl h-full">
                <div className="pb-4 flex gap-2 items-center">
                  <img
                    src={gaming}
                    alt="shirt"
                    className="hover:scale-110 duration-300 cursor-pointer rounded-2xl"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-[var(--secondary)] font-bold">T-shirt</p>
                  <p className="text-[var(--secondary)] font-bold">$180.00</p>
                  <p className="flex items-center justify-center">
                    <Rating
                      initialValue={5}
                      className="relative bottom-[2px] w-full"
                      iconsCount={5}
                      readonly={true}
                      SVGclassName={`inline-block`}
                      allowFraction={true}
                      size={22}
                    />
                  </p>
                  <Button
                    variant="outline"
                    className="w-full text-[var(--secondary)] hover:bg-[var(--primary)]/80 duration-200 cursor-pointer"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="flex items-center border p-8 rounded-2xl sm:basis-1/3 lg:basis-1/5 hover;border hover:border-[var(--primary)]  duration-300">
              <div className="flex flex-col gap-2 rounded-xl h-full">
                <div className="pb-4 flex gap-2 items-center">
                  <img
                    src={gaming}
                    alt="shirt"
                    className="hover:scale-110 duration-300 cursor-pointer rounded-2xl"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-[var(--secondary)] font-bold">T-shirt</p>
                  <p className="text-[var(--secondary)] font-bold">$180.00</p>
                  <p className="flex items-center justify-center">
                    <Rating
                      initialValue={5}
                      className="relative bottom-[2px] w-full"
                      iconsCount={5}
                      readonly={true}
                      SVGclassName={`inline-block`}
                      allowFraction={true}
                      size={22}
                    />
                  </p>
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
    </section>
  );
}

export default ProductsList;
