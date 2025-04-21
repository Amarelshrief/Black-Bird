import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { Skeleton } from "../ui/skeleton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Rating } from "react-simple-star-rating";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/API/Api";
import { Product } from "@/Pages/Products";

function ProductsList() {
  const productQuery = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  let content;

  if (productQuery.isPending) {
    content = (
      <>
        <div className="flex items-start sm:hidden">
          <p className="text-xl text-[var(--secondary)] font-bold">
            Fetching Data...
          </p>
        </div>
        <div className="w-full hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </>
    );
  }

  if (productQuery.isError) {
    content = (
      <div className="flex items-start">
        <p className="text-xl text-[var(--secondary)] font-bold">
          Error Fetching Data.
        </p>
      </div>
    );
  }

  if (productQuery.data) {
    content = productQuery.data.data.map((product: Product) => (
      <CarouselItem
        key={product.id}
        className="flex items-center border p-8 rounded-2xl sm:basis-1/3 lg:basis-1/5 hover:border hover:border-[var(--primary)] duration-300"
      >
        <div className="flex flex-col gap-2 rounded-xl h-full">
          <div className="pb-4 flex gap-2 items-center">
            <img
              src={`${import.meta.env.VITE_BASE_URL}${product.image.url}`}
              alt={product.title}
              className="hover:scale-110 duration-300 cursor-pointer rounded-2xl"
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-[var(--secondary)] font-bold">{product.title}</p>
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
            <Button
              variant="outline"
              className="w-full text-[var(--secondary)] hover:bg-input duration-200 cursor-pointer"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </CarouselItem>
    ));
  }

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
            <CarouselContent className="ml-0 flex">{content}</CarouselContent>
            <CarouselPrevious variant="default" className="cursor-pointer" />
            <CarouselNext variant="default" className="cursor-pointer" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default ProductsList;

function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="md:h-[20rem] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="" />
        <Skeleton className="" />
      </div>
    </div>
  );
}
