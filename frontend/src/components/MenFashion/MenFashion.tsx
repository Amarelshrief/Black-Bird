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
  preview1,
  preview10,
  preview11,
  preview12,
  preview3,
  preview5,
} from "@/assets";
import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";

function MenFashion() {
  const MEN_PRODUCTS = [
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
      image: preview3,
      title: "Brown Watch",
      price: 180,
      rate: 5,
      category: "Men Fashion",
    },
    {
      id: 3,
      image: preview5,
      title: "Brown Jacket",
      price: 180,
      rate: 5,
      category: "Men Fashion",
    },
    {
      id: 4,
      image: preview10,
      title: "Blue Jacket",
      price: 180,
      rate: 5,
      category: "Men Fashion",
    },
    {
      id: 5,
      image: preview11,
      title: "Hand Bag",
      price: 180,
      rate: 5,
      category: "Men Fashion",
    },
    {
      id: 6,
      image: preview12,
      title: "Blue T-shirt",
      price: 520,
      rate: 5,
      category: "Men Fashion",
    },
  ];

  return (
    <section className="mt-8" id="electronic">
      <div className="main-container">
        <div className="flex flex-col xl:flex-row items-center justify-between">
          <div className="flex flex-col w-full">
            <h2 className="mb-4 text-2xl font-bold text-primary">
              Men Products
            </h2>
            <div className="flex items-center gap-2 hover:translate-x-2 text-secondary hover:text-primary duration-300">
              <Button
                variant="ghost"
                className="text-md -p-2 hover:bg-transparent cursor-pointer hover:text-primary "
              >
                Wireless Speaker
              </Button>
            </div>
            <div className="flex items-center gap-2 hover:translate-x-2 text-secondary hover:text-primary duration-300">
              <Button
                variant="ghost"
                className="text-md -p-2 hover:bg-transparent cursor-pointer hover:text-primary"
              >
                Tablet
              </Button>
            </div>
            <div className="flex items-center gap-2 hover:translate-x-2 text-secondary hover:text-primary duration-300">
              <Button
                variant="ghost"
                className="text-md -p-2 hover:bg-transparent cursor-pointer hover:text-primary"
              >
                Smartphone
              </Button>
            </div>
            <div className="flex items-center gap-2 hover:translate-x-2 text-secondary hover:text-primary duration-300">
              <Button
                variant="ghost"
                className="text-md -p-2 hover:bg-transparent cursor-pointer hover:text-primary"
              >
                Laptop
              </Button>
            </div>
            <div className="flex items-center gap-2 hover:translate-x-2 text-secondary hover:text-primary duration-300">
              <Button
                variant="ghost"
                className="text-md -p-2 hover:bg-transparent cursor-pointer hover:text-primary"
              >
                iMac
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
                Drone
              </Button>
            </div>
            <div className="flex items-center gap-2 hover:translate-x-2 text-secondary hover:text-primary duration-300">
              <Button
                variant="ghost"
                className="text-md -p-2 hover:bg-transparent cursor-pointer hover:text-primary"
              >
                Apple
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
                {MEN_PRODUCTS.map((product) => (
                  <CarouselItem className="flex items-center border hover:border-[var(--primary)] duration-300 p-4 rounded-2xl sm:basis-1/3">
                    <div className="flex flex-col gap-2 p-4 rounded-xl h-full">
                      <div className="flex items-center">
                        <img
                          src={product.image}
                          alt="gaming"
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

export default MenFashion;
