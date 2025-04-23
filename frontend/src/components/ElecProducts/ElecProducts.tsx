import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { elec1, elec2, elec3, elec4, elec5, elec6, elec7 } from "@/assets";
import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";

function ElecProducts() {
  const ELEC_PRODUCTS = [
    {
      id: 1,
      image: elec1,
      title: "Laptop",
      price: 180,
      rate: 5,
      category: "Electronics",
    },
    {
      id: 2,
      image: elec2,
      title: "Headphone",
      price: 180,
      rate: 5,
      category: "Electronics",
    },
    {
      id: 3,
      image: elec3,
      title: "Cover iphone",
      price: 180,
      rate: 5,
      category: "Electronics",
    },
    {
      id: 4,
      image: elec4,
      title: "Iphone xs Max",
      price: 180,
      rate: 5,
      category: "Electronics",
    },
    {
      id: 5,
      image: elec5,
      title: "Camera",
      price: 180,
      rate: 5,
      category: "Electronics",
    },
    {
      id: 6,
      image: elec6,
      title: "Airpods ",
      price: 180,
      rate: 5,
      category: "Electronics",
    },
    {
      id: 7,
      image: elec7,
      title: "Apple Watch",
      price: 180,
      rate: 5,
      category: "Electronics",
    },
  ];

  return (
    <section className="mt-8" id="electronic">
      <div className="main-container">
        <div className="flex flex-col xl:flex-row items-center justify-between">
          <div className="flex flex-col w-full">
            <h2 className="mb-4 text-2xl font-bold text-primary">
              Electronic Products
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
            <div className="-ml-3 flex items-center gap-2 hover:underline hover:translate-x-2 text-secondary hover:text-primary duration-300 mt-4">
              <Link to={"/products"}>
                <Button
                  variant="ghost"
                  className="text-md -p-2 hover:bg-transparent cursor-pointer hover:text-primary"
                >
                  Browse All
                  <ChevronRight className="cursor-pointer" size={18} />
                </Button>
              </Link>
            </div>
          </div>
          <div className="max-w-full xl:max-w-[65rem] p-16">
            <Carousel className="flex">
              <CarouselContent className="ml-0 flex">
                {ELEC_PRODUCTS.map((product) => (
                  <CarouselItem
                    key={product.id}
                    className="flex items-center border hover:border-[var(--primary)] duration-300 p-4 rounded-2xl sm:basis-1/3"
                  >
                    <div
                      key={product.id}
                      className="flex flex-col gap-2 p-4 rounded-xl h-full"
                    >
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

export default ElecProducts;
