import { Button } from "../ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import ProductCard from "./ProductCard";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/API/Api";
import { Product } from "@/Pages/Products";

function ProductsComp() {
  const productQuery = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

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
        <div className="flex items-center gap-4">
          <div>
            <Button className="h-10 text-lg text-[var(--input)] bg-[var(--primary)] hover:bg-[var(--primary)]/80 duration-200 cursor-pointer">
              All Categories
            </Button>
          </div>
          <div>
            <Button className="h-10 text-lg text-[var(--input)] bg-[var(--primary)] hover:bg-[var(--primary)]/80 duration-200 cursor-pointer">
              Men Category
            </Button>
          </div>
          <div>
            <Button className="h-10 text-lg text-[var(--input)] bg-[var(--primary)] hover:bg-[var(--primary)]/80 duration-200 cursor-pointer">
              Women Category
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
