import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  preview13,
  preview14,
  preview15,
  preview16,
  preview2,
  preview4,
} from "@/assets";
import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";

function WomenFashion() {
  const WOMEN_PRODUCTS = [
    {
      id: 1,
      image: preview2,
      title: "Hand Bag",
      price: 180,
      rate: 5,
      category: "Women Fashion",
    },
    {
      id: 2,
      image: preview4,
      title: "Bracelet",
      price: 180,
      rate: 5,
      category: "Women Fashion",
    },
    {
      id: 3,
      image: preview13,
      title: "Blue Dress",
      price: 180,
      rate: 5,
      category: "Women Fashion",
    },
    {
      id: 4,
      image: preview14,
      title: "Red Blouse",
      price: 180,
      rate: 5,
      category: "Women Fashion",
    },
    {
      id: 5,
      image: preview15,
      title: "Yellow Dress",
      price: 180,
      rate: 5,
      category: "Women Fashion",
    },
    {
      id: 6,
      image: preview16,
      title: "Sunglasses",
      price: 20,
      rate: 5,
      category: "Women Fashion",
    },
  ];

  return (
    <section className="mt-8" id="electronic">
      <div className="main-container">
        <div className="flex flex-col xl:flex-row items-center justify-between">
          <div className="flex flex-col w-full">
            <h2 className="mb-4 text-2xl font-bold text-primary">
              Women Products
            </h2>
            <div className="flex items-center gap-2 hover:translate-x-2 text-secondary hover:text-primary duration-300">
              <Button
                variant="ghost"
                className="text-md -p-2 hover:bg-transparent cursor-pointer hover:text-primary "
              >
                Hand Bag
              </Button>
            </div>
            <div className="flex items-center gap-2 hover:translate-x-2 text-secondary hover:text-primary duration-300">
              <Button
                variant="ghost"
                className="text-md -p-2 hover:bg-transparent cursor-pointer hover:text-primary"
              >
                Dress
              </Button>
            </div>
            <div className="flex items-center gap-2 hover:translate-x-2 text-secondary hover:text-primary duration-300">
              <Button
                variant="ghost"
                className="text-md -p-2 hover:bg-transparent cursor-pointer hover:text-primary"
              >
                Skirt
              </Button>
            </div>
            <div className="flex items-center gap-2 hover:translate-x-2 text-secondary hover:text-primary duration-300">
              <Button
                variant="ghost"
                className="text-md -p-2 hover:bg-transparent cursor-pointer hover:text-primary"
              >
                Blouse
              </Button>
            </div>
            <div className="flex items-center gap-2 hover:translate-x-2 text-secondary hover:text-primary duration-300">
              <Button
                variant="ghost"
                className="text-md -p-2 hover:bg-transparent cursor-pointer hover:text-primary"
              >
                Bracelet
              </Button>
            </div>
            <div className="flex items-center gap-2 hover:translate-x-2 text-secondary hover:text-primary duration-300">
              <Button
                variant="ghost"
                className="text-md -p-2 hover:bg-transparent cursor-pointer hover:text-primary"
              >
                Game Controller
              </Button>
            </div>
            <div className="flex items-center gap-2 hover:translate-x-2 text-secondary hover:text-primary duration-300">
              <Button
                variant="ghost"
                className="text-md -p-2 hover:bg-transparent cursor-pointer hover:text-primary"
              >
                Sunglasses
              </Button>
            </div>
            <div className="flex items-center gap-2 hover:translate-x-2 text-secondary hover:text-primary duration-300">
              <Button
                variant="ghost"
                className="text-md -p-2 hover:bg-transparent cursor-pointer hover:text-primary"
              >
                Colored Dresses
              </Button>
            </div>
            <Link to="/products">
              <div className="-ml-3 flex items-center gap-2 hover:underline hover:translate-x-2 text-secondary hover:text-primary duration-300 mt-4">
                <Button
                  variant="ghost"
                  className="text-md -p-2 hover:bg-transparent cursor-pointer hover:text-primary"
                >
                  Browse All
                  <ChevronRight className="cursor-pointer" size={18} />
                </Button>
              </div>
            </Link>
          </div>
          <div className="max-w-full xl:max-w-[65rem] p-16">
            <Carousel className="flex">
              <CarouselContent className="ml-0 flex">
                {WOMEN_PRODUCTS.map((product) => (
                  <CarouselItem className="flex items-center border hover:border-[var(--primary)] duration-300 p-4 rounded-2xl sm:basis-1/3">
                    <div className="flex flex-col gap-2 p-4 rounded-xl h-full">
                      <div className="flex items-center">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="hover:scale-110 duration-300 cursor-pointer rounded-2xl w-full h-full"
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
                        <p className="text-md font-bold text-secondary">
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
      </div>
    </section>
  );
}

export default WomenFashion;
