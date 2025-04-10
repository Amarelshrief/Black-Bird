import { Button } from "../ui/button";
import ProductCard from "./ProductCard";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/API/Api";
import { Product } from "@/Pages/Products";

function ProductsComp() {
  const { data, isPending, isError } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  let content;

  if (isPending) {
    content = (
      <div className="flex items-center justify-center">
        <p className="text-xl text-[var(--secondary)] font-bold">
          Fetching Data...
        </p>
      </div>
    );
  }

  if (isError) {
    content = (
      <div className="flex items-center justify-center">
        <p className="text-xl text-[var(--secondary)] font-bold">
          Error Fetching Data...
        </p>
      </div>
    );
  }

  if (data) {
    content = data.data.map((product: Product) => (
      <ProductCard key={product.id} {...product} />
    ));
  }

  return (
    <section className="main-container m-8">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2 ">
          <h1 className="text-3xl font-bold text-[var(--primary)]">Products</h1>
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
      <div className="grid grid-cols-4 gap-8 mt-8">{content}</div>
    </section>
  );
}

export default ProductsComp;
