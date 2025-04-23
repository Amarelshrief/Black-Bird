import { Button } from "../ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import ProductCard from "./ProductCard";
import { useQuery } from "@tanstack/react-query";
import { Product } from "@/Pages/Products";
import axios from "axios";
import { useEffect, useState } from "react";

function ProductsComp() {
  const url = "http://localhost:1337/api/products?populate=*";
  const [products, setProducts] = useState(url);
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const productQuery = useQuery({
    queryKey: ["products"],
    async queryFn() {
      const data = await axios.get(products);
      return data.data;
    },
  });

  useEffect(() => {
    productQuery.refetch();
  }, [products]);

  function handleAllProducts() {
    setProducts("http://localhost:1337/api/products?populate=*");
    setActive1(true);
    setActive2(false);
    setActive3(false);
    setActive4(false);
  }

  function handleMenProducts() {
    setProducts(url + "&filters[category][$eq]=men");
    setActive2(true);
    setActive1(false);
    setActive3(false);
    setActive4(false);
  }
  function handleWomenProducts() {
    setProducts(url + "&filters[category][$eq]=women");
    setActive3(true);
    setActive1(false);
    setActive2(false);
    setActive4(false);
  }

  function handleElectronicsProducts() {
    setProducts(url + "&filters[category][$eq]=electronics");
    setActive4(true);
    setActive1(false);
    setActive2(false);
    setActive3(false);
  }

  let content;

  if (productQuery.isPending) {
    content = (
      <>
        <div className="flex items-center justify-center md:hidden">
          <p className="text-xl text-[var(--secondary)] font-bold">
            Fetching Data...
          </p>
        </div>
        <>
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </>
      </>
    );
  }

  if (productQuery.isError) {
    content = (
      <div className="flex items-center justify-center md:items-start md:justify-start">
        <p className="text-xl text-[var(--secondary)] font-bold">
          Error Fetching Data...
        </p>
      </div>
    );
  }

  if (productQuery.data) {
    content = productQuery.data.data.map((product: Product) => (
      <ProductCard key={product.id} {...product} />
    ));
  }

  return (
    <section className="main-container m-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col gap-2 ">
          <h1 className="flex items-center justify-center md:justify-start text-3xl font-bold text-[var(--primary)]">
            Products
          </h1>
          <p className="text-sm text-[var(--secondary)]">
            All our new arrivals in a exclusive brand selection
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div>
            <Button
              variant={active1 ? "default" : "outline"}
              onClick={handleAllProducts}
              className={`h-10 text-lg ${
                active1
                  ? "text-input dark:text-card-foreground"
                  : "hover:bg-input text-secondary hover:text-primary"
              }  duration-200 cursor-pointer`}
            >
              All Categories
            </Button>
          </div>
          <div>
            <Button
              variant={active2 ? "default" : "outline"}
              onClick={handleMenProducts}
              className={`h-10 text-lg ${
                active2
                  ? "text-input dark:text-card-foreground"
                  : "hover:bg-input text-secondary hover:text-primary"
              }  duration-200 cursor-pointer`}
            >
              Men Category
            </Button>
          </div>
          <div>
            <Button
              variant={active3 ? "default" : "outline"}
              onClick={handleWomenProducts}
              className={`h-10 text-lg ${
                active3
                  ? "text-input dark:text-card-foreground"
                  : "hover:bg-input text-secondary hover:text-primary"
              }  duration-200 cursor-pointer`}
            >
              Women Category
            </Button>
          </div>
          <div>
            <Button
              variant={active4 ? "default" : "outline"}
              onClick={handleElectronicsProducts}
              className={`h-10 text-lg ${
                active4
                  ? "text-input dark:text-card-foreground"
                  : "hover:bg-input text-secondary hover:text-primary"
              }  duration-200 cursor-pointer`}
            >
              Electronics Category
            </Button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
        {content}
      </div>
    </section>
  );
}

export default ProductsComp;

function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="md:h-[25rem] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="" />
        <Skeleton className="" />
      </div>
    </div>
  );
}
