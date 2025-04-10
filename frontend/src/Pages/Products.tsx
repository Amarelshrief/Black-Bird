import ProductsComp from "@/components/Products/ProductsComp";

export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  rate: number;
  category: string;
  image: {
    url: string;
  };
}

export interface Products {
  data: Product[];
}

function Products() {
  return (
    <>
      <ProductsComp />
    </>
  );
}

export default Products;
