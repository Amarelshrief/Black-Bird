import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { Button } from "../ui/button";
import { Textarea } from "@/components/ui/textarea";
import { OctagonX } from "lucide-react";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "@/store/productSlice";

function CartItems() {
  const [totalAmt, setTotalAmt] = useState<number>(0);
  const productData = useAppSelector((state) => state.product.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let price: number = 0;
    productData.map((product) => {
      price += product.quantity * product.price;
      return price;
    });
    setTotalAmt(price);
  }, [productData]);
  return (
    <section className="mt-4">
      <div className="flex items-start justify-between gap-24">
        <div className="flex flex-col gap-4 w-3/4">
          {productData.map((product) => (
            <div className="flex items-center gap-4">
              <div>
                <img
                  src={`${import.meta.env.VITE_BASE_URL}${product.image.url}`}
                  alt={product.title}
                  className="w-[10rem] object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <div className="flex items-center justify-between w-full">
                  <p className="text-xl font-bold tracking-wide text-[var(--primary)]">
                    {product.title}
                  </p>
                  <OctagonX
                    onClick={() => dispatch(removeFromCart(product.id))}
                    className="text-[var(--secondary)] hover:text-[var(--primary)] cursor-pointer duration-200"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-md text-[var(--secondary)]">
                    ${product.price} x {product.quantity}
                  </p>
                  <p className="text-[var(--primary)] font-bold">
                    ${product.price * product.quantity}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    onClick={() =>
                      dispatch(
                        decrementQuantity({
                          id: product.id,
                          quantity: product.quantity,
                          title: product.title,
                          price: product.price,
                          description: product.description,
                          rate: product.rate,
                          category: product.category,
                          image: product.image,
                        })
                      )
                    }
                    variant={"outline"}
                    className="cursor-pointer text-[var(--secondary)] hover:bg-[var(--secondary)]/20 duration-200"
                  >
                    -
                  </Button>
                  <span className="text-[var(--primary)] text-lg">
                    {product.quantity}
                  </span>
                  <Button
                    onClick={() =>
                      dispatch(
                        incrementQuantity({
                          id: product.id,
                          quantity: product.quantity,
                          title: product.title,
                          price: product.price,
                          description: product.description,
                          rate: product.rate,
                          category: product.category,
                          image: product.image,
                        })
                      )
                    }
                    variant={"outline"}
                    className="cursor-pointer text-[var(--secondary)] hover:bg-[var(--secondary)]/20 duration-200"
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 w-1/4">
          <div className="flex items-center justify-between">
            <p className="text-[var(--muted)] text-lg">Total Amount:</p>
            <p className="text-lg font-bold text-[var(--primary)]">
              ${totalAmt}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <h4 className="text-md font-bold text-[var(--primary)]">
                Additional Comments
              </h4>
              <span className="bg-[var(--input)] rounded-2xl w-12 text-center text-[var(--muted)]">
                Note
              </span>
            </div>
            <div>
              <Textarea
                placeholder="Additional Comments"
                className="hover:border-primary"
              />
            </div>
            <div className="mt-4">
              <Input
                placeholder="Voucher"
                className="h-14 hover:border-primary"
              />
            </div>
            <div className="mt-4">
              <Button
                variant={"outline"}
                className="w-full text-md text-[var(--secondary)] hover:text-[var(--input)] duration-200 cursor-pointer"
              >
                Apply Voucher
              </Button>
            </div>
            <div className="mt-4">
              <h4 className="text-md font-bold text-[var(--primary)]">
                Shipping Estimates
              </h4>
            </div>
            <div className="mt-4">
              <Input
                placeholder="Country"
                className="h-14 hover:border-primary"
              />
            </div>
            <div className="mt-4">
              <Input
                placeholder="Zip Code"
                className="h-14 hover:border-primary"
              />
            </div>
            <div className="mt-4">
              <Button
                variant={"outline"}
                className="w-full text-md text-[var(--secondary)] hover:text-[var(--input)] duration-200 cursor-pointer"
              >
                Apply Voucher
              </Button>
            </div>
            <div className="mt-4">
              <Button className="w-full font-bold text-md text-[var(--input)] duration-200 cursor-pointer">
                Checkout Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartItems;
