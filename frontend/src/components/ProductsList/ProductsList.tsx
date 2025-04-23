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
import { Rating } from "react-simple-star-rating";
import {
  preview1,
  preview2,
  preview3,
  preview4,
  preview5,
  preview6,
  preview7,
  preview8,
  preview9,
} from "@/assets";

function ProductsList() {
  const PRODUCT_LIST = [
    {
      id: 1,
      image: preview1,
      title: "Black Jacket",
      price: 180,
      rate: 5,
      category: "Men Fashion",
    },
    {
      id: 2,
      image: preview2,
      title: "Hand Bag",
      price: 180,
      rate: 5,
      category: "Women Fashion",
    },
    {
      id: 3,
      image: preview3,
      title: "Brown Watch",
      price: 180,
      rate: 5,
      category: "Men Fashion",
    },
    {
      id: 4,
      image: preview4,
      title: "Bracelet",
      price: 180,
      rate: 5,
      category: "Women Fashion",
    },
    {
      id: 5,
      image: preview5,
      title: "Brown Jacket",
      price: 180,
      rate: 5,
      category: "Men Fashion",
    },
    {
      id: 6,
      image: preview6,
      title: "Headphone",
      price: 520,
      rate: 5,
      category: "Electronics",
    },
    {
      id: 7,
      image: preview7,
      title: "Xbox Controller",
      price: 980,
      rate: 5,
      category: "Electronics",
    },
    {
      id: 7,
      image: preview8,
      title: "Iphone 12 Pro",
      price: 1800,
      rate: 5,
      category: "Electronics",
    },
    {
      id: 7,
      image: preview9,
      title: "Keyboard",
      price: 180,
      rate: 5,
      category: "Electronics",
    },
  ];

  return (
    <section className="mt-8" id="products">
      <div className="main-container ">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-xl text-[var(--primary)] font-bold">
              Deals Of The Day
            </h2>
          </div>
          <div>
            <Link to={"/products"}>
              <div className="flex items-center gap-2 text-secondary hover:underline hover:translate-x-4 hover:text-primary duration-300">
                <Button
                  variant="ghost"
                  className="-p-2 text-secondary hover:bg-transparent cursor-pointer hover:text-primary"
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
              {PRODUCT_LIST.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="flex items-center border p-8 rounded-2xl sm:basis-1/3 lg:basis-1/5 hover:border hover:border-[var(--primary)] duration-300"
                >
                  <div className="flex flex-col gap-2 rounded-xl h-full">
                    <div className="pb-4 flex gap-2 items-center">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="hover:scale-110 duration-300 cursor-pointer rounded-2xl"
                      />
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <p className="text-[var(--secondary)] font-bold">
                        {product.title}
                      </p>
                      <p className="text-[var(--secondary)] font-bold">
                        ${product.price}
                      </p>
                      <p className="flex items-center justify-center">
                        <Rating
                          initialValue={product.rate}
                          className="relative bottom-[2px] w-full"
                          iconsCount={5}
                          readonly={true}
                          SVGclassName={`inline-block`}
                          allowFraction={true}
                          size={22}
                        />
                      </p>
                      <p className="text-md font-bold text-muted dark:text-secondary">
                        {product.category}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious variant="default" className="cursor-pointer" />
            <CarouselNext variant="default" className="cursor-pointer" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default ProductsList;
